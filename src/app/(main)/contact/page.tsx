'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: 'url(/assets/images/backgrounds/page-header.jpg)' }}>
        <div className="container">
          <div className="page-header__inner">
            <h2 className="page-header__title">Contact Us</h2>
            <ul className="thm-breadcrumb list-unstyled">
              <li><a href="/">Home</a></li>
              <li><span aria-hidden="true">/</span></li>
              <li>Contact</li>
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

      {/* Contact Form */}
      <section className="contact-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="contact-one__left">
                <div className="section-title section-title__left">
                  <span className="section-title__tagline">Contact Us</span>
                  <h2 className="section-title__title">Get In Touch With Us</h2>
                </div>
                <div className="contact-one__left__text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                </div>
                <div className="contact-one__info">
                  <ul className="list-unstyled">
                    <li>
                      <div className="contact-one__info__icon">
                        <i className="icon-pin"></i>
                      </div>
                      <div className="contact-one__info__content">
                        <h5 className="contact-one__info__title">Our Address</h5>
                        <p className="contact-one__info__text">Kampala, Uganda</p>
                      </div>
                    </li>
                    <li>
                      <div className="contact-one__info__icon">
                        <i className="icon-phone"></i>
                      </div>
                      <div className="contact-one__info__content">
                        <h5 className="contact-one__info__title">Call Us</h5>
                        <p className="contact-one__info__text"><a href="tel:+256700000000">+256 700 000 000</a></p>
                      </div>
                    </li>
                    <li>
                      <div className="contact-one__info__icon">
                        <i className="icon-email"></i>
                      </div>
                      <div className="contact-one__info__content">
                        <h5 className="contact-one__info__title">Email Us</h5>
                        <p className="contact-one__info__text"><a href="mailto:info@funfarminguganda.com">info@funfarminguganda.com</a></p>
                      </div>
                    </li>
                    <li>
                      <div className="contact-one__info__icon">
                        <i className="icon-clock"></i>
                      </div>
                      <div className="contact-one__info__content">
                        <h5 className="contact-one__info__title">Working Hours</h5>
                        <p className="contact-one__info__text">Mon - Sat: 8:00 AM - 6:00 PM</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="contact-one__right">
                <form onSubmit={handleSubmit} className="contact-one__form" noValidate>
                  <div className="row gutter-y-30">
                    <div className="col-md-6">
                      <div className="contact-one__input-box">
                        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-one__input-box">
                        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-one__input-box">
                        <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-one__input-box">
                        <select name="subject" value={formData.subject} onChange={handleChange} required>
                          <option value="">Select Subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="services">Services</option>
                          <option value="quote">Request a Quote</option>
                          <option value="support">Support</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="contact-one__input-box">
                        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows={5} required></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="garlon-btn"><span>Send Message</span> <i className="icon-angle-small-right"></i></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map">
        <div className="container-fluid p-0">
          <div className="contact-map__inner">
            <iframe 
              title="Fun Farming Uganda Location" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.816724898446!2d32.5825!3d0.3476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d6b4b4b4b4b4b%3A0x1234567890abcdef!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1234567890"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-one">
        <div className="container">
          <div className="cta-one__inner" style={{ backgroundImage: 'url(/assets/images/backgrounds/cta-1-1.jpg)' }}>
            <div className="cta-one__shape">
              <img src="/assets/images/shapes/cta-1-1.png" alt="shape" />
            </div>
            <div className="row align-items-center">
              <div className="col-xl-8">
                <div className="cta-one__content">
                  <h2 className="cta-one__title">Ready to Start Your Garden Project?</h2>
                  <p className="cta-one__text">Contact us today for a free consultation and let our experts help you create the perfect outdoor space.</p>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="cta-one__btn">
                  <a href="/contact" className="garlon-btn garlon-btn--white"><span>Get Free Quote</span> <i className="icon-angle-small-right"></i></a>
                </div>
              </div>
            </div>
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