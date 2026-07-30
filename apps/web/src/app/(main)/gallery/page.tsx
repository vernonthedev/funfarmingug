'use client';

import Link from 'next/link';
import PageHeader from '@/components/sections/PageHeader';

const galleryItems = [
    { src: '/img/gallery/funfarm_n1.png', alt: 'Goat at Fun Farming Uganda', title: 'Our Beloved Goats' },
    { src: '/img/gallery/funfarm_n2.png', alt: 'Goat on the farm', title: 'Morning Grazing' },
    { src: '/img/gallery/funfarm_n3.png', alt: 'Goat at Fun Farming Uganda', title: 'Playful Kids' },
    { src: '/img/gallery/funfarm_n4.png', alt: 'Birds at Fun Farming Uganda', title: 'Poultry Paradise' },
    { src: '/img/gallery/funfarm_n5.png', alt: 'Goat at Fun Farming Uganda', title: 'Happy Herd' },
    { src: '/img/gallery/funfarm_n6.png', alt: 'Goats at Fun Farming Uganda', title: 'Goat Family' },
];

export default function GalleryPage() {
    return (
        <>
            <PageHeader
                title="Gallery"
                bgImage="/assets/img/hero/about-us-inr-herothumb.png"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Gallery' },
                ]}
            />

            <div className="vl-projects2-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 mx-auto text-center">
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
                            </div>
                        </div>
                        <div className="space44"></div>
                        <div className="row">
                            {galleryItems.map((item, index) => (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
                                    <div className="vl-gallery-thumb" data-aos="zoom-in" data-aos-duration="900">
                                        <img src={item.src} alt={item.alt} />
                                        <span className="inner-border"></span>
                                        <div className="view-wrap">
                                            <Link href={`/gallery`}>{item.title}</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
