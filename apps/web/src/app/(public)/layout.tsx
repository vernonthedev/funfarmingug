import type { ReactNode } from 'react';
import { ThemeBootstrap } from '@/components/site/ThemeBootstrap';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';

export default function PublicLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <link rel="stylesheet" type="text/css" href="/css/bootstrap.css" />
            <link
                rel="stylesheet"
                type="text/css"
                href="/css/magnific-popup.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="/css/odometer.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="/css/swiper-bundle.min.css"
            />
            <link rel="stylesheet" type="text/css" href="/css/styles.css" />
            <link
                rel="stylesheet"
                type="text/css"
                href="/css/animate.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="/css/animate2.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="/css/textanimation.css"
            />
            <link rel="stylesheet" type="text/css" href="/css/map.min.css" />
            <link rel="stylesheet" href="/font/fonts.css" />
            <link
                rel="stylesheet"
                type="text/css"
                href="/icons/icomoon/style.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="/icons/fontawesome/css/all.min.css"
            />
            <link rel="shortcut icon" href="favicon.ico" />
            <link rel="apple-touch-icon-precomposed" href="/logo.png" />
            <link rel="stylesheet" href="/site.css" />
            <script
                dangerouslySetInnerHTML={{
                    __html: `window.__MAPBOX_ACCESS_TOKEN__ = ${JSON.stringify(
                        process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || ''
                    )};`,
                }}
            />
            <div id="wrapper" className="wrapper-home-2">
                <Header />
                {children}
                <Footer />
            </div>
            <ThemeBootstrap />
        </>
    );
}
