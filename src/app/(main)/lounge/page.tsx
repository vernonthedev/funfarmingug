'use client';

import Link from 'next/link';

export default function LoungePage() {
    return (
        <>
            <div className="l-main">
                <div className="o-imagebanner">
                    <img
                        src="/img/gallery/funfarm_n26.png"
                        alt="Farm Lounge Header Image"
                    />
                </div>

                <div className="o-faq">
                    <div className="o-faq__intro">
                        <h1 className="o-faq__title">Farm Lounge</h1>
                        <div className="o-faq__description s-text">
                            <p>
                                Relax and unwind at our Farm Lounge. Enjoy
                                refreshments, comfortable seating, and beautiful
                                views of the farm.
                            </p>
                        </div>
                    </div>

                    <div className="o-faq__grid js-faq">
                        <div className="o-faq__main">
                            <div className="o-questions u-mb-neg-slant-height">
                                <div className="o-questions__top u-overflow-hidden">
                                    <svg
                                        className="u-slant"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 1440 96"
                                    >
                                        <polygon
                                            points="-1 1 1440 96 1440 106 -1 106 -1 96"
                                            style={{ fill: 'currentColor' }}
                                        />
                                    </svg>
                                </div>
                                <div className="o-questions__main">
                                    <div
                                        className="o-questions__left"
                                        style={{ width: '100%' }}
                                    >
                                        <div className="c-faq">
                                            <h2 className="c-faq__title">
                                                <span>
                                                    Farm Lounge Facilities
                                                </span>
                                                <span className="c-faq__icon">
                                                    <svg width="64" height="45">
                                                        <use href="/img/icon-cow--question.svg#cow--question"></use>
                                                    </svg>
                                                </span>
                                            </h2>
                                            <ul className="c-faq__list js-toggle">
                                                <li className="c-faq__item">
                                                    <h3 className="c-faq__question js-toggle-switch">
                                                        What facilities are
                                                        available at the Farm
                                                        Lounge?
                                                    </h3>
                                                    <div
                                                        className="c-faq__answer s-text js-toggle-content"
                                                        hidden
                                                    >
                                                        <p>
                                                            Our Farm Lounge
                                                            offers comfortable
                                                            indoor and outdoor
                                                            seating, WiFi,
                                                            refreshments, clean
                                                            restrooms, and
                                                            beautiful views of
                                                            the farm landscape.
                                                            It's the perfect
                                                            place to relax
                                                            before or after
                                                            activities.
                                                        </p>
                                                    </div>
                                                </li>
                                                <li className="c-faq__item">
                                                    <h3 className="c-faq__question js-toggle-switch">
                                                        Is the Farm Lounge
                                                        available for private
                                                        events?
                                                    </h3>
                                                    <div
                                                        className="c-faq__answer s-text js-toggle-content"
                                                        hidden
                                                    >
                                                        <p>
                                                            Yes, the Farm Lounge
                                                            can be booked for
                                                            private events such
                                                            as meetings,
                                                            workshops,
                                                            celebrations, or
                                                            corporate
                                                            gatherings. Contact
                                                            us for availability
                                                            and pricing.
                                                        </p>
                                                    </div>
                                                </li>
                                                <li className="c-faq__item">
                                                    <h3 className="c-faq__question js-toggle-switch">
                                                        What are the operating
                                                        hours?
                                                    </h3>
                                                    <div
                                                        className="c-faq__answer s-text js-toggle-content"
                                                        hidden
                                                    >
                                                        <p>
                                                            The Farm Lounge is
                                                            open daily from 8:00
                                                            AM to 6:00 PM during
                                                            farm operating
                                                            hours. Extended
                                                            hours may be
                                                            available for booked
                                                            events.
                                                        </p>
                                                    </div>
                                                </li>
                                                <li className="c-faq__item">
                                                    <h3 className="c-faq__question js-toggle-switch">
                                                        Is there WiFi available?
                                                    </h3>
                                                    <div
                                                        className="c-faq__answer s-text js-toggle-content"
                                                        hidden
                                                    >
                                                        <p>
                                                            Yes, complimentary
                                                            WiFi is available
                                                            throughout the Farm
                                                            Lounge area for all
                                                            guests.
                                                        </p>
                                                    </div>
                                                </li>
                                                <li className="c-faq__item">
                                                    <h3 className="c-faq__question js-toggle-switch">
                                                        Can we bring our own
                                                        food and drinks?
                                                    </h3>
                                                    <div
                                                        className="c-faq__answer s-text js-toggle-content"
                                                        hidden
                                                    >
                                                        <p>
                                                            Outside food and
                                                            drinks are not
                                                            permitted in the
                                                            Farm Lounge. We
                                                            offer a variety of
                                                            refreshments and
                                                            snacks from our Farm
                                                            Kitchen. Special
                                                            dietary requirements
                                                            can be accommodated
                                                            with advance notice.
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="o-faq__suggest">
                                <div className="c-suggest">
                                    <h3 className="c-suggest__title">
                                        Want to book the Farm Lounge?
                                    </h3>
                                    <p className="c-suggest__content">
                                        Contact us to check availability and
                                        discuss your event requirements.
                                    </p>
                                    <div className="c-suggest__action">
                                        <Link
                                            href="/contact"
                                            className="c-text-button"
                                        >
                                            <span className="c-text-button__text">
                                                Contact Us
                                            </span>
                                            <i className="c-text-button__icon">
                                                <svg width="7" height="10">
                                                    <use href="/img/icon-arrowRight.svg#arrowRight"></use>
                                                </svg>
                                            </i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
