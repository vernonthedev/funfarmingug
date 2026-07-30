'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';

const posts: Record<
    string,
    { title: string; date: string; category: string; content: string; image?: string }
> = {
    'discovering-agro-tourism-in-uganda': {
        title: 'Discovering Agro-Tourism in Uganda',
        date: 'June 15, 2024',
        category: 'Agro Tourism',
        content:
            'A guide to experiencing farm life in the heart of Uganda. From milking cows to harvesting fresh produce, immerse yourself in the authentic rural experience at Fun Farming Uganda. Our farm offers visitors a unique opportunity to connect with nature and learn about sustainable agriculture practices. Whether you are a local or an international visitor, our agro-tourism experience will give you a new appreciation for farming and rural life.',
        image: '/webimgs/fun-farm-image.jpg'
    },
    'team-building-at-the-farm': {
        title: 'Team Building at the Farm',
        date: 'May 28, 2024',
        category: 'Team Building',
        content:
            'Why farms make the best team-building venues. Discover how our Farm Expert Games strengthen communication, leadership, and collaboration in a natural, stress-free environment. Our activities are designed to challenge teams while fostering genuine connections. From problem-solving challenges to collaborative farming tasks, your team will leave with stronger bonds and lasting memories.',
        image: '/webimgs/Nakaseke_10.jpg'
    },
    'the-taste-of-uganda-farm-to-table': {
        title: 'The Taste of Uganda: Farm to Table',
        date: 'May 10, 2024',
        category: 'Farm Food',
        content:
            'Local cuisine experience at its finest. Our chefs prepare meals using ingredients harvested that morning — from grilled goat skewers to steamed matooke with groundnut sauce. Experience the true flavors of Uganda. Our farm-to-table approach ensures that every dish is fresh, nutritious, and bursting with authentic Ugandan flavors. Join us for a culinary journey that celebrates local agriculture and traditional recipes.',
        image: '/webimgs/Farm-staff.jpeg'
    },
    'sustainable-farming-practices': {
        title: 'Sustainable Farming Practices',
        date: 'April 22, 2024',
        category: 'Sustainability',
        content:
            'How we maintain our eco-friendly farm through organic composting, rainwater harvesting, natural pest control, and rotational grazing that nurtures the land for future generations. At Fun Farming Uganda, we are committed to sustainable practices that protect the environment while providing high-quality produce. Our methods ensure that the land remains fertile and productive for years to come.',
        image: '/webimgs/fun-farm-image.jpg'
    },
    'kids-farm-adventures': {
        title: "Kids' Farm Adventures",
        date: 'April 5, 2024',
        category: 'Family',
        content:
            'Activities for young visitors including animal feeding, egg collecting, nature scavenger hunts, and hands-on planting workshops that teach children where food comes from. Our kid-friendly activities are designed to be both educational and fun, giving children a unique opportunity to learn about agriculture, animal care, and nature in a safe and engaging environment.',
        image: '/webimgs/fun-farm-image.jpg'
    },
    'seasonal-events-at-fun-farming': {
        title: 'Seasonal Events at Fun Farming',
        date: 'March 18, 2024',
        category: 'Events',
        content:
            'From harvest festivals to holiday celebrations, our calendar is filled with special events that celebrate the seasons and farming traditions. Join us for seasonal activities, workshops, and celebrations that bring the community together. Each event offers a unique way to experience the farm and create lasting memories with family and friends.',
        image: '/webimgs/Nakaseke_10.jpg'
    },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = posts[params.slug];

    if (!post) {
        notFound();
    }

    return (
        <>
            {/* HERO START */}
            <div className="vl-hero-inner-area parallaxie" style={{ backgroundImage: 'url(/assets/img/hero/about-us-inr-herothumb.png)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="inner-hero-info">
                                <h2>Blog Details</h2>
                                <div className="space16"></div>
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li><img src="/assets/img/icon/arrow-right-inner.svg" alt="" /></li>
                                    <li><Link href="/blog">Blog</Link></li>
                                    <li><img src="/assets/img/icon/arrow-right-inner.svg" alt="" /></li>
                                    <li><Link className="aboutus_titlefix" href="/blog">Blog Details</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* HERO END */}

            {/* BLOG DETAILS START */}
            <div className="vl-blog-details-inr-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 mx-auto">
                            <div className="blog-details-inr-content">
                                <div className="blog-details-inr-meta" data-aos="fade-right" data-aos-duration="900">
                                    <ul>
                                        <li><Link href="/blog"><img src="/assets/img/icon/about-inr-vlog-user.svg" alt="" />Fun Farming Uganda</Link></li>
                                        <li><Link href="/blog"><img src="/assets/img/icon/about-inr-vlog-cmnt.svg" alt="" />{post.category}</Link></li>
                                        <li><Link href="/blog"><i className="fa-regular fa-calendar"></i>{post.date}</Link></li>
                                    </ul>
                                </div>
                                <div className="space24"></div>
                                <h2 className="text-effect" data-aos="fade-left" data-aos-duration="1000">{post.title}</h2>
                                <div className="space24"></div>
                                <div className="blog-details-inr-thumb image-anime" data-aos="zoom-out" data-aos-duration="1100">
                                    <img src={post.image || '/webimgs/fun-farm-image.jpg'} alt={post.title} />
                                </div>
                                <div className="space32"></div>
                                <div className="blog-details-inr-text" data-aos="fade-left" data-aos-duration="1200">
                                    <p>{post.content}</p>
                                </div>
                                <div className="space32"></div>
                                <div className="blog-details-inr-btn" data-aos="fade-left" data-aos-duration="1300">
                                    <Link href="/blog" className="btn-home7">
                                        Back to Blog
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BLOG DETAILS END */}
        </>
    );
}