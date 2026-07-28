'use client';

import Link from 'next/link';
import { useState } from 'react';

const faqCategories = [
    { id: 2, name: 'Most Asked', active: true },
    { id: 12, name: 'About the Target Audience', active: false },
    { id: 5, name: 'About the Activities', active: false },
    { id: 3, name: 'About Reservations', active: false },
    { id: 14, name: 'About Modifying Reservations', active: false },
    { id: 11, name: 'About Accommodations and Local Operators', active: false },
    { id: 15, name: 'About Payment and Administration', active: false },
    { id: 4, name: 'About Catering and Drinks', active: false },
    { id: 10, name: 'About Practical Matters', active: false },
    { id: 13, name: 'About Your Questions Afterwards', active: false },
];

const faqs = [
    {
        question: 'What clothes should I wear?',
        answer: (
            <p>
                It is best to wear sporty clothes that are comfortable.
                We&apos;re a farm, so you don&apos;t have to dress up. Regular
                jeans are fine. You might get a little dirty due to grass or
                straw, for example. You certainly don&apos;t need to wear boots,
                sturdy shoes are sufficient to walk around our farm. High
                walking shoes are ideal for wet grass. In warm weather, provide
                extra dry clothes, because a water feature can be provided.
                Ultimately, it will be your cow colleagues who determine whether
                or not you brought dry clothes. ;-)
            </p>
        ),
        category: 2,
    },
    {
        question:
            'What is the difference between the Farm Expert Games and Farm Games?',
        answer: (
            <>
                <p>
                    Both programs are fun-oriented, coordinated by a great game
                    supervisor, competitive, suitable for a broad target group
                    (age, fitness, challenge,...) and always last (more than) 3
                    hours.
                </p>
                <p>
                    The Farm Games include accessible thinking and doing
                    assignments, ideal for a fun day out.
                </p>
                <p>
                    The Farm Expert Games are more thoughtful, detailed thinking
                    and doing assignments. You have to communicate and connect
                    with each other a little more, although &apos;fun&apos;
                    always comes first. Ideal for companies that attach
                    importance to a stronger herd feeling.
                </p>
            </>
        ),
        category: 2,
    },
    {
        question: 'Can everyone participate in the activities?',
        answer: (
            <p>
                The majority of the activities are suitable for everyone. Less
                sporty or less mobile people or pregnant women can also enjoy
                our activities. You can still decide at the moment to skip an
                activity as an individual.
            </p>
        ),
        category: 2,
    },
    {
        question: 'Can you also do something for children?',
        answer: (
            <p>
                At some locations there is an offer for children. No activities
                are organized for mixed groups of adults and children. By
                children we mean -14 years.
            </p>
        ),
        category: 2,
    },
    {
        question: 'How many people do you need to be at least?',
        answer: (
            <>
                <p>
                    This depends on the activity. Unfortunately, we do not have
                    activities for less than 10 people. We do not recommend
                    booking if the herd is smaller than 10 participants. (For
                    Farm Expert Games it is 12). If you make a reservation with
                    the minimum number of participants and someone falls ill,
                    the activity can continue as normal. The stated minimum
                    number of participants will always be invoiced, even if you
                    come with fewer.
                </p>
            </>
        ),
        category: 2,
    },
    {
        question: 'What time do the activities start?',
        answer: (
            <p>
                The activities at FarmFun do not have a fixed starting time.
                Everything depends on your wishes and our availability.
            </p>
        ),
        category: 2,
    },
    {
        question: 'Can we bring our own drinks to FunFarming?',
        answer: (
            <p>
                You are not supposed to bring your own drinks. The drinks are
                available on site at reasonable prices and will be included in
                the final invoice.
            </p>
        ),
        category: 2,
    },
    {
        question: 'What time do we have to register for the activities?',
        answer: (
            <p>
                If you arrive fifteen minutes before the start of your activity,
                you will be plenty of time. You will find the booked hour in
                your confirmation email. Are any participants late? No problem.
                We will decide at the moment and after joint consultation
                whether we will start already or wait a little longer. This may
                affect the end time. Is that an issue? Report this to the game
                supervisor on site, so that he can take this into account as
                much as possible.
            </p>
        ),
        category: 2,
    },
    {
        question: 'How does the payment work?',
        answer: (
            <>
                <p>
                    After your booking has been processed internally, you will
                    receive within 1 day; An advance invoice will be sent by
                    email within 2 weeks. This amounts to 50% of the expected
                    invoice amount. The payment term is 14 days after invoice.
                    The advance amount must always be paid before the event
                    date. You will receive the final invoice after the activity
                    and you must also pay it within 14 days.
                </p>
                <p>
                    As long as you don&apos;t receive an invoice, you don&apos;t
                    have to pay anything.
                </p>
                <p>
                    We currently only work via bank transfer, so no VISA,
                    PayPal, MTN Mobile Money, Airtel Mobile Money...
                </p>
            </>
        ),
        category: 2,
    },
    {
        question: 'What happens in rain or heat?',
        answer: (
            <>
                <p>
                    What about rain? Especially no worries. Each farm has
                    sufficient indoor space. Not only for our animals, but also
                    for the stray wildlife in your group. Our FarmFumbrellas
                    give you sufficient protection when it rains.
                </p>
                <p>
                    Is it very hot that day? We will also adjust the program
                    then. For example, you can choose a water feature. Because
                    our FarmFumbrellas may not provide enough protection here,
                    it is best to bring a change of dry clothes.
                </p>
                <p>There is always plenty of drink available!</p>
            </>
        ),
        category: 2,
    },
];

