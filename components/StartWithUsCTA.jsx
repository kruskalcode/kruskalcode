import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/MotionBox";
import { company } from "@/data/site";

export default function StartWithUsCTA() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#ffffff",
        py: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          sx={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)",
            borderRadius: "12px",
            p: { xs: 4, md: 6 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: 20, md: 24 },
                fontWeight: 700,
                color: "#fcb51e",
                textTransform: "uppercase",
                mb: 2,
                fontFamily: "var(--font-sora), 'Sora', sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              Would you like to start with us?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 14, md: 15 },
                lineHeight: 1.6,
                color: "#475569",
                fontWeight: 500,
                maxWidth: 750,
              }}
            >
              Let&apos;s discuss how we can help your agency grow to KruskalCode. We
              explore what you&apos;re doing now, and what it takes to move your
              digital marketing agency from 6 to 7 figures.
            </Typography>
          </Box>
          <Button
            href={company.scheduleUrl || "https://cal.com/kruskalcode"}
            target="_blank"
            rel="noreferrer"
            variant="contained"
            size="large"
            sx={{
              background: "#fcb51e",
              color: "#0f172a",
              "&:hover": { background: "#e09f16" },
              px: 5,
              py: 1.8,
              fontSize: 15,
              fontWeight: 700,
              borderRadius: 999,
              textTransform: "none",
              whiteSpace: "nowrap",
              boxShadow: "none",
            }}
          >
            Want To Start Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
