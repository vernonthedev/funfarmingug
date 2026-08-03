const ITEMS = [
    {
        image: '/images/funfarm/funfarm_n1.png',
        title: 'Organic Farm',
    },
    {
        image: '/images/funfarm/funfarm_n2.png',
        title: 'Goat Breeding',
    },
    {
        image: '/images/funfarm/funfarm_n3.png',
        title: 'Poultry Farming',
    },
    {
        image: '/images/funfarm/funfarm_n4.png',
        title: 'Banana Plantation',
    },
    {
        image: '/images/funfarm/funfarm_n5.png',
        title: 'Farm Activities',
    },
    {
        image: '/images/funfarm/funfarm_n6.png',
        title: 'Team Events',
    },
    {
        image: '/images/funfarm/funfarm_n7.png',
        title: 'Farm Tours',
    },
    {
        image: '/images/funfarm/funfarm_n8.png',
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
                                                    href={`/images/funfarm/${item.image.split('/').pop()}`}
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
