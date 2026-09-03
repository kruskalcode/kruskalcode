"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import NextLink from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { whatWeBuild } from "@/data/conversion";

export default function WhatWeBuildSection({ dark = false }) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: dark ? "#0f172a" : "#f8fafc",
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          dark={dark}
          eyebrow="Capabilities"
          title="What We Build"
          subtitle="Focused product engineering for businesses that need custom software — not a laundry list of unrelated services."
        />
        <Grid container spacing={2.5}>
          {whatWeBuild.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.title}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  p: 3.25,
                  bgcolor: dark ? "rgba(255,255,255,0.04)" : "#ffffff",
                  border: dark
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "1px solid #e2e8f0",
                  borderRadius: 2,
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 800,
                    color: dark ? "#fff" : "#0f172a",
                    mb: 1.25,
                    fontSize: 19,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: dark ? "rgba(255,255,255,0.75)" : "#64748b",
                    fontSize: 15,
                    lineHeight: 1.7,
                    flexGrow: 1,
                    mb: 2,
                  }}
                >
                  {item.description}
                </Typography>
                <Button
                  component={NextLink}
                  href={item.href}
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    alignSelf: "flex-start",
                    px: 0,
                    minWidth: 0,
                    color: "#fcb51e",
                    fontWeight: 700,
                    textTransform: "none",
                    "&:hover": { bgcolor: "transparent", color: "#e09f16" },
                  }}
                >
                  {item.cta}
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
