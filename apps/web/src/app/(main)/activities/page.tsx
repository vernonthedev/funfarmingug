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

            <div className="service-inr-box-area sp1">
                <div className="container">
                    <div className="row">
                        {activities.map((activity, index) => (
                            <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
                                <div className="service6-box margin-b30">
                                    <div className="service6-logos">
                                        <h3 className="title">
                                            <a href={activity.href}>{activity.title}</a>
                                        </h3>
                                        <div className="inons">
                                            <i className={activity.icon}></i>
                                        </div>
                                    </div>
                                    <div className="space24"></div>
                                    <p className="pera-text">{activity.text}</p>
                                    <div className="space28"></div>
                                    <div className="service6-box-bottom">
                                        <Link href={activity.href} className="btn3-home6">Learn More</Link>
                                        <div className="step-number">0{index + 1}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
