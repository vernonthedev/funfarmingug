'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import AboutSection from '@/app/components/sections/AboutSection';
import ServicesSection from '@/app/components/sections/ServicesSection';
import TeamSection from '@/app/components/sections/TeamSection';
import TestimonialsSection from '@/app/components/sections/TestimonialsSection';
import FAQSection from '@/app/components/sections/FAQSection';

export default function AboutUsPage() {
    return (
        <>
            <HeroSection
                variant="default"
                subtitle="About Our Agriculture"
                title="Growing Naturally, Living Fully"
                description="Learn about our mission to bring sustainable agriculture to every home."
                primaryButtonText="Our Services"
                primaryButtonHref="/service"
                secondaryButtonText="Contact Us"
                secondaryButtonHref="/contact"
            />
            <AboutSection />
            <ServicesSection />
            <TeamSection />
            <TestimonialsSection />
            <FAQSection />
        </>
    );
}
