import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Container, Typography } from "@mui/material";
import NextLink from "next/link";

export const metadata = {
  title: "Page Not Found",
  description: "The page you requested could not be found on KruskalCode.",
};

export default function NotFound() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", minHeight: "70vh", alignItems: "center", bgcolor: "background.default", py: 10 }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h1" color="primary" sx={{ fontSize: { xs: 92, md: 132 } }}>
          404
        </Typography>
        <Typography variant="h2" sx={{ mt: 2 }}>
          Page not found
        </Typography>
        <Typography color="text.secondary" sx={{ mx: "auto", mt: 2.5, maxWidth: 560, fontSize: 18, lineHeight: 1.8 }}>
          The page may have moved, or the link may be incorrect. Head back home and keep exploring
          KruskalCode.
        </Typography>
        <Button
          component={NextLink}
          href="/"
          variant="contained"
          color="primary"
          startIcon={<ArrowBackIcon />}
          sx={{ mt: 4, color: "#0a0f1e" }}
        >
          Go Home
        </Button>
      </Container>
    </Box>
  );
}
