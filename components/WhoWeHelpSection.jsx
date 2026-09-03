"use client";

import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import SectionHeading from "@/components/SectionHeading";
import { whoWeHelp } from "@/data/conversion";

export default function WhoWeHelpSection() {
  return (
    <Box component="section" sx={{ bgcolor: "#ffffff", py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={5}>
            <SectionHeading
              align="left"
              eyebrow="Ideal clients"
              title="Who We Help"
              subtitle="Custom software for growing businesses that need production systems — not generic outsourcing."
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <List disablePadding>
              {whoWeHelp.map((item) => (
                <ListItem key={item} sx={{ px: 0, py: 1.1 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckIcon sx={{ color: "#fcb51e" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      color: "#0f172a",
                      fontSize: 16,
                    }}
                  />
                </ListItem>
              ))}
            </List>
            <Typography sx={{ mt: 2, color: "#64748b", fontSize: 14, lineHeight: 1.7 }}>
              We are not positioned for student projects, course shoppers, or very low-budget brochure websites.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
