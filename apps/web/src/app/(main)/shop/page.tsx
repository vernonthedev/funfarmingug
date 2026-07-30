'use client';

import Link from 'next/link';

export default function ShopPage() {
    return (
        <>
            {/* HERO START */}
            <div
                className="vl-hero-inner-area parallaxie"
                style={{
                    backgroundImage:
                        'url(/assets/img/hero/about-us-inr-herothumb.png)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="inner-hero-info">
                                <h2>Farm Shop</h2>
                                <div className="space16"></div>
                                <ul>
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <img
                                            src="/assets/img/icon/arrow-right-inner.svg"
                                            alt=""
                                        />
                                    </li>
                                    <li>
                                        <Link
                                            className="aboutus_titlefix"
                                            href="/shop"
                                        >
                                            Farm Shop
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* HERO END */}

            {/* SHOP CONTENT START */}
            <div className="vl-shop-inr-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 mx-auto text-center">
                            <div className="shop-inr-heading">
                                <h3
                                    data-aos="fade-right"
                                    data-aos-duration="900"
                                >
                                    <img
                                        src="/assets/img/icon/hm7-sub-title2-dot.png"
                                        alt=""
                                    />
                                    Coming Soon
                                </h3>
                                <div className="space24"></div>
                                <h2
                                    className="text-effect"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                >
                                    Our Online Farm Shop is Under Construction
                                </h2>
                                <div className="space16"></div>
                                <p
                                    className="pera-text"
                                    data-aos="fade-left"
                                    data-aos-duration="1100"
                                >
                                    We are currently working on our online shop
                                    where you will be able to purchase fresh
                                    organic produce, farm products, and unique
                                    souvenirs from Fun Farming Uganda. Stay
                                    tuned for updates!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space44"></div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div
                                className="shop-inr-box"
                                data-aos="zoom-out"
                                data-aos-duration="900"
                            >
                                <div className="shop-inr-icon">
                                    <img
                                        src="/assets/img/icon/service6-icon(1).svg"
                                        alt=""
                                    />
                                </div>
                                <div className="space24"></div>
                                <h3>
                                    <Link href="/contact">Fresh Produce</Link>
                                </h3>
                                <div className="space16"></div>
                                <p>
                                    Organic fruits, vegetables, and herbs grown
                                    on our farm
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div
                                className="shop-inr-box"
                                data-aos="zoom-out"
                                data-aos-duration="1000"
                            >
                                <div className="shop-inr-icon">
                                    <img
                                        src="/assets/img/icon/service6-icon(2).svg"
                                        alt=""
                                    />
                                </div>
                                <div className="space24"></div>
                                <h3>
                                    <Link href="/contact">Farm Products</Link>
                                </h3>
                                <div className="space16"></div>
                                <p>
                                    Eggs, honey, dairy, and other farm-fresh
                                    products
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div
                                className="shop-inr-box"
                                data-aos="zoom-out"
                                data-aos-duration="1100"
                            >
                                <div className="shop-inr-icon">
                                    <img
                                        src="/assets/img/icon/service6-icon(3).svg"
                                        alt=""
                                    />
                                </div>
                                <div className="space24"></div>
                                <h3>
                                    <Link href="/contact">Souvenirs</Link>
                                </h3>
                                <div className="space16"></div>
                                <p>
                                    Handcrafted items and memorabilia from your
                                    farm visit
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* SHOP CONTENT END */}

            {/* CTA SECTION */}
            <div
                className="vl-cta4-area"
                data-aos="zoom-out"
                data-aos-duration="1000"
            >
                <div className="container">
                    <div className="row cta4-area-info sp1">
                        <div className="col-xl-6 mx-auto text-center">
                            <div className="cta4-area-content">
                                <div className="product4-heading">
                                    <h3
                                        className="product4-subtitle"
                                        data-aos="fade-right"
                                        data-aos-duration="900"
                                    >
                                        Stay Tuned
                                    </h3>
                                    <div className="space24"></div>
                                    <h2
                                        className="product4-title text-anime-style-3"
                                        data-aos="fade-left"
                                        data-aos-duration="1000"
                                    >
                                        Our Online Shop is Coming Soon
                                    </h2>
                                </div>
                                <div className="space38"></div>
                                <div
                                    className="btn_area10 z-index99"
                                    data-aos="zoom-out"
                                    data-aos-duration="1100"
                                >
                                    <Link href="/contact" className="vl-btn10">
                                        Contact Us for Orders
                                        <span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="34"
                                                height="34"
                                                viewBox="0 0 34 34"
                                                fill="none"
                                            >
                                                <path
                                                    d="M22.8079 11.1373L11.1406 22.8046"
                                                    stroke="#25452C"
                                                    strokeWidth="1.55556"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M22.8054 17.5005C22.8054 17.5005 23.6439 11.9751 22.8054 11.1366C21.9669 10.2981 16.4414 11.1366 16.4414 11.1366"
                                                    stroke="#25452C"
                                                    strokeWidth="1.55556"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="cta4-area-shape1 aniamtion-key-2">
                            <img
                                src="/assets/img/shape/cta-hm4(1).png"
                                alt=""
                            />
                        </div>
                        <div className="cta4-area-shape2 aniamtion-key-2">
                            <img
                                src="/assets/img/shape/cta-hm4(2).png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* CTA SECTION END */}
        </>
    );
}
