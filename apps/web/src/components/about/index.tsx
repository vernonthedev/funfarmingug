import Link from 'next/link';
import { SITE } from '@/lib/site';

const VALUES = [
    {
        icon: <i className="icon-chemical" />,
        title: 'Minimal Chemicals Used',
    },
    {
        icon: <i className="icon-worm" />,
        title: 'Natural Soil Care',
    },
    {
        icon: <i className="icon-disposal" />,
        title: 'All Organic Waste Reused',
    },
    {
        icon: <i className="icon-light-bulb" />,
        title: 'No Artificial Light',
    },
    {
        icon: <i className="icon-water-drops" />,
        title: 'Borehole Sourced Water',
    },
];

const BENEFITS = [
    {
        icon: <img src="/icons/tomato.png" alt="" />,
        title: '100% Organic Products',
        text: 'Sustainable, chemical-free crops grown with care for the freshest harvest.',
        href: '/farmfood',
    },
    {
        icon: <i className="fa-solid fa-tractor"></i>,
        title: 'Absolute Quality',
        text: 'From goat breeding to banana plantations, quality is at the heart of everything we do.',
        href: '/farmfood',
    },
    {
        icon: <i className="fa-solid fa-leaf"></i>,
        title: 'Environmentally Friendly',
        text: 'Natural soil care and reusable organic waste support a healthy, green ecosystem.',
        href: '/references',
    },
    {
        icon: <img src="/icons/dollar-circle.png" alt="" />,
        title: 'Reasonable Price',
        text: 'Fresh, organic produce and farm experiences at fair, transparent prices.',
        href: '/farmfood',
    },
];

const GALLERY_SLIDES = [
    'funfarm_n4.png',
    'funfarm_n7.png',
    'funfarm_n10.png',
    'funfarm_n12.png',
];

