import HomeIcon from "@mui/icons-material/Home";
import { Box, Breadcrumbs, Container, Link as MuiLink, Typography } from "@mui/material";
import NextLink from "next/link";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata = {
  title: "Portfolio",
  description:
    "Explore KruskalCode project examples across web applications, mobile products, AI workflows, and cloud platforms.",
};

export default function PortfolioPage() {
  return (
    <>
      <Box component="section" sx={{ bgcolor: "background.default", py: { xs: 9, md: 12 } }}>
        <Container maxWidth="lg">
          <Breadcrumbs sx={{ mb: 4, color: "text.secondary" }}>
            <MuiLink component={NextLink} href="/" sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <HomeIcon fontSize="small" /> Home
            </MuiLink>
            <Typography color="primary">Portfolio</Typography>
          </Breadcrumbs>
          <Typography variant="h1" sx={{ fontSize: { xs: 44, md: 68 } }}>
            Our Portfolio
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 3, maxWidth: 780, lineHeight: 1.8 }}>
            Browse representative project cards that show the kind of web,
            mobile, AI, and cloud experiences KruskalCode can design and build.
          </Typography>
        </Container>
      </Box>

      <Box component="section" sx={{ bgcolor: "background.default", pb: { xs: 10, md: 13 } }}>
        <Container maxWidth="lg">
          <PortfolioGrid />
        </Container>
      </Box>
    </>
  );
}
