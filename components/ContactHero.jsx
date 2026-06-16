"use client";

import { Box } from "@mui/material";
import Image from "next/image";

const visuallyHiddenH1 = {
  position: "absolute",
  width: 1,
  height: 1,
  p: 0,
  m: -1,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
  border: 0,
};

export default function ContactHero() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        bgcolor: "#1a2c4e",
      }}
    >
      <Box component="h1" sx={visuallyHiddenH1}>
        Contact KruskalCode Islamabad Software Agency
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "450px",
        }}
      >
        <Image
          src="/assets/contact-banner.jpg"
          alt="KruskalCode Islamabad software agency contact banner"
          fill
          priority
          sizes="100vw"
          style={{ display: "block", objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
}
