"use client";

import ContactHero from "@/components/ContactHero";
import LeadQualificationForm from "@/components/LeadQualificationForm";
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
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { company } from "@/data/site";
import { fadeUp } from "@/components/MotionBox";
import { trackConversion } from "@/lib/tracking";

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

export default function ContactPage() {
  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <ContactHero />

      <Box sx={{ position: "relative", bgcolor: "#fff", px: 0 }}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={8}>
            <Box
              component={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              sx={{
                py: { xs: 4, md: 6 },
                px: { xs: 2.5, sm: 4, md: 5 },
                bgcolor: "#fff",
              }}
            >
              <LeadQualificationForm source="contact" />
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              component={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              sx={{
                bgcolor: "#f4f7ff",
                height: "100%",
                py: { xs: 5, md: 6 },
                px: { xs: 3, md: 4 },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.6rem", md: "1.9rem" },
                  fontWeight: 700,
                  color: "#fcb51e",
                  fontFamily: "var(--font-sora), 'Sora', sans-serif",
                  mb: 1.5,
                }}
              >
                Get In Touch
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#555",
                  lineHeight: 1.8,
                  mb: 3,
                  maxWidth: 480,
                }}
              >
                Prefer email or phone? Reach out directly — we respond to qualified
                project inquiries promptly.
              </Typography>

              <Stack spacing={2.5} sx={{ mb: 4 }}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <LocationOnIcon
                    sx={{ color: "#fcb51e", mt: 0.2, fontSize: 22 }}
                  />
                  <Typography
                    sx={{ fontSize: "14px", color: "#333", lineHeight: 1.7 }}
                  >
                    Plot 81 St 4 Sector I-10/3 Islamabad
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <EmailIcon sx={{ color: "#fcb51e", fontSize: 22 }} />
                  <Box
                    component="a"
                    href={`mailto:${company.email}`}
                    onClick={() => trackConversion("EMAIL_CLICK")}
                    sx={{
                      fontSize: "14px",
                      color: "#333",
                      textDecoration: "none",
                      "&:hover": { color: "#fcb51e" },
                    }}
                  >
                    {company.email}
                  </Box>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <PhoneIcon sx={{ color: "#fcb51e", fontSize: 22 }} />
                  <Box
                    component="a"
                    href={`tel:${company.phone}`}
                    onClick={() => trackConversion("PHONE_CLICK")}
                    sx={{
                      fontSize: "14px",
                      color: "#333",
                      textDecoration: "none",
                      "&:hover": { color: "#fcb51e" },
                    }}
                  >
                    {company.phone}
                  </Box>
                </Stack>
              </Stack>

              <Typography
                sx={{
                  fontSize: { xs: "1.6rem", md: "1.9rem" },
                  fontWeight: 700,
                  color: "#fcb51e",
                  fontFamily: "var(--font-sora), 'Sora', sans-serif",
                  mb: 2,
                }}
              >
                Follow us
              </Typography>
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
                        width: 40,
                        height: 40,
                        transition: "opacity 180ms ease, transform 180ms ease",
                        "&:hover": {
                          bgcolor: socialColors[social.name] || "#64748b",
                          opacity: 0.85,
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      {Icon ? <Icon fontSize="small" /> : null}
                    </IconButton>
                  );
                })}
              </Stack>

              <Box sx={{ mt: 4 }}>
                <Typography sx={{ fontWeight: 700, color: "#0f172a", mb: 1 }}>
                  Prefer a call?
                </Typography>
                <Box
                  component="a"
                  href={company.scheduleUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackConversion("CONSULTATION_REQUEST", { method: "calendar" })}
                  sx={{
                    color: "#fcb51e",
                    fontWeight: 700,
                    textDecoration: "underline",
                    fontSize: 14,
                  }}
                >
                  Schedule a project discussion
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box component="section" sx={{ lineHeight: 0 }}>
        <Box
          component="iframe"
          title="KruskalCode Islamabad I-10/3 map"
          src="https://www.google.com/maps?q=Plot%2081%20St%204%20Sector%20I-10%2F3%20Islamabad%2C%20Pakistan&output=embed"
          sx={{
            display: "block",
            width: "100%",
            height: { xs: 320, md: 450 },
            border: 0,
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </Box>
  );
}
