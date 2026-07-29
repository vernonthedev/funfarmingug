'use client';

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
        answer:
            'Comfortable sporty clothes and closed shoes are ideal. You might get a little dirty from grass or straw, so regular jeans work fine. Sturdy walking shoes are sufficient — no need for boots. In warm weather, bring extra dry clothes in case we turn on a water feature. Your cow colleagues will ultimately decide whether you brought dry clothes!',
    },
    {
        question: 'What games can I expect?',
        category: 1,
        answer:
            'We offer board games, team-building activities, and fun farm games. Our Farm Games include accessible thinking and doing assignments perfect for a fun day out. For groups wanting a deeper challenge, our Farm Expert Games involve more detailed problem-solving and communication — always with fun coming first. Both are coordinated by a great game supervisor and last at least 3 hours.',
    },
    {
        question: 'Can I participate in farm activities?',
        category: 1,
        answer:
            'Absolutely! Everyone is welcome to join in. The majority of our activities are suitable for all fitness levels. Less sporty or less mobile guests and pregnant women can also enjoy the experience. You can always decide on the day to skip an activity as an individual.',
    },
    {
        question: 'Are children allowed?',
        category: 2,
        answer:
            "Yes! We offer children's parties and activities at certain locations. By children we mean under 14 years. We do not organise mixed groups of adults and children — dedicated sessions are available for younger visitors.",
    },
    {
        question: 'What is the minimum group size?',
        category: 4,
        answer:
            'We can accommodate both individuals and groups. For our standard Farm Games we recommend a minimum of 10 participants, and for Farm Expert Games a minimum of 12. If you make a reservation with the minimum and someone falls ill, the activity can continue as normal — the minimum number will still be invoiced.',
    },
    {
        question: 'What time should I arrive?',
        category: 4,
        answer:
            'Arriving fifteen minutes before your scheduled start time is plenty. You will find the booked hour in your confirmation email. Running late? No problem — we will decide together whether to start on time or wait a little. This may affect the end time, so let the game supervisor know if that is an issue.',
    },
    {
        question: 'Are drinks included?',
        category: 7,
        answer:
            'Drinks are available on site at reasonable prices and will be included in the final invoice. We also offer a BBQ option with your activities — our farm kitchen serves up delicious local dishes. You are not expected to bring your own drinks. There is always plenty of drink available!',
    },
    {
        question: 'How do I register?',
        category: 4,
        answer:
            'You can book directly through our contact form on this page, or give us a call at +256 772 826 680. We will discuss available dates, group size, and tailor an experience that suits you. You can provide the exact number of participants later.',
    },
    {
        question: 'What is the payment process?',
        category: 6,
        answer:
            'After your booking is processed, you will receive an advance invoice within 2 weeks for 50% of the expected amount, with a 14-day payment term. The advance must be paid before the event date. The final invoice is sent after the activity, also due within 14 days. We currently work via bank transfer.',
    },
    {
        question: 'What happens if it rains?',
        category: 3,
        answer:
            "No worries at all! Each farm has plenty of indoor space — not just for our animals but for your group too. Our FarmFumbrellas give you protection when it rains. In very hot weather we adjust the program too, and may offer a water feature. Bring a change of clothes just in case. There is always plenty of drink available!",
    },
    {
        question: 'Is transport provided?',
        category: 5,
        answer:
            'We can assist with transport arrangements to and from the farm. Fun Farming Uganda is located a few kilometres from Bukalangu Town Centre in Nakaseke District. Get in touch with us and we will help coordinate your travel.',
    },
];

export default function FAQPage() {
    const [activeCategory, setActiveCategory] = useState(1);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const filteredFaqs = faqs.filter(
        (faq) => activeCategory === 1 || faq.category === activeCategory
    );

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <>
            <PageHeader
                title="FAQ"
                bgImage="/assets/images/backgrounds/page-header-bg-1-1.jpg"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'FAQ' },
                ]}
            />

            <section className="faq-one section-space">
                <div className="container">
                    <div className="row gutter-y-30">
                        <div className="col-lg-8">
                            <div className="faq-one__content">
                                <div className="sec-title text-start">
                                    <div className="sec-title__tagline">
                                        <img
                                            src="/assets/images/shapes/sec-title-s-1-1.png"
                                            alt="shape"
                                        />
                                        FREQUENTLY ASKED QUESTIONS
                                    </div>
                                    <h3 className="sec-title__title">
                                        Everything You Need to Know
                                    </h3>
                                </div>
                                <ul className="garlon-accrodion list-unstyled">
                                    {filteredFaqs.map((faq, index) => (
                                        <li
                                            key={index}
                                            className={`garlon-accrodion__item ${openFaq === index ? 'active' : ''}`}
                                        >
                                            <div
                                                className="garlon-accrodion__title"
                                                onClick={() =>
                                                    toggleFaq(index)
                                                }
                                            >
                                                <h3>{faq.question}</h3>
                                                <div className="garlon-accrodion__icon">
                                                    <span className="icon-plus"></span>
                                                    <span className="icon-minus"></span>
                                                </div>
                                            </div>
                                            <div
                                                className="garlon-accrodion__content"
                                                style={{
                                                    display:
                                                        openFaq === index
                                                            ? 'block'
                                                            : 'none',
                                                }}
                                            >
                                                <p>{faq.answer}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="faq-one__sidebar">
                                <div className="faq-one__categories">
                                    <h3>Categories</h3>
                                    <ul className="faq-one__category-list list-unstyled">
                                        {categories.map((cat) => (
                                            <li key={cat.id}>
                                                <button
                                                    className={`faq-one__category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                                                    onClick={() =>
                                                        setActiveCategory(
                                                            cat.id
                                                        )
                                                    }
                                                >
                                                    {cat.name}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="faq-one__cta">
                                    <div className="faq-one__cta-inner">
                                        <h3>Still have questions?</h3>
                                        <p>
                                            Feel free to contact us. We are happy to help you plan your farm experience.
                                        </p>
                                        <a
                                            href="/contact"
                                            className="garlon-btn"
                                        >
                                            <span>Contact Us</span>
                                            <i className="icon-angle-small-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}