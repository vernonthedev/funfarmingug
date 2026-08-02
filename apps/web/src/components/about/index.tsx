import Link from 'next/link';
import { PageTitle } from '@/components/site/PageTitle';

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
                                            <div
                                                id="odometer"
                                                className="odometer style-5"
                                            >
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
                                        farming and banana plantations.
                                    </p>
                                    <p
                                        className="text-2 wow fadeInUp"
                                        data-wow-delay="0s"
                                    >
                                        We also serve as a youth agro project,
                                        educating and involving young
                                        individuals in sustainable farming
                                        practices, contributing to Uganda's
                                        agricultural sector.
                                    </p>
                                </div>
                            </div>
                        </div>
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
                                            src="/images/section/s-farm.jpg"
                                            alt=""
                                            className="lazyload"
                                        />
                                        <a
                                            href="/video/farm.mp4"
                                            className="style-icon-play popup-video"
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
                                        From goat breeding to banana
                                        plantations, we nurture the land and the
                                        community together.
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
                                                                href="/references"
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
                            </div>
                        </div>
                    </div>
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
                                        src="/images/section/s-about-2.jpg"
                                        alt=""
                                        className="lazyload"
                                    />
                                </div>
                                <div className="content">
                                    <Link
                                        href="/farmfood"
                                        className="title fw-7 fs-30 font-worksans hover-text-secondary"
                                    >
                                        Farmtastic Activities &amp; Animal
                                        Breeds
                                    </Link>
                                    <p className="text">
                                        Explore the goats, poultry and banana
                                        plantations at the heart of our organic
                                        farm.
                                    </p>
                                    <div className="flex justify-center">
                                        <Link
                                            href="/farmfood"
                                            className="tf-btn-read text-white hover-text-secondary"
                                        >
                                            View Animal Breeds
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
                                        src="/images/widget/about-us-2.jpg"
                                        alt=""
                                        className="lazyload"
                                    />
                                </div>
                                <div className="content">
                                    <Link
                                        href="/activities"
                                        className="title fw-700 fs-30 font-worksans hover-text-secondary"
                                    >
                                        Explore Our Farm Tours
                                    </Link>
                                    <p className="text">
                                        Join our team events and experience farm
                                        life in Nakaseke District, Uganda.
                                    </p>
                                    <div className="flex justify-center">
                                        <Link
                                            href="/activities"
                                            className="tf-btn-read text-white hover-text-secondary"
                                        >
                                            View All Activities
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
