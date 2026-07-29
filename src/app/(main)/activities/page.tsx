'use client';

import Link from 'next/link';

export default function ActivitiesPage() {
    return (
        <>
            <section className="page-header">
                <div
                    className="page-header__bg"
                    style={{
                        backgroundImage: 'url(/img/gallery/funfarm_n27.png)',
                    }}
                ></div>
                <div className="container">
                    <h2 className="page-header__title">Activities</h2>
                    <ul className="garlon-breadcrumb list-unstyled">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <span>Activities</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="l-main u-bg-neutral--100 u-spacing-pt6 u-spacing-pb6">
                <div className="l-contain">
                    <div className="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
                        {[
                            {
                                title: 'Board Games',
                                desc: 'Engage in exciting board games that blend fun with strategy. Perfect for groups looking to enjoy friendly competition in a relaxed farm setting.',
                                icon: (
                                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <rect x="2" y="2" width="20" height="20" rx="3" />
                                        <line x1="6" y1="6" x2="18" y2="6" />
                                        <line x1="6" y1="10" x2="18" y2="10" />
                                        <line x1="6" y1="14" x2="18" y2="14" />
                                        <line x1="6" y1="18" x2="10" y2="18" />
                                    </svg>
                                ),
                            },
                            {
                                title: 'Farm Kitchen',
                                desc: 'Experience the taste of Uganda with our farm-to-table kitchen. Learn to prepare local dishes using fresh organic produce straight from our farm.',
                                icon: (
                                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                                        <line x1="3" y1="6" x2="21" y2="6" />
                                        <path d="M16 10a4 4 0 01-8 0" />
                                    </svg>
                                ),
                            },
                            {
                                title: 'Team Building',
                                desc: 'Strengthen your herd with our farm-tastic team-building activities. Collaborative challenges designed to boost communication and team spirit.',
                                icon: (
                                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                                        <circle cx="17" cy="7" r="4" />
                                        <path d="M21 21v-2a4 4 0 00-4-4" />
                                    </svg>
                                ),
                            },
                            {
                                title: 'Farm Lounge',
                                desc: 'Unwind in our serene Farm Lounge after a day of activities. Comfortable seating, refreshments, and panoramic views of the countryside.',
                                icon: (
                                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                        <polyline points="9 22 9 12 15 12 15 22" />
                                    </svg>
                                ),
                            },
                        ].map((activity, index) => (
                            <div key={index} className="service-card-two" style={{ width: '270px' }}>
                                <div className="service-card-two__inner">
                                    <div className="service-card-two__icon">
                                        {activity.icon}
                                    </div>
                                    <div className="service-card-two__content">
                                        <h3 className="service-card-two__title">
                                            {activity.title}
                                        </h3>
                                        <p className="service-card-two__text">
                                            {activity.desc}
                                        </p>
                                    </div>
                                    <div className="service-card-two__btn">
                                        <Link href="/activities">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="u-bg-neutral--100 u-spacing-pb6">
                <div className="l-contain">
                    <div className="l-double l-double--wide u-spacing-pt6">
                        <div className="l-double__right s-text" data-kal="slide-up">
                            <h2>Plan Your Visit</h2>
                            <p>
                                Planning a visit to Fun Farming Uganda is easy and exciting.
                                Whether you are coming with colleagues, friends, or family,
                                we offer a range of activities that guarantee laughter,
                                learning, and lasting memories.
                            </p>
                            <p>
                                Our farm is located in Butalangu Town Council, Nakaseke
                                District, and is accessible by road. We recommend booking
                                in advance to secure your preferred date and activities.
                            </p>
                            <p>
                                <strong>
                                    Minimum group size is 10 participants. Not sure yet?
                                    You can provide the exact number of participants later.
                                </strong>
                            </p>
                            <Link className="c-button c-button--big u-spacing-mt3" href="/contact">
                                <span className="c-button__text">Plan Your Visit</span>
                                <i className="c-button__icon">
                                    <svg width="7" height="10">
                                        <use href="/img/icon-arrowRight.svg#arrowRight"></use>
                                    </svg>
                                </i>
                            </Link>
                        </div>
                        <div className="l-double__left">
                            <img
                                className="u-clip-path"
                                loading="lazy"
                                data-id="clip-path-image-2"
                                data-kal="slide-right"
                                src="/img/home/team-building2.jpg"
                                alt="Team building at Fun Farming Uganda"
                                style={{ borderRadius: '20px', width: '100%' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-one u-bg-secondary--900 u-spacing-pb6">
                <div className="l-contain">
                    <div className="cta-one__inner">
                        <div className="cta-one__call">
                            <div className="cta-one__call__icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="cta-one__call__title">
                                    Request Information
                                </h3>
                                <p className="cta-one__call__link">
                                    <a href="tel:+256772826680">+256 772 826 680</a>
                                    <span>or</span>
                                    <a href="mailto:support@funfarminguganda.com">support@funfarminguganda.com</a>
                                </p>
                            </div>
                        </div>
                        <div className="cta-one__btn">
                            <Link href="/contact" className="garlon-btn">
                                <span>Contact Us</span>
                                <i>
                                    <svg width="7" height="10">
                                        <use href="/img/icon-arrowRight.svg#arrowRight"></use>
                                    </svg>
                                </i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="u-bg-neutral--100 u-mb-neg-slant-height u-spacing-pt6 u-spacing-pb6">
                <div className="l-contain l-contain--wide">
                    <div className="l-double l-double--wide l-double--reversed">
                        <div className="l-double__left">
                            <img
                                className="u-clip-path"
                                loading="lazy"
                                data-id="clip-path-image-1"
                                data-kal="slide-left"
                                src="/webimgs/fun-farm-image.jpg"
                                alt="Tourists from Germany at Fun Farming Uganda"
                                style={{ borderRadius: '20px', width: '100%' }}
                            />
                        </div>
                        <div className="l-double__right s-text" data-kal="slide-up">
                            <h2>Visitors from Around the World</h2>
                            <p>
                                We have hosted tourists from Germany and across the globe
                                who come to experience the unique blend of agriculture and
                                adventure that Fun Farming Uganda offers. Our team-building
                                activities are particularly popular among international
                                visitors looking for an authentic Ugandan farm experience.
                            </p>
                            <p>
                                From navigating our obstacle courses to participating in
                                farm games, guests leave with unforgettable memories and
                                a deeper appreciation for sustainable farming.
                            </p>
                            <Link className="c-button c-button--big" href="/contact">
                                <span className="c-button__text">Book Your Experience</span>
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

            <div className="o-availability__food-hint">
                <span>Make your bookings today!</span>
            </div>
        </>
    );
}
