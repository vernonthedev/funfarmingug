'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import ServicesSection from '@/app/components/sections/ServicesSection';
import FAQSection from '@/app/components/sections/FAQSection';

const serviceDetail = {
  title: 'Compost And Soil Health Support',
  description: 'We believe that growing food should be natural, beautiful, & part of everyday life. That\'s why our services cover everything from soil testing to custom compost blends.',
  features: [
    'Soil testing and analysis',
    'Custom compost formulations',
    'Organic fertilizer recommendations',
    'pH balancing and amendment',
    'Microbial inoculants',
    'Seasonal soil care plans',
  ],
  image: '/assets/img/service/service-single-thumb2.png',
};

export default function ServiceRightPage() {
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
            <div className="col-xl-6 col-lg-6">
              <div className="service-single-thumb image-anime">
                <img src={serviceDetail.image} alt={serviceDetail.title} />
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