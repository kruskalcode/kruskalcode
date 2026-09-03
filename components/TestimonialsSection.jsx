"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import SectionHeading from "@/components/SectionHeading";
import {
  approvedTestimonials,
  partnershipTrust,
} from "@/data/conversion";

function hasCompleteTestimonial(item) {
  return Boolean(item?.quote && item?.name && item?.position && item?.company);
}

export default function TestimonialsSection() {
  const testimonials = approvedTestimonials.filter(hasCompleteTestimonial);

  if (testimonials.length === 0) {
    return (
      <Box component="section" sx={{ bgcolor: "#0f172a", py: { xs: 7, md: 10 } }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: 28, md: 36 },
              fontWeight: 800,
              color: "#ffffff",
              mb: 2,
              fontFamily: "var(--font-sora), 'Sora', sans-serif",
            }}
          >
            {partnershipTrust.heading}
          </Typography>
          <Box
            sx={{
              mt: 2.5,
              mb: 3,
              height: 4,
              width: 72,
              borderRadius: 999,
              bgcolor: "#fcb51e",
              mx: "auto",
            }}
          />
          <Typography
            sx={{
              color: "rgba(255,255,255,0.8)",
              fontSize: { xs: 16, md: 18 },
              lineHeight: 1.8,
            }}
          >
            {partnershipTrust.body}
          </Typography>
        </Container>
      </Box>
    );
  }

  return (
    <Box component="section" sx={{ bgcolor: "#ffffff", py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          subtitle="Feedback from teams we have worked with on software projects."
        />
        <Grid container spacing={2.5}>
          {testimonials.map((item) => (
            <Grid item xs={12} md={testimonials.length === 1 ? 12 : 6} key={item.name}>
              <Box
                sx={{
                  height: "100%",
                  p: { xs: 3, md: 3.5 },
                  border: "1px solid #e2e8f0",
                  borderRadius: 2,
                  bgcolor: "#f8fafc",
                }}
              >
                <Typography
                  sx={{
                    color: "#0f172a",
                    fontSize: { xs: 16, md: 17 },
                    lineHeight: 1.8,
                    mb: 3,
                    fontWeight: 500,
                  }}
                >
                  “{item.quote}”
                </Typography>
                <Typography sx={{ fontWeight: 800, color: "#0f172a" }}>
                  {item.name}
                </Typography>
                <Typography sx={{ color: "#64748b", fontSize: 14, mt: 0.5 }}>
                  {item.position}, {item.company}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
