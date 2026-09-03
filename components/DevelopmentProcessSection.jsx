"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import SectionHeading from "@/components/SectionHeading";
import { developmentProcess } from "@/data/conversion";

export default function DevelopmentProcessSection({ dark = false }) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: dark ? "#0f172a" : "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          dark={dark}
          eyebrow="Process"
          title="How We Build"
          subtitle="A clear delivery path that reduces risk and keeps stakeholders aligned from discovery through scale."
        />
        <Grid container spacing={2.5}>
          {developmentProcess.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.step}>
              <Box
                sx={{
                  height: "100%",
                  p: 3,
                  borderRadius: 2,
                  border: dark
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "1px solid #e2e8f0",
                  bgcolor: dark ? "rgba(255,255,255,0.03)" : "#f8fafc",
                }}
              >
                <Typography
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    bgcolor: "#fcb51e",
                    color: "#0f172a",
                    fontWeight: 800,
                    display: "grid",
                    placeItems: "center",
                    mb: 2,
                  }}
                >
                  {item.step}
                </Typography>
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 800,
                    color: dark ? "#fff" : "#0f172a",
                    mb: 1,
                    fontSize: 18,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: dark ? "rgba(255,255,255,0.75)" : "#64748b",
                    fontSize: 15,
                    lineHeight: 1.7,
                  }}
                >
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
