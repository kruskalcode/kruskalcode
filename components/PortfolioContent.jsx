"use client";

import { useState } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";

const PROJECTS = [
  {
    title: "LawWiz",
    categories: ["CRM", "Mobile Application", "SAAS", "Websites", "Chrome Extension"],
    image: "/assets/optimized/mockups/LawWiz-mockup-640.webp",
    url: "/portfolio/legal-technology-saas-platform/",
    internal: true,
    description:
      "Legal technology product formerly Toolkit Law. We built the mobile app, web application, browser extensions, and add-ons.",
    problem: "Legal professionals needed consolidated tools across devices and browsers.",
    built: "Mobile app, web application, extensions, and add-ons for LawWiz.",
    technologies: ["Mobile", "Web", "SaaS", "Extensions", "Add-ons"],
    outcome: null,
  },
  {
    title: "Docturnal Health",
    categories: ["SAAS", "Websites"],
    image: "/assets/optimized/mockups/Doctor-health-mockup-640.webp",
    url: "/portfolio/docturnal-health/",
    internal: true,
    description:
      "US telemedicine SaaS for virtual urgent care. KruskalCode added membership plans with Stripe billing.",
    problem:
      "Need for accessible virtual care and a paid membership model on the existing SaaS platform.",
    built:
      "Stripe-powered membership plans on a Laravel, PHP, Bootstrap, and AWS stack.",
    technologies: ["Laravel", "PHP", "Bootstrap", "Stripe", "AWS", "SaaS"],
    outcome: null,
  },
  {
    title: "Comps USA",
    categories: ["CRM", "SAAS", "Websites"],
    image: "/assets/optimized/mockups/compsusa-Mockup-scaled-640.webp",
    url: "https://compsusa.com",
    description:
      "Subscription tools for New York real estate professionals — property sales, assessments, maps, history, and market data.",
    problem:
      "Real estate professionals needed current New York property data in one place.",
    built: "Web SaaS product for comps, assessments, maps, and related reports.",
    technologies: ["SaaS", "Web", "CRM"],
    outcome: null,
  },
  {
    title: "Tunzie",
    categories: ["CRM", "SAAS", "Websites"],
    image: "/assets/optimized/mockups/tunzie-tobwq-Mockup-640.webp",
    url: "https://tunzie.com",
    description:
      "CRM and SaaS web product for managing customer and business workflows.",
    problem: "Need for a dedicated CRM/SaaS experience for business operations.",
    built: "Web application and customer-facing SaaS experience.",
    technologies: ["Web", "SaaS", "CRM"],
    outcome: null,
  },
  {
    title: "HealthCare Ed",
    categories: ["CRM", "SAAS", "Websites"],
    image: "/assets/optimized/mockups/healthcareed-Mockup-scaled-640.webp",
    url: "https://healthcareed.com",
    description: "Healthcare education SaaS/web platform.",
    problem: "Healthcare education workflows needed a digital product home.",
    built: "SaaS/web platform with CRM-oriented capabilities.",
    technologies: ["SaaS", "CRM", "Web"],
    outcome: null,
  },
  {
    title: "ProMathTools",
    categories: ["Websites"],
    image: "/assets/optimized/mockups/ProMathTools_Mockup-scaled-640.webp",
    url: "https://promathtools.com",
    description: "Web tools for specialized calculation workflows.",
    problem: "Users needed reliable specialized math tooling in the browser.",
    built: "Website and web-based calculation tools.",
    technologies: ["Web"],
    outcome: null,
  },
  {
    title: "EverydayDevTools",
    categories: ["Websites"],
    image: "/assets/optimized/mockups/everydaydevtools-Mockup-640.webp",
    url: "https://everydaydevtools.com",
    description: "Developer utility website and tooling.",
    problem: "Need for accessible everyday developer utilities online.",
    built: "Website and web-based developer utilities.",
    technologies: ["Web"],
    outcome: null,
  },
  {
    title: "ProMathTools Extension",
    categories: ["Chrome Extension"],
    image: "/assets/optimized/mockups/promathtools-extension-Mockup-640.webp",
    url: "https://chromewebstore.google.com/detail/promathtools/lfcpkgmdlhibmgghnfahkmcgppjflghp",
    description: "Chrome extension companion for ProMathTools workflows.",
    problem: "Users needed browser-native access to specialized tools.",
    built: "Chrome extension integrated with the product ecosystem.",
    technologies: ["Chrome Extension", "JavaScript"],
    outcome: null,
  },
  {
    title: "PromptVault AI",
    categories: ["Chrome Extension"],
    image: "/assets/optimized/mockups/promptvault-ai-Mockup-640.webp",
    url: "https://chromewebstore.google.com/detail/promptvault-ai/kcjinmejpfmgmabkbclhjjadcbboalfh",
    description: "Chrome extension for organizing AI prompts.",
    problem: "Prompt reuse and organization across AI workflows.",
    built: "Browser extension for prompt storage and retrieval.",
    technologies: ["Chrome Extension", "AI tooling"],
    outcome: null,
  },
  {
    title: "Breeze Insurance",
    categories: ["Websites"],
    image: "/assets/optimized/mockups/breezeinsurance-Mockup-scaled-640.webp",
    url: "https://breezeinsurance.ie",
    description: "Insurance business website.",
    problem: "Need for a clear online presence for insurance services.",
    built: "Business website tailored to insurance offerings.",
    technologies: ["Web"],
    outcome: null,
  },
  {
    title: "Building Consulting",
    categories: ["Websites"],
    image: "/assets/optimized/mockups/buildingconsulting-Mockup-scaled-640.webp",
    url: "https://buildingconsulting.com",
    description: "Consulting firm website.",
    problem: "Need to present consulting services professionally online.",
    built: "Marketing website for consulting services.",
    technologies: ["Web"],
    outcome: null,
  },
  {
    title: "California Climate Investments",
    categories: ["Websites"],
    image: "/assets/optimized/mockups/caclimateinvestments-Mockup-scaled-640.webp",
    url: "https://www.caclimateinvestments.ca.gov",
    description: "Public program website.",
    problem: "Need for clear public information architecture online.",
    built: "Informational website for climate investment programs.",
    technologies: ["Web"],
    outcome: null,
  },
  {
    title: "Evolventalux",
    categories: ["Websites"],
    image: "/assets/optimized/mockups/evolventalux_Mockup-scaled-640.webp",
    url: "https://evolventalux.com",
    description: "Business website project.",
    problem: "Need for a branded online presence.",
    built: "Custom business website.",
    technologies: ["Web"],
    outcome: null,
  },
  {
    title: "Explore Walletopia",
    categories: ["CRM", "Websites"],
    image: "/assets/optimized/mockups/explore-walletopia-Mockup-scaled-640.webp",
    url: "https://explore.walletopia.info",
    description: "Exploratory CRM/web product experience.",
    problem: "Need to present and explore product workflows online.",
    built: "Web/CRM experience for product exploration.",
    technologies: ["CRM", "Web"],
    outcome: null,
  },
  {
    title: "Seeyougo",
    categories: ["Websites"],
    image: "/assets/optimized/mockups/seeyougo-Mockup-scaled-640.webp",
    url: null,
    description: "Travel-oriented website project.",
    problem: "Need for a branded travel web presence.",
    built: "Custom website design and development.",
    technologies: ["Web"],
    outcome: null,
  },
  {
    title: "Bitcoin Magazine",
    categories: ["CRM"],
    image: "/assets/optimized/mockups/Bitcoin-Magzine-Mockup-scaled-640.webp",
    url: "https://bitcoin-magazin-login.net",
    description: "CRM-oriented login/portal experience.",
    problem: "Need for authenticated CRM/portal access flows.",
    built: "CRM category portal interface.",
    technologies: ["CRM", "Web"],
    outcome: null,
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
  const categoriesLabel = project.categories.join(" · ");
  const isInternal = Boolean(project.internal);

  const content = (
    <Box
      sx={{
        position: "relative",
        border: "1px solid #e3e3e3",
        overflow: "hidden",
        lineHeight: 0,
        bgcolor: "#f7f7f7",
        height: "100%",
        display: "flex",
        flexDirection: "column",
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
      <Box sx={{ position: "relative", aspectRatio: "640 / 512", overflow: "hidden" }}>
        {project.image ? (
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
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(145deg, #15233f, #0f172a 55%, rgba(252,181,30,0.25))",
              display: "flex",
              alignItems: "flex-end",
              p: 2.5,
            }}
          >
            <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: 18, lineHeight: 1.3 }}>
              {project.title}
            </Typography>
          </Box>
        )}

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
              {isInternal ? "View Case Study" : "View live project"}
              {!isInternal ? <OpenInNewIcon sx={{ fontSize: 16 }} /> : null}
            </Box>
          </Box>
        )}
      </Box>

      <Box sx={{ p: 2, bgcolor: "#fff", flexGrow: 1, lineHeight: 1.5 }}>
        <Typography sx={{ fontWeight: 800, color: "#0f172a", fontSize: 16, mb: 0.5 }}>
          {project.title}
        </Typography>
        <Typography sx={{ color: "#fcb51e", fontSize: 12, fontWeight: 700, mb: 1 }}>
          {categoriesLabel}
        </Typography>
        <Typography sx={{ color: "#64748b", fontSize: 13, lineHeight: 1.6, mb: 1.25 }}>
          {project.description}
        </Typography>
        {project.built ? (
          <Typography sx={{ color: "#475569", fontSize: 12, lineHeight: 1.55 }}>
            <Box component="span" sx={{ fontWeight: 700, color: "#0f172a" }}>
              Built:{" "}
            </Box>
            {project.built}
          </Typography>
        ) : null}
        {project.technologies?.length ? (
          <Typography sx={{ color: "#94a3b8", fontSize: 11, mt: 1 }}>
            {project.technologies.join(" · ")}
          </Typography>
        ) : null}
      </Box>
    </Box>
  );

  if (!isLive) {
    return content;
  }

  if (isInternal) {
    return (
      <Link
        component={NextLink}
        href={project.url}
        underline="none"
        aria-label={`Open ${project.title} case study`}
        sx={{ display: "block", color: "inherit", height: "100%" }}
      >
        {content}
      </Link>
    );
  }

  return (
    <Link
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
      aria-label={`Open ${project.title} live project`}
      sx={{ display: "block", color: "inherit", height: "100%" }}
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
