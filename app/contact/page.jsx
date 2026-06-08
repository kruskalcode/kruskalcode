"use client";

import ContactHero from "@/components/ContactHero";
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
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { company } from "@/data/site";
import { fadeUp } from "@/components/MotionBox";

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

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px",
    bgcolor: "#f0f0f0",
    fontSize: "14px",
    "& fieldset": { borderColor: "#e0e0e0" },
    "&:hover fieldset": { borderColor: "#fcb51e" },
    "&.Mui-focused fieldset": { borderColor: "#fcb51e" },
  },
  "& .MuiInputLabel-root": {
    fontSize: "14px",
    color: "#666",
  },
  "& .MuiInputLabel-root.Mui-focused": { color: "#fcb51e" },
};

export default function ContactPage() {
  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <ContactHero />

      <Box
        sx={{
          position: "relative",
          bgcolor: "#fff",
          px: 0,
        }}
      >
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
                px: 5,
                bgcolor: "#fff",
                backgroundImage: "url('/assets/backgound.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right center",
                backgroundSize: { xs: "cover", md: "auto 100%" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.6rem", md: "1.9rem" },
                  fontWeight: 700,
                  color: "#fcb51e",
                  fontFamily: "'Sora', sans-serif",
                  mb: 1.5,
                }}
              >
                Request a call back
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#555",
                  lineHeight: 1.8,
                  mb: 3,
                  maxWidth: 520,
                }}
              >
                Got any questions? Looking for some help? Please fill out quick
                form and will try to get back asap.
              </Typography>

              <Box
                component="form"
                action={`mailto:${company.email}`}
                method="post"
                encType="text/plain"
              >
                <Stack spacing={2.5}>
                  <TextField
                    fullWidth
                    label="Full Name *"
                    name="Name"
                    required
                    sx={fieldSx}
                  />
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="Phone"
                    sx={fieldSx}
                  />
                  <TextField
                    fullWidth
                    type="email"
                    label="Email *"
                    name="Email"
                    required
                    sx={fieldSx}
                  />
                  <TextField
                    fullWidth
                    multiline
                    minRows={5}
                    label="How can we help?"
                    name="Message"
                    sx={fieldSx}
                  />
                  <Box>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        bgcolor: "#fcb51e",
                        color: "#0f172a",
                        fontWeight: 700,
                        fontSize: "14px",
                        px: 4,
                        py: 1.2,
                        borderRadius: "4px",
                        textTransform: "none",
                        boxShadow: "none",
                        "&:hover": { bgcolor: "#e09f16", boxShadow: "none" },
                      }}
                    >
                      Submit
                    </Button>
                  </Box>
                </Stack>
              </Box>
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
                  fontFamily: "'Sora', sans-serif",
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
                We aim to respond to all inquiries within 24 hours. Reach out to
                us through any of the channels below.
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
                  fontFamily: "'Sora', sans-serif",
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
