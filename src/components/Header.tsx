'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [overlayMenuOpen, setOverlayMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Activities', href: '/activities' },
        { label: 'Farm Lounge', href: '/lounge' },
        { label: 'Blog', href: '/blog' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'FarmFood', href: '/farmfood' },
        { label: 'Contact', href: '/contact' },
    ];

    const overlayMenuItems = [
        { label: 'Home', href: '/' },
        { label: 'Activities', href: '/activities' },
        { label: 'FarmFood', href: '/farmfood' },
        { label: 'Farm Lounge', href: '/lounge' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
    ];

    const overlaySubItems = [
        { label: 'FarmShop', href: '/shop' },
        { label: 'About Us', href: '/about' },
        { label: 'Frequently Asked Questions', href: '/faqs' },
        { label: 'Our Customer Reviews', href: '/references' },
    ];

    return (
        <>
            {/* Sub Header */}
            <div className="c-sub-header">
                <div className="c-sub-header__main">
                    <nav className="c-sub-header__nav" role="navigation">
                        <ul className="c-sub-header__nav-list">
                            <li className="c-sub-header__nav-item">
                                <Link
                                    className="c-sub-header__link"
                                    href="/about"
                                >
                                    Who are we
                                </Link>
                            </li>
                            <li className="c-sub-header__nav-item">
                                <Link
                                    className="c-sub-header__link"
                                    href="/faqs"
                                >
                                    Frequently Asked Questions
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Main Header */}
            <header
                className={`o-header ${isSticky ? 'is-sticky js-sticky-header' : ''}`}
            >
                <div className="o-header__main js-header-main">
                    <Link className="o-header__logo" href="/">
                        <img
                            width="50"
                            height="50"
                            alt="Fun Farming Uganda Logo"
                            src="/img/logo.png"
                        />
                    </Link>
                    <div className="o-header__nav">
                        <nav className="c-nav" role="navigation">
                            <ul className="c-nav__list">
                                {navItems.map((item, index) => (
                                    <li key={index} className="c-nav__item">
                                        <Link
                                            className="c-nav__link"
                                            href={item.href}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                                <li className="c-nav__item c-nav__item--cart">
                                    <a
                                        className="c-cart-button"
                                        href="/shop"
                                        data-item="0"
                                    >
                                        <i className="c-cart-button__icon">
                                            <span className="c-cart-button__icon-placeholder">
                                                <span className="c-cart-button__speed-icons">
                                                    <span className="c-cart-button__speed-icon"></span>
                                                    <span className="c-cart-button__speed-icon"></span>
                                                </span>
                                                <svg width="32" height="32">
                                                    <use href="/img/icon-cart.svg#cart"></use>
                                                </svg>
                                            </span>
                                        </i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <li className="c-nav__item c-nav__item--cart c-nav__item--cart-mobile">
                        <a className="c-cart-button" href="/shop" data-item="0">
                            <i className="c-cart-button__icon">
                                <span className="c-cart-button__icon-placeholder">
                                    <span className="c-cart-button__speed-icons">
                                        <span className="c-cart-button__speed-icon"></span>
                                        <span className="c-cart-button__speed-icon"></span>
                                    </span>
                                    <svg width="32" height="32">
                                        <use href="/img/icon-cart.svg#cart"></use>
                                    </svg>
                                </span>
                            </i>
                        </a>
                    </li>
                    <div className="o-header__toggle js-nav-trigger">
                        <button
                            className="c-hamburger js-overlay-menu-trigger"
                            aria-expanded={overlayMenuOpen}
                            aria-controls="overlay-menu"
                            onClick={() => setOverlayMenuOpen(!overlayMenuOpen)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Sticky Header */}
            <header
                className="o-header is-sticky js-sticky-header"
                hidden={!isSticky}
            >
                <div className="o-header__main js-header-main">
                    <Link
                        className="o-header__logo"
                        href="/"
                        tabIndex={-1}
                        aria-label="Home"
                    >
                        <img
                            width="50"
                            height="50"
                            alt="Fun Farming Uganda Logo"
                            src="/img/logo.png"
                        />
                    </Link>
                    <div className="o-header__nav">
                        <nav className="c-nav" role="navigation">
                            <ul className="c-nav__list">
                                {navItems.map((item, index) => (
                                    <li key={index} className="c-nav__item">
                                        <Link
                                            className="c-nav__link"
                                            href={item.href}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                                <li className="c-nav__item c-nav__item--cart">
                                    <a
                                        className="c-cart-button"
                                        href="/shop"
                                        data-item="0"
                                    >
                                        <i className="c-cart-button__icon">
                                            <span className="c-cart-button__icon-placeholder">
                                                <span className="c-cart-button__speed-icons">
                                                    <span className="c-cart-button__speed-icon"></span>
                                                    <span className="c-cart-button__speed-icon"></span>
                                                </span>
                                                <svg width="32" height="32">
                                                    <use href="/img/icon-cart.svg#cart"></use>
                                                </svg>
                                            </span>
                                        </i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <li className="c-nav__item c-nav__item--cart c-nav__item--cart-mobile">
                        <a className="c-cart-button" href="/shop" data-item="0">
                            <i className="c-cart-button__icon">
                                <span className="c-cart-button__icon-placeholder">
                                    <span className="c-cart-button__speed-icons">
                                        <span className="c-cart-button__speed-icon"></span>
                                        <span className="c-cart-button__speed-icon"></span>
                                    </span>
                                    <svg width="32" height="32">
                                        <use href="/img/icon-cart.svg#cart"></use>
                                    </svg>
                                </span>
                            </i>
                        </a>
                    </li>
                    <div className="o-header__toggle js-nav-trigger">
                        <button
                            className="c-hamburger js-overlay-menu-trigger"
                            aria-expanded={overlayMenuOpen}
                            aria-controls="overlay-menu"
                            tabIndex={-1}
                            onClick={() => setOverlayMenuOpen(!overlayMenuOpen)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Overlay Menu */}
            <div
                className="o-overlay-menu js-overlay-menu"
                id="overlay-menu"
                hidden={!overlayMenuOpen}
            >
                <div className="o-overlay-menu__bar">
                    <Link
                        className="o-overlay-menu__logo"
                        href="/"
                        tabIndex={-99}
                    >
                        <img
                            width="50"
                            height="50"
                            alt="Fun Farming Uganda Logo"
                            src="/img/favicons/logo.png"
                        />
                    </Link>
                    <div className="o-overlay-menu__toggle">
                        <button
                            className="c-close js-overlay-menu-trigger"
                            aria-expanded={overlayMenuOpen}
                            aria-controls="overlay-menu"
                            tabIndex={-1}
                            onClick={() => setOverlayMenuOpen(false)}
                        ></button>
                    </div>
                </div>
                <nav className="o-overlay-menu__nav" role="navigation">
                    <div className="o-overlay-menu__cart">
                        <a
                            className="c-cart-button c-cart-button--animate"
                            href="/shop"
                            data-item="0"
                        >
                            <i className="c-cart-button__icon">
                                <span className="c-cart-button__icon-placeholder">
                                    <span className="c-cart-button__speed-icons">
                                        <span className="c-cart-button__speed-icon"></span>
                                        <span className="c-cart-button__speed-icon"></span>
                                    </span>
                                    <svg width="32" height="32">
                                        <use href="/img/icon-cart.svg#cart"></use>
                                    </svg>
                                </span>
                            </i>
                        </a>
                    </div>
                    <ul className="o-overlay-menu__list">
                        {overlayMenuItems.map((item, index) => (
                            <li key={index} className="o-overlay-menu__item">
                                <Link
                                    className="o-overlay-menu__link"
                                    href={item.href}
                                    onClick={() => setOverlayMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="o-overlay-menu__sublist">
                        {overlaySubItems.map((item, index) => (
                            <li key={index} className="o-overlay-menu__subitem">
                                <Link
                                    className="o-overlay-menu__sublink"
                                    href={item.href}
                                    onClick={() => setOverlayMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
}
