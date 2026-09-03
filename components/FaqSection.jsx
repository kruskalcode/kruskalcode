"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import SectionHeading from "@/components/SectionHeading";

export default function FaqSection({
  items,
  title = "Frequently Asked Questions",
  subtitle = "Straight answers for teams evaluating a custom software partner.",
}) {
  return (
    <Box component="section" sx={{ bgcolor: "#ffffff", py: { xs: 7, md: 10 } }}>
      <Container maxWidth="md">
        <SectionHeading title={title} subtitle={subtitle} />
        {items.map((item) => (
          <Accordion
            key={item.question}
            disableGutters
            elevation={0}
            sx={{
              mb: 1.5,
              border: "1px solid #e2e8f0",
              borderRadius: "8px !important",
              "&:before": { display: "none" },
              overflow: "hidden",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#fcb51e" }} />}>
              <Typography sx={{ fontWeight: 700, color: "#0f172a", fontSize: 16 }}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#64748b", lineHeight: 1.8, fontSize: 15 }}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
