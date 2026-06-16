"use client";

import { useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const PROJECTS = [
  {
    title: "Tunzie",
    category: "CRM SAAS Websites",
    image: "/assets/optimized/mockups/tunzie-tobwq-Mockup-640.webp",
  },
  {
    title: "ProMathTools",
    category: "Websites",
    image: "/assets/optimized/mockups/ProMathTools_Mockup-scaled-640.webp",
  },
  {
    title: "Toolkit Law",
    category: "CRM Mobile Application SAAS Websites",
    image: "/assets/optimized/mockups/Toolkitlaw-Mockup-scaled-640.webp",
  },
  {
    title: "Breeze Insurance",
    category: "Websites",
    image: "/assets/optimized/mockups/breezeinsurance-Mockup-scaled-640.webp",
  },
  {
    title: "Building Consulting",
    category: "Websites",
    image: "/assets/optimized/mockups/buildingconsulting-Mockup-scaled-640.webp",
  },
  {
    title: "Caclimate Investments",
    category: "Websites",
    image: "/assets/optimized/mockups/caclimateinvestments-Mockup-scaled-640.webp",
  },
  {
    title: "Compsusa",
    category: "CRM",
    image: "/assets/optimized/mockups/compsusa-Mockup-scaled-640.webp",
  },
  {
    title: "Evolventalux",
    category: "Websites",
    image: "/assets/optimized/mockups/evolventalux_Mockup-scaled-640.webp",
  },
  {
    title: "Explore Walletopia",
    category: "CRM Websites",
    image: "/assets/optimized/mockups/explore-walletopia-Mockup-scaled-640.webp",
  },
  {
    title: "HealthCare Ed",
    category: "CRM SAAS Websites",
    image: "/assets/optimized/mockups/healthcareed-Mockup-scaled-640.webp",
  },
  {
    title: "Seeyougo",
    category: "Websites",
    image: "/assets/optimized/mockups/seeyougo-Mockup-scaled-640.webp",
  },
  {
    title: "Bitcoin-Magzine",
    category: "CRM",
    image: "/assets/optimized/mockups/Bitcoin-Magzine-Mockup-scaled-640.webp",
  },
];

const FILTER_CATEGORIES = [
  "CRM",
  "Mobile Application",
  "SAAS",
  "Websites",
];

const FILTERS = ["All", ...FILTER_CATEGORIES];

function parseCategories(value) {
  if (Array.isArray(value)) return value;

  const result = [];
  let remaining = ` ${value} `;
  const ordered = [...FILTER_CATEGORIES].sort((a, b) => b.length - a.length);

  for (const category of ordered) {
    const wrapped = ` ${category} `;
    if (remaining.includes(wrapped)) {
      result.push(category);
      remaining = remaining.replaceAll(category, " ");
    }
  }

  return result;
}

function projectMatchesFilter(project, filter) {
  if (filter === "All") return true;
  return parseCategories(project.category).includes(filter);
}

function formatCategories(value) {
  return parseCategories(value).join(" ");
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
                <Box
                  sx={{
                    position: "relative",
                    border: "1px solid #e3e3e3",
                    overflow: "hidden",
                    lineHeight: 0,
                  }}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} ${formatCategories(project.category)} project mockup`}
                    width={640}
                    height={512}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      bgcolor: "rgba(44, 43, 43, 0.72)",
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
                        color: "white",
                        fontSize: "10px",
                        mt: 0.2,
                        lineHeight: 1.4,
                      }}
                    >
                      {formatCategories(project.category)}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
