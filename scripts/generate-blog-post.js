const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const ROOT_DIR = path.resolve(__dirname, "..");
const TOPICS_PATH = path.join(ROOT_DIR, "content", "topics.json");
const BLOG_DIR = path.join(ROOT_DIR, "content", "blog");
const BANNED_PHRASES_PATH = path.join(__dirname, "banned-phrases.json");
const DEFAULT_MODEL = "gemini-2.5-flash";
const DEFAULT_FALLBACK_MODELS = ["gemini-3.5-flash", "gemini-2.5-flash-lite"];
const BLOG_RESPONSE_SCHEMA = {
  type: "object",
  properties: {
    title: { type: "string" },
    description: { type: "string" },
    slug: { type: "string" },
    body: { type: "string" },
    faq: {
      type: "array",
      items: {
        type: "object",
        properties: {
          question: { type: "string" },
          answer: { type: "string" },
        },
        required: ["question", "answer"],
      },
    },
  },
  required: ["title", "description", "slug", "body", "faq"],
};

const serviceLabels = {
  "artificial-intelligence": "AI automation",
  "cloud-storage": "cloud storage",
  "devops-services": "DevOps",
  "digital-marketing": "digital marketing",
  "innovation-product-development-consulting": "product development consulting",
  "it-software-architecture-consulting": "software architecture consulting",
  "mobile-application-development": "mobile app development",
  "staffing-services": "staffing",
  "web-design-development": "web design and development",
};

const serviceImages = {
  "artificial-intelligence": "/assets/services/AI/AI.jpg",
  "cloud-storage": "/assets/services/cloud-storage/cloud-storage.png",
  "devops-services": "/assets/services/cloud-storage/devops.jpg",
  "digital-marketing": "/assets/services/cloud-storage/digital-marketing.jpg",
  "mobile-application-development":
    "/assets/services/cloud-storage/mobile-application.jpg",
  "staffing-services": "/assets/services/cloud-storage/staffing.jpg",
  "web-design-development": "/assets/services/service-title-hero-bg.png",
};

