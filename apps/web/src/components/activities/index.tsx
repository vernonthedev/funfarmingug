import Link from 'next/link';

const EVENTS = [
    {
        image: '/images/funfarm/funfarm_n5.png',
        title: 'Board Games',
        text: 'A favourite for kids and grown-ups alike. Gather around for farmhouse fun while you compete in friendly board games under the trees.',
        priceBadge: <span className="free">Most Popular</span>,
    },
    {
        image: '/images/funfarm/funfarm_n6.png',
        title: 'Farm Kitchen',
        text: 'Roll up your sleeves in our open farm kitchen. Cook, bake and taste fresh produce picked right from the fields around you.',
        priceBadge: <span className="free">Free!</span>,
    },
    {
        image: '/images/funfarm/funfarm_n16.png',
        title: 'Team Building',
        text: 'Bring your colleagues and strengthen your bond with challenges, obstacle courses and shared adventures across the farm.',
        priceBadge: <span className="free">Fun</span>,
    },
];

const ACTIVITIES = [
    {
        icon: <i className="fa-solid fa-chess" />,
        label: 'Board Games',
        text: 'Friendly challenges and games for every age group, played in the shade of the farm.',
    },
    {
        icon: <i className="fa-solid fa-utensils" />,
        label: 'Farm Kitchen',
        text: 'Cook and share meals prepared from the fresh, organic produce grown on our own land.',
    },
    {
        icon: <i className="fa-solid fa-people-group" />,
        label: 'Team Building',
        text: 'Structured activities that get your group working, laughing and winning together.',
    },
    {
        icon: <i className="fa-solid fa-couch" />,
        label: 'Farm Lounge Facilities',
        text: 'Relax, rest and rewind in our lounge after a full day of farm adventures.',
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
                                    className="mw-unset"
                                    src="/images/funfarm/funfarm_n18.png"
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
                                    <p className="sub-title">Plan your visit</p>
                                    <p className="title text-anime-style-1">
                                        A Fun Farm, Team Building
                                        <br />
                                        And Farm Tours
                                    </p>
                                </div>
                                <p className="text">
                                    Do you want to come to Fun Farming with more
                                    than forty people? Then we will be happy to
                                    help you put together your program. You can
                                    provide the exact number of participants
                                    later.
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
            </section>

            <section className="s-about-us style-1">
                <div className="tf-container w-1290">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wg-tabs">
                                <ul className="list-btn">
                                    {ACTIVITIES.map((a, i) => (
                                        <li key={i}>
                                            <div className="box-icon ic-hover">
                                                <div className="icon style-circle hover-icon">
                                                    {a.icon}
                                                </div>
                                                <p className="caption fw-6 font-worksans hover-text-4">
                                                    {a.label}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
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
                                    Farm Activities At The Farm
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
                                <div className="our-event-item img-hover tf-img-hover mb-50">
                                    <div className="image relative hover-item hover14">
                                        <img
                                            src={e.image}
                                            alt=""
                                            className="lazyload"
                                        />
                                        <div className="price-wrap absolute">
                                            {e.priceBadge}
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
                                                <p className="ticket">
                                                    Farm Tour Activity
                                                </p>
                                            </li>
                                            <li>
                                                <p className="location">
                                                    Location: Fun Farming Uganda
                                                </p>
                                            </li>
                                        </ul>
                                        <p className="sub font-nunito">
                                            {e.text}
                                        </p>
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
                                Make Your Bookings Today!
                            </p>
                            <p className="text">
                                We will help you put together the perfect
                                program for your group. Contact us for more
                                activities or arrange a farm tour today.
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
                                href="/gallery"
                                className="tf-btn style-3 pd-defalt"
                            >
                                <span className="text-style">View Gallery</span>
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
                    </div>
                </div>
            </section>
        </div>
    );
}
