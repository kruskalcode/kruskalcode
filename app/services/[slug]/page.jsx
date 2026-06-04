import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HomeIcon from "@mui/icons-material/Home";
import {
  Box,
  Breadcrumbs,
  Button,
  Chip,
  Container,
  Grid,
  Link as MuiLink,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import ServiceIcon from "@/components/ServiceIcon";
import { company, engagementProcess, getServiceBySlug, services } from "@/data/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Box component="section" sx={{ bgcolor: "background.default", py: { xs: 9, md: 12 } }}>
        <Container maxWidth="lg">
          <Breadcrumbs sx={{ mb: 4, color: "text.secondary" }}>
            <MuiLink component={NextLink} href="/" sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <HomeIcon fontSize="small" /> Home
            </MuiLink>
            <MuiLink component={NextLink} href="/services/">
              Services
            </MuiLink>
            <Typography color="primary">{service.title}</Typography>
          </Breadcrumbs>
          <Stack direction={{ xs: "column", md: "row" }} spacing={3} alignItems={{ xs: "flex-start", md: "center" }}>
            <Box
              sx={{
                display: "grid",
                width: 86,
                height: 86,
                placeItems: "center",
                borderRadius: 4,
                bgcolor: "rgba(252,181,30,0.12)",
                border: "1px solid rgba(252,181,30,0.3)",
                color: "primary.main",
              }}
            >
              <ServiceIcon name={service.icon} sx={{ fontSize: 44 }} />
            </Box>
            <Box>
              <Typography variant="h1" sx={{ fontSize: { xs: 40, md: 64 } }}>
                {service.title}
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mt: 2, maxWidth: 860, lineHeight: 1.8 }}>
                {service.description}
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box component="section" sx={{ bgcolor: "background.default", pb: { xs: 9, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Paper sx={{ p: { xs: 3, md: 4 }, height: "100%" }}>
                <Typography variant="h3" sx={{ mb: 2 }}>
                  Overview
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.9 }}>
                  {service.longDescription}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={5}>
              <Paper sx={{ p: { xs: 3, md: 4 }, height: "100%" }}>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  Key Features
                </Typography>
                <List>
                  {service.features.map((feature) => (
                    <ListItem key={feature} disableGutters>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>

          <Box sx={{ mt: 6 }}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Technologies
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1.5}>
              {service.technologies.map((technology) => (
                <Chip key={technology} label={technology} color="primary" />
              ))}
            </Stack>
          </Box>

          <Paper sx={{ mt: 7, p: { xs: 3, md: 4 } }}>
            <Typography variant="h3" sx={{ mb: 4 }}>
              Engagement Process
            </Typography>
            <Stepper activeStep={-1} alternativeLabel sx={{ display: { xs: "none", md: "flex" } }}>
              {engagementProcess.map((step) => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Stack spacing={2} sx={{ display: { xs: "flex", md: "none" } }}>
              {engagementProcess.map((step, index) => (
                <Typography key={step}>
                  <Box component="span" sx={{ color: "primary.main", fontWeight: 800 }}>
                    {index + 1}.
                  </Box>{" "}
                  {step}
                </Typography>
              ))}
            </Stack>
          </Paper>
        </Container>
      </Box>

      <Box component="section" sx={{ bgcolor: "#fcb51e", color: "#0a0f1e", py: { xs: 7, md: 9 } }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 48 } }}>
            Interested in {service.title}?
          </Typography>
          <Typography sx={{ mt: 2, fontSize: 18 }}>
            Schedule a free call and let&apos;s map the right next step for your project.
          </Typography>
          <Button
            href={company.scheduleUrl}
            target="_blank"
            rel="noreferrer"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{ mt: 4, background: "#0a0f1e", color: "#fcb51e", "&:hover": { background: "#0f172a" } }}
          >
            Schedule Free Call
          </Button>
        </Container>
      </Box>
    </>
  );
}
