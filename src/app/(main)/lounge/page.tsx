'use client';

import Link from 'next/link';
import PageHeader from '@/components/sections/PageHeader';
import SectionTitle from '@/components/sections/SectionTitle';
import CtaSection from '@/components/sections/CtaSection';

export default function LoungePage() {
    return (
        <>
            <PageHeader
                title="Farm Lounge"
                bgImage="/img/gallery/funfarm_n26.png"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Farm Lounge' },
                ]}
            />

            <section className="about-one section-space">
                <div className="container">
                    <div className="row gutter-y-30 align-items-center">
                        <div className="col-lg-6">
                            <div
                                className="about-one__thumb wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="100ms"
                            >
                                <div className="about-one__thumb__item">
                                    <img
                                        src="/webimgs/fun-farm-image.jpg"
                                        alt="Farm Lounge at Fun Farming Uganda"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-one__content">
                                <SectionTitle
                                    tagline="FIVE STAR HOUSING"
                                    title="Our Lounge Facilities"
                                    align="start"
                                />
                                <p className="about-one__content__text">
                                    Our Farm Lounge offers a serene relaxation
                                    sanctuary where guests can unwind after a
                                    day of farm activities. Enjoy the peaceful
                                    countryside atmosphere, comfortable
                                    accommodations, and the warm hospitality of
                                    our farm.
                                </p>
                                <p className="about-one__content__text">
                                    Whether you are looking to escape the hustle
                                    of the city or need a quiet place to
                                    reflect, the Farm Lounge provides the
                                    perfect setting. Our facilities include
                                    comfortable indoor and outdoor seating,
                                    complimentary WiFi, refreshments, and clean
                                    restrooms.
                                </p>
                                <p className="about-one__content__text">
                                    <strong>
                                        The Farm Lounge can also be booked for
                                        private events, meetings, workshops, and
                                        celebrations. Contact us for
                                        availability and pricing.
                                    </strong>
                                </p>
                                <div className="about-one__user-box">
                                    <Link
                                        href="/contact"
                                        className="garlon-btn"
                                    >
                                        <span>Book the Farm Lounge</span>
                                        <i className="icon-angle-small-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-space-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <SectionTitle
                                tagline="RELAX & RECHARGE"
                                title="Relax and Recharge"
                            />
                            <p className="about-one__content__text text-center">
                                After an exciting day of farm activities, there
                                is no better place to unwind than the Farm
                                Lounge. Sit back with a refreshing drink, enjoy
                                the view of our lush green fields, and let the
                                calm of the countryside refresh your spirit.
                            </p>
                            <p className="about-one__content__text text-center">
                                Our Farm Lounge is designed with your comfort in
                                mind. From the cozy seating areas to the scenic
                                outdoor terrace, every detail has been curated
                                to ensure you have a relaxing and memorable stay
                                at Fun Farming Uganda.
                            </p>
                            <p className="about-one__content__text text-center">
                                Open daily from 8:00 AM to 6:00 PM. Extended
                                hours available for booked events.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CtaSection
                icon="icon-leaf"
                title="Make Your Booking Today"
                text="Contact us to check availability and discuss your event requirements. We look forward to welcoming you to the Farm Lounge!"
                buttonLabel="Contact Us"
                buttonHref="/contact"
            />

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
