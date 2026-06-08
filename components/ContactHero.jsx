"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        bgcolor: "#1a2c4e",
      }}
    >
      <Box
        component="img"
        src="/assets/contact-banner.jpg"
        alt="Your Vision Into A Stunning Website"
        sx={{
          width: "100%",
          height: "450px",
          display:"block",
          objectFit: "cover",
        }}
      />
    </Box>
  );
}
