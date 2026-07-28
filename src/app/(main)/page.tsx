'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const slides = [
  {
    bgImage: '/assets/images/backgrounds/hero-1-1.jpg',
    shapeImage: '/assets/images/shapes/hero-shape-1-3.png',
    subTitle: 'Garden & Landscaping service!',
    title: 'We Providing <span><img src="/assets/images/shapes/hero-shape-1-2.png" alt="icon" /></span> Garden Lawncare and Involve.',
    text: 'We provide the most responsive and functional design for <br /> companies and businesses worldwide.',
    btnText: 'Contact Now',
    btnHref: '/contact',
    leftShape: '/assets/images/shapes/hero-left.png',
    iconClass: 'icon-shovel',
  },
  {
    bgImage: '/assets/images/backgrounds/hero-1-2.jpg',
    shapeImage: '/assets/images/shapes/hero-shape-1-3.png',
    subTitle: 'Garden & Landscaping service!',
    title: 'We Providing <span><img src="/assets/images/shapes/hero-shape-1-2.png" alt="icon" /></span> Garden Lawncare and Involve.',
    text: 'We provide the most responsive and functional design for <br /> companies and businesses worldwide.',
    btnText: 'Contact Now',
    btnHref: '/contact',
    leftShape: '/assets/images/shapes/hero-left.png',
    iconClass: 'icon-shovel',
  },
  {
    bgImage: '/assets/images/backgrounds/hero-1-3.jpg',
    shapeImage: '/assets/images/shapes/hero-shape-1-3.png',
    subTitle: 'Garden & Landscaping service!',
    title: 'We Providing <span><img src="/assets/images/shapes/hero-shape-1-2.png" alt="icon" /></span> Garden Lawncare and Involve.',
    text: 'We provide the most responsive and functional design for <br /> companies and businesses worldwide.',
    btnText: 'Contact Now',
    btnHref: '/contact',
    leftShape: '/assets/images/shapes/hero-left.png',
    iconClass: 'icon-shovel',
  },
];

const features = [
  {
    iconTop: 'icon-gardener',
    iconBottom: 'icon-gardener',
    title: 'Spring of cleaning',
    text: 'There are many garden passages market to available majority',
    href: '/services/spring-cleaning',
    delay: '100ms',
  },
  {
    iconTop: 'icon-park',
    iconBottom: 'icon-park',
    title: 'Pest and Disease',
    text: 'There are many garden passages market to available majority',
    href: '/services/pest-disease',
    delay: '300ms',
    active: true,
  },
  {
    iconTop: 'icon-gardening',
    iconBottom: 'icon-gardening',
    title: 'Shrub Trimming',
    text: 'There are many garden passages market to available majority',
    href: '/services/shrub-trimming',
    delay: '500ms',
  },
  {
    iconTop: 'icon-gardener-1',
    iconBottom: 'icon-gardener-1',
    title: 'Lawn Mowing',
    text: 'There are many garden passages market to available majority',
    href: '/services/lawn-mowing',
    delay: '700ms',
  },
];

const services = [
  { icon: 'icon-gardener', title: 'Spring of cleaning', desc: 'Professional spring cleaning for your garden', href: '/services/spring-cleaning' },
  { icon: 'icon-park', title: 'Pest and Disease', desc: 'Effective pest and disease management', href: '/services/pest-disease' },
  { icon: 'icon-gardening', title: 'Shrub Trimming', desc: 'Expert shrub trimming and shaping', href: '/services/shrub-trimming' },
  { icon: 'icon-gardener-1', title: 'Lawn Mowing', desc: 'Regular lawn mowing and maintenance', href: '/services/lawn-mowing' },
  { icon: 'icon-seedling', title: 'Tree Planting', desc: 'Professional tree planting services', href: '/services/tree-planting' },
  { icon: 'icon-watering', title: 'Irrigation Systems', desc: 'Custom irrigation system installation', href: '/services/irrigation' },
];

const projects = [
  { image: '/assets/images/projects/project-1-1.jpg', title: 'Garden Landscape Design', category: 'Landscaping', href: '/projects/details' },
  { image: '/assets/images/projects/project-1-2.jpg', title: 'Residential Lawn Care', category: 'Lawn Care', href: '/projects/details' },
  { image: '/assets/images/projects/project-1-3.jpg', title: 'Commercial Garden Maintenance', category: 'Maintenance', href: '/projects/details' },
];

