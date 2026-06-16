import JsonLd from "@/components/JsonLd";
import { createMetadata, getBreadcrumbSchema, pageSeo } from "@/lib/seo";

export const metadata = createMetadata(pageSeo.contact);

export default function ContactLayout({ children }) {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: pageSeo.contact.path },
        ])}
      />
      {children}
    </>
  );
}
