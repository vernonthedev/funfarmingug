'use client';

import Link from 'next/link';

export default function ActivitiesPage() {
    return (
        <>
            <div className="l-main u-bg-neutral--100">
                <div className="js-activities">
                    <div className="activities-swiper">
                        <div className="swiper-wrapper">
                            {[
                                {
                                    name: 'Barbeque',
                                    image: '/img/home/team-building2.jpg',
                                },
                                {
                                    name: 'Farm Expert Games',
                                    image: '/img/home/team-building.jpg',
                                },
                                {
                                    name: 'Climbing Activity',
                                    image: '/img/home/plants-home.jpg',
                                },
                                {
                                    name: 'Trophy',
                                    image: '/img/gallery/funfarm_n1.png',
                                },
                                {
                                    name: 'Teambuilding',
                                    image: '/img/gallery/funfarm_n2.png',
                                },
                            ].map((activity, index) => (
                                <div key={index} className="swiper-slide">
                                    <div className="activity-slide">
                                        <img
                                            src={activity.image}
                                            alt={activity.name}
                                        />
                                        <div className="activity-overlay">
                                            <h3>{activity.name}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                </div>

                <section className="o-steps-intro">
                    <h2 className="o-steps-intro__title">Plan your visit</h2>
                    <div className="o-steps-intro__main">
                        <ol className="o-steps_intro__list c-steps">
                            <li className="c-steps__item">
                                <svg className="c-steps__icon">
                                    <use href="/img/steps/bullseye.svg#bullseye"></use>
                                </svg>
                                <div className="c-steps__content">
                                    <span className="c-steps__label">
                                        Board Games
                                    </span>
                                </div>
                            </li>
                            <li className="c-steps__item">
                                <svg className="c-steps__icon">
                                    <use href="/img/steps/catering.svg#catering"></use>
                                </svg>
                                <div className="c-steps__content">
                                    <span className="c-steps__label">
                                        Farm Kitchen
                                    </span>
                                </div>
                            </li>
                            <li className="c-steps__item">
                                <svg className="c-steps__icon">
                                    <use href="/img/steps/puzzle.svg#puzzle"></use>
                                </svg>
                                <div className="c-steps__content">
                                    <span className="c-steps__label">
                                        Team Building
                                    </span>
                                </div>
                            </li>
                            <li className="c-steps__item">
                                <svg className="c-steps__icon">
                                    <use href="/img/steps/form.svg#form"></use>
                                </svg>
                                <div className="c-steps__content">
                                    <span className="c-steps__label">
                                        Farm Lounge Facilities
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </div>
                    <div className="o-steps-intro__aside">
                        <div className="o-steps-intro__suggest">
                            <h3>About our activities</h3>
                            <p>
                                Do you want to come to FunFarming with more than
                                forty people? Then we will be happy to help you
                                put together your program
                            </p>
                            <div className="o-steps-intro__action">
                                <Link href="/contact" className="c-text-button">
                                    <span className="c-text-button__text">
                                        Request more info
                                    </span>
                                    <i className="c-text-button__icon">
                                        <svg width="7" height="10">
                                            <use href="/img/icon-arrowRight.svg#arrowRight"></use>
                                        </svg>
                                    </i>
                                </Link>
                            </div>
                        </div>
                        <div className="o-steps-intro__notice">
                            You can provide the exact number of participants
                            later.
                        </div>
                    </div>
                    <div className="o-steps-intro__video">
                        <img
                            className="u-clip-path"
                            loading="lazy"
                            data-id="clip-path-image-2"
                            src="/img/home/team-building.jpg"
                            alt="People having fun at funfarming Uganda"
                            style={{ borderRadius: '20px' }}
                        />
                    </div>
                </section>

                <div className="o-availability__food-hint">
                    <span>Make your bookings today</span>
                </div>
            </div>

            <section className="o-availability__footer u-mb-neg-slant-height u-bg-secondary--900">
                <div className="o-availability__footer-content">
                    <div
                        id="component-item-1"
                        data-type="textImage"
                        className="u-mb-neg-slant-height"
                    >
                        <div className="o-component-area__component l-contain l-contain--wide">
                            <div className="l-double l-double--wide u-spacing-pt6">
                                <div className="l-double__left">
                                    <img
                                        className="u-clip-path"
                                        loading="lazy"
                                        data-id="clip-path-image-2"
                                        data-kal="slide-right"
                                        src="/img/gallery/funfarm_n21.png"
                                        alt="FunFarming Uganda Tourists from Germany"
                                        style={{
                                            borderRadius: '20px',
                                            height: '80%',
                                        }}
                                    />
                                </div>
                                <div
                                    className="l-double__right s-text s-text--on-dark"
                                    data-kal="slide-up"
                                >
                                    <h2>A Fun farm</h2>
                                    <h3>
                                        the perfect location for your team
                                        building, bachelor's day, event or party
                                    </h3>
                                    <p>
                                        The FarmFun activities will make you
                                        roar with joy. Because as specialists in
                                        fun and entertainment, we organize a
                                        farmtastic team building event for you
                                        on one of our farms, a fantastic
                                        bachelor's day or a mega-cool party or
                                        event full of fun and challenging
                                        activities. You get the healthy aroma of
                                        the farm country for free!
                                    </p>
                                    <p>
                                        Step onto our farm and leave the stress
                                        of the city behind. At Fun Farm, we've
                                        cultivated an environment where laughter
                                        blooms like sunflowers and excitement
                                        grows as fast as our crops. Whether
                                        you're looking to strengthen bonds
                                        within your team, celebrate a milestone
                                        with friends, or bid farewell to single
                                        life in style, we've got you covered.
                                        Picture yourself embarking on a friendly
                                        competition with your colleagues as you
                                        navigate through our thrilling obstacle
                                        courses, or perhaps you'd prefer a
                                        laid-back day of picking fresh produce
                                        and enjoying a rustic picnic under the
                                        shade of our sprawling trees. Whatever
                                        your preference, our team is here to
                                        ensure your experience is nothing short
                                        of unforgettable. So, gather your crew,
                                        pack your sense of adventure, and join
                                        us at Fun Farm, where the only thing
                                        more abundant than our harvest is the
                                        joy we cultivate together.
                                    </p>
                                    <img
                                        className="u-clip-path"
                                        data-id="clip-path-image-1"
                                        loading="lazy"
                                        data-kal="slide-left"
                                        src="/img/gallery/funfarm_n18.png"
                                        alt="Fun farmers at the farm having fun in Uganda"
                                        style={{
                                            borderRadius: '20px',
                                            width: '80%',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
