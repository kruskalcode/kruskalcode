"use client";

import ConversionHero from "@/components/ConversionHero";
import TrustCredibilitySection from "@/components/TrustCredibilitySection";
import WhatWeBuildSection from "@/components/WhatWeBuildSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import WhyKruskalCodeSection from "@/components/WhyKruskalCodeSection";
import DevelopmentProcessSection from "@/components/DevelopmentProcessSection";
import TechnologySection from "@/components/TechnologySection";
import FaqSection from "@/components/FaqSection";
import LeadQualificationForm from "@/components/LeadQualificationForm";
import FinalCtaSection from "@/components/FinalCtaSection";
import { Box, Container } from "@mui/material";
import { landingFaqs, landingHero } from "@/data/conversion";

export default function AdsLandingContent() {
  return (
    <>
      <ConversionHero
        eyebrow="Google Search · Custom Software"
        h1={landingHero.h1}
        supporting={landingHero.supporting}
        primaryCta={landingHero.primaryCta}
        secondaryCta={landingHero.secondaryCta}
      />
      <WhatWeBuildSection dark />
      <WhoWeHelpSection />
      <FeaturedWorkSection showRelated />
      <DevelopmentProcessSection />
      <TechnologySection />
      <WhyKruskalCodeSection />
      <TrustCredibilitySection />
      <FaqSection items={landingFaqs} />
      <Box
        component="section"
        sx={{ bgcolor: "#f8fafc", py: { xs: 7, md: 10 } }}
        id="discuss"
      >
        <Container maxWidth="md">
          <LeadQualificationForm source="custom-software-development" />
        </Container>
      </Box>
      <FinalCtaSection
        primaryHref="#project-form"
        secondaryHref="/portfolio/"
        secondaryLabel="See Our Work"
      />
    </>
  );
}
