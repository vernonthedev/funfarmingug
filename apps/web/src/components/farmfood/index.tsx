import Link from 'next/link';
import { SITE } from '@/lib/site';

const BREEDS = [
    { image: '/images/funfarm/funfarm_n1.png', label: 'Goat Breed' },
    { image: '/images/funfarm/funfarm_n2.png', label: 'Goat Breed' },
    { image: '/images/funfarm/funfarm_n3.png', label: 'Goat Breed' },
    { image: '/images/funfarm/funfarm_n4.png', label: 'Birds' },
    { image: '/images/funfarm/funfarm_n5.png', label: 'Goat Breed' },
    { image: '/images/funfarm/funfarm_n6.png', label: 'Goat Breeds' },
    { image: '/images/funfarm/funfarm_n7.png', label: 'Goat Breeds' },
    { image: '/images/funfarm/funfarm_n9.png', label: 'Goat Breed' },
    { image: '/images/funfarm/funfarm_n8.png', label: 'Ducks' },
    { image: '/images/funfarm/funfarm_n10.png', label: 'Goat Breed' },
    { image: '/images/funfarm/funfarm_n11.png', label: 'Birds' },
    { image: '/images/funfarm/funfarm_n12.png', label: 'Birds' },
];

const BENEFITS = [
    {
        icon: <img src="/icons/tomato.png" alt="" />,
        title: '100% Organic Products',
        text: 'Ultrices sagittis orci a scelerisque purus semper eget duis at. Sollicitudin nibh sit amet.',
    },
    {
        icon: <i className="fa-solid fa-tractor"></i>,
        title: 'Absolute Quality',
        text: 'Ultrices sagittis orci a scelerisque purus semper eget duis at. Sollicitudin nibh sit amet.',
    },
    {
        icon: <i className="fa-solid fa-leaf"></i>,
        title: 'Environmentally Friendly',
        text: 'Ultrices sagittis orci a scelerisque purus semper eget duis at. Sollicitudin nibh sit amet.',
    },
    {
        icon: <img src="/icons/dollar-circle.png" alt="" />,
        title: 'Reasonable Price',
        text: 'Ultrices sagittis orci a scelerisque purus semper eget duis at. Sollicitudin nibh sit amet.',
    },
];

const PROVIDE = [
    {
        image: '/images/funfarm/tray-potatoes.jpg',
        icon: <i className="icon-salad"></i>,
        title: 'Light Lunch',
        text: 'A light lunch prepared with fresh, locally grown ingredients picked straight from our fields.',
    },
    {
        image: '/images/funfarm/bbq.jpg',
        icon: <i className="icon-meat222"></i>,
        title: 'BBQ & Drinks',
        text: 'A delicious buffet with around ten dishes and eight types of meat grilled by our specialist.',
    },
    {
        image: '/images/funfarm/matooke.webp',
        icon: <i className="icon-lemon-slice"></i>,
        title: 'Tubers & Fruits',
        text: 'Fresh bananas, potatoes and seasonal fruits harvested at the peak of ripeness from our farm.',
    },
    {
        image: '/images/funfarm/Goat-kids.jpeg',
        icon: <i className="icon-cow"></i>,
        title: 'Dairy & Meat',
        text: 'Clean, healthy dairy and meat from goats and cattle raised with care on our own land.',
    },
    {
        image: '/images/funfarm/funfarm_n4.png',
        icon: <i className="icon-chicken-2"></i>,
        title: 'Poultry & Eggs',
        text: 'Free-range birds and fresh eggs from our hatchery, produced without artificial inputs.',
    },
    {
        image: '/images/funfarm/potatoes-alot.jpg',
        icon: <i className="icon-fertilizer"></i>,
        title: 'Tubers & Veggies',
        text: 'Clean vegetables and tubers grown organically and delivered fresh to your table.',
    },
];

const PLANS = [
    {
        icon: <i className="icon-barley"></i>,
        name: 'Light Lunch',
        price: '15',
        text: 'A light lunch with fresh produce from our in-house caterer to recharge after your activities.',
        features: [
            '1 lunch table for your group',
            'Fresh seasonal vegetables',
            'Bread, sauces & local fruit',
            'Drinks available on request',
        ],
    },
    {
        icon: <i className="fa-solid fa-star"></i>,
        name: 'BBQ + Drinks',
        price: '25',
        text: 'The ideal conclusion to your team building. A delightful buffet with around ten dishes.',
        features: [
            'Around ten buffet dishes',
            'Eight types of grilled meat',
            'Potato salad, pasta & bread',
            'Veggie, halal & gluten-free',
        ],
        best: true,
    },
    {
        icon: <i className="fa-solid fa-gem"></i>,
        name: 'Full Day Package',
        price: '40',
        text: 'Combine activities, a farm tour and a meal into one unforgettable farm day for your team.',
        features: [
            'Farm games & activities',
            'Guided farm tour',
            'Buffet lunch or BBQ',
            'Personal program advice',
        ],
    },
];

