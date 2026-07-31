// route-init.js
// Re-initializes jQuery-driven plugins after Next.js route changes.
//
// Loaded AFTER main.js. main.js does the initial $(document).ready()
// init for the homepage; this file listens for `orgaanic:routechange`
// (dispatched by Scripts.tsx on every pathname change) and:
//   1. Re-runs AOS.refresh() so newly mounted AOS elements animate.
//   2. Re-runs countUp() on any .counter elements not yet initialized.
//   3. Re-runs niceSelect() on newly mounted <select> elements.
//   4. Initializes any newly mounted .swiper elements.
//
// It intentionally does NOT re-run main.js (which would double-init
// swipers and re-clone the mobile menu). It also does NOT touch the
// offcanvas — Header.tsx (React) owns mobile menu state.

(function () {
    'use strict';

    var initializedCounters = new WeakSet();
    var initializedSelects = new WeakSet();

    function refreshAOS() {
        if (typeof window.AOS === 'undefined') return;
        try {
            if (typeof window.AOS.refresh === 'function') {
                window.AOS.refresh();
            } else {
                window.AOS.init({ duration: 800, once: true, offset: 50 });
            }
        } catch (e) {}
    }

    function initCounters() {
        var jq = window.jQuery;
        if (!jq || typeof jq.fn.countUp !== 'function') return;
        try {
            jq('.counter').each(function () {
                var node = this;
                if (initializedCounters.has(node)) return;
                initializedCounters.add(node);
                try {
                    jq(node).countUp();
                } catch (e) {}
            });
        } catch (e) {}
    }

    function initSelects() {
        var jq = window.jQuery;
        if (!jq || typeof jq.fn.niceSelect !== 'function') return;
        try {
            jq('select').each(function () {
                var node = this;
                if (initializedSelects.has(node)) return;
                if (jq(node).next('.nice-select').length > 0) return;
                initializedSelects.add(node);
                try {
                    jq(node).niceSelect();
                } catch (e) {}
            });
        } catch (e) {}
    }

    function initNewSwipers() {
        if (typeof window.Swiper === 'undefined') return;
        // Whitelist of swipers that belong to our shared section components.
        // Each is initialized at most once per DOM presence.
        var swipers = [
            { sel: '.myproduct6', opts: {
                slidesPerView: 3, spaceBetween: 30, loop: true, speed: 900,
                breakpoints: {
                    375: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1000: { slidesPerView: 3, spaceBetween: 20 },
                },
                autoplay: { delay: 3000, disableOnInteraction: false },
                navigation: {
                    nextEl: '.product6-arrow .next-arrow',
                    prevEl: '.product6-arrow .prev-arrow',
                },
            }},
            { sel: '.myservicehm6', opts: {
                slidesPerView: 3, spaceBetween: 30, loop: true, speed: 900,
                breakpoints: {
                    375: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1000: { slidesPerView: 3, spaceBetween: 20 },
                },
                autoplay: { delay: 3000, disableOnInteraction: false },
                navigation: {
                    nextEl: '.service6-arrow .next-arrow',
                    prevEl: '.service6-arrow .prev-arrow',
                },
            }},
            { sel: '.mytestimo6', opts: {
                slidesPerView: 1, spaceBetween: 14, loop: true, speed: 1000,
                autoplay: { delay: 4000, disableOnInteraction: false },
                navigation: {
                    nextEl: '.testimonial6-arrow .next-arrow',
                    prevEl: '.testimonial6-arrow .prev-arrow',
                },
            }},
            { sel: '.myteam6', opts: {
                slidesPerView: 3, spaceBetween: 30, freeMode: true,
                loop: true, speed: 1000,
                autoplay: { delay: 3000, disableOnInteraction: false },
                navigation: {
                    nextEl: '.team6-arrow .next-arrow',
                    prevEl: '.team6-arrow .prev-arrow',
                },
                breakpoints: {
                    375: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1000: { slidesPerView: 3, spaceBetween: 20 },
                },
            }},
        ];

        swipers.forEach(function (cfg) {
            try {
                var els = document.querySelectorAll(cfg.sel);
                els.forEach(function (el) {
                    if (el.__orgaanicSwiper) return;
                    el.__orgaanicSwiper = new window.Swiper(cfg.sel, cfg.opts);
                });
            } catch (e) {}
        });
    }

    function reInit() {
        // Wait two RAFs so React has flushed the new page's DOM.
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                refreshAOS();
                initCounters();
                initSelects();
                initNewSwipers();
            });
        });
    }

    // Hook into both the custom event dispatched by Scripts.tsx and the
    // generic popstate so browser back/forward also works.
    window.addEventListener('orgaanic:routechange', reInit);
    window.addEventListener('popstate', reInit);

    // Also run once after the initial main.js ready init to catch anything
    // that mounted slightly later (deferred Suspense boundaries, etc.).
    if (document.readyState === 'complete') {
        setTimeout(reInit, 100);
    } else {
        window.addEventListener('load', function () {
            setTimeout(reInit, 100);
        });
    }
})();
