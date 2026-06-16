import { absoluteAssetUrl, SITE_URL } from "@/lib/seo";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/", "/draft/", "/drafts/"],
    },
    sitemap: absoluteAssetUrl("/sitemap.xml"),
    host: SITE_URL,
  };
}
