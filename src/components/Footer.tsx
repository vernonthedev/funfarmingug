import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="main-footer">
            <div
                className="main-footer__bg"
                style={{
                    backgroundImage:
                        'url(/assets/images/backgrounds/footer-1-1.jpg)',
                }}
            ></div>
            <div className="main-footer__shape-one">
                <img src="/assets/images/shapes/shape-footer2.png" alt="" />
            </div>
            <div
                className="main-footer__shape-two"
                style={{
                    backgroundImage:
                        'url(/assets/images/shapes/shape-footer.png)',
                }}
            ></div>

            <div className="main-footer__top">
                <div className="container">
                    <div className="row gutter-y-50">
                        <div className="col-md-6 col-lg-4 col-xl-4">
                            <div className="footer-widget footer-widget--about">
                                <Link href="/" className="footer-widget__logo">
                                    <img
                                        src="logo.png"
                                        width="222"
                                        alt="Fun Farming Uganda"
                                    />
                                </Link>
                                <p className="footer-widget__text">
                                    Fun Farming Uganda is an organic farm
                                    engaging in diverse agricultural activities
                                    like goat breeding, poultry farming, banana
                                    plantation. We serve as a youth agro project
                                    educating and involving young individuals in
                                    sustainable farming practices.
                                </p>
                                <div className="footer-widget__social-links">
                                    <a
                                        href="https://facebook.com/funfarminguganda"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i
                                            className="fab fa-facebook-f"
                                            aria-hidden="true"
                                        ></i>
                                        <span className="sr-only">
                                            Facebook
                                        </span>
                                    </a>
                                    <a
                                        href="https://twitter.com/funfarmingug"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i
                                            className="fab fa-twitter"
                                            aria-hidden="true"
                                        ></i>
                                        <span className="sr-only">Twitter</span>
                                    </a>
                                    <a
                                        href="https://linkedin.com/company/funfarmingug"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i
                                            className="fab fa-linkedin-in"
                                            aria-hidden="true"
                                        ></i>
                                        <span className="sr-only">
                                            Linkedin
                                        </span>
                                    </a>
                                    <a
                                        href="https://instagram.com/funfarminguganda"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i
                                            className="fab fa-instagram"
                                            aria-hidden="true"
                                        ></i>
                                        <span className="sr-only">
                                            Instagram
                                        </span>
                                    </a>
                                    <a
                                        href="https://tiktok.com/@funfarmingug"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i
                                            className="fab fa-tiktok"
                                            aria-hidden="true"
                                        ></i>
                                        <span className="sr-only">TikTok</span>
                                    </a>
                                    <a
                                        href="https://youtube.com/@funfarmingug"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i
                                            className="fab fa-youtube"
                                            aria-hidden="true"
                                        ></i>
                                        <span className="sr-only">YouTube</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 col-xl-4">
                            <div className="footer-widget footer-widget--links">
                                <h2 className="footer-widget__title">
                                    Quick Links
                                </h2>
                                <ul className="list-unstyled footer-widget__links">
                                    <li>
                                        <i className="fas fa-circle"></i>
                                        <Link href="/about">About Us</Link>
                                    </li>
                                    <li>
                                        <i className="fas fa-circle"></i>
                                        <Link href="/activities">
                                            Activities
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="fas fa-circle"></i>
                                        <Link href="/lounge">Farm Lounge</Link>
                                    </li>
                                    <li>
                                        <i className="fas fa-circle"></i>
                                        <Link href="/farmfood">FarmFood</Link>
                                    </li>
                                    <li>
                                        <i className="fas fa-circle"></i>
                                        <Link href="/gallery">Gallery</Link>
                                    </li>
                                    <li>
                                        <i className="fas fa-circle"></i>
                                        <Link href="/blog">Blog</Link>
                                    </li>
                                    <li>
                                        <i className="fas fa-circle"></i>
                                        <Link href="/faqs">FAQ</Link>
                                    </li>
                                    <li>
                                        <i className="fas fa-circle"></i>
                                        <Link href="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 col-xl-4">
                            <div className="footer-widget footer-widget--post">
                                <h2 className="footer-widget__title">
                                    Get In Touch
                                </h2>
                                <ul className="list-unstyled">
                                    <li className="footer-widget--post__item">
                                        <div className="footer-widget--post__img">
                                            <i
                                                className="fa fa-map-marker-alt"
                                                style={{
                                                    fontSize: '24px',
                                                    color: '#fff',
                                                    margin: '12px',
                                                }}
                                            ></i>
                                        </div>
                                        <div className="footer-widget--post__content">
                                            <h3 className="footer-widget--post__title">
                                                Butalangu, Nakaseke District,
                                                Uganda
                                            </h3>
                                        </div>
                                    </li>
                                    <li className="footer-widget--post__item">
                                        <div className="footer-widget--post__img">
                                            <i
                                                className="fa fa-phone-alt"
                                                style={{
                                                    fontSize: '24px',
                                                    color: '#fff',
                                                    margin: '12px',
                                                }}
                                            ></i>
                                        </div>
                                        <div className="footer-widget--post__content">
                                            <h3 className="footer-widget--post__title">
                                                <a href="tel:+256772826680">
                                                    +256 772 826 680
                                                </a>
                                            </h3>
                                        </div>
                                    </li>
                                    <li className="footer-widget--post__item">
                                        <div className="footer-widget--post__img">
                                            <i
                                                className="fa fa-envelope"
                                                style={{
                                                    fontSize: '24px',
                                                    color: '#fff',
                                                    margin: '12px',
                                                }}
                                            ></i>
                                        </div>
                                        <div className="footer-widget--post__content">
                                            <h3 className="footer-widget--post__title">
                                                <a href="mailto:admin@funfarming.org">
                                                    admin@funfarming.org
                                                </a>
                                            </h3>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="main-footer__bottom wow fadeInUp"
                data-wow-delay="00ms"
            >
                <div className="container">
                    <div className="main-footer__bottom__inner">
                        <p className="main-footer__copyright">
                            &copy; Copyright{' '}
                            <span className="dynamic-year">
                                {new Date().getFullYear()}
                            </span>{' '}
                            by Fun Farming Uganda. All rights reserved.
                        </p>
                        <div className="main-footer__bottom__links">
                            <Link href="/privacy">Privacy Policy</Link>
                            <Link href="/support">Support</Link>
                            <Link href="/references">References</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
