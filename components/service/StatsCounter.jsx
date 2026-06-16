"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { serviceStats } from "@/data/site";

function Counter({ end, label }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return undefined;

    let n = 0;
    const target = parseInt(end, 10);
    const step = Math.max(1, Math.ceil(1500 / target));
    const timer = setInterval(() => {
      n += 1;
      setVal(n);
      if (n >= target) clearInterval(timer);
    }, step);

    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <Box ref={ref} sx={{ textAlign: "center", py: { xs: 4, md: 7 } }}>
      <Typography
        sx={{
          fontSize: { xs: "3rem", md: "4rem" },
          fontWeight: 900,
          color: "#fcb51e",
          lineHeight: 1,
          fontFamily: "var(--font-sora), 'Sora', sans-serif",
        }}
      >
        {val}+
      </Typography>
      <Typography
        sx={{ fontSize: "1rem", fontWeight: 600, color: "#fff", mt: 1 }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default function StatsCounter() {
  return (
    <Box
      component="section"
      sx={{ position: "relative", overflow: "hidden", py: { xs: 4, md: 2 } }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/assets/about_handshake.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(15,23,42,0.80)",
          zIndex: 1,
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container>
          {serviceStats.map((stat) => (
            <Grid item xs={12} sm={4} key={stat.label}>
              <Counter end={stat.end} label={stat.label} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
