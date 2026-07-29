'use client';

import Link from 'next/link';
import PageHeader from '@/components/sections/PageHeader';

export default function AboutPage() {
    return (
        <>
            <PageHeader
                title="About Us"
                bgImage="/assets/images/backgrounds/page-header-bg-1-1.jpg"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'About' },
                ]}
            />

            <section className="about-one section-space">
                <div className="container">
                    <div className="row gutter-y-30">
                        <div className="col-lg-6">
                            <div className="about-one__thumb">
                                <div className="about-one__thumb__item">
                                    <img
                                        src="/webimgs/fun-farm-image.jpg"
                                        alt="Fun Farming Uganda"
                                    />
                                </div>
                                <div className="about-one__thumb__small-item">
                                    <img
                                        src="/webimgs/david-holding-goat.jpg"
                                        alt="Farmer David"
                                    />
                                    <a
                                        href="https://www.youtube.com/watch?v=G49_MdP0klg"
                                        className="about-one__video video-popup"
                                    >
                                        <span className="about-one__btn__icon">
                                            <i className="icon-play-1"></i>
                                        </span>
                                        <span className="about-one__btn__text">
                                            WATCH VIDEO
                                        </span>
                                    </a>
                                </div>
                                <div className="about-one__thumb__shape">
                                    <img
                                        src="/assets/images/shapes/about-shape-1-1.png"
                                        alt="shape"
                                    />
                                </div>
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
                                        WELCOME TO FUN FARMING UGANDA
                                    </div>
                                    <h3 className="sec-title__title">
                                        Where Agriculture Meets Adventure!
                                    </h3>
                                </div>
                                <p className="about-one__content__text">
                                    Fun Farming Uganda is a unique agro-tourism
                                    destination where agriculture meets adventure.
                                    Located in the heart of Nakaseke District,
                                    Butalangu province, we offer an unforgettable
                                    farm experience that combines education, team
                                    building, and the beauty of Ugandan rural life.
                                </p>
                                <div className="about-one__list-box">
                                    <div className="about-one__list__icon">
                                        <i className="icon-leaf"></i>
                                        <span className="about-one__list__icon-text">
                                            <span>Fun Farming</span>
                                            <span>Buffet</span>
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
                                                src="/webimgs/david-holding-goat.jpg"
                                                alt="David"
                                            />
                                        </div>
                                        <div className="about-one__user__content">
                                            <h4 className="about-one__user__name">
                                                David
                                            </h4>
                                            <p className="about-one__user__text">
                                                Chief Executive Farmer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-one__shape">
                    <img
                        src="/assets/images/shapes/plant-1.png"
                        alt="shape"
                    />
                </div>
            </section>

            <section className="about-one section-space">
                <div className="container">
                    <div className="row gutter-y-30 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-one__thumb__item">
                                <img
                                    src="/webimgs/david-holding-goat.jpg"
                                    alt="Good meat in the tub"
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
                                        FARM PHILOSOPHY
                                    </div>
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
                                    positive experience of their milk.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-one section-space">
                <div className="container">
                    <div className="row gutter-y-30 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-one__content">
                                <div className="sec-title text-start">
                                    <div className="sec-title__tagline">
                                        <img
                                            src="/assets/images/shapes/sec-title-s-1-1.png"
                                            alt="shape"
                                        />
                                        OUR MANTRA
                                    </div>
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
                                    doing to strengthen team spirit.
                                </p>
                                <Link
                                    href="/farmfood"
                                    className="garlon-btn"
                                >
                                    See Animal Breeds
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-one__thumb__item">
                                <img
                                    src="/webimgs/funfarm_n20.png"
                                    alt="Goat communicating, cow connecting"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container text-center mt-30">
                <p className="about-one__content__text">
                    <strong>Make your bookings today</strong> and experience
                    the farm adventure of a lifetime!
                </p>
            </div>

            <section className="cta-one">
                <div className="cta-one__bg"></div>
                <div className="container">
                    <div className="cta-one__inner">
                        <div className="cta-one__call">
                            <div className="cta-one__call__icon">
                                <i className="icon-leaf"></i>
                            </div>
                            <div className="cta-one__call__content">
                                <h3 className="cta-one__call__title">
                                    Ready for a farm adventure?
                                </h3>
                                <div className="cta-one__call__link">
                                    Book your team-building event or farm visit
                                    today and create unforgettable memories with
                                    Fun Farming Uganda.
                                </div>
                            </div>
                        </div>
                        <div className="cta-one__btn">
                            <Link href="/contact" className="garlon-btn">
                                <span>Book Now</span>
                                <i className="icon-angle-small-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}