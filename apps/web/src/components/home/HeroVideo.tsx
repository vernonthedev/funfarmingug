'use client';

import { useEffect, useRef } from 'react';
import { HERO_VIDEO_BG, HERO_VIDEO_POSTER } from '@/lib/site';

export function HeroVideo() {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el || typeof IntersectionObserver === 'undefined') return;

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Try to play with sound first; if the browser blocks
                    // autoplay with sound, fall back to muted playback.
                    el.play().catch(() => {
                        el.muted = true;
                        el.play().catch(() => {});
                    });
                } else {
                    el.pause();
                }
            },
            { rootMargin: '200px' }
        );
        io.observe(el);

        // If autoplay ended up muted (browser autoplay policy), unmute on the
        // first user interaction so the background video has sound.
        const unmute = () => {
            el.muted = false;
            el.play().catch(() => {});
            window.removeEventListener('click', unmute);
            window.removeEventListener('keydown', unmute);
            window.removeEventListener('touchstart', unmute);
        };
        window.addEventListener('click', unmute);
        window.addEventListener('keydown', unmute);
        window.addEventListener('touchstart', unmute);

        return () => {
            io.disconnect();
            window.removeEventListener('click', unmute);
            window.removeEventListener('keydown', unmute);
            window.removeEventListener('touchstart', unmute);
        };
    }, []);

    return (
        <video
            ref={ref}
            autoPlay
            loop
            playsInline
            preload="metadata"
            poster={HERO_VIDEO_POSTER}
        >
            <source src={HERO_VIDEO_BG} type="video/mp4" />
        </video>
    );
}