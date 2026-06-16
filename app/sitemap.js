import { absoluteUrl, getSitemapEntries } from "@/lib/seo";

export default function sitemap() {
  return getSitemapEntries().map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified: new Date(entry.lastModified),
    changeFrequency: entry.path === "/" ? "weekly" : "monthly",
    priority: entry.path === "/" ? 1 : 0.8,
  }));
}
