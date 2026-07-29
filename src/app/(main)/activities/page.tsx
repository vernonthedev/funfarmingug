'use client';

import Link from 'next/link';
import PageHeader from '@/components/sections/PageHeader';
import SectionTitle from '@/components/sections/SectionTitle';
import ServiceCardTwo from '@/components/sections/ServiceCardTwo';
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
        title: 'Farm Lounge',
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
                    <SectionTitle tagline="FUN ACTIVITIES" title="Farm Games & Team Building For You & Your Herd" />
                    <div className="row gutter-y-30">
                        {activities.map((a, i) => (
                            <div key={i} className="col-lg-3 col-md-6">
                                <ServiceCardTwo
                                    icon={a.icon}
                                    title={a.title}
                                    text={a.text}
                                    href="/contact"
                                    delay={`${(i + 1) * 200}ms`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="about-one section-space">
                <div className="container">
                    <div className="row gutter-y-30 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-one__thumb__item">
                                <img src="/img/home/team-building2.jpg" alt="Team building at Fun Farming Uganda" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-one__content">
                                <SectionTitle tagline="PLAN YOUR VISIT" title="Book Your Farm Adventure Today" align="start" />
                                <p className="about-one__content__text">
                                    Planning a visit to Fun Farming Uganda is easy and exciting.
                                    Whether you are coming with colleagues, friends, or family,
                                    we offer a range of activities that guarantee laughter,
                                    learning, and lasting memories.
                                </p>
                                <p className="about-one__content__text">
                                    Our farm is located in Butalangu Town Council, Nakaseke
                                    District, and is accessible by road. We recommend booking
                                    in advance to secure your preferred date and activities.
                                </p>
                                <p className="about-one__content__text">
                                    <strong>Minimum group size is 10 participants. Not sure yet?
                                    You can provide the exact number of participants later.</strong>
                                </p>
                                <div className="about-one__user-box">
                                    <Link href="/contact" className="garlon-btn">
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
                text={<>Call us at <a href="tel:+256772826680">+256 772 826 680</a> or email <a href="mailto:support@funfarminguganda.com">support@funfarminguganda.com</a></>}
                buttonLabel="Contact Us"
                buttonHref="/contact"
            />

            <section className="about-one section-space-bottom">
                <div className="container">
                    <div className="row gutter-y-30 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-one__content">
                                <SectionTitle tagline="GLOBAL VISITORS" title="Visitors from Around the World" align="start" />
                                <p className="about-one__content__text">
                                    We have hosted tourists from Germany and across the globe
                                    who come to experience the unique blend of agriculture and
                                    adventure that Fun Farming Uganda offers. Our team-building
                                    activities are particularly popular among international
                                    visitors looking for an authentic Ugandan farm experience.
                                </p>
                                <p className="about-one__content__text">
                                    From navigating our obstacle courses to participating in
                                    farm games, guests leave with unforgettable memories and
                                    a deeper appreciation for sustainable farming.
                                </p>
                                <div className="about-one__user-box">
                                    <Link href="/contact" className="garlon-btn">
                                        <span>Book Your Experience</span>
                                        <i className="icon-angle-small-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-one__thumb__item">
                                <img src="/webimgs/fun-farm-image.jpg" alt="Tourists from Germany at Fun Farming Uganda" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="row">
                    <div className="col-xl-12 text-center">
                        <p className="about-one__content__text">
                            <strong>Make your bookings today!</strong>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
