import AdsLandingContent from "@/components/AdsLandingContent";
import JsonLd from "@/components/JsonLd";
import { landingFaqs } from "@/data/conversion";
import {
  createMetadata,
  getBreadcrumbSchema,
  getCustomSoftwareServiceSchema,
  getFaqSchema,
  getSoftwareApplicationSchema,
  pageSeo,
} from "@/lib/seo";

export const metadata = createMetadata(pageSeo.customSoftwareDevelopment);

export default function CustomSoftwareDevelopmentPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          {
            name: "Custom Software Development",
            path: pageSeo.customSoftwareDevelopment.path,
          },
        ])}
      />
      <JsonLd data={getSoftwareApplicationSchema()} />
      <JsonLd data={getCustomSoftwareServiceSchema()} />
      <JsonLd data={getFaqSchema(landingFaqs)} />
      <AdsLandingContent />
    </>
  );
}
