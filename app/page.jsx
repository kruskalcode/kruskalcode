import HomeContent from "@/components/HomeContent";
import { createMetadata, pageSeo } from "@/lib/seo";

export const metadata = createMetadata(pageSeo.home);

export default function HomePage() {
  return <HomeContent />;
}
