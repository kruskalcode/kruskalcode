import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import MotionBox, { fadeUp, staggerContainer } from "@/components/MotionBox";
import ServiceCard from "@/components/ServiceCard";
import { company, services, stats, testimonials, whyChooseUs } from "@/data/site";

export const metadata = {
  title: "KruskalCode | Software Agency in Islamabad",
  description:
    "KruskalCode builds scalable web, mobile, cloud, AI, DevOps, and software consulting solutions for growing teams.",
};

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  size: 4 + (index % 4) * 2,
  left: `${(index * 17) % 100}%`,
  top: `${(index * 29) % 100}%`,
  delay: index * 0.25,
}));

export default function HomePage() {
  return (
    <>
      <Box
        component="section"
        sx={{
          position: "relative",
          display: "flex",
          minHeight: "calc(100vh - 64px)",
          alignItems: "center",
          overflow: "hidden",
          bgcolor: "background.default",
          py: { xs: 12, md: 16 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 20%, rgba(252,181,30,0.26), transparent 28rem), radial-gradient(circle at 80% 10%, rgba(252,181,30,0.16), transparent 24rem)",
          }}
        />
        {particles.map((particle) => (
          <MotionBox
            key={particle.id}
            aria-hidden="true"
            animate={{ y: [0, -22, 0], opacity: [0.2, 0.75, 0.2] }}
            transition={{ duration: 5, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
            sx={{
              position: "absolute",
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              borderRadius: "50%",
              bgcolor: "primary.main",
              boxShadow: "0 0 24px rgba(252,181,30,0.75)",
            }}
          />
        ))}
        <Container maxWidth="lg" sx={{ position: "relative", textAlign: "center" }}>
          <MotionBox variants={staggerContainer} initial="hidden" animate="visible" sx={{ mx: "auto", maxWidth: 930 }}>
            <MotionBox variants={fadeUp}>
              <Typography sx={{ mb: 1.5, color: "primary.main", fontWeight: 800, letterSpacing: 2.4, textTransform: "uppercase" }}>
                It&apos;s All about
              </Typography>
            </MotionBox>
            <MotionBox variants={fadeUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: 58, sm: 76, md: 112 }, lineHeight: 0.95 }}>
                KruskalCode
              </Typography>
            </MotionBox>
            <MotionBox variants={fadeUp}>
              <Typography color="text.secondary" sx={{ mx: "auto", mt: 4, maxWidth: 850, fontSize: { xs: 17, md: 20 }, lineHeight: 1.9 }}>
                At KruskalCode, we are passionate about transforming ideas into digital experiences
                that drive success. We bring together creativity, technology, and strategy to deliver
                solutions that meet the unique needs of each client.
              </Typography>
            </MotionBox>
            <MotionBox variants={fadeUp}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" sx={{ mt: 5 }}>
                <Button
                  component={NextLink}
                  href="/contact/"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ color: "#0a0f1e", px: 4, py: 1.5 }}
                >
                  Start a Project
                </Button>
                <Button
                  component={NextLink}
                  href="/services/"
                  variant="outlined"
                  size="large"
                  sx={{ borderColor: "primary.main", color: "primary.main", px: 4, py: 1.5 }}
                >
                  What We Offer
                </Button>
              </Stack>
            </MotionBox>
          </MotionBox>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: { xs: -5, md: -7 }, position: "relative", zIndex: 2 }}>
        <Paper sx={{ bgcolor: "background.paper", borderTop: "4px solid #fcb51e", p: { xs: 3, md: 4 } }}>
          <Grid container spacing={3}>
          {stats.map((stat) => (
            <Grid item xs={6} md={3} key={stat.label}>
              <Typography variant="h3" color="primary" textAlign="center">
                {stat.value}
              </Typography>
              <Typography color="text.secondary" textAlign="center" sx={{ mt: 1 }}>
                {stat.label}
              </Typography>
            </Grid>
          ))}
          </Grid>
        </Paper>
      </Container>

      <Box component="section" sx={{ bgcolor: "background.default", py: { xs: 10, md: 13 } }}>
        <Container maxWidth="lg">
          <SectionHeading
            eyebrow="Support and Guidance"
            title="What We Offer"
            subtitle="At KruskalCode, we offer a full spectrum of development services designed to elevate your online presence and drive business growth."
          />
          <MotionBox
            component={Grid}
            container
            spacing={3}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {services.map((service) => (
              <Grid item xs={12} md={6} lg={4} key={service.slug}>
                <MotionBox variants={fadeUp} sx={{ height: "100%" }}>
                  <ServiceCard service={service} />
                </MotionBox>
              </Grid>
            ))}
          </MotionBox>
        </Container>
      </Box>

      <Box component="section" sx={{ bgcolor: "background.paper", py: { xs: 10, md: 13 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography sx={{ mb: 1.5, color: "primary.main", fontWeight: 800, letterSpacing: 1.8, textTransform: "uppercase" }}>
                Why Choose Us?
              </Typography>
              <Typography variant="h2" sx={{ mb: 3, fontSize: { xs: 36, md: 48 } }}>
                Why Choose KruskalCode?
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
                KruskalCode is a software development company focused on creating high-quality,
                innovative solutions that align with your business goals.
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                We collaborate closely with clients and use flexible delivery methods so each project
                can move quickly while staying scalable, secure, and easy to improve.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <List>
                {whyChooseUs.map((item) => (
                  <ListItem key={item} sx={{ mb: 1.5, bgcolor: "rgba(255,255,255,0.04)", borderRadius: 2 }}>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={item} primaryTypographyProps={{ fontWeight: 700 }} />
                  </ListItem>
            ))}
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ bgcolor: "background.default", py: { xs: 10, md: 13 } }}>
        <Container maxWidth="lg">
          <SectionHeading
            title="What People Say"
            subtitle="Discover how KruskalCode has made a difference for clients through reliable delivery, strong communication, and ongoing support."
          />
          <Grid container spacing={3}>
            {testimonials.map((testimonial) => (
              <Grid item xs={12} md={4} key={testimonial.name}>
                <Card sx={{ height: "100%" }}>
                  <CardContent sx={{ p: 3 }}>
                    <FormatQuoteIcon color="primary" sx={{ fontSize: 42 }} />
                    <Typography sx={{ mt: 1, lineHeight: 1.8 }}>&quot;{testimonial.quote}&quot;</Typography>
                    <Rating value={5} readOnly sx={{ mt: 3, color: "#fcb51e" }} />
                    <Typography variant="h6" sx={{ mt: 3 }}>
                    {testimonial.name}
                    </Typography>
                    <Typography color="text.secondary">{testimonial.location}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ bgcolor: "#fcb51e", color: "#0a0f1e", py: { xs: 8, md: 10 } }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h2" sx={{ fontSize: { xs: 36, md: 52 } }}>
            Would you like to start with us?
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Let&apos;s discuss how we can help your agency or business grow with the right digital solution.
          </Typography>
          <Button
            href={company.scheduleUrl}
            target="_blank"
            rel="noreferrer"
            variant="contained"
            sx={{ mt: 4, background: "#0a0f1e", color: "#fcb51e", "&:hover": { background: "#0f172a" } }}
          >
            Want to start Now
          </Button>
        </Container>
      </Box>
    </>
  );
}

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Box sx={{ mb: 7, textAlign: "center" }}>
      {eyebrow ? (
        <Typography sx={{ mb: 1, color: "primary.main", fontWeight: 800, letterSpacing: 1.8, textTransform: "uppercase" }}>
          {eyebrow}
        </Typography>
      ) : null}
      <Typography variant="h2" sx={{ fontSize: { xs: 36, md: 50 } }}>
        {title}
      </Typography>
      <Box sx={{ mx: "auto", mt: 2, height: 4, width: 76, borderRadius: 999, bgcolor: "primary.main" }} />
      {subtitle ? (
        <Typography color="text.secondary" sx={{ mx: "auto", mt: 3, maxWidth: 760, lineHeight: 1.8 }}>
          {subtitle}
        </Typography>
      ) : null}
    </Box>
  );
}
