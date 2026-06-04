import HomeIcon from "@mui/icons-material/Home";
import { Box, Breadcrumbs, Container, Grid, Link as MuiLink, Typography } from "@mui/material";
import NextLink from "next/link";
import MotionBox, { fadeUp, staggerContainer } from "@/components/MotionBox";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/site";

export const metadata = {
  title: "Our Services",
  description:
    "Explore KruskalCode services including AI, cloud storage, DevOps, digital marketing, consulting, mobile apps, staffing, and web development.",
};

export default function ServicesPage() {
  return (
    <>
      <Box component="section" sx={{ bgcolor: "background.default", py: { xs: 9, md: 12 } }}>
        <Container maxWidth="lg">
          <Breadcrumbs sx={{ mb: 4, color: "text.secondary" }}>
            <MuiLink component={NextLink} href="/" sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <HomeIcon fontSize="small" /> Home
            </MuiLink>
            <Typography color="primary">Services</Typography>
          </Breadcrumbs>
          <Typography variant="h1" sx={{ fontSize: { xs: 44, md: 68 } }}>
            Our Services
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 3, maxWidth: 780, lineHeight: 1.8 }}>
            Choose a focused service or combine multiple capabilities into a full product delivery
            team for your next web, mobile, cloud, or AI initiative.
          </Typography>
        </Container>
      </Box>

      <Box component="section" sx={{ bgcolor: "background.default", pb: { xs: 10, md: 13 } }}>
        <Container maxWidth="lg">
          <MotionBox
            component={Grid}
            container
            spacing={3}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
          {services.map((service) => (
            <Grid item xs={12} md={6} lg={4} key={service.slug}>
              <MotionBox variants={fadeUp} sx={{ height: "100%" }}>
                <ServiceCard service={service} large />
              </MotionBox>
            </Grid>
          ))}
          </MotionBox>
        </Container>
      </Box>
    </>
  );
}
