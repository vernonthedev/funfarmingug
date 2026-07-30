'use client';

import Link from 'next/link';

export default function LoungePage() {
    const loungeFeatures = [
        {
            title: 'Comfortable Seating',
            description: 'Relax in our comfortable indoor and outdoor seating areas with panoramic views of the countryside.',
            icon: '/assets/img/icon/service6-icon(1).svg',
            number: '01'
        },
        {
            title: 'Refreshments Available',
            description: 'Enjoy fresh juices, coffee, tea, and light snacks prepared with farm-fresh ingredients.',
            icon: '/assets/img/icon/service6-icon(2).svg',
            number: '02'
        },
        {
            title: 'WiFi Access',
            description: 'Stay connected with free WiFi access in our lounge area. Perfect for remote work or sharing your farm experience.',
            icon: '/assets/img/icon/service6-icon(3).svg',
            number: '03'
        },
        {
            title: 'Relaxing Atmosphere',
            description: 'Unwind in our peaceful lounge with soothing music and a cozy ambiance after your farm activities.',
            icon: '/assets/img/icon/service-inr-icon1.svg',
            number: '04'
        },
        {
            title: 'Group Gatherings',
            description: 'Our lounge is perfect for group gatherings, team debriefings, or casual meetings in a relaxed setting.',
            icon: '/assets/img/icon/service-inr-icon2.svg',
            number: '05'
        },
        {
            title: 'Farm Views',
            description: 'Enjoy stunning views of our organic farm while relaxing in the comfort of our lounge area.',
            icon: '/assets/img/icon/service-inr-icon3.svg',
            number: '06'
        },
    ];

    return (
        <>
            {/* HERO START */}
            <div className="vl-hero-inner-area parallaxie" style={{ backgroundImage: 'url(/assets/img/hero/about-us-inr-herothumb.png)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="inner-hero-info">
                                <h2>Farm Lounge</h2>
                                <div className="space16"></div>
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li><img src="/assets/img/icon/arrow-right-inner.svg" alt="" /></li>
                                    <li><Link className="aboutus_titlefix" href="/lounge">Farm Lounge</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* HERO END */}

            {/* SERVICE INR BOX AREA START */}
            <div className="service-inr-box-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 mx-auto text-center">
                            <div className="service7-header">
                                <h3 data-aos="fade-right" data-aos-duration="900">
                                    <img src="/assets/img/icon/hm7-sub-title2-dot.png" alt="" />
                                    Five Star Relaxation
                                </h3>
                                <div className="space24"></div>
                                <h2 className="text-effect" data-aos="fade-left" data-aos-duration="1000">
                                    Our Lounge Facilities
                                </h2>
                            </div>
                        </div>
                        <div className="space44"></div>
                        <div className="row">
                            {loungeFeatures.map((feature, index) => (
                                <div className="col-xl-4 col-lg-6" key={index}>
                                    <div className="service6-box margin-b30">
                                        <div className="service6-logos">
                                            <h3 className="title"><Link href="/lounge">{feature.title}</Link></h3>
                                            <div className="inons">
                                                <img src={feature.icon} alt="" />
                                            </div>
                                        </div>
                                        <div className="space24"></div>
                                        <p className="pera-text">{feature.description}</p>
                                        <div className="space28"></div>
                                        <div className="service6-box-bottom">
                                            <Link href="/contact" className="btn3-home6">Learn More</Link>
                                            <div className="step-number">{feature.number}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* SERVICE INR BOX AREA END */}

            {/* CTA SECTION */}
            <div className="vl-cta4-area" data-aos="zoom-out" data-aos-duration="1000">
                <div className="container">
                    <div className="row cta4-area-info sp1">
                        <div className="col-xl-6 mx-auto text-center">
                            <div className="cta4-area-content">
                                <div className="product4-heading">
                                    <h3 className="product4-subtitle" data-aos="fade-right" data-aos-duration="900">
                                        Relax and Unwind
                                    </h3>
                                    <div className="space24"></div>
                                    <h2 className="product4-title text-anime-style-3" data-aos="fade-left" data-aos-duration="1000">
                                        Experience Comfort in the Heart of Nature
                                    </h2>
                                </div>
                                <div className="space38"></div>
                                <div className="btn_area10 z-index99" data-aos="zoom-out" data-aos-duration="1100">
                                    <Link href="/contact" className="vl-btn10">
                                        Book Your Visit
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                                <path d="M22.8079 11.1373L11.1406 22.8046" stroke="#25452C" strokeWidth="1.55556" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M22.8054 17.5005C22.8054 17.5005 23.6439 11.9751 22.8054 11.1366C21.9669 10.2981 16.4414 11.1366 16.4414 11.1366" stroke="#25452C" strokeWidth="1.55556" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="cta4-area-shape1 aniamtion-key-2">
                            <img src="/assets/img/shape/cta-hm4(1).png" alt="" />
                        </div>
                        <div className="cta4-area-shape2 aniamtion-key-2">
                            <img src="/assets/img/shape/cta-hm4(2).png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* CTA SECTION END */}
        </>
    );
}