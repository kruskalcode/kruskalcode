import JsonLd from "@/components/JsonLd";
import { createMetadata, getBreadcrumbSchema, pageSeo } from "@/lib/seo";

export const metadata = createMetadata(pageSeo.about);

export default function AboutLayout({ children }) {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: pageSeo.about.path },
        ])}
      />
      {children}
    </>
  );
}
