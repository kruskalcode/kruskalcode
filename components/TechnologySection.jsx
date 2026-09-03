"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import SectionHeading from "@/components/SectionHeading";
import { engineeringCapabilities } from "@/data/conversion";

export default function TechnologySection() {
  return (
    <Box component="section" sx={{ bgcolor: "#f8fafc", py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          title={engineeringCapabilities.heading}
          subtitle={engineeringCapabilities.subtitle}
        />
        <Grid container spacing={2.5}>
          {engineeringCapabilities.groups.map((group) => (
            <Grid item xs={12} sm={6} md={4} key={group.label}>
              <Box
                sx={{
                  height: "100%",
                  p: 3,
                  bgcolor: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 2,
                }}
              >
                <Typography
                  component="h3"
                  sx={{ fontWeight: 800, color: "#0f172a", mb: 2, fontSize: 16 }}
                >
                  {group.label}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {group.items.map((item) => (
                    <Box
                      key={item}
                      sx={{
                        px: 1.4,
                        py: 0.6,
                        borderRadius: 1,
                        bgcolor: "#0f172a",
                        color: "#fff",
                        fontSize: 13,
                        fontWeight: 600,
                      }}
                    >
                      {item}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
