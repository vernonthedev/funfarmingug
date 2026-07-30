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

            <div className="vl-vlog-inr-area sp1">
                <div className="container">
                    <div className="row">
                        {posts.map((post, index) => (
                            <div className="col-xl-4 col-lg-6" key={index}>
                                <div className="about-inr-vlog-box margin-b30">
                                    <div className="about-inr-vlog-thumb case_img_anime">
                                        <img src="/img/gallery/funfarm_n13.png" alt={post.title} />
                                        <div className="box-text">
                                            <h3>0{index + 1}</h3>
                                            <span>Jul</span>
                                        </div>
                                    </div>
                                    <div className="about-inr-vlog-content">
                                        <div className="about-inr-vlog-meta">
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
                                        </div>
                                        <div className="space16"></div>
                                        <h3>
                                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                        </h3>
                                        <div className="space24"></div>
                                        <div className="text-pera">
                                            <p>{post.excerpt}</p>
                                        </div>
                                        <div className="space28"></div>
                                        <Link href={`/blog/${post.slug}`} className="btn3-home6">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
