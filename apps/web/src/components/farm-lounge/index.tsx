import Link from 'next/link';
import { SITE } from '@/lib/site';

const VALUES = [
    {
        icon: <i className="fa-solid fa-couch"></i>,
        label: 'Comfortable <br /> Lounge',
    },
    {
        icon: <i className="fa-solid fa-mug-hot"></i>,
        label: 'Coffee & <br /> Treats',
    },
    {
        icon: <i className="fa-solid fa-wifi"></i>,
        label: 'Great <br /> Atmosphere',
    },
    {
        icon: <i className="fa-solid fa-hotel"></i>,
        label: 'Rest & <br /> Refresh',
    },
    {
        icon: <i className="fa-solid fa-wine-glass"></i>,
        label: 'Cool Country <br /> Drinks',
    },
];

const BENEFITS = [
    {
        icon: <i className="fa-solid fa-couch"></i>,
        title: 'Comfortable Lounge',
        text: 'Recline in our cosy, well-kept lounge after a long day of farm adventures.',
    },
    {
        icon: <i className="fa-solid fa-mug-hot"></i>,
        title: 'Coffee & Treats',
        text: 'Enjoy a relaxing cup of coffee or juice prepared from our own produce.',
    },
    {
        icon: <i className="fa-solid fa-wifi"></i>,
        title: 'Great Atmosphere',
        text: 'Breathe in the fresh countryside air while you connect with the calm hills.',
    },
    {
        icon: <i className="fa-solid fa-hotel"></i>,
        title: 'Rest & Refresh',
        text: 'Settle in, unwind and recharge before you head out to the fields again.',
    },
];

const RESERVE = [
    'Reserve a quiet afternoon alone, a family celebration or a private team gathering.',
    'Settle into comfortable seating with ambient lighting and a welcoming atmosphere.',
    'Enjoy fresh coffee, juice and treats prepared from our very own produce.',
    'Let us plan the perfect escape for your group, just tell us what you need.',
    'Soak in panoramic views of the rolling countryside from our cozy veranda.',
    'Make your bookings today and reconnect with nature in our idyllic oasis.',
];

const LOUNGE_IMAGES = [
    'funfarm_n24.png',
    'funfarm_n25.png',
    'funfarm_n23.png',
];

