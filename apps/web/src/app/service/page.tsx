'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import ServicesSection from '@/app/components/sections/ServicesSection';
import TeamSection from '@/app/components/sections/TeamSection';
import TestimonialsSection from '@/app/components/sections/TestimonialsSection';
import FAQSection from '@/app/components/sections/FAQSection';

export default function ServicePage() {
    return (
        <>
            <HeroSection
                subtitle="Our Services"
                title="Services Designed for Home Growers"
                description="We offer a range of home-friendly agriculture services tailored to help you grow your own food."
                primaryButtonText="Get Started"
                primaryButtonHref="/contact"
            />
            <ServicesSection />
            <TeamSection />
            <TestimonialsSection />
            <FAQSection />
        </>
    );
}
