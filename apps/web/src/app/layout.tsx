import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import Scripts from '@/app/components/layout/Scripts';

export const metadata: Metadata = {
  title: 'Orgaanic - Agriculture and Organic Farm',
  description: 'Your trusted partner in home-based agriculture. Whether it\'s a balcony garden or a backyard farm, we make it easy.',
  keywords: ['organic farming', 'agriculture', 'home gardening', 'sustainable living', 'eco-friendly'],
};

export const viewport: Viewport = {
  themeColor: '#1A5632',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="shortcut icon" href="/assets/img/logo/fav-logo1.png" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/assets/css/plugins/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/aos.css" />
        <link rel="stylesheet" href="/assets/css/plugins/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/plugins/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/plugins/owlcarousel.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/slick-slider.css" />
        <link rel="stylesheet" href="/assets/css/plugins/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/plugins/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body>
        <div className="page-wrapper">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <Scripts />
      </body>
    </html>
  );
}