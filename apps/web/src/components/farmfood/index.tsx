import Link from 'next/link';

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

const BBQ_POINTS = [
    'Everything is prepared for you',
    'Suitable for hearty eaters',
    'Veggie, halal, gluten-free... available upon request',
];

export function FarmFoodPage() {
    return (
        <div className="main-content page-our-commitments pb-0 mb--20px">
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
                                        Hungry Stomach After Activities?
                                        <br />
                                        Taste Our Locally Made FarmFood!
                                    </p>
                                    <div className="img-item item-4">
                                        <img
                                            className="tf-animate-1"
                                            src="/images/item/rice-plant-2.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="s-img-item item-1">
                    <img
                        src="/images/funfarm/tray-potatoes.jpg"
                        alt=""
                        className="lazyload"
                    />
                </div>
                <div className="s-img-item item-2">
                    <img src="/images/item/page-title-top.png" alt="" />
                </div>
            </section>

            <section className="s-commitment-2">
                <div className="tf-container">
                    <div className="row wrap-reverse">
                        <div className="col-lg-5">
                            <div className="image-wrap">
                                <div className="image">
                                    <img
                                        src="/images/funfarm/tray-potatoes.jpg"
                                        alt="Food Served at Fun Farming Uganda"
                                        className="lazyload"
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
                                    <p className="text">
                                        Complete your day with a light lunch or
                                        extensive meal from our in-house
                                        caterer. Because crazy activities in the
                                        fresh, countryside air are guaranteed to
                                        make you hungry. You can order your
                                        favorite FarmFood after you have chosen
                                        an activity.
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
                                    <p className="sub-title">From Our Farm</p>
                                </div>
                                <p className="title text-anime-style-1">
                                    Some Of Our Breeds
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="grid-layout-3 pt-4">
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
                                            <p className="title fs-17 fw-6 font-worksans text-center pt-3">
                                                {b.label}
                                            </p>
                                        </div>
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
                                    BBQ + Drinks
                                </h2>
                                <p className="text mb-0">
                                    The ideal conclusion to your farm day? A
                                    delicious BBQ. Enjoy a delightful buffet
                                    with around ten dishes including vegetables,
                                    pastas, potato salad, bread and sauces, and
                                    choose from eight types of meat that our BBQ
                                    specialist grills for you.
                                </p>
                                <p className="text s1">
                                    All you have to do is sit back, occasionally
                                    visit our baker and the buffet for a fresh
                                    serving. Enjoy!
                                </p>
                                <p className="fw-6 font-worksans">
                                    You can reserve a barbecue for your team
                                    online after adding an activity to your
                                    schedule.
                                </p>
                                <ul className="benefit-list">
                                    {BBQ_POINTS.map((point) => (
                                        <li key={point}>
                                            <div className="icon">
                                                <i className="fa-solid fa-circle-check"></i>
                                            </div>
                                            <p>{point}</p>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact-us" className="tf-btn">
                                    <span className="text-style">
                                        Book Your Activity First
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
                                        src="/images/funfarm/bbq.jpg"
                                        alt="BBQ bakken at Fun Farming Uganda"
                                        className="lazyload"
                                    />
                                </div>
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
