'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import ProjectsSection from '@/app/components/sections/ProjectsSection';
import FAQSection from '@/app/components/sections/FAQSection';

const projectDetail = {
  title: 'From Concrete to Crops',
  description: 'This flagship project transformed an unused concrete lot into a thriving community farm. The project demonstrates the power of regenerative agriculture to heal land and build community.',
  details: [
    { label: 'Location', value: 'City Center' },
    { label: 'Size', value: '5,000 sq ft' },
    { label: 'Type', value: 'Community Farm' },
    { label: 'Duration', value: '6 Months' },
    { label: 'Services', value: 'Full Design, Build, Management' },
  ],
  features: [
    'Soil remediation and building',
    'Perennial food forest',
    'Annual vegetable beds',
    'Community gathering space',
    'Educational workshop area',
    'Farm stand and CSA pickup',
    'Rainwater catchment system',
    'Solar-powered irrigation',
  ],
  images: [
    '/assets/img/projects/project-single-7.jpg',
    '/assets/img/projects/project-single-8.jpg',
    '/assets/img/projects/project-single-9.jpg',
  ],
  gallery: [
    '/assets/img/projects/gallery1.jpg',
    '/assets/img/projects/gallery2.jpg',
    '/assets/img/projects/gallery3.jpg',
    '/assets/img/projects/gallery4.jpg',
  ],
};

export default function ProjectsSinglePage() {
  const gallery = projectDetail.gallery;
  return (
    <>
      <HeroSection
        subtitle="Project Details"
        title={projectDetail.title}
        description={projectDetail.description}
        primaryButtonText="Start Your Project"
        primaryButtonHref="/contact"
      />
      <section className="vl-projects-single-area sp1">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="projects-single-thumb image-anime">
                <img src={projectDetail.images[0]} alt={projectDetail.title} />
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 mx-auto">
              <div className="projects-single-info text-center">
                <h3 className="sub-title">Project Overview</h3>
                <div className="space16"></div>
                <h2 className="title">{projectDetail.title}</h2>
                <div className="space24"></div>
                <p>{projectDetail.description}</p>
                <div className="space30"></div>
                <div className="projects-single-details">
                  <h4>Project Details</h4>
                  <div className="row">
                    {projectDetail.details.map((detail, i) => (
                      <div key={i} className="col-md-4">
                        <strong>{detail.label}:</strong> {detail.value}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space30"></div>
                <div className="projects-single-features">
                  <h4>Key Features</h4>
                  <div className="row">
                    {projectDetail.features.map((feature, i) => (
                      <div key={i} className="col-md-6">
                        <li><i className="fa-solid fa-check"></i> {feature}</li>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {gallery.length > 0 && (
            <>
              <div className="space60"></div>
              <div className="projects-single-gallery">
                <h4 className="text-center">Project Gallery</h4>
                <div className="row">
                  {gallery.map((img, i) => (
                    <div key={i} className="col-md-3">
                      <div className="gallery-item image-anime">
                        <img src={img} alt={`${projectDetail.title} - Gallery ${i + 1}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <ProjectsSection />
      <FAQSection />
    </>
  );
}