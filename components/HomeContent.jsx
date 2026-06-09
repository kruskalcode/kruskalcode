"use client";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import MotionBox, {
  fadeUp,
  staggerContainer,
  slideInLeft,
  slideInRight,
} from "@/components/MotionBox";
import ServiceCard from "@/components/service/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { company, services, whyChooseUs, testimonials } from "@/data/site";
import WhyChooseUs from "@/components/WhyChooseUs";
import StartWithUsCTA from "@/components/StartWithUsCTA";

function SectionHeading({ eyebrow, title, subtitle, dark = false }) {
  return (
    <Box sx={{ mb: 8, textAlign: "center" }}>
      {eyebrow && (
        <Typography
          sx={{
            mb: 1.5,
            color: "#fcb51e",
            fontWeight: 800,
            letterSpacing: 1.8,
            textTransform: "uppercase",
          }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: 36, md: 48 },
          fontWeight: 800,
          color: dark ? "#ffffff" : "#0f172a",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          mx: "auto",
          mt: 3,
          height: 4,
          width: 80,
          borderRadius: 999,
          bgcolor: "#fcb51e",
        }}
      />
      {subtitle && (
        <Typography
          sx={{
            mx: "auto",
            mt: 3,
            maxWidth: 800,
            lineHeight: 1.8,
            fontSize: 17,
            color: dark ? "rgba(255,255,255,0.85)" : "#475569",
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

export default function HomeContent() {
  return (
    <>
      {/* Top Banner Section */}
      <Box
        component="section"
        sx={{
          width: "100%",
          bgcolor: "#1a2c4e",
        }}
      >
        <Box
          component="img"
          src="/assets/home-banner.png"
          alt="Your Vision Into A Stunning Website"
          sx={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* It's All About KruskalCode Section */}
      <Box
        component="section"
        sx={{ bgcolor: "#ffffff", py: { xs: 8, md: 12 } }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={{ xs: 5, md: 8 }}
            alignItems="center"
            direction={{ xs: "column", md: "row" }}
          >
            {/* Image on the left */}
            <Grid item xs={12} md={5}>
              <MotionBox
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Box
                  component="img"
                  src="/assets/choose-us.jpg"
                  alt="About KruskalCode"
                  sx={{
                    width: "100%",
                    height: "auto",
                    maxWidth: 500,
                    display: "block",
                    mx: "auto",
                  }}
                />
              </MotionBox>
            </Grid>

            {/* Text on the right */}
            <Grid item xs={12} md={7}>
              <MotionBox
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <MotionBox variants={fadeUp}>
                  <Typography
                    sx={{
                      mb: 1.5,
                      color: "#fcb51e",
                      fontWeight: 800,
                      letterSpacing: 2.2,
                      textTransform: "uppercase",
                    }}
                  >
                    It&apos;s All about
                  </Typography>
                </MotionBox>
                <MotionBox variants={fadeUp}>
                  <Typography
                    variant="h2"
                    sx={{
                      maxWidth: 760,
                      fontSize: { xs: 36, md: 48 },
                      fontWeight: 800,
                      lineHeight: 1.2,
                      mb: 3,
                      color: "#0f172a",
                    }}
                  >
                    KruskalCode
                  </Typography>
                </MotionBox>
                <MotionBox variants={fadeUp}>
                  <Typography
                    sx={{
                      mb: 2,
                      fontSize: { xs: 16, md: 17 },
                      lineHeight: 1.8,
                      color: "#475569",
                    }}
                  >
                    At KruskalCode, we are passionate about transforming ideas
                    into digital experiences that drive success. Specializing in
                    comprehensive web development services, we bring together
                    creativity, technology, and strategy to deliver solutions
                    that meet the unique needs of each client.
                  </Typography>
                  <Typography
                    sx={{
                      mb: 2,
                      fontSize: { xs: 16, md: 17 },
                      lineHeight: 1.8,
                      color: "#475569",
                    }}
                  >
                    Our team of skilled developers, designers, and strategists
                    are dedicated to providing top-tier services, including
                    custom website development, responsive design, content
                    management systems, e-commerce platforms, and more.
                  </Typography>
                  <Typography
                    sx={{
                      mb: 4,
                      fontSize: { xs: 16, md: 17 },
                      lineHeight: 1.8,
                      color: "#475569",
                    }}
                  >
                    Whether you&apos;re launching a new project or enhancing an
                    existing one, KruskalCode is here to guide you every step of
                    the way, turning your vision into a reality.
                  </Typography>
                </MotionBox>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services / What We Offer Section */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.55), rgba(15, 23, 42, 0.55)), url('/assets/service-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <Container maxWidth="lg" sx={{ maxWidth: "1100px" }}>
          <SectionHeading
            dark={true}
            eyebrow="SUPPORT AND GUIDANCE"
            title="What We Offer"
            subtitle="At KruskalCode, we offer a full spectrum of web development services designed to elevate your online presence and drive business growth. Our goal is to deliver innovative, high-quality web solutions that help your business succeed online."
          />
          <MotionBox
            component={Grid}
            container
            spacing={2}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service) => (
              <Grid item xs={12} md={6} lg={4} key={service.slug}>
                <MotionBox variants={fadeUp}>
                  <ServiceCard service={service} />
                </MotionBox>
              </Grid>
            ))}
          </MotionBox>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          background:
            "linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('/assets/testinomial-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: 32, md: 40 },
                fontWeight: 800,
                color: "#fcb51e",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              What People Say
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 16, md: 18 },
                color: "#ffffff",
                maxWidth: 800,
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Discover how KruskalCode has made a difference for our clients.
              From exceptional web development to outstanding customer service,
              hear how we&apos;ve helped businesses thrive online.
            </Typography>
          </Box>
          <TestimonialCarousel testimonials={testimonials} />
        </Container>
      </Box>

      {/* CTA Section */}
      <StartWithUsCTA />
    </>
  );
}