function readJson(filePath, fallback) {
  if (!fs.existsSync(filePath)) {
    return fallback;
  }

  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function loadEnvFiles() {
  [".env", ".env.local"].forEach((fileName) => {
    const filePath = path.join(ROOT_DIR, fileName);

    if (!fs.existsSync(filePath)) {
      return;
    }

    fs.readFileSync(filePath, "utf8")
      .replace(/^\uFEFF/, "")
      .split(/\r?\n/)
      .forEach((line) => {
        const trimmed = line.trim();

        if (!trimmed || trimmed.startsWith("#")) {
          return;
        }

        const separatorIndex = trimmed.indexOf("=");

        if (separatorIndex === -1) {
          return;
        }

        const key = trimmed.slice(0, separatorIndex).trim();
        let value = trimmed.slice(separatorIndex + 1).trim();

        if (
          (value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))
        ) {
          value = value.slice(1, -1);
        }

        if (key && process.env[key] === undefined) {
          process.env[key] = value;
        }
      });
  });
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

class GeminiApiError extends Error {
  constructor(status, body) {
    super(`Gemini API request failed (${status}): ${body}`);
    this.status = status;
    this.body = body;
  }
}

function isRetryableGeminiError(error) {
  return (
    error instanceof GeminiApiError &&
    [429, 500, 502, 503, 504].includes(error.status)
  );
}

function getModelCandidates(primaryModel) {
  const configuredFallbacks = process.env.GEMINI_FALLBACK_MODELS
    ? process.env.GEMINI_FALLBACK_MODELS.split(",")
    : DEFAULT_FALLBACK_MODELS;

  return [...new Set([primaryModel, ...configuredFallbacks].map((model) => model.trim()))]
    .filter(Boolean)
    .map((model) => model.replace(/^models\//, ""));
}

function parseArgs(argv) {
  const args = { _: [] };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (!arg.startsWith("--")) {
      args._.push(arg);
      continue;
    }

    const [rawKey, inlineValue] = arg.slice(2).split("=");
    const key = rawKey.replace(/-([a-z])/g, (_, char) => char.toUpperCase());

    if (inlineValue !== undefined) {
      args[key] = inlineValue;
    } else if (argv[index + 1] && !argv[index + 1].startsWith("--")) {
      index += 1;
      args[key] = argv[index];
    } else {
      args[key] = true;
    }
  }

  return args;
}

function getTopic(args, topics) {
  if (args.topicId) {
    const topic = topics.find((item) => item.id === args.topicId);

    if (!topic) {
      throw new Error(`No topic found with id "${args.topicId}".`);
    }

    if (topic.status !== "pending") {
      throw new Error(`Topic "${args.topicId}" is already ${topic.status}.`);
    }

    return topic;
  }

  const manualTitle = args.topic || args._.join(" ").trim();

  if (manualTitle) {
    if (!args.targetService || !serviceLabels[args.targetService]) {
      throw new Error(
        "Manual topics require --target-service with one of the configured service slugs.",
      );
    }

    return {
      id: null,
      title: manualTitle,
      targetService: args.targetService,
      status: "manual",
      publishedAt: null,
    };
  }

  const topic = topics.find((item) => item.status === "pending");

  if (!topic) {
    throw new Error("No pending topics remain in content/topics.json.");
  }

  return topic;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function getExistingSlugs() {
  if (!fs.existsSync(BLOG_DIR)) {
    return new Set();
  }

  return new Set(
    fs
      .readdirSync(BLOG_DIR)
      .filter((fileName) => /\.mdx?$/i.test(fileName))
      .map((fileName) => path.basename(fileName, path.extname(fileName))),
  );
}

function makeUniqueSlug(slug, warnings) {
  const existingSlugs = getExistingSlugs();
  let candidate = slug;
  let counter = 2;

  while (existingSlugs.has(candidate)) {
    candidate = `${slug}-${counter}`;
    counter += 1;
  }

  if (candidate !== slug) {
    warnings.push(`Generated slug already existed; using "${candidate}".`);
  }

  return candidate;
}

function getPrompt(topic) {
  const serviceLabel = serviceLabels[topic.targetService];
  const serviceUrl = `/services/${topic.targetService}/`;

  return `You are writing for KruskalCode, a software/web/mobile/cloud development agency in Islamabad, Pakistan.

Topic: ${topic.title}
Target service page slug: ${topic.targetService}
Target service page URL to include naturally in the body: ${serviceUrl}
Target service label: ${serviceLabel}

Write like a founder/senior developer at KruskalCode explaining this to a client over a call, not like a generic blog.

DO:
- Open with a direct answer, a specific scenario, or a real opinion.
- Vary sentence and paragraph length naturally.
- Use contractions and first person plural where natural.
- Take a clear position and explain the real caveats.
- Use concrete specifics such as practical price ranges, real timeframes, and named tools/frameworks where they are general industry knowledge.
- End sections with a real takeaway, not a restatement of the heading.
- Use [NEEDS HUMAN INPUT: ...] placeholders where the post should reference real KruskalCode project experience, real numbers, real client examples, or any case-study details.

DO NOT:
- Start with "In today's fast-paced digital world", "In this article", or similar generic openings.
- Use these phrases or anything close to them: "in today's fast-paced/ever-evolving digital landscape", "it's no secret that", "in conclusion", "to sum up", "dive into", "delve into", "unlock the potential", "game-changer", "robust solution", "seamless experience", "navigate the complexities", "leverage" as a verb, "utilize", "holistic", "synergy", "in this blog post we will", "let's explore", "it's important to note that", "it's worth mentioning".
- Invent client names, testimonials, exact KruskalCode project statistics, or fake results.
- Make every section a bulleted list. Use lists only where a list is the natural format.

Return JSON only with this exact shape:
{
  "title": "50-60 character SEO title",
  "description": "140-160 character SEO meta description",
  "slug": "url-safe-slug",
  "body": "Full Markdown body, 1200-1800 words, H2/H3 only, no H1, includes a 4-6 question FAQ section at the end",
  "faq": [
    { "question": "Question?", "answer": "Answer." }
  ]
}

The Markdown body must include a natural internal link to ${serviceUrl}.`;
}

async function callGemini(prompt, apiKey, model) {
  const modelName = model.replace(/^models\//, "");
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(
    modelName,
  )}:generateContent`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify({
      systemInstruction: {
        parts: [
          {
            text: "You write specific, practical, human-reviewed agency blog drafts. Return valid JSON only.",
          },
        ],
      },
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        temperature: 0.72,
        maxOutputTokens: 16384,
        responseMimeType: "application/json",
        responseSchema: BLOG_RESPONSE_SCHEMA,
      },
    }),
  });

  if (!response.ok) {
    throw new GeminiApiError(response.status, await response.text());
  }

  const payload = await response.json();
  const text =
    payload.candidates?.[0]?.content?.parts
      ?.map((part) => part.text || "")
      .join("\n")
      .trim() || "";

  if (!text) {
    throw new Error("Gemini returned an empty response.");
  }

  return text;
}

async function callGeminiWithRetries(prompt, apiKey, model) {
  const delays = [0, 1500, 4500];
  let lastError;

  for (let attempt = 0; attempt < delays.length; attempt += 1) {
    if (delays[attempt] > 0) {
      await sleep(delays[attempt]);
    }

    try {
      return await callGemini(prompt, apiKey, model);
    } catch (error) {
      lastError = error;

      if (!isRetryableGeminiError(error) || attempt === delays.length - 1) {
        throw error;
      }

      console.warn(
        `Gemini ${model} returned ${error.status}; retrying attempt ${attempt + 2}/${delays.length}.`,
      );
    }
  }

  throw lastError;
}

async function callGeminiWithFallback(prompt, apiKey, modelCandidates) {
  let lastError;

  for (const model of modelCandidates) {
    try {
      const text = await callGeminiWithRetries(prompt, apiKey, model);
      return { text, model };
    } catch (error) {
      lastError = error;

      if (!isRetryableGeminiError(error)) {
        throw error;
      }

      console.warn(
        `Gemini ${model} is unavailable (${error.status}); trying next fallback model.`,
      );
    }
  }

  throw lastError;
}

function parseStructuredResponse(text) {
  const stripped = text
    .replace(/^```(?:json)?/i, "")
    .replace(/```$/i, "")
    .trim();

  try {
    return JSON.parse(stripped);
  } catch {
    const start = stripped.indexOf("{");
    const end = stripped.lastIndexOf("}");

    if (start === -1 || end === -1 || end <= start) {
      throw new Error("Gemini response was not valid JSON.");
    }

    return JSON.parse(stripped.slice(start, end + 1));
  }
}

async function parseStructuredResponseWithRepair(text, apiKey, modelCandidates) {
  try {
    return parseStructuredResponse(text);
  } catch (error) {
    const repairPrompt = `The following model output was supposed to be valid JSON but could not be parsed.

Return valid JSON only with this exact shape:
{
  "title": "50-60 character SEO title",
  "description": "140-160 character SEO meta description",
  "slug": "url-safe-slug",
  "body": "Full Markdown body, H2/H3 only, no H1",
  "faq": [
    { "question": "Question?", "answer": "Answer." }
  ]
}

Do not include markdown fences or commentary. Preserve the post content as much as possible while making the JSON parseable.

Original parse error: ${error.message}

Output to repair:
${text}`;
    const response = await callGeminiWithFallback(
      repairPrompt,
      apiKey,
      modelCandidates,
    );

    return parseStructuredResponse(response.text);
  }
}

function extractFaqFromBody(body) {
  const faqStart = body.search(/^##\s+FAQs?\s*$/im);

  if (faqStart === -1) {
    return [];
  }

  const faqSection = body.slice(faqStart);
  const entries = faqSection.split(/^###\s+/m).slice(1);

  return entries
    .map((entry) => {
      const [question, ...answerLines] = entry.split(/\r?\n/);

      return {
        question: question.trim(),
        answer: answerLines.join(" ").trim(),
      };
    })
    .filter((item) => item.question && item.answer);
}

function normalizePost(raw, topic, warnings) {
  const faq = Array.isArray(raw.faq) ? raw.faq : extractFaqFromBody(raw.body || "");
  const slug = makeUniqueSlug(slugify(raw.slug || raw.title || topic.title), warnings);

  return {
    title: String(raw.title || "").trim(),
    description: String(raw.description || "").trim(),
    slug,
    body: String(raw.body || "").trim(),
    faq: faq
      .map((item) => ({
        question: String(item.question || "").trim(),
        answer: String(item.answer || "").trim(),
      }))
      .filter((item) => item.question && item.answer),
  };
}

function countWords(text) {
  return text
    .replace(/[#*_>`[\]()]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function findBannedPhrases(text, bannedPhrases) {
  const normalized = text.toLowerCase();

  return bannedPhrases.filter((phrase) =>
    normalized.includes(String(phrase).toLowerCase()),
  );
}

function ensureInternalLink(body, topic) {
  const serviceUrl = `/services/${topic.targetService}/`;

  if (body.includes(serviceUrl)) {
    return body;
  }

  const paragraph = `If you're planning this kind of work, our [${serviceLabels[topic.targetService]} service page](${serviceUrl}) explains how KruskalCode scopes and delivers it.`;
  const faqIndex = body.search(/^##\s+FAQs?\s*$/im);

  if (faqIndex === -1) {
    return `${body}\n\n${paragraph}`;
  }

  return `${body.slice(0, faqIndex).trim()}\n\n${paragraph}\n\n${body
    .slice(faqIndex)
    .trim()}`;
}

function ensureFaqSection(body, faq) {
  if (/^##\s+FAQs?\s*$/im.test(body)) {
    return body;
  }

  const faqMarkdown = faq
    .map((item) => `### ${item.question}\n${item.answer}`)
    .join("\n\n");

  return `${body.trim()}\n\n## FAQ\n\n${faqMarkdown}`;
}

function validatePost(post) {
  const errors = [];
  const wordCount = countWords(post.body);

  if (post.title.length < 50 || post.title.length > 60) {
    errors.push(
      `Title must be 50-60 characters; received ${post.title.length}.`,
    );
  }

  if (post.description.length < 140 || post.description.length > 160) {
    errors.push(
      `Meta description must be 140-160 characters; received ${post.description.length}.`,
    );
  }

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug)) {
    errors.push(`Slug "${post.slug}" is not URL-safe.`);
  }

  if (wordCount < 1200 || wordCount > 1800) {
    errors.push(`Body must be 1200-1800 words; received ${wordCount}.`);
  }

  if (/^#\s+/m.test(post.body)) {
    errors.push("Body must not contain an H1 heading.");
  }

  if (!/^##\s+FAQs?\s*$/im.test(post.body)) {
    errors.push("Body must include a FAQ section.");
  }

  if (post.faq.length < 4 || post.faq.length > 6) {
    errors.push(`FAQ must contain 4-6 questions; received ${post.faq.length}.`);
  }

  const bodyWithoutHumanFlags = post.body.replace(/\[NEEDS HUMAN INPUT:[^\]]+]/g, "");

  if (/\b(lorem ipsum|placeholder text|sample text|tbd)\b/i.test(bodyWithoutHumanFlags)) {
    errors.push("Body contains placeholder or lorem ipsum text.");
  }

  return { errors, wordCount };
}

function analyzeStyle(body) {
  const warnings = [];
  const blocks = body.split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);
  const listBlocks = blocks.filter((block) =>
    block.split(/\n/).some((line) => /^\s*(?:[-*]|\d+\.)\s+/.test(line)),
  );

  if (blocks.length > 0 && listBlocks.length / blocks.length > 0.3) {
    warnings.push(
      "More than 30% of content blocks are lists; reviewer should check for generic outline-style writing.",
    );
  }

  const sentences = body
    .replace(/\n+/g, " ")
    .split(/[.!?]+/)
    .map((sentence) => sentence.trim().split(/\s+/).filter(Boolean).length)
    .filter((length) => length > 3);

  if (sentences.length >= 12) {
    const mean = sentences.reduce((sum, value) => sum + value, 0) / sentences.length;
    const variance =
      sentences.reduce((sum, value) => sum + (value - mean) ** 2, 0) /
      sentences.length;
    const coefficient = Math.sqrt(variance) / mean;

    if (coefficient < 0.35) {
      warnings.push(
        "Sentence length is suspiciously uniform; reviewer should read closely for AI-like rhythm.",
      );
    }
  }

  return warnings;
}

