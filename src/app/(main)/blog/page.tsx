'use client';

import Link from 'next/link';

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
            <div className="page-header">
                <div
                    className="page-header__bg"
                    style={{
                        backgroundImage:
                            'url(/assets/images/backgrounds/page-header.jpg)',
                    }}
                ></div>
                <div className="container">
                    <h2 className="page-header__title">Blog</h2>
                    <ul className="garlon-breadcrumb list-unstyled">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <span>Blog</span>
                        </li>
                    </ul>
                </div>
                <div className="page-header__shape-one">
                    <img
                        src="/assets/images/shapes/page-header-1-1.png"
                        alt="shape"
                    />
                </div>
                <div className="page-header__shape-two">
                    <img
                        src="/assets/images/shapes/page-header-1-2.png"
                        alt="shape"
                    />
                </div>
            </div>

            <section className="blog-one section-space">
                <div className="container">
                    <div className="row">
                        {posts.map((post) => (
                            <div
                                className="col-lg-4 col-md-6"
                                key={post.slug}
                            >
                                <div className="blog-card">
                                    <div className="blog-card__image">
                                        <Link href={`/blog/${post.slug}`}>
                                            <img
                                                src="/webimgs/fun-farm-image.jpg"
                                                alt={post.title}
                                                loading="lazy"
                                            />
                                        </Link>
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="blog-card__image__link"
                                        >
                                            <i className="icon-plus"></i>
                                        </Link>
                                    </div>
                                    <div className="blog-card__content">
                                        <ul className="blog-card__meta list-unstyled">
                                            <li>
                                                <i className="fa fa-calendar"></i>
                                                {post.date}
                                            </li>
                                            <li>{post.category}</li>
                                        </ul>
                                        <h3 className="blog-card__title">
                                            <Link href={`/blog/${post.slug}`}>
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <p>{post.excerpt}</p>
                                        <div className="blog-card__btn">
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="blog-card__btn__link"
                                            >
                                                Read More
                                                <span className="blog-card__btn__link__icon">
                                                    <i className="icon-angle-right"></i>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
