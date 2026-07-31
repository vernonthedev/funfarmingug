'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import AboutSection from '@/app/components/sections/AboutSection';
import ServicesSection from '@/app/components/sections/ServicesSection';
import ProjectsSection from '@/app/components/sections/ProjectsSection';
import ProductsSection from '@/app/components/sections/ProductsSection';
import TestimonialsSection from '@/app/components/sections/TestimonialsSection';
import TeamSection from '@/app/components/sections/TeamSection';
import FAQSection from '@/app/components/sections/FAQSection';

export default function Index9Page() {
  return (
    <>
      <HeroSection
        backgroundImage="/assets/img/hero/hero-bg9.jpg"
        subtitle="Indoor Growing"
        title="Grow Anywhere, Anytime"
        description="Hydroponics, aquaponics, and indoor growing systems for year-round harvests."
        primaryButtonText="Indoor Systems"
        primaryButtonHref="/service"
        secondaryButtonText="Growing Guides"
        secondaryButtonHref="/blog"
      />
      <ServicesSection
        subtitle="Indoor Services"
        title="Controlled Environment Solutions"
      />
      <ProductsSection
        subtitle="Indoor Equipment"
        title="Grow Lights & Systems"
      />
      <ProjectsSection
        subtitle="Indoor Projects"
        title="Year-Round Gardens"
      />
      <AboutSection
        subtitle="Indoor Expertise"
        title="Technology Meets Nature"
      />
      <TeamSection
        subtitle="Indoor Specialists"
        title="Hydroponics Experts"
      />
      <TestimonialsSection
        subtitle="Indoor Growers"
        title="Indoor Harvests"
      />
      <FAQSection
        subtitle="Indoor FAQ"
        title="Growing Indoors"
      />
    </>
  );
}