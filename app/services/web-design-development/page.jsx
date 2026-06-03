import ServiceDetail, { getServiceMetadata } from "@/components/ServiceDetail";

const slug = "web-design-development";

export const metadata = getServiceMetadata(slug);

export default function WebDesignDevelopmentPage() {
  return <ServiceDetail slug={slug} />;
}
