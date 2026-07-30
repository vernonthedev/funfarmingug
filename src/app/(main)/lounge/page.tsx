'use client';

import Link from 'next/link';
import PageHeader from '@/components/sections/PageHeader';

export default function LoungePage() {
    return (
        <>
            <PageHeader
                title="Farm Lounge"
                bgImage="/assets/img/hero/about-us-inr-herothumb.png"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Farm Lounge' },
                ]}
            />

            <div className="vl-service7">
                <div className="vl-service7-area sp1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 mx-auto text-center">
                                <div className="service7-header">
                                    <h3 data-aos="fade-right" data-aos-duration="900">
                                        <img src="/assets/img/icon/hm7-sub-title2-dot.png" alt="" />
                                        Five Star Housing
                                    </h3>
                                    <div className="space24"></div>
                                    <h2 className="text-effect" data-aos="fade-left" data-aos-duration="1000">
                                        Our Lounge Facilities
                                    </h2>
                                </div>
                            </div>
                            <div className="space44"></div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="vl-services2-box" data-aos="fade-up" data-aos-duration="800">
                                        <div className="services2-box-icon">
                                            <i className="fa-solid fa-couch"></i>
                                        </div>
                                        <div className="space24"></div>
                                        <div className="services2-box-content">
                                            <h2>Comfortable Seating</h2>
                                            <div className="space16"></div>
                                            <p>Relax in our comfortable indoor and outdoor seating areas with panoramic views of the countryside.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="vl-services2-box" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="services2-box-icon">
                                            <i className="fa-solid fa-wifi"></i>
                                        </div>
                                        <div className="space24"></div>
                                        <div className="services2-box-content">
                                            <h2>Complimentary WiFi</h2>
                                            <div className="space16"></div>
                                            <p>Stay connected with complimentary WiFi while you enjoy the peaceful farm atmosphere.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="vl-services2-box" data-aos="fade-up" data-aos-duration="1100">
                                        <div className="services2-box-icon">
                                            <i className="fa-solid fa-mug-hot"></i>
                                        </div>
                                        <div className="space24"></div>
                                        <div className="services2-box-content">
                                            <h2>Refreshments</h2>
                                            <div className="space16"></div>
                                            <p>Enjoy a selection of refreshments and light meals prepared with fresh farm ingredients.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vl-about1-area sp1">
                <div className="space96"></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="about1-thumb1 vl-clip-anim image-anime" data-aos="fade-right" data-aos-duration="800">
                                <img className="vl-anim-img w-100" data-animate="true" src="/webimgs/fun-farm-image.jpg" alt="Farm Lounge" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="about-area-info">
                                <div className="about1-heading-area">
                                    <h3 className="about-subtitle" data-aos="fade-left" data-aos-duration="800">
                                        Private Events
                                    </h3>
                                    <div className="space24"></div>
                                    <h2 className="about-title text-anime-style-3" data-aos="fade-left" data-aos-duration="800">
                                        Book the Farm Lounge
                                    </h2>
                                    <div className="space16"></div>
                                    <p className="text-effect" data-aos="fade-left" data-aos-duration="900">
                                        The Farm Lounge can also be booked for private events, meetings, workshops, and celebrations.
                                        Contact us for availability and pricing.
                                    </p>
                                    <div className="space38"></div>
                                    <div className="btn_area3" data-aos="fade-left" data-aos-duration="900">
                                        <Link href="/contact" className="vl-btn3">
                                            Book Now
                                            <span className="arrow_btn3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                    <path d="M27.002 16.002H5.00195" stroke="#132C12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M21.0021 22.002C21.0021 22.002 27.002 17.5831 27.002 16.002C27.002 14.4208 21.002 10.002 21.002 10.002" stroke="#132C12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </Link>
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
