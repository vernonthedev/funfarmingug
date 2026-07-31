'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import AboutSection from '@/app/components/sections/AboutSection';
import ServicesSection from '@/app/components/sections/ServicesSection';
import ProjectsSection from '@/app/components/sections/ProjectsSection';
import ProductsSection from '@/app/components/sections/ProductsSection';
import TestimonialsSection from '@/app/components/sections/TestimonialsSection';
import TeamSection from '@/app/components/sections/TeamSection';
import FAQSection from '@/app/components/sections/FAQSection';

export default function Index10Page() {
  return (
    <>
      <HeroSection
        backgroundImage="/assets/img/hero/hero-bg10.jpg"
        subtitle="Sustainable Living"
        title="Beyond the Garden"
        description="Complete sustainable lifestyle solutions - from water conservation to renewable energy."
        primaryButtonText="Sustainability Audit"
        primaryButtonHref="/contact"
        secondaryButtonText="Eco Products"
        secondaryButtonHref="/products"
      />
      <ServicesSection
        subtitle="Sustainability Services"
        title="Holistic Eco Solutions"
      />
      <AboutSection
        subtitle="Our Commitment"
        title="Planet-First Approach"
      />
      <ProjectsSection
        subtitle="Eco Projects"
        title="Sustainable Transformations"
      />
      <ProductsSection
        subtitle="Eco Products"
        title="Sustainable Living Supplies"
      />
      <TeamSection
        subtitle="Sustainability Experts"
        title="Green Living Specialists"
      />
      <TestimonialsSection
        subtitle="Eco Warriors"
        title="Lifestyle Changes"
      />
      <FAQSection
        subtitle="Sustainability FAQ"
        title="Green Living Questions"
      />
    </>
  );
}