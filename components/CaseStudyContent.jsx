"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import Image from "next/image";
import FinalCtaSection from "@/components/FinalCtaSection";
import { featuredProject } from "@/data/conversion";

export default function CaseStudyContent({ project = featuredProject }) {
  const liveUrl = project.liveUrl;
  const technologies = project.technologies || [];
  const engineeringHeading = project.ongoing
    ? "What KruskalCode Is Engineering"
    : "What KruskalCode Built";

  return (
    <>
      <Box
        component="section"
        sx={{
          bgcolor: "#0f172a",
          py: { xs: 8, md: 11 },
          backgroundImage:
            "radial-gradient(ellipse at 15% 20%, rgba(252,181,30,0.16), transparent 50%), linear-gradient(160deg, #0b1224, #15233f)",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              color: "#fcb51e",
              fontWeight: 800,
              letterSpacing: 1.4,
              textTransform: "uppercase",
              fontSize: 12,
              mb: 2,
            }}
          >
            Case Study · {project.category}
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: 32, md: 46 },
              fontWeight: 800,
              color: "#fff",
              maxWidth: 800,
              lineHeight: 1.15,
              mb: 2.5,
              fontFamily: "var(--font-sora), 'Sora', sans-serif",
            }}
          >
            {project.title}
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.8)",
              fontSize: { xs: 16, md: 18 },
              lineHeight: 1.8,
              maxWidth: 720,
              mb: 4,
            }}
          >
            {project.description}
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
            <Button
              component={NextLink}
              href="/contact/"
              variant="contained"
              sx={{
                bgcolor: "#fcb51e",
                color: "#0f172a",
                fontWeight: 800,
                borderRadius: 999,
                textTransform: "none",
                px: 3.5,
                py: 1.3,
                boxShadow: "none",
                "&:hover": { bgcolor: "#e09f16", boxShadow: "none" },
              }}
            >
              Discuss Your Project
            </Button>
            {liveUrl ? (
              <Button
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                sx={{
                  borderColor: "rgba(255,255,255,0.35)",
                  color: "#fff",
                  fontWeight: 700,
                  borderRadius: 999,
                  textTransform: "none",
                  px: 3.5,
                  py: 1.3,
                  "&:hover": {
                    borderColor: "#fcb51e",
                    bgcolor: "rgba(252,181,30,0.08)",
                  },
                }}
              >
                Visit Live Site
              </Button>
            ) : null}
          </Stack>
        </Container>
      </Box>

      <Box component="section" sx={{ bgcolor: "#fff", py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          {project.image ? (
            <Box
              sx={{
                mb: 5,
                borderRadius: 2,
                overflow: "hidden",
                border: "1px solid #e2e8f0",
              }}
            >
              <Image
                src={project.image}
                alt={`${project.title} product mockup`}
                width={1280}
                height={1024}
                sizes="(max-width: 1200px) 100vw, 1120px"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </Box>
          ) : null}
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography
                component="h2"
                sx={{ fontWeight: 800, color: "#0f172a", mb: 1.5, fontSize: 24 }}
              >
                Challenge
              </Typography>
              <Typography sx={{ color: "#64748b", lineHeight: 1.8, fontSize: 16 }}>
                {project.problem}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                component="h2"
                sx={{ fontWeight: 800, color: "#0f172a", mb: 1.5, fontSize: 24 }}
              >
                Solution
              </Typography>
              <Typography sx={{ color: "#64748b", lineHeight: 1.8, fontSize: 16 }}>
                {project.solution}
              </Typography>
            </Grid>
          </Grid>

          <Box sx={{ mt: 6 }}>
            <Typography
              component="h2"
              sx={{ fontWeight: 800, color: "#0f172a", mb: 2, fontSize: 24 }}
            >
              {engineeringHeading}
            </Typography>
            <Typography sx={{ color: "#64748b", lineHeight: 1.8, mb: 3, maxWidth: 760 }}>
              {project.built}
            </Typography>
            <Typography sx={{ fontWeight: 700, color: "#0f172a", mb: 1.5 }}>
              Capabilities
            </Typography>
            <Stack component="ul" spacing={1} sx={{ m: 0, pl: 2.5, mb: 4 }}>
              {project.capabilities.map((item) => (
                <Typography component="li" key={item} sx={{ color: "#475569" }}>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Box>

          {technologies.length > 0 ? (
            <Box sx={{ mt: 2 }}>
              <Typography
                component="h2"
                sx={{ fontWeight: 800, color: "#0f172a", mb: 2, fontSize: 24 }}
              >
                Technology
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {technologies.map((tech) => (
                  <Box
                    key={tech}
                    sx={{
                      px: 1.5,
                      py: 0.7,
                      bgcolor: "#0f172a",
                      color: "#fff",
                      borderRadius: 1,
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {tech}
                  </Box>
                ))}
              </Stack>
            </Box>
          ) : null}

          {project.outcome ? (
            <Box
              sx={{
                mt: 6,
                p: 3.5,
                borderRadius: 2,
                border: "1px solid #e2e8f0",
                bgcolor: "#f8fafc",
              }}
            >
              <Typography
                component="h2"
                sx={{ fontWeight: 800, color: "#0f172a", mb: 1, fontSize: 24 }}
              >
                Result
              </Typography>
              <Typography sx={{ color: "#64748b", lineHeight: 1.7, fontSize: 15 }}>
                {project.outcome}
              </Typography>
            </Box>
          ) : null}

          <Box sx={{ mt: 5 }}>
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
        </Container>
      </Box>

      <FinalCtaSection />
    </>
  );
}
