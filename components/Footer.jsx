import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
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

const socialColors = {
  Facebook: "#3b5998",
  Instagram: "#262626",
  LinkedIn: "#0077b5",
  Twitter: "#1da1f2",
  YouTube: "#cd201f",
};

const footerLinkSx = {
  color: "#000000",
  textDecoration: "none",
  fontSize: "14px",
  transition: "color 180ms ease",
  marginTop: "0.1rem !important",
  "&:hover": {
    color: "#fcb51e",
    textDecoration: "none",
  },
};

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#fef0d2",
        color: "#000000",
        borderTop: "1px solid rgba(15,23,42,0.08)",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ py: { xs: 6, md: 3 }, px: { xs: 3, md: 6 } }}
      >
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
            <Typography
              sx={{
                mt: 3,
                color: "#000000",
                lineHeight: 1.8,
                fontSize: "14px",
              }}
            >
              At KruskalCode, we are passionate about transforming ideas into
              digital experiences that drive success. Specializing in
              comprehensive web development services, we bring together
              creativity, technology, and strategy to deliver solutions that
              meet the unique needs of each client.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <Typography
              variant="h3"
              sx={{
                color: "#fcb51e",
                fontSize: "22px",
                fontWeight: 600,
                mb: 3,
              }}
            >
              Quick Links
            </Typography>
            <Stack spacing={1.5}>
              {quickLinks.map((link) => (
                <MuiLink
                  key={link.href}
                  component={NextLink}
                  href={link.href}
                  prefetch
                  sx={footerLinkSx}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <Typography
              variant="h3"
              sx={{
                color: "#fcb51e",
                fontSize: "22px",
                fontWeight: 600,
                mb: 3,
              }}
            >
              Our Services
            </Typography>
            <Stack spacing={1.5}>
              {services.map((service) => (
                <MuiLink
                  key={service.slug}
                  component={NextLink}
                  href={`/services/${service.slug}/`}
                  prefetch
                  sx={footerLinkSx}
                >
                  {service.title}
                </MuiLink>
              ))}
              <MuiLink
                component={NextLink}
                href="/portfolio/"
                prefetch
                sx={footerLinkSx}
              >
                Portfolio
              </MuiLink>
            </Stack>
          </Grid>

          <Grid item xs={12} lg={3}>
            <Typography
              variant="h3"
              sx={{
                color: "#fcb51e",
                fontSize: "22px",
                fontWeight: 600,
                mb: 3,
              }}
            >
              Get in touch
            </Typography>
            <Stack spacing={2} sx={{ color: "#000000", mb: 3 }}>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <LocationOnIcon
                  sx={{ color: "#fcb51e", mt: 0.3, fontSize: 20 }}
                />
                <Typography sx={{ lineHeight: 1.6, fontSize: "14px" }}>
                  Plot 81 St 4 Sector I-10/3 Islamabad
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <EmailIcon sx={{ color: "#fcb51e", fontSize: 20 }} />
                <MuiLink href={`mailto:${company.email}`} sx={footerLinkSx}>
                  {company.email}
                </MuiLink>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <PhoneIcon sx={{ color: "#fcb51e", fontSize: 20 }} />
                <MuiLink
                  href={`tel:${company.phone}`}
                  sx={{ ...footerLinkSx, textDecoration: "none" }}
                >
                  +923314442274
                </MuiLink>
              </Stack>
            </Stack>

            {/* Social Icons inside Get in touch */}
            <Stack direction="row" spacing={1.5}>
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
                      color: "#ffffff",
                      bgcolor: socialColors[social.name] || "#64748b",
                      transition: "opacity 180ms ease, transform 180ms ease",
                      "&:hover": {
                        bgcolor: socialColors[social.name] || "#64748b",
                        opacity: 0.85,
                        transform: "translateY(-3px)",
                      },
                    }}
                  >
                    {Icon ? <Icon fontSize="small" /> : null}
                  </IconButton>
                );
              })}
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          borderTop: "1px solid rgba(15,23,42,0.08)",
          py: 1,
          bgcolor: "#fcb51e",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            px: { xs: 3, md: 6 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            justifyContent: "space-between",
            alignItems: "center",
            color: "#000000",
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <MuiLink
              component={NextLink}
              href={company.termsUrl}
              prefetch
              sx={{
                color: "#000000",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Terms and Condition
            </MuiLink>
            <Typography sx={{ color: "#000000" }}>|</Typography>
            <MuiLink
              component={NextLink}
              href={company.privacyUrl}
              prefetch
              sx={{
                color: "#000000",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Privacy Policy
            </MuiLink>
          </Stack>
          <Typography variant="body2" sx={{ color: "#000000" }}>
            Copyright © 2024 - 2025 | Powered by Kruskal Code
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
