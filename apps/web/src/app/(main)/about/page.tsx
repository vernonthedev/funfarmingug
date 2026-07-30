'use client';

import Link from 'next/link';
import PageHeader from '@/components/sections/PageHeader';

export default function AboutPage() {
    return (
        <>
            <PageHeader
                title="About Us"
                bgImage="/assets/img/hero/about-us-inr-herothumb.png"
                breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
            />

            <div className="vl-about-inner-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="vl-about-inner-info">
                                <div className="vl-about-inner-heading">
                                    <h3 data-aos="fade-right" data-aos-duration="900">
                                        <img src="/assets/img/icon/subtitle-icon-hm4.svg" alt="" />
                                        About Our Agriculture
                                    </h3>
                                    <div className="space16"></div>
                                    <h2 data-aos="fade-left" data-aos-duration="1000">
                                        Where Agriculture Meets Adventure!
                                    </h2>
                                    <div className="space16"></div>
                                    <p data-aos="fade-left" data-aos-duration="1000">
                                        Fun Farming Uganda is a unique agro-tourism destination where agriculture meets adventure.
                                        Located in the heart of Nakaseke District, Butalangu province, we offer an unforgettable
                                        farm experience that combines education, team building, and the beauty of Ugandan rural life.
                                    </p>
                                </div>
                                <div className="space30"></div>
                                <div className="vl-about-inner-thumb reveal image-anime lg-mb20">
                                    <img src="/webimgs/fun-farm-image.jpg" alt="Fun Farming Uganda" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="vl-about-inner-content">
                                <div className="vl-about-inner-author">
                                    <img src="/webimgs/david-holding-goat.jpg" alt="David" />
                                    <div className="space24"></div>
                                    <h2><span className="counter">5000</span>+</h2>
                                    <div className="space8"></div>
                                    <p>Happy Visitors</p>
                                </div>
                                <div className="vl-about-inner-items-info">
                                    <div className="vl-about-inner-items-content">
                                        <div className="space24"></div>
                                        <p data-aos="fade-left" data-aos-duration="900">
                                            At Fun Farming Uganda, we bring people together through unforgettable farm experiences.
                                            From team building to farm tours, every visit is crafted to inspire connection and joy.
                                        </p>
                                        <div className="space28"></div>
                                        <div className="blog7-btn" data-aos="fade-left" data-aos-duration="900">
                                            <a href="/contact" className="btn-home7">Book a Visit</a>
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
