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
    <Box
      component="section"
      sx={{
        bgcolor: "#f8fafc",
        py: { xs: 7, md: 10 },
        position: "relative",
        zIndex: 1,
      }}
    >
      <Container maxWidth="md">
        <SectionHeading title={title} subtitle={subtitle} />
        {items.map((item) => (
          <Accordion
            key={item.question}
            disableGutters
            elevation={0}
            sx={{
              mb: 1.5,
              bgcolor: "#ffffff !important",
              backgroundImage: "none !important",
              border: "1px solid #e2e8f0",
              borderRadius: "8px !important",
              boxShadow: "none !important",
              color: "#0f172a",
              "&:before": { display: "none" },
              overflow: "hidden",
              "&.Mui-expanded": {
                bgcolor: "#ffffff !important",
                margin: "0 0 12px 0",
              },
              "& .MuiAccordionSummary-root": {
                bgcolor: "#ffffff",
                color: "#0f172a",
                minHeight: 56,
                px: { xs: 2, md: 2.5 },
              },
              "& .MuiAccordionSummary-content": {
                my: 1.5,
              },
              "& .MuiAccordionDetails-root": {
                bgcolor: "#ffffff",
                color: "#475569",
                px: { xs: 2, md: 2.5 },
                pt: 0,
                pb: 2.5,
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#fcb51e" }} />}
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper": {
                  color: "#fcb51e",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  color: "#0f172a !important",
                  fontSize: { xs: 15, md: 16 },
                  lineHeight: 1.45,
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#475569 !important",
                  lineHeight: 1.8,
                  fontSize: 15,
                }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
