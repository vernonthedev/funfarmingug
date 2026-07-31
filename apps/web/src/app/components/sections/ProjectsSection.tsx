'use client';

import Link from 'next/link';

interface ProjectItem {
    image: string;
    title: string;
    description: string;
    linkHref?: string;
}

interface ProjectsSectionProps {
    title?: string;
    subtitle?: string;
    description?: string;
    projects?: ProjectItem[];
    featuredProjects?: ProjectItem[];
}

const defaultFeaturedProjects: ProjectItem[] = [
    {
        image: '/assets/img/projects/project6-thumb(1).png',
        title: 'The Backyard Revival Project',
        description:
            "Every project we take on is a reflection of our mission to bring agriculture back home literally. Whether it's a rooftop garden",
        linkHref: '/project',
    },
    {
        image: '/assets/img/projects/project6-thumb(2).png',
        title: 'The Backyard Revival Project',
        description:
            "Every project we take on is a reflection of our mission to bring agriculture back home literally. Whether it's a rooftop garden",
        linkHref: '/project',
    },
];

const defaultProjects: ProjectItem[] = [
    {
        image: '/assets/img/projects/project6-thumb(3).png',
        title: 'The Mini Farm Makeover',
        description: "Every project Whether it's a rooftop garden",
        linkHref: '/project',
    },
    {
        image: '/assets/img/projects/project6-thumb(4).png',
        title: 'GrowBox Trial Project',
        description: "Every project Whether it's a rooftop garden",
        linkHref: '/project',
    },
    {
        image: '/assets/img/projects/project6-thumb(5).png',
        title: 'From Concrete to Crops',
        description: "Every project Whether it's a rooftop garden",
        linkHref: '/project',
    },
];

export default function ProjectsSection({
    title = "Garden Journeys We've Nurtured",
    subtitle = 'Our Projects',
    description = 'At Orgaanic, we take pride in turning ordinary spaces into thriving green ecosystems. From balconies and rooftops to backyards',
    featuredProjects = defaultFeaturedProjects,
    projects = defaultProjects,
}: ProjectsSectionProps) {
    return (
        <section className="vl-project6-area sp2">
            <div className="container">
                <div className="row">
                    <div className="project6-heading">
                        <div className="service6-top">
                            <div className="service6-top-left">
                                <h3
                                    data-aos="fade-right"
                                    data-aos-duration="900"
                                >
                                    {subtitle}
                                </h3>
                                <div className="space16"></div>
                                <h2
                                    className="text-anime-style-3"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                >
                                    {title}
                                </h2>
                            </div>
                            <div className="service6-top-right">
                                <p
                                    className="text-effect"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                >
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space44"></div>

                    {/* Featured Projects - 2 columns */}
                    <div className="row">
                        {featuredProjects.map((project, index) => (
                            <div
                                key={index}
                                className="col-xl-6 col-lg-6 mb-30"
                                data-aos="zoom-out"
                                data-aos-duration={index === 0 ? 900 : 1000}
                            >
                                <div className="project6-box">
                                    <div className="project6-thumb image-anime">
                                        <img
                                            className="imgs"
                                            src={project.image}
                                            alt=""
                                        />
                                        <div className="project6-thumb-content">
                                            <div className="arrow_wrap">
                                                <div className="content_arrow">
                                                    <img
                                                        src="/assets/img/icon/project6-arrow-right.svg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <h3 className="title">
                                                <Link
                                                    href={
                                                        project.linkHref || '#'
                                                    }
                                                >
                                                    {project.title}
                                                </Link>
                                            </h3>
                                            <p className="pera-text">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Regular Projects - 3 columns */}
                    <div className="row">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="col-xl-4 col-lg-6 mb-30"
                                data-aos={
                                    index % 2 === 0 ? 'zoom-in' : 'zoom-out'
                                }
                                data-aos-duration={1000}
                            >
                                <div className="project6-box">
                                    <div className="project6-thumb image-anime">
                                        <img
                                            className="imgs"
                                            src={project.image}
                                            alt=""
                                        />
                                        <div className="project6-thumb-content">
                                            <div className="arrow_wrap">
                                                <div className="content_arrow">
                                                    <img
                                                        src="/assets/img/icon/project6-arrow-right.svg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <h3 className="title">
                                                <Link
                                                    href={
                                                        project.linkHref || '#'
                                                    }
                                                >
                                                    {project.title}
                                                </Link>
                                            </h3>
                                            <p className="pera-text">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
