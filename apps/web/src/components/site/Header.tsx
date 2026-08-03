'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV, SITE } from '@/lib/site';

export function Header() {
    const pathname = usePathname();
    const isHome = pathname === '/';

    return (
        <>
            {isHome ? (
                <HomeHeader pathname={pathname} />
            ) : (
                <InnerHeader pathname={pathname} />
            )}

            {/* Open-search */}
            <div
                className="offcanvas offcanvas-top offcanvas-search"
                id="canvasSearch"
            >
                <button
                    className="btn-close-search"
                    type="button"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                >
                    <i className="icon-close"></i>
                </button>
                <div className="tf-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="offcanvas-body">
                                <form
                                    action="#"
                                    className="form-search-courses"
                                >
                                    <div className="icon">
                                        <i className="icon-keyboard"></i>
                                    </div>
                                    <fieldset>
                                        <input
                                            className=""
                                            type="text"
                                            placeholder="Search for anything"
                                            name="text"
                                            tabIndex={2}
                                            aria-required="true"
                                            required
                                        />
                                    </fieldset>
                                    <div className="button-submit">
                                        <button className="" type="submit">
                                            <i className="icon-magnifying-glass"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Progress */}
            <div className="progress-wrap">
                <svg
                    className="progress-circle svg-content"
                    width="100%"
                    height="100%"
                    viewBox="-1 -1 102 102"
                >
                    <path
                        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                        style={{
                            strokeDasharray: '307.919',
                            strokeDashoffset: '307.919',
                        }}
                    ></path>
                </svg>
            </div>
        </>
    );
}

const isActive = (href: string, pathname: string) =>
    href !== '/' && (pathname === href || pathname.startsWith(href + '/'));

