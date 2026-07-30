'use client';

import Link from 'next/link';
import PageHeader from '@/components/sections/PageHeader';

export default function SupportPage() {
    return (
        <>
            <PageHeader
                title="Support"
                bgImage="/assets/img/hero/about-us-inr-herothumb.png"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Support' },
                ]}
            />

            <div className="vl-about-inner-area sp1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="vl-about-inner-info text-center">
                                <div className="vl-about-inner-heading">
                                    <h3 data-aos="fade-right" data-aos-duration="900">Support</h3>
                                    <div className="space16"></div>
                                    <h2 data-aos="fade-left" data-aos-duration="1000">
                                        Contact Fun Farming Support Team
                                    </h2>
                                    <div className="space16"></div>
                                    <p data-aos="fade-left" data-aos-duration="1000">
                                        We are here to help you with any questions about your booking, activities, or farm
                                        visits. Our support team is available during business hours and we typically respond
                                        to all inquiries within 24 hours.
                                    </p>
                                </div>
                                <div className="space44"></div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="vl-services2-box" data-aos="fade-up" data-aos-duration="800">
                                            <div className="services2-box-icon">
                                                <i className="fa-solid fa-phone"></i>
                                            </div>
                                            <div className="space24"></div>
                                            <div className="services2-box-content">
                                                <h2>Phone</h2>
                                                <div className="space16"></div>
                                                <p>
                                                    <a href="tel:+256772826680" style={{ color: '#209D2F', fontWeight: 600 }}>+256 772 826 680</a>
                                                </p>
                                                <p>
                                                    <a href="tel:+256700462477" style={{ color: '#209D2F', fontWeight: 600 }}>+256 700 462 477</a>
                                                </p>
                                                <p>
                                                    <a href="tel:+256770640220" style={{ color: '#209D2F', fontWeight: 600 }}>+256 770 640 220</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="vl-services2-box" data-aos="fade-up" data-aos-duration="1000">
                                            <div className="services2-box-icon">
                                                <i className="fa-regular fa-envelope"></i>
                                            </div>
                                            <div className="space24"></div>
                                            <div className="services2-box-content">
                                                <h2>Email</h2>
                                                <div className="space16"></div>
                                                <p>
                                                    <a href="mailto:info@funfarminguganda.com" style={{ color: '#209D2F', fontWeight: 600 }}>
                                                        info@funfarminguganda.com
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="vl-services2-box" data-aos="fade-up" data-aos-duration="1100">
                                            <div className="services2-box-icon">
                                                <i className="fa-solid fa-location-dot"></i>
                                            </div>
                                            <div className="space24"></div>
                                            <div className="services2-box-content">
                                                <h2>Location</h2>
                                                <div className="space16"></div>
                                                <p>Butalangu, Nakaseke District, Uganda</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
