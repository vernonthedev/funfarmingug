import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="vl-footer2-area">
                <div className="container">
                    <div className="row">
                        <div className="vl-footer2-top">
                            <div className="footer2-top-shape">
                                <div className="shape-1 aniamtion-key-1">
                                    <img src="/assets/img/shape/footertop2-shape1.png" alt="" />
                                </div>
                                <div className="shape-2 aniamtion-key-5">
                                    <img src="/assets/img/shape/footertop2-shape2.png" alt="" />
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6" data-aos="zoom-out" data-aos-duration="900">
                                    <h3 className="footer2-top-header">
                                        Your Organic <br /> Journey Begins Now
                                    </h3>
                                </div>
                                <div className="col-xl-2 d-none d-xl-block"></div>
                                <div className="col-xl-4 col-lg-6" data-aos="zoom-out" data-aos-duration="1000">
                                    <div className="footer2-top-mail">
                                        <form action="/#">
                                            <input type="email" placeholder="Email Address" />
                                            <button type="submit" className="vl-btnsub">
                                                Subscribe
                                                <span className="arrow_btnsub">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                        <path d="M27.002 16.002H5.00195" stroke="#132C12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M21.0021 22.002C21.0021 22.002 27.002 17.5831 27.002 16.002C27.002 14.4208 21.002 10.002 21.002 10.002" stroke="#132C12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer2-area-main">
                    <div className="container">
                        <div className="footer2-widget-area">
                            <div className="row">
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="footer4-widget-hour">
                                        <div className="footer-widget-hour">
                                            <h4>Working Hours</h4>
                                            <div className="space28"></div>
                                            <ul>
                                                <li>
                                                    <span><a className="f-date" href="/contact">Mon–Fri:</a></span>{' '}
                                                    <span><a href="/contact">8:00 AM - 6:00 PM</a></span>
                                                </li>
                                                <li>
                                                    <span><a className="f-date" href="/contact">Sunday :</a></span>{' '}
                                                    <span><a href="/contact">2:00 AM - 9:00 PM</a></span>
                                                </li>
                                                <li>
                                                    <span><a className="f-date" href="/contact">Saturday :</a></span>{' '}
                                                    <span><a href="/contact">Closed</a></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="footer2-logo-area">
                                        <img src="/assets/img/footer/footer1-logo.png" alt="" />
                                        <div className="space28"></div>
                                        <p className="pera_text">
                                            Fun Farming Uganda is an organic farm engaging in diverse agricultural
                                            activities like goat breeding, poultry farming, banana plantation. We serve
                                            as a youth agro project educating and involving young individuals in
                                            sustainable farming practices.
                                        </p>
                                        <div className="space28"></div>
                                        <div className="footer2-widget-social">
                                            <ul className="social_link social1-footer social1-footer2">
                                                <li>
                                                    <a href="https://facebook.com/funfarminguganda" target="_blank" rel="noopener noreferrer">
                                                        <i className="fa-brands fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://linkedin.com/company/funfarmingug" target="_blank" rel="noopener noreferrer">
                                                        <i className="fa-brands fa-linkedin-in"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://youtube.com/@funfarmingug" target="_blank" rel="noopener noreferrer">
                                                        <i className="fa-brands fa-youtube"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/funfarmingug" target="_blank" rel="noopener noreferrer">
                                                        <i className="fa-brands fa-twitter"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-12">
                                    <div className="row footer2-widget-info">
                                        <div className="col-xl-4 col-lg-2 col-md-3">
                                            <div className="footer-widget-area">
                                                <h3>Quick Links</h3>
                                                <div className="space28"></div>
                                                <ul>
                                                    <li><Link href="/about">About Us</Link></li>
                                                    <li><Link href="/activities">Activities</Link></li>
                                                    <li><Link href="/gallery">Gallery</Link></li>
                                                    <li><Link href="/blog">Blog</Link></li>
                                                    <li><Link href="/contact">Contact</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-8 col-lg-4 col-md-5">
                                            <div className="footer-widget-area footer2-widget-fix">
                                                <h3>Support</h3>
                                                <div className="space28"></div>
                                                <ul>
                                                    <li><Link href="/privacy">Privacy Policy</Link></li>
                                                    <li><Link href="/support">Support</Link></li>
                                                    <li><Link href="/references">References</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space24"></div>
                        <div className="footer1-copyright-area footer2-copyright-area">
                            <ul className="footer1-copyright-wrap">
                                <li>
                                    <a href="/#">
                                        &copy;{' '}
                                        <span className="dynamic-year">
                                            {new Date().getFullYear()}
                                        </span>{' '}
                                        Fun Farming Uganda. All rights reserved.
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
