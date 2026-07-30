'use client';

import Link from 'next/link';
import PageHeader from '@/components/sections/PageHeader';

export default function ShopPage() {
    return (
        <>
            <PageHeader
                title="Shop"
                bgImage="/assets/img/hero/about-us-inr-herothumb.png"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Shop' },
                ]}
            />

            <div className="vl-service-single-area sp1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="vl-service-single-info text-center">
                                <div className="vl-about-inner-heading">
                                    <h3>
                                        <img src="/assets/img/icon/subtitle-icon-hm4.svg" alt="" />
                                        Merchandise
                                    </h3>
                                    <div className="space16"></div>
                                    <h2>Shop Opening Soon!</h2>
                                    <div className="space16"></div>
                                    <p>
                                        We are preparing our online shop where you will be able to purchase Fun Farming Uganda
                                        merchandise, farm products, and souvenirs. Stay tuned!
                                    </p>
                                </div>
                                <div className="space44"></div>
                                <div className="vl-service-single-thumb text-center">
                                    <div className="coming-soon-card">
                                        <span className="coming-soon-icon">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </span>
                                        <h3>Coming Soon</h3>
                                        <p>
                                            We are working on bringing you exclusive Fun Farming Uganda merchandise
                                            including t-shirts, caps, souvenirs, fresh farm produce, and more.
                                        </p>
                                        <Link href="/contact" className="btn3-home6 mt-30">
                                            Notify Me
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
