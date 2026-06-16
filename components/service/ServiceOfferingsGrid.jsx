"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import MotionBox, { fadeUp, staggerContainer } from "@/components/MotionBox";
import ServiceSectionHeading from "./ServiceSectionHeading";

export default function ServiceOfferingsGrid({ title, offerings }) {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 9 }, bgcolor: "#ffffff" }}>
      <Container maxWidth="lg">
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <ServiceSectionHeading title={title} align="center" />
        </MotionBox>

        <MotionBox
          component={Grid}
          container
          spacing={{ xs: 3, md: 4 }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {offerings.map((offering) => (
            <Grid item xs={12} sm={6} md={3} key={offering}>
              <MotionBox variants={fadeUp}>
                <Box
                  sx={{
                    textAlign: "center",
                    px: { xs: 1, md: 2 },
                    py: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 1.75,
                      minHeight: 56,
                    }}
                  >
                    <Image
                      src={"/assets/services/why-us.webp"}
                      alt={`${offering} service offering icon`}
                      width={44}
                      height={44}
                      style={{
                        width: 44,
                        height: 44,
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      color: "#1a1a1a",
                      lineHeight: 1.55,
                      maxWidth: 220,
                      mx: "auto",
                    }}
                  >
                    {offering}
                  </Typography>
                </Box>
              </MotionBox>
            </Grid>
          ))}
        </MotionBox>
      </Container>
    </Box>
  );
}
