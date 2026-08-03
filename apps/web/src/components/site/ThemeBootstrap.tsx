'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const LIBRARIES: string[] = [
    '/js/jquery.min.js',
    '/js/bootstrap.min.js',
    '/js/lazysize.min.js',
    '/js/wow.min.js',
    '/js/magnific-popup.min.js',
    '/js/swiper-bundle.min.js',
    '/js/odometer.min.js',
    '/js/counter.js',
    '/js/jquery-validate.js',
    '/js/gsap.min.js',
    '/js/ScrollTrigger.min.js',
    '/js/Splitetext.js',
    '/js/rellax.min.js',
    '/js/isotope.min.js',
    '/js/imagesloaded.min.js',
    '/js/gsap-animation.js',
    '/js/main.js',
];

function loadScript(src: string): Promise<void> {
    return new Promise((resolve) => {
        if (document.querySelector(`script[src="${src}"]`)) {
            resolve();
            return;
        }
        const el = document.createElement('script');
        el.src = src;
        el.async = false;
        el.onload = () => resolve();
        el.onerror = () => {
            console.warn(`[ThemeBootstrap] Failed to load ${src}`);
            resolve();
        };
        document.body.appendChild(el);
    });
}

function initThemeTheme() {
    const $ = (window as any).jQuery;
    if (!$) return;

    if ((window as any).WOW) {
        new (window as any).WOW({ live: true }).init();
    }

    $('.mobile-button, .overlay-mobile-nav, .mobile-nav-close')
        .off('click')
        .on('click', () => {
            $('.mobile-nav-wrap').toggleClass('active');
            $('body').toggleClass('no-scroll');
        });
    $(document)
        .off('click', '.menu-item-has-children-mobile')
        .on(
            'click',
            '.menu-item-has-children-mobile',
            function (this: HTMLElement) {
                const args = { duration: 200 };
                if ($(this).hasClass('active')) {
                    $(this).children('.sub-menu-mobile').slideUp(args);
                    $(this).removeClass('active');
                } else {
                    $('.sub-menu-mobile').slideUp(args);
                    $(this).children('.sub-menu-mobile').slideDown(args);
                    $(this).addClass('active');
                }
            }
        );

    if ($('.fixed-header').length > 0) {
        const $header = $('.fixed-header');
        let lastScroll = 0;
        $(window)
            .off('scroll.initheader')
            .on('scroll.initheader', function (this: Window) {
                const st = $(this).scrollTop();
                if (st > lastScroll && st > 350) {
                    $header.removeClass('visible');
                } else {
                    $header.addClass('visible');
                }
                lastScroll = st;
            });
    }

    const $progress = $('.progress-wrap');
    if ($progress.length > 0) {
        const path = $progress.find('path');
        const length = path[0]?.getTotalLength?.() || 0;
        $(window)
            .off('scroll.initgoto')
            .on('scroll.initgoto', function (this: Window) {
                const winScroll = $(this).scrollTop();
                const height = $(document).height() - $(this).height();
                const scrolled = length - (winScroll / height) * length;
                path.css('stroke-dashoffset', scrolled);
                if (winScroll > 200) $progress.addClass('active-progress');
                else $progress.removeClass('active-progress');
            });
        $progress.off('click').on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 300);
        });
    }

    if ((window as any).WOW) {
        new (window as any).WOW({ live: true }).init();
    }
}

