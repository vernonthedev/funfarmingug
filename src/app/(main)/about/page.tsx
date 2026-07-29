'use client';

import Link from 'next/link';

export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div
                    className="page-header__bg"
                    style={{
                        backgroundImage:
                            "url(/assets/images/backgrounds/page-header-bg-1-1.jpg)",
                    }}
                ></div>
                <div className="container">
                    <h2 className="page-header__title">About Us</h2>
                    <ul className="garlon-breadcrumb list-unstyled">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <span>About</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* About Section */}
            <section className="about-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-one__thumb">
                                <div className="about-one__thumb__item">
                                    <img
                                        src="/img/logo.png"
                                        alt="Fun Farming Uganda"
                                    />
                                </div>
                                <div className="about-one__thumb__small-item">
                                    <img
                                        src="/gallery/funfarm_n28.png"
                                        alt="Goats at Fun Farming Uganda"
                                    />
                                    <div className="about-one__video">
                                        <a
                                            href="https://www.youtube.com/watch?v=VIDEO_ID"
                                            className="about-one__btn__icon popup-video"
                                        >
                                            <span
                                                aria-hidden="true"
                                                className="icon-play"
                                            ></span>
                                        </a>
                                        <p className="about-one__btn__text">
                                            Watch Video
                                        </p>
                                    </div>
                                </div>
                                <div className="about-one__thumb__shape">
                                    <img
                                        src="/assets/images/shapes/about-shape-1-1.png"
                                        alt="shape"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-one__content">
                                <div className="sec-title">
                                    <p className="sec-title__tagline">
                                        <img
                                            src="/assets/images/shapes/sec-title-s-1-1.png"
                                            alt="shape"
                                        />
                                        ABOUT US
                                    </p>
                                    <h3 className="sec-title__title">
                                        Where Agriculture Meets Adventure!
                                    </h3>
                                </div>
                                <p className="about-one__content__text">
                                    Fun Farming Uganda is a unique agro-tourism
                                    destination where agriculture meets
                                    adventure. Located in the heart of Nakaseke
                                    District, Butalangu province, we offer an
                                    unforgettable farm experience that combines
                                    education, team building, and the beauty of
                                    Ugandan rural life.
                                </p>
                                <h4>What is Fun Farming Uganda?</h4>
                                <p className="about-one__content__text">
                                    Fun Farming Uganda is an organic farm
                                    engaging in diverse agricultural activities
                                    like goat breeding, poultry farming, banana
                                    plantation. It also serves as a youth agro
                                    project educating and involving young
                                    individuals in sustainable farming
                                    practices, contributing to Uganda&apos;s
                                    agricultural sector.
                                </p>
                                <div className="about-one__list-box">
                                    <div className="about-one__list__icon">
                                        <i className="icon-leaf"></i>
                                        <span className="about-one__list__icon-text">
                                            <span>Farm</span>
                                            <span>Features</span>
                                        </span>
                                    </div>
                                    <ul className="about-one__list list-unstyled">
                                        <li>
                                            <i className="fa fa-check-circle"></i>
                                            <span>Team Building</span>
                                        </li>
                                        <li>
                                            <i className="fa fa-check-circle"></i>
                                            <span>Farm Activities</span>
                                        </li>
                                        <li>
                                            <i className="fa fa-check-circle"></i>
                                            <span>Farm Visits</span>
                                        </li>
                                        <li>
                                            <i className="fa fa-check-circle"></i>
                                            <span>Farm Kitchen</span>
                                        </li>
                                        <li>
                                            <i className="fa fa-check-circle"></i>
                                            <span>Kids&apos; Parties</span>
                                        </li>
                                        <li>
                                            <i className="fa fa-check-circle"></i>
                                            <span>Farm Camps</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="about-one__user-box">
                                    <div className="about-one__user">
                                        <div className="about-one__user__thumb">
                                            <img
                                                src="/img/logo.png"
                                                alt="Fun Farming Uganda"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="about-one__user__name">
                                                David
                                            </h4>
                                            <p className="about-one__user__text">
                                                Chief Executive Farmer
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-20">
                                        <Link
                                            href="/activities"
                                            className="garlon-btn"
                                        >
                                            View Activities
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Good meat in the tub */}
            <section className="about-one">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-one__thumb__item">
                                <img
                                    src="/gallery/funfarm_n28.png"
                                    alt="Good meat in the tub"
                                />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-one__content">
                                <div className="sec-title">
                                    <p className="sec-title__tagline">
                                        <img
                                            src="/assets/images/shapes/sec-title-s-1-1.png"
                                            alt="shape"
                                        />
                                        FARM PHILOSOPHY
                                    </p>
                                    <h3 className="sec-title__title">
                                        Good meat in the tub
                                    </h3>
                                </div>
                                <p className="about-one__content__text">
                                    The cart at our Fun Farming location is
                                    pulled by a farmtastic and farmbitious
                                    farmer and farmer&apos;s wife. In other
                                    words: our Chief Executive Farmers (CEF).
                                    With them we all have good meat in the tank.
                                    They are farm ambassadors who are
                                    particularly keen to provide people with a
                                    positive experience of their milk. In the
                                    open fields, between the cows or deep in
                                    the straw. Together with their farmtastic
                                    herd of game supervisors, they have only one
                                    goal in mind: strengthening the herd and
                                    organic spirit as well as embracing the agro
                                    tourism concept in Uganda.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Goat communicating, cow connecting */}
            <section className="about-one">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-one__content">
                                <div className="sec-title">
                                    <p className="sec-title__tagline">
                                        <img
                                            src="/assets/images/shapes/sec-title-s-1-1.png"
                                            alt="shape"
                                        />
                                        OUR MANTRA
                                    </p>
                                    <h3 className="sec-title__title">
                                        Goat communicating, cow connecting and
                                        cow cooning
                                    </h3>
                                </div>
                                <p className="about-one__content__text">
                                    These are the three key words at Fun Farming
                                    Uganda. With the Farm Games and Farm Expert
                                    Games, herds of cow colleagues or friends
                                    are presented with a fun mix of thinking and
                                    doing to strengthen team spirit. A cow and
                                    goat-lover or quiet in nature. A young foal
                                    or an old hand in the trade. Each of our
                                    games is made with the idea that everyone
                                    will remember this team event for a long
                                    time.
                                </p>
                                <Link
                                    href="/farmfood"
                                    className="garlon-btn"
                                >
                                    See Animal Breeds
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-one__thumb__item">
                                <img
                                    src="/gallery/funfarm_n20.png"
                                    alt="Goat communicating, cow connecting"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking hint */}
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 text-center">
                        <p className="about-one__content__text">
                            <strong>Make your bookings today</strong> and
                            experience the farm adventure of a lifetime!
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <section className="cta-one">
                <div className="cta-one__bg"></div>
                <div className="container">
                    <div className="cta-one__inner">
                        <div className="cta-one__call">
                            <div className="cta-one__call__icon">
                                <span
                                    aria-hidden="true"
                                    className="icon-leaf"
                                ></span>
                            </div>
                            <div>
                                <h3 className="cta-one__call__title">
                                    Ready for a farm adventure?
                                </h3>
                                <p className="cta-one__call__link">
                                    Book your team-building event or farm visit
                                    today and create unforgettable memories with
                                    Fun Farming Uganda.
                                </p>
                            </div>
                        </div>
                        <div className="cta-one__btn">
                            <Link href="/contact" className="garlon-btn">
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
