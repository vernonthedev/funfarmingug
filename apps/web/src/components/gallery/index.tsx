interface GalleryItem {
    image: string;
    title: string;
}

const ALL: GalleryItem[] = [
    { image: 'funfarm_n1.png', title: 'Organic Farm' },
    { image: 'funfarm_n2.png', title: 'Goat Breeding' },
    { image: 'funfarm_n3.png', title: 'Poultry Farming' },
    { image: 'funfarm_n4.png', title: 'Banana Plantation' },
    { image: 'funfarm_n5.png', title: 'Farm Activities' },
    { image: 'funfarm_n6.png', title: 'Team Events' },
    { image: 'funfarm_n7.png', title: 'Farm Tours' },
    { image: 'funfarm_n8.png', title: 'Youth Project' },
];

const ORGANIC: GalleryItem[] = [
    { image: 'plants-home.jpg', title: 'Organic Farm' },
    { image: 'leaves-potatoes.jpg', title: 'Fresh Vegetables' },
    { image: 'tray-potatoes.jpg', title: 'Organic Produce' },
    { image: 'potatoes-alot.jpg', title: 'Harvest' },
    { image: 'matooke.webp', title: 'Plantations' },
    { image: 'funfarm_n3.png', title: 'Organic Farm' },
    { image: 'funfarm_n4.png', title: 'Banana Plantation' },
    { image: 'funfarm_n6.png', title: 'Organic Farm' },
];

const FARMS: GalleryItem[] = [
    { image: 'img1.jpg', title: 'Farm Fields' },
    { image: 'img2.jpg', title: 'The Farm' },
    { image: 'img3.jpg', title: 'Countryside' },
    { image: 'img4.jpg', title: 'Farm Views' },
    { image: 'funfarm_n9.png', title: 'Farm' },
    { image: 'funfarm_n10.png', title: 'Farm' },
    { image: 'funfarm_n11.png', title: 'Farm' },
    { image: 'funfarm_n12.png', title: 'Farm' },
];

const HARVEST: GalleryItem[] = [
    { image: 'potatoes-people.jpg', title: 'Harvesting' },
    { image: 'potatoes-alot.jpg', title: 'Harvest' },
    { image: 'tray-potatoes.jpg', title: 'Harvest' },
    { image: 'leaves-potatoes.jpg', title: 'Potatoes' },
    { image: 'funfarm_n13.png', title: 'Harvest' },
    { image: 'funfarm_n14.png', title: 'Harvest' },
    { image: 'funfarm_n15.png', title: 'Harvest' },
    { image: 'funfarm_n16.png', title: 'Harvest' },
];

const VEGETABLE: GalleryItem[] = [
    { image: 'plants-home.jpg', title: 'Vegetables' },
    { image: 'funfarm_n17.png', title: 'Vegetables' },
    { image: 'funfarm_n18.png', title: 'Vegetables' },
    { image: 'funfarm_n19.png', title: 'Vegetables' },
    { image: 'funfarm_n20.png', title: 'Vegetables' },
    { image: 'funfarm_n21.png', title: 'Vegetables' },
    { image: 'funfarm_n22.png', title: 'Vegetables' },
    { image: 'funfarm_n23.png', title: 'Vegetables' },
];

const FRUIT: GalleryItem[] = [
    { image: 'matooke.webp', title: 'Bananas' },
    { image: 'funfarm_n24.png', title: 'Fruit' },
    { image: 'funfarm_n25.png', title: 'Fruit' },
    { image: 'funfarm_n26.png', title: 'Fruit' },
    { image: 'funfarm_n27.png', title: 'Fruit' },
    { image: 'funfarm_n28.png', title: 'Fruit' },
    { image: 'img1.jpg', title: 'Fruit' },
    { image: 'img2.jpg', title: 'Fruit' },
];

const CATTLE: GalleryItem[] = [
    { image: 'Male-goat.jpeg', title: 'Goats' },
    { image: 'Goat-kids.jpeg', title: 'Kids' },
    { image: 'Farm-staff.jpeg', title: 'Farm Staff' },
    { image: 'Tractors-ploughing.jpeg', title: 'Tractors' },
    { image: 'funfarm_n2.png', title: 'Cattle' },
    { image: 'funfarm_n5.png', title: 'Cattle' },
    { image: 'funfarm_n6.png', title: 'Cattle' },
    { image: 'funfarm_n7.png', title: 'Cattle' },
];

const CATEGORIES: { label: string; items: GalleryItem[] }[] = [
    { label: 'All Projects', items: ALL },
    { label: 'Organic', items: ORGANIC },
    { label: 'Farms', items: FARMS },
    { label: 'Harvest', items: HARVEST },
    { label: 'Vegetable', items: VEGETABLE },
    { label: 'Fruit', items: FRUIT },
    { label: 'Cattle', items: CATTLE },
];

export function GalleryPage() {
    return (
        <div className="main-content page-gallery">
            <div className="tf-container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="wg-tabs">
                            <ul className="overflow-x-auto menu-tab mb-61">
                                {CATEGORIES.map((c, i) => (
                                    <li
                                        className={`item ${i === 0 ? 'active' : ''}`}
                                        key={c.label}
                                    >
                                        <a
                                            href="javascript:void(0)"
                                            className="btn-tab"
                                        >
                                            {c.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="widget-content-tab">
                                {CATEGORIES.map((cat, ci) => (
                                    <div
                                        className={`widget-content-inner ${ci === 0 ? 'active' : ''}`}
                                        key={cat.label}
                                    >
                                        <div className="wg-gallery">
                                            {cat.items.map((item, i) => (
                                                <div
                                                    className={`gallery-item item-${i + 1} ${ci === 0 ? 'wow fadeInUp' : ''}`}
                                                    data-wow-delay={
                                                        ci === 0
                                                            ? `${(i % 4) * 0.1}s`
                                                            : undefined
                                                    }
                                                    key={item.image}
                                                >
                                                    <div className="image">
                                                        <img
                                                            className="lazyload"
                                                            src={`/images/funfarm/${item.image}`}
                                                            alt={item.title}
                                                        />
                                                    </div>
                                                    <a
                                                        href="/gallery"
                                                        className="add-gallery"
                                                    >
                                                        +
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}