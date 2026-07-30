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
            className="vl-services2-box"
            data-aos="fade-up"
            data-aos-duration={delay || '1000'}
        >
            <div className="services2-box-icon">
                <i className={icon}></i>
            </div>
            <div className="space24"></div>
            <div className="services2-box-content">
                <h2>
                    {href ? (
                        <a href={href}>{title}</a>
                    ) : (
                        title
                    )}
                </h2>
                <div className="space16"></div>
                {text && <p>{text}</p>}
            </div>
            {href && (
                <div className="services2-box-btn">
                    <a href={href} className="vl-btn4">
                        Learn More
                        <span className="arrow_btn4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M27.002 16.002H5.00195" stroke="#132C12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21.0021 22.002C21.0021 22.002 27.002 17.5831 27.002 16.002C27.002 14.4208 21.002 10.002 21.002 10.002" stroke="#132C12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </a>
                </div>
            )}
        </div>
    );
}
