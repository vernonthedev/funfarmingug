'use client';

import Script from 'next/script';

export default function ClientLayoutScripts() {
    return (
        <>
            <Script
                src="/assets/js/plugins/jquery-3-7-1.min.js"
                strategy="afterInteractive"
            />
            <Script
                src="/assets/js/plugins/bootstrap.min.js"
                strategy="afterInteractive"
            />
            <Script
                src="/assets/js/plugins/fontawesome.js"
                strategy="afterInteractive"
            />
            <Script
                src="/assets/js/plugins/aos.js"
                strategy="afterInteractive"
            />
            <Script
                src="/assets/js/plugins/counter.js"
                strategy="afterInteractive"
            />
            <Script
                src="/assets/js/plugins/magnific-popup.js"
                strategy="afterInteractive"
            />
            <Script
                src="/assets/js/plugins/owlcarousel.min.js"
                strategy="afterInteractive"
            />
            <Script
                src="/assets/js/plugins/nice-select.js"
                strategy="afterInteractive"
            />
            <Script
                src="/assets/js/plugins/waypoints.js"
                strategy="afterInteractive"
            />
            <Script
                src="/assets/js/plugins/slick-slider.js"
                strategy="afterInteractive"
            />
            <Script
                src="/assets/js/plugins/swiper.min.js"
                strategy="afterInteractive"
            />
            <Script
                src="/assets/js/plugins/gsap.min.js"
                strategy="afterInteractive"
            />
            <Script
                src="/assets/js/plugins/ScrollTrigger.min.js"
                strategy="afterInteractive"
            />
            <Script
                src="/assets/js/plugins/SmoothScroll.js"
                strategy="afterInteractive"
            />
            <Script
                src="/assets/js/plugins/Splitetext.js"
                strategy="afterInteractive"
            />
            <Script
                src="/assets/js/plugins/parallaxie.js"
                strategy="afterInteractive"
            />
            <Script src="/assets/js/main.js" strategy="afterInteractive" />
        </>
    );
}
