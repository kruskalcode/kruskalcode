"use client";

import { Box, Container, Grid, Typography } from "@mui/material";

const highlights = [
  {
    title: "Custom software focus",
    description: "SaaS, web apps, automation, and business systems.",
  },
  {
    title: "Full-stack delivery",
    description: "Frontend, backend, APIs, databases, and cloud.",
  },
  {
    title: "Long-term partnership",
    description: "Launch support, maintenance, and continued builds.",
  },
];

export default function StatsCounter() {
  return (
    <Box
      component="section"
      sx={{ position: "relative", overflow: "hidden", py: { xs: 6, md: 8 } }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/assets/optimized/about_handshake-1024.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(15,23,42,0.80)",
          zIndex: 1,
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={3}>
          {highlights.map((item) => (
            <Grid item xs={12} sm={4} key={item.title}>
              <Box sx={{ textAlign: "center", py: { xs: 2, md: 3 }, px: 2 }}>
                <Typography
                  sx={{
                    fontSize: { xs: "1.25rem", md: "1.4rem" },
                    fontWeight: 800,
                    color: "#fcb51e",
                    fontFamily: "var(--font-sora), 'Sora', sans-serif",
                    mb: 1,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
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
