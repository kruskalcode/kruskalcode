import ServicesContent from "@/components/service/ServicesContent";
import JsonLd from "@/components/JsonLd";
import { Box } from "@mui/material";
import Image from "next/image";
import { servicesFaq } from "@/data/site";
import {
  createMetadata,
  getBreadcrumbSchema,
  getFaqSchema,
  pageSeo,
} from "@/lib/seo";

export const metadata = createMetadata(pageSeo.services);

const visuallyHiddenH1 = {
  position: "absolute",
  width: 1,
  height: 1,
  p: 0,
  m: -1,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
  border: 0,
};

export default function ServicesPage() {
  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: pageSeo.services.path },
        ])}
      />
      <JsonLd data={getFaqSchema(servicesFaq)} />
      <Box component="h1" sx={visuallyHiddenH1}>
        Software Development Services
      </Box>
      <Box
        component="section"
        sx={{
          width: "100%",
          bgcolor: "#1a2c4e",
        }}
      >
        <Image
          src="/assets/optimized/services-banner-1536.webp"
          alt="KruskalCode software development services in Islamabad"
          width={1536}
          height={576}
          priority
          style={{
            width: "100%",
            height: "450px",
            display: "block",
            objectFit: "cover",
          }}
        />
      </Box>
      <ServicesContent />
    </Box>
  );
}
