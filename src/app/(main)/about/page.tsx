'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: 'url(/assets/images/backgrounds/page-header.jpg)' }}>
        <div className="container">
          <div className="page-header__inner">
            <h2 className="page-header__title">About Us</h2>
            <ul className="thm-breadcrumb list-unstyled">
              <li><Link href="/">Home</Link></li>
              <li><span aria-hidden="true">/</span></li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
        <div className="page-header__shape-1">
          <img src="/assets/images/shapes/page-header-1-1.png" alt="shape" />
        </div>
        <div className="page-header__shape-2">
          <img src="/assets/images/shapes/page-header-1-2.png" alt="shape" />
        </div>
      </section>

      {/* About Content */}
      <section className="about-one">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="about-one__image">
                <div className="about-one__image__bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/about-1-1.jpg)' }}></div>
                <div className="about-one__image__shape">
                  <img src="/assets/images/shapes/about-1-1.png" alt="shape" />
                </div>
                <div className="about-one__image__experience">
                  <span>15+</span>
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__content">
                <div className="section-title section-title__left">
                  <span className="section-title__tagline">About Us</span>
                  <h2 className="section-title__title">We Provide Best Gardening & Landscaping Services</h2>
                </div>
                <div className="about-one__content__text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="about-one__list">
                  <ul>
                    <li><i className="icon-check"></i> Professional Garden Design & Maintenance</li>
                    <li><i className="icon-check"></i> Sustainable Landscaping Solutions</li>
                    <li><i className="icon-check"></i> 24/7 Customer Support Available</li>
                    <li><i className="icon-check"></i> Certified & Experienced Team Members</li>
                  </ul>
                </div>
                <div className="about-one__btn">
                  <Link href="/contact" className="garlon-btn"><span>Contact Us</span> <i className="icon-angle-small-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="mvup-one">
        <div className="container">
          <div className="row gutter-y-30">
            <div className="col-lg-4">
              <div className="mvup-one__item">
                <div className="mvup-one__icon">
                  <img src="/assets/images/icons/mvup-1-1.svg" alt="icon" />
                </div>
                <h4 className="mvup-one__title">Our Mission</h4>
                <p className="mvup-one__text">To create beautiful, sustainable outdoor spaces that enhance the quality of life for our clients and communities.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mvup-one__item">
                <div className="mvup-one__icon">
                  <img src="/assets/images/icons/mvup-1-2.svg" alt="icon" />
                </div>
                <h4 className="mvup-one__title">Our Vision</h4>
                <p className="mvup-one__text">To be the leading landscaping company recognized for innovation, sustainability, and exceptional customer service.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mvup-one__item">
                <div className="mvup-one__icon">
                  <img src="/assets/images/icons/mvup-1-3.svg" alt="icon" />
                </div>
                <h4 className="mvup-one__title">Our Values</h4>
                <p className="mvup-one__text">Integrity, Excellence, Sustainability, Innovation, and Customer Satisfaction guide everything we do.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-one">
        <div className="container">
          <div className="section-title section-title__center">
            <span className="section-title__tagline">Our Team</span>
            <h2 className="section-title__title">Meet Our Expert Gardeners</h2>
          </div>
          <div className="team-one__carousel garlon-owl__carousel owl-carousel" data-owl-options='{"loop":true,"items":4,"autoplay":true,"autoplayTimeout":5000,"smartSpeed":1000,"margin":30,"nav":true,"navText":["<span class=\\"icon-angle-small-left\\"></span>","<span class=\\"icon-angle-small-right\\"></span>"],"dots":false,"responsive":{"0":{"items":1},"576":{"items":2},"992":{"items":3},"1200":{"items":4}}}'>
            {[
              { name: 'John Smith', role: 'Founder & CEO', image: '/assets/images/team/team-1-1.jpg', social: ['facebook', 'twitter', 'linkedin', 'instagram'] },
              { name: 'Sarah Johnson', role: 'Lead Designer', image: '/assets/images/team/team-1-2.jpg', social: ['facebook', 'twitter', 'linkedin', 'instagram'] },
              { name: 'Michael Brown', role: 'Project Manager', image: '/assets/images/team/team-1-3.jpg', social: ['facebook', 'twitter', 'linkedin', 'instagram'] },
              { name: 'Emily Davis', role: 'Senior Gardener', image: '/assets/images/team/team-1-4.jpg', social: ['facebook', 'twitter', 'linkedin', 'instagram'] },
              { name: 'Robert Wilson', role: 'Tree Surgeon', image: '/assets/images/team/team-1-5.jpg', social: ['facebook', 'twitter', 'linkedin', 'instagram'] },
              { name: 'Lisa Anderson', role: 'Lawn Care Pro', image: '/assets/images/team/team-1-6.jpg', social: ['facebook', 'twitter', 'linkedin', 'instagram'] },
              { name: 'David Martinez', role: 'Irrigation Expert', image: '/assets/images/team/team-1-7.jpg', social: ['facebook', 'twitter', 'linkedin', 'instagram'] },
              { name: 'Jennifer Lee', role: 'Plant Specialist', image: '/assets/images/team/team-1-8.jpg', social: ['facebook', 'twitter', 'linkedin', 'instagram'] },
            ].map((member, index) => (
              <div key={index} className="item">
                <div className="team-one__item">
                  <div className="team-one__image">
                    <img src={member.image} alt={member.name} />
                    <div className="team-one__social">
                      {member.social.map((s, i) => (
                        <a key={i} href={`https://${s}.com`}><i className={`fab fa-${s}`}></i></a>
                      ))}
                    </div>
                  </div>
                  <div className="team-one__content">
                    <h5 className="team-one__name"><Link href="/team/details">{member.name}</Link></h5>
                    <span className="team-one__designation">{member.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section className="counter-one">
        <div className="container">
          <div className="counter-one__inner">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="counter-one__item">
                  <div className="counter-one__icon">
                    <i className="icon-tree"></i>
                  </div>
                  <div className="counter-one__content">
                    <h3 className="counter-one__number odometer" data-count="500">00</h3>
                    <p className="counter-one__text">Projects Completed</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="counter-one__item">
                  <div className="counter-one__icon">
                    <i className="icon-gardener"></i>
                  </div>
                  <div className="counter-one__content">
                    <h3 className="counter-one__number odometer" data-count="50">00</h3>
                    <p className="counter-one__text">Expert Gardeners</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="counter-one__item">
                  <div className="counter-one__icon">
                    <i className="icon-award"></i>
                  </div>
                  <div className="counter-one__content">
                    <h3 className="counter-one__number odometer" data-count="25">00</h3>
                    <p className="counter-one__text">Awards Won</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="counter-one__item">
                  <div className="counter-one__icon">
                    <i className="icon-smile"></i>
                  </div>
                  <div className="counter-one__content">
                    <h3 className="counter-one__number odometer" data-count="1000">00</h3>
                    <p className="counter-one__text">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-one">
        <div className="container">
          <div className="section-title section-title__center">
            <span className="section-title__tagline">Testimonials</span>
            <h2 className="section-title__title">What Our Clients Say About Us</h2>
          </div>
          <div className="testimonial-one__carousel garlon-owl__carousel owl-carousel" data-owl-options='{"loop":true,"items":1,"autoplay":true,"autoplayTimeout":5000,"smartSpeed":1000,"margin":0,"nav":true,"navText":["<span class=\\"icon-angle-small-left\\"></span>","<span class=\\"icon-angle-small-right\\"></span>"],"dots":true}'>
            {[
              { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', author: 'John Smith', role: 'Homeowner', image: '/assets/images/testimonials/testimonial-1-1.jpg' },
              { text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.', author: 'Sarah Johnson', role: 'Property Manager', image: '/assets/images/testimonials/testimonial-1-2.jpg' },
              { text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.', author: 'Michael Brown', role: 'Business Owner', image: '/assets/images/testimonials/testimonial-1-3.jpg' },
            ].map((testimonial, index) => (
              <div key={index} className="item">
                <div className="testimonial-one__item">
                  <div className="testimonial-one__icon">
                    <i className="icon-quote"></i>
                  </div>
                  <p className="testimonial-one__text">{testimonial.text}</p>
                  <div className="testimonial-one__author">
                    <div className="testimonial-one__author-image">
                      <img src={testimonial.image} alt={testimonial.author} />
                    </div>
                    <div className="testimonial-one__author-content">
                      <h5 className="testimonial-one__author-name">{testimonial.author}</h5>
                      <span className="testimonial-one__author-role">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="brand-one">
        <div className="container">
          <div className="brand-one__carousel garlon-owl__carousel owl-carousel" data-owl-options='{"loop":true,"items":5,"autoplay":true,"autoplayTimeout":3000,"smartSpeed":1000,"margin":0,"nav":false,"dots":false,"responsive":{"0":{"items":2},"576":{"items":3},"768":{"items":4},"992":{"items":5}}}'>
            {[
              '/assets/images/brands/brand-1-1.png',
              '/assets/images/brands/brand-1-2.png',
              '/assets/images/brands/brand-1-3.png',
              '/assets/images/brands/brand-1-4.png',
              '/assets/images/brands/brand-1-5.png',
            ].map((brand, index) => (
              <div key={index} className="item">
                <div className="brand-one__item">
                  <img src={brand} alt="brand" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}