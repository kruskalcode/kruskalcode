import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import PageHero from "@/components/PageHero";
import { company } from "@/data/site";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for KruskalCode website visitors, leads, and clients.",
};

const sections = [
  {
    title: "Information We Collect",
    body: "When you contact KruskalCode, we may collect your name, email address, phone number, selected service, project details, and any message you choose to share.",
  },
  {
    title: "How We Use Information",
    body: "We use submitted information to respond to inquiries, discuss project requirements, schedule calls, prepare proposals, and provide services you request.",
  },
  {
    title: "Sharing Information",
    body: "We do not sell personal information. We may use trusted third-party tools for scheduling, email, analytics, maps, or hosting when needed to operate the website and communicate with you.",
  },
  {
    title: "Data Security",
    body: "We take reasonable steps to protect information shared with us, but no internet transmission or electronic storage method can be guaranteed to be completely secure.",
  },
  {
    title: "Your Choices",
    body: "You can contact us to request access, correction, or deletion of information you previously shared, subject to any legal or operational requirements.",
  },
  {
    title: "Contact",
    body: `Privacy questions can be sent to ${company.email}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        current="Privacy Policy"
        eyebrow="Privacy"
        title="Privacy Policy"
        subtitle="This policy explains how KruskalCode handles information submitted through our website and communication channels."
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
