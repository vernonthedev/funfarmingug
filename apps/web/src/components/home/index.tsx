import Link from 'next/link';
import { HERO_VIDEO_BG, HERO_VIDEO_POSTER } from '@/lib/site';

function HeroContent() {
    return (
        <>
            <h1 className="title font-farmhouse tf-fade-top fade-item-2">
                Welcome to Fun Farming Uganda
                <br />
                Where Agriculture Meets Adventure!
            </h1>
            <div className="img-item">
                <img
                    className="tf-trainsition-draw-left access-trainsition"
                    src="/images/item/line-throw-title.png"
                    alt=""
                />
            </div>
            <p className="text font-nunito tf-fade-left fade-item-4">
                Discover the joy of team events at our farm oasis in Nakaseke
                District, Uganda.
                <br />
                Connect, learn, and share unforgettable moments with a community
                of enthusiasts.
            </p>
            <Link
                href="/activities"
                className="tf-btn btn-view bg-white tf-fade-bottom fade-item-5"
            >
                <span className="text-style cl-primary">View Activities</span>
                <div className="icon">
                    <i className="icon-arrow_right"></i>
                </div>
            </Link>
        </>
    );
}

export function Hero() {
    return (
        <div className="page-title-home-2">
            <div className="swiper-container slider-home-2">
                <div className="slide-home-2">
                    <div className="image overflow-hidden video-bg">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster={HERO_VIDEO_POSTER}
                        >
                            <source src={HERO_VIDEO_BG} type="video/mp4" />
                        </video>
                        <img
                            src={HERO_VIDEO_POSTER}
                            data-src={HERO_VIDEO_POSTER}
                            alt=""
                            className="lazyload video-fallback"
                        />
                    </div>
                    <div className="content">
                        <HeroContent />
                    </div>
                </div>
            </div>
        </div>
    );
}

const BENEFITS = [
    {
        icon: <img src="/icons/tomato.png" alt="" />,
        title: '100% Organic Products',
        text: 'Grown with care using sustainable, chemical-free methods for the freshest harvest.',
    },
    {
        icon: <i className="icon-tractor22"></i>,
        title: 'Absolute Quality',
        text: 'Every product is handpicked and quality-checked straight from our fields.',
    },
    {
        icon: <i className="fa-solid fa-leaf"></i>,
        title: 'Environmentally Friendly',
        text: 'We protect the land with borehole water and recycled organic waste.',
    },
    {
        icon: <img src="/icons/dollar-circle.png" alt="" />,
        title: 'Reasonable Price',
        text: 'Fresh, honest produce at fair prices for everyone in our community.',
    },
];