function initSwipers() {
    const $ = (window as any).jQuery;
    const Swiper = (window as any).Swiper;
    if (!$ || !Swiper) return;

    const defs: Record<string, any> = {
        '.slider-home-2': {
            slidesPerView: 1,
            centeredSlides: true,
            loop: true,
            effect: 'fade',
            speed: 900,
            navigation: {
                nextEl: '.btn-slide-home-2.btn-next',
                prevEl: '.btn-slide-home-2.btn-prev',
            },
            autoplay: { delay: 4000, disableOnInteraction: false },
        },
        '.slider-s-service-2': {
            slidesPerView: 2.7,
            spaceBetween: 30,
            navigation: {
                nextEl: '.btn-s-service-2.btn-next',
                prevEl: '.btn-s-service-2.btn-prev',
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                550: { slidesPerView: 1.5 },
                767: { slidesPerView: 2 },
                1500: { slidesPerView: 2.7 },
            },
        },
        '.slider-box-icon': {
            slidesPerView: 1,
            breakpoints: {
                0: { slidesPerView: 0.4 },
                400: { slidesPerView: 0.6 },
                600: { slidesPerView: 0.8 },
                850: { slidesPerView: 1 },
            },
        },
        '.slider-s-project': {
            slidesPerView: 2,
            loop: true,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination.pagination-s-project',
                clickable: true,
            },
            breakpoints: { 0: { slidesPerView: 1 }, 850: { slidesPerView: 2 } },
        },
        '.slider-s-testimonial-2': {
            slidesPerView: 2,
            loop: true,
            spaceBetween: 30,
            navigation: {
                nextEl: '.btn-slide-testimonial-2.btn-next',
                prevEl: '.btn-slide-testimonial-2.btn-prev',
            },
            breakpoints: { 0: { slidesPerView: 1 }, 767: { slidesPerView: 2 } },
        },
        '.slider-blog-post': {
            slidesPerView: 3,
            loop: true,
            spaceBetween: 30,
            navigation: {
                nextEl: '.btn-s-blog-post.btn-next',
                prevEl: '.btn-s-blog-post.btn-prev',
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                651: { slidesPerView: 1.5 },
                850: { slidesPerView: 2 },
                991: { slidesPerView: 2.5 },
                1200: { slidesPerView: 3 },
            },
        },
        '.slider-partner': {
            slidesPerView: 6,
            loop: true,
            spaceBetween: 70,
            autoplay: {
                pauseOnMouseEnter: true,
                delay: 0,
                disableOnInteraction: false,
            },
            speed: 7000,
            breakpoints: {
                0: { spaceBetween: 20, slidesPerView: 1.5 },
                450: { spaceBetween: 20, slidesPerView: 2.5 },
                550: { spaceBetween: 20, slidesPerView: 3 },
                1600: { slidesPerView: 6 },
            },
        },
        '.slider-gallery': {
            slidesPerView: 4,
            loop: true,
            spaceBetween: 30,
            breakpoints: {
                0: { slidesPerView: 1 },
                450: { slidesPerView: 2 },
                767: { slidesPerView: 2.5 },
                991: { slidesPerView: 3 },
                1200: { slidesPerView: 3.5 },
                1440: { slidesPerView: 4 },
            },
        },
        '.slider-box-list': {
            slidesPerView: 4,
            loop: true,
            spaceBetween: 30,
            navigation: {
                nextEl: '.btn-slide-box-list.btn-next',
                prevEl: '.btn-slide-box-list.btn-prev',
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                578: { slidesPerView: 2 },
                767: { slidesPerView: 2.5 },
                930: { slidesPerView: 3 },
                1070: { slidesPerView: 3.5 },
                1300: { slidesPerView: 4 },
            },
        },
    };

    Object.keys(defs).forEach((sel) => {
        const el = document.querySelector(sel);
        if (!el) return;
        if ((el as any).swiper) {
            (el as any).swiper.destroy(true, true);
        }
        new Swiper(el, defs[sel]);
    });
}

export function ThemeBootstrap() {
    const pathname = usePathname();
    const loaded = useRef(false);

    console.log('[ThemeBootstrap] component rendering');

    return (
        <>
            <div data-tb-rendered="true" style={{ display: 'none' }} />
            <ScriptLoader pathname={pathname} loaded={loaded} />
        </>
    );
}

function ScriptLoader({ pathname, loaded }: { pathname: string; loaded: React.MutableRefObject<boolean> }) {
    console.log('[ScriptLoader] mounted, pathname:', pathname);
    
    useEffect(() => {
        console.log('[ScriptLoader] effect mounted');
        let mounted = true;
        (async () => {
            try {
                for (const src of LIBRARIES) {
                    if (!mounted) return;
                    await loadScript(src);
                }
                if (!mounted) return;
                loaded.current = true;
                initSwipers();
                initThemeTheme();
            } catch (e) {
                console.error('[ThemeBootstrap] init failed:', e);
            }
        })();
        return () => { mounted = false; };
    }, []);

    useEffect(() => {
        console.log('[ScriptLoader] pathname changed', pathname);
        if (!loaded.current) return;
        const t = setTimeout(() => {
            initSwipers();
            initThemeTheme();
        }, 250);
        return () => clearTimeout(t);
    }, [pathname]);

    return null;
}