function yamlString(value) {
  return JSON.stringify(value ?? "");
}

function serializePost(post, topic, today) {
  const image =
    serviceImages[topic.targetService] || "/assets/service-background.png";
  const category =
    serviceLabels[topic.targetService]?.replace(" and development", "") ||
    "Insights";
  const frontmatter = [
    "---",
    `title: ${yamlString(post.title)}`,
    `description: ${yamlString(post.description)}`,
    `slug: ${yamlString(post.slug)}`,
    `date: ${yamlString(today)}`,
    `targetService: ${yamlString(topic.targetService)}`,
    `category: ${yamlString(category)}`,
    `author: ${yamlString("KruskalCode")}`,
    `image: ${yamlString(image)}`,
    "faq:",
    ...post.faq.flatMap((item) => [
      `  - question: ${yamlString(item.question)}`,
      `    answer: ${yamlString(item.answer)}`,
    ]),
    "---",
    "",
    post.body.trim(),
    "",
  ];

  return frontmatter.join("\n");
}

async function generateStructuredPost(topic, apiKey, modelCandidates) {
  const response = await callGeminiWithFallback(
    getPrompt(topic),
    apiKey,
    modelCandidates,
  );

  return {
    post: await parseStructuredResponseWithRepair(
      response.text,
      apiKey,
      [response.model, ...modelCandidates],
    ),
    model: response.model,
  };
}

