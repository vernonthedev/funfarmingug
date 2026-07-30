'use client';

import Link from 'next/link';
import PageHeader from '@/components/sections/PageHeader';

export default function SupportPage() {
    return (
        <>
            <PageHeader
                title="Support"
                bgImage="/assets/img/hero/about-us-inr-herothumb.png"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Support' },
                ]}
            />

            <div className="service-inr-box-area sp1">
                <div className="container">
                    <div className="col-xl-8 mx-auto">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="service6-box margin-b30">
                                    <div className="service6-logos">
                                        <h3 className="title">
                                            <Link href="tel:+256772826680">Phone</Link>
                                        </h3>
                                        <div className="inons">
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                    </div>
                                    <div className="space24"></div>
                                    <p className="pera-text">
                                        <Link href="tel:+256772826680">+256 772 826 680</Link>
                                        <br />
                                        <Link href="tel:+256700462477">+256 700 462 477</Link>
                                        <br />
                                        <Link href="tel:+256770640220">+256 770 640 220</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="service6-box margin-b30">
                                    <div className="service6-logos">
                                        <h3 className="title">
                                            <Link href="mailto:info@funfarminguganda.com">Email</Link>
                                        </h3>
                                        <div className="inons">
                                            <i className="fa-regular fa-envelope"></i>
                                        </div>
                                    </div>
                                    <div className="space24"></div>
                                    <p className="pera-text">
                                        <Link href="mailto:info@funfarminguganda.com">info@funfarminguganda.com</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="service6-box margin-b30">
                                    <div className="service6-logos">
                                        <h3 className="title">
                                            <Link href="/contact">Location</Link>
                                        </h3>
                                        <div className="inons">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                    </div>
                                    <div className="space24"></div>
                                    <p className="pera-text">Butalangu, Nakaseke District, Uganda</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}