'use client';

import Link from 'next/link';
import PageHeader from '@/components/sections/PageHeader';
import SectionTitle from '@/components/sections/SectionTitle';
import CtaSection from '@/components/sections/CtaSection';

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
                    <SectionTitle
                        tagline="FARM FOOD"
                        title="Hungry stomach after activities? Taste Our Locally Made FarmFood!"
                    />
                </div>
            </section>

            <section className="about-one section-space-bottom">
                <div className="container">
                    <div className="row gutter-y-30 align-items-center">
                        <div className="col-lg-6">
                            <div
                                className="about-one__thumb__item wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="100ms"
                            >
                                <img
                                    src="/img/webimgs/tray-potatoes.jpg"
                                    alt="Food Served at FunFarming Uganda"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-one__content">
                                <SectionTitle
                                    tagline="FRESH & ORGANIC"
                                    title="Hungry stomach after activities?"
                                    align="start"
                                />
                                <p className="about-one__content__text">
                                    Complete your day with a light lunch or
                                    extensive meal from our in-house caterer.
                                    Crazy activities in the country air are
                                    guaranteed to make you hungry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CtaSection
                icon="icon-leaf"
                title="Ready to Taste FarmFood?"
                text="Book your activity and add FarmFood to your schedule."
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
