import CaseStudyContent from "@/components/CaseStudyContent";
import JsonLd from "@/components/JsonLd";
import { docturnalProject } from "@/data/conversion";
import {
  createMetadata,
  getBreadcrumbSchema,
  pageSeo,
} from "@/lib/seo";

export const metadata = createMetadata(pageSeo.docturnalHealth);

export default function DocturnalHealthCaseStudyPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio/" },
          {
            name: docturnalProject.title,
            path: pageSeo.docturnalHealth.path,
          },
        ])}
      />
      <CaseStudyContent project={docturnalProject} />
    </>
  );
}
