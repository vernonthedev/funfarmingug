'use client';

import Link from 'next/link';
import PageHeader from '@/components/sections/PageHeader';

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
                bgImage="/assets/img/hero/about-us-inr-herothumb.png"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Blog' },
                ]}
            />

            <div className="vl-blog-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 mx-auto text-center">
                            <div className="service-header">
                                <div className="service-topleft">
                                    <h3 data-aos="fade-right" data-aos-duration="800">
                                        <img src="/assets/img/icon/subtitle-icon2.png" alt="" />
                                        Our Recent News
                                    </h3>
                                    <div className="space18"></div>
                                    <h2 className="text-anime-style-3" data-aos="fade-right" data-aos-duration="900">
                                        Latest Articles From Our Blog
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="space44"></div>
                        <div className="row">
                            {posts.map((post, index) => (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
                                    <div className="vl-blog-box" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="vl-blog-thumb">
                                            <img src="/img/gallery/funfarm_n13.png" alt={post.title} />
                                            <Link href={`/blog/${post.slug}`} className="vl-blog-link">
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                        <div className="vl-blog-content">
                                            <ul>
                                                <li>
                                                    <i className="fa-regular fa-calendar"></i>
                                                    {post.date}
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-tag"></i>
                                                    {post.category}
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                            </h3>
                                            <p>{post.excerpt}</p>
                                            <Link href={`/blog/${post.slug}`} className="vl-blog-more">
                                                Read More
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                        <path d="M15.002 10.002H5.00195" stroke="#132C12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M9.00098 14.002L14.001 10.002L9.00098 6.00195" stroke="#132C12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
