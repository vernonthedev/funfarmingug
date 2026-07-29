'use client';

import Link from 'next/link';

const reviews = [
    {
        name: 'Lieve',
        rating: 5,
        date: 'March 10, 2024',
        text: 'Super fun! Fun Farming is a very beautiful and quiet environment. You can enjoy yourself with friends and family. The farm is well maintained and the staff are friendly and welcoming.',
    },
    {
        name: 'Matovu Divo',
        rating: 5,
        date: 'February 22, 2024',
        text: 'The place to be. I had an amazing time with my colleagues. The team-building activities were engaging and the farm setting is absolutely beautiful.',
    },
    {
        name: 'Nantume Mariam',
        rating: 4,
        date: 'January 15, 2024',
        text: 'Good place for team building activities. The games were well organized and the facilitators were professional. Would definitely recommend for corporate groups.',
    },
    {
        name: 'Lawrence Kivumbi',
        rating: 4,
        date: 'December 5, 2023',
        text: 'Fun Farming offers great adventure and exploration. The farm games are exciting and the environment is refreshing. A perfect getaway from the city.',
    },
    {
        name: 'Jessy Evans',
        rating: 4,
        date: 'November 18, 2023',
        text: 'Good place to have fun. The activities are well thought out and suitable for all ages. The farm food is delicious and fresh.',
    },
    {
        name: 'Sarah Nakamya',
        rating: 5,
        date: 'October 30, 2023',
        text: 'An unforgettable experience! The Farm Expert Games challenged us in the best way possible. Great for team bonding and the hospitality was top notch.',
    },
    {
        name: 'Paul Ssempijja',
        rating: 5,
        date: 'September 14, 2023',
        text: 'Excellent farm experience. The goat breeding section is fascinating and the banana plantation is beautiful. A wonderful place to learn about sustainable farming.',
    },
    {
        name: 'Diana Nansubuga',
        rating: 4,
        date: 'August 25, 2023',
        text: 'Very nice environment for outdoor activities. The staff were helpful and the facilities are clean. The farm lounge is perfect for relaxing after activities.',
    },
    {
        name: 'Robert Katende',
        rating: 5,
        date: 'July 12, 2023',
        text: 'Best team-building venue in Uganda! The games are creative and the facilitators know how to engage everyone. We left with stronger bonds and great memories.',
    },
    {
        name: 'Grace Nabatanzi',
        rating: 4,
        date: 'June 8, 2023',
        text: 'Lovely farm setting with plenty of activities. The children enjoyed feeding the animals and learning about farming. A great educational experience for kids.',
    },
    {
        name: 'Fred Musisi',
        rating: 5,
        date: 'May 20, 2023',
        text: 'Exceptional service and beautiful location. The Farm Kitchen serves amazing farm-to-table meals. Highly recommend for anyone looking for a unique Ugandan experience.',
    },
    {
        name: 'Martha Nakitende',
        rating: 4,
        date: 'April 15, 2023',
        text: 'Great place for a weekend getaway. The accommodation is comfortable and the scenery is breathtaking. The staff go above and beyond to make you feel welcome.',
    },
    {
        name: 'Isaac Kigozi',
        rating: 5,
        date: 'March 3, 2023',
        text: 'Absolutely loved the experience! The obstacle course was fun and challenging. The team spirit was incredible and the barbecue lunch was fantastic.',
    },
    {
        name: 'Ruth Namaganda',
        rating: 4,
        date: 'February 10, 2023',
        text: 'A hidden gem in Nakaseke. The farm tour was informative and the activities were well organized. Perfect for corporate retreats and team building.',
    },
    {
        name: 'Joseph Ssenyonga',
        rating: 5,
        date: 'January 22, 2023',
        text: 'Fun Farming Uganda exceeds expectations. The attention to detail, the passionate staff, and the beautiful environment make it a must-visit destination.',
    },
];

export default function ReferencesPage() {
    return (
        <>
            <section className="page-header">
                <div
                    className="page-header__bg"
                    style={{
                        backgroundImage:
                            'url(/assets/images/backgrounds/page-header-bg-1-1.jpg)',
                    }}
                ></div>
                <div className="container">
                    <h2 className="page-header__title">References</h2>
                    <ul className="garlon-breadcrumb list-unstyled">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <span>References</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="testimonials-one section-space">
                <div className="container">
                    <div className="sec-title text-center">
                        <p className="sec-title__tagline">
                            <img
                                src="/assets/images/shapes/sec-title-s-1-1.png"
                                alt="shape"
                            />
                            TESTIMONIALS
                        </p>
                        <h3 className="sec-title__title">
                            Our Farm Ambassadors say...
                        </h3>
                    </div>

                    <div className="row gutter-y-60">
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className="col-lg-4 col-md-6"
                            >
                                <div className="testimonials-one__item">
                                    <div className="testimonials-one__item__inner">
                                        <div className="testimonials-one__icon">
                                            <i className="fa fa-quote-left"></i>
                                        </div>
                                        <p className="testimonials-one__text">
                                            &ldquo;{review.text}&rdquo;
                                        </p>
                                        <div className="testimonials-one__start-box">
                                            <span className="testimonials-one__start">
                                                {review.rating}/5
                                            </span>
                                        </div>
                                        <div className="testimonials-one__thumb">
                                            <h4 className="testimonials-one__thumb__name">
                                                {review.name}
                                            </h4>
                                            <span className="testimonials-one__thumb__text">
                                                {review.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-one">
                <div className="cta-one__bg"></div>
                <div className="container">
                    <div className="cta-one__inner">
                        <div className="cta-one__call">
                            <div className="cta-one__call__icon">
                                <span aria-hidden="true" className="icon-leaf"></span>
                            </div>
                            <div>
                                <h3 className="cta-one__call__title">
                                    Ready to Write Your Own Review?
                                </h3>
                                <p className="cta-one__call__link">
                                    Book your farm adventure today and become one of
                                    our happy Farm Ambassadors!
                                </p>
                            </div>
                        </div>
                        <div className="cta-one__btn">
                            <Link href="/contact" className="garlon-btn">
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
