'use client';

import Link from 'next/link';
import PageHeader from '@/components/sections/PageHeader';
import SectionTitle from '@/components/sections/SectionTitle';
import CtaSection from '@/components/sections/CtaSection';

const posts = [
    {
        slug: 'discovering-agro-tourism-in-uganda',
        title: 'Discovering Agro-Tourism in Uganda',
        excerpt:
            'A guide to experiencing farm life in the heart of Uganda. From milking cows to harvesting fresh produce, immerse yourself in the authentic rural experience at Fun Farming Uganda.',
        date: 'June 15, 2024',
        category: 'Agro Tourism',
    },
    {
        slug: 'team-building-at-the-farm',
        title: 'Team Building at the Farm',
        excerpt:
            'Why farms make the best team-building venues. Discover how our Farm Expert Games strengthen communication, leadership, and collaboration in a natural, stress-free environment.',
        date: 'May 28, 2024',
        category: 'Team Building',
    },
    {
        slug: 'the-taste-of-uganda-farm-to-table',
        title: 'The Taste of Uganda: Farm to Table',
        excerpt:
            'Local cuisine experience at its finest. Our chefs prepare meals using ingredients harvested that morning — from grilled goat skewers to steamed matooke with groundnut sauce.',
        date: 'May 10, 2024',
        category: 'FarmFood',
    },
    {
        slug: 'sustainable-farming-practices',
        title: 'Sustainable Farming Practices',
        excerpt:
            'How we maintain our eco-friendly farm through organic composting, rainwater harvesting, natural pest control, and rotational grazing that nurtures the land for future generations.',
        date: 'April 22, 2024',
        category: 'Sustainability',
    },
    {
        slug: 'kids-farm-adventures',
        title: "Kids' Farm Adventures",
        excerpt:
            'Activities for young visitors including animal feeding, egg collecting, nature scavenger hunts, and hands-on planting workshops that teach children where food comes from.',
        date: 'April 5, 2024',
        category: 'Family',
    },
    {
        slug: 'seasonal-events-at-fun-farming',
        title: 'Seasonal Events at Fun Farming',
        excerpt:
            "What's happening this season at Fun Farming Uganda. Check our calendar of events including harvest festivals, bonfire nights, farm camping, and special holiday programmes.",
        date: 'March 18, 2024',
        category: 'Events',
    },
];

export default function BlogPage() {
    return (
        <>
            <PageHeader
                title="Blog"
                bgImage="/assets/images/backgrounds/page-header-bg-1-1.jpg"
                breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
            />

            <section className="blog-grid section-space">
                <div className="container">
                    <SectionTitle
                        tagline="LATEST NEWS"
                        title="Our Latest Stories"
                    />
                    <div className="row gutter-y-30">
                        {posts.map((post, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <article className="blog-grid__item">
                                    <div className="blog-grid__item__image">
                                        <img
                                            src="/img/gallery/funfarm_n13.png"
                                            alt={post.title}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="blog-grid__item__content">
                                        <div className="blog-grid__item__meta">
                                            <span className="blog-grid__item__category">
                                                {post.category}
                                            </span>
                                            <span className="blog-grid__item__date">
                                                {post.date}
                                            </span>
                                        </div>
                                        <h3 className="blog-grid__item__title">
                                            <Link href={`/blog/${post.slug}`}>
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <p className="blog-grid__item__excerpt">
                                            {post.excerpt}
                                        </p>
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="blog-grid__item__link"
                                        >
                                            Read More{' '}
                                            <i className="icon-angle-small-right"></i>
                                        </Link>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CtaSection
                icon="icon-leaf"
                title="Stay Updated"
                text="Subscribe to our newsletter for the latest farm news, events, and special offers."
                buttonLabel="Subscribe Now"
                buttonHref="/contact"
            />
        </>
    );
}
