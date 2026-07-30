'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
    useEffect(() => {
        function initSwipers() {
            if (
                typeof window !== 'undefined' &&
                (window as any).Swiper
            ) {
                try {
                    const heroSwiper = new (window as any).Swiper('.myhm1-hero', {
                        loop: true,
                        autoplay: {
                            delay: 7000,
                            disableOnInteraction: false,
                        },
                        speed: 1000,
                        effect: 'slide',
                        navigation: {
                            nextEl: '.hero1-arrow .next-arrow button',
                            prevEl: '.hero1-arrow .prev-arrow button',
                        },
                    });

                    const serviceSwiper = new (window as any).Swiper('.myservice7', {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        loop: true,
                        autoplay: {
                            delay: 4000,
                            disableOnInteraction: false,
                        },
                        speed: 700,
                        breakpoints: {
                            0: { slidesPerView: 1 },
                            575: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                        },
                    });

                    const gallerySwiper = new (window as any).Swiper('.mygallery1', {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        loop: true,
                        autoplay: {
                            delay: 4000,
                            disableOnInteraction: false,
                        },
                        speed: 700,
                        breakpoints: {
                            0: { slidesPerView: 1 },
                            575: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                        },
                    });

                    const partnerSwiper = new (window as any).Swiper('.tpcauses-text-slider-active-2', {
                        slidesPerView: 5,
                        spaceBetween: 30,
                        loop: true,
                        autoplay: {
                            delay: 3000,
                            disableOnInteraction: false,
                        },
                        speed: 700,
                        breakpoints: {
                            0: { slidesPerView: 2 },
                            575: { slidesPerView: 3 },
                            992: { slidesPerView: 5 },
                        },
                    });
                } catch (e) {
                    // swipers not ready yet
                    return false;
                }
                return true;
            }
            return false;
        }

        if (!initSwipers()) {
            const timer = setInterval(() => {
                if (initSwipers()) clearInterval(timer);
            }, 200);
            setTimeout(() => clearInterval(timer), 10000);
            return () => clearInterval(timer);
        }
    }, []);

    const services = [
        {
            title: 'Board Games',
            text: 'Engage in exciting board games that blend fun with strategy.',
            href: '/activities',
            icon: 'fa-solid fa-chess-board',
        },
        {
            title: 'Farm Kitchen',
            text: 'Experience the taste of Uganda with our farm-to-table kitchen.',
            href: '/activities',
            icon: 'fa-solid fa-utensils',
        },
        {
            title: 'Team Building',
            text: 'Strengthen your herd with our farm-tastic team-building activities.',
            href: '/activities',
            icon: 'fa-solid fa-users',
        },
        {
            title: 'Farm Lounge',
            text: 'Unwind in our serene Farm Lounge after a day of activities.',
            href: '/lounge',
            icon: 'fa-solid fa-couch',
        },
    ];

    const galleryImages = [
        '/img/gallery/funfarm_n1.png',
        '/img/gallery/funfarm_n2.png',
        '/img/gallery/funfarm_n3.png',
        '/img/gallery/funfarm_n4.png',
        '/img/gallery/funfarm_n5.png',
        '/img/gallery/funfarm_n6.png',
    ];

    const partners = [
        '/img/partners/fao-logo.svg',
        '/img/partners/unfe.png',
        '/img/partners/unyfa.png',
        '/img/partners/fao-logo.svg',
        '/img/partners/unfe.png',
    ];

    const faqs = [
        {
            question: 'What should I wear to the farm?',
            answer: 'Comfortable sporty clothes and closed shoes are ideal. You might get a little dirty from grass or straw, so regular jeans work fine. Sturdy walking shoes are sufficient — no need for boots.',
        },
        {
            question: 'What games can I expect?',
            answer: 'We offer board games, team-building activities, and fun farm games. Our Farm Games include accessible thinking and doing assignments perfect for a fun day out.',
        },
        {
            question: 'Can I participate in farm activities?',
            answer: 'Absolutely! Everyone is welcome to join in. The majority of our activities are suitable for all fitness levels. Less sporty or less mobile guests and pregnant women can also enjoy the experience.',
        },
        {
            question: 'Are children allowed?',
            answer: "Yes! We offer children's parties and activities at certain locations. By children we mean under 14 years. We do not organise mixed groups of adults and children — dedicated sessions are available for younger visitors.",
        },
    ];

    return (
        <>
            {/* Hero */}
            <div className="vl-hero1-area">
                <div className="swiper myhm1-hero">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div
                                className="hero1-bg-slide"
                                style={{
                                    backgroundImage: 'url(/webimgs/fun-farm-image.jpg)',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                }}
                            >
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-8 mx-auto">
                                            <div className="vl-hero-info">
                                                <div className="hero-header-area">
                                                    <h3 data-aos="fade-right" data-aos-duration="800">
                                                        Agro Tourism & Team Building
                                                    </h3>
                                                    <div className="space24"></div>
                                                    <h2 className="text-anime-style-3" data-aos="fade-left" data-aos-duration="900">
                                                        Welcome to Fun Farming Uganda
                                                        <br />
                                                        Where Agriculture Meets Adventure!
                                                    </h2>
                                                </div>
                                                <div className="hero1-arrow">
                                                    <div className="next-arrow">
                                                        <button>
                                                            <i className="fa-solid fa-arrow-right-long"></i>
                                                        </button>
                                                    </div>
                                                    <div className="prev-arrow">
                                                        <button>
                                                            <i className="fa-solid fa-arrow-left-long"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero1-bottom-wrap">
                    <div className="hero1-bottom-circle">
                        <a href="/#">
                            <img className="keyframe5" src="/assets/img/elements/elements1.png" alt="" />
                            <img src="/assets/img/icon/arrow.svg" alt="" className="arrow" />
                        </a>
                    </div>
                </div>
            </div>

            {/* About */}
            <div className="vl-about1-area sp1">
                <div className="space96"></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="about1-thumb1 vl-clip-anim image-anime" data-aos="fade-right" data-aos-duration="800">
                                <img className="vl-anim-img w-100" data-animate="true" src="/webimgs/fun-farm-image.jpg" alt="Fun Farming Uganda" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="about-area-info">
                                <div className="about1-heading-area">
                                    <h3 className="about-subtitle" data-aos="fade-left" data-aos-duration="800">
                                        Welcome to the Farm
                                    </h3>
                                    <div className="space24"></div>
                                    <h2 className="about-title text-anime-style-3" data-aos="fade-left" data-aos-duration="800">
                                        Discover the joy of team events at our farm oasis!
                                    </h2>
                                    <div className="space16"></div>
                                    <p className="text-effect" data-aos="fade-left" data-aos-duration="900">
                                        At Fun Farming Uganda, we bring people together through unforgettable farm experiences.
                                        From team building to farm tours, every visit is crafted to inspire connection and joy.
                                    </p>
                                    <div className="space38"></div>
                                    <div className="btn_area3" data-aos="fade-left" data-aos-duration="900">
                                        <Link href="/about" className="vl-btn3">
                                            Learn More
                                            <span className="arrow_btn3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                    <path d="M27.002 16.002H5.00195" stroke="#132C12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M21.0021 22.002C21.0021 22.002 27.002 17.5831 27.002 16.002C27.002 14.4208 21.002 10.002 21.002 10.002" stroke="#132C12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services */}
            <div className="vl-service7">
                <div className="vl-service7-area sp1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 mx-auto text-center">
                                <div className="service7-header">
                                    <h3 data-aos="fade-right" data-aos-duration="900">
                                        <img src="/assets/img/icon/hm7-sub-title2-dot.png" alt="" />
                                        Our Services
                                    </h3>
                                    <div className="space24"></div>
                                    <h2 className="text-effect" data-aos="fade-left" data-aos-duration="1000">
                                        Thrilling Activities Await!
                                    </h2>
                                </div>
                            </div>
                            <div className="space44"></div>
                            <div className="swiper myservice7" data-aos="zoom-out" data-aos-duration="1000">
                                <div className="swiper-wrapper">
                                    {services.map((service, index) => (
                                        <div className="swiper-slide" key={index}>
                                            <div className="service7-box">
                                                <div className="service7-thumbs">
                                                    <h3>0{index + 1}</h3>
                                                    <div className="service7-thumbs-img">
                                                        <img src="/assets/img/service/service7-thumb2.png" alt={service.title} />
                                                    </div>
                                                </div>
                                                <div className="service7-box-content">
                                                    <div className="service7-logos">
                                                        <i className={service.icon}></i>
                                                    </div>
                                                    <div className="space24"></div>
                                                    <div className="service7-content-text">
                                                        <h3>
                                                            <Link href={service.href}>{service.title}</Link>
                                                        </h3>
                                                        <div className="space16"></div>
                                                        <p>{service.text}</p>
                                                    </div>
                                                    <div className="service7-learn-btn">
                                                        <Link href={service.href} className="btn4-home7">
                                                            Learn More
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="service7-box-bg">
                                                    <img src="/assets/img/service/service7-thumb2-bg.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Expert / Why Choose */}
            <div className="vl-about9-area sp1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="about-area-info">
                                <div className="about1-heading-area">
                                    <h3 className="about-subtitle" data-aos="fade-right" data-aos-duration="800">
                                        Meet Our Expert
                                    </h3>
                                    <div className="space24"></div>
                                    <h2 className="about-title text-anime-style-3" data-aos="fade-left" data-aos-duration="800">
                                        Moo towards us for customized advice
                                    </h2>
                                    <div className="space16"></div>
                                    <p className="text-effect" data-aos="fade-left" data-aos-duration="900">
                                        Gathering the horns? Our cow-league David is ready to advise you so that you&apos;ll reap
                                        applause for this team-building. With years of farm experience, David helps groups find
                                        the perfect activity mix.
                                    </p>
                                </div>
                                <div className="space38"></div>
                                <div className="btn_area3" data-aos="fade-left" data-aos-duration="900">
                                    <a
                                        href="https://www.calendly.com/farmfun/kennismakingsgesprek-teambuilding-farmfun"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="vl-btn3"
                                    >
                                        Schedule Conversation
                                        <span className="arrow_btn3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <path d="M27.002 16.002H5.00195" stroke="#132C12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M21.0021 22.002C21.0021 22.002 27.002 17.5831 27.002 16.002C27.002 14.4208 21.002 10.002 21.002 10.002" stroke="#132C12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="about1-thumb1 vl-clip-anim image-anime" data-aos="fade-left" data-aos-duration="800">
                                <img className="vl-anim-img w-100" data-animate="true" src="/webimgs/david-holding-goat.jpg" alt="Farmer David" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <div className="vl-gallery-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="service-header">
                            <div className="service-topleft">
                                <h3 data-aos="fade-right" data-aos-duration="800">
                                    <img src="/assets/img/icon/subtitle-icon2.png" alt="" />
                                    Farm Gallery
                                </h3>
                                <div className="space18"></div>
                                <h2 className="text-anime-style-3" data-aos="fade-right" data-aos-duration="900">
                                    A Look Into Our Land And Livestock
                                </h2>
                            </div>
                            <div className="service-topright">
                                <p className="text-effect">
                                    Nestled in open green pastures, Fun Farming Uganda is more than just a farm — it&apos;s
                                    a living example of ethical, sustainable agriculture.
                                </p>
                            </div>
                        </div>
                        <div className="space44"></div>
                        <div className="swiper mygallery1" data-aos="zoom-in" data-aos-duration="900">
                            <div className="swiper-wrapper">
                                {galleryImages.map((src, index) => (
                                    <div className="swiper-slide" key={index}>
                                        <div className="vl-gallery-thumb">
                                            <img src={src} alt={`Gallery ${index + 1}`} />
                                            <span className="inner-border"></span>
                                            <div className="view-wrap">
                                                <a href="/gallery">View</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Partners */}
            <div className="vl-hero9-btm-area">
                <div className="container">
                    <div className="row">
                        <div className="vl-hero9-btm_text" data-aos="zoom-out" data-aos-duration="900">
                            <h2>Trusted By <span className="counter">3</span>+ Partners Worldwide</h2>
                        </div>
                        <div className="tp-text-slider">
                            <div className="container">
                                <div className="row">
                                    <div className="tp-text-slider-rotate">
                                        <div className="swiper tpcauses-text-slider-active-2">
                                            <div className="swiper-wrapper tp-slide-transtion">
                                                {partners.map((src, index) => (
                                                    <div className="swiper-slide" key={index}>
                                                        <div className="hm4-brand-2">
                                                            <span className="title">
                                                                <img src={src} alt={`Partner ${index + 1}`} />
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="vl-faq9-area sp1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="vl-faq-info">
                                <div className="row">
                                    <div className="counter_boxes_area">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6" data-aos="zoom-out" data-aos-duration="900">
                                                <div className="vl-faq-info-content box1">
                                                    <div className="vl-faq-icon">
                                                        <img src="/assets/img/icon/faq1-img1.png" alt="" />
                                                    </div>
                                                    <div className="space24"></div>
                                                    <h2><span className="counter">1200</span>+</h2>
                                                    <div className="space16"></div>
                                                    <p>Products</p>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6" data-aos="zoom-out" data-aos-duration="1100">
                                                <div className="vl-faq-info-content box1">
                                                    <div className="vl-faq-icon">
                                                        <img src="/assets/img/icon/faq1-img2.png" alt="" />
                                                    </div>
                                                    <div className="space24"></div>
                                                    <h2><span className="counter">20</span>+</h2>
                                                    <div className="space16"></div>
                                                    <p>Years Of Experience</p>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6" data-aos="zoom-out" data-aos-duration="900">
                                                <div className="vl-faq-info-content">
                                                    <div className="vl-faq-icon">
                                                        <img src="/assets/img/icon/faq1-img3.png" alt="" />
                                                    </div>
                                                    <div className="space24"></div>
                                                    <h2><span className="counter">2.850</span>+</h2>
                                                    <div className="space16"></div>
                                                    <p>Satisfied Clients</p>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6" data-aos="zoom-out" data-aos-duration="1100">
                                                <div className="vl-faq-info-content">
                                                    <div className="vl-faq-icon">
                                                        <img src="/assets/img/icon/faq1-img4.png" alt="" />
                                                    </div>
                                                    <div className="space24"></div>
                                                    <h2><span className="counter">30</span>+</h2>
                                                    <div className="space16"></div>
                                                    <p>Local Team Members</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="faq-header z-index99">
                                <h3 className="subtitle" data-aos="fade-left" data-aos-duration="800">
                                    <img src="/assets/img/icon/subtitle-icon2.png" alt="" />
                                    Why Farm
                                </h3>
                                <div className="space24"></div>
                                <h2 className="title text-anime-style-3" data-aos="fade-left" data-aos-duration="900">
                                    Where Every Animal Is Raised with Love,
                                </h2>
                                <div className="space16"></div>
                                <p className="pera-text text-effect" data-aos="fade-left" data-aos-duration="1000">
                                    At Fun Farming Uganda, we believe that great food begins with honest farming.
                                    Nestled in open pastures and guided by nature, our farm is built on values of
                                    sustainability, compassion, and transparency.
                                </p>
                                <div className="space38"></div>
                                <div className="btn_area3" data-aos="fade-left" data-aos-duration="900">
                                    <Link href="/contact" className="vl-btn3">
                                        Learn More
                                        <span className="arrow_btn3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <path d="M27.002 16.002H5.00195" stroke="#132C12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M21.0021 22.002C21.0021 22.002 27.002 17.5831 27.002 16.002C27.002 14.4208 21.002 10.002 21.002 10.002" stroke="#132C12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="vl-cta4-area" data-aos="zoom-out" data-aos-duration="1000">
                <div className="container">
                    <div className="row cta4-area-info sp1">
                        <div className="col-xl-6 mx-auto text-center">
                            <div className="cta4-area-content">
                                <div className="product4-heading">
                                    <h3 className="product4-subtitle" data-aos="fade-right" data-aos-duration="900">
                                        Ready for Adventure
                                    </h3>
                                    <div className="space24"></div>
                                    <h2 className="product4-title text-anime-style-3" data-aos="fade-left" data-aos-duration="1000">
                                        Your Unforgettable Farm Experience Awaits
                                    </h2>
                                </div>
                                <div className="space38"></div>
                                <div className="btn_area10 z-index99" data-aos="zoom-out" data-aos-duration="1100">
                                    <Link href="/contact" className="vl-btn10">
                                        Book Now
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                                <path d="M22.8079 11.1373L11.1406 22.8046" stroke="#25452C" strokeWidth="1.55556" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M22.8054 17.5005C22.8054 17.5005 23.6439 11.9751 22.8054 11.1366C21.9669 10.2981 16.4414 11.1366 16.4414 11.1366" stroke="#25452C" strokeWidth="1.55556" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="cta4-area-shape1 aniamtion-key-2">
                            <img src="/assets/img/shape/cta-hm4(1).png" alt="" />
                        </div>
                        <div className="cta4-area-shape2 aniamtion-key-2">
                            <img src="/assets/img/shape/cta-hm4(2).png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
