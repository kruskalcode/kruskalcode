import NextLink from "next/link";
import { Box, Link, Typography } from "@mui/material";

function renderInline(text, keyPrefix) {
  const parts = [];
  const pattern = /(\[([^\]]+)]\(([^)]+)\)|\*\*([^*]+)\*\*)/g;
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[2] && match[3]) {
      const href = match[3];
      const isInternal = href.startsWith("/");
      parts.push(
        <Link
          key={`${keyPrefix}-link-${match.index}`}
          component={isInternal ? NextLink : "a"}
          href={href}
          target={isInternal ? undefined : "_blank"}
          rel={isInternal ? undefined : "noopener noreferrer"}
          sx={{ color: "#fcb51e", fontWeight: 700 }}
        >
          {match[2]}
        </Link>,
      );
    } else if (match[4]) {
      parts.push(
        <Box
          key={`${keyPrefix}-strong-${match.index}`}
          component="strong"
          sx={{ color: "#0f172a", fontWeight: 800 }}
        >
          {match[4]}
        </Box>,
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

function getBlocks(markdown) {
  const lines = markdown.split(/\r?\n/);
  const blocks = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];

    if (!line.trim()) {
      continue;
    }

    const heading = line.match(/^(#{2,4})\s+(.+)$/);

    if (heading) {
      blocks.push({
        type: "heading",
        level: heading[1].length,
        text: heading[2],
      });
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      const items = [];

      while (index < lines.length && /^\s*[-*]\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*[-*]\s+/, ""));
        index += 1;
      }

      index -= 1;
      blocks.push({ type: "list", ordered: false, items });
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const items = [];

      while (index < lines.length && /^\s*\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*\d+\.\s+/, ""));
        index += 1;
      }

      index -= 1;
      blocks.push({ type: "list", ordered: true, items });
      continue;
    }

    const paragraph = [line.trim()];

    while (
      index + 1 < lines.length &&
      lines[index + 1].trim() &&
      !/^(#{2,4})\s+/.test(lines[index + 1]) &&
      !/^\s*[-*]\s+/.test(lines[index + 1]) &&
      !/^\s*\d+\.\s+/.test(lines[index + 1])
    ) {
      index += 1;
      paragraph.push(lines[index].trim());
    }

    blocks.push({ type: "paragraph", text: paragraph.join(" ") });
  }

  return blocks;
}

export default function MarkdownContent({ markdown }) {
  const blocks = getBlocks(markdown);

  return (
    <Box>
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          const component = `h${block.level}`;

          return (
            <Typography
              key={`${block.type}-${index}`}
              component={component}
              sx={{
                color: "#0f172a",
                fontSize:
                  block.level === 2
                    ? { xs: "1.45rem", md: "1.8rem" }
                    : { xs: "1.15rem", md: "1.35rem" },
                fontWeight: 800,
                lineHeight: 1.25,
                mt: block.level === 2 ? 4 : 3,
                mb: 1.5,
              }}
            >
              {renderInline(block.text, `heading-${index}`)}
            </Typography>
          );
        }

        if (block.type === "list") {
          return (
            <Box
              key={`${block.type}-${index}`}
              component={block.ordered ? "ol" : "ul"}
              sx={{
                color: "#334155",
                pl: 3,
                mb: 3,
                "& li": { mb: 1, lineHeight: 1.85 },
              }}
            >
              {block.items.map((item, itemIndex) => (
                <Typography
                  key={`${block.type}-${index}-${itemIndex}`}
                  component="li"
                  sx={{ color: "#334155", fontSize: "16px" }}
                >
                  {renderInline(item, `list-${index}-${itemIndex}`)}
                </Typography>
              ))}
            </Box>
          );
        }

        return (
          <Typography
            key={`${block.type}-${index}`}
            sx={{
              color: "#334155",
              fontSize: "16px",
              lineHeight: 1.9,
              mb: 3,
            }}
          >
            {renderInline(block.text, `paragraph-${index}`)}
          </Typography>
        );
      })}
    </Box>
  );
}
