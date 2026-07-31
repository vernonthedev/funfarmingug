'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import AboutSection from '@/app/components/sections/AboutSection';
import ServicesSection from '@/app/components/sections/ServicesSection';
import ProjectsSection from '@/app/components/sections/ProjectsSection';
import ProductsSection from '@/app/components/sections/ProductsSection';
import TestimonialsSection from '@/app/components/sections/TestimonialsSection';
import TeamSection from '@/app/components/sections/TeamSection';
import FAQSection from '@/app/components/sections/FAQSection';

export default function Index4Page() {
    return (
        <>
            <HeroSection
                backgroundImage="/assets/img/hero/hero-bg4.jpg"
                subtitle="Urban Farming"
                title="City Spaces, Green Places"
                description="Bring agriculture to your balcony, rooftop, or backyard. We make urban farming simple."
                primaryButtonText="Start Your Garden"
                primaryButtonHref="/service"
                secondaryButtonText="See Our Work"
                secondaryButtonHref="/project"
            />
            <ServicesSection
                subtitle="Urban Solutions"
                title="Designed for City Living"
            />
            <ProjectsSection
                subtitle="Urban Projects"
                title="City Gardens We've Built"
            />
            <AboutSection
                subtitle="Our Mission"
                title="Greening the Concrete Jungle"
            />
            <ProductsSection
                subtitle="Urban Essentials"
                title="Compact Garden Supplies"
            />
            <TestimonialsSection
                subtitle="City Gardeners"
                title="Urban Success Stories"
            />
            <TeamSection
                subtitle="Urban Experts"
                title="City Farming Specialists"
            />
            <FAQSection subtitle="Urban FAQ" title="City Growing Questions" />
        </>
    );
}
