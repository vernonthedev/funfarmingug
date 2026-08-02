const ITEMS = [
    {
        image: '/images/widget/gallery-item-1.jpg',
        title: 'Organic Farm',
    },
    {
        image: '/images/widget/gallery-item-2.jpg',
        title: 'Goat Breeding',
    },
    {
        image: '/images/widget/gallery-item-3.jpg',
        title: 'Poultry Farming',
    },
    {
        image: '/images/widget/gallery-item-4.jpg',
        title: 'Banana Plantation',
    },
    {
        image: '/images/widget/gallery-item-5.jpg',
        title: 'Farm Activities',
    },
    {
        image: '/images/widget/gallery-item-6.jpg',
        title: 'Team Events',
    },
    {
        image: '/images/widget/gallery-item-7.jpg',
        title: 'Farm Tours',
    },
    {
        image: '/images/widget/gallery-item-8.jpg',
        title: 'Youth Project',
    },
];

const FILTERS = [
    'All Projects',
    'Organic',
    'Farms',
    'Harvest',
    'Vegetable',
    'Fruit',
    'Cattle',
];

export function GalleryPage() {
    return (
        <div className="main-content page-gallery">
            <div className="tf-container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="wg-tabs">
                            <ul className="overflow-x-auto menu-tab mb-61">
                                {FILTERS.map((f, i) => (
                                    <li
                                        className={`item ${i === 0 ? 'active' : ''}`}
                                        key={i}
                                    >
                                        <a
                                            href="javascript:void(0)"
                                            className="btn-tab"
                                        >
                                            {f}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="widget-content-tab">
                                <div className="widget-content-inner active">
                                    <div className="wg-gallery">
                                        {ITEMS.map((item, i) => (
                                            <div
                                                className={`gallery-item item-${i + 1} wow fadeInUp`}
                                                data-wow-delay={`${(i % 4) * 0.1}s`}
                                                key={i}
                                            >
                                                <div className="image">
                                                    <img
                                                        className="lazyload"
                                                        src={item.image}
                                                        alt={item.title}
                                                    />
                                                </div>
                                                <a
                                                    href={`/images/widget/${item.image.split('/').pop()}`}
                                                    className="add-gallery"
                                                >
                                                    +
                                                </a>
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
    );
}
