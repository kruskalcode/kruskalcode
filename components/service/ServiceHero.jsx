"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import MotionBox, { fadeUp, slideInRight } from "@/components/MotionBox";

export default function ServiceHero({ title, heroImage }) {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "#152057",
        py: { xs: 5, md: 7 },
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(135deg, rgba(21,32,87,0.92) 0%, rgba(26,42,110,0.88) 55%, rgba(22,33,92,0.92) 100%), url('/assets/service-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          bottom: -40,
          left: 0,
          right: 0,
          height: 150,
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(252,181,30,0.12), transparent 70%)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <MotionBox
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3.25rem" },
                  fontWeight: 900,
                  color: "#fcb51e",
                  fontFamily: "var(--font-sora), 'Sora', sans-serif",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  lineHeight: 1.15,
                }}
              >
                {title}
              </Typography>
            </MotionBox>
          </Grid>

          <Grid item xs={12} md={6}>
            <MotionBox
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 360,
                  aspectRatio: "4/3",
                }}
              >
                <Image
                  src={heroImage}
                  alt={title}
                  fill
                  sizes="(max-width:900px) 80vw, 360px"
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
