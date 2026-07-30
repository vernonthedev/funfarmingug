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
        <section className="vl-cta4-area" data-aos="zoom-out" data-aos-duration="1000">
            <div className="container">
                <div className="row cta4-area-info sp1">
                    <div className="col-xl-6 mx-auto text-center">
                        <div className="cta4-area-content">
                            <div className="product4-heading">
                                <h3 className="product4-subtitle" data-aos="fade-right" data-aos-duration="900">
                                    {icon && <i className={icon}></i>}
                                    {text}
                                </h3>
                                <div className="space24"></div>
                                <h2 className="product4-title text-anime-style-3" data-aos="fade-left" data-aos-duration="1000">
                                    {title}
                                </h2>
                            </div>
                            <div className="space38"></div>
                            <div className="btn_area10 z-index99" data-aos="zoom-out" data-aos-duration="1100">
                                <Link href={buttonHref} className="vl-btn10">
                                    {buttonLabel}
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                            <path d="M22.8079 11.1373L11.1406 22.8046" stroke="#25452C" strokeWidth="1.55556" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M22.8054 17.5005C22.8054 17.5005 23.6439 11.9751 22.8054 11.1366C21.9669 10.2981 16.4414 11.1366 16.4414 11.1366" stroke="#25452C" strokeWidth="1.55556" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="cta4-area-shape1 aniamtion-key-2">
                        <img src="/assets/img/shape/cta-hm4(1).png" alt="" />
                    </div>
                    <div className="cta4-area-shape2 aniamtion-key-2">
                        <img src="/assets/img/shape/cta-hm4(2).png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
