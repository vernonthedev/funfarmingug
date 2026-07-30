import Link from 'next/link';

export default function ServerCard({
    icon,
    title,
    text,
    href,
    delay,
}: {
    icon: string;
    title: string;
    text: string;
    href: string;
    delay?: string;
}) {
    return (
        <div className="server-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay={delay || '100ms'}>
            <div className="server-card__bg" style={{ backgroundImage: 'url(/assets/images/resources/service-bg.jpg)' }}></div>
            <div className="server-card__icon">
                <i className={icon}></i>
            </div>
            <div className="server-card__content">
                <h3 className="server-card__title"><Link href={href}>{title}</Link></h3>
                <p className="server-card__text">{text}</p>
                <Link href={href} className="server-card__content__btn">
                    <span className="server-card__content__btn__text">READ MORE</span>
                    <span className="server-card__content__btn__icon">
                        <i className="icon-arrow"></i>
                    </span>
                </Link>
            </div>
            <div className="server-card__shape">
                <img src="/assets/images/shapes/service-arrow.png" alt="shape" />
            </div>
            <div className="server-card__shape-hover">
                <img src="/assets/images/shapes/service-arrow-hover.png" alt="shape" />
            </div>
            <span className="server-card__count"></span>
        </div>
    );
}
