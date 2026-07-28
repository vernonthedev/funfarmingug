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

            {/* Vendor Scripts - EXACT ORDER FROM GARLON TEMPLATE */}
            {/* 1. jQuery MUST LOAD FIRST - no defer, loads synchronously */}
            <script src="/assets/vendors/jquery/jquery-3.7.1.min.js"></script>

            {/* 2. Bootstrap bundle */}
            <script
                src="/assets/vendors/bootstrap/js/bootstrap.bundle.min.js"
                defer
            ></script>

            {/* 3. Bootstrap select */}
            <script
                src="/assets/vendors/bootstrap-select/bootstrap-select.min.js"
                defer
            ></script>

            {/* 4. Jarallax */}
            <script
                src="/assets/vendors/jarallax/jarallax.min.js"
                defer
            ></script>

            {/* 5. jQuery UI */}
            <script src="/assets/vendors/jquery-ui/jquery-ui.js" defer></script>

            {/* 6. jQuery AjaxChimp */}
            <script
                src="/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js"
                defer
            ></script>

            {/* 7. jQuery Appear */}
            <script
                src="/assets/vendors/jquery-appear/jquery.appear.min.js"
                defer
            ></script>

            {/* 8. jQuery Circle Progress */}
            <script
                src="/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js"
                defer
            ></script>

            {/* 9. jQuery Magnific Popup */}
            <script
                src="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js"
                defer
            ></script>

            {/* 10. jQuery Validate */}
            <script
                src="/assets/vendors/jquery-validate/jquery.validate.min.js"
                defer
            ></script>

            {/* 11. Nouislider */}
            <script
                src="/assets/vendors/nouislider/nouislider.min.js"
                defer
            ></script>

            {/* 12. Tiny Slider */}
            <script
                src="/assets/vendors/tiny-slider/tiny-slider.js"
                defer
            ></script>

            {/* 13. WNumb */}
            <script src="/assets/vendors/wnumb/wNumb.min.js" defer></script>

            {/* 14. Owl Carousel */}
            <script
                src="/assets/vendors/owl-carousel/js/owl.carousel.min.js"
                defer
            ></script>

            {/* 15. WOW */}
            <script src="/assets/vendors/wow/wow.js" defer></script>

            {/* 16. Images Loaded */}
            <script
                src="/assets/vendors/imagesloaded/imagesloaded.min.js"
                defer
            ></script>

            {/* 17. Isotope */}
            <script src="/assets/vendors/isotope/isotope.js" defer></script>

            {/* 17. Slick */}
            <script src="/assets/vendors/slick/slick.min.js" defer></script>

            {/* 18. Tilt */}
            <script src="/assets/vendors/tilt/tilt.jquery.js" defer></script>

            {/* 19. Countdown */}
            <script
                src="/assets/vendors/countdown/countdown.min.js"
                defer
            ></script>

            {/* 20. GSAP */}
            <script src="/assets/vendors/gsap/gsap.js" defer></script>
            <script
                src="/assets/vendors/gsap/ScrollTrigger.min.js"
                defer
            ></script>
            <script src="/assets/vendors/gsap/splittext.min.js" defer></script>
            <script
                src="/assets/vendors/gsap/scroll-smoother.js"
                defer
            ></script>
            <script src="/assets/vendors/gsap/garlon-split.js" defer></script>

            {/* Template Script - MUST LOAD LAST */}
            <script src="/assets/js/garlon.js" defer></script>
        </>
    );
}
