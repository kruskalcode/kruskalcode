"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import NextLink from "next/link";
import { trackEvent } from "@/lib/tracking";

export default function ConversionHero({
  h1,
  supporting,
  primaryCta,
  secondaryCta,
  eyebrow = "Custom Software Development",
}) {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "#0f172a",
        backgroundImage:
          "radial-gradient(ellipse at 20% 20%, rgba(252,181,30,0.18), transparent 50%), radial-gradient(ellipse at 80% 0%, rgba(56,189,248,0.12), transparent 45%), linear-gradient(160deg, #0b1224 0%, #15233f 55%, #0f172a 100%)",
        py: { xs: 9, md: 13 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 820 }}>
          <Typography
            sx={{
              mb: 2,
              color: "#fcb51e",
              fontWeight: 800,
              letterSpacing: 1.6,
              textTransform: "uppercase",
              fontSize: 13,
            }}
          >
            {eyebrow}
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: 34, sm: 42, md: 52 },
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              fontFamily: "var(--font-sora), 'Sora', sans-serif",
              mb: 2.5,
            }}
          >
            {h1}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 16, md: 19 },
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.75,
              maxWidth: 680,
              mb: 4,
            }}
          >
            {supporting}
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems={{ xs: "stretch", sm: "center" }}
          >
            <Button
              component={NextLink}
              href={primaryCta.href}
              variant="contained"
              onClick={() =>
                trackEvent("discuss_project_click", { location: "hero" })
              }
              sx={{
                bgcolor: "#fcb51e",
                color: "#0f172a",
                fontWeight: 800,
                px: 3.5,
                py: 1.5,
                borderRadius: 999,
                textTransform: "none",
                fontSize: 15,
                boxShadow: "none",
                "&:hover": { bgcolor: "#e09f16", boxShadow: "none" },
              }}
            >
              {primaryCta.label}
            </Button>
            {secondaryCta ? (
              <Button
                component={NextLink}
                href={secondaryCta.href}
                variant="outlined"
                sx={{
                  borderColor: "rgba(255,255,255,0.35)",
                  color: "#ffffff",
                  fontWeight: 700,
                  px: 3.5,
                  py: 1.5,
                  borderRadius: 999,
                  textTransform: "none",
                  fontSize: 15,
                  "&:hover": {
                    borderColor: "#fcb51e",
                    bgcolor: "rgba(252,181,30,0.08)",
                  },
                }}
              >
                {secondaryCta.label}
              </Button>
            ) : null}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
