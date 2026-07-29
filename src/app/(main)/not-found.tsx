import Link from 'next/link';

export default function NotFound() {
    return (
        <section className="error-404 section-space">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="error-404__image">
                            <img
                                src="/assets/images/shapes/404-shape-1-1.png"
                                alt="404"
                            />
                        </div>
                        <h2 className="error-404__title">Page Not Found</h2>
                        <p className="error-404__text">
                            The page you&apos;re looking for doesn&apos;t exist
                            or has been moved.
                        </p>
                        <div className="error-404__btns">
                            <Link href="/" className="garlon-btn">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
