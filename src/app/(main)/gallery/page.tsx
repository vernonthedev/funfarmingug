'use client';

import Link from 'next/link';
import PageHeader from '@/components/sections/PageHeader';

const galleryItems = [
    {
        src: '/img/gallery/funfarm_n1.png',
        alt: 'Goat at Fun Farming Uganda',
        title: 'Our Beloved Goats',
        category: 'Animals',
        filter: 'healthy',
    },
    {
        src: '/img/gallery/funfarm_n2.png',
        alt: 'Goat on the farm',
        title: 'Morning Grazing',
        category: 'Animals',
        filter: 'healthy',
    },
    {
        src: '/img/gallery/funfarm_n3.png',
        alt: 'Goat at Fun Farming Uganda',
        title: 'Playful Kids',
        category: 'Animals',
        filter: 'healthy',
    },
    {
        src: '/img/gallery/funfarm_n4.png',
        alt: 'Birds at Fun Farming Uganda',
        title: 'Poultry Paradise',
        category: 'Animals',
        filter: 'healthy',
    },
    {
        src: '/img/gallery/funfarm_n5.png',
        alt: 'Goat at Fun Farming Uganda',
        title: 'Happy Herd',
        category: 'Animals',
        filter: 'healthy',
    },
    {
        src: '/img/gallery/funfarm_n6.png',
        alt: 'Goats at Fun Farming Uganda',
        title: 'Goat Family',
        category: 'Animals',
        filter: 'healthy',
    },
    {
        src: '/img/gallery/funfarm_n7.png',
        alt: 'Goats at Fun Farming Uganda',
        title: 'Pasture Life',
        category: 'Farm Life',
        filter: 'wellness',
    },
    {
        src: '/img/gallery/funfarm_n8.png',
        alt: 'Ducks in Water at Fun Farming Uganda',
        title: 'Duck Pond',
        category: 'Animals',
        filter: 'healthy',
    },
    {
        src: '/img/gallery/funfarm_n9.png',
        alt: 'Goat inside the paddock system',
        title: 'Paddock System',
        category: 'Sustainability',
        filter: 'nursing',
    },
    {
        src: '/img/gallery/funfarm_n10.png',
        alt: 'Goat at Fun Farming Uganda',
        title: 'Portrait of a Goat',
        category: 'Animals',
        filter: 'healthy',
    },
    {
        src: '/img/gallery/funfarm_n11.png',
        alt: 'Birds at Fun Farming Uganda',
        title: 'Free-Range Poultry',
        category: 'Animals',
        filter: 'healthy',
    },
    {
        src: '/img/gallery/funfarm_n12.png',
        alt: 'Duck facing behind at Fun Farming Uganda',
        title: 'Ducks in the Farm',
        category: 'Animals',
        filter: 'healthy',
    },
    {
        src: '/img/gallery/funfarm_n13.png',
        alt: 'Scenic view at Fun Farming Uganda',
        title: 'Farm Scenery',
        category: 'Farm Life',
        filter: 'wellness',
    },
    {
        src: '/img/gallery/funfarm_n18.png',
        alt: 'Fun Farming Uganda landscape',
        title: 'Farm Landscape',
        category: 'Farm Life',
        filter: 'wellness',
    },
    {
        src: '/img/gallery/funfarm_n20.png',
        alt: 'Farm activities at Fun Farming Uganda',
        title: 'Farm Activities',
        category: 'Activities',
        filter: 'medical',
    },
    {
        src: '/img/gallery/funfarm_n26.png',
        alt: 'Banana plantation at Fun Farming Uganda',
        title: 'Banana Plantation',
        category: 'Farm Life',
        filter: 'wellness',
    },
    {
        src: '/img/gallery/bbq.jpg',
        alt: 'BBQ at Fun Farming Uganda',
        title: 'Farm BBQ Feast',
        category: 'FarmFood',
        filter: 'medical',
    },
];

const filters = [
    { label: 'ALL', filter: 'filter-item', active: true },
    { label: 'Animals', filter: 'healthy', active: false },
    { label: 'Farm Life', filter: 'wellness', active: false },
    { label: 'Sustainability', filter: 'nursing', active: false },
    { label: 'FarmFood', filter: 'medical', active: false },
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

            <section className="project-one section-space">
                <div className="container">
                    <div className="project-one__top">
                        <div className="project-one__top__left">
                            <div className="sec-title text-start">
                                <div className="sec-title__tagline">
                                    <img
                                        src="/assets/images/shapes/sec-title-s-1-1.png"
                                        alt="shape"
                                    />
                                    OUR GALLERY
                                </div>
                                <h3 className="sec-title__title">
                                    Capture Moments at Fun Farming Uganda
                                </h3>
                            </div>
                        </div>
                        <div className="project-one__top__right">
                            <ul className="list-unstyled post-filter project-one__top__list">
                                {filters.map((f, i) => (
                                    <li
                                        key={i}
                                        className={f.active ? 'active' : ''}
                                        data-filter={
                                            f.filter === 'filter-item'
                                                ? '.filter-item'
                                                : `.${f.filter}`
                                        }
                                    >
                                        <span>{f.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="row filter-layout fitRow-layout">
                        {galleryItems.map((item, index) => (
                            <div
                                key={index}
                                className={`col-lg-4 col-md-12 filter-item ${item.filter}`}
                            >
                                <div className="project-one__card">
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        loading="lazy"
                                    />
                                    <div className="project-one__card__hover">
                                        <div className="project-one__card__hover__popup">
                                            <a
                                                href={item.src}
                                                className="img-popup"
                                            >
                                                <i className="icon-zoom-in"></i>
                                            </a>
                                        </div>
                                        <div className="project-one__card__hover__content">
                                            <p className="project-one__card__hover__text">
                                                {item.category}
                                            </p>
                                            <h3 className="project-one__card__hover__title">
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
        </>
    );
}