function DesktopNav({ pathname }: { pathname: string }) {
    return (
        <ul className="nav-list">
            {NAV.map((item) => (
                <li
                    key={item.label}
                    className={`item ${item.children ? 'has-child' : ''} ${
                        isActive(item.href, pathname) ? 'current-menu' : ''
                    }`}
                >
                    {item.children ? (
                        <>
                            <a href="javascript:void(0)">{item.label}</a>
                            <ul className="sub-nav">
                                {item.children.map((c) => (
                                    <li
                                        key={c.href}
                                        className={
                                            pathname === c.href
                                                ? 'current-item'
                                                : ''
                                        }
                                    >
                                        <Link href={c.href}>
                                            <span>{c.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <Link href={item.href}>{item.label}</Link>
                    )}
                </li>
            ))}
        </ul>
    );
}

function MobileMenu() {
    return (
        <ul id="menu-mobile-menu" className="menu">
            {NAV.map((item) =>
                item.children ? (
                    <li
                        key={item.label}
                        className="menu-item menu-item-has-children-mobile"
                    >
                        <a
                            className="item-menu-mobile"
                            href="javascript:void(0)"
                        >
                            {item.label}
                            <i className="icon-arrow_down"></i>
                        </a>
                        <ul className="sub-menu-mobile">
                            {item.children.map((c) => (
                                <li key={c.href} className="menu-item">
                                    <Link href={c.href}>{c.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ) : (
                    <li className="menu-item" key={item.label}>
                        <Link className="item-menu-mobile" href={item.href}>
                            {item.label}
                        </Link>
                    </li>
                )
            )}
        </ul>
    );
}

function MobileNavWrap() {
    return (
        <div className="mobile-nav-wrap">
            <div className="overlay-mobile-nav"></div>
            <div className="inner-mobile-nav overflow-y-auto">
                <div className="top">
                    <div className="logo">
                        <Link href="/" rel="home" className="main-logo">
                            <Image
                                id="mobile-logo_header"
                                src="/logo.png"
                                alt="Fun Farming Uganda"
                                width={180}
                                height={40}
                                unoptimized
                            />
                        </Link>
                        <div className="mobile-nav-close">
                            <i className="icon-close"></i>
                        </div>
                    </div>
                    <nav id="mobile-main-nav" className="mobile-main-nav">
                        <MobileMenu />
                    </nav>
                </div>
            </div>
        </div>
    );
}

function HeaderRight({ btnClass }: { btnClass: string }) {
    return (
        <div className="header-right">
            <div className="icon-wrap">
                <a
                    className="icon header-search"
                    href="#canvasSearch"
                    data-bs-toggle="offcanvas"
                >
                    <i className="icon-magnifying-glass fs-21"></i>
                </a>
            </div>
            <Link href="/contact-us" className={btnClass}>
                <span className="text-style cl-primary">Get In Touch!</span>
                <div className="icon">
                    <i className="icon-arrow_right"></i>
                </div>
            </Link>
            <div className="mobile-button">
                <span></span>
            </div>
        </div>
    );
}

function HomeLogo() {
    return (
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
    );
}

function HomeHeader({ pathname }: { pathname: string }) {
    return (
        <>
            {/* Bg-page */}
            <div className="bg-page absolute">
                <div className="image">
                    <img
                        className="lazyload"
                        src="/images/item/yellow-field.jpg"
                        alt=""
                    />
                </div>
            </div>

            {/* Header wrap */}
            <div className="header-wrap absolute">
                {/* Top-bar */}
                <div className="tf-topbar style-2">
                    <div className="tf-container w-1620">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="topbar-inner">
                                    <div className="topbar-left">
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
                                    </div>
                                    <div className="topbar-right">
                                        <ul className="contact-list">
                                            <li className="item">
                                                <div className="icon">
                                                    <i className="icon-map-pin"></i>
                                                </div>
                                                <div className="infor">
                                                    <p className="title">
                                                        Farm Address
                                                    </p>
                                                    <p className="text">
                                                        {SITE.address}
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="item">
                                                <div className="icon">
                                                    <i className="icon-envelope-open"></i>
                                                </div>
                                                <div className="infor">
                                                    <p className="title">
                                                        Contact & Support
                                                    </p>
                                                    <p className="text">
                                                        Mail Us: {SITE.email}
                                                        <br />
                                                        Call Us 24/7:{' '}
                                                        {SITE.phone}
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="item">
                                                <div className="icon">
                                                    <i className="icon-clock"></i>
                                                </div>
                                                <div className="infor">
                                                    <p className="title">
                                                        Working Hours
                                                    </p>
                                                    <p
                                                        className="text"
                                                        dangerouslySetInnerHTML={{
                                                            __html: SITE.workingHours,
                                                        }}
                                                    />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <ul className="contact-list mobile">
                                        <li className="item">
                                            <div className="icon">
                                                <i className="fa-solid fa-location-dot"></i>
                                            </div>
                                            <p className="text">
                                                {SITE.address}
                                            </p>
                                        </li>
                                        <li className="item">
                                            <div className="icon">
                                                <i className="fa-solid fa-phone"></i>
                                            </div>
                                            <p className="text">{SITE.phone}</p>
                                        </li>
                                        <li className="item">
                                            <div className="icon">
                                                <i className="fa-solid fa-envelope"></i>
                                            </div>
                                            <p className="text">{SITE.email}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Header */}
                <header className="header style-2" id="header-main">
                    <div className="tf-container w-1620">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-inner">
                                    <div className="header-left">
                                        <HomeLogo />
                                        <div className="main-nav">
                                            <DesktopNav pathname={pathname} />
                                        </div>
                                    </div>
                                    <HeaderRight btnClass="tf-btn bg-white gap-30" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <MobileNavWrap />
                </header>
            </div>
        </>
    );
}

function InnerHeader({ pathname }: { pathname: string }) {
    return (
        <>
            {/* Top-bar */}
            <div className="tf-topbar">
                <div className="tf-container w-1780">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="topbar-inner">
                                <div className="topbar-left">
                                    <span className="fs-14 font-nunito">
                                        Welcome to Fun Farming Uganda
                                    </span>
                                    <span className="fs-14 font-nunito">
                                        Agriculture & Organic Farms
                                    </span>
                                </div>
                                <div className="topbar-right">
                                    <ul className="contact-list">
                                        <li className="item">
                                            <a href="#" className="icon">
                                                <i className="fa-solid fa-phone"></i>
                                            </a>
                                            <a href="#">{SITE.phone}</a>
                                        </li>
                                        <li className="item">
                                            <a href="#" className="icon">
                                                <i className="fa-solid fa-envelope"></i>
                                            </a>
                                            <a href="#">{SITE.email}</a>
                                        </li>
                                        <li className="item">
                                            <a href="#" className="icon">
                                                <i className="fa-solid fa-location-dot"></i>
                                            </a>
                                            <a href="#">{SITE.address}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header */}
            <header className="header has-item-bot" id="header-main">
                <div className="tf-container w-1780">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-inner">
                                <div className="header-left">
                                    <div className="logo-site">
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
                                    <div className="main-nav">
                                        <DesktopNav pathname={pathname} />
                                    </div>
                                </div>
                                <HeaderRight btnClass="tf-btn gap-30" />
                            </div>
                        </div>
                    </div>
                </div>
                <MobileNavWrap />
                <div className="header-item children absolute">
                    <img src="/images/item/page-title-top.png" alt="" />
                </div>
            </header>
        </>
    );
}
