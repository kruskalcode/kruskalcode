import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Container, Grid, IconButton, Link as MuiLink, Stack, Typography } from "@mui/material";
import NextLink from "next/link";
import { company, services } from "@/data/site";

const quickLinks = [
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/portfolio/", label: "Portfolio" },
  { href: "/contact/", label: "Contact" },
];

const socialIcons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  Twitter: TwitterIcon,
  YouTube: YouTubeIcon,
};

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#fef0d2", color: "#000000", borderTop: "1px solid rgba(15,23,42,0.16)" }}>
      <Container maxWidth="lg" sx={{ py: 7 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={3}>
            <Box
              component={NextLink}
              href="/"
              sx={{ display: "inline-flex", alignItems: "center" }}
            >
              <Box
                component="img"
                src={company.logo}
                alt={`${company.name} logo`}
                sx={{ maxHeight: 58, width: "auto" }}
              />
            </Box>
            <Typography sx={{ mt: 2, color: "#1f2937", lineHeight: 1.7 }}>{company.tagline}</Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
            {company.socials.map((social) => {
              const Icon = socialIcons[social.name];
              return (
                <IconButton
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  sx={{
                    color: "#0f172a",
                    border: "1px solid rgba(15,23,42,0.22)",
                    transition: "transform 180ms ease, background 180ms ease",
                    "&:hover": { bgcolor: "#fcb51e", transform: "translateY(-3px)" },
                  }}
                >
                  {Icon ? <Icon /> : null}
                </IconButton>
              );
            })}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <Typography variant="h6" sx={{ color: "#fcb51e", mb: 2 }}>
              Quick Links
            </Typography>
            <Stack spacing={1.2}>
            {quickLinks.map((link) => (
              <MuiLink key={link.href} component={NextLink} href={link.href} sx={{ color: "#1f2937" }}>
                  {link.label}
              </MuiLink>
            ))}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <Typography variant="h6" sx={{ color: "#fcb51e", mb: 2 }}>
              Our Services
            </Typography>
            <Stack spacing={1.1}>
            {services.map((service) => (
              <MuiLink key={service.slug} component={NextLink} href={`/services/${service.slug}/`} sx={{ color: "#1f2937" }}>
                  {service.title}
              </MuiLink>
            ))}
            </Stack>
          </Grid>

          <Grid item xs={12} lg={3}>
            <Typography variant="h6" sx={{ color: "#fcb51e", mb: 2 }}>
              Get in Touch
            </Typography>
            <Stack spacing={2} sx={{ color: "#1f2937" }}>
              <Stack direction="row" spacing={1.5}>
                <LocationOnIcon sx={{ color: "#fcb51e" }} />
                <Typography variant="body2">{company.location}</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5}>
                <EmailIcon sx={{ color: "#fcb51e" }} />
                <MuiLink href={`mailto:${company.email}`} sx={{ color: "#1f2937" }}>
                {company.email}
                </MuiLink>
              </Stack>
              <Stack direction="row" spacing={1.5}>
                <PhoneIcon sx={{ color: "#fcb51e" }} />
                <MuiLink href={`tel:${company.phone}`} sx={{ color: "#1f2937" }}>
                {company.phone}
                </MuiLink>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ borderTop: "1px solid rgba(15,23,42,0.16)", py: 2.5 }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 1,
            justifyContent: "space-between",
            alignItems: "center",
            color: "#1f2937",
          }}
        >
          <Typography variant="body2">Copyright © 2024–2025 | Powered by KruskalCode</Typography>
          <Stack direction="row" spacing={2}>
            <MuiLink href={company.termsUrl} sx={{ color: "#1f2937" }}>
              Terms and Condition
            </MuiLink>
            <MuiLink href={company.privacyUrl} sx={{ color: "#1f2937" }}>
              Privacy Policy
            </MuiLink>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
