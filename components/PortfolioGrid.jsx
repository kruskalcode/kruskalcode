"use client";

import { useMemo, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { portfolioProjects } from "@/data/site";

const filters = ["All", "Web", "Mobile", "AI", "Cloud"];
const MotionCard = motion(Card);

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects = useMemo(
    () =>
      activeFilter === "All"
        ? portfolioProjects
        : portfolioProjects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <Box>
      <ToggleButtonGroup
        exclusive
        value={activeFilter}
        onChange={(_, value) => value && setActiveFilter(value)}
        sx={{
          mb: 5,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 1,
          "& .MuiToggleButton-root": {
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: "999px !important",
            color: "text.secondary",
            px: 3,
          },
          "& .Mui-selected": {
            bgcolor: "#fcb51e !important",
            color: "#0a0f1e !important",
          },
        }}
      >
        {filters.map((filter) => (
          <ToggleButton key={filter} value={filter}>
            {filter}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      <Grid container spacing={3}>
        {visibleProjects.map((project, index) => (
          <Grid item xs={12} md={6} lg={4} key={project.title}>
            <MotionCard
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              sx={{ height: "100%", overflow: "hidden" }}
            >
              <Box
                sx={{
                  height: 210,
                  display: "grid",
                  placeItems: "center",
                  background: project.color,
                }}
              >
                <Typography variant="h4" sx={{ color: "#ffffff", textAlign: "center", px: 3 }}>
                  {project.category}
                </Typography>
              </Box>
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
                  {project.technologies.map((tech) => (
                    <Chip key={tech} label={tech} color="primary" size="small" />
                  ))}
                </Stack>
                <Typography variant="h5" component="h3">
                  {project.title}
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.7 }}>
                  {project.description}
                </Typography>
                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ mt: 3, borderColor: "primary.main", color: "primary.main" }}
                >
                  View Project
                </Button>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
