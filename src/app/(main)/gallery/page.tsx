'use client';

import Link from 'next/link';
import PageHeader from '@/components/sections/PageHeader';
import SectionTitle from '@/components/sections/SectionTitle';
import CtaSection from '@/components/sections/CtaSection';

const galleryItems = [
    {
        src: '/img/gallery/funfarm_n1.png',
        alt: 'Goat at Fun Farming Uganda',
        title: 'Our Beloved Goats',
        category: 'Animals',
    },
    {
        src: '/img/gallery/funfarm_n2.png',
        alt: 'Goat on the farm',
        title: 'Morning Grazing',
        category: 'Animals',
    },
    {
        src: '/img/gallery/funfarm_n3.png',
        alt: 'Goat at Fun Farming Uganda',
        title: 'Playful Kids',
        category: 'Animals',
    },
    {
        src: '/img/gallery/funfarm_n4.png',
        alt: 'Birds at Fun Farming Uganda',
        title: 'Poultry Paradise',
        category: 'Animals',
    },
    {
        src: '/img/gallery/funfarm_n5.png',
        alt: 'Goat at Fun Farming Uganda',
        title: 'Happy Herd',
        category: 'Animals',
    },
    {
        src: '/img/gallery/funfarm_n6.png',
        alt: 'Goats at Fun Farming Uganda',
        title: 'Goat Family',
        category: 'Animals',
    },
    {
        src: '/img/gallery/funfarm_n7.png',
        alt: 'Goats at Fun Farming Uganda',
        title: 'Pasture Life',
        category: 'Farm Life',
    },
    {
        src: '/img/gallery/funfarm_n8.png',
        alt: 'Ducks in Water at Fun Farming Uganda',
        title: 'Duck Pond',
        category: 'Animals',
    },
    {
        src: '/img/gallery/funfarm_n9.png',
        alt: 'Goat inside the paddock system',
        title: 'Paddock System',
        category: 'Sustainability',
    },
    {
        src: '/img/gallery/funfarm_n10.png',
        alt: 'Goat at Fun Farming Uganda',
        title: 'Portrait of a Goat',
        category: 'Animals',
    },
    {
        src: '/img/gallery/funfarm_n11.png',
        alt: 'Birds at Fun Farming Uganda',
        title: 'Free-Range Poultry',
        category: 'Animals',
    },
    {
        src: '/img/gallery/funfarm_n12.png',
        alt: 'Duck facing behind at Fun Farming Uganda',
        title: 'Ducks in the Farm',
        category: 'Animals',
    },
    {
        src: '/img/gallery/funfarm_n13.png',
        alt: 'Scenic view at Fun Farming Uganda',
        title: 'Farm Scenery',
        category: 'Farm Life',
    },
    {
        src: '/img/gallery/funfarm_n18.png',
        alt: 'Fun Farming Uganda landscape',
        title: 'Farm Landscape',
        category: 'Farm Life',
    },
    {
        src: '/img/gallery/funfarm_n20.png',
        alt: 'Farm activities at Fun Farming Uganda',
        title: 'Farm Activities',
        category: 'Activities',
    },
    {
        src: '/img/gallery/funfarm_n26.png',
        alt: 'Banana plantation at Fun Farming Uganda',
        title: 'Banana Plantation',
        category: 'Farm Life',
    },
    {
        src: '/img/gallery/bbq.jpg',
        alt: 'BBQ at Fun Farming Uganda',
        title: 'Farm BBQ Feast',
        category: 'FarmFood',
    },
];

export default function GalleryPage() {
    return (
        <>
            <PageHeader
                title="Gallery"
                bgImage="/assets/images/backgrounds/page-header.jpg"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Gallery' },
                ]}
            />

            <section className="gallery-one section-space">
                <div className="container">
                    <div className="row gutter-y-30">
                        {galleryItems.map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="gallery-one__card">
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        loading="lazy"
                                    />
                                    <div className="gallery-one__card__hover">
                                        <a
                                            href={item.src}
                                            className="img-popup"
                                        >
                                            <i className="icon-zoom-in1"></i>
                                        </a>
                                        <div className="gallery-one__card__hover__content">
                                            <p className="gallery-one__card__hover__text">
                                                {item.category}
                                            </p>
                                            <h3 className="gallery-one__card__hover__title">
                                                <a href={item.src}>
                                                    {item.title}
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CtaSection
                icon="icon-leaf"
                title="Want to See More?"
                text="Visit our farm and capture your own moments! Book a farm tour today."
                buttonLabel="Book a Visit"
                buttonHref="/contact"
            />
        </>
    );
}
