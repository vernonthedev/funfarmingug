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
                    el.play().catch(() => {});
                } else {
                    el.pause();
                }
            },
            { rootMargin: '200px' }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <video
            ref={ref}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={HERO_VIDEO_POSTER}
        >
            <source src={HERO_VIDEO_BG} type="video/mp4" />
        </video>
    );
}