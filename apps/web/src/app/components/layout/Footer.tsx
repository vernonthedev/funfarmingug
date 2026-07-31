'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="vl-footer1-area vl-footer6-area">
            <div className="container">
                <div className="row">
                    {/* Footer Top - Contact Info */}
                    <div className="vl-footer1-top">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer1-mobile">
                                    <div className="icons">
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z"
                                                    stroke="white"
                                                    strokeWidth="1.5"
                                                ></path>
                                                <path
                                                    d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z"
                                                    stroke="white"
                                                    strokeWidth="1.5"
                                                ></path>
                                            </svg>
                                            Location
                                        </a>
                                    </div>
                                    <div className="space24"></div>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                Charabari, Shingra, Natore,
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Rajshahi Division, Bangladesh
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer1-mobile">
                                    <div className="icons">
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5"
                                                    stroke="white"
                                                    strokeWidth="1.5"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M10.5 19.5C10.0337 19.4939 9.56682 19.485 9.09883 19.4732C5.95033 19.3941 4.37608 19.3545 3.24496 18.2184C2.11383 17.0823 2.08114 15.5487 2.01577 12.4814C1.99475 11.4951 1.99474 10.5147 2.01576 9.52843C2.08114 6.46113 2.11382 4.92748 3.24495 3.79139C4.37608 2.6553 5.95033 2.61573 9.09882 2.53658C11.0393 2.4878 12.9607 2.48781 14.9012 2.53659C18.0497 2.61574 19.6239 2.65532 20.755 3.79141C21.8862 4.92749 21.9189 6.46114 21.9842 9.52844C21.9939 9.98251 21.9991 10.1965 21.9999 10.5"
                                                    stroke="white"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M19 17C19 17.8284 18.3284 18.5 17.5 18.5C16.6716 18.5 16 17.8284 16 17C16 16.1716 16.6716 15.5 17.5 15.5C18.3284 15.5 19 16.1716 19 17ZM19 17V17.5C19 18.3284 19.6716 19 20.5 19C21.3284 19 22 18.3284 22 17.5V17C22 14.5147 19.9853 12.5 17.5 12.5C15.0147 12.5 13 14.5147 13 17C13 19.4853 15.0147 21.5 17.5 21.5"
                                                    stroke="white"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                            Email Us
                                        </a>
                                    </div>
                                    <div className="space24"></div>
                                    <ul>
                                        <li>
                                            <a href="mailto:info@orgaanicfarm.com">
                                                info@orgaanicfarm.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:support@orgaanicfarm.com">
                                                support@orgaanicfarm.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer1-mobile lg-mt20">
                                    <div className="icons">
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M14 3V6M19 5L17 7M21 10H18"
                                                    stroke="white"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M9.15825 5.71223L8.7556 4.80625C8.49232 4.21388 8.36068 3.91768 8.1638 3.69101C7.91707 3.40694 7.59547 3.19794 7.23567 3.08785C6.94858 3 6.62446 3 5.97621 3C5.02791 3 4.55375 3 4.15573 3.18229C3.68687 3.39702 3.26343 3.86328 3.09473 4.3506C2.95151 4.76429 2.99253 5.18943 3.07458 6.0397C3.94791 15.0902 8.90981 20.0521 17.9603 20.9254C18.8106 21.0075 19.2357 21.0485 19.6494 20.9053C20.1367 20.7366 20.603 20.3131 20.8177 19.8443C21 19.4462 21 18.9721 21 18.0238C21 17.3755 21 17.0514 20.9122 16.7643C20.8021 16.4045 20.5931 16.0829 20.309 15.8362C20.0823 15.6393 19.7861 15.5077 19.1937 15.2444L18.2878 14.8417C17.6462 14.5566 17.3255 14.4141 16.9995 14.3831C16.6876 14.3534 16.3731 14.3972 16.0811 14.5109C15.776 14.6297 15.5063 14.8544 14.967 15.3038C14.4301 15.7512 14.1617 15.9749 13.8337 16.0947C13.543 16.2009 13.1586 16.2403 12.8523 16.1951C12.5069 16.1442 12.2423 16.0029 11.7133 15.7201C10.0672 14.8405 9.15953 13.9328 8.27986 12.2867C7.99714 11.7577 7.85578 11.4931 7.80487 11.1477C7.75974 10.8414 7.79908 10.457 7.9053 10.1663C8.02512 9.83828 8.24881 9.56986 8.69619 9.033C9.14562 8.49368 9.37034 8.22402 9.48915 7.91891C9.60285 7.62694 9.64661 7.3124 9.61694 7.00048C9.58594 6.67452 9.44338 6.35376 9.15825 5.71223Z"
                                                    stroke="white"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                ></path>
                                            </svg>
                                            Phone
                                        </a>
                                    </div>
                                    <div className="space24"></div>
                                    <ul>
                                        <li>
                                            <a href="tel:+8801712345678">
                                                +880 1712345678
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:+8801798743210">
                                                +880 1798743210
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer1-mobile footer1-mobile-fixxer lg-mt20">
                                    <Link
                                        href="/contact"
                                        className="btn4-home6"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Info */}
                    <div className="vl-footer1-info">
                        <div className="row">
                            {/* About Widget */}
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="footer1-logo-area">
                                    <img
                                        src="/assets/img/footer/footer1-logo.png"
                                        alt="Orgaanic Logo"
                                    />
                                    <div className="space24"></div>
                                    <p>
                                        We're committed to delivering fresh,
                                        chemical-free dairy and meat products
                                        straight from our pasture to your plate.
                                        Our mission is to raise healthy cattle
                                    </p>
                                    <div className="space28"></div>
                                    <div className="footer1-subscribe">
                                        <form action="#">
                                            <input
                                                type="email"
                                                placeholder="Email"
                                            />
                                            <div className="sub-btn">
                                                <button
                                                    type="submit"
                                                    className="btn4-home6"
                                                >
                                                    Subscribe
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* Top Links Widget */}
                            <div className="col-xl-2 col-lg-4 col-md-6">
                                <div className="footer-widget-area wid1-fix mt-20xs_brk">
                                    <h3>Top Links</h3>
                                    <div className="space28"></div>
                                    <ul>
                                        <li>
                                            <Link href="/">Home Page</Link>
                                        </li>
                                        <li>
                                            <Link href="/about-us">
                                                Our Farm
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about-us">
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service">
                                                Our Service
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog">Contact Us</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                Testimonials
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Services Widget */}
                            <div className="col-xl-2 col-lg-4 col-md-6">
                                <div className="footer-widget-area">
                                    <h3>Our Services</h3>
                                    <div className="space28"></div>
                                    <ul>
                                        <li>
                                            <Link href="/service">
                                                Fresh Organic Milk
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service">
                                                Artisanal Farm Cheese
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service">
                                                Grass-Fed Beef Supply
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service">
                                                Natural Yogurt & Curd
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service">
                                                Artisanal Farm Cheese
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service">
                                                Organic Feed Supply
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Working Hours Widget */}
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="footer1-widget-hour-info">
                                    <div className="footer-widget-hour">
                                        <h3>Working Hours</h3>
                                        <div className="space28"></div>
                                        <ul>
                                            <li>
                                                <span>
                                                    <a
                                                        className="f-date"
                                                        href="#"
                                                    >
                                                        Mon–Fri:
                                                    </a>
                                                </span>{' '}
                                                <span>
                                                    <a href="#">
                                                        8:00 AM - 6:00 PM
                                                    </a>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <a
                                                        className="f-date"
                                                        href="#"
                                                    >
                                                        Sunday :
                                                    </a>
                                                </span>{' '}
                                                <span>
                                                    <a href="#">
                                                        2:00 AM - 9:00 PM
                                                    </a>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <a
                                                        className="f-date"
                                                        href="#"
                                                    >
                                                        Saturday :
                                                    </a>
                                                </span>{' '}
                                                <span>
                                                    <a href="#">Closed</a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="space28"></div>
                                    <div className="footer1-widget-social footer6-widget-social">
                                        <ul className="social_link social1-footer">
                                            <li>
                                                <a
                                                    href="#"
                                                    aria-label="Facebook"
                                                >
                                                    <i className="fa-brands fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    aria-label="LinkedIn"
                                                >
                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    aria-label="YouTube"
                                                >
                                                    <i className="fa-brands fa-youtube"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    aria-label="Twitter"
                                                >
                                                    <i className="fa-brands fa-twitter"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space60"></div>

                    {/* Copyright */}
                    <div className="footer1-copyright-area">
                        <ul className="footer1-copyright-wrap">
                            <li>
                                <a href="#">
                                    © Orgaanic 2026. All Rights Reserved.
                                </a>
                            </li>
                            <li>
                                <a className="fw-500" href="#">
                                    Built with care <span>|</span> Powered by
                                    nature
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
