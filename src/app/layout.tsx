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
        <html
            lang="en"
            className="custom-cursor"
            data-scroll-behavior="smooth"
            suppressHydrationWarning
        >
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

                {/* Garlon Template CSS */}
                <link
                    rel="stylesheet"
                    href="/assets/vendors/bootstrap/css/bootstrap.min.css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/vendors/bootstrap-select/bootstrap-select.min.css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/vendors/animate/animate.min.css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/vendors/fontawesome/css/all.min.css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/vendors/jquery-ui/jquery-ui.css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/vendors/jarallax/jarallax.css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/vendors/nouislider/nouislider.min.css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/vendors/nouislider/nouislider.pips.css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/vendors/tiny-slider/tiny-slider.css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/vendors/garlon-icons/style.css"
                />
                <link rel="stylesheet" href="/assets/vendors/slick/slick.css" />
                <link
                    rel="stylesheet"
                    href="/assets/vendors/owl-carousel/css/owl.carousel.min.css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/vendors/owl-carousel/css/owl.theme.default.min.css"
                />
                <link rel="stylesheet" href="/assets/css/garlon.css" />
            </head>
            <body className="custom-cursor" suppressHydrationWarning>
                <div className="custom-cursor__cursor"></div>
                <div className="custom-cursor__cursor-two"></div>
                <div className="preloader" suppressHydrationWarning>
                    <div
                        className="preloader__image"
                        style={{
                            backgroundImage: 'url(/assets/images/loader.png)',
                        }}
                    ></div>
                </div>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
    function hidePreloader() {
        var preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.transition = 'opacity 0.5s ease';
            setTimeout(function() { preloader.style.display = 'none'; }, 500);
        }
    }
    if (document.readyState === 'complete') {
        hidePreloader();
    } else {
        window.addEventListener('load', hidePreloader);
    }
`,
                    }}
                />
                <a
                    href="#html"
                    data-target="html"
                    className="scroll-to-target scroll-to-top"
                >
                    <span className="scroll-to-top__text">back top</span>
                    <span className="scroll-to-top__wrapper">
                        <span className="scroll-to-top__inner"></span>
                    </span>
                </a>
                <div className="page-wrapper">{children}</div>
            </body>
        </html>
    );
}
