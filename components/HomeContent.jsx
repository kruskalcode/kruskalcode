"use client";

import ConversionHero from "@/components/ConversionHero";
import TrustCredibilitySection from "@/components/TrustCredibilitySection";
import WhatWeBuildSection from "@/components/WhatWeBuildSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import WhyKruskalCodeSection from "@/components/WhyKruskalCodeSection";
import DevelopmentProcessSection from "@/components/DevelopmentProcessSection";
import TechnologySection from "@/components/TechnologySection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import { homepageFaqs, homepageHero } from "@/data/conversion";

export default function HomeContent() {
  return (
    <>
      <ConversionHero
        h1={homepageHero.h1}
        supporting={homepageHero.supporting}
        primaryCta={homepageHero.primaryCta}
        secondaryCta={homepageHero.secondaryCta}
      />
      <TrustCredibilitySection showLandingLink />
      <WhatWeBuildSection />
      <FeaturedWorkSection />
      <WhyKruskalCodeSection />
      <DevelopmentProcessSection />
      <TechnologySection />
      <FaqSection items={homepageFaqs} />
      <FinalCtaSection />
    </>
  );
}
