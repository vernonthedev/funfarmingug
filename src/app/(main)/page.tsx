'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function HomePage() {
    useEffect(() => {
        function initCarousels() {
            if (
                typeof window !== 'undefined' &&
                (window as any).jQuery &&
                (window as any).jQuery.fn?.owlCarousel
            ) {
                const $ = (window as any).jQuery;
                try {
                    $('.main-slider-one__carousel').owlCarousel({
                        items: 1,
                        loop: true,
                        autoplay: true,
                        autoplayTimeout: 7000,
                        smartSpeed: 1000,
                        dots: false,
                        nav: true,
                        navText: [
                            '<span class="icon-arrow-left"></span>',
                            '<span class="icon-arrow-right"></span>',
                        ],
                    });
                    $('.client-carousel .owl-carousel').owlCarousel({
                        loop: true,
                        autoplay: true,
                        autoplayTimeout: 4000,
                        smartSpeed: 700,
                        dots: false,
                        nav: false,
                        margin: 80,
                        items: 4,
                    });
                } catch (e) {
                    // owl not ready yet
                }
                return true;
            }
            return false;
        }

        if (!initCarousels()) {
            const timer = setInterval(() => {
                if (initCarousels()) clearInterval(timer);
            }, 200);
            setTimeout(() => clearInterval(timer), 10000);
            return () => clearInterval(timer);
        }
    }, []);

    return (
        <>
            {/* Hero Slider */}
            <section className="main-slider-one">
                <div className="main-slider-one__carousel owl-carousel owl-theme">
                    <div className="main-slider-one__item">
                        <div
                            className="main-slider-one__bg"
                            style={{
                                backgroundImage:
                                    'url(/webimgs/fun-farm-image.jpg)',
                            }}
                        ></div>
                        <div className="main-slider-one__shape">
                            <img
                                src="/assets/images/shapes/slider-shape-1-1.png"
                                alt="shape"
                            />
                        </div>
                        <div className="container">
                            <div className="main-slider-one__content">
                                <div className="main-slider-one__box">
                                    <div className="main-slider-one__box__icon">
                                        <span
                                            aria-hidden="true"
                                            className="icon-agriculture"
                                        ></span>
                                    </div>
                                    <p className="main-slider-one__sub-title">
                                        Agro Tourism & Team Building
                                    </p>
                                </div>
                                <h2 className="main-slider-one__title">
                                    Welcome to Fun Farming Uganda
                                    <br />
                                    Where Agriculture Meets Adventure!
                                </h2>
                                <p className="main-slider-one__text">
                                    Experience the joy of farm life with our
                                    unique team-building activities and agro
                                    tourism experiences.
                                </p>
                                <div className="main-slider-one__btn">
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
            </section>

            {/* About / Certainties Section */}
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
                                        WELCOME TO THE FARM
                                    </p>
                                    <h3 className="sec-title__title">
                                        Discover the joy of team events at our
                                        farm oasis!
                                    </h3>
                                </div>
                                <p className="about-one__content__text">
                                    At Fun Farming Uganda, we bring people
                                    together through unforgettable farm
                                    experiences. From team building to farm
                                    tours, every visit is crafted to inspire
                                    connection and joy.
                                </p>
                                <ul className="about-one__list list-unstyled">
                                    <li>
                                        <i className="fa fa-check-circle"></i>
                                        <span>
                                            Everyone&apos;s invited to a day of
                                            laughter and connection
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check-circle"></i>
                                        <span>
                                            Unleash the fun with well-organized
                                            activities
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check-circle"></i>
                                        <span>
                                            Connect, learn, and share
                                            unforgettable moments
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check-circle"></i>
                                        <span>
                                            Our exciting activities are led by
                                            passionate staff
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check-circle"></i>
                                        <span>
                                            Expect the unexpected - we always go
                                            the extra mile
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check-circle"></i>
                                        <span>
                                            Any hiccups along the way?
                                            We&apos;ve got you covered
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check-circle"></i>
                                        <span>
                                            Delight in the flavors of local
                                            Ugandan farm cuisine
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-30">
                                    <Link
                                        href="/activities"
                                        className="garlon-btn"
                                    >
                                        View More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video + Text Section */}
            <section className="service-one">
                <div className="service-one__bg"></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-one__thumb__item">
                                <img
                                    src="/home/team-building2.jpg"
                                    alt="Team building at Fun Farming Uganda"
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
                                        ADVENTURE AWAITS
                                    </p>
                                    <h3 className="sec-title__title">
                                        Thrilling Activities Await!
                                    </h3>
                                </div>
                                <p className="about-one__content__text">
                                    Embark on a journey of excitement with our
                                    diverse range of farm activities. Whether
                                    it&apos;s picking fresh produce, joining
                                    workshops, or participating in seasonal
                                    events, there&apos;s always something for
                                    everyone at Fun Farming Uganda.
                                </p>
                                <Link href="/activities" className="garlon-btn">
                                    View Activities
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Text + Image Section - David */}
            <section className="why-choose-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="why-choose-one__thumb">
                                <img
                                    src="/webimgs/david-holding-goat.jpg"
                                    alt="Farmer David holding a goat"
                                />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="why-choose-one__content">
                                <div className="sec-title">
                                    <p className="sec-title__tagline">
                                        <img
                                            src="/assets/images/shapes/sec-title-s-1-1.png"
                                            alt="shape"
                                        />
                                        MEET OUR EXPERT
                                    </p>
                                    <h3 className="sec-title__title">
                                        Moo towards us for customized advice
                                    </h3>
                                </div>
                                <p className="why-choose-one__text">
                                    Gathering the horns? Our cow-league David is
                                    ready to advise you so that you&apos;ll reap
                                    applause for this team-building. With years
                                    of farm experience, David helps groups find
                                    the perfect activity mix.
                                </p>
                                <div className="why-choose-one__btn">
                                    <a
                                        href="https://www.calendly.com/farmfun/kennismakingsgesprek-teambuilding-farmfun"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="garlon-btn"
                                    >
                                        Schedule Conversation
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Logos */}
            <section className="client-carousel">
                <div className="container">
                    <div className="sec-title text-center">
                        <p className="sec-title__tagline">
                            <img
                                src="/assets/images/shapes/sec-title-s-1-1.png"
                                alt="shape"
                            />
                            OUR PARTNERS
                        </p>
                        <h3 className="sec-title__title">
                            Trusted by Leading Organizations
                        </h3>
                    </div>
                    <div className="owl-carousel owl-theme">
                        <div className="client-carousel__one__item">
                            <img src="/img/partners/fao-logo.svg" alt="FAO" />
                        </div>
                        <div className="client-carousel__one__item">
                            <img src="/img/partners/unfe.png" alt="UNFE" />
                        </div>
                        <div className="client-carousel__one__item">
                            <img src="/img/partners/unyfa.png" alt="UNYFA" />
                        </div>
                        <div className="client-carousel__one__item">
                            <img src="/img/partners/fao-logo.svg" alt="FAO" />
                        </div>
                        <div className="client-carousel__one__item">
                            <img src="/img/partners/unfe.png" alt="UNFE" />
                        </div>
                        <div className="client-carousel__one__item">
                            <img src="/img/partners/unyfa.png" alt="UNYFA" />
                        </div>
                    </div>
                </div>
            </section>

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
                                    Create your ideal team-building event
                                </h3>
                                <p className="cta-one__call__link">
                                    Choose your ideal activity, add catering,
                                    check availability, and instantly generate
                                    your quote.
                                </p>
                            </div>
                        </div>
                        <div className="cta-one__btn">
                            <Link href="/activities" className="garlon-btn">
                                View Our Activities
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="about-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="sec-title text-center">
                                <p className="sec-title__tagline">
                                    <img
                                        src="/assets/images/shapes/sec-title-s-1-1.png"
                                        alt="shape"
                                    />
                                    FIND US
                                </p>
                                <h3 className="sec-title__title">
                                    There&apos;s always a FarmFun near you
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <p>
                                Fun Farm is located in Uganda and deeply rooted
                                in the Butalangu province, Nakaseke District.
                                Who rules the roost at each of the farms? Our
                                dairy cows! While they watch the hilarious
                                antics of you and your cow-leagues or friends,
                                our Chief Executive Farmers and game leaders
                                provide you with a farmtastic day.
                            </p>
                            <Link href="/contact" className="garlon-btn">
                                Discover this location
                            </Link>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-one__thumb__item">
                                <img
                                    src="/webimgs/fun-farm-image.jpg"
                                    alt="Fun Farming Uganda location"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-30">
                        <div className="col-xl-12">
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
                        </div>
                    </div>
                </div>
            </section>

            {/* Secondary CTA */}
            <section className="cta-one">
                <div className="cta-one__bg"></div>
                <div className="container">
                    <div className="cta-one__inner">
                        <div className="cta-one__call">
                            <div className="cta-one__call__icon">
                                <span
                                    aria-hidden="true"
                                    className="icon-cattle"
                                ></span>
                            </div>
                            <div>
                                <h3 className="cta-one__call__title">
                                    Take the bull by the horns!
                                </h3>
                                <p className="cta-one__call__link">
                                    Ready for an unforgettable farm adventure?
                                    Book your team-building experience today.
                                </p>
                            </div>
                        </div>
                        <div className="cta-one__btn">
                            <Link href="/activities" className="garlon-btn">
                                To all activities
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* USP Row */}
            <section className="funfact-three">
                <div className="funfact-three__bg"></div>
                <div className="container">
                    <div className="funfact-three__inner">
                        <div className="funfact-three__item">
                            <div className="funfact-three__item__icon">
                                <span
                                    aria-hidden="true"
                                    className="icon-pin"
                                ></span>
                            </div>
                            <div className="funfact-three__item__content">
                                <h3 className="funfact-three__item__count">
                                    <span>01</span>
                                </h3>
                                <p className="funfact-three__item__text">
                                    Have Fun always close by
                                </p>
                            </div>
                        </div>
                        <div className="funfact-three__item">
                            <div className="funfact-three__item__icon">
                                <span
                                    aria-hidden="true"
                                    className="icon-event"
                                ></span>
                            </div>
                            <div className="funfact-three__item__content">
                                <h3 className="funfact-three__item__count">
                                    <span>02</span>
                                </h3>
                                <p className="funfact-three__item__text">
                                    Imagine Yourself ideal event together
                                </p>
                            </div>
                        </div>
                        <div className="funfact-three__item">
                            <div className="funfact-three__item__icon">
                                <span
                                    aria-hidden="true"
                                    className="icon-eco"
                                ></span>
                            </div>
                            <div className="funfact-three__item__content">
                                <h3 className="funfact-three__item__count">
                                    <span>03</span>
                                </h3>
                                <p className="funfact-three__item__text">
                                    Minimum mid impact
                                </p>
                            </div>
                        </div>
                        <div className="funfact-three__item">
                            <div className="funfact-three__item__icon">
                                <span
                                    aria-hidden="true"
                                    className="icon-community"
                                ></span>
                            </div>
                            <div className="funfact-three__item__content">
                                <h3 className="funfact-three__item__count">
                                    <span>04</span>
                                </h3>
                                <p className="funfact-three__item__text">
                                    For thinkers and doers, young and less young
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
