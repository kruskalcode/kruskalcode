"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import MotionBox, { fadeUp, staggerContainer } from "@/components/MotionBox";
import ServiceIcon from "./ServiceIcon";
import {
  getServiceHref,
  services,
  servicesFaq,
  servicesPageSummaries,
  technologyStack,
} from "@/data/site";
import dynamic from "next/dynamic";

const TechnologiesCarousel = dynamic(() => import("./TechnologiesCarousel"), {
  ssr: false,
  loading: () => <Box sx={{ minHeight: { xs: 170, md: 210 } }} />,
});

function ServicePageCard({ service }) {
  const summary =
    servicesPageSummaries[service.slug] || service.description;

  return (
    <Box
      sx={{
        height: "100%",
        bgcolor: "#ffffff",
        border: "1px solid #e8e8e8",
        p: { xs: 3.5, md: 4 },
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "transform 0.35s ease, box-shadow 0.35s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 18px 40px rgba(0,0,0,0.10)",
        },
      }}
    >
      <Box sx={{ color: "#fcb51e", mb: 2 }}>
        <ServiceIcon name={service.icon} sx={{ fontSize: 52 }} />
      </Box>

      <Typography
        component="h3"
        sx={{
          fontSize: { xs: "1.15rem", md: "1.25rem" },
          fontWeight: 700,
          color: "#1a1a1a",
          mb: 2,
          whiteSpace: "pre-line",
          lineHeight: 1.35,
          minHeight: "2.8em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {service.title}
      </Typography>

      <Typography
        sx={{
          color: "#555555",
          fontSize: "14px",
          lineHeight: 1.85,
          mb: 3,
          flexGrow: 1,
        }}
      >
        {summary}
      </Typography>

      <Button
        component={NextLink}
        href={getServiceHref(service)}
        endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
        sx={{
          color: "#fcb51e",
          fontWeight: 700,
          fontSize: "14px",
          textTransform: "none",
          px: 0,
          "&:hover": {
            bgcolor: "transparent",
            color: "#e09f16",
          },
        }}
      >
        Learn more
      </Button>
    </Box>
  );
}

export default function ServicesContent() {
  return (
    <Box sx={{ bgcolor: "#ffffff" }}>
      <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <MotionBox
            component={Grid}
            container
            spacing={3}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
          >
            {services.map((service) => (
              <Grid item xs={12} sm={6} lg={4} key={service.slug}>
                <MotionBox variants={fadeUp} sx={{ height: "100%" }}>
                  <ServicePageCard service={service} />
                </MotionBox>
              </Grid>
            ))}
          </MotionBox>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          py: { xs: 7, md: 9 },
          bgcolor: "#ffffff",
        }}
      >
        <Container maxWidth="lg">
          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontSize: { xs: "1.75rem", md: "2.25rem" },
                fontWeight: 800,
                color: "#fcb51e",
                fontFamily: "var(--font-sora), 'Sora', sans-serif",
                mb: { xs: 4, md: 5 },
              }}
            >
              Technologies We Use
            </Typography>
          </MotionBox>

          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <TechnologiesCarousel technologies={technologyStack} />
          </MotionBox>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 9 }, bgcolor: "#fff" }}>
        <Container maxWidth="md">
          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 800,
                color: "#1a1a1a",
                fontFamily: "var(--font-sora), 'Sora', sans-serif",
                mb: { xs: 4, md: 5 },
              }}
            >
              FAQ
            </Typography>
          </MotionBox>

          <MotionBox
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {servicesFaq.map((item) => (
              <MotionBox key={item.question} variants={fadeUp}>
                <Accordion
                  disableGutters
                  elevation={0}
                  sx={{
                    mb: 1.5,
                    border: "1px solid #e8e8e8",
                    borderRadius: "4px !important",
                    overflow: "hidden",
                    "&:before": { display: "none" },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon sx={{ color: "#fcb51e" }} />
                    }
                    sx={{
                      px: 2.5,
                      py: 0.5,
                      "& .MuiAccordionSummary-content": { my: 1.5 },
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: "15px",
                        color: "#1a1a1a",
                      }}
                    >
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
                    <Typography
                      sx={{
                        color: "#555",
                        fontSize: "14px",
                        lineHeight: 1.85,
                      }}
                    >
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </MotionBox>
            ))}
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
}
