'use client';

import Link from 'next/link';

interface HeroSectionProps {
  variant?: 'default';
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

const heroContent = {
  default: {
    backgroundImage: '/assets/img/hero/hero6-thumb-bg1.png',
    subtitle: 'Nature-Friendly Living Starts Here',
    title: 'Grow It Yourself – The Organic Way',
    description: 'Welcome to Orgaanic your trusted partner in home-based agriculture. Whether it\'s a balcony garden or a backyard farm, we make it easy',
    primaryButtonText: 'Get Started Now',
    primaryButtonHref: '/contact',
    secondaryButtonText: 'Contact Us',
    secondaryButtonHref: '/contact',
  },
};

export default function HeroSection({ variant = 'default', ...props }: HeroSectionProps) {
  const content = { ...heroContent[variant], ...props };
  const bgImage = content.backgroundImage || heroContent.default.backgroundImage;

  return (
    <section className="vl-hero6-area parallaxie" style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className="hero6-bg1">
        <div className="bg-shape-imgs-1">
          <img src="/assets/img/shape/hero-hm6-circle.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8">
              <div className="vl-hero6-info">
                <div className="hero6-heading">
                  <h3 className="sub-title" data-aos="fade-left" data-aos-duration="800">{content.subtitle}</h3>
                  <div className="space16"></div>
                  <h2 className="title" data-aos="fade-left" data-aos-duration="900">{content.title}</h2>
                  <div className="space16"></div>
                  <p className="pera-text" data-aos="fade-left" data-aos-duration="1000">{content.description}</p>
                </div>
                <div className="space38"></div>
                <div className="hero6-btn-area">
                  <Link href={content.primaryButtonHref} className="btn-home6 hero6-btn-fxr" data-aos="zoom-out" data-aos-duration="900">{content.primaryButtonText}</Link>
                  <Link href={content.secondaryButtonHref} className="btn2-home6" data-aos="zoom-out" data-aos-duration="900">{content.secondaryButtonText}</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6"></div>
          </div>
        </div>
        <div className="hero_bottom_slider">
          <div className="hero6-bottom-text"><h2>Agriculture</h2></div>
          <div className="hero6-bottom-text"><h2>Agriculture</h2></div>
          <div className="hero6-bottom-text"><h2>Agriculture</h2></div>
          <div className="hero6-bottom-text"><h2>Agriculture</h2></div>
          <div className="hero6-bottom-text"><h2>Agriculture</h2></div>
          <div className="hero6-bottom-text"><h2>Agriculture</h2></div>
        </div>
      </div>
    </section>
  );
}