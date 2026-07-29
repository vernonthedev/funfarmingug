'use client';

import Link from 'next/link';
import PageHeader from '@/components/sections/PageHeader';
import SectionTitle from '@/components/sections/SectionTitle';
import ServiceCardTwo from '@/components/sections/ServiceCardTwo';
import CtaSection from '@/components/sections/CtaSection';

const foodItems = [
    { name: 'Local Goat Breeds', image: '/img/gallery/funfarm_n1.png' },
    { name: 'Free-Range Birds', image: '/img/gallery/funfarm_n4.png' },
    { name: 'Ducks', image: '/img/gallery/funfarm_n8.png' },
    { name: 'Fresh Produce', image: '/img/gallery/funfarm_n5.png' },
];

export default function FarmFoodPage() {
    return (
        <>
            <PageHeader
                title="Farm Food"
                bgImage="/img/gallery/funfarm_n28.png"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Farm Food' },
                ]}
            />

            <section className="section-space">
                <div className="container">
                    <SectionTitle tagline="FARM FOOD" title="Hungry stomach after activities? Taste Our Locally Made FarmFood!" />
                </div>
            </section>

            <section className="about-one section-space-bottom">
                <div className="container">
                    <div className="row gutter-y-30 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-one__thumb__item">
                                <img src="/img/webimgs/tray-potatoes.jpg" alt="Food Served at FunFarming Uganda" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-one__content">
                                <SectionTitle tagline="FRESH & ORGANIC" title="Hungry stomach after activities?" align="start" />
                                <p className="about-one__content__text">
                                    Complete your day with a light lunch or
                                    extensive meal from our in-house caterer.
                                    Crazy activities in the country air are
                                    guaranteed to make you hungry.
                                </p>
                                <p className="about-one__content__text">
                                    Our FarmFood is prepared using fresh, organic
                                    ingredients sourced directly from our farm.
                                    From traditional Ugandan dishes to
                                    international favorites, our menu offers something for everyone.
                                </p>
                                <p className="about-one__content__text">
                                    <strong>
                                        You can order your favorite FarmFood after
                                        you have chosen an activity. Special dietary
                                        requirements can be accommodated with advance notice.
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-page section-space">
                <div className="container">
                    <SectionTitle tagline="OUR BREEDS" title="Some Of Our Farm Animals" />
                    <div className="row gutter-y-30">
                        {foodItems.map((item, i) => (
                            <div key={i} className="col-lg-3 col-md-6">
                                <div className="service-card-two wow fadeInUp" data-wow-duration="1500ms" data-wow-delay={`${(i + 1) * 200}ms`}>
                                    <div className="service-card-two__inner">
                                        <div className="service-card-two__thumb" style={{ height: 220, overflow: 'hidden' }}>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div className="service-card-two__content">
                                            <h4 className="service-card-two__title">{item.name}</h4>
                                        </div>
                                        <div className="service-card-two__shape-one">
                                            <img src="/assets/images/shapes/leaf-left-1.png" alt="icon" />
                                        </div>
                                        <div className="service-card-two__shape-two">
                                            <img src="/assets/images/shapes/leaf-right-2.png" alt="icon" />
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
                                <SectionTitle tagline="BBQ & DRINKS" title="BBQ + Drinks The Perfect Finish" align="start" />
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
                                    <strong>You can reserve a barbecue for your team
                                    online after adding an activity to your schedule.</strong>
                                </p>
                                <p className="about-one__content__text">
                                    Pricing available upon request. Veggie, halal,
                                    gluten-free options available upon request.
                                </p>
                                <ul className="about-one__list list-unstyled">
                                    <li><i className="fa fa-check-circle"></i><span>Everything is prepared for you</span></li>
                                    <li><i className="fa fa-check-circle"></i><span>Suitable for hearty eaters</span></li>
                                    <li><i className="fa fa-check-circle"></i><span>Veggie, halal, gluten-free available upon request</span></li>
                                </ul>
                                <div className="about-one__user-box">
                                    <Link href="/activities" className="garlon-btn">
                                        <span>Book Your Activity First</span>
                                        <i className="icon-angle-small-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-one__thumb__item">
                                <img src="/img/gallery/bbq.jpg" alt="BBQ at Fun Farming Uganda" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CtaSection
                icon="icon-leaf"
                title="Ready to Taste FarmFood?"
                text="Book your activity and add FarmFood to your schedule. Our team will ensure you have a delicious meal to complement your farm experience."
                buttonLabel="View Activities"
                buttonHref="/activities"
            />

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
