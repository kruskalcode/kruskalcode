"use client";

import { Box, Container, Typography } from "@mui/material";
import MotionBox, { fadeUp } from "@/components/MotionBox";

export default function ServiceTitleHero({ title, backgroundImage }) {
  const lines = title.split("\n");

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: 240, sm: 350, md: 430 },
        overflow: "hidden",
        bgcolor: "#0d1a35",
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(13,26,53,0.55) 0%, rgba(13,26,53,0.35) 50%, rgba(13,26,53,0.5) 100%)",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 1, height: "100%" }}
      >
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: { xs: 240, sm: 350, md: 430 },
            py: { xs: 4, md: 5 },
            textAlign: "center",
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: "1.65rem",
                sm: "1rem",
                md: "2rem",
                lg: "2rem",
              },
              color: "#fcb51e",
              fontFamily: "'Sora', sans-serif",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              lineHeight: 1.15,
              maxWidth: 900,
              mx: "auto",
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            }}
          >
            {lines.map((line) => (
              <Box component="span" key={line} sx={{ display: "block" }}>
                {line}
              </Box>
            ))}
          </Typography>
        </MotionBox>
      </Container>
    </Box>
  );
}
