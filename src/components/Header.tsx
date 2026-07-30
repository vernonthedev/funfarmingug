'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Activities', href: '/activities' },
    { label: 'Farm Lounge', href: '/lounge' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
];

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="homepage6-body">
            <div
                className={`vl-header-area vl-transparent-header ${isSticky ? 'sticky-header' : ''}`}
                id="vl-header-sticky"
            >
                <div className="header-top-area header6-top-bg d-lg-block d-none">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="header-top-main">
                                    <ul className="header-location">
                                        <li>
                                            <a className="clr-white" href="/#">
                                                Organic Farm & Agro Tourism in Nakaseke, Uganda{' '}
                                                <span>Contact Us</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="header-phn-area">
                                        <a
                                            className="header-phn-mail clr-white"
                                            href="mailto:info@funfarminguganda.com"
                                        >
                                            <i className="fa-regular fa-envelope"></i>
                                            {' '}info@funfarminguganda.com
                                        </a>
                                        <span className="header-top-line">|</span>
                                        <a href="tel:+256700000000" className="header-time header6-time">
                                            <i className="fa-solid fa-phone"></i>
                                            {' '}+256 700 000 000
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vl-header-content-area white-bg">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-md-6 col-6">
                                <div className="vl-logo">
                                    <Link href="/">
                                        <img
                                            src="/img/favicons/logo.png"
                                            alt="Fun Farming Uganda"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-7 d-none d-xl-block">
                                <div className="vl-main-menu text-center">
                                    <nav className="vl-mobile-menu-active vl-menu-hm6-fxr">
                                        <ul>
                                            {navItems.map((item) => (
                                                <li key={item.href}>
                                                    <Link href={item.href}>
                                                        {item.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-6">
                                <div className="vl-menu-sidebar-area">
                                    <div className="menu-line">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1"
                                            height="25"
                                            viewBox="0 0 1 25"
                                            fill="none"
                                        >
                                            <path
                                                d="M0.5 0.5L0.499999 24.5"
                                                stroke="#1A5632"
                                                strokeOpacity="0.3"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className="vl-header-btn d-none d-xl-block text-end">
                                        <div className="header6-btn">
                                            <Link href="/contact" className="btn-home6">
                                                Start Growing Now
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="vl-header-action-item d-block d-xl-none">
                                        <button
                                            type="button"
                                            className="vl-offcanvas-toggle"
                                            onClick={() => setMobileNavOpen(true)}
                                        >
                                            <i className="fa-solid fa-bars-staggered"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
