'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import AboutSection from '@/app/components/sections/AboutSection';
import ServicesSection from '@/app/components/sections/ServicesSection';
import ProjectsSection from '@/app/components/sections/ProjectsSection';
import ProductsSection from '@/app/components/sections/ProductsSection';
import TestimonialsSection from '@/app/components/sections/TestimonialsSection';
import TeamSection from '@/app/components/sections/TeamSection';
import FAQSection from '@/app/components/sections/FAQSection';

export default function Index2Page() {
  return (
    <>
      <HeroSection
        backgroundImage="/assets/img/hero/hero-bg2.jpg"
        subtitle="Welcome to Orgaanic"
        title="Cultivate Your Green Paradise"
        description="Transform your space into a thriving organic garden with our expert guidance and premium products."
        primaryButtonText="Explore Services"
        primaryButtonHref="/service"
        secondaryButtonText="View Projects"
        secondaryButtonHref="/project"
      />
      <AboutSection
        subtitle="Why Choose Us"
        title="Rooted in Excellence, Grown with Passion"
        experienceYears={15}
      />
      <ServicesSection
        subtitle="What We Offer"
        title="Comprehensive Garden Solutions"
      />
      <ProjectsSection
        subtitle="Our Work"
        title="Gardens We've Transformed"
      />
      <ProductsSection
        subtitle="Shop"
        title="Premium Garden Products"
      />
      <TestimonialsSection
        subtitle="Happy Gardeners"
        title="Stories from Our Community"
      />
      <TeamSection
        subtitle="Our Experts"
        title="Meet Our Garden Specialists"
      />
      <FAQSection
        subtitle="Questions?"
        title="We Have Answers"
      />
    </>
  );
}