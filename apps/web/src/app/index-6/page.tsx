'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import AboutSection from '@/app/components/sections/AboutSection';
import ServicesSection from '@/app/components/sections/ServicesSection';
import ProjectsSection from '@/app/components/sections/ProjectsSection';
import ProductsSection from '@/app/components/sections/ProductsSection';
import TestimonialsSection from '@/app/components/sections/TestimonialsSection';
import TeamSection from '@/app/components/sections/TeamSection';
import FAQSection from '@/app/components/sections/FAQSection';

export default function Index6Page() {
  return (
    <>
      <HeroSection
        backgroundImage="/assets/img/hero/hero-bg6.jpg"
        subtitle="Community Gardens"
        title="Growing Together"
        description="Build community through shared gardening spaces. Connect, learn, and harvest together."
        primaryButtonText="Join a Garden"
        primaryButtonHref="/contact"
        secondaryButtonText="Start a Garden"
        secondaryButtonHref="/service"
      />
      <ServicesSection
        subtitle="Community Services"
        title="Shared Space Solutions"
      />
      <ProjectsSection
        subtitle="Community Projects"
        title="Neighborhood Gardens"
      />
      <AboutSection
        subtitle="Our Community"
        title="Growing Connections"
      />
      <TeamSection
        subtitle="Coordinators"
        title="Community Leaders"
      />
      <TestimonialsSection
        subtitle="Members"
        title="Community Voices"
      />
      <ProductsSection
        subtitle="Bulk Supplies"
        title="Community Pricing"
      />
      <FAQSection
        subtitle="Community FAQ"
        title="Starting a Garden Together"
      />
    </>
  );
}