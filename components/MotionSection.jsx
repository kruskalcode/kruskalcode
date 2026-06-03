"use client";

import { motion } from "framer-motion";

export default function MotionSection({
  as = "section",
  children,
  className = "",
  delay = 0,
}) {
  const Component = motion[as] || motion.section;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </Component>
  );
}
