"use client";

import { useState } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import Image from "next/image";

const PROJECTS = [
  {
    title: "Tunzie",
    categories: ["CRM", "SAAS", "Websites"],
    image: "/assets/optimized/mockups/tunzie-tobwq-Mockup-640.webp",
    url: "https://tunzie.com",
  },
  {
    title: "ProMathTools",
    categories: ["Websites", "SAAS"],
    image: "/assets/optimized/mockups/ProMathTools_Mockup-scaled-640.webp",
    url: "https://promathtools.com",
  },
  {
    title: "EverydayDevTools",
    categories: ["Websites", "SAAS"],
    image: "/assets/optimized/mockups/everydaydevtools-Mockup-640.webp",
    url: "https://everydaydevtools.com",
  },
  {
    title: "ProMathTools Extension",
    categories: ["Chrome Extension"],
    image: "/assets/optimized/mockups/promathtools-extension-Mockup-640.webp",
    url: "https://chromewebstore.google.com/detail/promathtools/lfcpkgmdlhibmgghnfahkmcgppjflghp",
  },
  {
    title: "PromptVault AI",
    categories: ["Chrome Extension"],
    image: "/assets/optimized/mockups/promptvault-ai-Mockup-640.webp",
    url: "https://chromewebstore.google.com/detail/promptvault-ai/kcjinmejpfmgmabkbclhjjadcbboalfh",
  },
  {
    title: "Toolkit Law",
    categories: ["CRM", "Mobile Application", "SAAS", "Websites"],
    image: "/assets/optimized/mockups/Toolkitlaw-Mockup-scaled-640.webp",
    url: "https://www.toolkit.law",
  },
  {
    title: "Breeze Insurance",
    categories: ["Websites"],
    image: "/assets/optimized/mockups/breezeinsurance-Mockup-scaled-640.webp",
    url: "https://breezeinsurance.ie",
  },
  {
    title: "Building Consulting",
    categories: ["Websites"],
    image: "/assets/optimized/mockups/buildingconsulting-Mockup-scaled-640.webp",
    url: "https://buildingconsulting.com",
  },
  {
    title: "California Climate Investments",
    categories: ["Websites"],
    image: "/assets/optimized/mockups/caclimateinvestments-Mockup-scaled-640.webp",
    url: "https://www.caclimateinvestments.ca.gov",
  },
  {
    title: "Compsusa",
    categories: ["CRM"],
    image: "/assets/optimized/mockups/compsusa-Mockup-scaled-640.webp",
    url: "https://compsusa.com",
  },
  {
    title: "Evolventalux",
    categories: ["Websites"],
    image: "/assets/optimized/mockups/evolventalux_Mockup-scaled-640.webp",
    url: "https://evolventalux.com",
  },
  {
    title: "Explore Walletopia",
    categories: ["CRM", "Websites"],
    image: "/assets/optimized/mockups/explore-walletopia-Mockup-scaled-640.webp",
    url: "https://explore.walletopia.info",
  },
  {
    title: "HealthCare Ed",
    categories: ["CRM", "SAAS", "Websites"],
    image: "/assets/optimized/mockups/healthcareed-Mockup-scaled-640.webp",
    url: "https://healthcareed.com",
  },
  {
    title: "Seeyougo",
    categories: ["Websites"],
    image: "/assets/optimized/mockups/seeyougo-Mockup-scaled-640.webp",
    url: null,
  },
  {
    title: "Bitcoin Magazine",
    categories: ["CRM"],
    image: "/assets/optimized/mockups/Bitcoin-Magzine-Mockup-scaled-640.webp",
    url: "https://bitcoin-magazin-login.net",
  },
];

const FILTER_CATEGORIES = [
  "CRM",
  "Mobile Application",
  "SAAS",
  "Websites",
  "Chrome Extension",
];

const FILTERS = ["All", ...FILTER_CATEGORIES];

function projectMatchesFilter(project, filter) {
  if (filter === "All") return true;
  return project.categories.includes(filter);
}

function FilterBar({ active, onChange }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 1.25,
      }}
    >
      {FILTERS.map((filter) => (
        <Button
          key={filter}
          onClick={() => onChange(filter)}
          sx={{
            borderRadius: "999px",
            px: 2.75,
            py: 0.85,
            fontWeight: 600,
            fontSize: "14px",
            textTransform: "none",
            minWidth: "auto",
            lineHeight: 1.4,
            boxShadow: "none",
            ...(active === filter
              ? {
                  bgcolor: "#fcb51e",
                  color: "#1a1a1a",
                  "&:hover": { bgcolor: "#e09f16", boxShadow: "none" },
                }
              : {
                  bgcolor: "#333333",
                  color: "#ffffff",
                  "&:hover": { bgcolor: "#444444", boxShadow: "none" },
                }),
          }}
        >
          {filter}
        </Button>
      ))}
    </Box>
  );
}

function ProjectCard({ project }) {
  const isLive = Boolean(project.url);
  const categoriesLabel = project.categories.join(" ");

  const content = (
    <Box
      sx={{
        position: "relative",
        border: "1px solid #e3e3e3",
        overflow: "hidden",
        lineHeight: 0,
        bgcolor: "#f7f7f7",
        aspectRatio: "640 / 512",
        transition: "border-color 0.25s ease, transform 0.25s ease",
        "&:hover": isLive
          ? {
              borderColor: "#fcb51e",
              transform: "translateY(-3px)",
              "& .project-image": {
                transform: "scale(1.03)",
              },
              "& .project-hover": {
                opacity: 1,
              },
              "& .project-cta": {
                opacity: 1,
                transform: "translateY(0)",
              },
            }
          : undefined,
      }}
    >
      <Image
        className="project-image"
        src={project.image}
        alt={`${project.title} ${categoriesLabel} project mockup`}
        width={640}
        height={512}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.35s ease",
        }}
      />

      {isLive && (
        <Box
          className="project-hover"
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(26, 26, 26, 0.45)",
            opacity: 0,
            transition: "opacity 0.25s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <Box
            className="project-cta"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.75,
              bgcolor: "#fcb51e",
              color: "#1a1a1a",
              px: 2,
              py: 1,
              fontWeight: 700,
              fontSize: "13px",
              opacity: 0,
              transform: "translateY(8px)",
              transition: "opacity 0.25s ease, transform 0.25s ease",
            }}
          >
            View live project
            <OpenInNewIcon sx={{ fontSize: 16 }} />
          </Box>
        </Box>
      )}

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: "rgba(44, 43, 43, 0.78)",
          backdropFilter: "blur(6px)",
          py: 1.25,
          px: 2,
          textAlign: "center",
          lineHeight: 1.4,
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: 700,
            fontSize: "15px",
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </Typography>
        <Typography
          sx={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "10px",
            mt: 0.2,
            lineHeight: 1.4,
          }}
        >
          {categoriesLabel}
        </Typography>
      </Box>
    </Box>
  );

  if (!isLive) {
    return content;
  }

  return (
    <Link
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
      aria-label={`Open ${project.title} live project`}
      sx={{ display: "block", color: "inherit" }}
    >
      {content}
    </Link>
  );
}

export default function PortfolioContent() {
  const [active, setActive] = useState("All");

  const visible = PROJECTS.filter((project) =>
    projectMatchesFilter(project, active),
  );

  return (
    <>
      <Box component="section" sx={{ bgcolor: "#fff", pb: 3 }}>
        <Container maxWidth="lg">
          <FilterBar active={active} onChange={setActive} />
        </Container>
      </Box>

      <Box component="section" sx={{ bgcolor: "#fff", pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={2.5}>
            {visible.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.title}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
