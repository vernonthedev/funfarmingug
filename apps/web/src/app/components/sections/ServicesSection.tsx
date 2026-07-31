'use client';

import Link from 'next/link';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  stepNumber?: string;
}

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  services?: ServiceItem[];
  viewAllText?: string;
  viewAllHref?: string;
}

const defaultServices: ServiceItem[] = [
  {
    icon: '/assets/img/icon/service6-icon(1).svg',
    title: 'Plant Care And Growth Monitoring',
    description: 'At Orgaanic, we empower you to turn unused corners of your home into thriving green spaces. Our expert-guided services',
    linkText: 'Learn More',
    linkHref: '/contact',
    stepNumber: '01',
  },
  {
    icon: '/assets/img/icon/service6-icon(2).svg',
    title: 'Compost And Soil Health Support',
    description: 'We believe that growing food should be natural, beautiful, & part of everyday life. That\'s why our services cover everything',
    linkText: 'Learn More',
    linkHref: '/contact',
    stepNumber: '02',
  },
  {
    icon: '/assets/img/icon/service6-icon(3).svg',
    title: 'Organic Seed And Plant Supply',
    description: 'Living in the city doesn\'t mean giving up on green dreams. Orgaanic specializes in urban agriculture solutions that turn',
    linkText: 'Learn More',
    linkHref: '/contact',
    stepNumber: '03',
  },
];

export default function ServicesSection({
  title = 'Services Designed for Home Growers',
  subtitle = 'Our Services',
  description = 'At Orgaanic, we offer a range of home-friendly agriculture services tailored to help you grow your own food, no matter the size of your space.',
  services = defaultServices,
  viewAllText = 'View All Services',
  viewAllHref = '/service',
}: ServicesSectionProps) {
  return (
    <section className="vl-service6-area sp1">
      <div className="container">
        <div className="row">
          <div className="service6-top">
            <div className="service6-top-left">
              <h3 data-aos="fade-right" data-aos-duration="900">{subtitle}</h3>
              <div className="space16"></div>
              <h2 className="text-anime-style-3" data-aos="fade-left" data-aos-duration="1000">{title}</h2>
            </div>
            <div className="service6-top-right">
              <p className="text-effect" data-aos="fade-left" data-aos-duration="900">{description}</p>
              <div className="space24"></div>
              <Link href={viewAllHref} className="btn-home6" data-aos="fade-left" data-aos-duration="1000">{viewAllText}</Link>
            </div>
          </div>
          <div className="space44"></div>
          <div className="swiper myservicehm6" data-aos="zoom-out" data-aos-duration="900">
            <div className="swiper-wrapper">
              {services.map((service, index) => (
                <div key={index} className="swiper-slide">
                  <div className="service6-box">
                    <div className="service6-logos">
                      <h3 className="title"><Link href="/service-single">{service.title}</Link></h3>
                      <div className="inons">
                        <img src={service.icon} alt="" />
                      </div>
                    </div>
                    <div className="space24"></div>
                    <p className="pera-text">{service.description}</p>
                    <div className="space28"></div>
                    <div className="service6-box-bottom">
                      <Link href={service.linkHref || '#'} className="btn3-home6">{service.linkText}</Link>
                      <div className="step-number">{service.stepNumber}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="service6-arrow">
            <div className="prev-arrow" data-aos="fade-right" data-aos-duration="1000">
              <img src="/assets/img/icon/left-arrow-hm6.svg" alt="" />
            </div>
            <div className="next-arrow" data-aos="fade-left" data-aos-duration="1000">
              <img src="/assets/img/icon/right-arrow-hm6.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}