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

            <section className="l-main u-bg-neutral--100 u-spacing-pt6">
                <div
                    id="component-item-1"
                    data-type="streamer"
                    className="u-mb-neg-slant-height"
                >
                    <div className="o-component-area__component l-contain">
                        <div className="o-streamer">
                            <div className="o-streamer__top">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1151.1"
                                    height="40.9"
                                    viewBox="0 0 1151.1 40.9"
                                >
                                    <path
                                        d="M245.5 5.3a14.8 14.8 0 00-14.3 11 10.5 10.5 0 10-6.7 18.6h21a14.8 14.8 0 100-29.6zM927 15.8h-.6a14.8 14.8 0 00-28.7 1.5 9.5 9.5 0 10-5 17.6H927a9.6 9.6 0 100-19z"
                                        fill="none"
                                        stroke="#52777f"
                                        id="clouds"
                                    />
                                    <path
                                        d="M1055.6 21l95.5-.9M0 20.1l95.6.9"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeWidth=".5"
                                    />
                                    <path
                                        d="M586.1 20.5a9.2 9.2 0 11-9.1-9.2 9.2 9.2 0 019.1 9.2z"
                                        fill="none"
                                        stroke="#52777f"
                                        id="sun-ball"
                                    />
                                    <path
                                        d="M577 4.5v-4M569 6.6l-2-3.4M563 12.5l-3.3-2M561 20.5h-4M563 28.5l-3.3 2M569 34.3l-2 3.5M577 36.5v4M585 34.3l2 3.5M590.8 28.5l3.5 2M593 20.5h4M590.8 12.5l3.5-2M585 6.6l2-3.4"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        id="sun-rays"
                                    />
                                    <path
                                        d="M383.6 20l144.6-.3M613 19.7l154.6.3"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeWidth=".5"
                                    />
                                </svg>
                            </div>
                            <div className="o-streamer__left">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="191.7"
                                    height="96"
                                    viewBox="0 0 191.7 96"
                                >
                                    <path
                                        d="M44 15.1v79"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        id="tree"
                                    />
                                    <path
                                        d="M36.2 11v34.6a1.8 1.8 0 001 1.6l7.2 3.5 7.5-3.5a1.8 1.8 0 001-1.6V11M36.2 39.2l7.9 4.4M36.2 32.2l7.9 4.4M36.2 25.1l7.9 4.4M36.2 18.1l7.9 4.4M53 39.2l-8 4.4M53 32.2l-8 4.4M53 25.1l-8 4.4M53 18.1l-8 4.4"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        id="tree"
                                    />
                                    <path
                                        d="M25.8 54.2v41.3"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        id="tree-1"
                                    />
                                    <path
                                        d="M17.5 50.7v24.8a1.8 1.8 0 001 1.6l7.3 3.5 7.4-3.5a1.8 1.8 0 001-1.6V50.7M17.5 69.1l8 4.4M17.5 62l8 4.5M17.5 55l8 4.5M34.2 69.1l-8 4.4M34.2 62l-8 4.5M34.2 55l-8 4.5"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        id="tree-1"
                                    />
                                    <path
                                        d="M63.3 54.2v41.3"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        id="tree"
                                    />
                                    <path
                                        d="M54.9 50.7v24.8a1.8 1.8 0 001 1.6l7.2 3.5 7.5-3.5a1.8 1.8 0 001-1.6V50.7M54.9 69.1l8 4.4M54.9 62l8 4.5M54.9 55l8 4.5M71.6 69.1l-7.9 4.4M71.6 62l-7.9 4.5M71.6 55l-7.9 4.5"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        id="tree"
                                    />
                                    <path
                                        d="M8.9 4.9v89.8"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        id="tree-1"
                                    />
                                    <path
                                        d="M.5.5V35a1.8 1.8 0 001 1.6l7.2 3.6 7.5-3.6a1.8 1.8 0 001-1.6V.5M.5 28.7l8 4.4M.5 21.6l8 4.4M.5 14.6l8 4.4M.5 7.5l8 4.4M17.2 28.7l-7.9 4.4M17.2 21.6L9.3 26M17.2 14.6L9.3 19M17.2 7.5L9.3 12"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        id="tree-1"
                                    />
                                    <path
                                        d="M80.2 4.9v89.8"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        id="tree-1"
                                    />
                                    <path
                                        d="M71.8.5V35a1.8 1.8 0 001 1.6l7.3 3.6 7.5-3.6a1.8 1.8 0 001-1.6V.5M71.8 28.7l8 4.4M71.8 21.6l8 4.4M71.8 14.6l8 4.4M71.8 7.5l8 4.4M88.6 28.7l-8 4.4M88.6 21.6l-8 4.4M88.6 14.6l-8 4.4M88.6 7.5l-8 4.4"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        id="tree-1"
                                    />
                                    <path
                                        d="M170 83.4a10 10 0 1010-10 10 10 0 00-10 10z"
                                        fill="none"
                                        stroke="#52777f"
                                    />
                                    <path
                                        d="M175.7 83.4a4 4 0 104-4 4 4 0 00-4 4zM127.7 57l61.5-.1a2 2 0 100-4l-63.9.2zM102 39.5h6.4a2.4 2.4 0 000-4.8H102a2.4 2.4 0 000 4.8z"
                                        fill="none"
                                        stroke="#52777f"
                                    />
                                    <path
                                        d="M127.7 57l7.3 15.3 33-.1s15.4-.8 20-15.3"
                                        fill="none"
                                        stroke="#52777f"
                                    />
                                    <path
                                        d="M180 83.4s-8-11.2-12.9-11.2"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M125.3 53s-9.7-16-14.5-16M157.7 72.2c-4.3 0-11 11.9-13.6 16.6a28 28 0 00-1.2 2.5 4.1 4.1 0 01-3.8 2.6 3.9 3.9 0 01-2.8-1 4.3 4.3 0 01-1.2-3.2V72.3"
                                        fill="none"
                                        stroke="#52777f"
                                    />
                                </svg>
                            </div>
                            <div className="o-streamer__right">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="190.1"
                                    height="104"
                                    viewBox="0 0 190.1 104"
                                >
                                    <path
                                        fill="none"
                                        stroke="#52777f"
                                        d="M105.3 103.5h84.3V46.7l-42.2-20.5-42.1 20.5v56.8z"
                                    />
                                    <path
                                        fill="none"
                                        stroke="#52777f"
                                        d="M189.6 46.7V40l-42.2-20.6L105.3 40v6.8M156.2 102.7h-17.5a1.9 1.9 0 01-1.8-1.9V74.5a1.9 1.9 0 011.8-1.8h17.5a1.9 1.9 0 011.9 1.8v26.3a1.9 1.9 0 01-2 1.9zM136.9 72.7l21.1 30M158 72.7l-21.1 30"
                                    />
                                    <path
                                        d="M147.5 44.5h0a4 4 0 00-4 4v7.8h7.9v-7.9a4 4 0 00-4-3.9zM113.2 103.5H77.9V23.2a17.6 17.6 0 0135.2 0v12.9M113.6 23.6H77.3M114 29.4H77.6"
                                        fill="none"
                                        stroke="#52777f"
                                    />
                                    <path
                                        d="M29.8 55.7a15 15 0 0030 0 14 14 0 00-.1-1.8L54 8.7a9.4 9.4 0 00-18.7 1.1L30 53.4v.8l-.1 1.5z"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        id="tree-1"
                                    />
                                    <path
                                        d="M44.8 60.8v42.5"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M.5 67.5a11.3 11.3 0 0022.7 0 10.8 10.8 0 000-1.4l-4.3-34.2a7 7 0 00-14.1.9l-4.2 33v.6a11.1 11.1 0 00-.1 1.1z"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        id="tree"
                                    />
                                    <path
                                        d="M11.8 71.3v32.2"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="o-streamer__bottom">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="121.8"
                                    height="1"
                                    viewBox="0 0 121.8 1"
                                >
                                    <path
                                        d="M0 .3h121.8"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeWidth=".5"
                                    />
                                </svg>
                            </div>
                            <h2 className="o-streamer__text">
                                Hungry stomach after activities? Taste our
                                Locally Made FarmFood!
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="u-bg-neutral--100 u-spacing-pb6">
                <div className="l-contain l-contain--wide">
                    <div className="o-vt__main o-vt__main--reversed">
                        <div className="o-vt__video">
                            <div className="c-video">
                                <div className="c-video__placeholder">
                                    <img
                                        className="u-clip-path"
                                        data-id="clip-path-image-2"
                                        loading="lazy"
                                        data-kal="slide-right"
                                        src="/img/webimgs/tray-potatoes.jpg"
                                        alt="Food Served at FunFarming Uganda"
                                        style={{ borderRadius: '20px' }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="o-vt__content s-text">
                            <h2>Hungry stomach after activities?</h2>
                            <p>
                                Complete your day with a light lunch or
                                extensive meal from our in-house caterer.
                                Crazy activities in the country air are
                                guaranteed to make you hungry.
                            </p>
                            <p>
                                Our FarmFood is prepared using fresh, organic
                                ingredients sourced directly from our farm.
                                From traditional Ugandan dishes to
                international favorites, our menu offers something for everyone.
                            </p>
                            <p>
                                <strong>
                                    You can order your favorite FarmFood after
                                    you have chosen an activity. Special dietary
                                    requirements can be accommodated with advance notice.
                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="u-bg-neutral--100 u-spacing-pb6">
                <div className="l-contain l-contain--wide">
                    <h2
                        style={{
                            textAlign: 'center',
                            fontSize: '35px',
                            fontWeight: 700,
                            marginBottom: '40px',
                            color: 'var(--garlon-text-dark, #222)',
                        }}
                    >
                        Some Of Our Breeds
                    </h2>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '25px',
                        }}
                    >
                        {foodItems.map((item, index) => (
                            <div
                                key={index}
                                className="service-card-two"
                                style={{ width: '270px' }}
                            >
                                <div className="service-card-two__inner">
                                    <div
                                        className="service-card-two__thumb"
                                        style={{
                                            height: '200px',
                                            overflow: 'hidden',
                                            border: '2px solid var(--garlon-white, #fff)',
                                            borderRadius: '15px',
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
                                        <h3
                                            className="service-card-two__title"
                                            style={{ marginTop: '15px' }}
                                        >
                                            {item.name}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="u-bg-neutral--100 u-mb-neg-slant-height u-spacing-pb6">
                <div className="l-contain l-contain--wide">
                    <div className="l-double l-double--wide l-double--reversed u-spacing-pt6">
                        <div className="l-double__left">
                            <img
                                className="u-clip-path"
                                data-id="clip-path-image-1"
                                loading="lazy"
                                data-kal="slide-left"
                                src="/img/gallery/bbq.jpg"
                                alt="BBQ at Fun Farming Uganda"
                                style={{ borderRadius: '20px', width: '100%' }}
                            />
                        </div>
                        <div className="l-double__right s-text" data-kal="slide-up">
                            <h2>BBQ + Drinks</h2>
                            <p>
                                The ideal conclusion to your team-building?
                                A delicious BBQ. You will enjoy a delightful
                                buffet with around ten dishes including
                                vegetables, pastas, potato salad, bread, and
                                sauces, and choose from eight types of meat
                                that our BBQ specialist will grill for you.
                            </p>
                            <p>
                                All you have to do is sit back, occasionally
                                visit our baker and the buffet for a fresh
                                serving. Enjoy!
                            </p>
                            <p>
                                <strong>
                                    You can reserve a barbecue for your team
                                    online after adding an activity to your
                                    schedule.
                                </strong>
                            </p>
                            <p>
                                Pricing available upon request. Veggie, halal,
                                gluten-free options available upon request.
                            </p>
                            <ul>
                                <li>Everything is prepared for you</li>
                                <li>Suitable for hearty eaters</li>
                                <li>
                                    Veggie, halal, gluten-free available upon
                                    request
                                </li>
                            </ul>
                            <Link
                                className="c-button c-button--big u-spacing-mt3"
                                href="/contact"
                            >
                                <span className="c-button__text">
                                    Book Your Activity First
                                </span>
                                <i className="c-button__icon">
                                    <svg width="7" height="10">
                                        <use href="/img/icon-arrowRight.svg#arrowRight"></use>
                                    </svg>
                                </i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="u-bg-secondary--900 u-spacing-pt6 u-spacing-pb6">
                <div className="l-contain">
                    <div className="s-text s-text--on-dark" style={{ textAlign: 'center' }}>
                        <h2>Ready to Taste FarmFood?</h2>
                        <p>
                            Book your activity and add FarmFood to your
                            schedule. Our team will ensure you have a
                            delicious meal to complement your farm
                            experience.
                        </p>
                        <Link className="c-button c-button--big u-spacing-mt3" href="/activities">
                            <span className="c-button__text">View Activities</span>
                            <i className="c-button__icon">
                                <svg width="7" height="10">
                                    <use href="/img/icon-arrowRight.svg#arrowRight"></use>
                                </svg>
                            </i>
                        </Link>
                    </div>
                </div>
            </section>

            <div className="o-availability__food-hint">
                <span>Make your bookings today!</span>
            </div>
        </>
    );
}
