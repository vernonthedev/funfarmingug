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
        <header className={`${isSticky ? 'sticky' : ''}`}>
            <div className="header-top d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header-top-main d-flex justify-content-between align-items-center">
                                <ul className="header-location list-unstyled mb-0">
                                    <li>
                                        <a href="/#">
                                            Organic Farm & Agro Tourism in Nakaseke, Uganda{' '}
                                            <span>Contact Us</span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="header-contact d-flex align-items-center gap-3">
                                    <a href="mailto:info@funfarminguganda.com">
                                        <i className="fa-regular fa-envelope"></i>
                                        {' '}info@funfarminguganda.com
                                    </a>
                                    <span>|</span>
                                    <a href="tel:+256700000000">
                                        <i className="fa-solid fa-phone"></i>
                                        {' '}+256 700 000 000
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-content">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-md-6 col-6">
                            <div className="logo">
                                <Link href="/">
                                    <img
                                        src="/img/favicons/logo.png"
                                        alt="Fun Farming Uganda"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-7 d-none d-xl-block">
                            <div className="main-menu text-center">
                                <nav>
                                    <ul className="list-unstyled mb-0">
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
                            <div className="header-actions d-flex align-items-center justify-content-end">
                                <div className="header-cta d-none d-xl-block">
                                    <Link href="/contact" className="btn btn-primary">
                                        Start Growing Now
                                    </Link>
                                </div>

                                <div className="mobile-toggle d-block d-xl-none">
                                    <button
                                        type="button"
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
        </header>
    );
}
