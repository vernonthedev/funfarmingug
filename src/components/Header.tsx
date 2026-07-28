'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '/', hasMegaMenu: true },
  { label: 'About', href: '/about' },
  {
    label: 'Pages',
    href: '#',
    children: [
      { label: 'Projects', children: [
        { label: 'Projects', href: '/projects' },
        { label: 'Project Details', href: '/projects/details' }
      ]},
      { label: 'Our Team', children: [
        { label: 'Team Page', href: '/team' },
        { label: 'Team Carousel', href: '/team/carousel' },
        { label: 'Team Details', href: '/team/details' }
      ]},
      { label: 'Testimonial', href: '/testimonials' },
      { label: 'Testimonial Carousel', href: '/testimonials/carousel' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Pricing Carousel', href: '/pricing/carousel' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'FAQs', href: '/faqs' },
      { label: '404 Error', href: '/404' },
    ]
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
    ]
  },
  {
    label: 'Shop',
    href: '#',
    children: [
      {
        label: 'Products',
        children: [
          { label: 'No sidebar', href: '/shop' },
          { label: 'Left sidebar', href: '/shop/left-sidebar' },
          { label: 'Right sidebar', href: '/shop/right-sidebar' },
        ]
      },
      { label: 'Products Carousel', href: '/shop/carousel' },
      { label: 'Product Details', href: '/shop/product-details' },
      { label: 'Cart', href: '/cart' },
      { label: 'Checkout', href: '/checkout' },
    ]
  },
  {
    label: 'News',
    href: '#',
    children: [
      {
        label: 'News Grid',
        children: [
          { label: 'No sidebar', href: '/news/grid' },
          { label: 'Left sidebar', href: '/news/grid/left-sidebar' },
          { label: 'Right sidebar', href: '/news/grid/right-sidebar' },
        ]
      },
      {
        label: 'News List',
        children: [
          { label: 'No sidebar', href: '/news/list' },
          { label: 'Left sidebar', href: '/news/list/left-sidebar' },
          { label: 'Right sidebar', href: '/news/list/right-sidebar' },
        ]
      },
      { label: 'News Carousel', href: '/news/carousel' },
      {
        label: 'News Details',
        children: [
          { label: 'No sidebar', href: '/news/details' },
          { label: 'Left sidebar', href: '/news/details/left-sidebar' },
          { label: 'Right sidebar', href: '/news/details/right-sidebar' },
        ]
      },
    ]
  },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderChild = (child: { label: string; href?: string; children?: Array<{ label: string; href: string }> }, childIndex: number) => {
    if (child.children) {
      return (
        <li key={childIndex}>
          <a href="javascript:void(0)">{child.label}</a>
          <ul className="sub-menu">
            {child.children.map((grandChild, grandChildIndex) => (
              <li key={grandChildIndex}><Link href={grandChild.href}>{grandChild.label}</Link></li>
            ))}
          </ul>
        </li>
      );
    }
    return <li key={childIndex}><Link href={child.href || '#'}>{child.label}</Link></li>;
  };

  return (
    <>
      {/* Topbar */}
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

      {/* Main Header */}
      <header className={`main-header main-header--three ${isSticky ? 'sticky-header sticky-header--normal' : ''}`}>
        <div className="container">
          <div className="main-header__inner__box">
            {/* Header Top */}
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
                    <a href="javascript:void(0);" className="main-header__info__item search-toggler" onClick={() => setSearchOpen(!searchOpen)}><i className="icon-search"></i></a>
                    <a href="/cart" className="main-header__info__item">
                      <i className="icon-torrly" aria-hidden="true"></i> <span className="main-header__info__number">2</span>
                    </a>
                  </div>
                  <div className="mobile-nav__btn mobile-nav__toggler" onClick={() => setMobileNavOpen(true)}>
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Header Bottom */}
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
                        {item.hasMegaMenu && (
                          <ul>
                            <li>
                              <section className="home-showcase">
                                <div className="container">
                                  <div className="home-showcase__inner">
                                    <div className="row">
                                      <div className="col-md-6 col-lg-3">
                                        <div className="demo-one__card">
                                          <div className="demo-one__image">
                                            <img src="/assets/images/home-showcase/home-1.jpg" alt="Fun Farming" />
                                            <div className="demo-one__btns">
                                              <Link href="/" className="garlon-btn demo-one__btn"><span>Multi Page</span> <i className="icon-angle-small-right"></i></Link>
                                              <Link href="/#one-page" className="garlon-btn demo-one__btn"><span>One Page</span> <i className="icon-angle-small-right"></i></Link>
                                            </div>
                                          </div>
                                          <div className="demo-one__content">
                                            <h3 className="demo-one__title"><Link href="/">Home Page 01</Link></h3>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-6 col-lg-3">
                                        <div className="demo-one__card">
                                          <div className="demo-one__image">
                                            <img src="/assets/images/home-showcase/home-2.jpg" alt="Fun Farming" />
                                            <div className="demo-one__btns">
                                              <Link href="/" className="garlon-btn demo-one__btn"><span>Multi Page</span> <i className="icon-angle-small-right"></i></Link>
                                              <Link href="/#one-page" className="garlon-btn demo-one__btn"><span>One Page</span> <i className="icon-angle-small-right"></i></Link>
                                            </div>
                                          </div>
                                          <div className="demo-one__content">
                                            <h3 className="demo-one__title"><Link href="/">Home Page 02</Link></h3>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-6 col-lg-3">
                                        <div className="demo-one__card">
                                          <div className="demo-one__image">
                                            <img src="/assets/images/home-showcase/home-3.jpg" alt="Fun Farming" />
                                            <div className="demo-one__btns">
                                              <Link href="/" className="garlon-btn demo-one__btn"><span>Multi Page</span> <i className="icon-angle-small-right"></i></Link>
                                              <Link href="/#one-page" className="garlon-btn demo-one__btn"><span>One Page</span> <i className="icon-angle-small-right"></i></Link>
                                            </div>
                                          </div>
                                          <div className="demo-one__content">
                                            <h3 className="demo-one__title"><Link href="/">Home Page 03</Link></h3>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-6 col-lg-3">
                                        <div className="demo-one__card">
                                          <div className="demo-one__image">
                                            <img src="/assets/images/home-showcase/home-4.jpg" alt="Fun Farming" />
                                            <div className="demo-one__btns">
                                              <Link href="/" className="garlon-btn demo-one__btn"><span>Multi Page</span> <i className="icon-angle-small-right"></i></Link>
                                              <Link href="/#one-page" className="garlon-btn demo-one__btn"><span>One Page</span> <i className="icon-angle-small-right"></i></Link>
                                            </div>
                                          </div>
                                          <div className="demo-one__content">
                                            <h3 className="demo-one__title"><Link href="/">Home Page 04</Link></h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </li>
                          </ul>
                        )}
                        {item.children && !item.hasMegaMenu && (
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
                    <a href="javascript:void(0);" className="main-header__info__item search-toggler" onClick={() => setSearchOpen(!searchOpen)}><i className="icon-search"></i></a>
                    <a href="/cart" className="main-header__info__item">
                      <i className="icon-torrly" aria-hidden="true"></i> <span className="main-header__info__number">2</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Popup */}
      {searchOpen && (
        <div className="search-popup">
          <div className="search-popup__overlay" onClick={() => setSearchOpen(false)}></div>
          <div className="search-popup__content">
            <form action="/search" method="GET">
              <input type="search" name="search-term" placeholder="Type Here to Search..." autoFocus />
              <button type="submit"><i className="icon-magnifying-glass"></i></button>
            </form>
            <button className="search-popup__close" onClick={() => setSearchOpen(false)}><i className="fa fa-times"></i></button>
          </div>
        </div>
      )}

      {/* Mobile Nav */}
      <div className={`mobile-nav__wrapper ${mobileNavOpen ? 'expanded' : ''}`}>
        <div className="mobile-nav__overlay mobile-nav__toggler" onClick={() => setMobileNavOpen(false)}></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler" onClick={() => setMobileNavOpen(false)}><i className="fa fa-times"></i></span>
          <div className="logo-box">
            <Link href="/" aria-label="logo image"><img src="/assets/images/logo-light.png" width="155" alt="Fun Farming Uganda" /></Link>
          </div>
          <div className="mobile-nav__container"></div>
          <ul className="mobile-nav__contact list-unstyled">
            <li><i className="fa fa-envelope"></i><a href="mailto:info@funfarminguganda.com">info@funfarminguganda.com</a></li>
            <li><i className="fa fa-phone-alt"></i><a href="tel:+256772826680">+256 772 826 680</a></li>
          </ul>
          <div className="mobile-nav__social">
            <a href="https://facebook.com"><i className="fab fa-facebook-f" aria-hidden="true"></i><span className="sr-only">Facebook</span></a>
            <a href="https://twitter.com"><i className="fab fa-twitter" aria-hidden="true"></i><span className="sr-only">Twitter</span></a>
            <a href="https://linkedin.com"><i className="fab fa-linkedin-in" aria-hidden="true"></i><span className="sr-only">Linkedin</span></a>
            <a href="https://instagram.com"><i className="fab fa-instagram" aria-hidden="true"></i><span className="sr-only">Instagram</span></a>
          </div>
        </div>
      </div>
    </>
  );
}