'use client';

import Link from 'next/link';

export default function GalleryPage() {
    const galleryImages = [
        { src: '/img/gallery/funfarm_n1.png', title: 'Farm View 1' },
        { src: '/img/gallery/funfarm_n2.png', title: 'Farm View 2' },
        { src: '/img/gallery/funfarm_n3.png', title: 'Farm View 3' },
        { src: '/img/gallery/funfarm_n4.png', title: 'Farm View 4' },
        { src: '/img/gallery/funfarm_n5.png', title: 'Farm View 5' },
        { src: '/img/gallery/funfarm_n6.png', title: 'Farm View 6' },
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
                                <h2>Farm Gallery</h2>
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
                                            href="/gallery"
                                        >
                                            Farm Gallery
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* HERO END */}

            {/* PROJECT INNER SECTION AREA START */}
            <div className="project_inner_section_area sp1">
                <div className="container">
                    <div className="row">
                        {galleryImages.map((image, index) => (
                            <div className="col-xl-4 col-lg-6" key={index}>
                                <div className="project6-box margin-b30">
                                    <div className="project6-thumb image-anime">
                                        <img
                                            className="imgs"
                                            src={image.src}
                                            alt={image.title}
                                        />
                                        <div className="project6-thumb-content">
                                            <div className="arrow_wrap">
                                                <div className="content_arrow">
                                                    <img
                                                        src="/assets/img/icon/project6-arrow-right.svg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <h3 className="title">
                                                <Link href="/gallery">
                                                    {image.title}
                                                </Link>
                                            </h3>
                                            <p className="pera-text">
                                                Beautiful views of our organic
                                                farm in Nakaseke, Uganda
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* PROJECT INNER SECTION AREA END */}

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
                                        Visit Our Farm
                                    </h3>
                                    <div className="space24"></div>
                                    <h2
                                        className="product4-title text-anime-style-3"
                                        data-aos="fade-left"
                                        data-aos-duration="1000"
                                    >
                                        Experience the Beauty of Organic Farming
                                    </h2>
                                </div>
                                <div className="space38"></div>
                                <div
                                    className="btn_area10 z-index99"
                                    data-aos="zoom-out"
                                    data-aos-duration="1100"
                                >
                                    <Link href="/contact" className="vl-btn10">
                                        Book a Tour
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
