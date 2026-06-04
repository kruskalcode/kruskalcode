import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import PageHero from "@/components/PageHero";
import { company } from "@/data/site";

export const metadata = {
  title: "Terms and Condition",
  description: "Terms and conditions for using KruskalCode services and website.",
};

const sections = [
  {
    title: "Use of This Website",
    body: "This website is provided for general information about KruskalCode, our services, and ways to contact our team. You agree not to misuse the website, attempt unauthorized access, or interfere with normal site operation.",
  },
  {
    title: "Service Discussions",
    body: "Information submitted through contact forms, email, or scheduling links is used to understand your project needs. A service engagement only begins after both parties agree to scope, timeline, pricing, and delivery terms in writing.",
  },
  {
    title: "Intellectual Property",
    body: "The KruskalCode name, branding, website content, layouts, and service descriptions belong to KruskalCode unless otherwise stated. Client-owned materials remain the property of the client.",
  },
  {
    title: "Third-Party Links",
    body: "This website may link to third-party services such as scheduling, maps, or social platforms. KruskalCode is not responsible for the content, availability, or privacy practices of third-party websites.",
  },
  {
    title: "Limitation of Liability",
    body: "The website is provided as is for informational purposes. KruskalCode is not liable for indirect, incidental, or consequential damages arising from use of this website.",
  },
  {
    title: "Contact",
    body: `Questions about these terms can be sent to ${company.email}.`,
  },
];

export default function TermsAndConditionPage() {
  return (
    <>
      <PageHero
        current="Terms and Condition"
        eyebrow="Legal"
        title="Terms and Condition"
        subtitle="Please read these terms before using the KruskalCode website or contacting us about a project."
      />
      <Box component="section" sx={{ bgcolor: "background.default", px: { xs: 2, md: 3 }, pb: { xs: 9, md: 12 } }}>
        <Container maxWidth="md">
        <Paper sx={{ mt: 5, p: { xs: 3, md: 4 } }}>
          <Stack spacing={4}>
            {sections.map((section) => (
              <Box key={section.title}>
                <Typography variant="h4" sx={{ mb: 1.5 }}>
                  {section.title}
                </Typography>
                <Typography color="text.secondary">{section.body}</Typography>
              </Box>
            ))}
          </Stack>
        </Paper>
      </Container>
      </Box>
    </>
  );
}
