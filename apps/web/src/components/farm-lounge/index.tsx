import Link from 'next/link';

const AMENITIES = [
    {
        icon: <i className="fa-solid fa-couch" />,
        label: 'Comfortable Lounge',
        text: 'Recline in our cosy, well-kept lounge after a long day of farm adventures.',
    },
    {
        icon: <i className="fa-solid fa-mug-hot" />,
        label: 'Coffee & Treats',
        text: 'Enjoy a relaxing cup of coffee or juice prepared from our own produce.',
    },
    {
        icon: <i className="fa-solid fa-wifi" />,
        label: 'Great Atmosphere',
        text: 'Breathe in the fresh countryside air while you connect with the calm hills.',
    },
    {
        icon: <i className="fa-solid fa-hotel" />,
        label: 'Rest & Refresh',
        text: 'Settle in, unwind and recharge before you head out to the fields again.',
    },
];

export function FarmLoungePage() {
    return (
        <div className="main-content page-our-service pb-0 mb--20">
            <section className="s-commitment-2">
                <div className="tf-container">
                    <div className="row wrap-reverse">
                        <div className="col-lg-5">
                            <div className="image-wrap">
                                <div className="image relative">
                                    <img
                                        src="/images/funfarm/funfarm_n26.png"
                                        alt="Fun Farming Uganda Lounge"
                                        className="lazyload"
                                    />
                                    <div className="box absolute box-1">
                                        <span className="fs-14">
                                            Welcome to our
                                        </span>
                                        <span className="fs-32 fw-7 font-worksans">
                                            Farm Lounge
                                        </span>
                                    </div>
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
                                            Our Lounge Facilities
                                        </p>
                                    </div>
                                    <p className="title text-anime-style-1">
                                        A Soothing Experience
                                        <br />
                                        In The Natural World
                                    </p>
                                    <p className="text">
                                        Nestled amidst picturesque hills, our farm
                                        lounge offers weary travellers a sanctuary
                                        of relaxation and rejuvenation. Imagine
                                        sipping on a freshly brewed cup of coffee
                                        or indulging in a refreshing glass of
                                        lemonade, all while soaking in panoramic
                                        views of the rolling countryside from our
                                        cozy veranda.
                                    </p>
                                    <p className="text">
                                        With comfortable seating areas, ambient
                                        lighting and a welcoming atmosphere, our
                                        lounge is a haven where visitors can
                                        unwind, recharge and connect with nature.
                                        Whether you are admiring the sunset over
                                        the horizon or simply basking in the
                                        tranquility of rural life, the farm
                                        lounge promises an experience that soothes
                                        the soul and leaves you feeling refreshed
                                        and invigorated.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="s-img-item item-1 scroll-element-4">
                    <img src="/images/item/tructor.png" alt="" />
                </div>
            </section>

            <section className="s-award">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="top heading-section text-center mb-0 style-2">
                                <div className="img-item">
                                    <div className="item">
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
                        <div className="col-lg-12">
                            <div className="grid-layout-4">
                                {AMENITIES.map((a) => (
                                    <div
                                        className="box-infor ic-hover style-1 wow fadeInUp"
                                        key={a.label}
                                    >
                                        <div className="box-icon">
                                            <div className="icon">
                                                <span>{a.icon}</span>
                                            </div>
                                        </div>
                                        <h5 className="title-tour font-snowfall text-center">
                                            {a.label}
                                        </h5>
                                        <p className="text-tour text-center">
                                            {a.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                                <p className="text mb-0">
                                    Whether it is a quiet afternoon alone, a
                                    family celebration or a private team
                                    gathering, the farm lounge is available to
                                    make your escape complete.
                                </p>
                                <ul className="benefit-list">
                                    {AMENITIES.slice(0, 3).map((a) => (
                                        <li key={a.label}>
                                            <div className="icon">
                                                <i className="fa-solid fa-circle-check"></i>
                                            </div>
                                            <p>{a.label}</p>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/farmfood" className="tf-btn">
                                    <span className="text-style">
                                        Book With FarmFood
                                    </span>
                                    <div className="icon">
                                        <i className="icon-arrow_right"></i>
                                    </div>
                                </Link>
                                <p className="text mt-3">
                                    I have a question:{' '}
                                    <Link
                                        href="/contact-us"
                                        className="hover-text-4 fw-6"
                                    >
                                        Contact us &gt;&gt;
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image-wrap">
                                <div className="image">
                                    <img
                                        src="/images/funfarm/funfarm_n27.png"
                                        alt="Farm Lounge Facilities Fun Farming Uganda"
                                        className="lazyload"
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
        </div>
    );
}
