"use client";

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { featuredProject } from "@/data/conversion";

const relatedPublicWork = [
  {
    title: "Docturnal Health",
    category: "Healthcare SaaS",
    description:
      "Telemedicine SaaS with Stripe membership plans, built with Laravel, PHP, Bootstrap, and AWS.",
    image: "/assets/optimized/mockups/Doctor-health-mockup-640.webp",
    href: "/portfolio/docturnal-health/",
    internal: true,
  },
  {
    title: "Comps USA",
    category: "Real Estate SaaS",
    description:
      "Subscription tools for New York real estate professionals — property sales, assessments, maps, and market data.",
    image: "/assets/optimized/mockups/compsusa-Mockup-scaled-640.webp",
    href: "https://compsusa.com",
  },
  {
    title: "Tunzie",
    category: "CRM / SaaS",
    description: "Customer relationship and SaaS workflows for business operations.",
    image: "/assets/optimized/mockups/tunzie-tobwq-Mockup-640.webp",
    href: "https://tunzie.com",
  },
  {
    title: "HealthCare Ed",
    category: "SaaS / Web",
    description: "Education and healthcare-oriented web platform.",
    image: "/assets/optimized/mockups/healthcareed-Mockup-scaled-640.webp",
    href: "https://healthcareed.com",
  },
];

export default function FeaturedWorkSection({ showRelated = true }) {
  const technologies = featuredProject.technologies || [];

  return (
    <Box component="section" sx={{ bgcolor: "#ffffff", py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Work"
          subtitle="Production software projects that demonstrate product engineering capability."
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
            gap: 4,
            p: { xs: 3, md: 4 },
            borderRadius: 2,
            border: "1px solid #e2e8f0",
            bgcolor: "#f8fafc",
            mb: showRelated ? 5 : 0,
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#fcb51e",
                fontWeight: 800,
                letterSpacing: 1.2,
                textTransform: "uppercase",
                fontSize: 12,
                mb: 1.5,
              }}
            >
              Project · {featuredProject.category}
            </Typography>
            <Typography
              component="h3"
              sx={{
                fontSize: { xs: 26, md: 32 },
                fontWeight: 800,
                color: "#0f172a",
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              {featuredProject.title}
            </Typography>

            <Typography sx={{ fontWeight: 700, color: "#0f172a", mb: 0.75 }}>
              Challenge
            </Typography>
            <Typography sx={{ color: "#475569", lineHeight: 1.8, mb: 2.25, fontSize: 15 }}>
              {featuredProject.problem}
            </Typography>

            <Typography sx={{ fontWeight: 700, color: "#0f172a", mb: 0.75 }}>
              Solution
            </Typography>
            <Typography sx={{ color: "#475569", lineHeight: 1.8, mb: 2.25, fontSize: 15 }}>
              {featuredProject.solution}
            </Typography>

            <Typography sx={{ fontWeight: 700, color: "#0f172a", mb: 1 }}>
              Capabilities
            </Typography>
            <Stack component="ul" spacing={0.75} sx={{ m: 0, pl: 2.5, mb: 2.5 }}>
              {featuredProject.capabilities.map((item) => (
                <Typography
                  component="li"
                  key={item}
                  sx={{ color: "#64748b", fontSize: 15, lineHeight: 1.6 }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>

            {technologies.length > 0 ? (
              <>
                <Typography sx={{ fontWeight: 700, color: "#0f172a", mb: 1 }}>
                  Technology
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
                  {technologies.map((tech) => (
                    <Box
                      key={tech}
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 999,
                        bgcolor: "#fff",
                        border: "1px solid #e2e8f0",
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#334155",
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Stack>
              </>
            ) : null}

            <Button
              component={NextLink}
              href={featuredProject.href}
              variant="contained"
              sx={{
                bgcolor: "#fcb51e",
                color: "#0f172a",
                fontWeight: 800,
                borderRadius: 999,
                textTransform: "none",
                px: 3,
                py: 1.2,
                boxShadow: "none",
                "&:hover": { bgcolor: "#e09f16", boxShadow: "none" },
              }}
            >
              {featuredProject.cta}
            </Button>
          </Box>

          <Box
            sx={{
              borderRadius: 2,
              overflow: "hidden",
              bgcolor: "#eef2f7",
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            {featuredProject.image ? (
              <Image
                src={featuredProject.image}
                alt={`${featuredProject.title} product mockup`}
                width={640}
                height={480}
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            ) : (
              <Box
                sx={{
                  minHeight: { xs: 220, md: "100%" },
                  height: "100%",
                  backgroundImage:
                    "linear-gradient(145deg, rgba(252,181,30,0.2), transparent 55%), linear-gradient(160deg, #15233f, #0b1224)",
                  display: "flex",
                  alignItems: "flex-end",
                  p: 3,
                }}
              >
                <Typography sx={{ color: "rgba(255,255,255,0.8)", fontSize: 14, lineHeight: 1.7 }}>
                  {featuredProject.title}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>

        {showRelated ? (
          <>
            <Typography
              component="h3"
              sx={{
                fontWeight: 800,
                color: "#0f172a",
                mb: 2.5,
                fontSize: 20,
              }}
            >
              Selected public projects
            </Typography>
            <Grid container spacing={2.5}>
              {relatedPublicWork.map((project) => {
                const linkProps = project.internal
                  ? { component: NextLink, href: project.href }
                  : {
                      component: "a",
                      href: project.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    };

                return (
                <Grid item xs={12} sm={6} md={3} key={project.title}>
                  <Box
                    {...linkProps}
                    sx={{
                      display: "block",
                      height: "100%",
                      border: "1px solid #e2e8f0",
                      borderRadius: 2,
                      overflow: "hidden",
                      textDecoration: "none",
                      color: "inherit",
                      transition: "border-color 200ms ease",
                      "&:hover": {
                        borderColor: "#fcb51e",
                      },
                    }}
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} project mockup`}
                        width={640}
                        height={512}
                        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                        loading="lazy"
                        style={{ width: "100%", height: "auto", display: "block" }}
                      />
                    ) : null}
                    <Box sx={{ p: 2 }}>
                      <Typography sx={{ fontWeight: 800, color: "#0f172a" }}>
                        {project.title}
                      </Typography>
                      <Typography sx={{ color: "#fcb51e", fontSize: 12, fontWeight: 700, my: 0.5 }}>
                        {project.category}
                      </Typography>
                      <Typography sx={{ color: "#64748b", fontSize: 14, lineHeight: 1.6 }}>
                        {project.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                );
              })}
            </Grid>
            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Button
                component={NextLink}
                href="/portfolio/"
                sx={{
                  color: "#0f172a",
                  fontWeight: 700,
                  textTransform: "none",
                  borderBottom: "2px solid #fcb51e",
                  borderRadius: 0,
                  px: 0.5,
                }}
              >
                View Our Work
              </Button>
            </Box>
          </>
        ) : null}
      </Container>
    </Box>
  );
}
