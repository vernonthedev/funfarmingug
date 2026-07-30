'use client';

import Link from 'next/link';
import PageHeader from '@/components/sections/PageHeader';
import CtaSection from '@/components/sections/CtaSection';

const activities = [
    {
        icon: 'icon-garden',
        title: 'Board Games',
        text: 'Engage in exciting board games that blend fun with strategy. Perfect for groups looking to enjoy friendly competition in a relaxed farm setting.',
    },
    {
        icon: 'icon-gear',
        title: 'Farm Kitchen',
        text: 'Experience the taste of Uganda with our farm-to-table kitchen. Learn to prepare local dishes using fresh organic produce straight from our farm.',
    },
    {
        icon: 'icon-gardener-1',
        title: 'Team Building',
        text: 'Strengthen your herd with our farm-tastic team-building activities. Collaborative challenges designed to boost communication and team spirit.',
    },
    {
        icon: 'icon-plant-1',
        title: ' Farm Lounge',
        text: 'Unwind in our serene Farm Lounge after a day of activities. Comfortable seating, refreshments, and panoramic views of the countryside.',
    },
];

export default function ActivitiesPage() {
    return (
        <>
            <PageHeader
                title="Activities"
                bgImage="/img/gallery/funfarm_n27.png"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Activities' },
                ]}
            />

            <section className="service-page section-space">
                <div className="container">
                    <div className="sec-title text-start">
                        <div className="sec-title__tagline">
                            <img
                                src="/assets/images/shapes/sec-title-s-1-1.png"
                                alt="shape"
                            />
                            FUN ACTIVITIES
                        </div>
                        <h3 className="sec-title__title">
                            Farm Games & Team Building For You & Your Herd
                        </h3>
                    </div>
                    <div className="row gutter-y-30">
                        {activities.map((a, i) => (
                            <div key={i} className="col-lg-3 col-md-6">
                                <div className="service-card-two">
                                    <div className="service-card-two__icon">
                                        <i className={a.icon}></i>
                                    </div>
                                    <h3 className="service-card-two__title">
                                        <a href="/contact">{a.title}</a>
                                    </h3>
                                    <p className="service-card-two__text">
                                        {a.text}
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="service-card-two__link"
                                    >
                                        <span>Read More</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="about-one section-space">
                <div className="container">
                    <div className="row gutter-y-30 align-items-center">
                        <div className="col-lg-6">
                            <div
                                className="about-one__thumb__item wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="100ms"
                            >
                                <img
                                    src="/img/home/team-building2.jpg"
                                    alt="Team building at Fun Farming Uganda"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-one__content">
                                <div className="sec-title text-start">
                                    <div className="sec-title__tagline">
                                        <img
                                            src="/assets/images/shapes/sec-title-s-1-1.png"
                                            alt="shape"
                                        />
                                        PLAN YOUR VISIT
                                    </div>
                                    <h3 className="sec-title__title">
                                        Book Your Farm Adventure Today
                                    </h3>
                                </div>
                                <p className="about-one__content__text">
                                    Planning a visit to Fun Farming Uganda
                                    is easy and exciting. Whether you are
                                    coming with colleagues, friends, or
                                    family, we offer a range of activities
                                    that guarantee laughter, learning, and
                                    lasting memories.
                                </p>
                                <p className="about-one__content__text">
                                    Our farm is located in Butalangu Town
                                    Council, Nakaseke District, and is
                                    accessible by road. We recommend booking
                                    in advance to secure your preferred date
                                    and activities.
                                </p>
                                <p className="about-one__content__text">
                                    <strong>
                                        Minimum group size is 10 participants.
                                        Not sure yet? You can provide the
                                        exact number of participants later.
                                    </strong>
                                </p>
                                <div className="about-one__user-box">
                                    <Link
                                        href="/contact"
                                        className="garlon-btn"
                                    >
                                        <span>Plan Your Visit</span>
                                        <i className="icon-angle-small-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CtaSection
                icon="icon-leaf"
                title="Request Information"
                text={
                    <>
                        Call us at{' '}
                        <a href="tel:+256772826680">+256 772 826 680</a> or
                        email{' '}
                        <a href="mailto:support@funfarminguganda.com">
                            support@funfarminguganda.com
                        </a>
                    </>
                }
                buttonLabel="Contact Us"
                buttonHref="/contact"
            />
        </>
    );
}
