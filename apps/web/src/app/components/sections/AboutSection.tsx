'use client';

interface AboutSectionProps {
    title?: string;
    subtitle?: string;
    description?: string;
    experienceYears?: number;
    features?: Array<{ icon: string; title: string; description: string }>;
    benefits?: string[];
    image1?: string;
    image2?: string;
    buttonText?: string;
    buttonHref?: string;
}

const defaultContent = {
    title: 'Growing Naturally, Living Fully Nurturing Nature at Home',
    subtitle: 'About Our Agriculture',
    description:
        'At Orgaanic, we believe that real change begins at home — in the soil beneath your feet and the food you grow with your own hands. Our mission is to help individuals and families embrace sustainable living through home farming, organic gardening, and eco-conscious choices.',
    experienceYears: 25,
    features: [
        {
            icon: '/assets/img/icon/about6-icon(1).svg',
            title: 'Built for green living',
            description:
                'At Orgaanic, we believe that everyone deserves the joy',
        },
        {
            icon: '/assets/img/icon/about6-icon(2).svg',
            title: 'Grow with intention',
            description:
                'Orgaanic is on a mission to reconnect people with the',
        },
    ],
    benefits: ['Let nature do the talking.', 'Plant roots, grow change.'],
    image1: '/assets/img/about/about6-thumb1.png',
    image2: '/assets/img/about/about6-thumb(2).png',
    buttonText: 'Learn More',
    buttonHref: '/contact',
};

export default function AboutSection({
    title,
    subtitle,
    description,
    experienceYears,
    features,
    benefits,
    image1,
    image2,
    buttonText,
    buttonHref,
}: AboutSectionProps) {
    const content = {
        ...defaultContent,
        title,
        subtitle,
        description,
        experienceYears,
        features,
        benefits,
        image1,
        image2,
        buttonText,
        buttonHref,
    };

    return (
        <section className="vl-about6-area sp1">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6">
                        <div className="about6-thumb">
                            <img
                                className="thumb1"
                                src={content.image1}
                                alt=""
                                data-aos="fade-right"
                                data-aos-duration="1000"
                            />
                            <img
                                className="thumb2"
                                src={content.image2}
                                alt=""
                                data-aos="fade-left"
                                data-aos-duration="1000"
                            />
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                        <div className="about6-info">
                            <div className="about6-heading">
                                <h3
                                    className="sub-title"
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                >
                                    {content.subtitle}
                                </h3>
                                <div className="space16"></div>
                                <h2
                                    className="title text-anime-style-3"
                                    data-aos="fade-left"
                                    data-aos-duration="900"
                                >
                                    {content.title}
                                </h2>
                            </div>
                            <div className="row">
                                <div className="col-xl-1"></div>
                                <div className="col-xl-11">
                                    <div className="about6-content">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div
                                                    className="about6-exp_box"
                                                    data-aos="zoom-out"
                                                    data-aos-duration="1000"
                                                >
                                                    <h2>
                                                        <span className="counter">
                                                            {
                                                                content.experienceYears
                                                            }
                                                        </span>
                                                        +
                                                    </h2>
                                                    <div className="space16"></div>
                                                    <p>Years Of Experience</p>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="about6-icons-info">
                                                    {(
                                                        content.features ||
                                                        defaultContent.features
                                                    ).map((feature, index) => (
                                                        <div
                                                            key={index}
                                                            className={`about6-icons-box ${index === 1 ? 'about6-icons-fxr' : ''}`}
                                                            data-aos="fade-left"
                                                            data-aos-duration="900"
                                                        >
                                                            <div className="about6-icons-logo">
                                                                <img
                                                                    src={
                                                                        feature.icon
                                                                    }
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="about6-icons-content">
                                                                <h3>
                                                                    <a href="/about-us">
                                                                        {
                                                                            feature.title
                                                                        }
                                                                    </a>
                                                                </h3>
                                                                <div className="space16"></div>
                                                                <p>
                                                                    {
                                                                        feature.description
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="about6-pera_text">
                                                    <p
                                                        data-aos="fade-left"
                                                        data-aos-duration="900"
                                                    >
                                                        {content.description}
                                                    </p>
                                                </div>
                                                <div
                                                    className="about6-wrap"
                                                    data-aos="fade-left"
                                                    data-aos-duration="1000"
                                                >
                                                    <ul>
                                                        {(
                                                            content.benefits ||
                                                            defaultContent.benefits
                                                        ).map(
                                                            (
                                                                benefit,
                                                                index
                                                            ) => (
                                                                <li key={index}>
                                                                    <img
                                                                        src="/assets/img/icon/tick-hm6.svg"
                                                                        alt=""
                                                                    />
                                                                    {benefit}
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                    <div className="about6-wrap-line"></div>
                                                    <div className="about6-wrap-btn">
                                                        <a
                                                            href={
                                                                content.buttonHref
                                                            }
                                                            className="btn-home6"
                                                        >
                                                            {content.buttonText}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
