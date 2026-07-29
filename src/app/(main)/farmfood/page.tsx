'use client';

import Link from 'next/link';

const foodItems = [
    { name: 'Local Goat Breeds', image: '/img/gallery/funfarm_n1.png' },
    { name: 'Free-Range Birds', image: '/img/gallery/funfarm_n4.png' },
    { name: 'Ducks', image: '/img/gallery/funfarm_n8.png' },
    { name: 'Fresh Produce', image: '/img/gallery/funfarm_n5.png' },
];

export default function FarmFoodPage() {
    return (
        <>
            <section className="page-header">
                <div
                    className="page-header__bg"
                    style={{
                        backgroundImage: 'url(/img/gallery/funfarm_n28.png)',
                    }}
                ></div>
                <div className="container">
                    <h2 className="page-header__title">Farm Food</h2>
                    <ul className="garlon-breadcrumb list-unstyled">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <span>Farm Food</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="section-space">
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sec-title__tagline bw-split-in-up-fast">
                            <img
                                src="/assets/images/shapes/sec-title-shape.png"
                                alt="shape"
                            />
                            FARM FOOD
                        </div>
                        <h3 className="sec-title__title bw-split-in-up">
                            Hungry stomach after activities? <br /> Taste Our
                            Locally Made FarmFood!
                        </h3>
                    </div>
                </div>
            </section>

            <section className="about-one section-space-bottom">
                <div className="container">
                    <div className="row gutter-y-30 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-one__thumb__item">
                                <img
                                    src="/img/webimgs/tray-potatoes.jpg"
                                    alt="Food Served at FunFarming Uganda"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-one__content">
                                <div className="sec-title text-start">
                                    <div className="sec-title__tagline bw-split-in-up-fast">
                                        <img
                                            src="/assets/images/shapes/sec-title-shape.png"
                                            alt="shape"
                                        />
                                        FRESH & ORGANIC
                                    </div>
                                    <h3 className="sec-title__title bw-split-in-up">
                                        Hungry stomach <br /> after activities?
                                    </h3>
                                </div>
                                <p className="about-one__content__text">
                                    Complete your day with a light lunch or
                                    extensive meal from our in-house caterer.
                                    Crazy activities in the country air are
                                    guaranteed to make you hungry.
                                </p>
                                <p className="about-one__content__text">
                                    Our FarmFood is prepared using fresh,
                                    organic ingredients sourced directly from
                                    our farm. From traditional Ugandan dishes to
                                    international favorites, our menu offers
                                    something for everyone.
                                </p>
                                <p className="about-one__content__text">
                                    <strong>
                                        You can order your favorite FarmFood
                                        after you have chosen an activity.
                                        Special dietary requirements can be
                                        accommodated with advance notice.
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-page section-space">
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sec-title__tagline bw-split-in-up-fast">
                            <img
                                src="/assets/images/shapes/sec-title-shape.png"
                                alt="shape"
                            />
                            OUR BREEDS
                        </div>
                        <h3 className="sec-title__title bw-split-in-up">
                            Some Of Our <br /> Farm Animals
                        </h3>
                    </div>
                    <div className="row gutter-y-30">
                        {foodItems.map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-6">
                                <div
                                    className="service-card-two wow fadeInUp"
                                    data-wow-duration="1500ms"
                                    data-wow-delay={`${(index + 1) * 200}ms`}
                                >
                                    <div className="service-card-two__inner">
                                        <div
                                            className="service-card-two__thumb"
                                            style={{
                                                height: '220px',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                }}
                                            />
                                        </div>
                                        <div className="service-card-two__content">
                                            <h4 className="service-card-two__title">
                                                {item.name}
                                            </h4>
                                        </div>
                                        <div className="service-card-two__shape-one">
                                            <img
                                                src="/assets/images/shapes/leaf-left-1.png"
                                                alt="icon"
                                            />
                                        </div>
                                        <div className="service-card-two__shape-two">
                                            <img
                                                src="/assets/images/shapes/leaf-right-2.png"
                                                alt="icon"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="about-one section-space">
                <div className="container">
                    <div className="row gutter-y-30 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-one__content">
                                <div className="sec-title text-start">
                                    <div className="sec-title__tagline bw-split-in-up-fast">
                                        <img
                                            src="/assets/images/shapes/sec-title-shape.png"
                                            alt="shape"
                                        />
                                        BBQ & DRINKS
                                    </div>
                                    <h3 className="sec-title__title bw-split-in-up">
                                        BBQ + Drinks <br /> The Perfect Finish
                                    </h3>
                                </div>
                                <p className="about-one__content__text">
                                    The ideal conclusion to your team-building?
                                    A delicious BBQ. You will enjoy a delightful
                                    buffet with around ten dishes including
                                    vegetables, pastas, potato salad, bread, and
                                    sauces, and choose from eight types of meat
                                    that our BBQ specialist will grill for you.
                                </p>
                                <p className="about-one__content__text">
                                    All you have to do is sit back, occasionally
                                    visit our baker and the buffet for a fresh
                                    serving. Enjoy!
                                </p>
                                <p className="about-one__content__text">
                                    <strong>
                                        You can reserve a barbecue for your team
                                        online after adding an activity to your
                                        schedule.
                                    </strong>
                                </p>
                                <p className="about-one__content__text">
                                    Pricing available upon request. Veggie,
                                    halal, gluten-free options available upon
                                    request.
                                </p>
                                <ul className="about-one__list list-unstyled">
                                    <li>
                                        <i className="fa fa-check-circle"></i>
                                        <span>
                                            Everything is prepared for you
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check-circle"></i>
                                        <span>Suitable for hearty eaters</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check-circle"></i>
                                        <span>
                                            Veggie, halal, gluten-free available
                                            upon request
                                        </span>
                                    </li>
                                </ul>
                                <div className="about-one__user-box">
                                    <Link
                                        href="/activities"
                                        className="garlon-btn"
                                    >
                                        <span>Book Your Activity First</span>
                                        <i className="icon-angle-small-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-one__thumb__item">
                                <img
                                    src="/img/gallery/bbq.jpg"
                                    alt="BBQ at Fun Farming Uganda"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-one">
                <div className="container">
                    <div className="cta-one__inner">
                        <div className="cta-one__call">
                            <div className="cta-one__call__icon">
                                <i className="icon-leaf"></i>
                            </div>
                            <div>
                                <h3 className="cta-one__call__title">
                                    Ready to Taste FarmFood?
                                </h3>
                                <p className="cta-one__call__link">
                                    Book your activity and add FarmFood to your
                                    schedule. Our team will ensure you have a
                                    delicious meal to complement your farm
                                    experience.
                                </p>
                            </div>
                        </div>
                        <div className="cta-one__btn">
                            <Link href="/activities" className="garlon-btn">
                                <span>View Activities</span>
                                <i className="icon-angle-small-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="row">
                    <div className="col-xl-12 text-center">
                        <p className="about-one__content__text">
                            <strong>Make your bookings today!</strong>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
