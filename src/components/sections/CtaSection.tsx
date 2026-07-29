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
        <section className="cta-one">
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__call">
                        {icon && (
                            <div className="cta-one__call__icon">
                                <i className={icon}></i>
                            </div>
                        )}
                        <div>
                            <h3 className="cta-one__call__title">{title}</h3>
                            <p className="cta-one__call__link">{text}</p>
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
