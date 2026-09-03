"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import SectionHeading from "@/components/SectionHeading";
import { whyKruskalCode } from "@/data/conversion";

export default function WhyKruskalCodeSection() {
  return (
    <Box component="section" sx={{ bgcolor: "#f8fafc", py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Why KruskalCode"
          title="A Product Engineering Partner"
          subtitle="Evidence-oriented delivery — focused on business outcomes, production quality, and long-term ownership."
        />
        <Grid container spacing={2.5}>
          {whyKruskalCode.map((item) => (
            <Grid item xs={12} sm={6} key={item.title}>
              <Box
                sx={{
                  height: "100%",
                  p: 3.25,
                  bgcolor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 2,
                  borderTop: "3px solid #fcb51e",
                }}
              >
                <Typography
                  component="h3"
                  sx={{ fontWeight: 800, color: "#0f172a", mb: 1.25, fontSize: 19 }}
                >
                  {item.title}
                </Typography>
                <Typography sx={{ color: "#64748b", fontSize: 15, lineHeight: 1.75 }}>
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