async function rewriteForBannedPhrases(
  post,
  flaggedPhrases,
  apiKey,
  modelCandidates,
) {
  const rewritePrompt = `Rewrite the following structured blog JSON removing these flagged phrases and generally making it sound more like a specific person's writing, not generic AI copy: ${flaggedPhrases.join(", ")}.

Return the same JSON shape with title, description, slug, body, and faq. Keep the topic, service link, FAQ, [NEEDS HUMAN INPUT: ...] markers, and 1200-1800 word target intact.

Here is the post JSON:
${JSON.stringify(post, null, 2)}`;

  const response = await callGeminiWithFallback(
    rewritePrompt,
    apiKey,
    modelCandidates,
  );

  return {
    post: await parseStructuredResponseWithRepair(
      response.text,
      apiKey,
      [response.model, ...modelCandidates],
    ),
    model: response.model,
  };
}

async function reviseForValidationErrors(post, validationErrors, apiKey, modelCandidates) {
  const revisePrompt = `Revise the following structured blog JSON so it passes these validation errors exactly:
${validationErrors.map((error) => `- ${error}`).join("\n")}

Return the same JSON shape with title, description, slug, body, and faq.

Hard requirements:
- title must be 50-60 characters.
- description must be 140-160 characters.
- body must be 1200-1800 words.
- body must use Markdown H2/H3 headings only, no H1.
- body must include a 4-6 question FAQ section at the end.
- preserve the internal service link and any [NEEDS HUMAN INPUT: ...] markers.
- do not add banned generic AI phrases.

Here is the post JSON:
${JSON.stringify(post, null, 2)}`;

  const response = await callGeminiWithFallback(
    revisePrompt,
    apiKey,
    modelCandidates,
  );

  return {
    post: await parseStructuredResponseWithRepair(
      response.text,
      apiKey,
      [response.model, ...modelCandidates],
    ),
    model: response.model,
  };
}

