'use client';

import { useEffect } from 'react';

export default function ClientLayoutScripts() {
    useEffect(() => {
        // Hide the loader when the page has finished loading
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.display = 'none';
        }

        // Show/hide the back to top button based on scroll position
        const showBackToTopButton = () => {
            const btn = document.getElementById('backToTopBtn');
            if (btn) {
                if (
                    document.body.scrollTop > 20 ||
                    document.documentElement.scrollTop > 20
                ) {
                    btn.style.display = 'block';
                } else {
                    btn.style.display = 'none';
                }
            }
        };

        window.onscroll = showBackToTopButton;
        showBackToTopButton(); // Initial check

        return () => {
            window.onscroll = null;
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* Back to Top Button */}
            <button
                id="backToTopBtn"
                onClick={scrollToTop}
                aria-label="Back to top"
                style={{ display: 'none' }}
            >
                &uarr;
            </button>

            {/* Vendor Scripts - using actual file names from garlon-php template */}
            <script src="/assets/vendors/jquery/jquery.min.js" defer></script>
            <script src="/assets/vendors/bootstrap/js/bootstrap.bundle.min.js" defer></script>
            <script src="/assets/vendors/bootstrap-select/bootstrap-select.min.js" defer></script>
            <script src="/assets/vendors/jquery-ui/jquery-ui.js" defer></script>
            <script src="/assets/vendors/jarallax/jarallax.min.js" defer></script>
            <script src="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js" defer></script>
            <script src="/assets/vendors/nouislider/nouislider.min.js" defer></script>
            <script src="/assets/vendors/tiny-slider/tiny-slider.js" defer></script>
            <script src="/assets/vendors/slick/slick.min.js" defer></script>
            <script src="/assets/vendors/owl-carousel/js/owl.carousel.min.js" defer></script>
            <script src="/assets/vendors/wow/wow.js" defer></script>
            <script src="/assets/vendors/isotope/isotope.js" defer></script>
            <script src="/assets/vendors/imagesloaded/imagesloaded.pkgd.min.js" defer></script>
            <script src="/assets/vendors/countdown/jquery.countdown.min.js" defer></script>
            <script src="/assets/vendors/jquery-circle-progress/circle-progress.min.js" defer></script>
            <script src="/assets/vendors/gsap/gsap.js" defer></script>
            <script src="/assets/vendors/gsap/ScrollTrigger.min.js" defer></script>
            <script src="/assets/vendors/tilt/tilt.jquery.js" defer></script>

            {/* Template Script */}
            <script src="/assets/js/garlon.js" defer></script>
        </>
    );
}