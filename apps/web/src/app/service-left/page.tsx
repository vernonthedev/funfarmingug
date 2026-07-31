'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import ServicesSection from '@/app/components/sections/ServicesSection';
import FAQSection from '@/app/components/sections/FAQSection';

const serviceDetail = {
  title: 'Plant Care And Growth Monitoring',
  description: 'At Orgaanic, we empower you to turn unused corners of your home into thriving green spaces. Our expert-guided services cover everything from initial consultation to ongoing plant care and growth monitoring.',
  features: [
    'Personalized plant care schedules',
    'Growth tracking and monitoring',
    'Pest and disease prevention',
    'Seasonal care adjustments',
    'Watering and fertilization guidance',
    'Harvest optimization',
  ],
  image: '/assets/img/service/service-single-thumb.png',
};

export default function ServiceLeftPage() {
  return (
    <>
      <HeroSection
        subtitle="Service Details"
        title={serviceDetail.title}
        description={serviceDetail.description}
        primaryButtonText="Book Consultation"
        primaryButtonHref="/contact"
      />
      <section className="vl-service-single-area sp1">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="service-single-thumb image-anime">
                <img src={serviceDetail.image} alt={serviceDetail.title} />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="service-single-info">
                <h3 className="sub-title">Service Overview</h3>
                <div className="space16"></div>
                <h2 className="title">{serviceDetail.title}</h2>
                <div className="space24"></div>
                <p>{serviceDetail.description}</p>
                <div className="space30"></div>
                <div className="service-single-features">
                  <h4>What's Included</h4>
                  <ul>
                    {serviceDetail.features.map((feature, i) => (
                      <li key={i}><i className="fa-solid fa-check"></i> {feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="space30"></div>
                <a href="/contact" className="btn-home6">Book This Service</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServicesSection />
      <FAQSection />
    </>
  );
}