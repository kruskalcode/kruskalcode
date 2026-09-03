"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import NextLink from "next/link";
import { finalCtaCopy } from "@/data/conversion";
import { trackEvent } from "@/lib/tracking";

export default function FinalCtaSection({
  heading = finalCtaCopy.heading,
  body = finalCtaCopy.body,
  primaryHref = finalCtaCopy.primaryCta.href,
  primaryLabel = finalCtaCopy.primaryCta.label,
  secondaryHref = finalCtaCopy.secondaryCta.href,
  secondaryLabel = finalCtaCopy.secondaryCta.label,
}) {
  return (
    <Box component="section" sx={{ bgcolor: "#ffffff", py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            background:
              "linear-gradient(135deg, #0f172a 0%, #1a2c4e 60%, #15233f 100%)",
            borderRadius: 2,
            p: { xs: 4, md: 6 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "stretch", md: "center" },
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: 24, md: 30 },
                fontWeight: 800,
                color: "#ffffff",
                mb: 1.5,
                fontFamily: "var(--font-sora), 'Sora', sans-serif",
              }}
            >
              {heading}
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.8)",
                fontSize: 16,
                lineHeight: 1.7,
                maxWidth: 640,
              }}
            >
              {body}
            </Typography>
          </Box>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
            <Button
              component={NextLink}
              href={primaryHref}
              variant="contained"
              onClick={() =>
                trackEvent("discuss_project_click", { location: "final_cta" })
              }
              sx={{
                bgcolor: "#fcb51e",
                color: "#0f172a",
                fontWeight: 800,
                px: 3.5,
                py: 1.4,
                borderRadius: 999,
                textTransform: "none",
                whiteSpace: "nowrap",
                boxShadow: "none",
                "&:hover": { bgcolor: "#e09f16", boxShadow: "none" },
              }}
            >
              {primaryLabel}
            </Button>
            {secondaryHref ? (
              <Button
                component={NextLink}
                href={secondaryHref}
                variant="outlined"
                sx={{
                  borderColor: "rgba(255,255,255,0.35)",
                  color: "#fff",
                  fontWeight: 700,
                  px: 3,
                  py: 1.4,
                  borderRadius: 999,
                  textTransform: "none",
                  whiteSpace: "nowrap",
                  "&:hover": {
                    borderColor: "#fcb51e",
                    bgcolor: "rgba(252,181,30,0.08)",
                  },
                }}
              >
                {secondaryLabel}
              </Button>
            ) : null}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
