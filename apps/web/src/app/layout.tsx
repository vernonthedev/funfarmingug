import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ThemeBootstrap } from '@/components/site/ThemeBootstrap';
import { Header } from '@/components/site/Header';
import { Preloader } from '@/components/site/Preloader';
import { Footer } from '@/components/site/Footer';

export const metadata: Metadata = {
    title: {
        default: 'Fun Farming Uganda',
        template: '%s | Fun Farming Uganda',
    },
    description:
        'Fun Farming Uganda - organic farming, farm activities, tours, and fresh farm food. Where Agriculture Meets Adventure!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/css/bootstrap.css"
                />
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
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/css/map.min.css"
                />
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
            </head>
            <body className="counter-scroll-2">
                <Preloader />
                <div id="wrapper" className="wrapper-home-2">
                    <Header />
                    {children}
                    <Footer />
                </div>
                <ThemeBootstrap />
            </body>
        </html>
    );
}
