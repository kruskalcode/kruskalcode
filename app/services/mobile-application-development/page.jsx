import ServiceDetail, { getServiceMetadata } from "@/components/ServiceDetail";

const slug = "mobile-application-development";

export const metadata = getServiceMetadata(slug);

export default function MobileApplicationDevelopmentPage() {
  return <ServiceDetail slug={slug} />;
}
