import CaseStudyContent from "@/components/CaseStudyContent";
import JsonLd from "@/components/JsonLd";
import { featuredProject } from "@/data/conversion";
import {
  createMetadata,
  getBreadcrumbSchema,
  pageSeo,
} from "@/lib/seo";

export const metadata = createMetadata(pageSeo.legalTechCaseStudy);

export default function LegalTechCaseStudyPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio/" },
          {
            name: featuredProject.title,
            path: pageSeo.legalTechCaseStudy.path,
          },
        ])}
      />
      <CaseStudyContent project={featuredProject} />
    </>
  );
}
