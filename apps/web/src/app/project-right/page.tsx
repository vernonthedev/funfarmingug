'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import ProjectsSection from '@/app/components/sections/ProjectsSection';
import FAQSection from '@/app/components/sections/FAQSection';

const projectDetail = {
  title: 'The Mini Farm Makeover',
  description: 'Transform your small outdoor space into a productive mini farm. This project showcases how even limited space can yield abundant harvests with the right design and techniques.',
  details: [
    { label: 'Location', value: 'Urban Townhouse' },
    { label: 'Size', value: '800 sq ft' },
    { label: 'Type', value: 'Container Farming' },
    { label: 'Duration', value: '2 Months' },
    { label: 'Services', value: 'Design, Setup, Training' },
  ],
  features: [
    'Vertical growing systems',
    'Container vegetable garden',
    'Herb spiral',
    'Compost tumbler',
    'Grow light setup',
    'Automated watering',
  ],
  images: [
    '/assets/img/projects/project-single-4.jpg',
    '/assets/img/projects/project-single-5.jpg',
    '/assets/img/projects/project-single-6.jpg',
  ],
};

export default function ProjectRightPage() {
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
                    {projectDetail.details.map((detail, i) => (
                      <li key={i}><strong>{detail.label}:</strong> {detail.value}</li>
                    ))}
                  </ul>
                </div>
                <div className="space30"></div>
                <div className="project-single-features">
                  <h4>Key Features</h4>
                  <ul>
                    {projectDetail.features.map((feature, i) => (
                      <li key={i}><i className="fa-solid fa-check"></i> {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="project-single-thumb image-anime">
                <img src={projectDetail.images[0]} alt={projectDetail.title} />
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