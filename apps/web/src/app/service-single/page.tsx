'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import ServicesSection from '@/app/components/sections/ServicesSection';
import FAQSection from '@/app/components/sections/FAQSection';

const serviceDetail = {
    title: 'Organic Seed And Plant Supply',
    description:
        "Living in the city doesn't mean giving up on green dreams. Orgaanic specializes in urban agriculture solutions that turn balconies, rooftops, and small yards into productive gardens.",
    features: [
        'Certified organic seeds',
        'Heirloom vegetable varieties',
        'Native plant selections',
        'Seasonal planting calendars',
        'Seed starting kits',
        'Plant delivery service',
    ],
    image: '/assets/img/service/service-single-thumb3.png',
    gallery: [
        '/assets/img/service/gallery1.jpg',
        '/assets/img/service/gallery2.jpg',
        '/assets/img/service/gallery3.jpg',
    ],
};

export default function ServiceSinglePage() {
    return (
        <>
            <HeroSection
                subtitle="Service Details"
                title={serviceDetail.title}
                description={serviceDetail.description}
                primaryButtonText="Order Now"
                primaryButtonHref="/contact"
            />
            <section className="vl-service-single-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="service-single-thumb image-anime">
                                <img
                                    src={serviceDetail.image}
                                    alt={serviceDetail.title}
                                />
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 mx-auto">
                            <div className="service-single-info text-center">
                                <h3 className="sub-title">Service Overview</h3>
                                <div className="space16"></div>
                                <h2 className="title">{serviceDetail.title}</h2>
                                <div className="space24"></div>
                                <p>{serviceDetail.description}</p>
                                <div className="space30"></div>
                                <div className="service-single-features">
                                    <h4>What's Included</h4>
                                    <div className="row">
                                        {serviceDetail.features.map(
                                            (feature, i) => (
                                                <div
                                                    key={i}
                                                    className="col-md-6"
                                                >
                                                    <li>
                                                        <i className="fa-solid fa-check"></i>{' '}
                                                        {feature}
                                                    </li>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                                <div className="space30"></div>
                                <a href="/contact" className="btn-home6">
                                    Order This Service
                                </a>
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
