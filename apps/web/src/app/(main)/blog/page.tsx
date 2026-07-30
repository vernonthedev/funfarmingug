'use client';

import Link from 'next/link';

export default function BlogPage() {
    const blogPosts = [
        {
            date: { day: '04', month: 'Jul' },
            author: 'Alex Buckmaster',
            comments: '02',
            title: 'Dig Deeper Into Green Living – Discover, Learn, and Grow',
            excerpt:
                'At Fun Farming Uganda, we don t just grow plants — we cultivate ideas. Our blog is your go-to space for farming tips, stories, and insights.',
            image: '/webimgs/fun-farm-image.jpg',
        },
        {
            date: { day: '08', month: 'Jul' },
            author: 'Daniel Hamilton',
            comments: '00',
            title: 'Grow Smarter, Live Greener – One Post at a Time',
            excerpt:
                'At Fun Farming Uganda, we don t just grow plants — we cultivate ideas. Our blog is your go-to space for farming tips, stories, and insights.',
            image: '/webimgs/Nakaseke_10.jpg',
        },
        {
            date: { day: '12', month: 'Jul' },
            author: 'Jerry Helfer',
            comments: '01',
            title: 'Cultivating Knowledge, One Story at a Time',
            excerpt:
                'Dive into the Fun Farming Uganda blog, where every post is a seed of knowledge waiting to grow.',
            image: '/webimgs/Farm-staff.jpeg',
        },
    ];

    return (
        <>
            {/* HERO START */}
            <div
                className="vl-hero-inner-area parallaxie"
                style={{
                    backgroundImage:
                        'url(/assets/img/hero/about-us-inr-herothumb.png)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="inner-hero-info">
                                <h2>Our Blog</h2>
                                <div className="space16"></div>
                                <ul>
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <img
                                            src="/assets/img/icon/arrow-right-inner.svg"
                                            alt=""
                                        />
                                    </li>
                                    <li>
                                        <Link
                                            className="aboutus_titlefix"
                                            href="/blog"
                                        >
                                            Our Blog
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* HERO END */}

            {/* VLOG START */}
            <div className="vl-vlog-inr-area sp1">
                <div className="container">
                    <div className="row">
                        {blogPosts.map((post, index) => (
                            <div className="col-xl-4 col-lg-6" key={index}>
                                <div className="about-inr-vlog-box margin-b30">
                                    <div className="about-inr-vlog-thumb case_img_anime">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                        />
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                        />
                                        <div className="box-text">
                                            <h3>{post.date.day}</h3>
                                            <span>{post.date.month}</span>
                                        </div>
                                    </div>
                                    <div className="about-inr-vlog-content">
                                        <div className="about-inr-vlog-meta">
                                            <ul>
                                                <li>
                                                    <Link href="/blog">
                                                        <img
                                                            src="/assets/img/icon/about-inr-vlog-user.svg"
                                                            alt=""
                                                        />
                                                        {post.author}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog">
                                                        <img
                                                            src="/assets/img/icon/about-inr-vlog-cmnt.svg"
                                                            alt=""
                                                        />
                                                        {post.comments} Comment
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="space16"></div>
                                        <h3>
                                            <Link href="/blog">
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <div className="space24"></div>
                                        <div className="text-pera">
                                            <p>{post.excerpt}</p>
                                        </div>
                                        <div className="space28"></div>
                                        <Link
                                            href="/contact"
                                            className="btn3-home6"
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* VLOG END */}

            {/* CTA SECTION */}
            <div
                className="vl-cta4-area"
                data-aos="zoom-out"
                data-aos-duration="1000"
            >
                <div className="container">
                    <div className="row cta4-area-info sp1">
                        <div className="col-xl-6 mx-auto text-center">
                            <div className="cta4-area-content">
                                <div className="product4-heading">
                                    <h3
                                        className="product4-subtitle"
                                        data-aos="fade-right"
                                        data-aos-duration="900"
                                    >
                                        Stay Updated
                                    </h3>
                                    <div className="space24"></div>
                                    <h2
                                        className="product4-title text-anime-style-3"
                                        data-aos="fade-left"
                                        data-aos-duration="1000"
                                    >
                                        Follow Our Farm Journey
                                    </h2>
                                </div>
                                <div className="space38"></div>
                                <div
                                    className="btn_area10 z-index99"
                                    data-aos="zoom-out"
                                    data-aos-duration="1100"
                                >
                                    <Link href="/contact" className="vl-btn10">
                                        Subscribe Now
                                        <span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="34"
                                                height="34"
                                                viewBox="0 0 34 34"
                                                fill="none"
                                            >
                                                <path
                                                    d="M22.8079 11.1373L11.1406 22.8046"
                                                    stroke="#25452C"
                                                    strokeWidth="1.55556"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M22.8054 17.5005C22.8054 17.5005 23.6439 11.9751 22.8054 11.1366C21.9669 10.2981 16.4414 11.1366 16.4414 11.1366"
                                                    stroke="#25452C"
                                                    strokeWidth="1.55556"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="cta4-area-shape1 aniamtion-key-2">
                            <img
                                src="/assets/img/shape/cta-hm4(1).png"
                                alt=""
                            />
                        </div>
                        <div className="cta4-area-shape2 aniamtion-key-2">
                            <img
                                src="/assets/img/shape/cta-hm4(2).png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* CTA SECTION END */}
        </>
    );
}
