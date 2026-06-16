"use client";
import { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialCarousel({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <Box sx={{ position: "relative", maxWidth: 900, mx: "auto", px: { xs: 2, md: 6 } }}>
      <Box
        sx={{
          background: "#ffffff",
          border: "2px dashed #475569", // Matching the dashed border in the screenshot
          borderRadius: 1,
          p: { xs: 4, md: 8 },
          position: "relative",
          textAlign: "center",
          height: { xs: 400, md: 300 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <Typography
              sx={{
                lineHeight: 1.8,
                fontSize: { xs: 16, md: 18 },
                color: "#1e293b",
                fontWeight: 600,
                mb: 4,
                px: { xs: 1, md: 6 }, // Extra padding to not overlap with arrows
              }}
            >
              {testimonials[currentIndex].quote}
            </Typography>
            <Typography
              variant="h6"
              sx={{ 
                fontWeight: 800, 
                color: "#fcb51e", 
                textTransform: "uppercase", 
                fontSize: { xs: 16, md: 18 } 
              }}
            >
              {testimonials[currentIndex].name}
            </Typography>
            <Typography sx={{ fontSize: 14, color: "#fcb51e", fontWeight: 500 }}>
              {testimonials[currentIndex].location}
            </Typography>
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 4 }}>
          {testimonials.map((_, idx) => (
            <Box
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: idx === currentIndex ? "#fcb51e" : "#1e293b",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            />
          ))}
        </Box>

        {/* Navigation Arrows */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            color: "#fcb51e",
            "&:hover": { bgcolor: "transparent", color: "#eab308" },
          }}
        >
          <ChevronLeft sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: 16,
            top: "50%",
            transform: "translateY(-50%)",
            color: "#fcb51e",
            "&:hover": { bgcolor: "transparent", color: "#eab308" },
          }}
        >
          <ChevronRight sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>
    </Box>
  );
}
