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

            <div className="vl-about-inner-area sp1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="vl-about-inner-info text-center">
                                <div className="vl-about-inner-heading">
                                    <h3 data-aos="fade-right" data-aos-duration="900">Merchandise</h3>
                                    <div className="space16"></div>
                                    <h2 data-aos="fade-left" data-aos-duration="1000">Shop Opening Soon!</h2>
                                    <div className="space16"></div>
                                    <p data-aos="fade-left" data-aos-duration="1000">
                                        We are preparing our online shop where you will be able to purchase Fun Farming Uganda
                                        merchandise, farm products, and souvenirs. Stay tuned!
                                    </p>
                                </div>
                                <div className="space44"></div>
                                <div className="vl-about-inner-thumb reveal image-anime lg-mb20">
                                    <div className="text-center" style={{ padding: '80px 30px', background: '#F2F2F2', borderRadius: '20px' }}>
                                        <span style={{ fontSize: '80px', color: '#209D2F' }}>
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </span>
                                        <h3 style={{ margin: '30px 0 20px', fontSize: '32px' }}>
                                            Coming Soon
                                        </h3>
                                        <p style={{ color: '#636363', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>
                                            We are working on bringing you exclusive Fun Farming Uganda merchandise
                                            including t-shirts, caps, souvenirs, fresh farm produce, and more.
                                        </p>
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
