'use client';

import Link from 'next/link';
import PageHeader from '@/components/sections/PageHeader';
import { useState } from 'react';

const categories = [
    { id: 1, name: 'Most Asked' },
    { id: 2, name: 'Target Audience' },
    { id: 3, name: 'Activities' },
    { id: 4, name: 'Reservations' },
    { id: 5, name: 'Accommodations' },
    { id: 6, name: 'Payment' },
    { id: 7, name: 'Catering' },
];

const faqs = [
    {
        question: 'What should I wear to the farm?',
        category: 1,
        answer: 'Comfortable sporty clothes and closed shoes are ideal. You might get a little dirty from grass or straw, so regular jeans work fine. Sturdy walking shoes are sufficient — no need for boots. In warm weather, bring extra dry clothes in case we turn on a water feature. Your cow colleagues will ultimately decide whether you brought dry clothes!',
    },
    {
        question: 'What games can I expect?',
        category: 1,
        answer: 'We offer board games, team-building activities, and fun farm games. Our Farm Games include accessible thinking and doing assignments perfect for a fun day out. For groups wanting a deeper challenge, our Farm Expert Games involve more detailed problem-solving and communication — always with fun coming first. Both are coordinated by a great game supervisor and last at least 3 hours.',
    },
    {
        question: 'Can I participate in farm activities?',
        category: 1,
        answer: 'Absolutely! Everyone is welcome to join in. The majority of our activities are suitable for all fitness levels. Less sporty or less mobile guests and pregnant women can also enjoy the experience. You can always decide on the day to skip an activity as an individual.',
    },
    {
        question: 'Are children allowed?',
        category: 2,
        answer: "Yes! We offer children's parties and activities at certain locations. By children we mean under 14 years. We do not organise mixed groups of adults and children — dedicated sessions are available for younger visitors.",
    },
    {
        question: 'What is the minimum group size?',
        category: 4,
        answer: 'We can accommodate both individuals and groups. For our standard Farm Games we recommend a minimum of 10 participants, and for Farm Expert Games a minimum of 12. If you make a reservation with the minimum and someone falls ill, the activity can continue as normal — the minimum number will still be invoiced.',
    },
    {
        question: 'What time should I arrive?',
        category: 4,
        answer: 'Arriving fifteen minutes before your scheduled start time is plenty. You will find the booked hour in your confirmation email. Running late? No problem — we will decide together whether to start on time or wait a little. This may affect the end time, so let the game supervisor know if that is an issue.',
    },
    {
        question: 'Are drinks included?',
        category: 7,
        answer: 'Drinks are available on site at reasonable prices and will be included in the final invoice. We also offer a BBQ option with your activities — our farm kitchen serves up delicious local dishes. You are not expected to bring your own drinks. There is always plenty of drink available!',
    },
    {
        question: 'How do I register?',
        category: 4,
        answer: 'You can book directly through our contact form on this page, or give us a call at +256 772 826 680. We will discuss available dates, group size, and tailor an experience that suits you. You can provide the exact number of participants later.',
    },
    {
        question: 'What is the payment process?',
        category: 6,
        answer: 'After your booking is processed, you will receive an advance invoice within 2 weeks for 50% of the expected amount, with a 14-day payment term. The advance must be paid before the event date. The final invoice is sent after the activity, also due within 14 days. We currently work via bank transfer.',
    },
    {
        question: 'What happens if it rains?',
        category: 3,
        answer: 'No worries at all! Each farm has plenty of indoor space — not just for our animals but for your group too. Our FarmFumbrellas give you protection when it rains. In very hot weather we adjust the program too, and may offer a water feature. Bring a change of clothes just in case. There is always plenty of drink available!',
    },
    {
        question: 'Is transport provided?',
        category: 5,
        answer: 'We can assist with transport arrangements to and from the farm. Fun Farming Uganda is located a few kilometres from Bukalangu Town Centre in Nakaseke District. Get in touch with us and we will help coordinate your travel.',
    },
];

