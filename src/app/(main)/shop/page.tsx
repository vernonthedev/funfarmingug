'use client';

import Link from 'next/link';

export default function ShopPage() {
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
                    <h2 className="page-header__title">Shop</h2>
                    <ul className="garlon-breadcrumb list-unstyled">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <span>Shop</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="about-one section-space">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="about-one__content text-center">
                                <div className="sec-title text-center">
                                    <p className="sec-title__tagline">
                                        <img
                                            src="/assets/images/shapes/sec-title-s-1-1.png"
                                            alt="shape"
                                        />
                                        MERCHANDISE
                                    </p>
                                    <h3 className="sec-title__title">
                                        Shop Opening Soon!
                                    </h3>
                                </div>
                                <p className="about-one__content__text">
                                    We are preparing our online shop where you
                                    will be able to purchase Fun Farming Uganda
                                    merchandise, farm products, and souvenirs.
                                    Stay tuned!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-60">
                        <div className="col-xl-12">
                            <div className="product__item">
                                <div
                                    className="text-center"
                                    style={{
                                        padding: '80px 30px',
                                        background: '#F2F2F2',
                                        borderRadius: '20px',
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: '80px',
                                            color: '#209D2F',
                                        }}
                                    >
                                        <i className="fa fa-shopping-cart"></i>
                                    </span>
                                    <h3
                                        style={{
                                            margin: '30px 0 20px',
                                            fontSize: '32px',
                                        }}
                                    >
                                        Coming Soon
                                    </h3>
                                    <p
                                        style={{
                                            color: '#636363',
                                            fontSize: '16px',
                                            maxWidth: '500px',
                                            margin: '0 auto',
                                        }}
                                    >
                                        We are working on bringing you
                                        exclusive Fun Farming Uganda
                                        merchandise including t-shirts, caps,
                                        souvenirs, fresh farm produce, and more.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-60">
                        <div className="col-xl-12">
                            <div className="about-one__content">
                                <h4 className="text-center">
                                    For Inquiries
                                </h4>
                                <p className="about-one__content__text text-center">
                                    For merchandise and product inquiries,
                                    please contact us:
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-30">
                        <div className="col-lg-6">
                            <div
                                className="testimonials-one__item"
                                style={{ marginBottom: '30px' }}
                            >
                                <div className="testimonials-one__item__inner">
                                    <div className="testimonials-one__icon">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <h4 className="testimonials-one__thumb__name">
                                        Call Us
                                    </h4>
                                    <div className="testimonials-one__thumb">
                                        <a
                                            href="tel:+256772826680"
                                            className="testimonials-one__thumb__text"
                                            style={{
                                                color: '#209D2F',
                                                fontWeight: 600,
                                            }}
                                        >
                                            +256 772 826 680
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="testimonials-one__item"
                                style={{ marginBottom: '30px' }}
                            >
                                <div className="testimonials-one__item__inner">
                                    <div className="testimonials-one__icon">
                                        <i className="fa fa-envelope"></i>
                                    </div>
                                    <h4 className="testimonials-one__thumb__name">
                                        Email Us
                                    </h4>
                                    <div className="testimonials-one__thumb">
                                        <a
                                            href="mailto:info@funfarminguganda.com"
                                            className="testimonials-one__thumb__text"
                                            style={{
                                                color: '#209D2F',
                                                fontWeight: 600,
                                            }}
                                        >
                                            info@funfarminguganda.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
