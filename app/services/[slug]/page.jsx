import ServiceDetailContent from "@/components/service/ServiceDetailContent";
import { Box } from "@mui/material";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/data/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title.replace(/\n/g, " ")} | KruskalCode`,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <ServiceDetailContent service={service} />
    </Box>
  );
}
