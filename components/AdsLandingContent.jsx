"use client";

import ConversionHero from "@/components/ConversionHero";
import TrustCredibilitySection from "@/components/TrustCredibilitySection";
import WhatWeBuildSection from "@/components/WhatWeBuildSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import WhyKruskalCodeSection from "@/components/WhyKruskalCodeSection";
import DevelopmentProcessSection from "@/components/DevelopmentProcessSection";
import TechnologySection from "@/components/TechnologySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import LeadQualificationForm from "@/components/LeadQualificationForm";
import FinalCtaSection from "@/components/FinalCtaSection";
import { Box, Container } from "@mui/material";
import { landingFaqs, landingHero } from "@/data/conversion";

export default function AdsLandingContent() {
  return (
    <>
      <ConversionHero
        eyebrow="Custom Software Development"
        h1={landingHero.h1}
        supporting={landingHero.supporting}
        primaryCta={landingHero.primaryCta}
        secondaryCta={landingHero.secondaryCta}
      />
      <TrustCredibilitySection />
      <WhatWeBuildSection dark landing />
      <FeaturedWorkSection showRelated />
      <WhyKruskalCodeSection />
      <DevelopmentProcessSection />
      <TechnologySection />
      <TestimonialsSection />
      <FaqSection items={landingFaqs} />
      <Box
        component="section"
        sx={{ bgcolor: "#f8fafc", py: { xs: 7, md: 10 } }}
      >
        <Container maxWidth="md">
          <LeadQualificationForm source="custom-software-development" />
        </Container>
      </Box>
      <FinalCtaSection
        primaryHref="#project-form"
        secondaryHref="#project-form"
        secondaryLabel="Get a Project Estimate"
      />
    </>
  );
}
