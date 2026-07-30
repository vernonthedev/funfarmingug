export default function AboutSection({
    image,
    imageSmall,
    tagline,
    title,
    children,
    reversed = false,
    videoUrl,
}: {
    image?: string;
    imageSmall?: string;
    tagline: string;
    title: string | React.ReactNode;
    children: React.ReactNode;
    reversed?: boolean;
    videoUrl?: string;
}) {
    return (
        <section className="vl-about1-area sp1">
            <div className="space96"></div>
            <div className="container">
                <div className="row align-items-center">
                    {!reversed && image && (
                        <div className="col-xl-6 col-lg-6">
                            <div className="about1-thumb1 vl-clip-anim image-anime" data-aos="fade-right" data-aos-duration="800">
                                <img className="vl-anim-img w-100" data-animate="true" src={image} alt={typeof title === 'string' ? title : tagline} />
                            </div>
                        </div>
                    )}
                    <div className={image ? 'col-xl-6 col-lg-6 col-md-12' : 'col-xl-12'}>
                        <div className="about-area-info">
                            <div className="about1-heading-area">
                                <h3 className="about-subtitle" data-aos="fade-left" data-aos-duration="800">
                                    {tagline}
                                </h3>
                                <div className="space24"></div>
                                <h2 className="about-title text-anime-style-3" data-aos="fade-left" data-aos-duration="800">
                                    {title}
                                </h2>
                                <div className="space16"></div>
                                <p className="text-effect" data-aos="fade-left" data-aos-duration="900">
                                    {children}
                                </p>
                            </div>
                        </div>
                    </div>
                    {reversed && image && (
                        <div className="col-xl-6 col-lg-6">
                            <div className="about1-thumb1 vl-clip-anim image-anime" data-aos="fade-left" data-aos-duration="800">
                                <img className="vl-anim-img w-100" data-animate="true" src={image} alt={typeof title === 'string' ? title : tagline} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
