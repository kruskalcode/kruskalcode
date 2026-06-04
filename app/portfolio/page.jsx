import { Box, Container } from "@mui/material";
import PageHero from "@/components/PageHero";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata = {
  title: "Portfolio",
  description:
    "Explore KruskalCode project examples across web applications, mobile products, AI workflows, and cloud platforms.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        current="Portfolio"
        eyebrow="Selected Work"
        title="Digital product concepts with clean execution."
        subtitle="Browse representative project cards that show the kind of web, mobile, AI, and cloud experiences KruskalCode can design and build."
      />

      <Box component="section" sx={{ bgcolor: "background.default", pb: { xs: 10, md: 13 }, px: { xs: 2, md: 3 } }}>
        <Container maxWidth="lg">
          <PortfolioGrid />
        </Container>
      </Box>
    </>
  );
}
