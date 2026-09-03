"use client";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import NextLink from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { trustSection } from "@/data/conversion";

export default function TrustCredibilitySection({ showLandingLink = false }) {
  return (
    <Box component="section" sx={{ bgcolor: "#ffffff", py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          title={trustSection.heading}
          subtitle={trustSection.subtitle}
        />
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
        {showLandingLink ? (
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button
              component={NextLink}
              href="/custom-software-development/"
              sx={{
                color: "#0f172a",
                fontWeight: 700,
                textTransform: "none",
                borderBottom: "2px solid #fcb51e",
                borderRadius: 0,
                px: 0.5,
              }}
            >
              View Custom Software Development
            </Button>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
}
