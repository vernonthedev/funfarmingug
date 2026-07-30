import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="footer-cta">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <h3 className="cta-title">
                                Your Organic <br /> Journey Begins Now
                            </h3>
                        </div>
                        <div className="col-xl-4 col-lg-6 offset-xl-2">
                            <div className="cta-mail">
                                <form action="/#">
                                    <input type="email" placeholder="Email Address" />
                                    <button type="submit" className="btn btn-primary">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-main">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="footer-widget">
                                <h4>Working Hours</h4>
                                <ul>
                                    <li>
                                        <span><a href="/contact">Mon–Fri:</a></span>{' '}
                                        <span><a href="/contact">8:00 AM - 6:00 PM</a></span>
                                    </li>
                                    <li>
                                        <span><a href="/contact">Sunday :</a></span>{' '}
                                        <span><a href="/contact">2:00 AM - 9:00 PM</a></span>
                                    </li>
                                    <li>
                                        <span><a href="/contact">Saturday :</a></span>{' '}
                                        <span><a href="/contact">Closed</a></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="footer-widget">
                                <img src="/assets/img/footer/footer1-logo.png" alt="" />
                                <p>
                                    Fun Farming Uganda is an organic farm engaging in diverse agricultural
                                    activities like goat breeding, poultry farming, banana plantation. We serve
                                    as a youth agro project educating and involving young individuals in
                                    sustainable farming practices.
                                </p>
                                <div className="social-links">
                                    <ul className="list-unstyled">
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
                            <div className="row">
                                <div className="col-xl-4 col-lg-2 col-md-3">
                                    <div className="footer-widget">
                                        <h3>Quick Links</h3>
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
                                    <div className="footer-widget">
                                        <h3>Support</h3>
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
            </div>
            <div className="footer-copyright">
                <div className="container">
                    <div className="copyright-inner">
                        <p>
                            &copy; <span>{new Date().getFullYear()}</span> Fun Farming Uganda. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
