import Link from 'next/link';

export default function CtaSection({
    icon,
    title,
    text,
    buttonLabel,
    buttonHref,
}: {
    icon?: string;
    title: string;
    text: string | React.ReactNode;
    buttonLabel: string;
    buttonHref: string;
}) {
    return (
        <section className="cta-one wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
            <div className="cta-one__bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/cta-1-1.jpg)' }}></div>
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__call">
                        {icon && (
                            <div className="cta-one__call__icon">
                                <i className={icon}></i>
                            </div>
                        )}
                        <div className="cta-one__call__content">
                            <h3 className="cta-one__call__title">{title}</h3>
                            <div className="cta-one__call__link">{text}</div>
                        </div>
                    </div>
                    <div className="cta-one__btn">
                        <Link href={buttonHref} className="garlon-btn">
                            <span>{buttonLabel}</span>
                            <i className="icon-angle-small-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
