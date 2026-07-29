'use client';

import Link from 'next/link';

export default function LoungePage() {
    return (
        <>
            <section className="page-header">
                <div
                    className="page-header__bg"
                    style={{
                        backgroundImage: 'url(/img/gallery/funfarm_n26.png)',
                    }}
                ></div>
                <div className="container">
                    <h2 className="page-header__title">Farm Lounge</h2>
                    <ul className="garlon-breadcrumb list-unstyled">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <span>Farm Lounge</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="about-one section-space">
                <div className="container">
                    <div className="row gutter-y-30 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-one__thumb">
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
                                <div className="sec-title text-start">
                                    <div className="sec-title__tagline bw-split-in-up-fast">
                                        <img
                                            src="/assets/images/shapes/sec-title-shape.png"
                                            alt="shape"
                                        />
                                        FIVE STAR HOUSING
                                    </div>
                                    <h3 className="sec-title__title bw-split-in-up">
                                        Our Lounge <br /> Facilities
                                    </h3>
                                </div>
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
                            <div className="sec-title text-center">
                                <div className="sec-title__tagline bw-split-in-up-fast">
                                    <img
                                        src="/assets/images/shapes/sec-title-shape.png"
                                        alt="shape"
                                    />
                                    RELAX & RECHARGE
                                </div>
                                <h3 className="sec-title__title bw-split-in-up">
                                    Relax and Recharge
                                </h3>
                            </div>
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

            <section className="cta-one">
                <div className="container">
                    <div className="cta-one__inner">
                        <div className="cta-one__call">
                            <div className="cta-one__call__icon">
                                <i className="icon-leaf"></i>
                            </div>
                            <div>
                                <h3 className="cta-one__call__title">
                                    Make Your Booking Today
                                </h3>
                                <p className="cta-one__call__link">
                                    Contact us to check availability and discuss
                                    your event requirements. We look forward to
                                    welcoming you to the Farm Lounge!
                                </p>
                            </div>
                        </div>
                        <div className="cta-one__btn">
                            <Link href="/contact" className="garlon-btn">
                                <span>Contact Us</span>
                                <i className="icon-angle-small-right"></i>
                            </Link>
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
