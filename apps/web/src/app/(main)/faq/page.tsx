'use client';

import Link from 'next/link';
import { useState } from 'react';

const faqs = [
    {
        question: 'What should I wear to the farm?',
        answer: 'Comfortable sporty clothes and closed shoes are ideal. You might get a little dirty from grass or straw, so regular jeans work fine. Sturdy walking shoes are sufficient — no need for boots. In warm weather, bring extra dry clothes in case we turn on a water feature.',
    },
    {
        question: 'What games can I expect?',
        answer: 'We offer board games, team-building activities, and fun farm games. Our Farm Games include accessible thinking and doing assignments perfect for a fun day out. For groups wanting a deeper challenge, our Farm Expert Games involve more detailed problem-solving and communication.',
    },
    {
        question: 'Can I participate in farm activities?',
        answer: 'Absolutely! Everyone is welcome to join in. The majority of our activities are suitable for all fitness levels. Less sporty or less mobile guests and pregnant women can also enjoy the experience. You can always decide on the day to skip an activity as an individual.',
    },
    {
        question: 'Are children allowed?',
        answer: 'Yes! We offer children parties and activities at certain locations. By children we mean under 14 years. We do not organise mixed groups of adults and children — dedicated sessions are available for younger visitors.',
    },
    {
        question: 'What is the minimum group size?',
        answer: 'We can accommodate both individuals and groups. For our standard Farm Games we recommend a minimum of 10 participants, and for Farm Expert Games a minimum of 12. If you make a reservation with the minimum and someone falls ill, the activity can continue as normal.',
    },
    {
        question: 'What time should I arrive?',
        answer: 'Arriving fifteen minutes before your scheduled start time is plenty. You will find the booked hour in your confirmation email. Running late? No problem — we will decide together whether to start on time or wait a little.',
    },
    {
        question: 'Are drinks included?',
        answer: 'Yes, drinks are included in all our packages. We provide water, tea, coffee, and soft drinks. For special requests or alcoholic beverages, please contact us in advance.',
    },
    {
        question: 'Can I bring my own food and drinks?',
        answer: 'Due to hygiene regulations, we do not allow bringing your own food and drinks. However, we can accommodate dietary restrictions and preferences if you inform us in advance.',
    },
];

export default function FAQPage() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            {/* HERO START */}
            <div className="vl-hero-inner-area parallaxie" style={{ backgroundImage: 'url(/assets/img/hero/about-us-inr-herothumb.png)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="inner-hero-info">
                                <h2>Frequently Asked Questions</h2>
                                <div className="space16"></div>
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li><img src="/assets/img/icon/arrow-right-inner.svg" alt="" /></li>
                                    <li><Link className="aboutus_titlefix" href="/faq">FAQ</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* HERO END */}

            {/* FAQ AREA START */}
            <div className="vl-faq-inr-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 mx-auto">
                            <div className="faq-inr-heading text-center">
                                <h3 data-aos="fade-right" data-aos-duration="800">
                                    <img src="/assets/img/icon/hm7-sub-title2-dot.png" alt="" />
                                    Common Questions
                                </h3>
                                <div className="space24"></div>
                                <h2 className="text-effect" data-aos="fade-left" data-aos-duration="1000">
                                    Everything You Need to Know About Fun Farming Uganda
                                </h2>
                            </div>
                            <div className="space44"></div>
                            <div className="accordion" id="faqAccordion">
                                {faqs.map((faq, index) => (
                                    <div className="accordion-item" key={index} data-aos="fade-up" data-aos-duration={900 + (index * 100)}>
                                        <h2 className="accordion-header">
                                            <button
                                                className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                                                type="button"
                                                onClick={() => toggleFAQ(index)}
                                                aria-expanded={activeIndex === index}
                                            >
                                                <span className="faq-number">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                                                <span className="faq-question">{faq.question}</span>
                                                <span className="accordion-icon">
                                                    <i className={`fa-solid ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                                                </span>
                                            </button>
                                        </h2>
                                        <div
                                            id={`faq-${index}`}
                                            className={`accordion-collapse ${activeIndex === index ? 'show' : ''}`}
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">
                                                <p className="faq-answer">{faq.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* FAQ AREA END */}

            {/* CTA SECTION */}
            <div className="vl-cta4-area" data-aos="zoom-out" data-aos-duration="1000">
                <div className="container">
                    <div className="row cta4-area-info sp1">
                        <div className="col-xl-6 mx-auto text-center">
                            <div className="cta4-area-content">
                                <div className="product4-heading">
                                    <h3 className="product4-subtitle" data-aos="fade-right" data-aos-duration="900">
                                        Still Have Questions?
                                    </h3>
                                    <div className="space24"></div>
                                    <h2 className="product4-title text-anime-style-3" data-aos="fade-left" data-aos-duration="1000">
                                        Our Team is Here to Help
                                    </h2>
                                </div>
                                <div className="space38"></div>
                                <div className="btn_area10 z-index99" data-aos="zoom-out" data-aos-duration="1100">
                                    <Link href="/contact" className="vl-btn10">
                                        Contact Us
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                                <path d="M22.8079 11.1373L11.1406 22.8046" stroke="#25452C" strokeWidth="1.55556" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M22.8054 17.5005C22.8054 17.5005 23.6439 11.9751 22.8054 11.1366C21.9669 10.2981 16.4414 11.1366 16.4414 11.1366" stroke="#25452C" strokeWidth="1.55556" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="cta4-area-shape1 aniamtion-key-2">
                            <img src="/assets/img/shape/cta-hm4(1).png" alt="" />
                        </div>
                        <div className="cta4-area-shape2 aniamtion-key-2">
                            <img src="/assets/img/shape/cta-hm4(2).png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* CTA SECTION END */}
        </>
    );
}