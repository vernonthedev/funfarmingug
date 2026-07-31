'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
    label: string;
    href: string;
    dropdown: Array<{
        label: string;
        href: string;
        submenu?: Array<{ label: string; href: string }>;
    }>;
}

const navItems: NavItem[] = [
    {
        label: 'Home',
        href: '#',
        dropdown: [
            { label: 'Home Style 01', href: '/' },
            { label: 'Home Style 02', href: '/index-2' },
            { label: 'Home Style 03', href: '/index-3' },
            { label: 'Home Style 04', href: '/index-4' },
            { label: 'Home Style 05', href: '/index-5' },
            { label: 'Home Style 06', href: '/index-6' },
            { label: 'Home Style 07', href: '/index-7' },
            { label: 'Home Style 08', href: '/index-8' },
            { label: 'Home Style 09', href: '/index-9' },
            { label: 'Home Style 10', href: '/index-10' },
        ],
    },
    {
        label: 'Pages',
        href: '#',
        dropdown: [
            { label: 'About Us', href: '/about-us' },
            { label: 'Our Team', href: '/team' },
            { label: 'Team Details', href: '/team-single' },
            { label: 'Testimonials', href: '/testimonials' },
            { label: 'Contact Us', href: '/contact' },
            { label: '404', href: '/404' },
        ],
    },
    {
        label: 'Service',
        href: '#',
        dropdown: [
            { label: 'Our Service', href: '/service' },
            {
                label: 'Service Details',
                href: '#',
                submenu: [
                    { label: 'Service Left', href: '/service-left' },
                    { label: 'Service Right', href: '/service-right' },
                    { label: 'Service Single', href: '/service-single' },
                ],
            },
        ],
    },
    {
        label: 'Projects',
        href: '#',
        dropdown: [
            { label: 'Our Project', href: '/project' },
            {
                label: 'Project Details',
                href: '#',
                submenu: [
                    { label: 'Project Left', href: '/project-left' },
                    { label: 'Project Right', href: '/project-right' },
                    { label: 'Project Single', href: '/projects-single' },
                ],
            },
        ],
    },
    {
        label: 'Blog',
        href: '#',
        dropdown: [
            { label: 'Our Blog', href: '/blog' },
            {
                label: 'Blog Details',
                href: '#',
                submenu: [
                    { label: 'Blog Left', href: '/blog-left' },
                    { label: 'Blog Right', href: '/blog-right' },
                    { label: 'Blog Single', href: '/blog-single' },
                ],
            },
        ],
    },
    {
        label: 'Contact',
        href: '/contact',
        dropdown: [],
    },
];

