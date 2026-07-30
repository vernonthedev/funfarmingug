'use client';

import Link from 'next/link';

export default function SupportPage() {
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
                                <h2>Support</h2>
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
                                            href="/support"
                                        >
                                            Support
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* HERO END */}

            {/* SUPPORT CONTENT START */}
            <div className="vl-support-inr-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 mx-auto">
                            <div className="support-inr-content">
                                <h3
                                    data-aos="fade-right"
                                    data-aos-duration="800"
                                >
                                    <img
                                        src="/assets/img/icon/hm7-sub-title2-dot.png"
                                        alt=""
                                    />
                                    How Can We Help?
                                </h3>
                                <div className="space24"></div>
                                <h2
                                    className="text-effect"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                >
                                    We Are Here to Assist You
                                </h2>
                                <div className="space24"></div>
                                <div
                                    className="support-text"
                                    data-aos="fade-left"
                                    data-aos-duration="1100"
                                >
                                    <p>
                                        Thank you for visiting Fun Farming
                                        Uganda. We are here to provide you with
                                        the best possible experience and support
                                        for all your farming and agro-tourism
                                        needs.
                                    </p>
                                    <div className="space16"></div>
                                    <p>
                                        Whether you have questions about our
                                        services, need help with your booking,
                                        or want to learn more about our farm
                                        activities, our dedicated support team
                                        is ready to assist you.
                                    </p>
                                    <div className="space16"></div>
                                    <p>
                                        You can reach us through various
                                        channels:
                                    </p>
                                    <div className="space16"></div>
                                    <ul className="support-list">
                                        <li>
                                            <strong>Email:</strong>{' '}
                                            info@funfarminguganda.com
                                        </li>
                                        <li>
                                            <strong>Phone:</strong> +256 700 000
                                            000
                                        </li>
                                        <li>
                                            <strong>Visit Us:</strong>{' '}
                                            Butalangu, Nakaseke District, Uganda
                                        </li>
                                        <li>
                                            <strong>Business Hours:</strong>{' '}
                                            Monday - Friday: 8:00 AM - 6:00 PM
                                        </li>
                                    </ul>
                                </div>
                                <div className="space32"></div>
                                <div
                                    className="support-more"
                                    data-aos="fade-left"
                                    data-aos-duration="1200"
                                >
                                    <Link href="/contact" className="btn-home7">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* SUPPORT CONTENT END */}
        </>
    );
}