function buildSummary({
  topic,
  post,
  filePath,
  wordCount,
  needsHumanInput,
  warnings,
  model,
}) {
  const relativePath = path.relative(ROOT_DIR, filePath).replace(/\\/g, "/");
  const lines = [
    "## Generated Blog Summary",
    "",
    `- Topic: ${topic.title}`,
    `- Target service: ${topic.targetService}`,
    `- Title: ${post.title}`,
    `- Slug: ${post.slug}`,
    `- File: ${relativePath}`,
    `- Word count: ${wordCount}`,
    `- Gemini model: ${model}`,
    `- Human input flags: ${needsHumanInput.length || "none"}`,
  ];

  if (needsHumanInput.length > 0) {
    lines.push("", "### Needs Human Input");
    needsHumanInput.forEach((flag) => lines.push(`- ${flag}`));
  }

  if (warnings.length > 0) {
    lines.push("", "### Reviewer Warnings");
    warnings.forEach((warning) => lines.push(`- ${warning}`));
  }

  lines.push(
    "",
    "### Reviewer Checklist",
    "- [ ] Fill in or remove every `[NEEDS HUMAN INPUT: ...]` placeholder.",
    "- [ ] Verify the internal service link and any related links.",
    "- [ ] Confirm the post sounds like a real KruskalCode founder/senior developer wrote it.",
    "- [ ] Check any style warnings from the generator.",
    "- [ ] Confirm the title, description, FAQ, and JSON-LD are appropriate before merge.",
  );

  return `${lines.join("\n")}\n`;
}

