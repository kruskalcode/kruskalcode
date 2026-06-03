import ServiceDetail, { getServiceMetadata } from "@/components/ServiceDetail";

const slug = "artificial-intelligence";

export const metadata = getServiceMetadata(slug);

export default function ArtificialIntelligencePage() {
  return <ServiceDetail slug={slug} />;
}
