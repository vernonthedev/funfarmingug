'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import TestimonialsSection from '@/app/components/sections/TestimonialsSection';
import FAQSection from '@/app/components/sections/FAQSection';

export default function TestimonialsPage() {
    return (
        <>
            <HeroSection
                subtitle="Testimonials"
                title="What Our Customers Say"
                description="Real stories from families who've transformed their spaces with Orgaanic."
                primaryButtonText="Share Your Story"
                primaryButtonHref="/contact"
            />
            <TestimonialsSection />
            <FAQSection />
        </>
    );
}
