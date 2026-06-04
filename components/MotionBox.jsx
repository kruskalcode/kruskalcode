"use client";

import Box from "@mui/material/Box";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default MotionBox;
