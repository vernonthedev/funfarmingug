(function ($) {
    "use strict";

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

    // Smooth Scroll Config
    gsap.config({
        nullTargetWarn: false,
    });

    // Hero Banner Content Animation
    if ($('.hero-one__content').length > 0) {
        let splitTextLines = gsap.utils.toArray(".hero-one__content");

        splitTextLines.forEach(splitTextLine => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: 'top 90%',
                    end: 'bottom 60%',
                    scrub: false,
                    toggleActions: 'play none none none',
                    markers: false
                }
            });

            const itemSplitted = new SplitText(splitTextLine, {
                type: "lines"
            });

            gsap.set(splitTextLine, {
                perspective: 400
            });

            tl.from(itemSplitted.lines, {
                opacity: 0,
                rotationX: -80,
                force3D: true,
                transformOrigin: "top center -50",
                stagger: 0.1,
                duration: 1,
                delay: 0.7
            });
        });
    }

    // Hero Thumb Image Animation (Right to Left)
    if ($('.hero-one__thumb').length > 0) {
        let thumbs = gsap.utils.toArray(".hero-one__thumb");

        thumbs.forEach(thumb => {
            // Initial state: off-screen to the right
            gsap.set(thumb, {
                opacity: 0,
                x: 100,      // Right side থেকে ঢুকবে
                scale: 0.95
            });

            // ScrollTrigger animation
            gsap.to(thumb, {
                scrollTrigger: {
                    trigger: thumb,
                    start: 'top 90%',
                    end: 'bottom 60%',
                    toggleActions: 'play none none none',
                    markers: false
                },
                opacity: 1,
                x: 0,        // মূল অবস্থানে আসবে
                scale: 1,
                duration: 1,
                delay: 0.7,
                ease: "power3.out"
            });
        });
    }


    // On Window Load
    $(window).on("load", function () {
        bwsplit_text();
    });

    // Split Text Animation
    function bwsplit_text() {
        setTimeout(function () {
            let elements = $(".sec-title__title, .sec-title-two__title, .sec-title__tagline, .page-header__title, .bw-split-in-fade, .bw-split-in-scale");

            if (!elements.length) return;

            elements.each(function (index, element) {
                const $el = $(element);
                const split = new SplitText(element, {
                    type: "chars, words"
                });

                gsap.set(element, { perspective: 400 });

                if ($el.hasClass("bw-split-in-fade")) {
                    gsap.set(split.chars, { opacity: 0 });
                }
                if ($el.hasClass("bw-split-in-right")) {
                    gsap.set(split.chars, { opacity: 0, x: 20 });
                }
                if ($el.hasClass("bw-split-in-left")) {
                    gsap.set(split.chars, { opacity: 0, x: -20 });
                }
                if ($el.hasClass("bw-split-in-up")) {
                    gsap.set(split.chars, {
                        opacity: 0,
                        y: 80,
                        scale: 1,
                        transformOrigin: "0% 50% -50"
                    });
                }
                if ($el.hasClass("bw-split-in-up-fast")) {
                    gsap.set(split.chars, {
                        opacity: 0,
                        y: -10,
                        scale: 1,
                        transformOrigin: "0% 50% -50"
                    });
                }
                if ($el.hasClass("bw-split-in-down")) {
                    gsap.set(split.chars, { opacity: 0, y: -20 });
                }
                if ($el.hasClass("bw-split-in-rotate")) {
                    gsap.set(split.chars, { opacity: 0, rotateX: "50deg" });
                }
                if ($el.hasClass("bw-split-in-scale")) {
                    gsap.set(split.chars, { opacity: 0, rotateX: "50deg" });
                }

                gsap.to(split.chars, {
                    scrollTrigger: {
                        trigger: element,
                        toggleActions: "restart pause resume reverse",
                        start: "top 90%"
                    },
                    x: 0,
                    y: 0,
                    rotateX: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.02
                });
            });
        }, 200);
    }

    const hoverBtns = gsap.utils.toArray(".wb-hover-btn-wrapper");
    const hoverBtnItems = gsap.utils.toArray(".wb-hover-btn-item");
    
    hoverBtns.forEach((btn, i) => {
        const target = hoverBtnItems[i];
    
        $(btn).on("mousemove", (e) => {
            const $btn = $(btn);
            const relX = e.pageX - $btn.offset().left;
            const relY = e.pageY - $btn.offset().top;
    
            gsap.to(target, {
                duration: 0.5,
                x: ((relX - $btn.width() / 2) / $btn.width()) * 80,
                y: ((relY - $btn.height() / 2) / $btn.height()) * 80,
                ease: "power2.out",
            });
        });
    
        $(btn).on("mouseleave", () => {
            gsap.to(target, {
                duration: 0.1,
                x: 0,
                y: 0,
                ease: "power2.out",
            });
        });
    });
    
    // Button hover circle dot animation
    $(".wb-hover-btn").on("mouseenter mouseout", function (e) {
        const offset = $(this).offset();
        const x = e.pageX - offset.left;
        const y = e.pageY - offset.top;
    
        $(this).find(".wb-btn-circle-dot").css({ top: y, left: x });
    });    

})(jQuery);
