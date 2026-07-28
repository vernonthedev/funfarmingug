'use client';

import Link from 'next/link';

const testimonials = [
    {
        id: 1,
        author: 'Sarah Johnson',
        role: 'HR Manager, TechCorp Uganda',
        avatar: '/img/gallery/funfarm_n10.png',
        rating: 5,
        text: "Our team-building retreat at Fun Farming Uganda was absolutely incredible! The activities were perfectly designed to bring our team closer together. The Farm Expert Games challenged us to think strategically while having fun. The farm-to-table meals were a highlight - everything was so fresh and delicious. We'll definitely be back next year!",
        date: 'March 15, 2024',
        verified: true,
    },
    {
        id: 2,
        author: 'Michael Okello',
        role: 'Family Visitor',
        avatar: '/img/gallery/funfarm_n11.png',
        rating: 5,
        text: "Took my family for a weekend getaway and we had the best time! The kids loved feeding the goats and learning about banana farming. The accommodations were comfortable and the staff went above and beyond to make us feel welcome. The BBQ dinner was amazing - best goat meat I've ever tasted!",
        date: 'February 28, 2024',
        verified: true,
    },
    {
        id: 3,
        author: 'Dr. Grace Nalwanga',
        role: 'University Lecturer, Makerere University',
        avatar: '/img/gallery/funfarm_n12.png',
        rating: 5,
        text: 'As an agriculture professor, I was impressed by the sustainable farming practices at Fun Farming Uganda. We brought our agriculture students for a field trip and they learned so much about organic farming, animal husbandry, and agro-tourism. The educational value is exceptional!',
        date: 'January 20, 2024',
        verified: true,
    },
    {
        id: 4,
        author: 'James & Rebecca',
        role: 'Couple, Birthday Celebration',
        avatar: '/img/gallery/funfarm_n13.png',
        rating: 5,
        text: "We celebrated my wife's birthday here and it was magical! The farm lounge is perfect for intimate gatherings. The staff arranged a surprise cake and decorated our table beautifully. The sunset views over the banana plantation were breathtaking. Highly recommend for special occasions!",
        date: 'December 10, 2023',
        verified: true,
    },
    {
        id: 5,
        author: 'Peter Kagimu',
        role: 'Operations Director, Green Energy Ltd',
        avatar: '/img/gallery/funfarm_n14.png',
        rating: 5,
        text: "We've hosted three corporate retreats at Fun Farming Uganda now. Each one has been better than the last. The team-building activities are expertly facilitated, the venue is stunning, and the food is consistently excellent. Our employees always come back energized and more connected.",
        date: 'November 5, 2023',
        verified: true,
    },
    {
        id: 6,
        author: 'Aisha Nakato',
        role: 'Event Planner',
        avatar: '/img/gallery/funfarm_n15.png',
        rating: 5,
        text: "As an event planner, I've worked with many venues but Fun Farming Uganda stands out. Their team is professional, flexible, and truly cares about making each event special. The Farm Lounge is a versatile space that works for both casual and formal events. Booking process is seamless.",
        date: 'October 18, 2023',
        verified: true,
    },
];