function MobileSubmenu({
    sub,
    openDropdown,
    toggleDropdown,
}: {
    sub: {
        label: string;
        href: string;
        submenu?: Array<{ label: string; href: string }>;
    };
    openDropdown: string | null;
    toggleDropdown: (label: string) => void;
}) {
    if (sub.submenu) {
        return (
            <>
                <Link
                    href={sub.href}
                    className="span-arrow dropdown-toggle"
                    onClick={(e) => {
                        e.preventDefault();
                        toggleDropdown(sub.label);
                    }}
                >
                    {sub.label}
                    <span>
                        <i className="fa-solid fa-angle-right"></i>
                    </span>
                </Link>
                {openDropdown === sub.label && (
                    <ul className="sub-menu menu1 mobile-submenu-nested">
                        {sub.submenu.map((nested) => (
                            <li key={nested.label}>
                                <Link href={nested.href}>{nested.label}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </>
        );
    }
    return <Link href={sub.href}>{sub.label}</Link>;
}

function DesktopSubmenu({
    sub,
}: {
    sub: {
        label: string;
        href: string;
        submenu?: Array<{ label: string; href: string }>;
    };
}) {
    if (sub.submenu) {
        return (
            <>
                <Link
                    href={sub.href}
                    className="span-arrow"
                    onClick={(e) => e.preventDefault()}
                >
                    {sub.label}
                    <span>
                        <i className="fa-solid fa-angle-right d-xl-inline-block d-none"></i>
                    </span>
                </Link>
                <ul className="sub-menu menu1">
                    {sub.submenu.map((nested) => (
                        <li key={nested.label}>
                            <Link href={nested.href}>{nested.label}</Link>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
    return <Link href={sub.href}>{sub.label}</Link>;
}

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
    }, [pathname]);

    const toggleDropdown = (label: string) => {
        setOpenDropdown(openDropdown === label ? null : label);
    };

    return (
        <>
            {/* Mobile Offcanvas */}
            <div className={`homepage1-body ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="vl-offcanvas">
                    <div className="vl-offcanvas-wrapper">
                        <div className="vl-offcanvas-header d-flex justify-content-between align-items-center mb-90">
                            <div className="vl-offcanvas-logo">
                                <Link href="/">
                                    <img
                                        src="/assets/img/logo/logo-hm6.png"
                                        alt="Orgaanic Logo"
                                    />
                                </Link>
                            </div>
                            <div className="vl-offcanvas-close">
                                <button
                                    className="vl-offcanvas-close-toggle"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                        </div>

                        <div className="vl-offcanvas-menu d-xl-none mb-40">
                            <nav>
                                <ul className="mobile-nav">
                                    {navItems.map((item) => (
                                        <li
                                            key={item.label}
                                            className={
                                                item.dropdown.length > 0
                                                    ? 'has-dropdown'
                                                    : ''
                                            }
                                        >
                                            <Link
                                                href={item.href}
                                                className={
                                                    item.dropdown.length > 0
                                                        ? 'dropdown-toggle'
                                                        : ''
                                                }
                                                onClick={(e) => {
                                                    if (
                                                        item.dropdown.length > 0
                                                    ) {
                                                        e.preventDefault();
                                                        toggleDropdown(
                                                            item.label
                                                        );
                                                    }
                                                }}
                                            >
                                                {item.label}
                                                {item.dropdown.length > 0 && (
                                                    <span>
                                                        <i
                                                            className={`fa-solid fa-angle-down ${openDropdown === item.label ? 'rotate-180' : ''}`}
                                                        ></i>
                                                    </span>
                                                )}
                                            </Link>
                                            {item.dropdown.length > 0 &&
                                                openDropdown === item.label && (
                                                    <ul className="sub-menu mobile-submenu">
                                                        {item.dropdown.map(
                                                            (sub) => (
                                                                <li
                                                                    key={
                                                                        sub.label
                                                                    }
                                                                >
                                                                    <MobileSubmenu
                                                                        sub={
                                                                            sub
                                                                        }
                                                                        openDropdown={
                                                                            openDropdown
                                                                        }
                                                                        toggleDropdown={
                                                                            toggleDropdown
                                                                        }
                                                                    />
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <div className="space20"></div>
                        <div className="vl-offcanvas-info">
                            <h3 className="vl-offcanvas-sm-title">
                                Contact Us
                            </h3>
                            <div className="space20"></div>
                            <span>
                                <a href="mailto:cattlefarm@orgaanic.com">
                                    <i className="fa-regular fa-envelope"></i>{' '}
                                    cattlefarm@orgaanic.com
                                </a>
                            </span>
                            <span>
                                <a href="tel:+8801712345678">
                                    <i className="fa-solid fa-phone"></i> +880
                                    1712345678
                                </a>
                            </span>
                            <span>
                                <a href="#">
                                    <i className="fa-solid fa-location-dot"></i>{' '}
                                    Charabari, Shingra, Natore, Rajshahi,
                                    Bangladesh
                                </a>
                            </span>
                        </div>
                        <div className="space20"></div>
                        <div className="vl-offcanvas-social">
                            <h3 className="vl-offcanvas-sm-title">Follow Us</h3>
                            <div className="space20"></div>
                            <a href="#" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" aria-label="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" aria-label="LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="vl-offcanvas-overlay"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            </div>

            {/* Main Header */}
            <header
                className={`homepage6-body ${isScrolled ? 'scrolled' : ''}`}
            >
                <div
                    className={`vl-header-area vl-transparent-header ${isScrolled ? 'sticky' : ''}`}
                    id="vl-header-sticky"
                >
                    {/* Top Header Area */}
                    <div className="header-top-area header6-top-bg d-lg-block d-none">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="header-top-main">
                                        <ul className="header-location">
                                            <li>
                                                <a
                                                    className="clr-white"
                                                    href="/contact"
                                                >
                                                    Are you Ready to Free Tree
                                                    Services Today?{' '}
                                                    <span>Contact Us</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="header-phn-area">
                                            <a
                                                className="header-phn-mail clr-white"
                                                href="mailto:cattlefarm@orgaanic.com"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M3.33333 15.0052L7.5 10.0052M16.6667 15.0052L12.5 10.0052M2.5 6.67188L8.52083 10.6857C9.05542 11.0421 9.32267 11.2204 9.61158 11.2895C9.86692 11.3508 10.1331 11.3508 10.3884 11.2895C10.6773 11.2204 10.9446 11.0421 11.4792 10.6857L17.5 6.67188M5.16667 15.8385H14.8333C15.7667 15.8385 16.2335 15.8385 16.59 15.6569C16.9036 15.4971 17.1586 15.2421 17.3183 14.9285C17.5 14.572 17.5 14.1053 17.5 13.1719V6.83854C17.5 5.90512 17.5 5.43841 17.3183 5.08189C17.1586 4.76828 16.9036 4.51332 16.59 4.35353C16.2335 4.17187 15.7667 4.17188 14.8333 4.17188H5.16667C4.23325 4.17188 3.76653 4.17187 3.41002 4.35353C3.09641 4.51332 2.84144 4.76828 2.68166 5.08189C2.5 5.43841 2.5 5.90512 2.5 6.83854V13.1719C2.5 14.1053 2.5 14.572 2.68166 14.9285C2.84144 15.2421 3.09641 15.4971 3.41002 15.6569C3.76653 15.8385 4.23324 15.8385 5.16667 15.8385Z"
                                                        stroke="#FEF8E0"
                                                        strokeWidth="1.2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                cattlefarm@orgaanic.com
                                            </a>
                                            <span className="header-top-line">
                                                |
                                            </span>
                                            <a
                                                href="#"
                                                className="header-time header6-time"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12C21 7.03125 16.9688 3 12 3Z"
                                                        stroke="white"
                                                        strokeWidth="1.5"
                                                        strokeMiterlimit="10"
                                                    />
                                                    <path
                                                        d="M12 6V12.75H16.5"
                                                        stroke="white"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                Mon–Sat - 8am–6pm
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Header Content */}
                    <div className="vl-header-content-area white-bg">
                        <div className="container">
                            <div className="row align-items-center">
                                {/* Logo */}
                                <div className="col-xl-2 col-md-6 col-6">
                                    <div className="vl-logo">
                                        <Link href="/">
                                            <img
                                                src="/assets/img/logo/logo-hm6.png"
                                                alt="Orgaanic Logo"
                                            />
                                        </Link>
                                    </div>
                                </div>

                                {/* Main Navigation */}
                                <div className="col-xl-7 d-none d-xl-block">
                                    <div className="vl-main-menu text-center">
                                        <nav className="vl-mobile-menu-active vl-menu-hm6-fxr">
                                            <ul>
                                                {navItems.map((item) => (
                                                    <li
                                                        key={item.label}
                                                        className={
                                                            item.dropdown
                                                                .length > 0
                                                                ? 'has-dropdown'
                                                                : ''
                                                        }
                                                    >
                                                        <Link
                                                            href={item.href}
                                                            className={
                                                                item.dropdown
                                                                    .length > 0
                                                                    ? 'dropdown-toggle'
                                                                    : ''
                                                            }
                                                            onClick={(e) => {
                                                                if (
                                                                    item
                                                                        .dropdown
                                                                        .length >
                                                                        0 &&
                                                                    item.href ===
                                                                        '#'
                                                                ) {
                                                                    e.preventDefault();
                                                                }
                                                            }}
                                                        >
                                                            {item.label}
                                                            {item.dropdown
                                                                .length > 0 && (
                                                                <span>
                                                                    <i className="fa-solid fa-angle-down d-xl-inline d-none"></i>
                                                                </span>
                                                            )}
                                                        </Link>
                                                        {item.dropdown.length >
                                                            0 && (
                                                            <ul className="sub-menu">
                                                                {item.dropdown.map(
                                                                    (sub) => (
                                                                        <li
                                                                            key={
                                                                                sub.label
                                                                            }
                                                                        >
                                                                            <DesktopSubmenu
                                                                                sub={
                                                                                    sub
                                                                                }
                                                                            />
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                                {/* Header Actions */}
                                <div className="col-xl-3 col-md-6 col-6">
                                    <div className="vl-menu-sidebar-area">
                                        <div className="sidebar-cart sidebar-cart6">
                                            <img
                                                src="/assets/img/icon/cart-icon-hm6.svg"
                                                alt="Cart"
                                            />
                                            <span>
                                                <a href="#">0</a>
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
                                                    stroke="#1A5632"
                                                    strokeOpacity="0.3"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </div>
                                        <div className="vl-header-btn d-none d-xl-block text-end">
                                            <div className="header6-btn">
                                                <Link
                                                    href="/contact"
                                                    className="btn-home6"
                                                >
                                                    Start Growing Now
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="vl-header-action-item d-block d-xl-none">
                                            <button
                                                type="button"
                                                className="vl-offcanvas-toggle"
                                                onClick={() =>
                                                    setIsMobileMenuOpen(true)
                                                }
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

            {/* Progress Scroll Indicator */}
            <div className="paginacontainer">
                <div className="progress-wrap">
                    <svg
                        className="progress-circle svg-content"
                        width="100%"
                        height="100%"
                        viewBox="-1 -1 102 102"
                    >
                        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                    </svg>
                </div>
            </div>

            {/* Mouse Cursor */}
            <div className="mouseCursor cursor-outer"></div>
            <div className="mouseCursor cursor-inner"></div>
        </>
    );
}
