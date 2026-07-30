import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="vl-error-area sp1">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 mx-auto">
                        <div className="vl-error-area-thumb text-center">
                            <img src="/assets/img/shapes/404-image.png" alt="404" />
                        </div>
                        <div className="space24"></div>
                        <div className="vl-error-back-btn text-center">
                            <Link href="/" className="btn-home6">Back To Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
