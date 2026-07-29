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
        <section className="about-one section-space">
            <div className="container">
                <div className="row gutter-y-30 align-items-center">
                    {!reversed && image && (
                        <div className="col-lg-6">
                            <div
                                className="about-one__thumb wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="100ms"
                            >
                                <div className="about-one__thumb__item">
                                    <img
                                        src={image}
                                        alt={
                                            typeof title === 'string'
                                                ? title
                                                : tagline
                                        }
                                    />
                                </div>
                                {imageSmall && (
                                    <div className="about-one__thumb__small-item">
                                        <img
                                            src={imageSmall}
                                            alt={
                                                typeof title === 'string'
                                                    ? title
                                                    : tagline
                                            }
                                        />
                                        {videoUrl && (
                                            <div className="about-one__video">
                                                <a
                                                    href={videoUrl}
                                                    className="about-one__btn__icon popup-video"
                                                >
                                                    <span
                                                        aria-hidden="true"
                                                        className="icon-play"
                                                    ></span>
                                                </a>
                                                <p className="about-one__btn__text">
                                                    Watch Video
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}
                                <div className="about-one__thumb__shape">
                                    <img
                                        src="/assets/images/shapes/about-shape-1-1.png"
                                        alt="shape"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    <div className={image ? 'col-lg-6' : 'col-lg-12'}>
                        <div className="about-one__content">
                            <div className="sec-title text-start">
                                <div className="sec-title__tagline bw-split-in-up-fast">
                                    <img
                                        src="/assets/images/shapes/sec-title-shape.png"
                                        alt="shape"
                                    />
                                    {tagline}
                                </div>
                                <h3 className="sec-title__title bw-split-in-up">
                                    {title}
                                </h3>
                            </div>
                            {children}
                        </div>
                    </div>
                    {reversed && image && (
                        <div className="col-lg-6">
                            <div
                                className="about-one__thumb__item wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="100ms"
                            >
                                <img
                                    src={image}
                                    alt={
                                        typeof title === 'string'
                                            ? title
                                            : tagline
                                    }
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="about-one__shape">
                <img src="/assets/images/shapes/plant-1.png" alt="shape" />
            </div>
        </section>
    );
}
