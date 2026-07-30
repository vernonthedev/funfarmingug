'use client';

import Link from 'next/link';

export default function ActivitiesPage() {
    const activities = [
        {
            title: 'Board Games',
            description:
                'Engage in exciting board games that blend fun with strategy. Perfect for team building and family gatherings.',
            icon: '/assets/img/icon/service6-icon(1).svg',
            number: '01',
        },
        {
            title: 'Farm Kitchen',
            description:
                'Experience the taste of Uganda with our farm-to-table kitchen. Enjoy fresh, organic meals prepared with local ingredients.',
            icon: '/assets/img/icon/service6-icon(2).svg',
            number: '02',
        },
        {
            title: 'Team Building',
            description:
                'Strengthen your herd with our farm-tastic team-building activities. Perfect for corporate groups and organizations.',
            icon: '/assets/img/icon/service6-icon(3).svg',
            number: '03',
        },
        {
            title: 'Farm Tours',
            description:
                'Explore our organic farm and learn about sustainable farming practices. See our animals, crops, and facilities up close.',
            icon: '/assets/img/icon/service-inr-icon1.svg',
            number: '04',
        },
        {
            title: 'Animal Interaction',
            description:
                'Get hands-on experience with our farm animals. Feed goats, collect eggs, and learn about animal care.',
            icon: '/assets/img/icon/service-inr-icon2.svg',
            number: '05',
        },
        {
            title: 'Harvest Activities',
            description:
                'Participate in seasonal harvest activities. Pick fruits, dig up vegetables, and experience the joy of farming.',
            icon: '/assets/img/icon/service-inr-icon3.svg',
            number: '06',
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
                                <h2>Our Activities</h2>
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
                                            href="/activities"
                                        >
                                            Our Activities
                                        </Link>
                                    </li>
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
                        {activities.map((activity, index) => (
                            <div className="col-xl-4 col-lg-6" key={index}>
                                <div className="service6-box margin-b30">
                                    <div className="service6-logos">
                                        <h3 className="title">
                                            <Link href="/activities">
                                                {activity.title}
                                            </Link>
                                        </h3>
                                        <div className="inons">
                                            <img src={activity.icon} alt="" />
                                        </div>
                                    </div>
                                    <div className="space24"></div>
                                    <p className="pera-text">
                                        {activity.description}
                                    </p>
                                    <div className="space28"></div>
                                    <div className="service6-box-bottom">
                                        <Link
                                            href="/contact"
                                            className="btn3-home6"
                                        >
                                            Learn More
                                        </Link>
                                        <div className="step-number">
                                            {activity.number}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* SERVICE INR BOX AREA END */}

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
                                        Ready for Adventure
                                    </h3>
                                    <div className="space24"></div>
                                    <h2
                                        className="product4-title text-anime-style-3"
                                        data-aos="fade-left"
                                        data-aos-duration="1000"
                                    >
                                        Book Your Activity Today
                                    </h2>
                                </div>
                                <div className="space38"></div>
                                <div
                                    className="btn_area10 z-index99"
                                    data-aos="zoom-out"
                                    data-aos-duration="1100"
                                >
                                    <Link href="/contact" className="vl-btn10">
                                        Contact Us
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
