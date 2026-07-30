'use client';

import Link from 'next/link';
import PageHeader from '@/components/sections/PageHeader';

const activities = [
    {
        icon: 'fa-solid fa-chess-board',
        title: 'Board Games',
        text: 'Engage in exciting board games that blend fun with strategy. Perfect for groups looking to enjoy friendly competition in a relaxed farm setting.',
        href: '/contact',
    },
    {
        icon: 'fa-solid fa-utensils',
        title: 'Farm Kitchen',
        text: 'Experience the taste of Uganda with our farm-to-table kitchen. Learn to prepare local dishes using fresh organic produce straight from our farm.',
        href: '/contact',
    },
    {
        icon: 'fa-solid fa-users',
        title: 'Team Building',
        text: 'Strengthen your herd with our farm-tastic team-building activities. Collaborative challenges designed to boost communication and team spirit.',
        href: '/contact',
    },
    {
        icon: 'fa-solid fa-couch',
        title: 'Farm Lounge',
        text: 'Unwind in our serene Farm Lounge after a day of activities. Comfortable seating, refreshments, and panoramic views of the countryside.',
        href: '/lounge',
    },
];

export default function ActivitiesPage() {
    return (
        <>
            <PageHeader
                title="Activities"
                bgImage="/assets/img/hero/about-us-inr-herothumb.png"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Activities' },
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
                                        Fun Activities
                                    </h3>
                                    <div className="space24"></div>
                                    <h2 className="text-effect" data-aos="fade-left" data-aos-duration="1000">
                                        Farm Games & Team Building For You & Your Herd
                                    </h2>
                                </div>
                            </div>
                            <div className="space44"></div>
                            <div className="row">
                                {activities.map((activity, index) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
                                        <div className="vl-services2-box" data-aos="fade-up" data-aos-duration="1000">
                                            <div className="services2-box-icon">
                                                <i className={activity.icon}></i>
                                            </div>
                                            <div className="space24"></div>
                                            <div className="services2-box-content">
                                                <h2>
                                                    <Link href={activity.href}>{activity.title}</Link>
                                                </h2>
                                                <div className="space16"></div>
                                                <p>{activity.text}</p>
                                            </div>
                                            <div className="services2-box-btn">
                                                <Link href={activity.href} className="vl-btn4">
                                                    Learn More
                                                    <span className="arrow_btn4">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                            <path d="M27.002 16.002H5.00195" stroke="#132C12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M21.0021 22.002C21.0021 22.002 27.002 17.5831 27.002 16.002C27.002 14.4208 21.002 10.002 21.002 10.002" stroke="#132C12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
