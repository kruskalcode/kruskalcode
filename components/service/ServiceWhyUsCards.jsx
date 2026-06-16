"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import MotionBox, { fadeUp, staggerContainer } from "@/components/MotionBox";
import ServiceSectionHeading from "./ServiceSectionHeading";
import { serviceWhyUsCards } from "@/data/site";

const whyUsIcons = {
  Analytics: "/assets/services/analytics.webp",
  Savings: "/assets/services/cost-effective.webp",
  Groups: "/assets/services/team-work.png",
  Speed: "/assets/services/productivity.png",
};

export default function ServiceWhyUsCards() {
  return (
    <Box component="section" sx={{ bgcolor: "#ffffff", py: { xs: 7, md: 9 } }}>
      <Container maxWidth="lg">
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <ServiceSectionHeading title="Why Us?" align="left" />
        </MotionBox>

        <MotionBox
          component={Grid}
          container
          spacing={3}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {serviceWhyUsCards.map((card, index) => {
            const Icon = whyUsIcons[card.icon];
            const highlighted = index === 1 || index === 2;

            return (
              <Grid item xs={12} md={6} key={card.title}>
                <MotionBox variants={fadeUp} sx={{ height: "100%" }}>
                  <Box
                    sx={{
                      height: "100%",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: { xs: 2, md: 2.5 },
                      bgcolor: "#ffffff",
                      p: { xs: 2.5, md: 3 },
                      borderRadius: "6px",
                      border: highlighted
                        ? "1px solid #e8e8e8"
                        : "1px solid transparent",
                      boxShadow: highlighted
                        ? "0 10px 28px rgba(20, 21, 22, 0.06)"
                        : "none",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 14px 32px rgba(17, 18, 19, 0.08)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        flexShrink: 0,
                        width: { xs: 72, md: 88 },
                        height: { xs: 72, md: 88 },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        alignContent: "center",
                        alignSelf: "center",
                      }}
                    >
                      <Image
                        src={Icon}
                        alt={`${card.title} software service icon`}
                        width={88}
                        height={88}
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                        }}
                      />
                    </Box>

                    <Box sx={{ pt: 0.5 }}>
                      <Typography
                        sx={{
                          fontSize: { xs: "1rem", md: "1.3rem" },
                          fontWeight: 700,
                          color: "#1a1a1a",
                          mb: 1.25,
                          lineHeight: 1.4,
                        }}
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#666",
                          lineHeight: 1.85,
                        }}
                      >
                        {card.description}
                      </Typography>
                    </Box>
                  </Box>
                </MotionBox>
              </Grid>
            );
          })}
        </MotionBox>
      </Container>
    </Box>
  );
}
