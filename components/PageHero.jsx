import HomeIcon from "@mui/icons-material/Home";
import { Box, Breadcrumbs, Container, Link as MuiLink, Typography } from "@mui/material";
import NextLink from "next/link";

export default function PageHero({ current, eyebrow, title, subtitle, children }) {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "background.default",
        px: { xs: 2, md: 3 },
        py: { xs: 8, md: 11 },
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 75% 15%, rgba(252,181,30,0.14), transparent 24rem), radial-gradient(circle at 15% 20%, rgba(252,181,30,0.08), transparent 22rem)",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
          <Box
            aria-hidden="true"
            sx={{
              position: "absolute",
              left: 0,
              top: -24,
              width: 72,
              height: 4,
              borderRadius: 999,
              bgcolor: "primary.main",
            }}
          />
          <Box sx={{ maxWidth: 850 }}>
            <Breadcrumbs sx={{ mb: 3, color: "text.secondary" }}>
              <MuiLink component={NextLink} href="/" sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <HomeIcon fontSize="small" /> Home
              </MuiLink>
              <Typography color="primary">{current}</Typography>
            </Breadcrumbs>
            {eyebrow ? (
              <Typography sx={{ mb: 1.5, color: "primary.main", fontWeight: 800, letterSpacing: 1.8, textTransform: "uppercase" }}>
                {eyebrow}
              </Typography>
            ) : null}
            <Typography variant="h1" sx={{ fontSize: { xs: 40, sm: 52, md: 68 } }}>
              {title}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mt: 3, maxWidth: 760, lineHeight: 1.8 }}>
              {subtitle}
            </Typography>
            {children ? <Box sx={{ mt: 4 }}>{children}</Box> : null}
          </Box>
      </Container>
    </Box>
  );
}
