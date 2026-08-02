import Link from 'next/link';

interface Crumb {
    label: string;
    href?: string;
}

interface PageTitleProps {
    image: string;
    subTitle: string;
    title: string;
    crumbs?: Crumb[];
    pageClass?: string;
}

export function PageTitle({
    image,
    subTitle,
    title,
    crumbs = [],
    pageClass = '',
}: PageTitleProps) {
    return (
        <div className={`page-title ${pageClass}`.trim()}>
            <div className="rellax" data-rellax-speed="5">
                <img src={image} alt="" />
            </div>
            <div className="content-wrap">
                <div className="tf-container w-1290">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content">
                                <p className="sub-title">{subTitle}</p>
                                <h1 className="title">{title}</h1>
                                <div className="icon-img">
                                    <img
                                        src="/images/item/line-throw-title.png"
                                        alt=""
                                    />
                                </div>
                                <div className="breadcrumb">
                                    <Link href="/">Home</Link>
                                    {crumbs.map((c, i) => (
                                        <span key={i}>
                                            <div className="icon">
                                                <i className="icon-arrow-right1"></i>
                                            </div>
                                            {c.href ? (
                                                <Link href={c.href}>
                                                    {c.label}
                                                </Link>
                                            ) : (
                                                <a href="javascript:void(0)">
                                                    {c.label}
                                                </a>
                                            )}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="img-item item-2">
                <img src="/images/item/grass.png" alt="" />
            </div>
        </div>
    );
}
