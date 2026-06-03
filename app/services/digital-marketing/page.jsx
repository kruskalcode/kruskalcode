import ServiceDetail, { getServiceMetadata } from "@/components/ServiceDetail";

const slug = "digital-marketing";

export const metadata = getServiceMetadata(slug);

export default function DigitalMarketingPage() {
  return <ServiceDetail slug={slug} />;
}
