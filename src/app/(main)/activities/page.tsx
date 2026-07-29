'use client';

import Link from 'next/link';

export default function ActivitiesPage() {
    return (
        <>
            <section className="page-header">
                <div
                    className="page-header__bg"
                    style={{
                        backgroundImage: 'url(/img/gallery/funfarm_n27.png)',
                    }}
                ></div>
                <div className="container">
                    <h2 className="page-header__title">Activities</h2>
                    <ul className="garlon-breadcrumb list-unstyled">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <span>Activities</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="service-page section-space">
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sec-title__tagline bw-split-in-up-fast">
                            <img
                                src="/assets/images/shapes/sec-title-shape.png"
                                alt="shape"
                            />
                            FUN ACTIVITIES
                        </div>
                        <h3 className="sec-title__title bw-split-in-up">
                            Farm Games & Team Building <br /> For You & Your
                            Herd
                        </h3>
                    </div>
                    <div className="row gutter-y-30">
                        {[
                            {
                                title: 'Board Games',
                                desc: 'Engage in exciting board games that blend fun with strategy. Perfect for groups looking to enjoy friendly competition in a relaxed farm setting.',
                            },
                            {
                                title: 'Farm Kitchen',
                                desc: 'Experience the taste of Uganda with our farm-to-table kitchen. Learn to prepare local dishes using fresh organic produce straight from our farm.',
                            },
                            {
                                title: 'Team Building',
                                desc: 'Strengthen your herd with our farm-tastic team-building activities. Collaborative challenges designed to boost communication and team spirit.',
                            },
                            {
                                title: 'Farm Lounge',
                                desc: 'Unwind in our serene Farm Lounge after a day of activities. Comfortable seating, refreshments, and panoramic views of the countryside.',
                            },
                        ].map((activity, index) => (
                            <div key={index} className="col-lg-3 col-md-6">
                                <div
                                    className="service-card-two wow fadeInUp"
                                    data-wow-duration="1500ms"
                                    data-wow-delay={`${(index + 1) * 200}ms`}
                                >
                                    <div className="service-card-two__inner">
                                        <div className="service-card-two__icon">
                                            <i
                                                className={
                                                    [
                                                        'icon-garden',
                                                        'icon-gear',
                                                        'icon-gardener-1',
                                                        'icon-plant-1',
                                                    ][index]
                                                }
                                            ></i>
                                        </div>
                                        <div className="service-card-two__content">
                                            <h4 className="service-card-two__title">
                                                {activity.title}
                                            </h4>
                                            <p className="service-card-two__text">
                                                {activity.desc}
                                            </p>
                                        </div>
                                        <div className="service-card-two__btn">
                                            <Link href="/contact">
                                                <i className="icon-arrow-up-right2"></i>
                                            </Link>
                                        </div>
                                        <div className="service-card-two__shape-one">
                                            <img
                                                src="/assets/images/shapes/leaf-left-1.png"
                                                alt="icon"
                                            />
                                        </div>
                                        <div className="service-card-two__shape-two">
                                            <img
                                                src="/assets/images/shapes/leaf-right-2.png"
                                                alt="icon"
                                            />
                                        </div>
                                    </div>
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
                            <div className="about-one__thumb__item">
                                <img
                                    src="/img/home/team-building2.jpg"
                                    alt="Team building at Fun Farming Uganda"
                                />
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
                                        PLAN YOUR VISIT
                                    </div>
                                    <h3 className="sec-title__title bw-split-in-up">
                                        Book Your Farm Adventure <br /> Today
                                    </h3>
                                </div>
                                <p className="about-one__content__text">
                                    Planning a visit to Fun Farming Uganda is
                                    easy and exciting. Whether you are coming
                                    with colleagues, friends, or family, we
                                    offer a range of activities that guarantee
                                    laughter, learning, and lasting memories.
                                </p>
                                <p className="about-one__content__text">
                                    Our farm is located in Butalangu Town
                                    Council, Nakaseke District, and is
                                    accessible by road. We recommend booking in
                                    advance to secure your preferred date and
                                    activities.
                                </p>
                                <p className="about-one__content__text">
                                    <strong>
                                        Minimum group size is 10 participants.
                                        Not sure yet? You can provide the exact
                                        number of participants later.
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

            <section className="cta-one">
                <div className="container">
                    <div className="cta-one__inner">
                        <div className="cta-one__call">
                            <div className="cta-one__call__icon">
                                <i className="icon-leaf"></i>
                            </div>
                            <div>
                                <h3 className="cta-one__call__title">
                                    Request Information
                                </h3>
                                <p className="cta-one__call__link">
                                    <a href="tel:+256772826680">
                                        +256 772 826 680
                                    </a>
                                    <span>or</span>
                                    <a href="mailto:support@funfarminguganda.com">
                                        support@funfarminguganda.com
                                    </a>
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

            <section className="about-one section-space-bottom">
                <div className="container">
                    <div className="row gutter-y-30 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-one__content">
                                <div className="sec-title text-start">
                                    <div className="sec-title__tagline bw-split-in-up-fast">
                                        <img
                                            src="/assets/images/shapes/sec-title-shape.png"
                                            alt="shape"
                                        />
                                        GLOBAL VISITORS
                                    </div>
                                    <h3 className="sec-title__title bw-split-in-up">
                                        Visitors from <br /> Around the World
                                    </h3>
                                </div>
                                <p className="about-one__content__text">
                                    We have hosted tourists from Germany and
                                    across the globe who come to experience the
                                    unique blend of agriculture and adventure
                                    that Fun Farming Uganda offers. Our
                                    team-building activities are particularly
                                    popular among international visitors looking
                                    for an authentic Ugandan farm experience.
                                </p>
                                <p className="about-one__content__text">
                                    From navigating our obstacle courses to
                                    participating in farm games, guests leave
                                    with unforgettable memories and a deeper
                                    appreciation for sustainable farming.
                                </p>
                                <div className="about-one__user-box">
                                    <Link
                                        href="/contact"
                                        className="garlon-btn"
                                    >
                                        <span>Book Your Experience</span>
                                        <i className="icon-angle-small-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-one__thumb__item">
                                <img
                                    src="/webimgs/fun-farm-image.jpg"
                                    alt="Tourists from Germany at Fun Farming Uganda"
                                />
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