const TESTIMONIALS = [
    {
        name: 'Christine Rose',
        duty: 'Director, Radical Orange Pty Ltd.',
        caption: 'A delicious meal to end the perfect farm day',
        text: 'The BBQ after our farm games was simply fantastic. Everything was prepared for us and the buffet had something for every taste. A perfect finish to an unforgettable team building day.',
    },
    {
        name: 'Matovu Divo',
        duty: 'Nakasero Fun Farming Site',
        caption: 'Very quick service, always with a smile',
        text: 'Delicious lunch (BBQ) and very quick service, always with a smile. If you are looking for something different in the Savannah, this is the place to be!',
    },
];

const AVATARS = [
    '/images/funfarm/david1.jpg',
    '/images/funfarm/david2.jpg',
    '/images/funfarm/Farm-staff.jpeg',
];

export function FarmFoodPage() {
    return (
        <div className="main-content page-our-service page-our-commitments pb-0">
            <section className="s-commitment-2">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="image-wrap">
                                <div className="image">
                                    <img
                                        src="/images/funfarm/tray-potatoes.jpg"
                                        alt="Food Served at Fun Farming Uganda"
                                        className="lazyload"
                                    />
                                </div>
                                <div className="img-item item-1 tf-animate__box">
                                    <img
                                        className="up-down-move"
                                        src="/images/item/notice-2.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="content-section">
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
                                            Our FarmFood
                                        </p>
                                    </div>
                                    <p className="title text-anime-style-1">
                                        A Light Lunch Or An
                                        <br />
                                        Extensive Meal
                                    </p>
                                </div>
                                <p className="text">
                                    Complete your day with a light lunch or
                                    extensive meal from our in-house caterer.
                                    Because crazy activities in the country air
                                    are guaranteed to make you hungry. You can
                                    order your favorite FarmFood after you have
                                    chosen an activity.
                                </p>
                                <ul className="benefit-list">
                                    <li>
                                        <div className="icon">
                                            <i className="fa-solid fa-circle-check"></i>
                                        </div>
                                        <p>
                                            Everything is prepared for you
                                        </p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa-solid fa-circle-check"></i>
                                        </div>
                                        <p>Suitable for hearty eaters</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa-solid fa-circle-check"></i>
                                        </div>
                                        <p>
                                            Veggie, halal, gluten-free...
                                            available upon request
                                        </p>
                                    </li>
                                </ul>
                                <Link href="/contact-us" className="tf-btn">
                                    <span className="text-style">
                                        Order Your FarmFood
                                    </span>
                                    <div className="icon">
                                        <i className="icon-arrow_right"></i>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="s-img-item item-1 scroll-element-4">
                    <img src="/images/item/tructor.png" alt="" />
                </div>
            </section>

            <section className="s-benefit style-2">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="benefit-list">
                                <div className="swiper-container slider-box-list">
                                    <div className="swiper-wrapper">
                                        {BENEFITS.map((b, i) => (
                                            <div className="swiper-slide" key={i}>
                                                <div
                                                    className="box-icon ic-hover wow fadeInUp"
                                                    data-wow-delay={`${i * 0.1}s`}
                                                >
                                                    <div className="icon hover-icon style-circle">
                                                        {b.icon}
                                                    </div>
                                                    <a
                                                        href="/farmfood"
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
            </section>

            <section className="s-provide">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section text-center has-text mb-81">
                                <p className="sub-title">From Our Farm</p>
                                <p className="title tf-animate-2">
                                    Some Of Our Breeds
                                </p>
                                <p className="text">
                                    Explore the goats, birds and ducks that make
                                    Fun Farming Uganda such a lively place to
                                    visit.
                                </p>
                                <div className="img-item">
                                    <img
                                        className="tf-animate-1"
                                        src="/images/item/rice-plant-2.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="grid-layout-3">
                                {BREEDS.map((b) => (
                                    <div
                                        className="box-infor ic-hover img-hover style-1 wow fadeInUp"
                                        data-wow-delay="0s"
                                        key={b.label + b.image}
                                    >
                                        <div className="image hover-icon hover-item">
                                            <img
                                                src={b.image}
                                                alt="Fun Farming Uganda"
                                                className="lazyload"
                                            />
                                        </div>
                                        <div className="content">
                                            <a
                                                href="/farmfood"
                                                className="title fs-23 fw-6 font-worksans hover-text-4"
                                            >
                                                {b.label}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="s-pricing has-img-item tf-pt-0">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section text-center has-text mb-81">
                                <p className="sub-title">FarmFood Packages</p>
                                <p className="title text-anime-style-2">
                                    Pricing Plans For You
                                </p>
                                <p className="text">
                                    Choose the meal that fits your farm day best.
                                    You can reserve your package online after
                                    adding an activity to your schedule.
                                </p>
                                <div className="img-item">
                                    <img
                                        className="tf-animate-1"
                                        src="/images/item/rice-plant-2.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        {PLANS.map((p, i) => (
                            <div className="col-lg-4" key={p.name}>
                                <div
                                    className={`wg-pricing wow fadeInUp ${
                                        p.best ? 'style-2' : ''
                                    }`}
                                    data-wow-delay={`${i * 0.1}s`}
                                >
                                    {p.best && (
                                        <div className="best-choice">
                                            <p className="fs-14">
                                                Best Choice
                                            </p>
                                        </div>
                                    )}
                                    <div className="type-plan">
                                        {p.icon}
                                        <span className="font-worksans fw-6 fs-20">
                                            {p.name}
                                        </span>
                                    </div>
                                    <p className="price font-farmhouse">
                                        <span className="dollar">$</span>
                                        <span>{p.price}</span>
                                        <span className="per">/per Person</span>
                                    </p>
                                    <div className="text">
                                        <p className="font-nunito">{p.text}</p>
                                    </div>
                                    <ul className="benifit-list">
                                        {p.features.map((f) => (
                                            <li key={f}>
                                                <i className="fa-solid fa-circle-check"></i>
                                                <p>{f}</p>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="/contact-us"
                                        className="tf-btn bg-white"
                                    >
                                        <span className="text-style cl-primary">
                                            Get Started
                                        </span>
                                        <div className="icon">
                                            <i className="icon-arrow_right"></i>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="s-img-item item-1">
                    <img src="/images/item/page-title-top.png" alt="" />
                </div>
            </section>

            <section className="s-testimonial-2 style-2">
                <div className="tf-container w-1290">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="heading-section">
                                <p className="sub-title">
                                    Testimonials From People Who Have Experienced
                                    It
                                </p>
                                <p className="title text-anime-style-1">
                                    What Customer Says?
                                </p>
                                <div className="img-item">
                                    <img
                                        className="tf-animate-1"
                                        src="/images/item/rice-plant-2.png"
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
                                            Trust By Clients
                                        </p>
                                        <div className="counter">
                                            <div className="odometer style-6">
                                                10000
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
                                                                    src={
                                                                        AVATARS[
                                                                            i %
                                                                                AVATARS.length
                                                                        ]
                                                                    }
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="infor">
                                                                <div className="name-wrap">
                                                                    <a
                                                                        href="/references"
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
                        <img src="/icons/slide-next-2.svg" alt="" />
                    </div>
                    <div className="btn-slide-testimonial-2 btn-prev">
                        <img src="/icons/slide-prev-2.svg" alt="" />
                    </div>
                </div>

                <div className="s-img-item item-1 scroll-element-3">
                    <img
                        src="/images/item/gree-field.jpg"
                        alt=""
                        className="lazyload scale-1-1"
                    />
                </div>
                <div className="s-img-item item-2">
                    <img src="/images/item/page-title-top.png" alt="" />
                </div>
            </section>

            <section className="s-contact-us style-3">
                <div className="section-wrap">
                    <div className="tf-container w-1290">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="content-left">
                                    <div className="image mb-30">
                                        <img
                                            src="/images/funfarm/bbq.jpg"
                                            alt="BBQ bakken at Fun Farming Uganda"
                                            className="lazyload"
                                        />
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
                                    <div className="heading-section style-3 has-text mb-50">
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
                                        className="form-send-message"
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
                                            <fieldset>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="subject"
                                                    name="subject"
                                                    placeholder="Subject"
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="cols out-mb-24 mb-15">
                                            <fieldset>
                                                <textarea
                                                    className="form-control"
                                                    id="message"
                                                    name="message"
                                                    rows={5}
                                                    placeholder="Message"
                                                ></textarea>
                                            </fieldset>
                                        </div>
                                        <div className="group-btn style-3">
                                            <a
                                                className="tf-btn full scale-40"
                                                href="#"
                                            >
                                                <span className="text-style">
                                                    Send Message
                                                </span>
                                                <div className="icon">
                                                    <i className="icon-arrow_right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="s-partner bg-white style-4">
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