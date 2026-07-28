import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientLayoutScripts from "@/components/ClientLayoutScripts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fun Farming Uganda | Organic Farm & Agro Tourism",
  description: "Fun Farming Uganda is an organic farm engaging in diverse agricultural activities like goat breeding, poultry farming, banana plantation. We serve as a youth agro project educating and involving young individuals in sustainable farming practices.",
  metadataBase: new URL("https://funfarminguganda.com"),
  openGraph: {
    title: "Fun Farming Uganda",
    description: "Organic farm & agro tourism in Uganda - goat breeding, poultry farming, banana plantation, team building activities",
    type: "website",
    locale: "en_UG",
    siteName: "Fun Farming Uganda",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fun Farming Uganda",
    description: "Organic farm & agro tourism in Uganda",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1f292d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-cursor">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicons/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicons/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicons/logo.png" />
        <link rel="manifest" href="/img/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/img/favicons/safari-pinned-tab.svg" color="#1f292d" />
        <meta name="msapplication-TileColor" content="#1f292d" />
        <meta name="theme-color" content="#1f292d" />
        
        {/* Google Fonts - Using the same fonts from the Laravel project */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;600;700&family=Open+Sans:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="custom-cursor">
        <div className="custom-cursor__cursor"></div>
        <div className="custom-cursor__cursor-two"></div>

        {/* Preloader */}
        <div id="loader">
          <div><img src="/img/logo.png" alt="Fun Farming Logo" width="100%" /></div>
        </div>

        {/* SVG Definitions for clip paths */}
        <svg width="0" height="0">
          <defs>
            <clipPath id="clip-path-image-1" transform="scale(0.0041666666666667, 0.0056179775280899)" clipPathUnits="objectBoundingBox">
              <path d="M221 169.7L239 9a8 8 0 00-7.1-8.9 7.6 7.6 0 00-1.4 0L7.5 13a8 8 0 00-7.5 8l.1 131a8 8 0 007.4 8l204.9 17a8 8 0 008.6-7.2z"/>
            </clipPath>
            <clipPath id="clip-path-image-2" transform="scale(0.0035211267605634, 0.0054644808743169)" clipPathUnits="objectBoundingBox">
              <path d="M28.4 1.5L249 0a25 25 0 0114.8 4.5 20.8 20.8 0 018.7 15c2 17 11 116 11 116s5.6 30.6-21 33c-5.5.5-238 14-238 14s-20.2.4-24-17.2A25 25 0 010 159L6.3 26.5A30 30 0 019.6 14c3-5.6 8.5-11.6 18.8-12.4z"/>
            </clipPath>
            <clipPath id="clip-path-image-3" transform="scale(0.0020876826722338, 0.0028409090909091)" clipPathUnits="objectBoundingBox">
              <path d="M37.8526 344.755L0.0509148 8.89477C-0.44325 4.50421 2.7154 0.544369 7.10596 0.0501979C7.5547 -0.0003087 8.00692 -0.0127294 8.45776 0.013058L471.44 26.5065C475.677 26.749 478.987 30.2577 478.983 34.5015L478.705 308.847C478.701 313.008 475.509 316.47 471.362 316.812L46.4595 351.833C42.1488 352.189 38.3364 349.053 37.8526 344.755Z"/>
            </clipPath>
          </defs>
        </svg>

        <Header />
        <main>{children}</main>
        <Footer />
        <ClientLayoutScripts />
      </body>
    </html>
  );
}