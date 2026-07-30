import Link from 'next/link';

type BreadcrumbItem = { label: string; href?: string };

export default function PageHeader({
    title,
    bgImage,
    breadcrumbs,
}: {
    title: string;
    bgImage?: string;
    breadcrumbs: BreadcrumbItem[];
}) {
    return (
        <section
            className="vl-hero-inner-area parallaxie"
            style={{
                backgroundImage: `url(${bgImage || '/assets/img/hero/about-us-inr-herothumb.png'})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="inner-hero-info">
                            <h2>{title}</h2>
                            <div className="space16"></div>
                            <ul>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <img src="/assets/img/icon/arrow-right-inner.svg" alt="" />
                                </li>
                                {breadcrumbs.map((crumb, i) => (
                                    <li key={i}>
                                        {crumb.href ? (
                                            <Link href={crumb.href}>{crumb.label}</Link>
                                        ) : (
                                            <span>{crumb.label}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
