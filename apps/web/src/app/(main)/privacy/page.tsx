'use client';

import Link from 'next/link';

export default function PrivacyPage() {
    return (
        <>
            {/* HERO START */}
            <div className="vl-hero-inner-area parallaxie" style={{ backgroundImage: 'url(/assets/img/hero/about-us-inr-herothumb.png)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="inner-hero-info">
                                <h2>Privacy Policy</h2>
                                <div className="space16"></div>
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li><img src="/assets/img/icon/arrow-right-inner.svg" alt="" /></li>
                                    <li><Link className="aboutus_titlefix" href="/privacy">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* HERO END */}

            {/* PRIVACY CONTENT START */}
            <div className="vl-privacy-inr-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 mx-auto">
                            <div className="privacy-inr-content">
                                <h3 data-aos="fade-right" data-aos-duration="800">
                                    <img src="/assets/img/icon/hm7-sub-title2-dot.png" alt="" />
                                    Our Privacy Commitment
                                </h3>
                                <div className="space24"></div>
                                <h2 className="text-effect" data-aos="fade-left" data-aos-duration="1000">
                                    Protecting Your Information
                                </h2>
                                <div className="space24"></div>
                                <div className="privacy-text" data-aos="fade-left" data-aos-duration="1100">
                                    <p>
                                        At Fun Farming Uganda, we are committed to protecting your privacy and ensuring the security of your personal information.
                                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                                        or use our services.
                                    </p>
                                    <div className="space16"></div>
                                    <p>
                                        We collect information that you provide directly to us, such as when you fill out forms, contact us, or make reservations.
                                        This information may include your name, email address, phone number, and other contact details.
                                    </p>
                                    <div className="space16"></div>
                                    <p>
                                        We use the information we collect to provide, maintain, and improve our services, to respond to your inquiries,
                                        and to communicate with you about your bookings and our offerings.
                                    </p>
                                    <div className="space16"></div>
                                    <p>
                                        We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent,
                                        except as described in this Privacy Policy or as required by law.
                                    </p>
                                    <div className="space16"></div>
                                    <p>
                                        We implement appropriate security measures to protect your personal information from unauthorized access,
                                        alteration, disclosure, or destruction.
                                    </p>
                                </div>
                                <div className="space32"></div>
                                <div className="privacy-more" data-aos="fade-left" data-aos-duration="1200">
                                    <Link href="/contact" className="btn-home7">
                                        Contact Us for More Information
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* PRIVACY CONTENT END */}
        </>
    );
}