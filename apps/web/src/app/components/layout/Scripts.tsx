'use client';

import { useEffect } from 'react';

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
];

export default function Scripts() {
  useEffect(() => {
    let loadedCount = 0;
    
    const loadScript = (src: string, index: number): Promise<void> => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.onload = () => {
          loadedCount++;
          resolve();
        };
        script.onerror = () => {
          loadedCount++;
          resolve();
        };
        document.body.appendChild(script);
      });
    };

    const loadAllScripts = async () => {
      for (let i = 0; i < scripts.length; i++) {
        await loadScript(scripts[i], i);
      }
      
      // Initialize AOS after scripts load
      if (typeof window !== 'undefined' && (window as any).AOS) {
        (window as any).AOS.init({
          duration: 800,
          once: true,
        });
      }
    };

    loadAllScripts();

    return () => {
      // Cleanup scripts on unmount
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return null;
}