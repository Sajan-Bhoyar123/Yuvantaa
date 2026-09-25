import React from 'react';
import Hero from '../components/home/Hero';
import BrandIntro from '../components/home/BrandIntro';
import ServicesSection from '../components/home/ServicesSection';
import WhyYuvantaa from '../components/home/WhyYuvantaa';
import BusinessGrowthFeature from '../components/home/BusinessGrowthFeature';
import CreativeServicesSection from '../components/home/CreativeServicesSection';
import AISolutionsSection from '../components/home/AISolutionsSection';
import ProcessSection from '../components/home/ProcessSection';
import TrustSection from '../components/home/TrustSection';
import FAQSection from '../components/home/FAQSection';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-white text-content-primary">
      {/* 01. Hero (PROMPT 4) */}
      <Hero />

      {/* 02. Brand Introduction (PROMPT 5) */}
      <BrandIntro />

      {/* 03. Core Services 3-Pillar Cards (PROMPT 6) */}
      <ServicesSection />

      {/* 04. Why Yuvantaa Editorial Positioning (PROMPT 7) */}
      <WhyYuvantaa />

      {/* 05. Business Growth Feature & Journey (PROMPT 8) */}
      <BusinessGrowthFeature />

      {/* 06. Creative Services Studio Grid (PROMPT 9) */}
      <CreativeServicesSection />

      {/* 07. AI Solutions Major Dark Section (PROMPT 10) */}
      <AISolutionsSection />

      {/* 08. How We Work Process Timeline (PROMPT 11) */}
      <ProcessSection />

      {/* 09. Trust & Why Work With Yuvantaa (PROMPT 13) */}
      <TrustSection />

      {/* 11. Frequently Asked Questions (PROMPT 14) */}
      <FAQSection />

      {/* 12. Final High-Impact CTA (PROMPT 14) */}
      <FinalCTA />
    </div>
  );
}
