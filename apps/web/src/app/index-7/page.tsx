'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import AboutSection from '@/app/components/sections/AboutSection';
import ServicesSection from '@/app/components/sections/ServicesSection';
import ProjectsSection from '@/app/components/sections/ProjectsSection';
import ProductsSection from '@/app/components/sections/ProductsSection';
import TestimonialsSection from '@/app/components/sections/TestimonialsSection';
import TeamSection from '@/app/components/sections/TeamSection';
import FAQSection from '@/app/components/sections/FAQSection';

export default function Index7Page() {
  return (
    <>
      <HeroSection
        backgroundImage="/assets/img/hero/hero-bg7.jpg"
        subtitle="Educational Programs"
        title="Learn to Grow"
        description="Workshops, courses, and certifications for gardeners of all levels."
        primaryButtonText="View Courses"
        primaryButtonHref="/blog"
        secondaryButtonText="Book Workshop"
        secondaryButtonHref="/contact"
      />
      <ServicesSection
        subtitle="Education Services"
        title="Hands-On Learning"
      />
      <AboutSection
        subtitle="Our Philosophy"
        title="Knowledge Grows Gardens"
      />
      <TeamSection
        subtitle="Instructors"
        title="Expert Educators"
      />
      <ProjectsSection
        subtitle="Demo Gardens"
        title="Living Classrooms"
      />
      <TestimonialsSection
        subtitle="Students"
        title="Learning Success"
      />
      <ProductsSection
        subtitle="Learning Kits"
        title="Garden Education Tools"
      />
      <FAQSection
        subtitle="Education FAQ"
        title="Course Questions"
      />
    </>
  );
}