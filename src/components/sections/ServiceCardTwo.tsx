export default function ServiceCardTwo({
    icon,
    title,
    text,
    href,
    image,
    delay,
}: {
    icon: string;
    title: string;
    text?: string;
    href?: string;
    image?: string;
    delay?: string;
}) {
    return (
        <div
            className="service-card-two wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay={delay || '100ms'}
        >
            <div className="service-card-two__inner">
                <div className="service-card-two__icon">
                    <i className={icon}></i>
                </div>
                {image && (
                    <div className="service-card-two__thumb">
                        <img src={image} alt={title} />
                        <img src={image} alt={title} />
                    </div>
                )}
                <div className="service-card-two__content">
                    <h4 className="service-card-two__title">
                        {href ? <a href={href}>{title}</a> : title}
                    </h4>
                    {text && <p className="service-card-two__text">{text}</p>}
                </div>
                {href && (
                    <div className="service-card-two__btn">
                        <a href={href}>
                            <i className="icon-arrow-up-right2"></i>
                        </a>
                    </div>
                )}
                <div className="service-card-two__shape-one">
                    <img
                        src="/assets/images/shapes/leaf-left-1.png"
                        alt="icon"
                    />
                </div>
                <div className="service-card-two__shape-two">
                    <img
                        src="/assets/images/shapes/leaf-right-2.png"
                        alt="icon"
                    />
                </div>
            </div>
        </div>
    );
}
