'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import TeamSection from '@/app/components/sections/TeamSection';
import TestimonialsSection from '@/app/components/sections/TestimonialsSection';
import FAQSection from '@/app/components/sections/FAQSection';

export default function TeamPage() {
  return (
    <>
      <HeroSection
        subtitle="Our Team"
        title="Meet the Minds Behind Orgaanic"
        description="Our team of passionate agriculturists, designers, and eco-enthusiasts dedicated to sustainable living."
        primaryButtonText="Join Our Team"
        primaryButtonHref="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonHref="/about-us"
      />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}