'use client';

import Link from 'next/link';

interface ProductItem {
    image: string;
    title: string;
    price: string;
    originalPrice?: string;
    rating?: number;
    linkHref?: string;
}

interface ProductsSectionProps {
    title?: string;
    subtitle?: string;
    description?: string;
    products?: ProductItem[];
    buttonText?: string;
    buttonHref?: string;
}

const defaultProducts: ProductItem[] = [
    {
        image: '/assets/img/products/product6-imgs(1).png',
        title: 'Garden Harvest Basket',
        price: '$ 40.00 USD',
        originalPrice: '$ 60.00 USD',
        rating: 5,
        linkHref: '/contact',
    },
    {
        image: '/assets/img/products/product6-imgs(2).png',
        title: 'Organic Veggie Medley',
        price: '$ 46.00 USD',
        originalPrice: '$ 62.00 USD',
        rating: 5,
        linkHref: '/contact',
    },
    {
        image: '/assets/img/products/product6-imgs(3).png',
        title: 'Fresh Farm Produce Box',
        price: '$ 38.00 USD',
        originalPrice: '$ 45.00 USD',
        rating: 5,
        linkHref: '/contact',
    },
    {
        image: '/assets/img/products/product6-imgs(4).png',
        title: "Nature's Fresh Pick",
        price: '$ 50.00 USD',
        originalPrice: '$ 60.00 USD',
        rating: 5,
        linkHref: '/contact',
    },
    {
        image: '/assets/img/products/product6-imgs(5).png',
        title: 'GreenNest Harvest',
        price: '$ 36.00 USD',
        originalPrice: '$ 48.00 USD',
        rating: 5,
        linkHref: '/contact',
    },
];

export default function ProductsSection({
    title = "Garden Journeys We've Nurtured",
    subtitle = 'Our Products',
    description = 'At Orgaanic, we offer a range of home-friendly agriculture services tailored to help you grow your own food, no matter the size of your space.',
    products = defaultProducts,
    buttonText = 'Shop Now',
    buttonHref = '/contact',
}: ProductsSectionProps) {
    return (
        <section className="vl-product6-area sp1">
            <div className="container">
                <div className="row">
                    <div className="product6-heading">
                        <div className="service6-top">
                            <div className="service6-top-left">
                                <h3
                                    className="product6-subtitle"
                                    data-aos="fade-right"
                                    data-aos-duration="900"
                                >
                                    {subtitle}
                                </h3>
                                <div className="space16"></div>
                                <h2
                                    className="clr-white text-anime-style-3"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                >
                                    {title}
                                </h2>
                            </div>
                            <div className="service6-top-right">
                                <p
                                    className="product6-pera text-effect"
                                    data-aos="fade-left"
                                    data-aos-duration="900"
                                >
                                    {description}
                                </p>
                                <div className="space24"></div>
                                <Link
                                    href={buttonHref}
                                    className="btn4-home6"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                >
                                    {buttonText}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="space44"></div>

                    <div
                        className="swiper myproduct6"
                        data-aos="zoom-out"
                        data-aos-duration="900"
                    >
                        <div className="swiper-wrapper">
                            {products.map((product, index) => (
                                <div key={index} className="swiper-slide">
                                    <div className="product6-box">
                                        <div className="product-thumb">
                                            <img
                                                className="imgs"
                                                src={product.image}
                                                alt=""
                                            />
                                            <div className="fav-icon">
                                                <span>
                                                    <i className="fa-solid fa-heart"></i>
                                                </span>
                                            </div>
                                            <div className="product6-line">
                                                <img
                                                    src="/assets/img/shape/product6-line.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="product6-icons">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <img
                                                                src="/assets/img/icon/product6-icons(1).svg"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img
                                                                src="/assets/img/icon/product6-icons(2).svg"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img
                                                                src="/assets/img/icon/product6-icons(3).svg"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="space24"></div>
                                        <div className="product6-box-content">
                                            <div className="product6-content_text">
                                                <h3>
                                                    <Link
                                                        href={
                                                            product.linkHref ||
                                                            '#'
                                                        }
                                                    >
                                                        {product.title}
                                                    </Link>
                                                </h3>
                                            </div>
                                            <div className="space16"></div>
                                            <div className="product6_info">
                                                <div className="product-price">
                                                    <span className="new-price">
                                                        <a
                                                            href={
                                                                product.linkHref ||
                                                                '#'
                                                            }
                                                        >
                                                            {product.price}
                                                        </a>
                                                    </span>
                                                    {product.originalPrice && (
                                                        <span className="old-price">
                                                            <a
                                                                href={
                                                                    product.linkHref ||
                                                                    '#'
                                                                }
                                                            >
                                                                {
                                                                    product.originalPrice
                                                                }
                                                            </a>
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="product_star product6_star">
                                                    <ul>
                                                        {Array.from(
                                                            {
                                                                length:
                                                                    product.rating ||
                                                                    5,
                                                            },
                                                            (_, i) => (
                                                                <li key={i}>
                                                                    <a href="#">
                                                                        <i className="fa-solid fa-star"></i>
                                                                    </a>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="product6-arrow">
                        <div
                            className="prev-arrow"
                            data-aos="fade-right"
                            data-aos-duration="900"
                        >
                            <img
                                src="/assets/img/icon/left-arrow-hm6.svg"
                                alt=""
                            />
                        </div>
                        <div
                            className="next-arrow"
                            data-aos="fade-left"
                            data-aos-duration="900"
                        >
                            <img
                                src="/assets/img/icon/right-arrow-hm6.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
