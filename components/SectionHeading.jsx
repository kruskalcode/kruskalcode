"use client";

import { Box, Typography } from "@mui/material";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
  align = "center",
  titleComponent = "h2",
}) {
  return (
    <Box sx={{ mb: { xs: 5, md: 7 }, textAlign: align }}>
      {eyebrow ? (
        <Typography
          sx={{
            mb: 1.5,
            color: "#fcb51e",
            fontWeight: 800,
            letterSpacing: 1.8,
            textTransform: "uppercase",
            fontSize: 13,
          }}
        >
          {eyebrow}
        </Typography>
      ) : null}
      <Typography
        component={titleComponent}
        variant="h2"
        sx={{
          fontSize: { xs: 30, md: 42 },
          fontWeight: 800,
          color: dark ? "#ffffff" : "#0f172a",
          lineHeight: 1.15,
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          mt: 2.5,
          height: 4,
          width: 72,
          borderRadius: 999,
          bgcolor: "#fcb51e",
          mx: align === "center" ? "auto" : 0,
        }}
      />
      {subtitle ? (
        <Typography
          sx={{
            mt: 3,
            maxWidth: 760,
            mx: align === "center" ? "auto" : 0,
            lineHeight: 1.8,
            fontSize: { xs: 16, md: 17 },
            color: dark ? "rgba(255,255,255,0.85)" : "#475569",
          }}
        >
          {subtitle}
        </Typography>
      ) : null}
    </Box>
  );
}