export default function ReferencesPage() {
    return (
        <>
            <div
                className="page-header"
                style={{
                    backgroundImage:
                        'url(/assets/images/backgrounds/page-header.jpg)',
                }}
            >
                <div className="container">
                    <div className="page-header__inner">
                        <h2 className="page-header__title">Customer Reviews</h2>
                        <ul className="thm-breadcrumb list-unstyled">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <span aria-hidden="true">/</span>
                            </li>
                            <li>References</li>
                        </ul>
                    </div>
                </div>
                <div className="page-header__shape-1">
                    <img
                        src="/assets/images/shapes/page-header-1-1.png"
                        alt="shape"
                    />
                </div>
                <div className="page-header__shape-2">
                    <img
                        src="/assets/images/shapes/page-header-1-2.png"
                        alt="shape"
                    />
                </div>
            </div>

            <section className="references-section section-space">
                <div className="container">
                    <div className="section-title section-title__center">
                        <span className="section-title__tagline">
                            Testimonials
                        </span>
                        <h2 className="section-title__title">
                            What Our Guests Say About Us
                        </h2>
                    </div>

                    <div className="references-grid">
                        {testimonials.map((testimonial) => (
                            <article
                                key={testimonial.id}
                                className="reference-card"
                            >
                                <div className="reference-card__header">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.author}
                                        className="reference-card__avatar"
                                    />
                                    <div className="reference-card__author">
                                        <h4 className="reference-card__name">
                                            {testimonial.author}
                                        </h4>
                                        <p className="reference-card__role">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                                <div className="reference-card__rating">
                                    {[...Array(testimonial.rating)].map(
                                        (_, i) => (
                                            <svg
                                                key={i}
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="#fbbf24"
                                                className="star-icon"
                                            >
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-.1L12 2z" />
                                            </svg>
                                        )
                                    )}
                                    {testimonial.verified && (
                                        <span className="verified-badge">
                                            Verified
                                        </span>
                                    )}
                                </div>
                                <p className="reference-card__text">
                                    "{testimonial.text}"
                                </p>
                                <div className="reference-card__footer">
                                    <time dateTime={testimonial.date}>
                                        {testimonial.date}
                                    </time>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="references-stats">
                        <div className="stat-item">
                            <span className="stat-number">4.9</span>
                            <span className="stat-label">Average Rating</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">200+</span>
                            <span className="stat-label">Happy Guests</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">98%</span>
                            <span className="stat-label">Would Recommend</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Corporate Events</span>
                        </div>
                    </div>

                    <div
                        className="cta-section"
                        style={{ textAlign: 'center', marginTop: '60px' }}
                    >
                        <h3>Ready to Create Your Own Experience?</h3>
                        <p className="u-spacing-mt2">
                            Join hundreds of satisfied guests who\'ve discovered
                            the magic of Fun Farming Uganda.
                        </p>
                        <div className="u-spacing-mt4">
                            <Link
                                href="/contact"
                                className="garlon-btn garlon-btn--large"
                            >
                                <span>Book Your Visit</span>
                                <i className="icon-angle-small-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .references-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 30px;
                    margin-top: 50px;
                }
                .reference-card {
                    background: white;
                    border-radius: 16px;
                    padding: 30px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                    transition:
                        transform 0.3s,
                        box-shadow 0.3s;
                }
                .reference-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
                }
                .reference-card__header {
                    display: flex;
                    gap: 15px;
                    margin-bottom: 20px;
                }
                .reference-card__avatar {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    object-fit: cover;
                }
                .reference-card__name {
                    margin: 0;
                    font-size: 1.1rem;
                    color: #1f292d;
                }
                .reference-card__role {
                    margin: 5px 0 0;
                    font-size: 0.85rem;
                    color: #6b7280;
                }
                .reference-card__rating {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 15px;
                }
                .star-icon {
                    flex-shrink: 0;
                }
                .verified-badge {
                    background: #2d6a4f;
                    color: white;
                    font-size: 0.7rem;
                    padding: 2px 8px;
                    border-radius: 20px;
                    font-weight: 600;
                }
                .reference-card__text {
                    font-size: 1rem;
                    line-height: 1.7;
                    color: #374151;
                    margin: 0 0 20px;
                    font-style: italic;
                }
                .reference-card__footer time {
                    font-size: 0.8rem;
                    color: #9ca3af;
                }
                .references-stats {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 30px;
                    margin-top: 60px;
                    padding-top: 40px;
                    border-top: 1px solid #e5e7eb;
                }
                .stat-item {
                    text-align: center;
                }
                .stat-number {
                    display: block;
                    font-size: 3rem;
                    font-weight: 800;
                    color: #2d6a4f;
                    line-height: 1;
                }
                .stat-label {
                    display: block;
                    margin-top: 8px;
                    color: #6b7280;
                    font-size: 0.95rem;
                }
                .cta-section h3 {
                    font-size: 2rem;
                    color: #1f292d;
                    margin: 0;
                }
                .cta-section p {
                    font-size: 1.1rem;
                    color: #6b7280;
                }
            `}</style>
        </>
    );
}
