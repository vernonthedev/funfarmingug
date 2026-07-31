'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import ProjectsSection from '@/app/components/sections/ProjectsSection';
import TeamSection from '@/app/components/sections/TeamSection';
import TestimonialsSection from '@/app/components/sections/TestimonialsSection';
import FAQSection from '@/app/components/sections/FAQSection';

export default function ProjectPage() {
  return (
    <>
      <HeroSection
        subtitle="Our Projects"
        title="Garden Journeys We've Nurtured"
        description="Explore our portfolio of successful home farming transformations."
        primaryButtonText="View Projects"
        primaryButtonHref="#projects"
      />
      <ProjectsSection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}