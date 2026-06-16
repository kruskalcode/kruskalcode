import JsonLd from "@/components/JsonLd";
import PortfolioContent from "@/components/PortfolioContent";
import { Box, Container, Typography } from "@mui/material";
import { createMetadata, getBreadcrumbSchema, pageSeo } from "@/lib/seo";

export const metadata = createMetadata(pageSeo.portfolio);

export default function PortfolioPage() {
  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: pageSeo.portfolio.path },
        ])}
      />
      <Box
        component="section"
        sx={{ bgcolor: "#fff", pt: { xs: 5, md: 7 }, pb: { xs: 3, md: 4 } }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 800,
              color: "#fcb51e",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "var(--font-sora), 'Sora', sans-serif",
              mb: 1.5,
            }}
          >
            Our Portfolio
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "14px", md: "16px" },
              color: "#333333",
              maxWidth: 680,
              mx: "auto",
              lineHeight: 1.7,
              mb: { xs: 3, md: 4 },
            }}
          >
            We design and develop digital solutions that turn complex challenges
            into clear results.
          </Typography>
        </Container>
      </Box>

      <PortfolioContent />
    </Box>
  );
}