export function FarmLoungePage() {
    return (
        <div className="main-content page-our-commitments pb-0 mb--20px">
            {/* Section quality of life */}
            <section className="s-quality-of-life">
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
                                <div className="heading font-snowfall text-center">
                                    <p className="text-anime-style-2">
                                        Our Lounge Facilities <br />
                                        A Soothing Experience In The Natural World
                                    </p>
                                    <div className="img-item item-4">
                                        <img
                                            className="tf-animate-1"
                                            src="/images/item/rice-plant-2.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <p className="sub font-snowfall fs-23">
                                    Nestled amidst picturesque hills, our farm
                                    lounge offers weary travellers a sanctuary of
                                    relaxation and rejuvenation. Imagine sipping
                                    on a freshly brewed cup of coffee or
                                    indulging in a refreshing glass of lemonade,
                                    all while soaking in panoramic views of the
                                    rolling countryside from our cozy veranda.
                                </p>
                                <div className="swiper-container slider-box-icon">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <ul className="box-icon-list style-2">
                                                {VALUES.map((v, i) => (
                                                    <li
                                                        className="wow fadeInUp"
                                                        data-wow-delay={`${i * 0.1}s`}
                                                        key={v.label}
                                                    >
                                                        <div className="box-icon style-3 ic-hover">
                                                            <div className="icon style-circle hover-icon">
                                                                {v.icon}
                                                            </div>
                                                            <a
                                                                href="/gallery"
                                                                className="caption fw-5 font-worksans hover-text-4"
                                                            >
                                                                <span
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: v.label,
                                                                    }}
                                                                />
                                                            </a>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="video-wrap style-2">
                                <img
                                    src="/images/funfarm/funfarm_n26.png"
                                    data-src="/images/funfarm/funfarm_n26.png"
                                    alt="Fun Farming Uganda Lounge"
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
                </div>

                <div className="s-img-item item-1">
                    <img
                        src="/images/section/Our-commitment.jpg"
                        data-src="/images/section/Our-commitment.jpg"
                        alt=""
                        className="lazyload"
                    />
                </div>
                <div className="s-img-item item-2">
                    <img src="/images/item/page-title-top.png" alt="" />
                </div>
            </section>

            {/* Section other commitment */}
            <section className="s-other-commitment">
                <div className="tf-container">
                    <div className="row wrap-reverse">
                        <div className="col-lg-6">
                            <div className="content">
                                <div className="img-item item-5 relative">
                                    <img
                                        className="tf-animate-1"
                                        src="/images/item/rice-plant-2.png"
                                        alt=""
                                    />
                                </div>
                                <h2 className="title fw-7 fs-45 font-worksans text-anime-style-1">
                                    Reserve The Lounge
                                </h2>
                                <div className="other-list">
                                    <ul>
                                        {RESERVE.map((r) => (
                                            <li key={r}>
                                                <div className="icon">
                                                    <i className="fa-solid fa-circle-check"></i>
                                                </div>
                                                <p>{r}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Link href="/contact-us" className="tf-btn">
                                    <span className="text-style">
                                        Book Your Visit
                                    </span>
                                    <div className="icon">
                                        <i className="icon-arrow_right"></i>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image-wrap">
                                <div className="image">
                                    <img
                                        src="/images/funfarm/funfarm_n27.png"
                                        data-src="/images/funfarm/funfarm_n27.png"
                                        alt="Farm Lounge Facilities Fun Farming Uganda"
                                        className="lazyload"
                                    />
                                </div>
                                <div className="img-item item-1">
                                    <img
                                        className="tf-animate__rotate-right"
                                        src="/images/item/leaf-5.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="s-img-item item-1 wow fadeInRight"
                    data-wow-delay="0s"
                >
                    <img src="/images/item/rice-plant-color.png" alt="" />
                </div>
                <div
                    className="s-img-item item-2 wow fadeInLeft"
                    data-wow-delay="0s"
                >
                    <img src="/images/item/corn-color.png" alt="" />
                </div>
            </section>

            {/* Section benefit */}
            <section className="s-benefit style-2">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="benefit-list">
                                <div className="swiper-container slider-box-list">
                                    <div className="swiper-wrapper">
                                        {BENEFITS.map((b, i) => (
                                            <div className="swiper-slide" key={i}>
                                                <div className="box-icon ic-hover">
                                                    <div className="icon hover-icon style-circle">
                                                        {b.icon}
                                                    </div>
                                                    <a
                                                        href="/gallery"
                                                        className="caption fw-6 font-worksans hover-text-secondary"
                                                    >
                                                        {b.title}
                                                    </a>
                                                    <p className="text font-nunito">
                                                        {b.text}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-slide-box-list btn-prev">
                    <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="58px"
                        height="15px"
                        viewBox="0 0 68 18"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <g fill="#ffffff">
                            <path d="M6.3 14.3 c-3.5 -2.1 -6.3 -4.2 -6.3 -4.9 0 -0.6 2.7 -3 6 -5.3 6.4 -4.5 8.3 -4.1 2.6 0.6 l-3.5 2.8 24.7 0 c23.6 0 38.2 0.9 38.2 2.3 0 0.4 -7.3 0.3 -16.3 -0.1 -9 -0.5 -23.3 -0.5 -31.8 0 l-15.4 0.8 5.3 2.9 c5 2.8 6.6 4.6 4 4.6 -0.7 0 -4.1 -1.7 -7.5 -3.7z" />
                        </g>
                    </svg>
                </div>
                <div className="btn-slide-box-list btn-next">
                    <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="58px"
                        height="15px"
                        viewBox="0 0 80 20"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <g fill="#ffffff">
                            <path d="M63 19 c0 -0.5 2.6 -2.4 5.8 -4.2 l5.7 -3.3 -19.5 -0.8 c-11 -0.5 -27.1 -0.5 -37 0.1 -9.6 0.5 -17.7 0.7 -17.9 0.5 -2.4 -1.9 22 -3.5 48.7 -3.1 l25.2 0.3 -4.6 -3.9 c-2.5 -2.1 -4.3 -4 -4 -4.3 0.7 -0.7 14.6 8.9 14.6 10.2 0 1.1 -14.3 9.5 -16.2 9.5 -0.4 0 -0.8 -0.4 -0.8 -1z" />
                        </g>
                    </svg>
                </div>
            </section>

            {/* Section award */}
            <section className="s-award">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="top heading-section mb-0 style-2">
                                <div className="img-item">
                                    <div className="item mr-25">
                                        <img
                                            className="tf-animate-1"
                                            src="/images/item/rice-plant-2.png"
                                            alt=""
                                        />
                                    </div>
                                    <p className="sub-title">
                                        What You Will Find
                                    </p>
                                </div>

                                <p className="title text-anime-style-1">
                                    The Farm Lounge Facilities
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="headding-text">
                                <p>
                                    With comfortable seating areas, ambient
                                    lighting and a welcoming atmosphere, our
                                    lounge is a haven where visitors can unwind,
                                    recharge and connect with nature. Whether you
                                    are admiring the sunset over the horizon or
                                    simply basking in the tranquility of rural
                                    life, the farm lounge promises an experience
                                    that soothes the soul.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="block-quote style-4">
                                <div className="quote">
                                    <div className="icon style-circle">
                                        <i className="icon-quote"></i>
                                    </div>
                                    <p className="font-snowfall cite fs-30">
                                        We strive to bring our guests the best
                                        farm experience in Uganda, and hope you
                                        will find the lounge a wonderful place to
                                        relax, laugh and connect. Please reach
                                        out if you have any questions, or get in
                                        touch if there is anything we can do to
                                        make your visit even better.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="wg-award-winner">
                                <p className="title font-worksans fw-7">
                                    Make Your Bookings Today
                                </p>
                                <p className="text-wrap">
                                    Location: <span>Butalangu Town Council, Nakaseke District</span>
                                </p>
                                <p className="text-wrap">
                                    Ideal For: <span>Families, friends &amp; team gatherings</span>
                                </p>
                                <p className="text-wrap mb-18">
                                    Booking: <span>Reserve online or call us anytime</span>
                                </p>
                                <p className="caption font-worksans">
                                    Our Promise:
                                </p>
                                <p className="text s1">
                                    From a freshly brewed cup of coffee to a
                                    quiet corner by the window, every detail is
                                    designed to help you unwind and recharge.
                                </p>
                                <p className="text s2">
                                    Our friendly team is always happy to arrange
                                    refreshments, snacks and a warm welcome for
                                    your group.
                                </p>
                                <p className="text s3">
                                    Whether you are visiting for an hour or the
                                    whole day, the farm lounge is your sanctuary
                                    in the heart of the countryside.
                                </p>
                                <p className="text s4">
                                    Visit Link to book:{' '}
                                    <span>
                                        <a
                                            href="/contact-us"
                                            className="hover-text-4"
                                        >
                                            Contact Us Today
                                        </a>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="wrap">
                                <div className="img-item-award">
                                    <img
                                        src="/images/item/award.png"
                                        data-src="/images/item/award.png"
                                        alt=""
                                        className="lazyload tf-animation-pulse"
                                    />
                                </div>
                            </div>
                        </div>
                        {LOUNGE_IMAGES.map((img, i) => (
                            <div className="col-lg-4" key={img}>
                                <div className="wrap">
                                    <div
                                        className="image-award wow fadeInUp"
                                        data-wow-delay={`${i * 0.1}s`}
                                    >
                                        <div className="tf-overlay"></div>
                                        <img
                                            src={`/images/funfarm/${img}`}
                                            data-src={`/images/funfarm/${img}`}
                                            alt="Fun Farming Uganda Gallery"
                                            className="lazyload"
                                        />
                                        <a href="/gallery"></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section contact us */}
            <section className="s-contact-us style-2 has-img-item pt-138 pb-78 tf-pt-0">
                <div className="section-wrap">
                    <div className="tf-container w-1290">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="content-left">
                                    <div className="box-map style-2">
                                        <div id="map" className="map"></div>
                                    </div>
                                    <ul className="contact-list">
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
                                                    <option value="Lounge Booking">
                                                        Lounge Booking
                                                    </option>
                                                    <option value="Farm Activities">
                                                        Farm Activities
                                                    </option>
                                                    <option value="Team Building">
                                                        Team Building
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
                <div className="s-img-item item-1">
                    <img src="/images/item/page-title-top.png" alt="" />
                </div>
            </section>
        </div>
    );
}
