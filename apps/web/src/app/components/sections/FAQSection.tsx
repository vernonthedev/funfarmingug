'use client';

interface FAQItem {
    number: string;
    question: string;
    answer: string;
}

interface FAQSectionProps {
    title?: string;
    subtitle?: string;
    description?: string;
    faqs?: FAQItem[];
    image?: string;
}

const defaultFAQs: FAQItem[] = [
    {
        number: '01',
        question: 'Are the materials eco-friendly?',
        answer: 'We help design water-resistant setups with proper drainage to protect your plants. Some crops even grow better during',
    },
    {
        number: '02',
        question: "What's included in a starter kit?",
        answer: 'We help design water-resistant setups with proper drainage to protect your plants. Some crops even grow better during',
    },
    {
        number: '03',
        question: 'How long does delivery take?',
        answer: 'We help design water-resistant setups with proper drainage to protect your plants. Some crops even grow better during',
    },
    {
        number: '04',
        question: 'Do plants attract insects or snakes?',
        answer: 'We help design water-resistant setups with proper drainage to protect your plants. Some crops even grow better during',
    },
];

export default function FAQSection({
    title = 'Quick Answers for Green Minds',
    subtitle = 'FAQ',
    description = "Starting something new can feel overwhelming but we're here to help. Below you'll find answers to the most frequently asked questions about",
    faqs = defaultFAQs,
    image = '/assets/img/faq/faq6-thumb.png',
}: FAQSectionProps) {
    return (
        <section className="vl-faq6-area sp1">
            <div className="container">
                <div className="row align-items-center">
                    <div className="faq6-header">
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
                            className="vl-faq-content-wrap-2 vl-faq6"
                            data-sal="slide-up"
                            data-sal-duration="1000"
                            data-sal-delay="100"
                            data-sal-easing="ease-in-out"
                        >
                            <div className="vl-faq-accordion">
                                <div
                                    className="accordion"
                                    id="accordionExample"
                                >
                                    {faqs.map((faq, index) => (
                                        <div
                                            key={index}
                                            className="vl-accordion-item"
                                            data-aos="fade-right"
                                            data-aos-duration={
                                                800 + index * 100
                                            }
                                        >
                                            <h2
                                                className="accordion-header"
                                                id={`heading${index + 1}`}
                                            >
                                                <button
                                                    className={`accordion-button ${index > 0 ? 'collapsed' : ''}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse${index + 1}`}
                                                    aria-expanded={index === 0}
                                                    aria-controls={`collapse${index + 1}`}
                                                >
                                                    <span>{faq.number}</span>{' '}
                                                    {faq.question}
                                                    <span className="vl-faqarrow vl-faqarrow-2">
                                                        <i className="fa-solid fa-angle-down"></i>
                                                    </span>
                                                </button>
                                            </h2>
                                            <div
                                                id={`collapse${index + 1}`}
                                                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    <p className="para">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq6-thumb image-anime reveal">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
