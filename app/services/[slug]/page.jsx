import JsonLd from "@/components/JsonLd";
import ServiceDetailContent from "@/components/service/ServiceDetailContent";
import { Box } from "@mui/material";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/data/site";
import {
  createMetadata,
  getBreadcrumbSchema,
  getFaqSchema,
  getServiceSchema,
  getServiceSeo,
  serviceFaqs,
} from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: {
        absolute: "Service Not Found | KruskalCode",
      },
    };
  }

  return createMetadata(getServiceSeo(service));
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const serviceSeo = getServiceSeo(service);
  const displayTitle = service.title.replace(/\n/g, " ");

  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
          { name: displayTitle, path: serviceSeo.path },
        ])}
      />
      <JsonLd data={getServiceSchema(service)} />
      <JsonLd data={getFaqSchema(serviceFaqs[service.slug] || [])} />
      <ServiceDetailContent service={service} />
    </Box>
  );
}
