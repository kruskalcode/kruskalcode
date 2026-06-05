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
import ServiceCard from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { company, services, whyChooseUs, testimonials } from "@/data/site";

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
      <Box
        component="section"
        sx={{ bgcolor: "#ffffff", py: { xs: 8, md: 12 } }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
              <MotionBox
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Box
                  component="img"
                  src="/assets/choose-us.jpg"
                  alt="Why Choose Us"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 4,
                  }}
                />
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 1 } }}>
              <MotionBox
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <MotionBox variants={fadeUp}>
                  <Typography
                    variant="h2"
                    sx={{
                      mb: 3,
                      fontSize: { xs: 36, md: 48 },
                      fontWeight: 800,
                      color: "#0f172a",
                    }}
                  >
                    Why Choose Us?
                  </Typography>
                </MotionBox>
                <MotionBox variants={fadeUp}>
                  <Typography
                    sx={{
                      mt: 1,
                      lineHeight: 1.8,
                      fontSize: 16,
                      fontStyle: "italic",
                      color: "#475569",
                    }}
                  >
                    KruskalCode is a leading software development company known
                    for its expertise in creating high-quality, innovative
                    solutions. They prioritize customer satisfaction by
                    collaborating closely with clients and employing agile
                    methodologies for flexibility and rapid iteration. With a
                    proven track record and a focus on cutting-edge
                    technologies, KruskalCode ensures scalable and effective
                    software that aligns with your business goals.
                  </Typography>
                </MotionBox>
                <MotionBox variants={fadeUp}>
                  <List>
                    {whyChooseUs.map((item) => (
                      <ListItem key={item} sx={{ px: 0, py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          <CheckCircleIcon sx={{ color: "#fcb51e" }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={item}
                          primaryTypographyProps={{
                            fontWeight: 700,
                            fontSize: 17,
                            color: "#0f172a",
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </MotionBox>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

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
      <Box
        component="section"
        sx={{
          bgcolor: "#ffffff",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              background: "#ffffff",
              boxShadow: "0 10px 40px rgba(15, 23, 42, 0.7)",
              borderRadius: 1,
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
                  fontSize: { xs: 24, md: 28 },
                  fontWeight: 700,
                  color: "#fcb51e",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                Would you like to start with us?
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 15, md: 16 },
                  lineHeight: 1.6,
                  color: "#0f172a",
                  fontWeight: 500,
                  maxWidth: 700,
                }}
              >
                Let&apos;s discuss how we can help your agency grow to
                KruskalCode. We explore what you&apos;re doing now, and what it
                takes to move your digital marketing agency from 6 to 7 figures.
              </Typography>
            </Box>
            <Button
              href={company.scheduleUrl || "/contact"}
              target="_blank"
              rel="noreferrer"
              variant="contained"
              size="large"
              sx={{
                background: "#fcb51e",
                color: "#0f172a",
                "&:hover": { background: "#eab308" },
                px: 5,
                py: 1.5,
                fontSize: 16,
                fontWeight: 700,
                borderRadius: 999,
                whiteSpace: "nowrap",
                boxShadow: "none",
              }}
            >
              Want To Start Now
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
