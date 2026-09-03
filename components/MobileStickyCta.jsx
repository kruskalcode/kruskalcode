"use client";

import { Box, Button } from "@mui/material";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/tracking";

const HIDDEN_PATHS = ["/contact/", "/custom-software-development/"];

export default function MobileStickyCta() {
  const pathname = usePathname();
  const normalized = pathname?.endsWith("/") ? pathname : `${pathname}/`;

  if (HIDDEN_PATHS.some((path) => normalized === path || normalized?.startsWith(path))) {
    return null;
  }

  return (
    <Box
      sx={{
        display: { xs: "block", md: "none" },
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1200,
        p: 1.5,
        bgcolor: "rgba(255,255,255,0.92)",
        borderTop: "1px solid rgba(15,23,42,0.08)",
        backdropFilter: "blur(8px)",
      }}
    >
      <Button
        component={NextLink}
        href="/contact/"
        fullWidth
        variant="contained"
        onClick={() =>
          trackEvent("discuss_project_click", { location: "mobile_sticky" })
        }
        sx={{
          bgcolor: "#fcb51e",
          color: "#0f172a",
          fontWeight: 800,
          py: 1.35,
          borderRadius: 999,
          textTransform: "none",
          boxShadow: "0 8px 20px rgba(252,181,30,0.35)",
          "&:hover": { bgcolor: "#e09f16" },
        }}
      >
        Discuss Your Project
      </Button>
    </Box>
  );
}
