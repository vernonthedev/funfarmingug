import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="o-footer">
            <div className="o-footer__main">
                <div className="o-footer__body">
                    <Link className="o-footer__logo" href="/">
                        <img
                            width="70%"
                            height="100%"
                            alt="Fun Farming Uganda Logo"
                            src="/img/logo.png"
                        />
                    </Link>
                    <div className="o-footer__locations">
                        <h4
                            className="o-footer__label"
                            style={{ display: 'block' }}
                        >
                            Our location
                        </h4>
                        <ul className="o-footer__list">
                            <li className="o-footer__item">
                                <a
                                    className="o-footer__link"
                                    href="https://maps.app.goo.gl/jLuhVcs7ArMqH7Lv5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Nakaseke (Uganda, Kampala)
                                </a>
                            </li>
                            <li
                                className="o-footer__item"
                                style={{ padding: '4px 0' }}
                            >
                                &nbsp;
                            </li>
                            <h4
                                className="o-footer__label"
                                style={{ display: 'block' }}
                            >
                                Website Routes
                            </h4>
                            <li className="o-footer__item">
                                <Link className="o-footer__link" href="/">
                                    Home
                                </Link>
                            </li>
                            <li className="o-footer__item">
                                <Link
                                    className="o-footer__link"
                                    href="/activities"
                                >
                                    Activities
                                </Link>
                            </li>
                            <li className="o-footer__item">
                                <Link className="o-footer__link" href="/about">
                                    About Us
                                </Link>
                            </li>
                            <li className="o-footer__item">
                                <Link className="o-footer__link" href="/lounge">
                                    Farm Lounge
                                </Link>
                            </li>
                            <li className="o-footer__item">
                                <Link className="o-footer__link" href="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li className="o-footer__item">
                                <Link
                                    className="o-footer__link"
                                    href="/gallery"
                                >
                                    Gallery
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="o-footer__info">
                        <div className="o-footer__contact">
                            <ul className="o-footer__list">
                                <li className="o-footer__item">
                                    <a
                                        className="o-footer__link"
                                        href="tel:+256772826680"
                                    >
                                        <i>
                                            <svg width="15" height="15">
                                                <use href="/img/icon-phone.svg#phone"></use>
                                            </svg>
                                        </i>
                                        <span>+256 772 826 680</span>
                                    </a>
                                </li>
                                <li className="o-footer__item">
                                    <a
                                        className="o-footer__link"
                                        href="mailto:meddy@funfarminguganda.com"
                                    >
                                        <i>
                                            <svg width="18" height="17">
                                                <use href="/img/icon-message.svg#message"></use>
                                            </svg>
                                        </i>
                                        <span>meddy@funfarminguganda.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <ul className="o-footer__social">
                            <li className="o-footer__channel linkedin">
                                <a
                                    className="o-footer__icon"
                                    target="_blank"
                                    title="Linkedin"
                                    href="https://www.linkedin.com/company/funfarming/"
                                    rel="noopener noreferrer"
                                >
                                    <svg width="22" height="22">
                                        <use href="/img/social/linkedin.svg#linkedin"></use>
                                    </svg>
                                </a>
                            </li>
                            <li className="o-footer__channel facebook">
                                <a
                                    className="o-footer__icon"
                                    target="_blank"
                                    title="Facebook"
                                    href="https://www.facebook.com/funfarming"
                                    rel="noopener noreferrer"
                                >
                                    <svg width="22" height="22">
                                        <use href="/img/social/facebook.svg#facebook"></use>
                                    </svg>
                                </a>
                            </li>
                            <li className="o-footer__channel instagram">
                                <a
                                    className="o-footer__icon"
                                    target="_blank"
                                    title="Instagram"
                                    href="https://www.instagram.com/funfarming/"
                                    rel="noopener noreferrer"
                                >
                                    <svg width="22" height="22">
                                        <use href="/img/social/instagram.svg#instagram"></use>
                                    </svg>
                                </a>
                            </li>
                            <li className="o-footer__channel youtube">
                                <a
                                    className="o-footer__icon"
                                    target="_blank"
                                    title="Youtube"
                                    href="https://www.youtube.com/channel/#"
                                    rel="noopener noreferrer"
                                >
                                    <svg width="22" height="22">
                                        <use href="/img/social/youtube.svg#youtube"></use>
                                    </svg>
                                </a>
                            </li>
                            <li className="o-footer__channel tiktok">
                                <a
                                    className="o-footer__icon"
                                    target="_blank"
                                    title="Tiktok"
                                    href="https://www.tiktok.com/funfarming"
                                    rel="noopener noreferrer"
                                >
                                    <svg width="22" height="22">
                                        <use href="/img/social/tiktok.svg#tiktok"></use>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="o-footer__menu">
                        <h4 className="o-footer__label">Fun Farming Uganda</h4>
                        <ul className="o-footer__list">
                            <li className="o-footer__item">
                                <Link
                                    className="o-footer__link"
                                    href="/references"
                                >
                                    Customer Reviews
                                </Link>
                            </li>
                            <li className="o-footer__item">
                                <Link className="o-footer__link" href="/shop">
                                    Shop From Our Farm
                                </Link>
                            </li>
                            <li className="o-footer__item">
                                <Link
                                    className="o-footer__link"
                                    href="/contact"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li
                                className="o-footer__item"
                                style={{ padding: '4px 0' }}
                            >
                                &nbsp;
                            </li>
                            <h3 className="o-footer__label">Support</h3>
                            <li className="o-footer__item">
                                <Link className="o-footer__link" href="/faqs">
                                    Frequently Asked Questions
                                </Link>
                            </li>
                            <li className="o-footer__item">
                                <Link
                                    className="o-footer__link"
                                    href="/support"
                                >
                                    Need Support?
                                </Link>
                            </li>
                            <li className="o-footer__item">
                                <Link
                                    className="o-footer__link"
                                    href="/privacy"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="o-footer__art">
                <div className="o-footer__image" />
            </div>
            <div className="o-footer__bottom">
                <div className="o-subfooter">
                    <div className="o-subfooter__main">
                        <p className="o-subfooter__copyright" id="currentYear">
                            &copy; Fun Farming{' '}
                            <span id="year">{currentYear}</span>
                        </p>
                        <div className="o-subfooter__trademark">
                            <a
                                className="c-trademark"
                                href="https://funfarminguganda.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Looking Forward To Your Visit"
                            >
                                <span className="c-trademark__text">
                                    <span>Fun Farming Uganda</span>
                                    <span
                                        className="c-trademark__love"
                                        title="Thanks For Visiting Fun Farming Uganda"
                                    />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
