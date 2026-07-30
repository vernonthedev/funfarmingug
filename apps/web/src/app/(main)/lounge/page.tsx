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

            <div className="service-inr-box-area sp1">
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
                                <div className="service6-box margin-b30">
                                    <div className="service6-logos">
                                        <h3 className="title">
                                            <a href="/lounge">Comfortable Seating</a>
                                        </h3>
                                        <div className="inons">
                                            <i className="fa-solid fa-couch"></i>
                                        </div>
                                    </div>
                                    <div className="space24"></div>
                                    <p className="pera-text">
                                        Relax in our comfortable indoor and outdoor seating areas with panoramic views of the countryside.
                                    </p>
                                    <div className="space28"></div>
                                    <div className="service6-box-bottom">
                                        <Link href="/lounge" className="btn3-home6">Learn More</Link>
                                        <div className="step-number">01</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="service6-box margin-b30">
                                    <div className="service6-logos">
                                        <h3 className="title">
                                            <a href="/lounge">Complimentary WiFi</a>
                                        </h3>
                                        <div className="inons">
                                            <i className="fa-solid fa-wifi"></i>
                                        </div>
                                    </div>
                                    <div className="space24"></div>
                                    <p className="pera-text">
                                        Stay connected with complimentary WiFi while you enjoy the peaceful farm atmosphere.
                                    </p>
                                    <div className="space28"></div>
                                    <div className="service6-box-bottom">
                                        <Link href="/lounge" className="btn3-home6">Learn More</Link>
                                        <div className="step-number">02</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="service6-box margin-b30">
                                    <div className="service6-logos">
                                        <h3 className="title">
                                            <a href="/lounge">Refreshments</a>
                                        </h3>
                                        <div className="inons">
                                            <i className="fa-solid fa-mug-hot"></i>
                                        </div>
                                    </div>
                                    <div className="space24"></div>
                                    <p className="pera-text">
                                        Enjoy a selection of refreshments and light meals prepared with fresh farm ingredients.
                                    </p>
                                    <div className="space28"></div>
                                    <div className="service6-box-bottom">
                                        <Link href="/lounge" className="btn3-home6">Learn More</Link>
                                        <div className="step-number">03</div>
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
