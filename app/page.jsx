import HomeContent from "@/components/HomeContent";
import JsonLd from "@/components/JsonLd";
import { homepageFaqs } from "@/data/conversion";
import {
  createMetadata,
  getFaqSchema,
  getSoftwareApplicationSchema,
  pageSeo,
} from "@/lib/seo";

export const metadata = createMetadata(pageSeo.home);

export default function HomePage() {
  return (
    <>
      <JsonLd data={getSoftwareApplicationSchema()} />
      <JsonLd data={getFaqSchema(homepageFaqs)} />
      <HomeContent />
    </>
  );
}
