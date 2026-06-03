import ServiceDetail, { getServiceMetadata } from "@/components/ServiceDetail";

const slug = "cloud-storage";

export const metadata = getServiceMetadata(slug);

export default function CloudStoragePage() {
  return <ServiceDetail slug={slug} />;
}
