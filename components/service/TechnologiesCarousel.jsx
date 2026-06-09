"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function getItemsPerView(width) {
  if (width < 600) return 2;
  if (width < 960) return 3;
  return 5;
}

export default function TechnologiesCarousel({ technologies }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const nextPerView = getItemsPerView(window.innerWidth);
      setItemsPerView(nextPerView);
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, technologies.length - itemsPerView);
  const slideCount = maxIndex + 1;

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(timer);
  }, [maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <Box sx={{ position: "relative", px: { xs: 4, md: 7 }, py: 1 }}>
      <IconButton
        onClick={handlePrev}
        disabled={currentIndex === 0}
        aria-label="Previous technologies"
        sx={{
          position: "absolute",
          left: { xs: 0, md: 4 },
          top: "42%",
          transform: "translateY(-50%)",
          color: "#c5c5c5",
          zIndex: 2,
          "&:hover": { bgcolor: "transparent", color: "#999" },
          "&.Mui-disabled": { color: "#e5e5e5" },
        }}
      >
        <ChevronLeftIcon sx={{ fontSize: { xs: 32, md: 40 } }} />
      </IconButton>

      <IconButton
        onClick={handleNext}
        disabled={currentIndex >= maxIndex}
        aria-label="Next technologies"
        sx={{
          position: "absolute",
          right: { xs: 0, md: 4 },
          top: "42%",
          transform: "translateY(-50%)",
          color: "#c5c5c5",
          zIndex: 2,
          "&:hover": { bgcolor: "transparent", color: "#999" },
          "&.Mui-disabled": { color: "#e5e5e5" },
        }}
      >
        <ChevronRightIcon sx={{ fontSize: { xs: 32, md: 40 } }} />
      </IconButton>

      <Box sx={{ overflow: "hidden", mx: "auto" }}>
        <motion.div
          animate={{
            x: `-${(currentIndex / technologies.length) * 100}%`,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "flex",
            width: `${(technologies.length / itemsPerView) * 100}%`,
          }}
        >
          {technologies.map((tech) => (
            <Box
              key={tech.name}
              sx={{
                flex: `0 0 ${100 / technologies.length}%`,
                px: { xs: 1.5, md: 2.5 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: { xs: 110, md: 130 },
              }}
            >
              <Box
                component="img"
                src={tech.image}
                alt={tech.label || tech.name}
                sx={{
                  height: { xs: 52, md: 64 },
                  width: "auto",
                  maxWidth: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              {tech.label ? (
                <Typography
                  sx={{
                    mt: 1.5,
                    fontSize: { xs: "13px", md: "14px" },
                    fontWeight: 700,
                    color: tech.labelColor || "#555555",
                    textAlign: "center",
                  }}
                >
                  {tech.label}
                </Typography>
              ) : null}
            </Box>
          ))}
        </motion.div>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          mt: { xs: 4, md: 5 },
        }}
      >
        {Array.from({ length: slideCount }).map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            role="button"
            tabIndex={0}
            aria-label={`Go to slide ${index + 1}`}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                setCurrentIndex(index);
              }
            }}
            sx={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              bgcolor: index === currentIndex ? "#1a1a1a" : "#d9d9d9",
              cursor: "pointer",
              transition: "background-color 0.25s ease, transform 0.25s ease",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
