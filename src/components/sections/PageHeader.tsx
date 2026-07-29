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
        <section className="page-header">
            <div
                className="page-header__bg"
                style={{
                    backgroundImage: `url(${bgImage || '/assets/images/backgrounds/page-header-bg-1-1.jpg'})`,
                }}
            ></div>
            <div className="container">
                <h2 className="page-header__title">{title}</h2>
                <ul className="garlon-breadcrumb list-unstyled">
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
        </section>
    );
}
