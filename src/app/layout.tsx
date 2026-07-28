import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fun Farming Uganda",
  description: "Gardening and Landscaping Services in Uganda",
  metadataBase: new URL("https://funfarminguganda.com"),
  openGraph: {
    title: "Fun Farming Uganda",
    description: "Gardening and Landscaping Services in Uganda",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-cursor">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/assets/images/favicons/site.webmanifest" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lateef:wght@200;300;400;500;600;700;800&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/fonts/stylesheet.css" />
        
        {/* Vendor Styles */}
        <link rel="stylesheet" href="/assets/vendors/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/vendors/bootstrap-select/bootstrap-select.min.css" />
        <link rel="stylesheet" href="/assets/vendors/animate/animate.min.css" />
        <link rel="stylesheet" href="/assets/vendors/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/assets/vendors/jquery-ui/jquery-ui.css" />
        <link rel="stylesheet" href="/assets/vendors/jarallax/jarallax.css" />
        <link rel="stylesheet" href="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css" />
        <link rel="stylesheet" href="/assets/vendors/nouislider/nouislider.min.css" />
        <link rel="stylesheet" href="/assets/vendors/nouislider/nouislider.pips.css" />
        <link rel="stylesheet" href="/assets/vendors/tiny-slider/tiny-slider.css" />
        <link rel="stylesheet" href="/assets/vendors/garlon-icons/style.css" />
        <link rel="stylesheet" href="/assets/vendors/slick/slick.css" />
        <link rel="stylesheet" href="/assets/vendors/owl-carousel/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/vendors/owl-carousel/css/owl.theme.default.min.css" />
        
        {/* Template Styles */}
        <link rel="stylesheet" href="/assets/css/garlon.css" />
      </head>
      <body className={`${inter.className} custom-cursor`}>
        <div className="custom-cursor__cursor"></div>
        <div className="custom-cursor__cursor-two"></div>
        
        {/* Preloader */}
        <div className="preloader">
          <div className="preloader__image" style={{ backgroundImage: 'url(/assets/images/loader.png)' }}></div>
        </div>
        
        {children}
        
        {/* Vendor Scripts */}
        <script src="/assets/vendors/jquery/jquery-3.7.1.min.js" defer></script>
        <script src="/assets/vendors/bootstrap/js/bootstrap.bundle.min.js" defer></script>
        <script src="/assets/vendors/bootstrap-select/bootstrap-select.min.js" defer></script>
        <script src="/assets/vendors/jquery-ui/jquery-ui.min.js" defer></script>
        <script src="/assets/vendors/jarallax/jarallax.min.js" defer></script>
        <script src="/assets/vendors/jarallax/jarallax-video.min.js" defer></script>
        <script src="/assets/vendors/jarallax/jarallax-element.min.js" defer></script>
        <script src="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js" defer></script>
        <script src="/assets/vendors/nouislider/nouislider.min.js" defer></script>
        <script src="/assets/vendors/nouislider/nouislider.pips.min.js" defer></script>
        <script src="/assets/vendors/tiny-slider/tiny-slider.min.js" defer></script>
        <script src="/assets/vendors/slick/slick.min.js" defer></script>
        <script src="/assets/vendors/owl-carousel/js/owl.carousel.min.js" defer></script>
        <script src="/assets/vendors/wow/wow.min.js" defer></script>
        <script src="/assets/vendors/isotope/isotope.pkgd.min.js" defer></script>
        <script src="/assets/vendors/imagesloaded/imagesloaded.pkgd.min.js" defer></script>
        <script src="/assets/vendors/countdown/jquery.countdown.min.js" defer></script>
        <script src="/assets/vendors/circle-progress/circle-progress.min.js" defer></script>
        <script src="/assets/vendors/gsap/gsap.min.js" defer></script>
        <script src="/assets/vendors/gsap/ScrollTrigger.min.js" defer></script>
        <script src="/assets/vendors/tilt/tilt.jquery.min.js" defer></script>
        
        {/* Template Script */}
        <script src="/assets/js/garlon.js" defer></script>
      </body>
    </html>
  );
}