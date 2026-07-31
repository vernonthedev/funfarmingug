'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Plugin load order matches template/orgaanic/<page>.html:
//   1. jQuery first (most legacy Orgaanic plugins depend on $)
//   2. Bootstrap, FontAwesome, AOS, Counter
//   3. jQuery plugins (magnific, owlcarousel, nice-select, waypoints, slick, swiper)
//   4. GSAP family (gsap, ScrollTrigger, SmoothScroll, Splitetext)
//   5. Parallaxie
//   6. main.js (the template's full init bundle; runs $(document).ready)
//   7. route-init.js (handles re-init on Next.js client-side route changes)
const scripts = [
  '/assets/js/plugins/jquery-3-7-1.min.js',
  '/assets/js/plugins/bootstrap.min.js',
  '/assets/js/plugins/fontawesome.js',
  '/assets/js/plugins/aos.js',
  '/assets/js/plugins/counter.js',
  '/assets/js/plugins/magnific-popup.js',
  '/assets/js/plugins/owlcarousel.min.js',
  '/assets/js/plugins/nice-select.js',
  '/assets/js/plugins/waypoints.js',
  '/assets/js/plugins/slick-slider.js',
  '/assets/js/plugins/swiper.min.js',
  '/assets/js/plugins/gsap.min.js',
  '/assets/js/plugins/ScrollTrigger.min.js',
  '/assets/js/plugins/SmoothScroll.js',
  '/assets/js/plugins/Splitetext.js',
  '/assets/js/plugins/parallaxie.js',
  '/assets/js/main.js',
  '/assets/js/route-init.js',
];

export default function Scripts() {
  const pathname = usePathname();

  useEffect(() => {
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const existing = document.querySelector(
          `script[data-orgaanic-src="${src}"]`,
        );
        if (existing) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.dataset.orgaanicSrc = src;
        script.onload = () => resolve();
        script.onerror = () => resolve(); // don't block the chain on a single failure
        document.body.appendChild(script);
      });
    };

    const loadAllScripts = async () => {
      for (const src of scripts) {
        await loadScript(src);
      }
    };

    loadAllScripts();

    return () => {
      // Scripts.tsx lives in the root layout and stays mounted across
      // navigations, so we don't remove scripts on unmount. Removing them
      // would force a re-download every route change.
    };
  }, []);

  // Dispatch a route-change event after every pathname change. route-init.js
  // listens for this and re-initializes AOS, counters, nice-select, and
  // section swipers against the newly mounted DOM.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Two RAFs ensures React has flushed the new page's components before
    // we ask jQuery plugins to scan for them.
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.dispatchEvent(new CustomEvent('orgaanic:routechange'));
      });
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
