import Link from 'next/link';

const EVENTS = [
    {
        image: '/images/funfarm/funfarm_n5.png',
        title: 'Board Games',
        text: 'A favourite for kids and grown-ups alike. Gather around for farmhouse fun while you compete in friendly board games under the trees.',
        price: <span className="free">Free!</span>,
    },
    {
        image: '/images/funfarm/funfarm_n6.png',
        title: 'Farm Kitchen',
        text: 'Roll up your sleeves in our open farm kitchen. Cook, bake and taste fresh produce picked right from the fields around you.',
        price: (
            <>
                <span className="dollar">$</span>
                <span className="price">20</span>
            </>
        ),
    },
    {
        image: '/images/funfarm/funfarm_n16.png',
        title: 'Team Building Day',
        text: 'Bring your colleagues and strengthen your bond with challenges, obstacle courses and shared adventures across the farm.',
        price: <span className="free">Fun!</span>,
    },
];

const FEATURED_ACTIVITIES = [
    {
        image: '/images/funfarm/funfarm_n10.png',
        title: 'Discover Farm Tour',
        text: 'A guided walk through our fields, hatchery and plantations where you meet the animals up close.',
    },
    {
        image: '/images/funfarm/funfarm_n11.png',
        title: 'Farm In Summer',
        text: 'See the farm at its liveliest — lush crops, playful chickens and the freshest harvest of the season.',
    },
    {
        image: '/images/funfarm/funfarm_n13.png',
        title: 'Children\'s Farm Camp',
        text: 'A hands-on day of games, feeding sessions and planting for our youngest visitors.',
    },
];

const ACTIVITIES = [
    {
        icon: <i className="fa-solid fa-chess" />,
        label: 'Board Games',
    },
    {
        icon: <i className="fa-solid fa-utensils" />,
        label: 'Farm Kitchen',
    },
    {
        icon: <i className="fa-solid fa-people-group" />,
        label: 'Team Building',
    },
    {
        icon: <i className="fa-solid fa-couch" />,
        label: 'Farm Lounge Facilities',
    },
];

