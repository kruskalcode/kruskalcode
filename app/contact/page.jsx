import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PageHero from "@/components/PageHero";
import { company, services } from "@/data/site";

export const metadata = {
  title: "Contact",
  description:
    "Contact KruskalCode in Islamabad for web, mobile, cloud, AI, DevOps, staffing, and software consulting projects.",
};

const contactCards = [
  {
    label: "Address",
    value: company.location,
    href: "https://maps.google.com/?q=Plot%2081%20St%204%20Sector%20I-10%2F3%20Islamabad%2C%20Pakistan",
    icon: LocationOnIcon,
  },
  {
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    icon: EmailIcon,
  },
  {
    label: "Phone",
    value: company.phone,
    href: `tel:${company.phone}`,
    icon: PhoneIcon,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        current="Contact"
        eyebrow="Start a Conversation"
        title="Tell us what you want to build."
        subtitle="Share a few details and KruskalCode will help you choose the right path for your product, platform, or technical team."
      />

      <Box component="section" sx={{ bgcolor: "background.default", pb: { xs: 10, md: 13 }, px: { xs: 2, md: 3 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} lg={7}>
              <Paper
                component="form"
                action={`mailto:${company.email}`}
                method="post"
                encType="text/plain"
                sx={{ p: { xs: 3, md: 4 } }}
              >
                <Typography variant="h3">Start a conversation</Typography>
                <Typography color="text.secondary" sx={{ mt: 1.5 }}>
                  This static form opens your email client with the submitted details.
                </Typography>

                <Grid container spacing={2.5} sx={{ mt: 3 }}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Name"
                  name="Name"
                  required
                      placeholder="Your name"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      type="email"
                      label="Email"
                      name="Email"
                      required
                      placeholder="you@example.com"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField fullWidth label="Phone" name="Phone" placeholder="+92..." />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel id="service-label">Service</InputLabel>
                      <Select labelId="service-label" label="Service" name="Service" defaultValue="">
                        {services.map((service) => (
                          <MenuItem key={service.slug} value={service.title}>
                            {service.title}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      minRows={6}
                      label="Message"
                      name="Message"
                      required
                      placeholder="Tell us about your project, timeline, and goals."
                    />
                  </Grid>
                </Grid>

                <Button
              type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<SendIcon />}
                  sx={{ mt: 3, color: "#0a0f1e" }}
                >
                  Send Message
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={12} lg={5}>
              <Stack spacing={2.5}>
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                    <Card
                  key={card.label}
                      component="a"
                  href={card.href}
                  target={card.label === "Address" ? "_blank" : undefined}
                  rel={card.label === "Address" ? "noreferrer" : undefined}
                      sx={{ color: "inherit", transition: "transform 180ms ease", "&:hover": { transform: "translateY(-4px)" } }}
                >
                      <CardContent>
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Box sx={{ display: "grid", placeItems: "center", width: 52, height: 52, borderRadius: 2, bgcolor: "rgba(252,181,30,0.12)" }}>
                            <Icon color="primary" />
                          </Box>
                          <Box>
                            <Typography color="text.secondary" sx={{ textTransform: "uppercase", letterSpacing: 1.5, fontSize: 12 }}>
                              {card.label}
                            </Typography>
                            <Typography sx={{ fontWeight: 700 }}>{card.value}</Typography>
                          </Box>
                        </Stack>
                      </CardContent>
                    </Card>
              );
            })}

                <Button
              href={company.scheduleUrl}
              target="_blank"
              rel="noreferrer"
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<CalendarMonthIcon />}
                  sx={{ color: "#0a0f1e" }}
            >
              Schedule Free Call
                </Button>

                <Box sx={{ overflow: "hidden", borderRadius: 4, border: "1px solid rgba(255,255,255,0.08)" }}>
                  <Box
                    component="iframe"
                title="KruskalCode Islamabad I-10/3 map"
                src="https://www.google.com/maps?q=Plot%2081%20St%204%20Sector%20I-10%2F3%20Islamabad%2C%20Pakistan&output=embed"
                    sx={{ display: "block", width: "100%", height: 320, border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
