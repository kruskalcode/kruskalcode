import ServicesContent from "@/components/ServicesContent";
import { Box } from "@mui/material";

export const metadata = {
  title: "Services | KruskalCode",
  description:
    "Explore KruskalCode services including AI, cloud storage, DevOps, digital marketing, consulting, mobile apps, staffing, and web development.",
};

export default function ServicesPage() {
  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <Box
        component="section"
        sx={{
          width: "100%",
          bgcolor: "#1a2c4e",
        }}
      >
        <Box
          component="img"
          src="/assets/services-banner.jpg"
          alt="Your Vision Into A Stunning Website"
          sx={{
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
