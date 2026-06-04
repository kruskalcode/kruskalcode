import { Box, Container, Grid } from "@mui/material";
import MotionBox, { fadeUp, staggerContainer } from "@/components/MotionBox";
import PageHero from "@/components/PageHero";
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
      <PageHero
        current="Services"
        eyebrow="Our Services"
        title="Full-stack capabilities for modern product teams."
        subtitle="Choose a focused service or combine multiple capabilities into a full product delivery team for your next web, mobile, cloud, or AI initiative."
      />

      <Box component="section" sx={{ bgcolor: "background.default", pb: { xs: 10, md: 13 }, px: { xs: 2, md: 3 } }}>
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
