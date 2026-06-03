import ServiceDetail, { getServiceMetadata } from "@/components/ServiceDetail";

const slug = "it-software-architecture-consulting";

export const metadata = getServiceMetadata(slug);

export default function ItSoftwareArchitectureConsultingPage() {
  return <ServiceDetail slug={slug} />;
}
