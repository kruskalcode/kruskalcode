import ServiceDetail, { getServiceMetadata } from "@/components/ServiceDetail";

const slug = "innovation-product-development-consulting";

export const metadata = getServiceMetadata(slug);

export default function InnovationProductDevelopmentConsultingPage() {
  return <ServiceDetail slug={slug} />;
}
