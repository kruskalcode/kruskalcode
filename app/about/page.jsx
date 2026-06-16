"use client";

import CheckIcon from "@mui/icons-material/Check";
import WhyChooseUs from "@/components/WhyChooseUs";
import StartWithUsCTA from "@/components/StartWithUsCTA";
import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ─── Fade-in animation ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── Animated number counter ─── */
function Counter({ end, label }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
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

/* ─── Development process data ─── */
const LEFT_STEPS = [
  {
    num: "1",
    title: "Discover",
    body: "In this initial phase, the team identifies the project goals, stakeholders, and requirements through research, interviews, and analysis to lay the groundwork for the development process.",
  },
  {
    num: "3",
    title: "Design",
    body: "Our design team creates wireframes, mockups, and prototypes, focusing on user experience and visual aesthetics. This phase turns ideas into tangible designs that meet the project's requirements.",
  },
  {
    num: "5",
    title: "Deploy",
    body: "After thorough testing, we deploy the project to the production environment. This stage includes setting up hosting, databases, and ensuring everything is configured correctly for launch.",
  },
];
const RIGHT_STEPS = [
  {
    num: "2",
    title: "Define",
    body: "We clarify the project's scope, objectives, and deliverables. This stage involves creating detailed documentation, setting timelines, and establishing clear expectations to ensure everyone is aligned.",
  },
  {
    num: "4",
    title: "Develop",
    body: "The development phase involves coding and building the project based on the design specifications. Our developers use best practices and the latest technologies to ensure a robust and scalable solution.",
  },
  {
    num: "6",
    title: "Deliver",
    body: "The final phase involves handing over the completed project to the client, along with any necessary documentation, training, and support to ensure a smooth transition and successful implementation.",
  },
];

/* ─── Single process step ─── */
function Step({ num, title, body }) {
  return (
    <Box
      component={motion.div}
      variants={fadeUp}
      sx={{ position: "relative", zIndex: 1 }}
    >
      {/* Circle + heading on same row */}
      <Box
        sx={{ display: "flex", alignItems: "center", gap: "20px", mb: "14px" }}
      >
        <Box
          sx={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            bgcolor: "#fcb51e",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontWeight: 800,
            fontSize: "1.1rem",
            fontFamily: "var(--font-sora), 'Sora', sans-serif",
            boxShadow: "0 4px 14px rgba(252,181,30,0.4)",
          }}
        >
          {num}
        </Box>
        <Typography
          sx={{
            fontSize: "1.7rem",
            fontWeight: 700,
            color: "#1C244B",
            fontFamily: "var(--font-sora), 'Sora', sans-serif",
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>
      </Box>
      {/* Description indented under heading (50px circle + 20px gap = 70px) */}
      <Box sx={{ pl: "70px" }}>
        <Typography sx={{ fontSize: "1rem", color: "black", lineHeight: 1.8 }}>
          {body}
        </Typography>
      </Box>
    </Box>
  );
}

/* ─── Why Choose Us checklist ─── */
const WHY_LIST = [
  "Comprehensive Reporting and Analytics",
  "Cost-Effective Software Delivery",
  "Qualified and Expert Team",
  "Maximize Product Efficiency",
  "Top-Notch Customer Support",
];

/* ─── Our Services list ─── */
const SERVICES = [
  "Artificial Intelligence",
  "DevOps Services",
  "Digital Marketing",
  "Mobile Application Development",
  "Web Design & Development",
];

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

/* ═══════════════════════════════════════════
   PAGE
═══════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <Box sx={{ bgcolor: "#fff" }}>
      {/* ── 1. ABOUT US Banner ── */}
      <Box sx={{ lineHeight: 0, width: "100%" }}>
        <Box component="h1" sx={visuallyHiddenH1}>
          About KruskalCode Software Development Team
        </Box>
        <Image
          src="/assets/optimized/about_banner-1024.webp"
          alt="About KruskalCode software development team in Islamabad"
          width={1024}
          height={384}
          priority
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </Box>

      {/* ── 2. Three Cards (overlapping banner) ── */}
      <Box component="section" sx={{ pb: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={3}
            sx={{
              mt: { xs: "24px", md: "-80px" },
              position: "relative",
              zIndex: 5,
            }}
          >
            {/* Card — Our Mission */}
            <Grid item xs={12} md={4}>
              <Box
                component={motion.div}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                sx={{
                  bgcolor: "#fff",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
                  p: { xs: 3.5, md: 4 },
                  height: "100%",
                  minHeight: { md: 300 },
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{ width: 60, height: 10, bgcolor: "#fcb51e", mb: 2 }}
                />
                <Typography
                  sx={{
                    fontSize: "1.7rem",
                    fontWeight: 700,
                    color: "#fcb51e",
                    mb: 2,
                    fontFamily: "var(--font-sora), 'Sora', sans-serif",
                  }}
                >
                  Our Mission
                </Typography>
                <Typography
                  sx={{ fontSize: "1rem", color: "black", lineHeight: 1.85 }}
                >
                  At KruskalCode, we strive to empower businesses with
                  innovative digital solutions that drive growth and success,
                  creating impactful online experiences tailored to your goals.
                </Typography>
              </Box>
            </Grid>

            {/* Card — Who Are We */}
            <Grid item xs={12} md={4}>
              <Box
                component={motion.div}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                sx={{
                  bgcolor: "#fff",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
                  p: { xs: 3.5, md: 4 },
                  height: "100%",
                  minHeight: { md: 300 },
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{ width: 60, height: 10, bgcolor: "#fcb51e", mb: 2 }}
                />
                <Typography
                  sx={{
                    fontSize: "1.7rem",
                    fontWeight: 700,
                    color: "#fcb51e",
                    mb: 2,
                    fontFamily: "var(--font-sora), 'Sora', sans-serif",
                  }}
                >
                  Who Are We
                </Typography>
                <Typography
                  sx={{ fontSize: "1rem", color: "black", lineHeight: 1.85 }}
                >
                  KruskalCode is a team of skilled professionals specializing in
                  web development and design. We&apos;re dedicated to creating
                  innovative digital solutions that elevate your business and
                  drive online success.
                </Typography>
              </Box>
            </Grid>

            {/* Card — Our Services */}
            <Grid item xs={12} md={4}>
              <Box
                component={motion.div}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                sx={{
                  bgcolor: "#fff",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
                  p: { xs: 3.5, md: 4 },
                  height: "100%",
                  minHeight: { md: 300 },
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{ width: 60, height: 10, bgcolor: "#fcb51e", mb: 2 }}
                />
                <Typography
                  sx={{
                    fontSize: "1.7rem",
                    fontWeight: 700,
                    color: "#fcb51e",
                    mb: 2,
                    fontFamily: "var(--font-sora), 'Sora', sans-serif",
                  }}
                >
                  Our Services
                </Typography>
                <List disablePadding sx={{ mb: 1.5 }}>
                  {SERVICES.map((s) => (
                    <ListItem key={s} disablePadding sx={{ py: "3px" }}>
                      <ListItemIcon sx={{ minWidth: 18 }}>
                        <Typography
                          sx={{
                            color: "#fcb51e",
                            fontWeight: 700,
                            fontSize: "1rem",
                            lineHeight: 1,
                          }}
                        >
                          ›
                        </Typography>
                      </ListItemIcon>
                      <ListItemText
                        primary={s}
                        primaryTypographyProps={{
                          fontSize: "1",
                          color: "black",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
                <Button
                  href="/services/"
                  disableRipple
                  sx={{
                    p: 0,
                    minWidth: 0,
                    textTransform: "none",
                    color: "#3b82f6",
                    fontWeight: 600,
                    fontSize: "13.5px",
                    justifyContent: "flex-start",
                    "&:hover": {
                      bgcolor: "transparent",
                      textDecoration: "underline",
                    },
                  }}
                >
                  More...
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── 3. Our Development Process ── */}
      <Box
        component="section"
        sx={{ py: { xs: 8, md: 10 }, bgcolor: "rgb(244, 247, 255)" }}
      >
        <Container maxWidth="xl">
          {/* Heading */}
          <Box sx={{ textAlign: "center", mb: 7 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.9rem", md: "2.4rem" },
                fontWeight: 700,
                color: "primary.main",
                fontFamily: "var(--font-sora), 'Sora', sans-serif",
                mb: 1.5,
              }}
            >
              Our Development Process
            </Typography>
          </Box>

          {/* Grid without center divider */}
          <Box sx={{ position: "relative" }}>

            <Grid container>
              {/* Left column — 1, 3, 5 */}
              <Grid item xs={12} md={6}>
                <Box
                  component={motion.div}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={stagger}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                    pr: { md: 7 },
                    position: "relative",
                  }}
                >
                  {/* Dashed line connecting circles */}
                  <Box
                    aria-hidden
                    sx={{
                      display: { xs: "none", md: "block" },
                      position: "absolute",
                      left: 24,
                      top: 50,
                      bottom: 50,
                      borderLeft: "2px dashed #fcb51e",
                      zIndex: 0,
                    }}
                  />
                  {LEFT_STEPS.map((s) => (
                    <Step key={s.num} {...s} />
                  ))}
                </Box>
              </Grid>

              {/* Right column — 2, 4, 6 */}
              <Grid item xs={12} md={6}>
                <Box
                  component={motion.div}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={stagger}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                    pl: { md: 7 },
                    mt: { xs: 5, md: 0 },
                    position: "relative",
                  }}
                >
                  {/* left = pl:7 (56px) + half circle 50px (24px) = 80px */}
                  <Box
                    aria-hidden
                    sx={{
                      display: { xs: "none", md: "block" },
                      position: "absolute",
                      left: { md: "80px" },
                      top: 50,
                      bottom: 50,
                      borderLeft: "2px dashed #fcb51e",
                      zIndex: 0,
                    }}
                  />
                  {RIGHT_STEPS.map((s) => (
                    <Step key={s.num} {...s} />
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* ── 4. Why Choose Us ── */}
      <WhyChooseUs />

      {/* ── 5. Stats Counter ── */}
      <Box
        component="section"
        sx={{ position: "relative", overflow: "hidden", py: { xs: 4, md: 2 } }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/optimized/about_handshake-1024.webp')",
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
            <Grid item xs={12} sm={4}>
              <Counter end="100" label="Projects Completed" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Counter end="50" label="Satisfied Clients" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Counter end="15" label="Experienced Staff" />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── 6. CTA Section ── */}
      <StartWithUsCTA />
    </Box>
  );
}