export function Benefits() {
    return (
        <section className="s-benefit">
            <div className="benefit-list">
                {BENEFITS.map((b, i) => (
                    <div className="box-icon ic-hover" key={i}>
                        <div className="icon mb-30 hover-icon style-circle">
                            {b.icon}
                        </div>
                        <a
                            href="/references"
                            className="caption mb-17 fw-6 font-worksans hover-text-secondary"
                        >
                            {b.title}
                        </a>
                        <p className="text font-nunito">{b.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export function AboutUs() {
    return (
        <section className="s-about-us-2">
            <div className="tf-container w-1620">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="content-section">
                            <div className="tf-animate__rotate-right">
                                <div className="image image-left">
                                    <img
                                        src="/images/section/s-about-2.jpg"
                                        className="lazyload"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="content-wrap">
                                <div className="content text-center">
                                    <div className="heading-section text-center style-4 mb-26">
                                        <div className="img-item justify-center mb-25">
                                            <img
                                                src="/images/item/rice-plant-2.png"
                                                className="tf-animate-1"
                                                alt=""
                                            />
                                        </div>
                                        <p className="sub-title">
                                            About the Farm
                                        </p>
                                        <p className="title text-anime-style-2">
                                            Welcome to Fun Farming Uganda
                                        </p>
                                    </div>
                                    <p className="text-1 font-snowfall mb-20">
                                        Fun Farming Uganda is rooted in the
                                        Butalangu province, Nakaseke District,
                                        where our dairy cows rule the roost.
                                    </p>
                                    <p className="text-2 mb-42">
                                        While our cows watch the hilarious
                                        antics of you and your cow-leagues, our
                                        Chief Executive Farmers and game leaders
                                        provide you with a farmtastic day of
                                        laughter, fun and connection for
                                        everyone.
                                    </p>
                                </div>
                                <div className="bot flex justify-center">
                                    <Link href="/about-us" className="tf-btn">
                                        <span className="text-style">
                                            More About Us
                                        </span>
                                        <div className="icon">
                                            <i className="icon-arrow_right"></i>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="tf-animate__rotate-left">
                                <div className="image image-right">
                                    <img
                                        src="/images/section/s-about-3.jpg"
                                        data-src="/images/section/s-about-3.jpg"
                                        alt=""
                                        className="lazyload"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="wg-counter style-4">
                            <div className="counter-item">
                                <div className="counter">
                                    <div className="odometer fs-65 style-4">
                                        1360
                                    </div>
                                </div>
                                <p className="title font-worksans fw-5">
                                    Happy Visitors
                                </p>
                                <div className="icon-img">
                                    <img
                                        src="/images/item/line-throw-title.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="counter-item">
                                <div className="counter">
                                    <div className="odometer fs-65 style-4-2">
                                        1036
                                    </div>
                                </div>
                                <p className="title font-worksans fw-5">
                                    Farm Activities
                                </p>
                                <div className="icon-img">
                                    <img
                                        src="/images/item/line-throw-title.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="counter-item">
                                <div className="counter">
                                    <div className="odometer fs-65 style-4-3">
                                        4657
                                    </div>
                                </div>
                                <p className="title font-worksans fw-5">
                                    Tons of Harvest
                                </p>
                                <div className="icon-img">
                                    <img
                                        src="/images/item/line-throw-title.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="s-img-item item-1 scroll-element-3">
                <img
                    className="scale-1-1"
                    src="/images/section/yellow-f.png"
                    alt=""
                />
            </div>
        </section>
    );
}

const SERVICES = [
    {
        img: '/images/widget/provide-item-1-1.jpg',
        icon: 'icon-salad',
        title: 'Clean Vegetables',
        text: 'Fresh, organically grown vegetables straight from our rich Ugandan soils.',
    },
    {
        img: '/images/widget/provide-item-2-2.jpg',
        icon: 'icon-cow',
        title: "Pure Cow's Milk",
        text: 'Creamy milk from happy cows who enjoy the best grass on the farm.',
    },
    {
        img: '/images/widget/provide-item-3-3.jpg',
        icon: 'icon-chicken-2',
        title: 'Clean Chicken & Eggs',
        text: 'Free-range chicken and eggs produced kindly and naturally.',
    },
];

export function Services() {
    return (
        <section className="s-service-2 relative overflow-hidden">
            <div className="content-section">
                <div className="heading-section style-2">
                    <div className="img-item">
                        <div className="item">
                            <img
                                src="/images/item/rice-plant-2.png"
                                className="tf-animate-1"
                                alt=""
                            />
                        </div>
                        <p className="sub-title">Farm Activities & Services</p>
                    </div>
                    <p className="title tf-animate-1">
                        Thrilling Activities Await You At The Farm.
                    </p>
                </div>
                <p className="text">
                    Whether it is picking fresh produce, joining workshops, or
                    participating in seasonal events, there is always something
                    for everyone at Fun Farming Uganda.
                </p>
                <Link href="/activities" className="tf-btn">
                    <span className="text-style">See Our Activities</span>
                    <div className="icon">
                        <i className="icon-arrow_right"></i>
                    </div>
                </Link>
                <div className="button-slide-wrap">
                    <div className="btn-s-service-2 btn-prev">
                        <svg
                            version="1.0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="58px"
                            height="15px"
                            viewBox="0 0 80 20"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <g fill="#0d401c">
                                <path d="M7 15.4 c-3.6 -2.4 -6.6 -5 -6.8 -5.7 -0.2 -1.2 13.8 -9.7 16 -9.7 2.4 0 0.2 2.4 -4.9 5.2 l-5.8 3.3 19.5 0.8 c11 0.5 27.1 0.5 37 -0.1 9.6 -0.5 17.7 -0.7 17.9 -0.5 2.4 1.9 -22 3.5 -48.6 3.1 l-25.2 -0.3 4.7 4.2 c6.1 5.5 4.4 5.3 -3.8 -0.3z" />
                            </g>
                        </svg>
                    </div>
                    <div className="btn-s-service-2 btn-next">
                        <svg
                            version="1.0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="58px"
                            height="15px"
                            viewBox="0 0 80 20"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <g fill="#0d401c">
                                <path d="M63 19 c0 -0.5 2.6 -2.4 5.8 -4.2 l5.7 -3.3 -19.5 -0.8 c-11 -0.5 -27.1 -0.5 -37 0.1 -9.6 0.5 -17.7 0.7 -17.9 0.5 -2.4 -1.9 22 -3.5 48.7 -3.1 l25.2 0.3 -4.6 -3.9 c-2.5 -2.1 -4.3 -4 -4 -4.3 0.7 -0.7 14.6 8.9 14.6 10.2 0 1.1 -14.3 9.5 -16.2 9.5 -0.4 0 -0.8 -0.4 -0.8 -1z" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="slider-wrap">
                <div className="swiper-container slider-s-service-2">
                    <div className="swiper-wrapper">
                        {SERVICES.map((s, i) => (
                            <div className="swiper-slide" key={i}>
                                <div className="box-infor style-2 ic-hover img-hover">
                                    <div className="image hover-icon hover-item">
                                        <img
                                            src={s.img}
                                            alt=""
                                            className="lazyload"
                                        />
                                        <div className="icon style-circle">
                                            <i className={s.icon}></i>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <a
                                            href="/farmfood"
                                            className="title fs-23 fw-6 font-worksans hover-text-secondary"
                                        >
                                            {s.title}
                                        </a>
                                        <p className="text font-nunito">
                                            {s.text}
                                        </p>
                                        <a
                                            href="/farmfood"
                                            className="tf-btn-read text-white hover-text-secondary"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const QUALITY = [
    { icon: 'icon-chemical', title: 'Minimal Chemicals Used', delay: '0s' },
    { icon: 'icon-worm', title: 'Nurtured By Nature', delay: '0.1s' },
    { icon: 'icon-disposal', title: 'All Organic Waste Reused', delay: '0.2s' },
    {
        icon: 'icon-light-bulb',
        title: 'No Artificial Fertilizers',
        delay: '0.3s',
    },
    { icon: 'icon-water-drops', title: 'Clean Sourced Water', delay: '0.4s' },
];

export function QualityOfLife() {
    return (
        <section className="s-quality-of-life">
            <div className="tf-container w-1290">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="content-section text-center">
                            <div className="img-item item-3 tf-animate__box">
                                <img
                                    className="lazyload up-down-move"
                                    src="/images/item/notice-2.png"
                                    alt=""
                                />
                            </div>
                            <div className="clip-color-text font-snowfall text-center">
                                <p className="clip-text-bg-vertical">
                                    Healthy Life With
                                    <br />
                                    Fresh Products!
                                </p>
                            </div>
                            <p className="sub font-snowfall fs-30 text-anime-style-1">
                                We believe that to have good health, clean and
                                healthy food sources are the key
                            </p>
                            <div className="swiper-container slider-box-icon">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <ul className="box-icon-list style-2">
                                            {QUALITY.map((q, i) => (
                                                <li key={i}>
                                                    <div
                                                        className="box-icon style-3 ic-hover wow fadeInUp"
                                                        data-wow-delay={q.delay}
                                                    >
                                                        <div className="icon style-circle hover-icon">
                                                            <i
                                                                className={
                                                                    q.icon
                                                                }
                                                            ></i>
                                                        </div>
                                                        <a
                                                            href="/about-us"
                                                            className="caption fw-5 font-worksans hover-text-4"
                                                        >
                                                            {q.title}
                                                        </a>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="bot flex justify-center">
                                <Link
                                    href="/about-us"
                                    className="tf-btn scale-50 gap-37"
                                >
                                    <span className="text-style">
                                        See Our Commitment
                                    </span>
                                    <div className="icon">
                                        <i className="icon-arrow_right"></i>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="img-item item-1 wow fadeInRight"
                data-wow-delay="0.1s"
            >
                <img src="/images/item/rice-plant-color.png" alt="" />
            </div>
            <div
                className="img-item item-2 wow fadeInLeft"
                data-wow-delay="0.1s"
            >
                <img src="/images/item/corn-color.png" alt="" />
            </div>
        </section>
    );
}

export function WhatWeDo() {
    return (
        <section className="s-what-we-do">
            <div className="content-wrap">
                <div className="content-section">
                    <div className="heading-section style-3 has-text">
                        <p className="sub-title">What We Do</p>
                        <p className="title text-anime-style-1">
                            At Fun Farm,
                            <br />
                            We Aim To Unite People And Nature!
                        </p>
                        <p className="text">
                            Everyone is invited to a day of laughter and
                            connection. Our exciting activities are led by
                            passionate staff, making every moment a memorable
                            experience.
                        </p>
                    </div>
                    <Link href="/about-us" className="tf-btn bg-white">
                        <span className="text-style cl-primary">Read More</span>
                        <div className="icon">
                            <i className="icon-arrow_right"></i>
                        </div>
                    </Link>
                    <div className="img-item item-1">
                        <img src="/images/item/barn-2.png" alt="" />
                    </div>
                    <div className="video-wrap style-3 tf-animate__box-2 animate__slow">
                        <a
                            href="https://www.youtube.com/watch?v=MLpWrANjFbI"
                            className="style-icon-play popup-youtube"
                        >
                            <i className="icon-play3"></i>
                            <div className="wave"></div>
                            <div className="wave-1"></div>
                        </a>
                    </div>
                </div>
                <div className="we-do-list">
                    <ul>
                        <li className="wow fadeInUp" data-wow-delay="0s">
                            <p className="title">
                                <i className="fa-solid fa-circle-check"></i> We
                                Use New Technology
                            </p>
                            <p className="text">
                                Modern farming methods bring you the cleanest,
                                healthiest produce from field to table.
                            </p>
                        </li>
                        <li className="wow fadeInUp" data-wow-delay="0.1s">
                            <p className="title">
                                <i className="fa-solid fa-circle-check"></i>{' '}
                                Making Healthy Foods
                            </p>
                            <p className="text">
                                Delight in the flavors of local Ugandan farm
                                cuisine, a culinary adventure for your taste
                                buds.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export function OurAgriculture() {
    return (
        <section className="s-our-agriculture">
            <div className="content-section">
                <div className="tf-container w-1290">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="image-wrap img-hover">
                                <div className="image hover-item">
                                    <img
                                        src="/images/section/s-farm.jpg"
                                        alt=""
                                        className="lazyload"
                                    />
                                </div>
                                <div className="wg-exprerience text-center tf-rotate-back-and-forth">
                                    <p className="year">5</p>
                                    <p className="text">
                                        Years of
                                        <br />
                                        Farming Fun
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="content">
                                <div className="heading-section style-2">
                                    <div className="img-item">
                                        <div className="item mr-25">
                                            <img
                                                src="/images/item/rice-plant-2.png"
                                                className="tf-animate-1"
                                                alt=""
                                            />
                                        </div>
                                        <p className="sub-title">
                                            Our Agriculture Skills
                                        </p>
                                    </div>
                                    <p className="title tf-animate-2">
                                        We Believe In Bringing Visitors The Best
                                        Experience
                                    </p>
                                </div>
                                <p className="text">
                                    Deeply rooted in the Butalangu province by
                                    our dairy cows, we provide a farmtastic day
                                    of laughing, connecting and learning for
                                    thinkers and doers, young and less young.
                                </p>
                                <div className="wg-progress mb-29">
                                    <div className="top">
                                        <span>Organic Solutions</span>
                                        <span>95%</span>
                                    </div>
                                    <div
                                        className="progress tf-animate-1"
                                        role="progressbar"
                                        aria-label="Basic example"
                                        aria-valuenow={95}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div
                                            className="progress-bar"
                                            style={{ width: '95%' }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="wg-progress">
                                    <div className="top">
                                        <span>Quality Agriculture</span>
                                        <span>98%</span>
                                    </div>
                                    <div
                                        className="progress tf-animate-1"
                                        role="progressbar"
                                        aria-label="Basic example"
                                        aria-valuenow={98}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div
                                            className="progress-bar"
                                            style={{ width: '98%' }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tf-container w-1290">
                <div className="row">
                    <div className="col-md-4">
                        <div className="wrap">
                            <div
                                className="box-event style-2 ic-hover wow fadeInUp"
                                data-wow-delay="0s"
                            >
                                <div className="content hover-icon-2">
                                    <div className="icon">
                                        <i className="icon-farmer-2"></i>
                                    </div>
                                    <a
                                        href="/farmfood"
                                        className="title fw-6 font-worksans hover-text-4"
                                    >
                                        Farmers
                                    </a>
                                    <p className="sub font-snowfall">
                                        The heart of everything we do
                                    </p>
                                    <p className="text">
                                        Gathering the horns? Our cow-league is
                                        ready to advise you so you reap applause
                                        for your team-building.
                                    </p>
                                    <a
                                        href="/farmfood"
                                        className="tf-btn-read hover-text-4"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="wrap">
                            <div
                                className="box-event style-2 ic-hover wow fadeInUp"
                                data-wow-delay="0.1s"
                            >
                                <div className="content hover-icon-2">
                                    <div className="icon">
                                        <i className="icon-customer"></i>
                                    </div>
                                    <a
                                        href="/farmfood"
                                        className="title fw-6 font-worksans hover-text-4"
                                    >
                                        Consumers
                                    </a>
                                    <p className="sub font-snowfall">
                                        Everyone deserves chemical-free food
                                    </p>
                                    <p className="text">
                                        Fresh, organic farm produce that is
                                        clean and healthy for you and your
                                        family.
                                    </p>
                                    <a
                                        href="/farmfood"
                                        className="tf-btn-read hover-text-4"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="wrap">
                            <div
                                className="box-event style-2 ic-hover wow fadeInUp"
                                data-wow-delay="0.2s"
                            >
                                <div className="content hover-icon-2">
                                    <div className="icon">
                                        <i className="icon-farm"></i>
                                    </div>
                                    <a
                                        href="/farmfood"
                                        className="title fw-6 font-worksans hover-text-4"
                                    >
                                        Environment
                                    </a>
                                    <p className="sub font-snowfall">
                                        Protecting the planet is a top priority
                                    </p>
                                    <p className="text">
                                        Minimum mid impact on the land, with
                                        sustainable practices at every step.
                                    </p>
                                    <a
                                        href="/farmfood"
                                        className="tf-btn-read hover-text-4"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const PROJECTS = [
    {
        img: '/images/section/s-project-1.jpg',
        sub: 'Team Building',
        title: 'The Joy of Cow League Games',
    },
    {
        img: '/images/section/s-project-2.jpg',
        sub: 'Farm Activities',
        title: 'Farm Visits For Everyone',
    },
    {
        img: '/images/section/s-project-3.jpg',
        sub: 'Farm Kitchen',
        title: 'Discover The Farm Kitchen',
    },
];

export function Projects() {
    return (
        <section className="s-project">
            <div className="heading-side has-s-img">
                <div className="tf-container w-1290">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section style-3 has-text text-center">
                                <p className="sub-title">Our Activities</p>
                                <p className="title tf-animate-3">
                                    Latest Fun List
                                </p>
                                <p className="text">
                                    Choose your ideal activity, add catering,
                                    check availability and book online. We can
                                    figure out the exact number of participants
                                    later.
                                </p>
                                <div className="img-item">
                                    <img
                                        src="/images/item/rice-plant-2.png"
                                        className="tf-animate-1"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="s-img-item item-1">
                    <img src="/images/item/page-title-top.png" alt="" />
                </div>
            </div>
            <div className="slider-side">
                <div className="tf-container w-1290">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="swiper-container slider-s-project">
                                <div className="swiper-wrapper">
                                    {PROJECTS.map((p, i) => (
                                        <div className="swiper-slide" key={i}>
                                            <div className="box-portfolio style-5">
                                                <div className="image">
                                                    <img
                                                        src={p.img}
                                                        alt=""
                                                        className="lazyload"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <p className="sub font-farmhouse text-upper">
                                                        {p.sub}
                                                    </p>
                                                    <a
                                                        href="/activities"
                                                        className="title fs-23 font-worksans fw-6 hover-text-secondary"
                                                    >
                                                        {p.title}
                                                    </a>
                                                    <div className="bot">
                                                        <a
                                                            href="/activities"
                                                            className="btn-read icon style-circle"
                                                        >
                                                            <i className="icon-arrow_right"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="bot">
                                <div className="swiper-pagination style-1 pagination-s-project"></div>
                                <Link
                                    href="/activities"
                                    className="tf-btn-read hover-text-4"
                                >
                                    View All Activities
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="s-img-item item-4">
                <img src="/images/item/page-title-top.png" alt="" />
            </div>
        </section>
    );
}

const TESTIMONIALS = [
    {
        caption: 'The Best Farm I Trust',
        text: 'Having been a visitor several times, we have seen firsthand the joy of team events at this farm oasis. Fresh energy, laughter and unforgettable moments for everyone.',
        name: 'CHRISTINE ROSE',
        duty: 'Corporate Events Director',
        avatar: '/images/widget/author-comment.jpg',
    },
    {
        caption: 'A Farmtastic Day For All',
        text: 'Well organized activities that guarantee maximum enjoyment. You can expect the unexpected here — they always go the extra important to make your day extraordinary.',
        name: 'DAVID OKELLO',
        duty: 'Agricultural Consultant',
        avatar: '/images/section/customer-say-3.jpg',
    },
    {
        caption: 'Time Well Spent On The Farm',
        text: 'A wonderful escape from the city. The team made sure every moment was full of laughter, learning and connection. We cannot wait to come back with more friends.',
        name: 'ANNA TUMWESIGYE',
        duty: 'Organic Farm Visitor',
        avatar: '/images/section/customer-say-4.jpg',
    },
];

export function Testimonials() {
    return (
        <section className="s-testimonial-2">
            <div className="tf-container w-1290">
                <div className="row">
                    <div className="col-md-6">
                        <div className="heading-section">
                            <p className="sub-title">
                                Testimonials From People Who Have Experienced It
                            </p>
                            <p className="title text-anime-style-1">
                                What Our Guests Say?
                            </p>
                            <div className="img-item">
                                <img
                                    src="/images/item/rice-plant-2.png"
                                    className="tf-animate-1"
                                    alt=""
                                />
                            </div>
                            <div className="img-item item-2">
                                <i className="icon-quote"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="counter-wrap">
                            <div className="wg-counter style-5 style-6">
                                <div className="icon style-circle">
                                    <i className="icon-barley"></i>
                                </div>
                                <div className="counter-item">
                                    <p className="title font-worksans fw-5 fs-18">
                                        Trusted By Guests
                                    </p>
                                    <div className="counter">
                                        <div className="odometer style-6">
                                            12980
                                        </div>
                                        <span className="sub-odo color-secondary">
                                            +
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="img-item">
                                <img
                                    src="/images/item/line-throw-title.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="s-slider">
                <div className="tf-container w-1290">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="swiper-container slider-s-testimonial-2">
                                <div className="swiper-wrapper">
                                    {TESTIMONIALS.map((t, i) => (
                                        <div className="swiper-slide" key={i}>
                                            <div className="testimonial style-2">
                                                <div className="comment">
                                                    <p className="caption fs-23 font-snowfall">
                                                        {t.caption}
                                                    </p>
                                                    <p className="text font-worksans">
                                                        {t.text}
                                                    </p>
                                                </div>
                                                <div className="author-wrap">
                                                    <div className="left">
                                                        <div className="image-avt">
                                                            <img
                                                                src={t.avatar}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="infor">
                                                            <div className="name-wrap">
                                                                <a
                                                                    href="#"
                                                                    className="name text-upper hover-text-4"
                                                                >
                                                                    {t.name}
                                                                </a>
                                                                <div className="wg-rating">
                                                                    <i className="fa-solid fa-star"></i>
                                                                    <i className="fa-solid fa-star"></i>
                                                                    <i className="fa-solid fa-star"></i>
                                                                    <i className="fa-solid fa-star"></i>
                                                                    <i className="fa-solid fa-star"></i>
                                                                </div>
                                                            </div>
                                                            <p className="duty">
                                                                {t.duty}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-slide-testimonial-2 btn-next">
                    <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="58px"
                        height="15px"
                        viewBox="0 0 80 20"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <g fill="#0d401c">
                            <path d="M63 19 c0 -0.5 2.6 -2.4 5.8 -4.2 l5.7 -3.3 -19.5 -0.8 c-11 -0.5 -27.1 -0.5 -37 0.1 -9.6 0.5 -17.7 0.7 -17.9 0.5 -2.4 -1.9 22 -3.5 48.7 -3.1 l25.2 0.3 -4.6 -3.9 c-2.5 -2.1 -4.3 -4 -4 -4.3 0.7 -0.7 14.6 8.9 14.6 9.2 0 1.1 -14.3 9.5 -16.2 9.5 -0.4 0 -0.8 -0.4 -0.8 -1z" />
                        </g>
                    </svg>
                </div>
                <div className="btn-slide-testimonial-2 btn-prev">
                    <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="58px"
                        height="15px"
                        viewBox="0 0 80 20"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <g fill="#0d401c">
                            <path d="M7 15.4 c-3.6 -2.4 -6.6 -5 -6.8 -5.7 -0.2 -1.2 13.8 -9.7 16 -9.7 2.4 0 0.2 2.4 -4.9 5.2 l-5.8 3.3 19.5 0.8 c11 0.5 27.1 0.5 37 -0.1 9.6 -0.5 17.7 -0.7 17.9 -0.5 2.4 1.9 -22 3.5 -48.6 3.1 l-25.2 -0.3 4.7 4.2 c6.1 5.5 4.4 5.3 -3.8 -0.3z" />
                        </g>
                    </svg>
                </div>
            </div>
        </section>
    );
}

export function HappyFarm() {
    return (
        <section className="s-happy-farm">
            <div className="bg-section">
                <div className="scroll-element-3">
                    <img
                        className="lazyload scale-1-1"
                        src="/images/item/gree-field.jpg"
                        alt=""
                    />
                </div>
                <div className="s-img-item item-1">
                    <img src="/images/item/page-title-top.png" alt="" />
                </div>
            </div>
            <div className="content-section">
                <div className="tf-container w-1620">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content">
                                <div className="heading-section style-3 has-text">
                                    <div className="top">
                                        <p className="sub-title fs-35 tf-animate-1">
                                            Happy Farming!
                                        </p>
                                        <div className="img-item item-2 tf-heartBeat">
                                            <img
                                                className="wow zoomIn"
                                                src="/images/item/happy.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <p
                                        className="title wow fadeInUp"
                                        data-wow-delay="0s"
                                    >
                                        We Passionately Care About Farmers And
                                        Fun.
                                    </p>
                                    <p
                                        className="text wow fadeInUp"
                                        data-wow-delay="0s"
                                    >
                                        If you need to plan a team-building
                                        event or learn about us, contact us now!
                                    </p>
                                    <Link
                                        href="/contact-us"
                                        className="tf-btn bg-white scale-40 wow fadeInUp"
                                        data-wow-delay="0s"
                                    >
                                        <span className="text-style cl-primary">
                                            Contact Us Today
                                        </span>
                                        <div className="icon">
                                            <i className="icon-arrow_right"></i>
                                        </div>
                                    </Link>
                                </div>
                                <div className="image-wrap">
                                    <img
                                        src="/images/section/s-hp-farm.png"
                                        data-src="/images/section/s-hp-farm.png"
                                        alt=""
                                        className="lazyload"
                                    />
                                </div>
                                <div className="img-item item-1">
                                    <img
                                        src="/images/item/house-mountain-2.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const BLOG_POSTS = [
    {
        img: '/images/blog/blog-1.jpg',
        day: '08',
        month: 'Jun 24',
        title: 'How We Care For Our Dairy Cows',
        text: 'Learn about the care, love and daily routine that keeps our cows happy and healthy.',
    },
    {
        img: '/images/blog/blog-2.jpg',
        day: '08',
        month: 'Jun 24',
        title: 'Fun Activities At The Farm',
        text: 'The farm offers a delight of games and activities suitable for the whole family.',
    },
    {
        img: '/images/blog/blog-3.jpg',
        day: '08',
        month: 'Jun 24',
        title: 'Growing Clean Vegetables At Home',
        text: 'Our team share tips on growing the most delicious vegetables in your own garden.',
    },
    {
        img: '/images/blog/blog-4.jpg',
        day: '15',
        month: 'Jun 24',
        title: 'Meet The Friends Behind The Farm',
        text: 'Get to know the cattle chiefs and game leaders who make every visit a farmtastic adventure.',
    },
];

export function BlogPosts() {
    return (
        <section className="s-blog-post">
            <div className="tf-container w-1290">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading-section has-text text-center">
                            <p className="sub-title">From The Blog</p>
                            <p className="title text-anime-style-2">
                                Latest News & Articles
                            </p>
                            <div className="img-item">
                                <img
                                    src="/images/item/rice-plant-2.png"
                                    className="tf-animate-1"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="s-slide">
                <div className="tf-container w-1290">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="swiper-container slider-blog-post">
                                <div className="swiper-wrapper">
                                    {BLOG_POSTS.map((b, i) => (
                                        <div className="swiper-slide" key={i}>
                                            <article
                                                className="article-blog-item type-3 style-2 img-hover wow fadeInUp"
                                                data-wow-delay={`${i * 0.1}s`}
                                            >
                                                <div className="image">
                                                    <div className="video-wrap hover-item">
                                                        <img
                                                            className="lazyload"
                                                            src={b.img}
                                                            alt=""
                                                        />
                                                        <a
                                                            href="https://www.youtube.com/watch?v=MLpWrANjFbI"
                                                            className="style-icon-play popup-youtube"
                                                        >
                                                            <i className="fa-solid fa-play"></i>
                                                        </a>
                                                    </div>
                                                    <div className="entry-date">
                                                        <p className="day">
                                                            {b.day}
                                                        </p>
                                                        <p className="month-year">
                                                            {b.month}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <ul className="entry-meta">
                                                        <li className="entry author">
                                                            <i className="fa-solid fa-circle-user"></i>
                                                            <p>
                                                                <a href="#">
                                                                    Fun Farm
                                                                </a>
                                                            </p>
                                                        </li>
                                                        <li className="entry tags">
                                                            <i className="fa-solid fa-tag"></i>
                                                            <p>
                                                                <a href="#">
                                                                    Agriculture
                                                                </a>
                                                                ,{' '}
                                                                <a href="#">
                                                                    Farm
                                                                </a>
                                                            </p>
                                                        </li>
                                                    </ul>
                                                    <h3 className="title fw-6">
                                                        <a href="/blog">
                                                            {b.title}
                                                        </a>
                                                    </h3>
                                                    <p className="text">
                                                        {b.text}
                                                    </p>
                                                    <div className="bot">
                                                        <a
                                                            href="/blog"
                                                            className="tf-btn-read hover-text-4"
                                                        >
                                                            Continue Reading
                                                        </a>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-s-blog-post btn-next">
                    <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="58px"
                        height="15px"
                        viewBox="0 0 80 20"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <g fill="#0d401c">
                            <path d="M63 19 c0 -0.5 1.6 -4.2 5.8 -4.2 l5.7 -3.3 -19.5 -0.8 c-11 -0.5 -27.1 -0.5 -37 0.1 -9.6 0.5 -17.7 0.7 -17.9 0.5 -2.4 -1.9 22 -3.5 48.7 -3.1 l25.2 0.3 -4.6 -3.9 c-2.5 -2.1 -4.3 -4 -4 -4.3 0.7 -0.7 14.6 8.9 14.6 9.2 0 1.1 -14.3 9.5 -16.2 9.5 -0.4 0 -0.8 -0.4 -0.8 -1z" />
                        </g>
                    </svg>
                </div>
                <div className="btn-s-blog-post btn-prev">
                    <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="58px"
                        height="15px"
                        viewBox="0 0 80 20"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <g fill="#0d401c">
                            <path d="M7 15.4 c-3.6 -2.4 -6.6 -5 -6.8 -5.7 -0.2 -1.2 13.8 -9.7 16 -9.7 2.4 0 0.2 2.4 -4.9 5.2 l-5.8 3.3 19.5 0.8 c11 0.5 27.1 0.5 37 -0.1 9.6 -0.5 17.7 -0.7 17.9 -0.5 2.4 1.9 -22 3.5 -48.6 3.1 l-25.2 -0.3 4.7 4.2 c6.1 5.5 4.4 5.3 -3.8 -0.3z" />
                        </g>
                    </svg>
                </div>
            </div>
        </section>
    );
}

export function MeetFarmer() {
    return (
        <section className="s-meet-farmer has-img-item tf-pt-0">
            <div className="content-section">
                <div className="tf-container w-1290">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="heading-section style-4 has-text style-3">
                                <div className="img-item">
                                    <div className="item mr-23">
                                        <img
                                            src="/images/item/rice-plant-2.png"
                                            className="tf-animate-1"
                                            alt=""
                                        />
                                    </div>
                                    <p className="sub-title">
                                        Meet The Farmers
                                    </p>
                                </div>
                                <h2 className="title text-anime-style-2">
                                    We Are Dedicated Farmers!
                                </h2>
                                <p className="text">
                                    Our team of Cattle Chiefs and game leaders
                                    run the farm, making every visit a unique,
                                    once-in-a-lifetime experience.
                                </p>
                                <Link
                                    href="/about-us"
                                    className="tf-btn-read text-white hover-text-secondary"
                                >
                                    View Our Team
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="s-img-item item-1">
                <img src="/images/item/page-title-top.png" alt="" />
            </div>
            <div className="s-img-item item-2">
                <img src="/images/item/item-bottom.png" alt="" />
            </div>
        </section>
    );
}

export function ContactUs() {
    return (
        <section className="s-contact-us style-2 pt-147 pb-80">
            <div className="section-wrap">
                <div className="tf-container w-1290">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="content-left">
                                <div className="box-map style-2">
                                    <div id="map" className="map"></div>
                                </div>
                                <ul className="contact-list overflow-hidden">
                                    <li
                                        className="wow fadeInUp"
                                        data-wow-duration="1.4s"
                                    >
                                        <div className="icon style-circle">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div className="infor">
                                            <p className="title">
                                                Farm Address
                                            </p>
                                            <p className="text">
                                                Butalangu, Nakaseke District,
                                                Uganda
                                            </p>
                                        </div>
                                    </li>
                                    <li
                                        className="wow fadeInUp"
                                        data-wow-duration="1.4s"
                                    >
                                        <div className="icon style-circle">
                                            <i className="fa-solid fa-address-book"></i>
                                        </div>
                                        <div className="infor">
                                            <p className="title">Contact Us</p>
                                            <p className="text">
                                                hello@funfarminguganda.com
                                                <br />
                                                Call us 24/7: +1 987 654 3210
                                            </p>
                                        </div>
                                    </li>
                                    <li
                                        className="wow fadeInUp"
                                        data-wow-duration="1.4s"
                                    >
                                        <div className="icon style-circle">
                                            <i className="fa-solid fa-clock"></i>
                                        </div>
                                        <div className="infor">
                                            <p className="title">
                                                Working Hours
                                            </p>
                                            <p className="text">
                                                Mon - Fri: 8.00am - 18.00pm
                                                <br />
                                                Sat: 9.00am - 17.00pm
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="content-section">
                                <div className="heading-section has-text mb-50">
                                    <p className="sub-title">
                                        Let's Cooperate Together
                                    </p>
                                    <p className="title tf-animate-1">
                                        Contact Us Today!
                                    </p>
                                    <p className="text">
                                        We reply within 24 hours via email.
                                        Thank you for getting in touch.
                                    </p>
                                    <div className="img-item">
                                        <img
                                            src="/images/item/rice-plant-2.png"
                                            className="tf-animate-1"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <form
                                    id="contactform"
                                    method="post"
                                    action="#"
                                    className="form-send-message style-2"
                                >
                                    <div className="cols style-2 mb-15">
                                        <fieldset>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                placeholder="Name*"
                                                required
                                            />
                                        </fieldset>
                                        <fieldset>
                                            <input
                                                type="email"
                                                className="form-control email"
                                                id="mail"
                                                name="mail"
                                                placeholder="Email*"
                                                required
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="cols style-2 mb-15">
                                        <fieldset>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="phone"
                                                name="phone"
                                                placeholder="Phone*"
                                                required
                                            />
                                        </fieldset>
                                        <fieldset className="dropdown">
                                            <select
                                                name="text"
                                                className="lt-sp-07"
                                                id="Support"
                                            >
                                                <option value="" disabled>
                                                    What can we help with?
                                                </option>
                                                <option value="Team Building">
                                                    Team Building
                                                </option>
                                                <option value="Farm Activities">
                                                    Farm Activities
                                                </option>
                                                <option value="Booking">
                                                    Booking
                                                </option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    <div className="cols mb-30">
                                        <fieldset>
                                            <textarea
                                                name="message"
                                                id="message"
                                                placeholder="Message..."
                                            ></textarea>
                                        </fieldset>
                                    </div>
                                    <div className="checkbox-item send-wrap">
                                        <label className="mb-0">
                                            <span className="text font-nunito">
                                                Agree to our terms and
                                                conditions
                                            </span>
                                            <input
                                                type="checkbox"
                                                className="checkbox-item"
                                                defaultChecked
                                            />
                                            <span className="btn-checkbox"></span>
                                        </label>
                                        <button
                                            type="submit"
                                            className="tf-btn"
                                        >
                                            <span className="text-style">
                                                Send Message
                                            </span>
                                            <span className="icon">
                                                <i className="icon-arrow_right"></i>
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const PARTNERS = [
    'wide-open.png',
    'sollio.png',
    'syngenta.png',
    'strachan-valley.png',
    'new-holland.png',
    'stony-field.png',
];

const PARTNER_SLIDES = [...PARTNERS, ...PARTNERS];

export function Partners() {
    return (
        <section className="s-partner style-2 has-img-item">
            <div className="tf-container w-1780">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="slider-wrap">
                            <div className="swiper-container slider-partner">
                                <div className="swiper-wrapper">
                                    {PARTNER_SLIDES.map((p, i) => (
                                        <div className="swiper-slide" key={i}>
                                            <div className="slide-partner">
                                                <div className="image">
                                                    <a href="#">
                                                        <img
                                                            src={`/images/partner/${p}`}
                                                            alt=""
                                                            className="lazyload"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
