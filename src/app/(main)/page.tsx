'use client';

import Link from 'next/link';

export default function HomePage() {
    return (
        <>
            {/* Hero Slider */}
            <section className="o-hero o-hero--main" data-kal="slide-up">
                <div className="o-hero__main">
                    <div className="o-hero__video">
                        <div className="c-video">
                            <div className="c-video__placeholder">
                                <div
                                    className="c-video__iframe js-youtube-player"
                                    data-youtube-link="https://www.youtube.com/embed/VIDEO_ID"
                                    data-auto-play="1"
                                    data-disable-kb="1"
                                    data-controls="0"
                                    data-loop="1"
                                    id="home-hero-video"
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className="o-hero__title-area">
                        <h1 className="o-hero__title">
                            Welcome to Fun Farming Uganda
                            <br />
                            Where Agriculture Meets Adventure!
                            <br />
                        </h1>
                        <Link className="c-button" href="/activities">
                            <span className="c-button__text">
                                View Activities
                            </span>
                        </Link>
                        <div className="o-hero__rating">
                            <a
                                className="c-rating c-rating--boxed"
                                target="_blank"
                                href="#"
                                rel="noopener noreferrer"
                            >
                                <div className="c-rating__stars">
                                    <span className="c-star c-star--full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                        >
                                            <g fill="none" fillRule="evenodd">
                                                <path
                                                    fill="#e9ebf5"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97l3.669-3.178a1 1 0 0 0-.57-1.752l-4.829-.41-1.89-4.458a1 1 0 0 0-1.84 0L9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z"
                                                />
                                                <path
                                                    className="full-star"
                                                    fill="currentColor"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97l3.669-3.178a1 1 0 0 0-.57-1.752l-4.829-.41-1.89-4.458a1 1 0 0 0-1.84 0L9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z"
                                                />
                                                <path
                                                    className="half-star"
                                                    fill="none"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97 9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z"
                                                />
                                            </g>
                                        </svg>
                                    </span>
                                    <span className="c-star c-star--full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                        >
                                            <g fill="none" fillRule="evenodd">
                                                <path
                                                    fill="#e9ebf5"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97l3.669-3.178a1 1 0 0 0-.57-1.752l-4.829-.41-1.89-4.458a1 1 0 0 0-1.84 0L9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z"
                                                />
                                                <path
                                                    className="full-star"
                                                    fill="currentColor"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97l3.669-3.178a1 1 0 0 0-.57-1.752l-4.829-.41-1.89-4.458a1 1 0 0 0-1.84 0L9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z"
                                                />
                                                <path
                                                    className="half-star"
                                                    fill="none"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97 9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z"
                                                />
                                            </g>
                                        </svg>
                                    </span>
                                    <span className="c-star c-star--full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                        >
                                            <g fill="none" fillRule="evenodd">
                                                <path
                                                    fill="#e9ebf5"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97l3.669-3.178a1 1 0 0 0-.57-1.752l-4.829-.41-1.89-4.458a1 1 0 0 0-1.84 0L9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z"
                                                />
                                                <path
                                                    className="full-star"
                                                    fill="currentColor"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97l3.669-3.178a1 1 0 0 0-.57-1.752l-4.829-.41-1.89-4.458a1 1 0 0 0-1.84 0L9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z"
                                                />
                                                <path
                                                    className="half-star"
                                                    fill="none"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97 9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z"
                                                />
                                            </g>
                                        </svg>
                                    </span>
                                    <span className="c-star c-star--full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                        >
                                            <g fill="none" fillRule="evenodd">
                                                <path
                                                    fill="#e9ebf5"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97l3.669-3.178a1 1 0 0 0-.57-1.752l-4.829-.41-1.89-4.458a1 1 0 0 0-1.84 0L9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z"
                                                />
                                                <path
                                                    className="full-star"
                                                    fill="currentColor"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97l3.669-3.178a1 1 0 0 0-.57-1.752l-4.829-.41-1.89-4.458a1 1 0 0 0-1.84 0L9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z"
                                                />
                                                <path
                                                    className="half-star"
                                                    fill="none"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97 9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z"
                                                />
                                            </g>
                                        </svg>
                                    </span>
                                    <span className="c-star c-star--half">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                        >
                                            <g fill="none" fillRule="evenodd">
                                                <path
                                                    fill="#e9ebf5"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97l3.669-3.178a1 1 0 0 0-.57-1.752l-4.829-.41-1.89-4.458a1 1 0 0 0-1.84 0L9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z"
                                                />
                                                <path
                                                    className="full-star"
                                                    fill="currentColor"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97l3.669-3.178a1 1 0 0 0-.57-1.752l-4.829-.41-1.89-4.458a1 1 0 0 0-1.84 0L9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z"
                                                />
                                                <path
                                                    className="half-star"
                                                    fill="none"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97 9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z"
                                                />
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                                <span className="c-rating__score">
                                    <span className="c-rating__points">
                                        9.4
                                    </span>
                                    <span className="c-rating__max">/ 10</span>
                                </span>
                                <span className="c-rating__reviews">
                                    195 reviews
                                </span>
                                <span className="c-rating__platform">
                                    via Google
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @media only screen and (max-width: 600px) {
                    .o-certainties__badge img {
                        max-width: 100%;
                        height: auto;
                    }
                }
            `}</style>

            {/* Certainties Section */}
            <div className="u-slant-top u-mb-neg-slant-height u-bg-primary--500">
                <div className="l-contain o-component-area__component">
                    <div className="o-certainties" data-kal="slide-up">
                        <figure className="o-certainties__badge">
                            <img
                                src="/img/logo.png"
                                alt="Fun Farming Uganda"
                                style={{ width: '100%' }}
                                width="400"
                                height="400"
                            />
                        </figure>
                        <div>
                            <h2 className="o-certainties__heading">
                                "Discover the joy of team events at our farm
                                oasis!
                            </h2>
                            <ul className="u-list--clean">
                                <li className="o-certainties__list-item">
                                    Everyone&apos;s invited to a day of laughter
                                    and connection.
                                </li>
                                <li className="o-certainties__list-item">
                                    Unleash the fun with well-organized
                                    activities that guarantee maximum enjoyment.
                                </li>
                                <li className="o-certainties__list-item">
                                    Connect, learn, and share unforgettable
                                    moments with a community of enthusiasts.
                                </li>
                                <li className="o-certainties__list-item">
                                    Our exciting activities are led by
                                    passionate staff, making every moment a
                                    memorable experience.
                                </li>
                                <li className="o-certainties__list-item">
                                    Expect the unexpected - we always go the
                                    extra mile to make your day extraordinary.
                                </li>
                                <li className="o-certainties__list-item">
                                    Any hiccups along the way? We&apos;ve got
                                    you covered – we&apos;re here to fix them!
                                </li>
                                <li className="o-certainties__list-item">
                                    Delight in the flavors of local Ugandan farm
                                    cuisine, a culinary adventure for your taste
                                    buds.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="u-slant-top-reversed u-mt-neg-slant-height u-bg-neutral--0"></div>

            {/* Video Text Section */}
            <div
                id="component-item-2"
                data-type="videoText"
                className="u-mb-neg-slant-height u-slant-top"
            >
                <div
                    className="o-component-area__component l-contain l-contain--wide"
                    style={{ marginBottom: '30px' }}
                >
                    <div className="o-vt__main">
                        <div className="o-vt__video">
                            <div className="c-video">
                                <div className="c-video__placeholder">
                                    <div>
                                        <img
                                            src="/img/home/team-building2.jpg"
                                            alt="Fun farm games being played at Fun Farming Uganda"
                                            style={{ borderRadius: '20px' }}
                                            className="u-clip-path"
                                            loading="lazy"
                                            data-id="clip-path-image-3"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="o-vt__content s-text">
                            <h2>Thrilling Activities Await!</h2>
                            <p>
                                Embark on a journey of excitement with our
                                diverse range of activities.
                                <br />
                                <br />
                                Whether it&apos;s picking fresh produce, joining
                                workshops, or participating in seasonal events,
                                there&apos;s always something for everyone at
                                Fun Farming Uganda.
                            </p>
                            <Link
                                className="c-button c-button--big"
                                href="/activities"
                            >
                                <span className="c-button__text">
                                    View More!
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
            </div>

            {/* Text Image Section - David */}
            <div
                id="component-item-5"
                data-type="textImage"
                className="u-mb-neg-slant-height u-slant-top"
            >
                <div className="o-component-area__component l-contain l-contain--wide">
                    <div className="l-double l-double--wide l-double--reversed u-spacing-pt6">
                        <div className="l-double__left">
                            <img
                                className="u-clip-path"
                                loading="lazy"
                                data-id="clip-path-image-1"
                                width="50%"
                                data-kal="slide-left"
                                src="/img/webimgs/david-holding-goat.jpg"
                                alt="Farmer David holding a farm goat"
                                style={{ borderRadius: '20px' }}
                            />
                        </div>
                        <div
                            className="l-double__right s-text"
                            data-kal="slide-up"
                        >
                            <h2>Moo towards us for customized advice</h2>
                            <p>
                                Gathering the horns? Our cow-league David is
                                ready to advise you so that you'll reap applause
                                for this team-building.
                            </p>
                            <p>
                                <strong>Easily schedule a conversation</strong>{' '}
                                and feel the Cowzy Farm Vibes roaring through
                                your herd.
                            </p>
                            <a
                                className="c-button c-button--big"
                                href="https://www.calendly.com/farmfun/kennismakingsgesprek-teambuilding-farmfun?back=1&month=2023-02"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="c-button__text">
                                    Schedule Conversation
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial Logos */}
            <div
                id="component-item-6"
                data-type="testimonialLogos"
                className="u-mb-neg-slant-height u-slant-top"
            >
                <div
                    className="o-component-area__component l-contain"
                    style={{ height: '200px' }}
                >
                    <div className="o-testimonial">
                        <div
                            className="c-customer-logo-slider c-logos js-customer-logo-slider"
                            data-has-swipe-events="true"
                        >
                            <div className="c-customer-logo-slider__container js-customer-logo-slide-container">
                                <div
                                    className="c-customer-logo-slider__item c-customer-logo-slider__item--position-1 js-customer-logo-slide"
                                    data-slide-id="0"
                                    data-logo-id="1033"
                                >
                                    <div
                                        className="c-customer-logo-slider__logo"
                                        style={{
                                            backgroundImage:
                                                "url('/img/partners/fao-logo.svg')",
                                        }}
                                    ></div>
                                </div>
                                <div
                                    className="c-customer-logo-slider__item c-customer-logo-slider__item--position-2 js-customer-logo-slide"
                                    data-slide-id="1"
                                    data-logo-id="1034"
                                >
                                    <div
                                        className="c-customer-logo-slider__logo"
                                        style={{
                                            backgroundImage:
                                                "url('/img/partners/unfe.png')",
                                        }}
                                    ></div>
                                </div>
                                <div
                                    className="c-customer-logo-slider__item c-customer-logo-slider__item--position-3 js-customer-logo-slide"
                                    data-slide-id="2"
                                    data-logo-id="1035"
                                >
                                    <div
                                        className="c-customer-logo-slider__logo"
                                        style={{
                                            backgroundImage:
                                                "url('/img/partners/unyfa.png')",
                                        }}
                                    ></div>
                                </div>
                                <div
                                    className="c-customer-logo-slider__item c-customer-logo-slider__item--position-4 js-customer-logo-slide"
                                    data-slide-id="3"
                                    data-logo-id="1036"
                                >
                                    <div
                                        className="c-customer-logo-slider__logo"
                                        style={{
                                            backgroundImage:
                                                "url('/img/partners/fao-logo.svg')",
                                        }}
                                    ></div>
                                </div>
                                <div
                                    className="c-customer-logo-slider__item c-customer-logo-slider__item--position-5 js-customer-logo-slide"
                                    data-slide-id="4"
                                    data-logo-id="1037"
                                >
                                    <div
                                        className="c-customer-logo-slider__logo"
                                        style={{
                                            backgroundImage:
                                                "url('/img/partners/unfe.png')",
                                        }}
                                    ></div>
                                </div>
                                <div
                                    className="c-customer-logo-slider__item is-hidden js-customer-logo-slide"
                                    data-slide-id="5"
                                    data-logo-id="1038"
                                >
                                    <div
                                        className="c-customer-logo-slider__logo"
                                        style={{
                                            backgroundImage:
                                                "url('/img/partners/fao-logo.svg')",
                                        }}
                                    ></div>
                                </div>
                                <div
                                    className="c-customer-logo-slider__item is-hidden js-customer-logo-slide"
                                    data-slide-id="6"
                                    data-logo-id="1039"
                                >
                                    <div
                                        className="c-customer-logo-slider__logo"
                                        style={{
                                            backgroundImage:
                                                "url('/img/partners/fao-logo.svg')",
                                        }}
                                    ></div>
                                </div>
                                <div
                                    className="c-customer-logo-slider__item is-hidden js-customer-logo-slide"
                                    data-slide-id="7"
                                    data-logo-id="1040"
                                >
                                    <div
                                        className="c-customer-logo-slider__logo"
                                        style={{
                                            backgroundImage:
                                                "url('/img/partners/unfe.png')",
                                        }}
                                    ></div>
                                </div>
                                <div className="c-customer-logo-slider__placeholder"></div>
                            </div>
                            <button
                                className="c-customer-logo-slider__button previous js-slider-button"
                                title="Previous"
                            >
                                <svg width="7" height="10">
                                    <use href="/img/icon-arrowLeft.svg#arrowLeft"></use>
                                </svg>
                            </button>
                            <button
                                className="c-customer-logo-slider__button next js-slider-button"
                                title="Next"
                            >
                                <svg width="7" height="10">
                                    <use href="/img/icon-arrowRight.svg#arrowRight"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Button Component */}
            <div
                id="component-item-8"
                data-type="button"
                className="u-mb-neg-slant-height u-slant-top"
            >
                <div className="o-component-area__component l-contain">
                    <div className="o-button-component o-button-component--align-center">
                        <h2 className="u-spacing-mb2">
                            Create your ideal team-building event
                        </h2>
                        <div className="u-spacing-mb2">
                            <p>
                                Choose your ideal activity, add catering, check
                                availability, instantly generate your quote, or
                                book online. We&apos;ll get the exact number of
                                participants later.
                            </p>
                        </div>
                        <Link
                            className="c-button u-spacing-mb8"
                            href="/activities"
                        >
                            <span className="c-button__text">
                                View Our Activities
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Locations Section */}
            <div
                id="component-item-9"
                data-type="locations"
                className="u-mb-neg-slant-height u-slant-top"
            >
                <div className="o-component-area__component">
                    <div className="o-locations js-locations o-locations--slant">
                        <div className="o-locations__intro">
                            <div
                                className="s-text u-spacing-pt8"
                                data-kal="slide-up"
                            >
                                <h2 className="">
                                    There&apos;s always a FarmFun near you
                                </h2>
                                <p>
                                    Fun Farm is located in Uganda and deeply
                                    rooted in the Butalangu province, Nakaseke
                                    District, who rules the roost at each of the
                                    farms? Our dairy cows! While they watch the
                                    hilarious antics of you and your cow-leagues
                                    or friends, our Chief Executive Farmers and
                                    game leaders provide you with a farmtastic
                                    day.
                                </p>
                                <h3>our location</h3>
                                <ul className="o-locations__list">
                                    <li className="o-locations__list-item">
                                        <button
                                            data-location-id="1"
                                            className="o-locations__list-item-button js-locations-list-item"
                                        >
                                            FunFarm Nakaseke (UG)
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="u-spacing-mt8" data-kal="slide-up">
                                <div className="c-map">
                                    <img
                                        className="c-map__background"
                                        loading="lazy"
                                        src="/img/locations/Nakaseke_District_in_Uganda.svg.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="o-locations__cards js-locations-cards"
                            data-kal="slide-up"
                        >
                            <div
                                hidden
                                className="o-locations__card hidden js-locations-card"
                                data-location-id="1"
                            >
                                <img
                                    className="o-locations__card-image u-clip-path"
                                    loading="lazy"
                                    data-id="clip-path-image-3"
                                    src="/img/webimgs/fun-farm-image.jpg"
                                    alt=""
                                />
                                <div className="o-locations__card-content">
                                    <div className="o-locations__card-left">
                                        <h3 className="o-locations__card-title">
                                            Fun Farming Buffet
                                        </h3>
                                        <p className="s-text s-text--on-dark">
                                            For fantastic team-building events,
                                            bachelor/bachelorette parties, and
                                            Ugandan hospitality, you're at the
                                            right place on the farm of Fun Farm
                                            Uganda
                                        </p>
                                        <Link
                                            className="c-button u-spacing-mt3"
                                            href="/contact"
                                        >
                                            <span className="c-button__text">
                                                Discover this location
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="o-locations__card-right s-text s-text--on-dark">
                                        <strong className="">
                                            Activities offered:
                                        </strong>
                                        <ul>
                                            <li>Team Building</li>
                                            <li>Farm Activities</li>
                                            <li>Farm Visits</li>
                                            <li>Farm Kitchen</li>
                                            <li>Kids&apos; Parties</li>
                                            <li>Farm Camps</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Button Component 2 */}
            <div
                id="component-item-10"
                data-type="button"
                className="u-mb-neg-slant-height u-slant-top"
            >
                <div className="o-component-area__component l-contain">
                    <div className="o-button-component o-button-component--align-center">
                        <h2 className="u-spacing-mb2">
                            Take the bull by the horns!
                        </h2>
                        <Link
                            className="c-button u-spacing-mb8"
                            href="/activities"
                        >
                            <span className="c-button__text">
                                To all activities
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* USPs Section */}
            <div
                id="component-item-11"
                data-type="usps"
                className="u-mb-neg-slant-height u-slant-top u-bg-primary--500"
            >
                <div className="o-component-area__component l-contain">
                    <div className="o-usp-row" data-kal="slide-up">
                        <ul className="o-usp-row__list">
                            <li className="o-usp-row__item">
                                <i className="o-usp-row__icon">
                                    <svg width="56" height="56">
                                        <use href="/img/usp/marker.svg#marker"></use>
                                    </svg>
                                </i>
                                <p className="o-usp-row__label">
                                    Have Fun
                                    <br />
                                    <strong>always close by</strong>
                                </p>
                            </li>
                            <li className="o-usp-row__item">
                                <i className="o-usp-row__icon">
                                    <svg width="56" height="56">
                                        <use href="/img/usp/calendar.svg#calendar"></use>
                                    </svg>
                                </i>
                                <p className="o-usp-row__label">
                                    Imagine Yourself
                                    <strong>
                                        ideal
                                        <br />
                                        event
                                    </strong>
                                    together
                                </p>
                            </li>
                            <li className="o-usp-row__item">
                                <i className="o-usp-row__icon">
                                    <svg width="56" height="56">
                                        <use href="/img/usp/trees.svg#trees"></use>
                                    </svg>
                                </i>
                                <p className="o-usp-row__label">
                                    Minimum
                                    <br />
                                    <strong>mid</strong>
                                    impact
                                </p>
                            </li>
                            <li className="o-usp-row__item">
                                <i className="o-usp-row__icon">
                                    <svg width="56" height="56">
                                        <use href="/img/usp/people.svg#people"></use>
                                    </svg>
                                </i>
                                <p className="o-usp-row__label">
                                    For thinkers and doers,
                                    <br />
                                    <strong>young and less young</strong>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
