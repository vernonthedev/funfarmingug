'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/', hasMegaMenu: true },
    { label: 'About', href: '/about' },
    {
      label: 'Pages',
      href: '#',
      children: [
        { label: 'Projects', href: '/projects' },
        { label: 'Project Details', href: '/projects/details' },
        { label: 'Our Team', href: '/team' },
        { label: 'Team Carousel', href: '/team/carousel' },
        { label: 'Team Details', href: '/team/details' },
        { label: 'Testimonial', href: '/testimonials' },
        { label: 'Testimonial Carousel', href: '/testimonials/carousel' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Pricing Carousel', href: '/pricing/carousel' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'FAQs', href: '/faqs' },
        { label: '404 Error', href: '/404' },
      ],
    },
    {
      label: 'Services',
      href: '#',
      children: [
        { label: 'Services', href: '/services' },
        { label: 'Services Carousel', href: '/services/carousel' },
        { label: 'Fertilization Service', href: '/services/fertilization' },
        { label: 'Leader In Landscaping', href: '/services/leader-landscaping' },
        { label: 'Market Analysis Garden', href: '/services/market-analysis' },
        { label: 'Pruning Tree Trimming', href: '/services/pruning-tree-trimming' },
        { label: 'Spring Cleaning Service', href: '/services/spring-cleaning' },
      ],
    },
    {
      label: 'Shop',
      href: '#',
      children: [
        { label: 'Products (No Sidebar)', href: '/shop' },
        { label: 'Products (Left Sidebar)', href: '/shop/left-sidebar' },
        { label: 'Products (Right Sidebar)', href: '/shop/right-sidebar' },
        { label: 'Products Carousel', href: '/shop/carousel' },
        { label: 'Product Details', href: '/shop/product-details' },
        { label: 'Cart', href: '/cart' },
        { label: 'Checkout', href: '/checkout' },
      ],
    },
    {
      label: 'News',
      href: '#',
      children: [
        {
          label: 'News Grid',
          children: [
            { label: 'No Sidebar', href: '/news/grid' },
            { label: 'Left Sidebar', href: '/news/grid/left-sidebar' },
            { label: 'Right Sidebar', href: '/news/grid/right-sidebar' },
          ],
        },
        {
          label: 'News List',
          children: [
            { label: 'No Sidebar', href: '/news/list' },
            { label: 'Left Sidebar', href: '/news/list/left-sidebar' },
            { label: 'Right Sidebar', href: '/news/list/right-sidebar' },
          ],
        },
        { label: 'News Carousel', href: '/news/carousel' },
        {
          label: 'News Details',
          children: [
            { label: 'No Sidebar', href: '/news/details' },
            { label: 'Left Sidebar', href: '/news/details/left-sidebar' },
            { label: 'Right Sidebar', href: '/news/details/right-sidebar' },
          ],
        },
      ],
    },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`main-header main-header--three sticky-header ${isSticky ? 'sticky-header--normal' : ''}`}>
      <div className="topbar-three">
        <div className="container">
          <div className="topbar-three__inner">
            <div className="topbar-three__info">
              <span>NOTE :</span> Professional Company for Gardening & Lawncare Service.
            </div>
            <div className="topbar-three__social">
              <a href="https://facebook.com"><i className="fab fa-facebook-f" aria-hidden="true"></i><span className="sr-only">Facebook</span></a>
              <a href="https://twitter.com"><i className="fab fa-twitter" aria-hidden="true"></i><span className="sr-only">Twitter</span></a>
              <a href="https://linkedin.com"><i className="fab fa-linkedin-in" aria-hidden="true"></i><span className="sr-only">Linkedin</span></a>
              <a href="https://instagram.com"><i className="fab fa-instagram" aria-hidden="true"></i><span className="sr-only">Instagram</span></a>
            </div>
          </div>
        </div>
        <div className="topbar-three__shape-left">
          <img src="/assets/images/shapes/header-top-3-1.png" alt="images" />
        </div>
        <div className="topbar-three__shape-right">
          <img src="/assets/images/shapes/header-top-3-2.png" alt="images" />
        </div>
      </div>

      <div className="container">
        <div className="main-header__inner__box">
          <div className="main-header__top">
            <div className="main-header__inner">
              <div className="main-header__logo">
                <Link href="/">
                  <img src="/assets/images/logo-dark.png" alt="Fun Farming Uganda" width="223" />
                </Link>
              </div>
              <div className="main-header__right">
                <ul className="main-header__list">
                  <li className="main-header__list__item">
                    <div className="main-header__list__icon">
                      <i className="icon-email"></i>
                    </div>
                    <div className="main-header__list__content">
                      <h5 className="main-header__list__title">Email - Us</h5>
                      <p className="main-header__list__link"><a href="mailto:info@funfarminguganda.com">info@funfarminguganda.com</a></p>
                    </div>
                  </li>
                  <li className="main-header__list__item">
                    <div className="main-header__list__icon">
                      <i className="icon-pin"></i>
                    </div>
                    <div className="main-header__list__content">
                      <h5 className="main-header__list__title">Location</h5>
                      <p className="main-header__list__link">Kampala, Uganda</p>
                    </div>
                  </li>
                </ul>
                <div className="main-header__btn">
                  <Link href="/contact" className="garlon-btn"><span>Discover More</span><i className="icon-angle-small-right"></i></Link>
                </div>
                <div className="main-header__info">
                  <a href="javascript:void(0);" className="main-header__info__item search-toggler"><i className="icon-search"></i></a>
                  <a href="/cart" className="main-header__info__item">
                    <i className="icon-torrly" aria-hidden="true"></i><span className="main-header__info__number">02</span>
                  </a>
                </div>
                <div className="mobile-nav__btn mobile-nav__toggler" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="main-header__bottom">
            <div className="main-header__inner">
              <div className="main-header__logo">
                <Link href="/">
                  <img src="/assets/images/logo-dark.png" alt="Fun Farming Uganda" width="223" />
                </Link>
              </div>
              <nav className="main-header__nav main-menu">
                <ul className="main-menu__list">
                  {navItems.map((item, index) => (
                    <li key={index} className={item.hasMegaMenu ? 'dropdown megamenu' : item.children ? 'dropdown' : ''}>
                      <Link href={item.href}>{item.label}</Link>
                      {item.children && (
                        <ul className="sub-menu">
                          {item.children.map((child, childIndex) => (
                            <li key={childIndex}>
                              {child.children ? (
                                <>
                                  <a href="javascript:void(0)">{child.label}</a>
                                  <ul className="sub-menu">
                                    {child.children.map((grandChild, grandChildIndex) => (
                                      <li key={grandChildIndex}><Link href={grandChild.href}>{grandChild.label}</Link></li>
                                    ))}
                                  </ul>
                                </>
                              ) : (
                                <Link href={child.href}>{child.label}</Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="main-header__btn">
                <Link href="/contact" className="garlon-btn"><span>Discover More</span><i className="icon-angle-small-right"></i></Link>
              </div>
              <div className="main-header__right">
                <div className="main-header__info">
                  <a href="javascript:void(0);" className="main-header__info__item search-toggler"><i className="icon-search"></i></a>
                  <a href="/cart" className="main-header__info__item">
                    <i className="icon-torrly" aria-hidden="true"></i><span className="main-header__info__number">02</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-nav__wrapper" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-nav__overlay" onClick={(e) => e.stopPropagation()} />
          <div className="mobile-nav__content" onClick={(e) => e.stopPropagation()}>
            <span className="mobile-nav__close" onClick={() => setMobileMenuOpen(false)}><i className="icon-close"></i></span>
            <nav className="mobile-nav">
              <ul className="mobile-nav__list">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} onClick={() => setMobileMenuOpen(false)}>{item.label}</Link>
                    {item.children && (
                      <ul>
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            {child.children ? (
                              <>
                                <a href="javascript:void(0)">{child.label}</a>
                                <ul>
                                  {child.children.map((grandChild, grandChildIndex) => (
                                    <li key={grandChildIndex}><Link href={grandChild.href} onClick={() => setMobileMenuOpen(false)}>{grandChild.label}</Link></li>
                                  ))}
                                </ul>
                              </>
                            ) : (
                              <Link href={child.href} onClick={() => setMobileMenuOpen(false)}>{child.label}</Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}