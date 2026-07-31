'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import ProjectsSection from '@/app/components/sections/ProjectsSection';
import FAQSection from '@/app/components/sections/FAQSection';

const projectDetail = {
    title: 'The Backyard Revival Project',
    description:
        "Every project we take on is a reflection of our mission to bring agriculture back home literally. Whether it's a rooftop garden in the city or a backyard farm in the suburbs, we approach each project with the same care and expertise.",
    details: [
        { label: 'Location', value: 'Suburban Residential' },
        { label: 'Size', value: '2,500 sq ft' },
        { label: 'Type', value: 'Vegetable Garden' },
        { label: 'Duration', value: '3 Months' },
        { label: 'Services', value: 'Design, Installation, Maintenance' },
    ],
    features: [
        'Raised bed vegetable garden',
        'Drip irrigation system',
        'Composting station',
        'Pollinator garden',
        'Rainwater harvesting',
        'Seasonal planting plan',
    ],
    images: [
        '/assets/img/projects/project-single-1.jpg',
        '/assets/img/projects/project-single-2.jpg',
        '/assets/img/projects/project-single-3.jpg',
    ],
};

export default function ProjectLeftPage() {
    return (
        <>
            <HeroSection
                subtitle="Project Details"
                title={projectDetail.title}
                description={projectDetail.description}
                primaryButtonText="Start Your Project"
                primaryButtonHref="/contact"
            />
            <section className="vl-project-single-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="project-single-thumb image-anime">
                                <img
                                    src={projectDetail.images[0]}
                                    alt={projectDetail.title}
                                />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="project-single-info">
                                <h3 className="sub-title">Project Overview</h3>
                                <div className="space16"></div>
                                <h2 className="title">{projectDetail.title}</h2>
                                <div className="space24"></div>
                                <p>{projectDetail.description}</p>
                                <div className="space30"></div>
                                <div className="project-single-details">
                                    <h4>Project Details</h4>
                                    <ul>
                                        {projectDetail.details.map(
                                            (detail, i) => (
                                                <li key={i}>
                                                    <strong>
                                                        {detail.label}:
                                                    </strong>{' '}
                                                    {detail.value}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <div className="space30"></div>
                                <div className="project-single-features">
                                    <h4>Key Features</h4>
                                    <ul>
                                        {projectDetail.features.map(
                                            (feature, i) => (
                                                <li key={i}>
                                                    <i className="fa-solid fa-check"></i>{' '}
                                                    {feature}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ProjectsSection />
            <FAQSection />
        </>
    );
}
