"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "#1a2a5e",
        minHeight: { xs: 220, sm: 280, md: 320 },
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Dark overlay gradient */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, #152057 0%, #1a2a6e 50%, #16215c 100%)",
        }}
      />

      {/* Subtle dot grid texture */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Gold arc decoration — bottom left */}
      <Box
        aria-hidden="true"
        component={motion.div}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        sx={{
          position: "absolute",
          bottom: -32,
          left: { xs: -32, md: 24 },
          width: { xs: 120, md: 160 },
          height: { xs: 120, md: 160 },
          borderRadius: "50%",
          border: "10px solid transparent",
          borderTopColor: "#b8860b",
          borderRightColor: "#b8860b",
          transform: "rotate(-20deg)",
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 2, py: { xs: 5, md: 6 } }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 3, md: 6 },
          }}
        >
          {/* LEFT — ABOUT US heading */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            sx={{ flex: "0 0 auto" }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#fcb51e",
                fontWeight: 900,
                fontSize: { xs: "2.8rem", sm: "3.6rem", md: "4.5rem" },
                lineHeight: 1,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                fontFamily: "'Sora', 'Inter', sans-serif",
              }}
            >
              ABOUT US
            </Typography>
          </Box>

          {/* RIGHT — Blob image with glassy blob shape */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 80, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            sx={{
              position: "relative",
              flex: "0 0 auto",
              display: { xs: "none", sm: "block" },
            }}
          >
            {/* Glassy teardrop/blob behind image */}
            <Box
              aria-hidden="true"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: { sm: 240, md: 310 },
                height: { sm: 240, md: 310 },
                borderRadius: "60% 40% 70% 30% / 50% 60% 40% 70%",
                background: "rgba(255,255,255,0.13)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255,255,255,0.18)",
                zIndex: 0,
              }}
            />
            {/* Small decorative teardrop top-right */}
            <Box
              aria-hidden="true"
              sx={{
                position: "absolute",
                top: { sm: -18, md: -22 },
                right: { sm: -18, md: -22 },
                width: { sm: 56, md: 72 },
                height: { sm: 56, md: 72 },
                borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
                background: "rgba(255,255,255,0.18)",
                border: "1px solid rgba(255,255,255,0.25)",
                zIndex: 1,
              }}
            />
            {/* Handshake image clipped inside blob */}
            <Box
              component="img"
              src="/assets/about_handshake.png"
              alt="Business handshake"
              sx={{
                position: "relative",
                zIndex: 2,
                width: { sm: 220, md: 280 },
                height: { sm: 220, md: 280 },
                objectFit: "cover",
                borderRadius: "60% 40% 70% 30% / 50% 60% 40% 70%",
                display: "block",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
