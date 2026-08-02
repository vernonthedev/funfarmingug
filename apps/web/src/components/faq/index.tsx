const FAQS = [
    {
        q: 'What clothes should I wear?',
        a: "It is best to wear sporty clothes that are comfortable. We're a farm, so you don't have to dress up. Regular jeans are fine. You might get a little dirty due to grass or straw, for example. You certainly don't need to wear boots, sturdy shoes are sufficient to walk around our farm. High walking shoes are ideal for wet grass. In warm weather, provide extra dry clothes, because a water feature can be provided.",
    },
    {
        q: 'What is the difference between the Farm Expert Games and Farm Games?',
        a: 'Both programs are fun-oriented, coordinated by a great game supervisor, competitive, suitable for a broad target group and always last (more than) 3 hours. The Farm Games include accessible thinking and doing assignments, ideal for a fun day out. The Farm Expert Games are more thoughtful, detailed thinking and doing assignments — you have to communicate and connect with each other a little more, although "fun" always comes first.',
    },
    {
        q: 'Can everyone participate in the activities?',
        a: 'The majority of the activities are suitable for everyone. Less sporty or less mobile people or pregnant women can also enjoy our activities. You can still decide at the moment to skip an activity as an individual.',
    },
    {
        q: 'Can you also do something for children?',
        a: 'At some locations there is an offer for children. No activities are organized for mixed groups of adults and children. By children we mean -14 years.',
    },
    {
        q: 'How many people do you need at least?',
        a: 'This depends on the activity. Unfortunately we do not have activities for less than 10 people. We do not recommend booking if the herd is smaller than 10 participants. (For Farm Expert Games it is 12.) If you make a reservation with the minimum number of participants and someone falls ill, the activity can continue as normal.',
    },
    {
        q: 'What time do the activities start?',
        a: 'The activities at Fun Farming do not have a fixed starting time. Everything depends on your wishes and our availability.',
    },
    {
        q: 'Can we bring our own drinks to Fun Farming Uganda?',
        a: 'You are not supposed to bring your own drinks. The drinks are available on site at reasonable prices and will be included in the final invoice.',
    },
    {
        q: 'What time do we have to register for the activities?',
        a: 'If you arrive fifteen minutes before the start of your activity, you will have plenty of time. You will find the booked hour in your confirmation email. Are any participants late? No problem. We will decide at the moment and after joint consultation whether we will start already or wait a little longer.',
    },
    {
        q: 'How does the payment work?',
        a: 'After your booking has been processed internally, you will receive within 1 day an advance invoice by email within 2 weeks. This amounts to 50% of the expected invoice amount. The payment term is 14 days after invoice. As long as you do not receive an invoice, you do not have to pay anything.',
    },
    {
        q: 'What happens in rain or heat?',
        a: 'No worries: each farm has sufficient indoor space, not only for our animals but also for your group. Is it very hot that day? We will adjust the program then. There is always plenty of drink available!',
    },
    {
        q: 'Is Fun Farming accessible by public transport?',
        a: 'Rest assured! It is located a few kilometers away from Butalangu Town Centre.',
    },
];

export function FaqPage() {
    return (
        <div className="main-content pb-0 pt-93">
            <section className="s-faq-page">
                <div className="tf-container w-1290">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section text-center style-4 mb-50">
                                <div className="img-item">
                                    <img
                                        src="/images/item/rice-plant-2.png"
                                        alt=""
                                    />
                                </div>
                                <p className="sub-title">
                                    Frequently Asked Questions
                                </p>
                                <p className="title text-anime-style-1">
                                    Everything You Need To Know
                                </p>
                            </div>
                            <div
                                className="tf-accordion accordion"
                                id="accordionFaq"
                            >
                                {FAQS.map((f, i) => (
                                    <div className="accordion-item" key={i}>
                                        <h2 className="accordion-header">
                                            <button
                                                className={`accordion-button ${i === 0 ? '' : 'collapsed'}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#faqCollapse${i}`}
                                                aria-expanded={i === 0}
                                                aria-controls={`faqCollapse${i}`}
                                            >
                                                {f.q}
                                            </button>
                                        </h2>
                                        <div
                                            id={`faqCollapse${i}`}
                                            className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`}
                                            data-bs-parent="#accordionFaq"
                                        >
                                            <div className="accordion-body">
                                                {f.a}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
