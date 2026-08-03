import Image from 'next/image';
import Link from 'next/link';
import { SITE, FOOTER_LINKS } from '@/lib/site';

const Arrow = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width="14"
        height="16"
    >
        <path d="M264.547 70.633L440.547 238.633C445.297 243.164 447.984 249.445 447.984 256.008S445.297 268.852 440.547 273.383L264.547 441.383C254.953 450.508 239.766 450.164 230.609 440.57C221.453 431.07 221.797 415.82 231.422 406.633L364.09 280.008H24C10.75 280.008 0 269.258 0 256.008S10.75 232.008 24 232.008H364.09L231.422 105.383C221.797 96.227 221.453 80.977 230.609 71.445C239.766 61.852 254.953 61.508 264.547 70.633Z"></path>
    </svg>
);

export function Footer() {
    return (
        <footer className="footer style-2" id="footer-main">
            <div className="footer-top">
                <div className="tf-container w-1290">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-left">
                                <div className="icon style-circle">
                                    <i className="fa-solid fa-bell"></i>
                                </div>
                                <div className="content">
                                    <h2 className="title font-snowfall fs-45">
                                        Sign Up To Our Newsletter
                                    </h2>
                                    <p className="sub font-nunito">
                                        Stay updated with our latest news,
                                        events and farm activities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="footer-right">
                                <form
                                    action="#"
                                    method="post"
                                    className="d-block form-newsletter form-email style-3"
                                >
                                    <div className="sib-input sib-form-block">
                                        <input
                                            type="email"
                                            placeholder="Email address*"
                                            required
                                            className="input email"
                                        />
                                    </div>
                                    <div className="sib-form-block">
                                        <button
                                            className="sib-form-block__button sib-form-block__button-with-loader btn-send"
                                            type="submit"
                                        >
                                            <span className="icon-send"></span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-inner">
                <div className="tf-container w-1290">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-inner-wrap">
                                <div className="logo">
                                    <Link href="/">
                                        <Image
                                            src="/logo.png"
                                            alt="Fun Farming Uganda"
                                            width={220}
                                            height={50}
                                            unoptimized
                                        />
                                    </Link>
                                </div>
                                <p className="text font-nunito">
                                    Fun Farming Uganda offers organic farming,
                                    adventurous farm activities and fresh farm
                                    produce — where agriculture meets adventure.
                                </p>
                                <div className="wg-social">
                                    <ul className="list">
                                        <li className="item">
                                            <a href="#">
                                                <i className="icon-facebook1"></i>
                                            </a>
                                        </li>
                                        <li className="item">
                                            <a href="#">
                                                <i className="icon-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="item">
                                            <a href="#">
                                                <i className="icon-instagram2"></i>
                                            </a>
                                        </li>
                                        <li className="item">
                                            <a href="#">
                                                <i className="icon-pinterest"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-inner-wrap footer-col-block">
                                <h4 className="footer-title footer-title-desktop">
                                    Contact Us!
                                </h4>
                                <h4 className="footer-title footer-title-mobile">
                                    Contact Us!
                                </h4>
                                <ul className="contact-list tf-accordion-content">
                                    <li>
                                        <i className="fa-solid fa-location-dot fs-17"></i>
                                        <p className="address">
                                            {SITE.address}
                                        </p>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-phone"></i>
                                        <p className="phone-number fs-15">
                                            Call us: {SITE.phone}
                                        </p>
                                    </li>
                                    <li>
                                        <i className="icon-package-box"></i>
                                        <p className="email fs-15">
                                            Mail: {SITE.email}
                                        </p>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-clock"></i>
                                        <p
                                            className="time-open fs-15"
                                            dangerouslySetInnerHTML={{
                                                __html: SITE.workingHours,
                                            }}
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-inner-wrap footer-col-block">
                                <h4 className="footer-title footer-title-desktop mb-28">
                                    Quick Links
                                </h4>
                                <h4 className="footer-title footer-title-mobile mb-28">
                                    Quick Links
                                </h4>
                                <ul className="link-list tf-accordion-content">
                                    {FOOTER_LINKS[0].links.map((l) => (
                                        <li className="item" key={l.href}>
                                            <Link href={l.href}>
                                                <Arrow />
                                                {l.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-inner-wrap footer-col-block">
                                <h4 className="footer-title footer-title-desktop mb-28">
                                    Explore
                                </h4>
                                <h4 className="footer-title footer-title-mobile mb-28">
                                    Explore
                                </h4>
                                <ul className="link-list tf-accordion-content">
                                    {FOOTER_LINKS[1].links.map((l) => (
                                        <li className="item" key={l.href}>
                                            <Link href={l.href}>
                                                <Arrow />
                                                {l.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tf-container w-1290">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-bottom">
                            <p className="no-copy font-nunito">
                                Copyright © {new Date().getFullYear()} Fun
                                Farming Uganda.
                                <span> All Rights Reserved.</span>
                            </p>
                            <ul className="policy-list">
                                <li className="item">
                                    <Link href="/privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="item">
                                    <Link href="/farm-lounge">Farm Lounge</Link>
                                </li>
                                <li className="item">
                                    <Link href="/get-support">Get Support</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-item item-1">
                <img src="/images/item/grass-3.png" alt="" />
            </div>
            <div className="img-item item-2">
                <img src="/images/item/farmer.png" alt="" />
            </div>
        </footer>
    );
}
