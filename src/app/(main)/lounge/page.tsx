'use client';

import Link from 'next/link';

export default function LoungePage() {
    return (
        <>
            <section className="page-header">
                <div
                    className="page-header__bg"
                    style={{
                        backgroundImage: 'url(/img/gallery/funfarm_n26.png)',
                    }}
                ></div>
                <div className="container">
                    <h2 className="page-header__title">Farm Lounge</h2>
                    <ul className="garlon-breadcrumb list-unstyled">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <span>Farm Lounge</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="l-main u-bg-neutral--100 u-spacing-pt6 u-spacing-pb6">
                <div className="l-contain l-contain--wide">
                    <div className="l-double l-double--wide">
                        <div className="l-double__left">
                            <img
                                className="u-clip-path"
                                loading="lazy"
                                data-id="clip-path-image-1"
                                data-kal="slide-left"
                                src="/webimgs/fun-farm-image.jpg"
                                alt="Farm Lounge at Fun Farming Uganda"
                                style={{ borderRadius: '20px', width: '100%' }}
                            />
                        </div>
                        <div className="l-double__right s-text" data-kal="slide-up">
                            <div
                                style={{
                                    display: 'inline-block',
                                    padding: '6px 18px',
                                    borderRadius: '30px',
                                    backgroundColor: 'var(--garlon-base, #209D2F)',
                                    color: '#fff',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    marginBottom: '15px',
                                }}
                            >
                                Five Star Housing
                            </div>
                            <h2>Our Lounge Facilities</h2>
                            <p>
                                Our Farm Lounge offers a serene relaxation sanctuary
                                where guests can unwind after a day of farm activities.
                                Enjoy the peaceful countryside atmosphere, comfortable
                                accommodations, and the warm hospitality of our farm.
                            </p>
                            <p>
                                Whether you are looking to escape the hustle of the city
                                or need a quiet place to reflect, the Farm Lounge provides
                                the perfect setting. Our facilities include comfortable
                                indoor and outdoor seating, complimentary WiFi,
                                refreshments, and clean restrooms.
                            </p>
                            <p>
                                <strong>
                                    The Farm Lounge can also be booked for private events,
                                    meetings, workshops, and celebrations. Contact us for
                                    availability and pricing.
                                </strong>
                            </p>
                            <Link className="c-button c-button--big u-spacing-mt3" href="/contact">
                                <span className="c-button__text">Book the Farm Lounge</span>
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

            <section className="u-bg-neutral--100 u-mb-neg-slant-height u-spacing-pb6">
                <div className="l-contain">
                    <div className="s-text" data-kal="slide-up">
                        <h2>Relax and Recharge</h2>
                        <p>
                            After an exciting day of farm activities, there is no better
                            place to unwind than the Farm Lounge. Sit back with a
                            refreshing drink, enjoy the view of our lush green fields,
                            and let the calm of the countryside refresh your spirit.
                        </p>
                        <p>
                            Our Farm Lounge is designed with your comfort in mind. From
                            the cozy seating areas to the scenic outdoor terrace, every
                            detail has been curated to ensure you have a relaxing and
                            memorable stay at Fun Farming Uganda.
                        </p>
                        <p>
                            Open daily from 8:00 AM to 6:00 PM. Extended hours available
                            for booked events.
                        </p>
                    </div>
                </div>
            </section>

            <section className="u-bg-secondary--900 u-spacing-pt6 u-spacing-pb6">
                <div className="l-contain">
                    <div className="s-text s-text--on-dark" style={{ textAlign: 'center' }}>
                        <h2>Make Your Booking Today</h2>
                        <p>
                            Contact us to check availability and discuss your event
                            requirements. We look forward to welcoming you to the
                            Farm Lounge!
                        </p>
                        <Link className="c-button c-button--big u-spacing-mt3" href="/contact">
                            <span className="c-button__text">Contact Us</span>
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
