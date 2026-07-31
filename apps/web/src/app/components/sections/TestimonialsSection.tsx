'use client';

import Link from 'next/link';

interface TestimonialItem {
    text: string;
    author: string;
    role: string;
    rating?: number;
}

interface TestimonialsSectionProps {
    title?: string;
    subtitle?: string;
    description?: string;
    testimonials?: TestimonialItem[];
    image1?: string;
    image2?: string;
}

const defaultTestimonials: TestimonialItem[] = [
    {
        text: '"I never imagined our rooftop could become thriving green space. Orgaanic didn\'t just give us a garden they gave us a new way of living. My mornings now start with harvesting fresh vegetables, my children are more connected to nature than ever before."',
        author: 'Alex Buckmaster',
        role: "Tam's Stationers",
        rating: 5,
    },
    {
        text: '"I never imagined our rooftop could become thriving green space. Orgaanic didn\'t just give us a garden they gave us a new way of living. My mornings now start with harvesting fresh vegetables, my children are more connected to nature than ever before."',
        author: 'Alex Buckmaster',
        role: "Tam's Stationers",
        rating: 5,
    },
    {
        text: '"I never imagined our rooftop could become thriving green space. Orgaanic didn\'t just give us a garden they gave us a new way of living. My mornings now start with harvesting fresh vegetables, my children are more connected to nature than ever before."',
        author: 'Alex Buckmaster',
        role: "Tam's Stationers",
        rating: 5,
    },
];

export default function TestimonialsSection({
    title = 'Trusted by Green-Thinking Families',
    subtitle = 'Testimonials',
    description = 'At Orgaanic, we take pride in turning ordinary spaces into thriving green ecosystems. From balconies and rooftops to backyards',
    testimonials = defaultTestimonials,
    image1 = '/assets/img/testimonil/testimonial6-thumb1.png',
    image2 = '/assets/img/testimonil/testimonial6-thumb2.png',
}: TestimonialsSectionProps) {
    return (
        <section className="vl-testimonial6-area sp1">
            <div className="container">
                <div className="row">
                    <div className="testimonial6-heading">
                        <div className="service6-top">
                            <div className="service6-top-left">
                                <h3
                                    data-aos="fade-right"
                                    data-aos-duration="900"
                                >
                                    {subtitle}
                                </h3>
                                <div className="space16"></div>
                                <h2
                                    className="text-anime-style-3"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                >
                                    {title}
                                </h2>
                            </div>
                            <div className="service6-top-right">
                                <p
                                    className="text-effect"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                >
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space44"></div>
                    <div className="col-xl-6 col-lg-6">
                        <div
                            className="swiper mytestimo6"
                            data-aos="zoom-out"
                            data-aos-duration="1000"
                        >
                            <div className="swiper-wrapper">
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="swiper-slide">
                                        <div className="testimonial6-info">
                                            <div className="product_star testimonial6_star">
                                                <ul>
                                                    {Array.from(
                                                        {
                                                            length:
                                                                testimonial.rating ||
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
                                            <div className="space24"></div>
                                            <p className="testimonial6-text">
                                                {testimonial.text}
                                            </p>
                                            <div className="space38"></div>
                                            <div className="testimonial6-bottom">
                                                <div className="testimonial6-user">
                                                    <h3>
                                                        <Link href="/testimonials">
                                                            {testimonial.author}
                                                        </Link>
                                                    </h3>
                                                    <div className="space16"></div>
                                                    <p>{testimonial.role}</p>
                                                </div>
                                                <div className="testimonial6-arrow">
                                                    <div className="next-arrow mr-12">
                                                        <a href="#">
                                                            <img
                                                                src="/assets/img/icon/arrow-left-testi06.svg"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="prev-arrow">
                                                        <a href="#">
                                                            <img
                                                                src="/assets/img/icon/arrow-right-testi06.svg"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="testimonial6-thumb">
                            <div className="testimonial6-thumb-img reveal image-anime">
                                <img src={image1} alt="" />
                            </div>
                            <div className="testimonial6-thumb-img2 image-anime">
                                <img src={image2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
