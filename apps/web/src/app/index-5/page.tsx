'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import AboutSection from '@/app/components/sections/AboutSection';
import ServicesSection from '@/app/components/sections/ServicesSection';
import ProjectsSection from '@/app/components/sections/ProjectsSection';
import ProductsSection from '@/app/components/sections/ProductsSection';
import TestimonialsSection from '@/app/components/sections/TestimonialsSection';
import TeamSection from '@/app/components/sections/TeamSection';
import FAQSection from '@/app/components/sections/FAQSection';

export default function Index5Page() {
    return (
        <>
            <HeroSection
                backgroundImage="/assets/img/hero/hero-bg5.jpg"
                subtitle="Permaculture Design"
                title="Design with Nature"
                description="Create resilient, self-sustaining food systems using permaculture principles."
                primaryButtonText="Design My Garden"
                primaryButtonHref="/contact"
                secondaryButtonText="Learn Permaculture"
                secondaryButtonHref="/blog"
            />
            <AboutSection
                subtitle="Permaculture Ethics"
                title="Earth Care, People Care, Fair Share"
            />
            <ServicesSection
                subtitle="Design Services"
                title="Regenerative Garden Design"
            />
            <ProjectsSection
                subtitle="Permaculture Projects"
                title="Food Forests & Guilds"
            />
            <TeamSection
                subtitle="Designers"
                title="Certified Permaculturists"
            />
            <ProductsSection
                subtitle="Permaculture Plants"
                title="Perennial Food Systems"
            />
            <TestimonialsSection
                subtitle="Permaculture Students"
                title="Transformed Landscapes"
            />
            <FAQSection
                subtitle="Permaculture FAQ"
                title="Design Questions Answered"
            />
        </>
    );
}