export default function FAQsPage() {
    const [activeCategory, setActiveCategory] = useState(2);
    const [openFaq, setOpenFaq] = useState(null);

    const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <>
            <div className="l-main u-bg-neutral--100">
                <div className="o-imagebanner">
                    <img
                        src="/img/gallery/funfarm_n26.png"
                        alt="Farm Lounge Header Image"
                    />
                </div>

                <div className="o-faq">
                    <div className="o-faq__intro">
                        <h1 className="o-faq__title">
                            Frequently Asked Questions
                        </h1>
                        <div className="o-faq__description s-text">
                            <p>
                                Thanks to our years of experience, we can
                                already estimate which questions you are
                                pondering. There is a very good chance that you
                                will find them here...
                            </p>
                        </div>
                    </div>

                    <div className="o-faq__grid js-faq">
                        <div className="o-faq__filters">
                            <h3 className="o-faq__subheader">Categories</h3>
                            <ul className="c-linklist">
                                {faqCategories.map((category) => (
                                    <li
                                        key={category.id}
                                        className="c-linklist__item"
                                    >
                                        <button
                                            className={`c-linklist__link js-category-toggle ${activeCategory === category.id ? 'is-active' : ''}`}
                                            data-category={category.id}
                                            onClick={() =>
                                                setActiveCategory(category.id)
                                            }
                                        >
                                            {category.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="o-faq__suggest">
                            <div className="c-suggest">
                                <h3 className="c-suggest__title">
                                    Do you have another question?
                                </h3>
                                <p className="c-suggest__content">
                                    Feel free to contact us.
                                </p>
                                <div className="c-suggest__action">
                                    <Link
                                        href="/contact"
                                        className="c-text-button"
                                    >
                                        <span className="c-text-button__text">
                                            Contact
                                        </span>
                                        <i className="c-text-button__icon">
                                            <svg width="7" height="10">
                                                <use href="/img/icon-arrowRight.svg#arrowRight"></use>
                                            </svg>
                                        </i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="o-faq__main">
                            <div className="o-questions u-mb-neg-slant-height">
                                <div className="o-questions__top u-overflow-hidden">
                                    <svg
                                        className="u-slant"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 1440 96"
                                    >
                                        <polygon
                                            points="-1 1 1440 96 1440 106 -1 106 -1 96"
                                            style={{ fill: 'currentColor' }}
                                        />
                                    </svg>
                                </div>
                                <div className="o-questions__main">
                                    <div
                                        className="o-questions__left"
                                        style={{ width: '100%' }}
                                    >
                                        <div className="c-faq">
                                            <h2 className="c-faq__title">
                                                <span>
                                                    Frequently Asked Questions
                                                </span>
                                                <span className="c-faq__icon">
                                                    <svg width="64" height="45">
                                                        <use href="/img/icon-cow--question.svg#cow--question"></use>
                                                    </svg>
                                                </span>
                                            </h2>
                                            <ul className="c-faq__list js-toggle">
                                                {filteredFaqs.map(
                                                    (faq, index) => (
                                                        <li
                                                            key={index}
                                                            className="c-faq__item"
                                                        >
                                                            <h3
                                                                className={`c-faq__question js-toggle-switch ${openFaq === index ? 'is-open' : ''}`}
                                                                onClick={() =>
                                                                    toggleFaq(
                                                                        index
                                                                    )
                                                                }
                                                            >
                                                                {faq.question}
                                                            </h3>
                                                            <div
                                                                className={`c-faq__answer s-text js-toggle-content ${openFaq === index ? '' : 'hidden'}`}
                                                                hidden={
                                                                    openFaq !==
                                                                    index
                                                                }
                                                            >
                                                                {faq.answer}
                                                            </div>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
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