export function ActivitiesPage() {
    return (
        <div className="main-content page-our-events pb-0 mb--20">
            <section className="s-video">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="video-wrap">
                                <img
                                    className="mw-unset lazyload"
                                    src="/images/funfarm/funfarm_n8.png"
                                    alt=""
                                />
                                <a
                                    href="/video/farm.mp4"
                                    className="style-icon-play popup-video"
                                >
                                    <i className="fa-solid fa-play"></i>
                                    <div className="wave"></div>
                                    <div className="wave-1"></div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="content-section">
                                <div className="heading-section style-4">
                                    <div className="img-item">
                                        <img
                                            src="/images/item/rice-plant-2.png"
                                            alt=""
                                        />
                                    </div>
                                    <p className="title text-anime-style-1">
                                        A Fun Farm, Team Building
                                        <br />
                                        And Farm Tours
                                    </p>
                                </div>
                                <p className="text">
                                    The FarmFun activities will make you roar
                                    with joy. As specialists in fun and
                                    entertainment, we organize a farmtastic team
                                    building event for you on one of our farms.
                                    You get the healthy aroma of the farm country
                                    for free!
                                </p>
                                <Link href="/contact-us" className="tf-btn">
                                    <span className="text-style">
                                        Request More Info
                                    </span>
                                    <div className="icon">
                                        <i className="icon-arrow_right"></i>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="s-img-item wow zoomIn" data-wow-offset="10">
                    <div className="tf-rotate-back-and-forth">
                        <img src="/images/item/corn-5.png" alt="" />
                    </div>
                </div>
            </section>

            <section className="s-banner style-2">
                <div className="heading-side has-img-item">
                    <div className="image">
                        <div className="scroll-element-4">
                            <img
                                className="scale-1-1"
                                src="/images/funfarm/funfarm_n18.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="s-img-item item-bottom">
                        <img
                            src="/images/item/page-title-top.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="slider-side">
                    <div className="tf-container w-1620">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="swiper-container slider-box-event">
                                    <div className="swiper-wrapper">
                                        {FEATURED_ACTIVITIES.map((f, i) => (
                                            <div
                                                className="swiper-slide"
                                                key={i}
                                            >
                                                <div
                                                    className="box-event img-hover wow fadeInUp"
                                                    data-wow-delay={`${i * 0.1}s`}
                                                    data-wow-offset="10"
                                                >
                                                    <div className="image hover-item">
                                                        <img
                                                            src={f.image}
                                                            alt=""
                                                            className="lazyload"
                                                        />
                                                    </div>
                                                    <div className="content">
                                                        <div className="img-item">
                                                            <img
                                                                src="/images/item/rice-plant-2.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <Link
                                                            href="/activities"
                                                            className="title fw-7 font-worksans"
                                                        >
                                                            {f.title}
                                                        </Link>
                                                        <p className="text">
                                                            {f.text}
                                                        </p>
                                                        <Link
                                                            href="/activities"
                                                            className="tf-btn-read hover-text-4"
                                                        >
                                                            Read More
                                                        </Link>
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

            <section className="s-other-event">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="heading-section style-4 has-text">
                                <div className="img-item">
                                    <img
                                        className="tf-animate-1"
                                        src="/images/item/rice-plant-2.png"
                                        alt=""
                                    />
                                </div>
                                <p className="title mb-18 text-anime-style-2">
                                    Other Active Events At The Farm
                                </p>
                                <p className="text">
                                    The perfect location for your team building,
                                    bachelor's day, event or party. The FarmFun
                                    activities will make you roar with joy —
                                    you'll get the healthy aroma of the farm
                                    country for free!
                                </p>
                            </div>
                        </div>
                        {EVENTS.map((e, i) => (
                            <div className="col-lg-12" key={i}>
                                <div
                                className={`our-event-item img-hover tf-img-hover ${
                                    i < EVENTS.length - 1 ? 'mb-50' : ''
                                } wow fadeInUp`}
                            >
                                    <div className="image relative hover-item hover14">
                                        <img
                                            src={e.image}
                                            alt=""
                                            className="lazyload"
                                        />
                                        <div className="price-wrap absolute">
                                            {e.price}
                                        </div>
                                    </div>
                                    <div className="content">
                                        <Link
                                            href="/activities"
                                            className="hover-text-4 fs-30 title fw-7 font-worksans"
                                        >
                                            {e.title}
                                        </Link>
                                        <ul className="infor-event">
                                            <li>
                                                <p className="time-start">
                                                    Time : 10 / 05 / 2024
                                                </p>
                                            </li>
                                            <li>
                                                <p className="location">
                                                    Location: Fun Farming Uganda
                                                </p>
                                            </li>
                                            <li>
                                                <p className="ticket">
                                                    Tickets Available: 40
                                                </p>
                                            </li>
                                        </ul>
                                        <p className="sub font-inter">
                                            {e.text}
                                        </p>
                                        <Link href="/activities" className="tf-btn">
                                            <span className="text-style">
                                                Read More
                                            </span>
                                            <div className="icon">
                                                <i className="icon-arrow_right"></i>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="s-question has-img-item">
                <div className="content-wrap">
                    <div className="content">
                        <div className="heading-section style-4 has-text">
                            <p className="title tf-animate-1">
                                If You Have Questions About The
                                Events Please Contact Us!
                            </p>
                            <p className="text">
                                We will reply you within 24 hours or you can
                                refer to the questions at the FAQs Page.
                            </p>
                        </div>
                        <div className="bot">
                            <Link href="/contact-us" className="tf-btn">
                                <span className="text-style">
                                    Contact Us Today
                                </span>
                                <div className="icon">
                                    <i className="icon-arrow_right"></i>
                                </div>
                            </Link>
                            <Link
                                href="/frequently-asked-questions"
                                className="tf-btn style-3 pd-defalt"
                            >
                                <span className="text-style">
                                    View FAQs Page
                                </span>
                                <div className="icon">
                                    <i className="icon-arrow_right"></i>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="image-wrap">
                        <div className="image">
                            <img
                                src="/images/funfarm/funfarm_n20.png"
                                alt=""
                                className="lazyload tf-animate-2"
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
                <div className="s-img-item item-1">
                    <img src="/images/item/page-title-top.png" alt="" />
                </div>
                <div className="s-img-item item-2 wow zoomIn">
                    <div className="scroll-element-3">
                        <img src="/images/item/windmill-3.png" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
}