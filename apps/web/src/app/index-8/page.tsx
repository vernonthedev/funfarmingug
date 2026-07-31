'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import AboutSection from '@/app/components/sections/AboutSection';
import ServicesSection from '@/app/components/sections/ServicesSection';
import ProjectsSection from '@/app/components/sections/ProjectsSection';
import ProductsSection from '@/app/components/sections/ProductsSection';
import TestimonialsSection from '@/app/components/sections/TestimonialsSection';
import TeamSection from '@/app/components/sections/TeamSection';
import FAQSection from '@/app/components/sections/FAQSection';

export default function Index8Page() {
  return (
    <>
      <HeroSection
        backgroundImage="/assets/img/hero/hero-bg8.jpg"
        subtitle="Commercial Farming"
        title="Scale Your Operation"
        description="Professional solutions for market gardens, CSA farms, and commercial growers."
        primaryButtonText="Commercial Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="View Case Studies"
        secondaryButtonHref="/project"
      />
      <ServicesSection
        subtitle="Commercial Services"
        title="Professional Scale Solutions"
      />
      <ProjectsSection
        subtitle="Commercial Projects"
        title="Farms We've Built"
      />
      <AboutSection
        subtitle="Commercial Expertise"
        title="Decades of Farm Experience"
      />
      <TeamSection
        subtitle="Farm Consultants"
        title="Agriculture Professionals"
      />
      <ProductsSection
        subtitle="Wholesale"
        title="Bulk Farm Supplies"
      />
      <TestimonialsSection
        subtitle="Farmers"
        title="Commercial Success"
      />
      <FAQSection
        subtitle="Commercial FAQ"
        title="Scaling Questions"
      />
    </>
  );
}