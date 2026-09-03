"use client";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box, Container, Grid, Typography } from "@mui/material";
import SectionHeading from "@/components/SectionHeading";
import { trustSection } from "@/data/conversion";

export default function TrustCredibilitySection() {
  return (
    <Box component="section" sx={{ bgcolor: "#ffffff", py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionHeading title={trustSection.heading} />
        <Grid container spacing={2.5}>
          {trustSection.points.map((point) => (
            <Grid item xs={12} sm={6} md={4} key={point.title}>
              <Box
                sx={{
                  height: "100%",
                  p: 3,
                  border: "1px solid #e2e8f0",
                  borderRadius: 2,
                  bgcolor: "#f8fafc",
                }}
              >
                <CheckCircleOutlineIcon sx={{ color: "#fcb51e", mb: 1.5 }} />
                <Typography
                  component="h3"
                  sx={{ fontWeight: 800, color: "#0f172a", mb: 1, fontSize: 17 }}
                >
                  {point.title}
                </Typography>
                <Typography sx={{ color: "#64748b", fontSize: 15, lineHeight: 1.7 }}>
                  {point.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
