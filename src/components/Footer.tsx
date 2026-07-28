import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="main-footer__bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/footer-1-1.jpg)' }}></div>
      <div className="main-footer__shape-one">
        <img src="/assets/images/shapes/shape-footer2.png" alt="" />
      </div>
      <div className="main-footer__shape-two" style={{ backgroundImage: 'url(/assets/images/shapes/shape-footer.png)' }}></div>

      <div className="main-footer__top">
        <div className="container">
          <div className="row gutter-y-50">
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="footer-widget footer-widget--about">
                <Link href="/" className="footer-widget__logo">
                  <img src="/assets/images/logo-light.png" width="222" alt="Fun Farming Uganda" />
                </Link>
                <p className="footer-widget__text">
                  Fun Farming Uganda is an organic farm engaging in diverse agricultural activities like goat breeding, poultry farming, banana plantation. We serve as a youth agro project educating and involving young individuals in sustainable farming practices.
                </p>
                <div className="footer-widget__social-links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" aria-hidden="true"></i><span className="sr-only">Facebook</span></a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" aria-hidden="true"></i><span className="sr-only">Twitter</span></a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" aria-hidden="true"></i><span className="sr-only">Linkedin</span></a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" aria-hidden="true"></i><span className="sr-only">Instagram</span></a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="footer-widget footer-widget--links">
                <h2 className="footer-widget__title">Our Service</h2>
                <ul className="list-unstyled footer-widget__links">
                  <li><i className="fas fa-circle"></i><Link href="/services/fertilization">Fertilization Service</Link></li>
                  <li><i className="fas fa-circle"></i><Link href="/services/pruning-tree-trimming">Pruning Tree Trimming</Link></li>
                  <li><i className="fas fa-circle"></i><Link href="/services/spring-cleaning">Spring Cleaning Service</Link></li>
                  <li><i className="fas fa-circle"></i><Link href="/services/leader-landscaping">Leader In Landscaping</Link></li>
                  <li><i className="fas fa-circle"></i><Link href="/services/market-analysis">Market Analysis Garden</Link></li>
                  <li><i className="fas fa-circle"></i><Link href="/contact">Contact</Link></li>
                  <li><i className="fas fa-circle"></i><Link href="/about">About</Link></li>
                  <li><i className="fas fa-circle"></i><Link href="/faqs">FAQ</Link></li>
                  <li><i className="fas fa-circle"></i><Link href="/gallery">Gallery</Link></li>
                  <li><i className="fas fa-circle"></i><Link href="/contact">Maps</Link></li>
                  <li><i className="fas fa-circle"></i><Link href="/blog">Blog</Link></li>
                  <li><i className="fas fa-circle"></i><Link href="/services">Services</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-2">
              <div className="footer-widget footer-widget--links-two">
                <h2 className="footer-widget__title">Quick Link</h2>
                <ul className="list-unstyled footer-widget__links-two">
                  <li><Link href="/faqs">What We Do</Link></li>
                  <li><Link href="/about">About Company</Link></li>
                  <li><Link href="/team">Team Member</Link></li>
                  <li><Link href="/gallery">Our Gallery</Link></li>
                  <li><Link href="/about">Watch Video</Link></li>
                  <li><Link href="/blog">Latest News</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="footer-widget footer-widget--post">
                <h2 className="footer-widget__title">Recent Posts</h2>
                <ul className="list-unstyled">
                  <li className="footer-widget--post__item">
                    <div className="footer-widget--post__img">
                      <img src="/assets/images/resources/footer-post-1.jpg" alt="post" />
                      <span>01</span>
                    </div>
                    <div className="footer-widget--post__content">
                      <span className="footer-widget--post__date">23 Jun 2024</span>
                      <h3 className="footer-widget--post__title"><Link href="/blog/details">Sustainable Farming Practices</Link></h3>
                    </div>
                  </li>
                  <li className="footer-widget--post__item">
                    <div className="footer-widget--post__img">
                      <img src="/assets/images/resources/footer-post-2.jpg" alt="post" />
                      <span>02</span>
                    </div>
                    <div className="footer-widget--post__content">
                      <span className="footer-widget--post__date">23 Jun 2024</span>
                      <h3 className="footer-widget--post__title"><Link href="/blog/details">Sustainable Farming Practices</Link></h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-footer__bottom wow fadeInUp" data-wow-delay="00ms">
        <div className="container">
          <div className="main-footer__bottom__inner">
            <p className="main-footer__copyright">
              &copy; Copyright <span className="dynamic-year">{new Date().getFullYear()}</span> by Fun Farming Uganda.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}