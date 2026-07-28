import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="footer-widget footer-widget__about">
                <div className="footer-widget__logo">
                  <Link href="/">
                    <img src="/assets/images/logo-light.png" alt="Fun Farming Uganda" width="223" />
                  </Link>
                </div>
                <p className="footer-widget__text">We are a professional gardening and landscaping company dedicated to transforming outdoor spaces into beautiful, functional environments.</p>
                <div className="footer-widget__social">
                  <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
                  <a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6">
              <div className="footer-widget footer-widget__links">
                <h4 className="footer-widget__title">Quick Links</h4>
                <ul className="footer-widget__list">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/projects">Projects</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="footer-widget footer-widget__links">
                <h4 className="footer-widget__title">Our Services</h4>
                <ul className="footer-widget__list">
                  <li><Link href="/services/fertilization">Fertilization Service</Link></li>
                  <li><Link href="/services/pruning-tree-trimming">Pruning & Tree Trimming</Link></li>
                  <li><Link href="/services/spring-cleaning">Spring Cleaning</Link></li>
                  <li><Link href="/services/leader-landscaping">Leader In Landscaping</Link></li>
                  <li><Link href="/services/market-analysis">Market Analysis Garden</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="footer-widget footer-widget__contact">
                <h4 className="footer-widget__title">Contact Us</h4>
                <ul className="footer-widget__contact-list">
                  <li>
                    <i className="icon-pin"></i>
                    <p>Kampala, Uganda</p>
                  </li>
                  <li>
                    <i className="icon-phone"></i>
                    <p><a href="tel:+256700000000">+256 700 000 000</a></p>
                  </li>
                  <li>
                    <i className="icon-email"></i>
                    <p><a href="mailto:info@funfarminguganda.com">info@funfarminguganda.com</a></p>
                  </li>
                  <li>
                    <i className="icon-clock"></i>
                    <p>Mon - Sat: 8:00 AM - 6:00 PM</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="container">
          <div className="site-footer__bottom-inner">
            <p className="site-footer__copyright">&copy; 2024 Fun Farming Uganda. All Rights Reserved.</p>
            <div className="site-footer__bottom-links">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}