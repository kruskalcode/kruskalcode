import Diversity3Icon from "@mui/icons-material/Diversity3";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import FlagIcon from "@mui/icons-material/Flag";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import MotionBox, { fadeUp, staggerContainer } from "@/components/MotionBox";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "About",
  description:
    "Learn about KruskalCode, an Islamabad software agency focused on scalable web, mobile, cloud, and AI product development.",
};

const values = [
  "Build reliable technology that supports real business outcomes.",
  "Communicate clearly from discovery through launch and support.",
  "Use modern engineering practices without unnecessary complexity.",
];

const team = [
  {
    name: "KruskalCode Lead",
    role: "Product & Engineering",
    bio: "Guides product strategy, delivery planning, and full-stack execution for client projects.",
  },
  {
    name: "Solutions Architect",
    role: "Cloud & Architecture",
    bio: "Designs scalable infrastructure, APIs, integrations, and deployment workflows.",
  },
  {
    name: "Delivery Specialist",
    role: "Design, QA & Support",
    bio: "Keeps user experience, testing, communication, and launch readiness moving together.",
  },
];

const valueCards = [
  {
    icon: FlagIcon,
    title: "Mission",
    text: "Help founders, agencies, and growing businesses launch useful, scalable, secure products.",
  },
  {
    icon: EmojiObjectsIcon,
    title: "Innovation",
    text: "Apply modern technology with practical judgment, clear scope, and measurable outcomes.",
  },
  {
    icon: Diversity3Icon,
    title: "Partnership",
    text: "Communicate clearly, report progress honestly, and stay invested after launch.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        current="About"
        eyebrow="About KruskalCode"
        title="Software delivery shaped by strategy, craft, and care."
        subtitle="KruskalCode is a software agency based in Islamabad, Pakistan, helping companies build, modernize, and scale digital products across web, mobile, cloud, and AI."
      />

      <Box component="section" sx={{ py: { xs: 9, md: 12 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ mb: 3 }}>Our Story</Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.85 }}>
              KruskalCode was created for teams that need dependable software partners, not just
              code output. We bring together product planning, modern UI development, backend
              engineering, cloud infrastructure, and ongoing support to help clients move from idea
              to reliable launch.
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 2.5, lineHeight: 1.85 }}>
              From our base in Islamabad, we work with clients across markets to deliver websites,
              mobile apps, AI-powered workflows, DevOps systems, and technical consulting with a
              focus on clarity, quality, and long-term maintainability.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  minHeight: 380,
                  borderRadius: 4,
                  border: "1px solid rgba(252,181,30,0.24)",
                  background:
                    "linear-gradient(135deg, rgba(252,181,30,0.32), rgba(15,23,42,0.92)), radial-gradient(circle at 70% 20%, rgba(252,181,30,0.38), transparent 14rem)",
                  display: "grid",
                  placeItems: "center",
                  textAlign: "center",
                  p: 4,
                }}
              >
                <Typography variant="h3">Islamabad Built. Globally Ready.</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ bgcolor: "background.paper", py: { xs: 9, md: 12 } }}>
        <Container maxWidth="lg">
          <MotionBox component={Grid} container spacing={3} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {valueCards.map((card) => {
              const Icon = card.icon;
              return (
                <Grid item xs={12} md={4} key={card.title}>
                  <MotionBox variants={fadeUp} sx={{ height: "100%" }}>
                    <Card sx={{ height: "100%" }}>
                      <CardContent sx={{ p: 3 }}>
                        <Icon color="primary" sx={{ fontSize: 44 }} />
                        <Typography variant="h5" color="primary" sx={{ mt: 2 }}>{card.title}</Typography>
                        <Typography color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.7 }}>{card.text}</Typography>
                      </CardContent>
                    </Card>
                  </MotionBox>
                </Grid>
              );
            })}
          </MotionBox>
          <Stack spacing={1.5} sx={{ mt: 5 }}>
            {values.map((value) => (
              <Typography key={value} color="text.secondary">
                - {value}
              </Typography>
            ))}
          </Stack>
        </Container>
      </Box>

      <Box component="section" sx={{ bgcolor: "background.default", py: { xs: 9, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 6, textAlign: "center" }}>
            <Typography variant="h2">A focused delivery team for ambitious products.</Typography>
          </Box>
          <Grid container spacing={3}>
            {team.map((member) => (
              <Grid item xs={12} md={4} key={member.name}>
                <Card sx={{ height: "100%", textAlign: "center" }}>
                  <CardContent sx={{ p: 3 }}>
                    <Avatar
                      sx={{
                        mx: "auto",
                        width: 96,
                        height: 96,
                        bgcolor: "primary.main",
                        color: "#0a0f1e",
                        fontFamily: "'Sora', sans-serif",
                        fontSize: 32,
                        fontWeight: 800,
                      }}
                    >
                      {member.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}
                    </Avatar>
                    <Typography variant="h5" sx={{ mt: 3 }}>{member.name}</Typography>
                    <Typography color="primary" sx={{ mt: 0.5, fontWeight: 700 }}>{member.role}</Typography>
                    <Typography color="text.secondary" sx={{ mt: 2, lineHeight: 1.7 }}>{member.bio}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
