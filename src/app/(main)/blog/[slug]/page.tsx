'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/sections/PageHeader';
import SectionTitle from '@/components/sections/SectionTitle';

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
                bgImage="/assets/images/backgrounds/page-header-bg-1-1.jpg"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Blog', href: '/blog' },
                    { label: post.title },
                ]}
            />

            <section className="blog-details section-space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="blog-details__text">
                                <div className="blog-details__meta">
                                    <span className="blog-details__category">
                                        {post.category}
                                    </span>
                                    <span className="blog-details__date">
                                        {post.date}
                                    </span>
                                </div>
                                <h2 className="blog-details__title">
                                    {post.title}
                                </h2>
                                <div className="blog-details__content">
                                    <p>{post.content}</p>
                                    <p>
                                        At Fun Farming Uganda, we believe in
                                        creating memorable experiences that
                                        connect people with nature and each
                                        other. Our farm is more than just a
                                        destination — it is a place where
                                        memories are made, skills are learned,
                                        and connections are forged.
                                    </p>
                                    <p>
                                        Whether you are visiting for a
                                        team-building event, a family outing, or
                                        a solo retreat, our farm offers
                                        something for everyone. From the moment
                                        you arrive, you will be welcomed by our
                                        friendly staff and the beautiful
                                        surroundings of our organic farm.
                                    </p>
                                </div>
                                <div className="blog-details__tags">
                                    <span>Tags:</span>
                                    <Link href="/blog">{post.category}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-one">
                <div className="container">
                    <div className="cta-one__inner">
                        <div className="cta-one__call">
                            <div className="cta-one__call__icon">
                                <i className="icon-leaf"></i>
                            </div>
                            <div className="cta-one__call__content">
                                <h3 className="cta-one__call__title">
                                    Enjoyed This Article?
                                </h3>
                                <p className="cta-one__call__link">
                                    Explore more stories from our farm or
                                    contact us to plan your visit.
                                </p>
                            </div>
                        </div>
                        <div className="cta-one__btn">
                            <Link href="/blog" className="garlon-btn">
                                <span>Back to Blog</span>{' '}
                                <i className="icon-angle-small-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
