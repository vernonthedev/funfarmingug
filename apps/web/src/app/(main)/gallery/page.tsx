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

            <div className="project_inner_section_area sp1">
                <div className="container">
                    <div className="row">
                        {galleryItems.map((item, index) => (
                            <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
                                <div className="project6-box margin-b30">
                                    <div className="project6-thumb image-anime">
                                        <img className="imgs" src={item.src} alt={item.alt} />
                                        <div className="project6-thumb-content">
                                            <div className="arrow_wrap">
                                                <div className="content_arrow">
                                                    <img src="/assets/img/icon/arrow-right-inner.svg" alt="" />
                                                </div>
                                            </div>
                                            <h3 className="title">
                                                <Link href="/gallery">{item.title}</Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
