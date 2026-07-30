'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/sections/PageHeader';

const posts: Record<
    string,
    { title: string; date: string; category: string; content: string }
> = {
    'discovering-agro-tourism-in-uganda': {
        title: 'Discovering Agro-Tourism in Uganda',
        date: 'June 15, 2024',
        category: 'Agro Tourism',
        content:
            'A guide to experiencing farm life in the heart of Uganda. From milking cows to harvesting fresh produce, immerse yourself in the authentic rural experience at Fun Farming Uganda. Our farm offers visitors a unique opportunity to connect with nature and learn about sustainable agriculture practices.',
    },
    'team-building-at-the-farm': {
        title: 'Team Building at the Farm',
        date: 'May 28, 2024',
        category: 'Team Building',
        content:
            'Why farms make the best team-building venues. Discover how our Farm Expert Games strengthen communication, leadership, and collaboration in a natural, stress-free environment. Our activities are designed to challenge teams while fostering genuine connections.',
    },
    'the-taste-of-uganda-farm-to-table': {
        title: 'The Taste of Uganda: Farm to Table',
        date: 'May 10, 2024',
        category: 'FarmFood',
        content:
            'Local cuisine experience at its finest. Our chefs prepare meals using ingredients harvested that morning — from grilled goat skewers to steamed matooke with groundnut sauce. Experience the true flavors of Uganda.',
    },
    'sustainable-farming-practices': {
        title: 'Sustainable Farming Practices',
        date: 'April 22, 2024',
        category: 'Sustainability',
        content:
            'How we maintain our eco-friendly farm through organic composting, rainwater harvesting, natural pest control, and rotational grazing that nurtures the land for future generations.',
    },
    'kids-farm-adventures': {
        title: "Kids' Farm Adventures",
        date: 'April 5, 2024',
        category: 'Family',
        content:
            'Activities for young visitors including animal feeding, egg collecting, nature scavenger hunts, and hands-on planting workshops that teach children where food comes from.',
    },
    'seasonal-events-at-fun-farming': {
        title: 'Seasonal Events at Fun Farming',
        date: 'March 18, 2024',
        category: 'Events',
        content:
            "What's happening this season at Fun Farming Uganda. Check our calendar of events including harvest festivals, bonfire nights, farm camping, and special holiday programmes.",
    },
};

export default async function BlogDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = posts[slug];
    if (!post) notFound();

    return (
        <>
            <PageHeader
                title={post.title}
                bgImage="/assets/img/hero/about-us-inr-herothumb.png"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Blog', href: '/blog' },
                    { label: post.title },
                ]}
            />

            <div className="vl-blog-details-area sp1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="vl-blog-details-content">
                                <div className="vl-blog-details-meta">
                                    <span className="vl-blog-details-category">
                                        <i className="fa-solid fa-tag"></i>
                                        {post.category}
                                    </span>
                                    <span className="vl-blog-details-date">
                                        <i className="fa-regular fa-calendar"></i>
                                        {post.date}
                                    </span>
                                </div>
                                <h2 className="vl-blog-details-title">{post.title}</h2>
                                <div className="vl-blog-details-text">
                                    <p>{post.content}</p>
                                    <p>
                                        At Fun Farming Uganda, we believe in creating memorable experiences that
                                        connect people with nature and each other. Our farm is more than just a
                                        destination — it is a place where lasting memories are made.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
