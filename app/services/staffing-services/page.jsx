import ServiceDetail, { getServiceMetadata } from "@/components/ServiceDetail";

const slug = "staffing-services";

export const metadata = getServiceMetadata(slug);

export default function StaffingServicesPage() {
  return <ServiceDetail slug={slug} />;
}