export default function FAQPage() {
    const [activeCategory, setActiveCategory] = useState(1);
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const filteredFaqs = faqs.filter(
        (faq) => activeCategory === 1 || faq.category === activeCategory
    );

    return (
        <>
            <PageHeader
                title="FAQ"
                bgImage="/assets/img/hero/about-us-inr-herothumb.png"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'FAQ' },
                ]}
            />

            <div className="vl-faq9-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="vl-faq-info">
                                <div className="row">
                                    <div className="counter_boxes_area">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6" data-aos="zoom-out" data-aos-duration="900">
                                                <div className="vl-faq-info-content box1">
                                                    <div className="vl-faq-icon">
                                                        <img src="/assets/img/icon/faq1-img1.png" alt="" />
                                                    </div>
                                                    <div className="space24"></div>
                                                    <h2><span className="counter">1200</span>+</h2>
                                                    <div className="space16"></div>
                                                    <p>Products</p>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6" data-aos="zoom-out" data-aos-duration="1100">
                                                <div className="vl-faq-info-content box1">
                                                    <div className="vl-faq-icon">
                                                        <img src="/assets/img/icon/faq1-img2.png" alt="" />
                                                    </div>
                                                    <div className="space24"></div>
                                                    <h2><span className="counter">20</span>+</h2>
                                                    <div className="space16"></div>
                                                    <p>Years Of Experience</p>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6" data-aos="zoom-out" data-aos-duration="900">
                                                <div className="vl-faq-info-content">
                                                    <div className="vl-faq-icon">
                                                        <img src="/assets/img/icon/faq1-img3.png" alt="" />
                                                    </div>
                                                    <div className="space24"></div>
                                                    <h2><span className="counter">2.850</span>+</h2>
                                                    <div className="space16"></div>
                                                    <p>Satisfied Clients</p>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6" data-aos="zoom-out" data-aos-duration="1100">
                                                <div className="vl-faq-info-content">
                                                    <div className="vl-faq-icon">
                                                        <img src="/assets/img/icon/faq1-img4.png" alt="" />
                                                    </div>
                                                    <div className="space24"></div>
                                                    <h2><span className="counter">30</span>+</h2>
                                                    <div className="space16"></div>
                                                    <p>Local Team Members</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="faq-header z-index99">
                                <h3 className="subtitle" data-aos="fade-left" data-aos-duration="800">
                                    <img src="/assets/img/icon/subtitle-icon2.png" alt="" />
                                    Why Farm
                                </h3>
                                <div className="space24"></div>
                                <h2 className="title text-anime-style-3" data-aos="fade-left" data-aos-duration="900">
                                    Where Every Animal Is Raised with Love,
                                </h2>
                                <div className="space16"></div>
                                <p className="pera-text text-effect" data-aos="fade-left" data-aos-duration="1000">
                                    At Fun Farming Uganda, we believe that great food begins with honest farming.
                                    Nestled in open pastures and guided by nature, our farm is built on values of
                                    sustainability, compassion, and transparency.
                                </p>
                                <div className="space38"></div>
                                <div className="btn_area3" data-aos="fade-left" data-aos-duration="900">
                                    <Link href="/contact" className="vl-btn3">
                                        Learn More
                                        <span className="arrow_btn3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <path d="M27.002 16.002H5.00195" stroke="#132C12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M21.0021 22.002C21.0021 22.002 27.002 17.5831 27.002 16.002C27.002 14.4208 21.002 10.002 21.002 10.002" stroke="#132C12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space60"></div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="vl-faq-content-wrap-2 vl-faq9">
                                <div className="vl-faq-accordion">
                                    <div className="accordion" id="faqAccordion">
                                        {filteredFaqs.map((faq, index) => (
                                            <div className="vl-accordion-item" key={index} data-aos="fade-right" data-aos-duration="800">
                                                <h2 className="accordion-header" id={`heading${index}`}>
                                                    <button
                                                        className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`}
                                                        type="button"
                                                        onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                                        aria-expanded={openIndex === index}
                                                        aria-controls={`collapse${index}`}
                                                    >
                                                        <span>0{index + 1}</span> {faq.question}
                                                        <span className="vl-faqarrow vl-faqarrow-2">
                                                            <i className="fa-solid fa-angle-down"></i>
                                                        </span>
                                                    </button>
                                                </h2>
                                                <div
                                                    id={`collapse${index}`}
                                                    className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}
                                                    aria-labelledby={`heading${index}`}
                                                    data-bs-parent="#faqAccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>{faq.answer}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
