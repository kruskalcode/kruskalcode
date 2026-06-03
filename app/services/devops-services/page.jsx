import ServiceDetail, { getServiceMetadata } from "@/components/ServiceDetail";

const slug = "devops-services";

export const metadata = getServiceMetadata(slug);

export default function DevOpsServicesPage() {
  return <ServiceDetail slug={slug} />;
}