function runBuildIfRequested() {
  if (process.env.BLOG_RUN_BUILD !== "1") {
    return;
  }

  const result = spawnSync("npm", ["run", "build"], {
    cwd: ROOT_DIR,
    stdio: "inherit",
    shell: process.platform === "win32",
  });

  if (result.status !== 0) {
    throw new Error("npm run build failed.");
  }
}

async function main() {
  loadEnvFiles();

  const args = parseArgs(process.argv.slice(2));
  const apiKey = process.env.GEMINI_API_KEY;
  const primaryModel = process.env.GEMINI_MODEL || DEFAULT_MODEL;
  const modelCandidates = getModelCandidates(primaryModel);
  const topics = readJson(TOPICS_PATH, []);
  const bannedPhrases = readJson(BANNED_PHRASES_PATH, []);
  const warnings = [];

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is required.");
  }

  const topic = getTopic(args, topics);

  if (!serviceLabels[topic.targetService]) {
    throw new Error(`Unsupported targetService "${topic.targetService}".`);
  }

  fs.mkdirSync(BLOG_DIR, { recursive: true });

  let generated = await generateStructuredPost(topic, apiKey, modelCandidates);
  let model = generated.model;
  let rawPost = generated.post;
  let post = normalizePost(rawPost, topic, warnings);
  post.body = ensureFaqSection(ensureInternalLink(post.body, topic), post.faq);

  let flaggedPhrases = findBannedPhrases(post.body, bannedPhrases);

  if (flaggedPhrases.length > 0) {
    generated = await rewriteForBannedPhrases(
      post,
      flaggedPhrases,
      apiKey,
      [model, ...modelCandidates],
    );
    model = generated.model;
    rawPost = generated.post;
    post = normalizePost(rawPost, topic, warnings);
    post.body = ensureFaqSection(ensureInternalLink(post.body, topic), post.faq);
    flaggedPhrases = findBannedPhrases(post.body, bannedPhrases);
  }

  if (flaggedPhrases.length > 0) {
    throw new Error(
      `Banned phrases still found after one rewrite: ${flaggedPhrases.join(", ")}`,
    );
  }

  let validation = validatePost(post);

  if (validation.errors.length > 0) {
    generated = await reviseForValidationErrors(
      post,
      validation.errors,
      apiKey,
      [model, ...modelCandidates],
    );
    model = generated.model;
    rawPost = generated.post;
    post = normalizePost(rawPost, topic, warnings);
    post.body = ensureFaqSection(ensureInternalLink(post.body, topic), post.faq);
    flaggedPhrases = findBannedPhrases(post.body, bannedPhrases);

    if (flaggedPhrases.length > 0) {
      throw new Error(
        `Banned phrases found after validation repair: ${flaggedPhrases.join(", ")}`,
      );
    }

    validation = validatePost(post);
  }

  if (validation.errors.length > 0) {
    throw new Error(`Generated post failed validation after repair:\n- ${validation.errors.join("\n- ")}`);
  }

  warnings.push(...analyzeStyle(post.body));

  const needsHumanInput = post.body.match(/\[NEEDS HUMAN INPUT:[^\]]+]/g) || [];
  const today = new Date().toISOString().slice(0, 10);
  const filePath = path.join(BLOG_DIR, `${post.slug}.md`);

  fs.writeFileSync(filePath, serializePost(post, topic, today));

  if (topic.id) {
    const topicIndex = topics.findIndex((item) => item.id === topic.id);
    topics[topicIndex] = {
      ...topics[topicIndex],
      status: "published",
      publishedAt: today,
    };
    writeJson(TOPICS_PATH, topics);
  }

  runBuildIfRequested();

  const summary = buildSummary({
    topic,
    post,
    filePath,
    wordCount: validation.wordCount,
    needsHumanInput,
    warnings,
    model,
  });

  process.stdout.write(summary);

  if (process.env.BLOG_SUMMARY_PATH) {
    fs.writeFileSync(path.resolve(ROOT_DIR, process.env.BLOG_SUMMARY_PATH), summary);
  }

  if (process.env.BLOG_META_PATH) {
    writeJson(path.resolve(ROOT_DIR, process.env.BLOG_META_PATH), {
      title: post.title,
      slug: post.slug,
      filePath: path.relative(ROOT_DIR, filePath).replace(/\\/g, "/"),
      topicId: topic.id,
      targetService: topic.targetService,
      wordCount: validation.wordCount,
      warnings,
      needsHumanInput,
    });
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