export function AboutUsPage() {
    return (
        <div className="main-content pb-0 pt-93">
            <section className="s-our-agriculture style-2 type-2">
                <div className="counter-wrap">
                    <div className="tf-container w-1290">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="wrap">
                                    <p className="text font-snowfall fs-30">
                                        We are confident that we are a leading
                                        farm in providing agricultural products
                                        that ensure{' '}
                                        <span>
                                            <Link
                                                href="/references"
                                                className="hover-text-4"
                                            >
                                                food hygiene and safety
                                            </Link>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="wg-counter style-5">
                                    <div className="icon style-circle">
                                        <i className="fa-solid fa-cow"></i>
                                    </div>
                                    <div className="counter-item">
                                        <p className="title font-worksans fw-5 fs-18">
                                            Happy Volunteers
                                        </p>
                                        <div className="counter">
                                            <div className="odometer style-5">
                                                1000
                                            </div>
                                            <span className="sub-odo color-secondary">
                                                +
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="wg-counter style-5">
                                    <div className="icon style-circle">
                                        <i className="fa-solid fa-face-smile"></i>
                                    </div>
                                    <div className="counter-item">
                                        <p className="title font-worksans fw-5 fs-18">
                                            Trust By Clients
                                        </p>
                                        <div className="counter">
                                            <div className="odometer style-5-2">
                                                10000
                                            </div>
                                            <span className="sub-odo color-secondary">
                                                +
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="s-welcome-to">
                <div className="s-content-wrap">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="content-section">
                                    <div className="heading-section style-4">
                                        <div className="img-item">
                                            <img
                                                className="tf-animate-1"
                                                src="/images/item/rice-plant-2.png"
                                                alt=""
                                            />
                                        </div>
                                        <p className="sub-title">
                                            Welcome to Fun Farming Uganda
                                        </p>
                                        <p
                                            className="title wow fadeInUp"
                                            data-wow-delay="0s"
                                        >
                                            What Is Fun
                                            <br />
                                            Farming Uganda?
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="text-wrap">
                                    <p
                                        className="text-1 wow fadeInUp"
                                        data-wow-delay="0s"
                                    >
                                        Fun Farming Uganda is an organic farm
                                        engaging in diverse agricultural
                                        activities like goat breeding, poultry
                                        farming and banana plantation. It also
                                        serves as a youth agro project, educating
                                        and involving young individuals in
                                        sustainable farming practices.
                                    </p>
                                    <p
                                        className="text-2 wow fadeInUp"
                                        data-wow-delay="0s"
                                    >
                                        Through these efforts we contribute
                                        directly to Uganda's agricultural sector,
                                        strengthening the herd and the organic
                                        spirit while embracing the agro-tourism
                                        concept in the country.
                                    </p>
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
                </div>
                <div className="s-content-wrap-2">
                    <div className="tf-container w-1620">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="swiper-container slider-gallery">
                                    <div className="swiper-wrapper">
                                        {GALLERY_SLIDES.map((s, i) => (
                                            <div className="swiper-slide" key={i}>
                                                <div
                                                    className="gallery-item img-hover wow fadeInUp"
                                                    data-wow-delay={`${i * 0.1}s`}
                                                >
                                                    <div className="image hover-item">
                                                        <img
                                                            className="lazyload"
                                                            src={`/images/funfarm/${s}`}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <Link
                                                        href="/gallery"
                                                        className="add-gallery"
                                                    >
                                                        +
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-md-6">
                                <div
                                    className="box-text wow fadeInUp"
                                    data-wow-delay="0s"
                                >
                                    <p className="title font-worksans fw-7">
                                        Our Mission
                                    </p>
                                    <p className="text font-snowfall">
                                        Our mission is to contribute to the
                                        promotion of agricultural products in
                                        Uganda, with a commitment to produce
                                        sustainable value that meets
                                        international standards and creates a
                                        fair, competitive market.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div
                                    className="box-text wow fadeInUp"
                                    data-wow-delay="0.1s"
                                >
                                    <p className="title font-worksans fw-7">
                                        Our Vision
                                    </p>
                                    <p className="text font-light">
                                        To see agriculture celebrated as a
                                        joyful, shared way of life, where youth
                                        are empowered, communities are nurtured
                                        and the organic spirit of Uganda thrives
                                        for generations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="s-img-item item-1">
                        <img src="/images/item/wave-yellow-has-item.png" alt="" />
                    </div>
                </div>
            </section>

            <section className="s-our-agriculture style-3">
                <div className="s-content-wrap content-section">
                    <div className="tf-container w-1290">
                        <div className="row">
                            <div className="col-lg-5 col-md-6">
                                <div className="image-wrap">
                                    <div className="image video-wrap style-2">
                                        <img
                                            src="/images/funfarm/fun-farm-image.jpg"
                                            alt=""
                                            className="lazyload"
                                        />
                                        <a
                                            href="https://www.youtube.com/watch?v=MLpWrANjFbI"
                                            className="style-icon-play popup-youtube"
                                        >
                                            <i className="fa-solid fa-play"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6">
                                <div className="content">
                                    <div className="heading-section style-2">
                                        <div className="img-item">
                                            <div className="item">
                                                <img
                                                    className="tf-animate-1"
                                                    src="/images/item/rice-plant-2.png"
                                                    alt=""
                                                />
                                            </div>
                                            <p className="sub-title">
                                                Our Agriculture Skill
                                            </p>
                                        </div>
                                        <p className="title text-anime-style-1">
                                            Providing Organic Products With Care
                                        </p>
                                    </div>
                                    <p className="text mb-20">
                                        Every activity on our farm is designed
                                        around sustainable, organic practices.
                                        From goat breeding to banana plantations,
                                        we nurture the land and the community
                                        together, strengthening the herd and the
                                        organic spirit.
                                    </p>
                                    <div className="wg-progress mb-29">
                                        <div className="top">
                                            <span>Organic Solutions</span>
                                            <span>95%</span>
                                        </div>
                                        <div
                                            className="progress tf-animate-1"
                                            role="progressbar"
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
                                            <span>Youth Involvement</span>
                                            <span>80%</span>
                                        </div>
                                        <div
                                            className="progress tf-animate-1"
                                            role="progressbar"
                                            aria-valuenow={80}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar"
                                                style={{ width: '80%' }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="s-img-item item-1">
                    <img
                        className="wow fadeInRight"
                        data-wow-delay="0s"
                        src="/images/item/rice-plant-color.png"
                        alt=""
                    />
                </div>
                <div className="s-img-item item-2">
                    <img src="/images/item/page-title-top.png" alt="" />
                </div>
            </section>

            <section className="s-benefit mt--217">
                <div className="benefit-list">
                    {BENEFITS.map((b, i) => (
                        <div
                            className="box-icon ic-hover wow fadeInUp"
                            data-wow-delay={`${i * 0.1}s`}
                            key={i}
                        >
                            <div className="icon mb-29 hover-icon style-circle">
                                {b.icon}
                            </div>
                            <Link
                                href={b.href}
                                className="caption fw-6 mb-17 font-worksans hover-text-secondary"
                            >
                                {b.title}
                            </Link>
                            <p className="text font-nunito">{b.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="s-quality-of-life style-2">
                <div className="tf-container w-1290">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content-section text-center">
                                <div className="img-item item-3 tf-animate__box">
                                    <img
                                        className="up-down-move"
                                        src="/images/item/notice-2.png"
                                        alt=""
                                    />
                                </div>
                                <div className="clip-color-text font-snowfall text-center">
                                    <p className="clip-text-bg-vertical">
                                        Committed to Freshness!
                                    </p>
                                </div>
                                <p className="sub font-snowfall fs-30 text-anime-style-1">
                                    We believe that to have good health, clean
                                    and healthy food sources are the key
                                </p>
                                <div className="swiper-container slider-box-icon">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <ul className="box-icon-list style-2">
                                                {VALUES.map((v, i) => (
                                                    <li key={i}>
                                                        <div
                                                            className="box-icon style-3 ic-hover wow fadeInUp"
                                                            data-wow-delay={`${i * 0.1}s`}
                                                        >
                                                            <div className="icon style-circle hover-icon">
                                                                {v.icon}
                                                            </div>
                                                            <a
                                                                href="/farmfood"
                                                                className="caption fw-6 font-worksans hover-text-4"
                                                            >
                                                                {v.title}
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
                                        href="/farmfood"
                                        className="tf-btn scale-50"
                                    >
                                        <span className="text-style">
                                            See More Our Commitment
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
            </section>

            <section className="s-our-history has-img-item tf-pt-0">
                <div className="tf-container w-1620">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content-section img-hover">
                                <div className="image hover-item">
                                    <img
                                        src="/images/funfarm/funfarm_n22.png"
                                        data-src="/images/funfarm/funfarm_n22.png"
                                        alt=""
                                        className="lazyload"
                                    />
                                </div>
                                <div className="heading-section style-4 has-text style-3">
                                    <div className="img-item">
                                        <div className="item">
                                            <img
                                                className="tf-animate-1"
                                                src="/images/item/rice-plant-2.png"
                                                alt=""
                                            />
                                        </div>
                                        <p className="sub-title">Our History</p>
                                    </div>
                                    <p className="title text-anime-style-1">
                                        Important Historical
                                        <br />
                                        Milestones Of Our Farm
                                    </p>
                                    <p className="text">
                                        From a modest beginning in the Nakaseke
                                        District, Fun Farming Uganda has grown
                                        into a diverse organic farm — a place
                                        where goat breeding, poultry farming and
                                        banana plantations meet a thriving youth
                                        agro project.
                                    </p>
                                    <Link
                                        href="/blog"
                                        className="tf-btn bg-white wow fadeInUp"
                                        data-wow-delay="0s"
                                    >
                                        <span className="text-style cl-primary">
                                            Read More
                                        </span>
                                        <div className="icon">
                                            <i className="icon-arrow_right"></i>
                                        </div>
                                    </Link>
                                    <div className="wg-exprerience text-center z-5 tf-rotate-back-and-forth">
                                        <p className="year">6</p>
                                        <p className="text">
                                            Years Of <br /> Farming
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="s-img-item item-1">
                    <img src="/images/item/brown-top.png" alt="" />
                </div>
                <div className="s-img-item item-bottom">
                    <img src="/images/item/brown-bottom.png" alt="" />
                </div>
            </section>

            <section className="s-farm-tour">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-6">
                            <div
                                className="box-about-us img-hover wow fadeInUp"
                                data-wow-delay="0s"
                            >
                                <div className="image hover-item">
                                    <img
                                        src="/images/funfarm/funfarm_n28.png"
                                        alt=""
                                        className="lazyload"
                                    />
                                </div>
                                <div className="content">
                                    <Link
                                        href="/blog"
                                        className="title fw-7 fs-30 font-worksans hover-text-secondary"
                                    >
                                        Good Meat In The Tub
                                    </Link>
                                    <p className="text">
                                        Our Chief Executive Farmer and farmer's
                                        wife pull the cart, embracing the
                                        agro-tourism concept and the organic
                                        spirit in Uganda. View our content to see
                                        their farmtastic story.
                                    </p>
                                    <div className="flex justify-center">
                                        <Link
                                            href="/blog"
                                            className="tf-btn-read text-white hover-text-secondary"
                                        >
                                            View Our Content
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div
                                className="box-about-us img-hover wow fadeInUp"
                                data-wow-delay="0.1s"
                            >
                                <div className="image hover-item">
                                    <img
                                        src="/images/funfarm/funfarm_n20.png"
                                        alt=""
                                        className="lazyload"
                                    />
                                </div>
                                <div className="content">
                                    <Link
                                        href="/farmfood"
                                        className="title fw-700 fs-30 font-worksans hover-text-secondary"
                                    >
                                        Goat Communicating, Cow Connecting
                                    </Link>
                                    <p className="text">
                                        Three key words at Fun Farms Uganda.
                                        With the Farm Games and Farm Expert
                                        Games, herds of colleagues enjoy a fun
                                        mix of thinking and doing to strengthen
                                        the team spirit.
                                    </p>
                                    <div className="flex justify-center">
                                        <Link
                                            href="/farmfood"
                                            className="tf-btn-read text-white hover-text-secondary"
                                        >
                                            See Animal Breeds
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="s-contact-us style-2 bg-white pt-124 pb-82">
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
                                                    Butalangu Town Council,
                                                    <br />
                                                    Nakaseke District, Uganda
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
                                                <p className="title">
                                                    Contact Us
                                                </p>
                                                <p className="text">
                                                    {SITE.email} <br />
                                                    Call Us 24/7: {SITE.phone}
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
                                                <p
                                                    className="text"
                                                    dangerouslySetInnerHTML={{
                                                        __html: SITE.workingHours,
                                                    }}
                                                />
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
                                        <p className="title text-anime-style-1">
                                            Contact Us Today!
                                        </p>
                                        <p className="text">
                                            We reply within 24 hours via email.
                                            Thank you for getting in touch.
                                        </p>
                                        <div className="img-item">
                                            <img
                                                className="tf-animate-1"
                                                src="/images/item/rice-plant-2.png"
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

            <section className="s-partner style-2 has-img-item pb-71">
                <Partners />
            </section>
        </div>
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

function Partners() {
    return (
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
    );
}