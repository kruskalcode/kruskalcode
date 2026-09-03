import { absoluteUrl, getSitemapEntries } from "@/lib/seo";

export default function sitemap() {
  return getSitemapEntries().map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified: new Date(entry.lastModified),
    changeFrequency:
      entry.path === "/" || entry.path === "/custom-software-development/"
        ? "weekly"
        : "monthly",
    priority:
      entry.path === "/"
        ? 1
        : entry.path === "/custom-software-development/"
          ? 0.95
          : 0.8,
  }));
}
