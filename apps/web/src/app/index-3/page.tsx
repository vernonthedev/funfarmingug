'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import AboutSection from '@/app/components/sections/AboutSection';
import ServicesSection from '@/app/components/sections/ServicesSection';
import ProjectsSection from '@/app/components/sections/ProjectsSection';
import ProductsSection from '@/app/components/sections/ProductsSection';
import TestimonialsSection from '@/app/components/sections/TestimonialsSection';
import TeamSection from '@/app/components/sections/TeamSection';
import FAQSection from '@/app/components/sections/FAQSection';

export default function Index3Page() {
  return (
    <>
      <HeroSection
        backgroundImage="/assets/img/hero/hero-bg3.jpg"
        subtitle="Organic Living"
        title="Grow Fresh, Live Fresh"
        description="Your journey to sustainable living starts here. Discover the joy of homegrown food."
        primaryButtonText="Get Started"
        primaryButtonHref="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonHref="/about-us"
      />
      <ServicesSection
        subtitle="Our Services"
        title="Tailored for Every Space"
      />
      <AboutSection
        subtitle="Our Story"
        title="From Seed to Harvest"
      />
      <ProjectsSection
        subtitle="Featured Projects"
        title="Success Stories"
      />
      <TeamSection
        subtitle="Our Team"
        title="Passionate Growers"
      />
      <TestimonialsSection
        subtitle="Testimonials"
        title="Client Success"
      />
      <ProductsSection
        subtitle="Products"
        title="Quality Supplies"
      />
      <FAQSection
        subtitle="FAQ"
        title="Common Questions"
      />
    </>
  );
}