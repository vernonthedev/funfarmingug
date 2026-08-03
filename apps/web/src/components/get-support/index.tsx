import Link from 'next/link';
import { SITE } from '@/lib/site';

export function GetSupportPage() {
    return (
        <div className="main-content pt-0 pb-0 page-contact-us">
            <section className="s-contact-us style-2 bg-white pt-118 pb-88">
                <div className="section-wrap">
                    <div className="tf-container w-1290">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="content-left">
                                    <div className="image mb-30">
                                        <img
                                            src="/images/funfarm/funfarm_n18.png"
                                            alt="Fun Farming Uganda support team"
                                            className="img lazyload"
                                        />
                                    </div>
                                    <div className="heading-section has-text mb-40">
                                        <p className="sub-title">
                                            Contact Fun Farming Support Team
                                        </p>
                                        <p className="title wow fadeInUp">
                                            For Support Please Contact Us Below!
                                        </p>
                                        <p className="text">
                                            Thanks for checking out the Fun
                                            Farming Uganda Website! Please kindly
                                            contact the phone numbers below for
                                            further inquiries and follow up.
                                            Kind regards, Fun Farming Uganda.
                                        </p>
                                    </div>
                                    <ul className="contact-list">
                                        <li
                                            className="wow fadeInUp"
                                            data-wow-duration="1.4s"
                                        >
                                            <div className="icon style-circle">
                                                <i className="fa-solid fa-phone"></i>
                                            </div>
                                            <div className="infor">
                                                <p className="title">
                                                    Need Help? Ask Admins
                                                </p>
                                                <p className="text">
                                                    Call Us 24/7: {SITE.phone}
                                                </p>
                                            </div>
                                        </li>
                                        <li
                                            className="wow fadeInUp"
                                            data-wow-duration="1.4s"
                                        >
                                            <div className="icon style-circle">
                                                <i className="fa-solid fa-envelope"></i>
                                            </div>
                                            <div className="infor">
                                                <p className="title">
                                                    Send An Email
                                                </p>
                                                <p className="text">
                                                    {SITE.email}
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="content-section">
                                    <div className="heading-section has-text mb-50">
                                        <p className="sub-title">
                                            We Are Here To Help
                                        </p>
                                        <p className="title wow fadeInUp" data-wow-delay="0s">
                                            Get In Touch With Our Team
                                        </p>
                                        <p className="text">
                                            Use the form below to reach our
                                            support team for any inquiries,
                                            bookings and follow up. We are happy
                                            to assist you and will reply within
                                            24 hours via email.
                                        </p>
                                        <div className="img-item">
                                            <img
                                                className="tf-animate-1"
                                                src="/images/item/rice-plant-2.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="bot mt-30">
                                        <Link
                                            href="/contact-us"
                                            className="tf-btn full scale-40"
                                        >
                                            <span className="text-style">
                                                Contact Us Today
                                            </span>
                                            <div className="icon">
                                                <i className="icon-arrow_right"></i>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}