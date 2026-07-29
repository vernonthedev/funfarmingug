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
                            '<span class="icon-angle-small-left"></span>',
                            '<span class="icon-angle-small-right"></span>',
                        ],
                    });
                    $('.client-carousel__one').owlCarousel({
                        items: 5,
                        loop: true,
                        autoplay: true,
                        autoplayTimeout: 4000,
                        smartSpeed: 700,
                        dots: false,
                        nav: false,
                        margin: 30,
                        responsive: {
                            0: { items: 1 },
                            360: { items: 2 },
                            575: { items: 3 },
                            768: { items: 3 },
                            992: { items: 4 },
                            1200: { items: 5 },
                        },
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
                    <div className="item">
                        <div className="main-slider-one__item">
                            <div
                                className="main-slider-one__bg"
                                style={{
                                    backgroundImage:
                                        'url(/webimgs/fun-farm-image.jpg)',
                                }}
                            ></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-8">
                                        <div className="main-slider-one__content">
                                            <div className="main-slider-one__box">
                                                <div className="main-slider-one__box__item">
                                                    <div className="main-slider-one__box__icon">
                                                        <i className="icon-agriculture"></i>
                                                    </div>
                                                    <h5 className="main-slider-one__sub-title">
                                                        Agro Tourism & Team Building
                                                    </h5>
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
                                                        <i className="icon-angle-small-right"></i>
                                                    </Link>
                                                </div>
                                                <div className="main-slider-one__content__shape">
                                                    <img
                                                        src="/assets/images/shapes/arrow-variant-1.png"
                                                        alt="shape"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main-slider-one__shape">
                                <img
                                    src="/assets/images/shapes/slider-shape-1-1.png"
                                    alt="shape"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature One */}
            <section className="feature-one">
                <div className="container">
                    <div className="feature-one__box">
                        <div className="row gutter-y-30">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="feature-one__item">
                                    <div className="feature-one__item__icon-top">
                                        <i className="icon-gardener"></i>
                                    </div>
                                    <div className="feature-one__item__content">
                                        <h4 className="feature-one__item__title">
                                            <Link href="/activities">Board Games</Link>
                                        </h4>
                                        <p className="feature-one__item__text">
                                            Engage in exciting board games that blend fun with strategy.
                                        </p>
                                    </div>
                                    <div className="feature-one__item__icon-bottom">
                                        <i className="icon-gardener"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="feature-one__item">
                                    <div className="feature-one__item__icon-top">
                                        <i className="icon-park"></i>
                                    </div>
                                    <div className="feature-one__item__content">
                                        <h4 className="feature-one__item__title">
                                            <Link href="/activities">Farm Kitchen</Link>
                                        </h4>
                                        <p className="feature-one__item__text">
                                            Experience the taste of Uganda with our farm-to-table kitchen.
                                        </p>
                                    </div>
                                    <div className="feature-one__item__icon-bottom">
                                        <i className="icon-park"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="feature-one__item">
                                    <div className="feature-one__item__icon-top">
                                        <i className="icon-gardening"></i>
                                    </div>
                                    <div className="feature-one__item__content">
                                        <h4 className="feature-one__item__title">
                                            <Link href="/activities">Team Building</Link>
                                        </h4>
                                        <p className="feature-one__item__text">
                                            Strengthen your herd with our farm-tastic team-building activities.
                                        </p>
                                    </div>
                                    <div className="feature-one__item__icon-bottom">
                                        <i className="icon-gardening"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="feature-one__item">
                                    <div className="feature-one__item__icon-top">
                                        <i className="icon-gardener-1"></i>
                                    </div>
                                    <div className="feature-one__item__content">
                                        <h4 className="feature-one__item__title">
                                            <Link href="/activities">Farm Lounge</Link>
                                        </h4>
                                        <p className="feature-one__item__text">
                                            Unwind in our serene Farm Lounge after a day of activities.
                                        </p>
                                    </div>
                                    <div className="feature-one__item__icon-bottom">
                                        <i className="icon-gardener-1"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
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
                                            OUR WATCH VIDEO
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
                                        WELCOME TO THE FARM
                                    </div>
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

            {/* Services Section */}
            <section className="service-one section-space">
                <div className="service-one__bg"></div>
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sec-title__tagline">
                            <img
                                src="/assets/images/shapes/sec-title-s-1-1.png"
                                alt="shape"
                            />
                            ADVENTURE AWAITS
                        </div>
                        <h3 className="sec-title__title">
                            Thrilling Activities Await!
                        </h3>
                    </div>
                    <div className="row gutter-y-30">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="service-card-two">
                                <div className="service-card-two__inner">
                                    <div className="service-card-two__icon">
                                        <i className="icon-garden"></i>
                                    </div>
                                    <div className="service-card-two__content">
                                        <h4 className="service-card-two__title">
                                            <Link href="/activities">Board Games</Link>
                                        </h4>
                                        <p className="service-card-two__text">
                                            Engage in exciting board games that blend fun with strategy.
                                        </p>
                                    </div>
                                    <div className="service-card-two__thumb">
                                        <img
                                            src="/home/team-building2.jpg"
                                            alt="Board Games"
                                        />
                                    </div>
                                    <div className="service-card-two__btn">
                                        <Link href="/activities">
                                            <i className="icon-arrow-up-right2"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="service-card-two">
                                <div className="service-card-two__inner">
                                    <div className="service-card-two__icon">
                                        <i className="icon-gear"></i>
                                    </div>
                                    <div className="service-card-two__content">
                                        <h4 className="service-card-two__title">
                                            <Link href="/activities">Farm Kitchen</Link>
                                        </h4>
                                        <p className="service-card-two__text">
                                            Experience the taste of Uganda with our farm-to-table kitchen.
                                        </p>
                                    </div>
                                    <div className="service-card-two__thumb">
                                        <img
                                            src="/home/team-building2.jpg"
                                            alt="Farm Kitchen"
                                        />
                                    </div>
                                    <div className="service-card-two__btn">
                                        <Link href="/activities">
                                            <i className="icon-arrow-up-right2"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="service-card-two">
                                <div className="service-card-two__inner">
                                    <div className="service-card-two__icon">
                                        <i className="icon-gardener-1"></i>
                                    </div>
                                    <div className="service-card-two__content">
                                        <h4 className="service-card-two__title">
                                            <Link href="/activities">Team Building</Link>
                                        </h4>
                                        <p className="service-card-two__text">
                                            Strengthen your herd with our farm-tastic team-building activities.
                                        </p>
                                    </div>
                                    <div className="service-card-two__thumb">
                                        <img
                                            src="/home/team-building2.jpg"
                                            alt="Team Building"
                                        />
                                    </div>
                                    <div className="service-card-two__btn">
                                        <Link href="/activities">
                                            <i className="icon-arrow-up-right2"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="service-card-two">
                                <div className="service-card-two__inner">
                                    <div className="service-card-two__icon">
                                        <i className="icon-plant-1"></i>
                                    </div>
                                    <div className="service-card-two__content">
                                        <h4 className="service-card-two__title">
                                            <Link href="/activities">Farm Lounge</Link>
                                        </h4>
                                        <p className="service-card-two__text">
                                            Unwind in our serene Farm Lounge after a day of activities.
                                        </p>
                                    </div>
                                    <div className="service-card-two__thumb">
                                        <img
                                            src="/home/team-building2.jpg"
                                            alt="Farm Lounge"
                                        />
                                    </div>
                                    <div className="service-card-two__btn">
                                        <Link href="/activities">
                                            <i className="icon-arrow-up-right2"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose One */}
            <section className="why-choose-one section-space">
                <div className="container">
                    <div className="row gutter-y-30">
                        <div className="col-xl-5 col-lg-6">
                            <div className="why-choose-one__content">
                                <div className="sec-title text-start">
                                    <div className="sec-title__tagline">
                                        <img
                                            src="/assets/images/shapes/sec-title-s-1-1.png"
                                            alt="shape"
                                        />
                                        MEET OUR EXPERT
                                    </div>
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
                                <div className="why-choose-one__box">
                                    <div className="why-choose-one__box__thumb">
                                        <img
                                            src="/webimgs/david-holding-goat.jpg"
                                            alt="David"
                                        />
                                    </div>
                                    <div className="why-choose-one__box__content">
                                        <h4 className="why-choose-one__box__title">
                                            Schedule a Call
                                        </h4>
                                        <p className="why-choose-one__box__text">
                                            Book a consultation with David for your team-building event.
                                        </p>
                                    </div>
                                </div>
                                <ul className="why-choose-one__list list-unstyled">
                                    <li>
                                        <i className="icon-leaf"></i>{' '}
                                        <span>Custom Activity Planning</span>
                                    </li>
                                    <li>
                                        <i className="icon-leaf"></i>{' '}
                                        <span>Farm Tours & Guides</span>
                                    </li>
                                    <li>
                                        <i className="icon-leaf"></i>{' '}
                                        <span>Catering Services</span>
                                    </li>
                                    <li>
                                        <i className="icon-leaf"></i>{' '}
                                        <span>Expert Team Leaders</span>
                                    </li>
                                </ul>
                                <div className="why-choose-one__btn">
                                    <a
                                        href="https://www.calendly.com/farmfun/kennismakingsgesprek-teambuilding-farmfun"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="garlon-btn"
                                    >
                                        <span>Schedule Conversation</span>
                                        <i className="icon-angle-small-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="why-choose-one__thumb">
                                <img
                                    src="/webimgs/david-holding-goat.jpg"
                                    alt="Farmer David holding a goat"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA One */}
            <div className="cta-one">
                <div className="cta-one__bg"></div>
                <div className="container">
                    <div className="cta-one__inner">
                        <div className="cta-one__call">
                            <div className="cta-one__call__icon">
                                <i className="icon-leaf"></i>
                            </div>
                            <div className="cta-one__call__content">
                                <h3 className="cta-one__call__title">
                                    Create your ideal team-building event
                                </h3>
                                <div className="cta-one__call__link">
                                    Choose your ideal activity, add catering,
                                    check availability, and instantly generate
                                    your quote.
                                </div>
                            </div>
                        </div>
                        <div className="cta-one__btn">
                            <Link href="/activities" className="garlon-btn">
                                <span>View Our Activities</span>
                                <i className="icon-angle-small-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team One */}
            <section className="team-one section-space">
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sec-title__tagline">
                            <img
                                src="/assets/images/shapes/sec-title-s-1-1.png"
                                alt="shape"
                            />
                            OUR TEAM
                        </div>
                        <h3 className="sec-title__title">
                            Meet Our Expert Farmers
                        </h3>
                    </div>
                </div>
            </section>

            {/* Funfact Three */}
            <section className="funfact-three">
                <div className="funfact-three__bg"></div>
                <div className="container">
                    <div className="funfact-three__inner">
                        <div className="funfact-three__item">
                            <div className="funfact-three__item__icon">
                                <i className="icon-pin"></i>
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
                                <i className="icon-event"></i>
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
                                <i className="icon-eco"></i>
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
                                <i className="icon-community"></i>
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

            {/* Partner Logos */}
            <div className="client-carousel">
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sec-title__tagline">
                            <img
                                src="/assets/images/shapes/sec-title-s-1-1.png"
                                alt="shape"
                            />
                            OUR PARTNERS
                        </div>
                        <h3 className="sec-title__title">
                            Trusted by Leading Organizations
                        </h3>
                    </div>
                    <div className="client-carousel__one owl-carousel owl-theme">
                        <div className="client-carousel__one__item">
                            <img
                                className="client-carousel__one__item__normal"
                                src="/img/partners/fao-logo.svg"
                                alt="FAO"
                            />
                        </div>
                        <div className="client-carousel__one__item">
                            <img
                                className="client-carousel__one__item__normal"
                                src="/img/partners/unfe.png"
                                alt="UNFE"
                            />
                        </div>
                        <div className="client-carousel__one__item">
                            <img
                                className="client-carousel__one__item__normal"
                                src="/img/partners/unyfa.png"
                                alt="UNYFA"
                            />
                        </div>
                        <div className="client-carousel__one__item">
                            <img
                                className="client-carousel__one__item__normal"
                                src="/img/partners/fao-logo.svg"
                                alt="FAO"
                            />
                        </div>
                        <div className="client-carousel__one__item">
                            <img
                                className="client-carousel__one__item__normal"
                                src="/img/partners/unfe.png"
                                alt="UNFE"
                            />
                        </div>
                        <div className="client-carousel__one__item">
                            <img
                                className="client-carousel__one__item__normal"
                                src="/img/partners/unyfa.png"
                                alt="UNYFA"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Location Section */}
            <section className="about-one section-space">
                <div className="container">
                    <div className="row gutter-y-30">
                        <div className="col-lg-6">
                            <div className="about-one__content">
                                <div className="sec-title text-start">
                                    <div className="sec-title__tagline">
                                        <img
                                            src="/assets/images/shapes/sec-title-s-1-1.png"
                                            alt="shape"
                                        />
                                        FIND US
                                    </div>
                                    <h3 className="sec-title__title">
                                        There&apos;s always a FarmFun near you
                                    </h3>
                                </div>
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
                        </div>
                        <div className="col-lg-6">
                            <div className="about-one__thumb__item">
                                <img
                                    src="/webimgs/fun-farm-image.jpg"
                                    alt="Fun Farming Uganda location"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Secondary CTA */}
            <div className="cta-one">
                <div className="cta-one__bg"></div>
                <div className="container">
                    <div className="cta-one__inner">
                        <div className="cta-one__call">
                            <div className="cta-one__call__icon">
                                <i className="icon-cattle"></i>
                            </div>
                            <div className="cta-one__call__content">
                                <h3 className="cta-one__call__title">
                                    Take the bull by the horns!
                                </h3>
                                <div className="cta-one__call__link">
                                    Ready for an unforgettable farm adventure?
                                    Book your team-building experience today.
                                </div>
                            </div>
                        </div>
                        <div className="cta-one__btn">
                            <Link href="/activities" className="garlon-btn">
                                <span>To all activities</span>
                                <i className="icon-angle-small-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}