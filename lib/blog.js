import fs from "fs";
import path from "path";

export const BLOG_CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export const serviceCategoryLabels = {
  "artificial-intelligence": "AI",
  "cloud-storage": "Cloud",
  "devops-services": "DevOps",
  "digital-marketing": "Digital Marketing",
  "innovation-product-development-consulting": "Product Consulting",
  "it-software-architecture-consulting": "Architecture",
  "mobile-application-development": "Mobile",
  "staffing-services": "Staffing",
  "web-design-development": "Web",
};

function parseScalar(value) {
  const trimmed = value.trim();

  if (trimmed === "null") {
    return null;
  }

  if (trimmed === "true") {
    return true;
  }

  if (trimmed === "false") {
    return false;
  }

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("[") && trimmed.endsWith("]")) ||
    (trimmed.startsWith("{") && trimmed.endsWith("}"))
  ) {
    try {
      return JSON.parse(trimmed);
    } catch {
      return trimmed.replace(/^"|"$/g, "");
    }
  }

  return trimmed;
}

function parseObjectLine(line) {
  const match = line.trim().match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/);

  if (!match) {
    return null;
  }

  return [match[1], parseScalar(match[2])];
}

function parseFrontmatterBlock(block) {
  const data = {};
  const lines = block.split(/\r?\n/);

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];

    if (!line.trim()) {
      continue;
    }

    const topLevel = line.match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/);

    if (!topLevel) {
      continue;
    }

    const [, key, rawValue] = topLevel;

    if (rawValue.trim()) {
      data[key] = parseScalar(rawValue);
      continue;
    }

    const items = [];

    while (index + 1 < lines.length && lines[index + 1].startsWith("  - ")) {
      index += 1;
      const item = {};
      const first = parseObjectLine(lines[index].replace(/^  -\s*/, ""));

      if (first) {
        item[first[0]] = first[1];
      }

      while (index + 1 < lines.length && lines[index + 1].startsWith("    ")) {
        index += 1;
        const parsed = parseObjectLine(lines[index]);

        if (parsed) {
          item[parsed[0]] = parsed[1];
        }
      }

      items.push(item);
    }

    data[key] = items;
  }

  return data;
}

export function parseBlogPost(source, filePath = "") {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    throw new Error(`Missing frontmatter in ${filePath || "blog post"}`);
  }

  const frontmatter = parseFrontmatterBlock(match[1]);
  const body = match[2].trim();
  const slug = frontmatter.slug || path.basename(filePath, path.extname(filePath));
  const targetService = frontmatter.targetService || "";

  return {
    ...frontmatter,
    slug,
    body,
    category:
      frontmatter.category || serviceCategoryLabels[targetService] || "Insights",
    author: frontmatter.author || "KruskalCode",
    image: frontmatter.image || "/assets/service-background.png",
    excerpt: frontmatter.description || "",
    faq: Array.isArray(frontmatter.faq) ? frontmatter.faq : [],
    filePath,
  };
}

export function getAllBlogPosts() {
  if (!fs.existsSync(BLOG_CONTENT_DIR)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_CONTENT_DIR)
    .filter((fileName) => /\.mdx?$/i.test(fileName))
    .map((fileName) => {
      const filePath = path.join(BLOG_CONTENT_DIR, fileName);
      return parseBlogPost(fs.readFileSync(filePath, "utf8"), filePath);
    })
    .sort((first, second) => new Date(second.date) - new Date(first.date));
}

export function getBlogCategories() {
  const counts = getAllBlogPosts().reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(counts).map(([title, count]) => ({
    title,
    slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    count,
  }));
}

export function getBlogPostBySlug(slug) {
  return getAllBlogPosts().find((post) => post.slug === slug);
}

export function getBlogRelatedPosts(slug, category, targetService) {
  return getAllBlogPosts()
    .filter((post) => post.slug !== slug)
    .filter(
      (post) =>
        post.category === category ||
        (targetService && post.targetService === targetService),
    )
    .slice(0, 4);
}

export function getRelatedBlogLinksForService(serviceSlug, limit = 1) {
  return getAllBlogPosts()
    .filter((post) => post.targetService === serviceSlug)
    .slice(0, limit)
    .map((post) => ({
      href: `/blog/${post.slug}/`,
      label: post.title,
    }));
}

export function estimateReadingTime(markdown = "") {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}
