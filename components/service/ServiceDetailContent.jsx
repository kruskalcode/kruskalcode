"use client";

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
import MotionBox, {
  fadeUp,
  slideInLeft,
  slideInRight,
} from "@/components/MotionBox";
import ServiceOfferingsGrid from "./ServiceOfferingsGrid";
import ServiceTitleHero from "./ServiceTitleHero";
import ServiceWhyUsCards from "./ServiceWhyUsCards";
import StatsCounter from "./StatsCounter";
import StartWithUsCTA from "@/components/StartWithUsCTA";
import { getServicePageContent } from "@/data/site";

const pillButtonSx = {
  bgcolor: "#fcb51e",
  color: "#1a1a1a",
  fontWeight: 700,
  fontSize: "14px",
  px: 3,
  py: 1.15,
  borderRadius: "999px",
  textTransform: "none",
  boxShadow: "none",
  "&:hover": { bgcolor: "#e09f16", boxShadow: "none" },
};

export default function ServiceDetailContent({ service, relatedBlogLinks = [] }) {
  const pageContent = getServicePageContent(service.slug);
  const displayTitle = service.title.replace(/\n/g, " ");
  const serviceLinks = [
    {
      href:
        service.slug === "devops-services"
          ? "/services/cloud-storage/"
          : "/services/devops-services/",
      label:
        service.slug === "devops-services"
          ? "cloud storage solutions"
          : "DevOps services",
    },
  ];
  const links = [...serviceLinks, ...relatedBlogLinks].slice(0, 2);
  const intro =
    pageContent.intro.length > 0
      ? pageContent.intro
      : [service.longDescription || service.description];
  const offerings =
    pageContent.offerings.length > 0
      ? pageContent.offerings
      : service.features || [];

  return (
    <Box sx={{ bgcolor: "#ffffff" }}>
      {pageContent.usesTitleHero ? (
        <ServiceTitleHero
          title={service.title}
          backgroundImage={pageContent.titleHeroBackground}
        />
      ) : (
        <Box component="section" sx={{ width: "100%", bgcolor: "#1a2c4e" }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: 280, sm: 360, md: 450 },
            }}
          >
            <Image
              src={pageContent.heroImage}
              alt={`${displayTitle} service hero image`}
              fill
              priority
              sizes="100vw"
              style={{ display: "block", objectFit: "cover" }}
            />
          </Box>
        </Box>
      )}

      <Box component="section" sx={{ bgcolor: "#fff", py: { xs: 2, md: 2 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            <Grid item xs={12} md={7}>
              <MotionBox
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
              >
                <Typography
                  component={pageContent.usesTitleHero ? "h2" : "h1"}
                  sx={{
                    fontSize: { xs: "1.5rem", md: "1.7rem" },
                    fontWeight: 700,
                    color: "#fcb51e",
                    fontFamily: "var(--font-sora), 'Sora', sans-serif",
                    mb: 3,
                  }}
                >
                  {displayTitle}
                </Typography>

                {intro.map((paragraph) => (
                  <Typography
                    key={paragraph.slice(0, 48)}
                    sx={{
                      fontSize: { xs: "15px", md: "16px" },
                      color: "#444",
                      lineHeight: 1.9,
                      mb: 2.5,
                    }}
                  >
                    {paragraph}
                  </Typography>
                ))}

                {links.length > 0 ? (
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", md: "16px" },
                      color: "#444",
                      lineHeight: 1.9,
                      mb: 2.5,
                    }}
                  >
                    Explore related{" "}
                    <NextLink href={links[0].href}>{links[0].label}</NextLink>
                    {links[1] ? (
                      <>
                        {" "}
                        and our{" "}
                        <NextLink href={links[1].href}>
                          {links[1].label}
                        </NextLink>
                      </>
                    ) : null}
                    .
                  </Typography>
                ) : null}

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ mt: 3 }}
                >
                  <Button
                    component={NextLink}
                    href="/services/"
                    variant="contained"
                    sx={pillButtonSx}
                  >
                    Our Services
                  </Button>
                  <Button
                    component={NextLink}
                    href="/contact/"
                    variant="contained"
                    sx={pillButtonSx}
                  >
                    Contact Us
                  </Button>
                </Stack>
              </MotionBox>
            </Grid>

            <Grid item xs={12} md={5}>
              <MotionBox
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-end" },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: 380,
                  }}
                >
                  <Image
                    src={pageContent.introImage}
                    alt={`${displayTitle} service illustration`}
                    width={768}
                    height={633}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </Box>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <ServiceWhyUsCards />
      <StatsCounter />
      <ServiceOfferingsGrid
        title={pageContent.offeringsTitle}
        offerings={offerings}
      />
      <StartWithUsCTA />
    </Box>
  );
}
