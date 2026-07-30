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

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="homepage1-body">
            <div
                className={`vl-header-area vl-transparent-header ${isSticky ? 'header-sticky' : ''}`}
                id="vl-header-sticky"
            >
                <div className="header-top-area d-none d-lg-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="header-top-main">
                                    <ul className="header-location">
                                        <li>
                                            <a href="/">
                                                Organic Farm & Agro Tourism in
                                                Nakaseke, Uganda{' '}
                                                <span>Contact Us</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="header-phn-area">
                                        <a
                                            className="header-phn-mail"
                                            href="mailto:info@funfarminguganda.com"
                                        >
                                            <i className="fa-regular fa-envelope"></i>{' '}
                                            info@funfarminguganda.com
                                        </a>
                                        <span className="header-top-line">
                                            |
                                        </span>
                                        <a
                                            href="tel:+256700000000"
                                            className="header-time"
                                        >
                                            <i className="fa-solid fa-phone"></i>{' '}
                                            +256 700 000 000
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vl-header-content-area cream-bg">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-md-8 col-6">
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
                                <div className="vl-main-menu text-center home1_padding">
                                    <nav className="vl-mobile-menu-active">
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
                            <div className="col-xl-3 col-md-4 col-6">
                                <div className="vl-menu-sidebar-area">
                                    <div className="sidebar-cart">
                                        <img
                                            src="/assets/img/icon/cart-icon.svg"
                                            alt=""
                                        />
                                        <span>
                                            <a href="/contact">0</a>
                                        </span>
                                    </div>
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
                                                stroke="#4CAE47"
                                                strokeOpacity="0.4"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className="vl-header-btn d-none d-xl-block text-end">
                                        <div className="btn_area3">
                                            <Link
                                                href="/contact"
                                                className="vl-btn3"
                                            >
                                                Book Your Visit
                                                <span className="arrow_btn3">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="32"
                                                        height="32"
                                                        viewBox="0 0 32 32"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M27.002 16.002H5.00195"
                                                            stroke="#132C12"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M21.0021 22.002C21.0021 22.002 27.002 17.5831 27.002 16.002C27.002 14.4208 21.002 10.002 21.002 10.002"
                                                            stroke="#132C12"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="vl-header-action-item d-block d-xl-none">
                                        <button
                                            type="button"
                                            className="vl-offcanvas-toggle"
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
