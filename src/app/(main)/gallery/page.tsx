'use client';

import Link from 'next/link';

const galleryItems = [
    {
        src: '/webimgs/fun-farm-image.jpg',
        alt: 'Fun Farming Uganda scenic farm view',
        title: 'Farm Panorama',
        category: 'Farm Life',
    },
    {
        src: '/img/home/team-building2.jpg',
        alt: 'Team building activities at Fun Farming Uganda',
        title: 'Team Building Games',
        category: 'Activities',
    },
    {
        src: '/img/webimgs/david-holding-goat.jpg',
        alt: 'Farmer David holding a goat at Fun Farming Uganda',
        title: 'Farmer David & Friends',
        category: 'Farm Life',
    },
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
            <div className="page-header">
                <div
                    className="page-header__bg"
                    style={{
                        backgroundImage:
                            'url(/assets/images/backgrounds/page-header.jpg)',
                    }}
                ></div>
                <div className="container">
                    <h2 className="page-header__title">Gallery</h2>
                    <ul className="garlon-breadcrumb list-unstyled">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <span>Gallery</span>
                        </li>
                    </ul>
                </div>
                <div className="page-header__shape-one">
                    <img
                        src="/assets/images/shapes/page-header-1-1.png"
                        alt="shape"
                    />
                </div>
                <div className="page-header__shape-two">
                    <img
                        src="/assets/images/shapes/page-header-1-2.png"
                        alt="shape"
                    />
                </div>
            </div>

            <section className="project-one section-space">
                <div className="container">
                    <div className="project-one__top">
                        <div className="sec-title">
                            <span className="sec-title__tagline">
                                Our Gallery
                            </span>
                            <h2 className="sec-title__heading">
                                Moments at Fun Farming Uganda
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        {galleryItems.map((item, index) => (
                            <div
                                className="col-lg-4 col-md-6"
                                key={index}
                            >
                                <div className="project-one__card">
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        loading="lazy"
                                    />
                                    <div className="project-one__card__hover">
                                        <a
                                            href={item.src}
                                            className="img-popup"
                                        >
                                            <i className="fa fa-plus"></i>
                                        </a>
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