const testimonials = [
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', author: 'John Smith', role: 'Homeowner', image: '/assets/images/testimonials/testimonial-1-1.jpg' },
  { text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.', author: 'Sarah Johnson', role: 'Property Manager', image: '/assets/images/testimonials/testimonial-1-2.jpg' },
  { text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.', author: 'Michael Brown', role: 'Business Owner', image: '/assets/images/testimonials/testimonial-1-3.jpg' },
];

const team = [
  { image: '/assets/images/team/team-1-1.jpg', name: 'John Smith', role: 'Founder & CEO', social: ['#', '#', '#'] },
  { image: '/assets/images/team/team-1-2.jpg', name: 'Sarah Johnson', role: 'Lead Designer', social: ['#', '#', '#'] },
  { image: '/assets/images/team/team-1-3.jpg', name: 'Michael Brown', role: 'Project Manager', social: ['#', '#', '#'] },
  { image: '/assets/images/team/team-1-4.jpg', name: 'Emily Davis', role: 'Senior Gardener', social: ['#', '#', '#'] },
];

export default function Home() {
  useEffect(() => {
    // Initialize any client-side scripts here if needed
    // For owl carousel and other JS plugins
  }, []);

  return (
    <>
      {/* Hero Slider */}
      <section className="main-slider-one">
        <div 
          className="main-slider-one__carousel garlon-owl__carousel owl-carousel" 
          data-owl-options='{"loop":true,"animateOut":"fadeOut","animateIn":"fadeIn","items":1,"autoplay":true,"autoplayTimeout":7000,"smartSpeed":1000,"nav":true,"navText":["<span class=\\"icon-angle-small-left\\"></span>","<span class=\\"icon-angle-small-right\\"></span>"],"dots":false,"margin":0}'
        >
          {slides.map((slide, index) => (
            <div key={index} className="item">
              <div className="main-slider-one__item">
                <div className="main-slider-one__bg" style={{ backgroundImage: `url(${slide.bgImage})` }}></div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-8">
                      <div className="main-slider-one__content">
                        <div className="main-slider-one__box">
                          <div className="main-slider-one__box__item">
                            <div className="main-slider-one__box__icon">
                              <i className={slide.iconClass}></i>
                            </div>
                            <img src={slide.leftShape} alt="shape" />
                          </div>
                          <h5 className="main-slider-one__sub-title">{slide.subTitle}</h5>
                        </div>
                        <h2 className="main-slider-one__title" dangerouslySetInnerHTML={{ __html: slide.title }}></h2>
                        <p className="main-slider-one__text" dangerouslySetInnerHTML={{ __html: slide.text }}></p>
                        <div className="main-slider-one__btn">
                          <Link href={slide.btnHref} className="garlon-btn"><span>{slide.btnText}</span> <i className="icon-angle-small-right"></i></Link>
                        </div>
                        <div className="main-slider-one__content__shape">
                          <img src="/assets/images/shapes/arrow-variant-1.png" alt="shape" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-slider-one__shape">
                  <img src={slide.shapeImage} alt="image" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="feature-one">
        <div className="container">
          <div className="feature-one__box">
            <div className="row gutter-y-30">
              {features.map((feature, index) => (
                <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                  <div className="feature-one__item__inner wow fadeInUp" data-wow-duration='1500ms' data-wow-delay={feature.delay}>
                    <div className={`feature-one__item ${feature.active ? 'active' : ''}`}>
                      <div className="feature-one__item__icon-top">
                        <i className={feature.iconTop}></i>
                      </div>
                      <div className="feature-one__item__content">
                        <h4 className="feature-one__item__title"><Link href={feature.href}>{feature.title}</Link></h4>
                        <p className="feature-one__item__text">{feature.text}</p>
                      </div>
                      <div className="feature-one__item__icon-bottom">
                        <i className={feature.iconBottom}></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
                  <Link href="/about" className="garlon-btn"><span>Read More</span> <i className="icon-angle-small-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="service-one">
        <div className="container">
          <div className="section-title section-title__center">
            <span className="section-title__tagline">Our Services</span>
            <h2 className="section-title__title">We Offer Professional Gardening Services</h2>
          </div>
          <div 
            className="service-one__carousel garlon-owl__carousel owl-carousel" 
            data-owl-options='{"loop":true,"items":3,"autoplay":true,"autoplayTimeout":5000,"smartSpeed":1000,"margin":30,"nav":true,"navText":["<span class=\\"icon-angle-small-left\\"></span>","<span class=\\"icon-angle-small-right\\"></span>"],"dots":false,"responsive":{"0":{"items":1},"768":{"items":2},"992":{"items":3}}}'
          >
            {services.map((service, index) => (
              <div key={index} className="item">
                <div className="service-one__item">
                  <div className="service-one__icon">
                    <i className={service.icon}></i>
                  </div>
                  <div className="service-one__content">
                    <h4 className="service-one__title"><Link href={service.href}>{service.title}</Link></h4>
                    <p className="service-one__text">{service.desc}</p>
                  </div>
                  <div className="service-one__btn">
                    <Link href={service.href} className="garlon-btn"><span>Read More</span> <i className="icon-angle-small-right"></i></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="service-one__btn text-center" style={{ marginTop: '40px' }}>
            <Link href="/services" className="garlon-btn"><span>All Services</span> <i className="icon-angle-small-right"></i></Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="project-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="section-title section-title__left">
                <span className="section-title__tagline">Our Projects</span>
                <h2 className="section-title__title">Recently Completed Gardening Projects</h2>
              </div>
              <div className="project-one__content__text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="project-one__btn">
                <Link href="/projects" className="garlon-btn"><span>View All Projects</span> <i className="icon-angle-small-right"></i></Link>
              </div>
            </div>
            <div className="col-xl-6">
              <div 
                className="project-one__carousel garlon-owl__carousel owl-carousel" 
                data-owl-options='{"loop":true,"items":1,"autoplay":true,"autoplayTimeout":5000,"smartSpeed":1000,"margin":0,"nav":true,"navText":["<span class=\\"icon-angle-small-left\\"></span>","<span class=\\"icon-angle-small-right\\"></span>"],"dots":false}'
              >
                {projects.map((project, index) => (
                  <div key={index} className="item">
                    <div className="project-one__item">
                      <div className="project-one__image">
                        <img src={project.image} alt={project.title} />
                        <div className="project-one__overlay">
                          <Link href={project.href} className="garlon-btn"><span>View Details</span> <i className="icon-angle-small-right"></i></Link>
                        </div>
                      </div>
                      <div className="project-one__content">
                        <span className="project-one__category">{project.category}</span>
                        <h4 className="project-one__title"><Link href={project.href}>{project.title}</Link></h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonial-one">
        <div className="container">
          <div className="section-title section-title__center">
            <span className="section-title__tagline">Testimonials</span>
            <h2 className="section-title__title">What Our Clients Say About Us</h2>
          </div>
          <div 
            className="testimonial-one__carousel garlon-owl__carousel owl-carousel" 
            data-owl-options='{"loop":true,"items":1,"autoplay":true,"autoplayTimeout":5000,"smartSpeed":1000,"margin":0,"nav":true,"navText":["<span class=\\"icon-angle-small-left\\"></span>","<span class=\\"icon-angle-small-right\\"></span>"],"dots":true}'
          >
            {testimonials.map((testimonial, index) => (
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

      {/* Team Section */}
      <section className="team-one">
        <div className="container">
          <div className="section-title section-title__center">
            <span className="section-title__tagline">Our Team</span>
            <h2 className="section-title__title">Meet Our Expert Gardeners</h2>
          </div>
          <div 
            className="team-one__carousel garlon-owl__carousel owl-carousel" 
            data-owl-options='{"loop":true,"items":4,"autoplay":true,"autoplayTimeout":5000,"smartSpeed":1000,"margin":30,"nav":true,"navText":["<span class=\\"icon-angle-small-left\\"></span>","<span class=\\"icon-angle-small-right\\"></span>"],"dots":false,"responsive":{"0":{"items":1},"576":{"items":2},"768":{"items":3},"992":{"items":4}}}'
          >
            {team.map((member, index) => (
              <div key={index} className="item">
                <div className="team-one__item">
                  <div className="team-one__image">
                    <img src={member.image} alt={member.name} />
                    <div className="team-one__social">
                      {member.social.map((link, i) => (
                        <a key={i} href={link}><i className="fab fa-facebook-f"></i></a>
                      ))}
                    </div>
                  </div>
                  <div className="team-one__content">
                    <h4 className="team-one__name"><Link href="/team/details">{member.name}</Link></h4>
                    <span className="team-one__designation">{member.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="team-one__btn text-center" style={{ marginTop: '40px' }}>
            <Link href="/team" className="garlon-btn"><span>View All Team</span> <i className="icon-angle-small-right"></i></Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-one" style={{ backgroundImage: 'url(/assets/images/backgrounds/cta-1-1.jpg)' }}>
        <div className="container">
          <div className="cta-one__content">
            <h2 className="cta-one__title">Ready to Transform Your Garden?</h2>
            <p className="cta-one__text">Contact us today for a free consultation and let our experts create the garden of your dreams.</p>
            <div className="cta-one__btn">
              <Link href="/contact" className="garlon-btn"><span>Get Free Quote</span> <i className="icon-angle-small-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brands/Partners Section */}
      <section className="brand-one">
        <div className="container">
          <div 
            className="brand-one__carousel garlon-owl__carousel owl-carousel" 
            data-owl-options='{"loop":true,"items":5,"autoplay":true,"autoplayTimeout":3000,"smartSpeed":1000,"margin":0,"nav":false,"dots":false,"responsive":{"0":{"items":2},"576":{"items":3},"768":{"items":4},"992":{"items":5}}}'
          >
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