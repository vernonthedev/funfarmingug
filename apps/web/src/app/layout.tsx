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
                <link rel="stylesheet" href="/assets/css/main.css" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
