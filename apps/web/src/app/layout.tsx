import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Fun Farming Uganda | Organic Farm & Agro Tourism',
    description:
        'Fun Farming Uganda is an organic farm engaging in diverse agricultural activities like goat breeding, poultry farming, banana plantation. We serve as a youth agro project educating and involving young individuals in sustainable farming practices.',
    metadataBase: new URL('https://funfarminguganda.com'),
    openGraph: {
        title: 'Fun Farming Uganda',
        description:
            'Organic farm & agro tourism in Uganda - goat breeding, poultry farming, banana plantation, team building activities',
        type: 'website',
        locale: 'en_UG',
        siteName: 'Fun Farming Uganda',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Fun Farming Uganda',
        description: 'Organic farm & agro tourism in Uganda',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export const viewport: Viewport = {
    themeColor: '#1f292d',
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/img/favicons/logo.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/img/favicons/logo.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/img/favicons/logo.png"
                />
                <link rel="manifest" href="/img/favicons/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/img/favicons/safari-pinned-tab.svg"
                    color="#1f292d"
                />
                <meta name="msapplication-TileColor" content="#1f292d" />
                <meta name="theme-color" content="#1f292d" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Lateef:wght@400;600;700;800&display=swap"
                    rel="stylesheet"
                />

                <link
                    rel="stylesheet"
                    href="/assets/css/plugins/bootstrap.min.css"
                />
                <link rel="stylesheet" href="/assets/css/plugins/aos.css" />
                <link
                    rel="stylesheet"
                    href="/assets/css/plugins/fontawesome.css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/css/plugins/magnific-popup.css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/css/plugins/owlcarousel.min.css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/css/plugins/slick-slider.css"
                />
                <link rel="stylesheet" href="/assets/css/plugins/nice-select.css" />
                <link rel="stylesheet" href="/assets/css/plugins/swiper.min.css" />
            </head>
            <body>
                <div className="preloader">
                    <div className="loading-container">
                        <div className="loading"></div>
                        <div id="loading-icon">
                            <img src="/assets/img/logo/preloader.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="paginacontainer">
                    <div className="progress-wrap">
                        <svg
                            className="progress-circle svg-content"
                            width="100%"
                            height="100%"
                            viewBox="-1 -1 102 102"
                        >
                            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                        </svg>
                    </div>
                </div>

                <div className="vl-offcanvas">
                    <div className="vl-offcanvas-wrapper">
                        <div className="vl-offcanvas-header d-flex justify-content-between align-items-center mb-90">
                            <div className="vl-offcanvas-logo">
                                <a href="/">
                                    <img
                                        src="/assets/img/footer/footer1-logo.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="vl-offcanvas-close">
                                <button className="vl-offcanvas-close-toggle">
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                        </div>

                        <div className="vl-offcanvas-menu d-xl-none mb-40">
                            <nav></nav>
                        </div>

                        <div className="space20"></div>
                        <div className="vl-offcanvas-info">
                            <h3 className="vl-offcanvas-sm-title">
                                Contact Us
                            </h3>
                            <div className="space20"></div>
                            <span>
                                <a href="/#">
                                    <i className="fa-regular fa-envelope"></i>{' '}
                                    info@funfarminguganda.com
                                </a>
                            </span>
                            <span>
                                <a href="tel:+256700000000">
                                    <i className="fa-solid fa-phone"></i> +256
                                    700 000 000
                                </a>
                            </span>
                            <span>
                                <a href="/#">
                                    <i className="fa-solid fa-location-dot"></i>{' '}
                                    Kampala, Uganda
                                </a>
                            </span>
                        </div>
                        <div className="space20"></div>
                        <div className="vl-offcanvas-social">
                            <h3 className="vl-offcanvas-sm-title">Follow Us</h3>
                            <div className="space20"></div>
                            <a href="/#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="/#">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="/#">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="/#">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="vl-offcanvas-overlay"></div>

                {children}
            </body>
        </html>
    );
}
