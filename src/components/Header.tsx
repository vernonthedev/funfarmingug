'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Activities', href: '/activities' },
    { label: 'Farm Lounge', href: '/lounge' },
    { label: 'FarmFood', href: '/farmfood' },
    { label: 'Blog', href: '/blog' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faqs' },
    { label: 'References', href: '/references' },
];

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="topbar-three">
                <div className="container">
                    <div className="topbar-three__inner">
                        <div className="topbar-three__info">
                            <span>NOTE :</span> Organic Farm & Agro Tourism in
                            Nakaseke, Uganda
                        </div>
                        <div className="topbar-three__social">
                            <a
                                href="https://facebook.com/funfarminguganda"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i
                                    className="fab fa-facebook-f"
                                    aria-hidden="true"
                                ></i>
                                <span className="sr-only">Facebook</span>
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
                                <span className="sr-only">Linkedin</span>
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
                                <span className="sr-only">Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="topbar-three__shape-left">
                    <img
                        src="/assets/images/shapes/header-top-3-1.png"
                        alt="images"
                    />
                </div>
                <div className="topbar-three__shape-right">
                    <img
                        src="/assets/images/shapes/header-top-3-2.png"
                        alt="images"
                    />
                </div>
            </div>

            <header
                className={`main-header main-header--three ${isSticky ? 'sticky-header sticky-header--normal' : ''}`}
            >
                <div className="container">
                    <div className="main-header__inner__box">
                        <div className="main-header__top">
                            <div className="main-header__inner">
                                <div className="main-header__logo">
                                    <Link href="/">
                                        <img
                                            src="/assets/images/logo-dark.png"
                                            alt="Fun Farming Uganda"
                                            width="223"
                                        />
                                    </Link>
                                </div>
                                <div className="main-header__right">
                                    <ul className="main-header__list">
                                        <li className="main-header__list__item">
                                            <div className="main-header__list__icon">
                                                <i className="icon-email"></i>
                                            </div>
                                            <div className="main-header__list__content">
                                                <h5 className="main-header__list__title">
                                                    Email - Us
                                                </h5>
                                                <p className="main-header__list__link">
                                                    <a href="mailto:admin@funfarming.org">
                                                        admin@funfarming.org
                                                    </a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="main-header__list__item">
                                            <div className="main-header__list__icon">
                                                <i className="icon-pin"></i>
                                            </div>
                                            <div className="main-header__list__content">
                                                <h5 className="main-header__list__title">
                                                    Location
                                                </h5>
                                                <p className="main-header__list__link">
                                                    Nakaseke, Uganda
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="main-header__btn">
                                        <Link
                                            href="/contact"
                                            className="garlon-btn"
                                        >
                                            <span>Contact Us</span>
                                            <i className="icon-angle-small-right"></i>
                                        </Link>
                                    </div>
                                    <div className="main-header__info">
                                        <a
                                            href="javascript:void(0);"
                                            className="main-header__info__item search-toggler"
                                            onClick={() =>
                                                setSearchOpen(!searchOpen)
                                            }
                                        >
                                            <i className="icon-search"></i>
                                        </a>
                                    </div>
                                    <div
                                        className="mobile-nav__btn mobile-nav__toggler"
                                        onClick={() => setMobileNavOpen(true)}
                                    >
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="main-header__bottom">
                            <div className="main-header__inner">
                                <div className="main-header__logo">
                                    <Link href="/">
                                        <img
                                            src="/assets/images/logo-dark.png"
                                            alt="Fun Farming Uganda"
                                            width="223"
                                        />
                                    </Link>
                                </div>
                                <nav className="main-header__nav main-menu">
                                    <ul className="main-menu__list">
                                        {navItems.map((item, index) => (
                                            <li key={index}>
                                                <Link href={item.href}>
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                                <div className="main-header__btn">
                                    <Link
                                        href="/contact"
                                        className="garlon-btn"
                                    >
                                        <span>Contact Us</span>
                                        <i className="icon-angle-small-right"></i>
                                    </Link>
                                </div>
                                <div className="main-header__right">
                                    <div className="main-header__info">
                                        <a
                                            href="javascript:void(0);"
                                            className="main-header__info__item search-toggler"
                                            onClick={() =>
                                                setSearchOpen(!searchOpen)
                                            }
                                        >
                                            <i className="icon-search"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {searchOpen && (
                <div className="search-popup">
                    <div
                        className="search-popup__overlay"
                        onClick={() => setSearchOpen(false)}
                    ></div>
                    <div className="search-popup__content">
                        <form action="/search" method="GET">
                            <input
                                type="search"
                                name="search-term"
                                placeholder="Type Here to Search..."
                                autoFocus
                            />
                            <button type="submit">
                                <i className="icon-magnifying-glass"></i>
                            </button>
                        </form>
                        <button
                            className="search-popup__close"
                            onClick={() => setSearchOpen(false)}
                        >
                            <i className="fa fa-times"></i>
                        </button>
                    </div>
                </div>
            )}

            <div
                className={`mobile-nav__wrapper ${mobileNavOpen ? 'expanded' : ''}`}
            >
                <div
                    className="mobile-nav__overlay mobile-nav__toggler"
                    onClick={() => setMobileNavOpen(false)}
                ></div>
                <div className="mobile-nav__content">
                    <span
                        className="mobile-nav__close mobile-nav__toggler"
                        onClick={() => setMobileNavOpen(false)}
                    >
                        <i className="fa fa-times"></i>
                    </span>
                    <div className="logo-box">
                        <Link href="/" aria-label="logo image">
                            <img
                                src="/assets/images/logo-light.png"
                                width="155"
                                alt="Fun Farming Uganda"
                            />
                        </Link>
                    </div>
                    <div className="mobile-nav__container">
                        <ul className="main-menu__list">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setMobileNavOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <a href="mailto:admin@funfarming.org">
                                admin@funfarming.org
                            </a>
                        </li>
                        <li>
                            <i className="fa fa-phone-alt"></i>
                            <a href="tel:+256772826680">+256 772 826 680</a>
                        </li>
                    </ul>
                    <div className="mobile-nav__social">
                        <a
                            href="https://facebook.com/funfarminguganda"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i
                                className="fab fa-facebook-f"
                                aria-hidden="true"
                            ></i>
                            <span className="sr-only">Facebook</span>
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
                            <span className="sr-only">Linkedin</span>
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
                            <span className="sr-only">Instagram</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
