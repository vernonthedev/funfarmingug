'use client';

import Link from 'next/link';
import { useState } from 'react';

const faqs = [
    {
        question: 'What should I wear to the farm?',
        answer: 'Comfortable sporty clothes and closed shoes are ideal. You might get a little dirty from grass or straw, so regular jeans work fine. Sturdy walking shoes are sufficient — no need for boots. In warm weather, bring extra dry clothes in case we turn on a water feature. Your cow colleagues will ultimately decide whether you brought dry clothes!',
    },
    {
        question: 'What games can I expect?',
        answer: 'We offer a mix of board games, team-building activities, and fun farm games. Our Farm Games include accessible thinking and doing assignments perfect for a fun day out. For groups wanting a deeper challenge, our Farm Expert Games involve more detailed problem-solving and communication — always with fun coming first.',
    },
    {
        question: 'Can I participate in farm activities?',
        answer: 'Absolutely! Everyone is welcome to join in. The majority of our activities are suitable for all fitness levels. Less sporty or less mobile guests and pregnant women can also enjoy the experience. You can always decide on the day to skip an activity as an individual.',
    },
    {
        question: 'Are children allowed?',
        answer: 'Yes! We offer children\'s parties and activities at certain locations. By children we mean under 14 years. We do not organise mixed groups of adults and children — dedicated sessions are available for younger visitors.',
    },
    {
        question: 'What is the minimum group size?',
        answer: 'We can accommodate both individuals and groups. For our standard Farm Games we recommend a minimum of 10 participants, and for Farm Expert Games a minimum of 12. If you make a reservation with the minimum and someone falls ill, the activity can continue as normal — the minimum number will still be invoiced.',
    },
    {
        question: 'What time should I arrive?',
        answer: 'Arriving fifteen minutes before your scheduled start time is plenty. You will find the booked hour in your confirmation email. Running late? No problem — we will decide together whether to start on time or wait a little. This may affect the end time, so let the game supervisor know if that is an issue.',
    },
    {
        question: 'Are drinks included?',
        answer: 'Drinks are available on site at reasonable prices and will be included in the final invoice. We also offer a BBQ option with your activities — our farm kitchen serves up delicious local dishes. You are not expected to bring your own drinks.',
    },
    {
        question: 'How do I register?',
        answer: 'You can book directly through our contact form on this page, or give us a call at +256 772 826 680. We will discuss available dates, group size, and tailor an experience that suits you. You can provide the exact number of participants later.',
    },
    {
        question: 'What is the payment process?',
        answer: 'After your booking is processed, you will receive an advance invoice within 2 weeks for 50% of the expected amount, with a 14-day payment term. The advance must be paid before the event date. The final invoice is sent after the activity, also due within 14 days. We currently work via bank transfer.',
    },
    {
        question: 'What happens if it rains?',
        answer: 'No worries at all! Each farm has plenty of indoor space — not just for our animals but for your group too. Our FarmFumbrellas give you protection when it rains. In very hot weather we adjust the program too, and may offer a water feature. Bring a change of clothes just in case. There is always plenty of drink available!',
    },
    {
        question: 'Is transport provided?',
        answer: 'We can assist with transport arrangements to and from the farm. Fun Farming Uganda is located a few kilometres from Bukalangu Town Centre in Nakaseke District. Get in touch with us and we will help coordinate your travel.',
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        subscribe: false,
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const validateEmail = (email: string) =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const target = e.target as HTMLInputElement;
        const { name, value, type, checked } = target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!validateEmail(formData.email))
            newErrors.email = 'Invalid email address';
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', phone: '', message: '', subscribe: false });
        }, 1500);
    };

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <>
            {submitSuccess && (
                <div className="modal fade show" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Message Sent!</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setSubmitSuccess(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>
                                    Thank you for your message! We will get back
                                    to you soon. Welcome to the herd!
                                </p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="garlon-btn"
                                    onClick={() => setSubmitSuccess(false)}
                                >
                                    <span>Got it</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <section className="page-header">
                <div
                    className="page-header__bg"
                    style={{
                        backgroundImage:
                            'url(/assets/images/backgrounds/page-header-bg-1-1.jpg)',
                    }}
                ></div>
                <img
                    src="/assets/images/shapes/page-header-shape-1-1.png"
                    alt=""
                    className="page-header__shape"
                />
                <img
                    src="/assets/images/shapes/page-header-shape-1-2.png"
                    alt=""
                    className="page-header__shape"
                />
                <div className="container">
                    <h2 className="page-header__title">Contact Us</h2>
                    <ul className="garlon-breadcrumb list-unstyled">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <span>Contact</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="contact-one section-padding">
                <div className="container">
                    <div className="row gutter-y-30">
                        <div className="col-lg-6">
                            <img
                                src="/webimgs/david-holding-goat.jpg"
                                alt="Fun Farming Uganda"
                                style={{ width: '100%', borderRadius: '12px' }}
                            />
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-one__content">
                                <div className="contact-one__info">
                                    <h3>Get in Touch</h3>
                                    <p>
                                        Would you like more information about our
                                        activities or approach? Take the bull by
                                        the horns — give us a call, send an
                                        email, or check our FAQ.
                                    </p>
                                </div>
                                <div className="contact-one__details">
                                    <div className="contact-one__item">
                                        <div className="contact-one__icon">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            >
                                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                            </svg>
                                        </div>
                                        <div className="contact-one__text">
                                            <h4>Phone</h4>
                                            <p>
                                                <a href="tel:+256772826680">
                                                    +256 772 826 680
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="contact-one__item">
                                        <div className="contact-one__icon">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            >
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                <polyline points="22,6 12,13 2,6" />
                                            </svg>
                                        </div>
                                        <div className="contact-one__text">
                                            <h4>Email</h4>
                                            <p>
                                                <a href="mailto:info@funfarminguganda.com">
                                                    info@funfarminguganda.com
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="contact-one__item">
                                        <div className="contact-one__icon">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            >
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                        </div>
                                        <div className="contact-one__text">
                                            <h4>Address</h4>
                                            <p>
                                                Nakaseke District, Butalangu
                                                Province, Uganda
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-one__social">
                                    <h4>Follow Us</h4>
                                    <div className="contact-one__social-links">
                                        <a
                                            href="https://www.linkedin.com/company/funfarming/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="contact-one__social-link"
                                            title="LinkedIn"
                                        >
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://www.facebook.com/funfarming"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="contact-one__social-link"
                                            title="Facebook"
                                        >
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://www.instagram.com/funfarming/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="contact-one__social-link"
                                            title="Instagram"
                                        >
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <rect
                                                    x="2"
                                                    y="2"
                                                    width="20"
                                                    height="20"
                                                    rx="5"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="5"
                                                />
                                                <circle
                                                    cx="17.5"
                                                    cy="6.5"
                                                    r="1.5"
                                                    fill="white"
                                                />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://www.youtube.com/channel/#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="contact-one__social-link"
                                            title="YouTube"
                                        >
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
                                                <polygon
                                                    points="9.75 15.02 15.5 11.75 9.75 8.48"
                                                    fill="white"
                                                />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://www.tiktok.com/@funfarming"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="contact-one__social-link"
                                            title="TikTok"
                                        >
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M9 12a4 4 0 100 8 4 4 0 000-8zm0 0V4h6v4a4 4 0 004 4V8a4 4 0 00-4-4H9z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-one section-padding u-bg-neutral--100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="faq-one__title">
                                <h2>Frequently Asked Questions</h2>
                            </div>
                            <ul className="garlon-accrodion list-unstyled">
                                {faqs.map((faq, index) => (
                                    <li
                                        key={index}
                                        className={`garlon-accrodion__item ${openFaq === index ? 'active' : ''}`}
                                    >
                                        <div
                                            className="garlon-accrodion__title"
                                            onClick={() => toggleFaq(index)}
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
                </div>
            </section>

            <section className="contact-form section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact-form__inner">
                                <div className="contact-form__title">
                                    <h2>Send Us a Message</h2>
                                    <p>
                                        Have a question that is not listed above?
                                        We are happy to answer it.
                                    </p>
                                </div>
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="contact-form__input-box">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Your Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                                {errors.name && (
                                                    <p className="contact-form__error">
                                                        {errors.name}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="contact-form__input-box">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Your Email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    onBlur={(e) => {
                                                        if (
                                                            e.target.value &&
                                                            !validateEmail(
                                                                e.target.value
                                                            )
                                                        )
                                                            setErrors(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    email: 'Invalid email address',
                                                                })
                                                            );
                                                        else
                                                            setErrors(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    email: '',
                                                                })
                                                            );
                                                    }}
                                                />
                                                {errors.email && (
                                                    <p className="contact-form__error">
                                                        {errors.email}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="contact-form__input-box">
                                                <input
                                                    type="text"
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="Phone Number"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                                {errors.phone && (
                                                    <p className="contact-form__error">
                                                        {errors.phone}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="contact-form__input-box">
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    placeholder="Your Message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                                {errors.message && (
                                                    <p className="contact-form__error">
                                                        {errors.message}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="contact-form__input-box">
                                                <label className="contact-form__checkbox">
                                                    <input
                                                        type="checkbox"
                                                        name="subscribe"
                                                        checked={
                                                            formData.subscribe
                                                        }
                                                        onChange={handleChange}
                                                    />
                                                    <span>
                                                        Yes, keep me informed of
                                                        farm news. I can
                                                        unsubscribe anytime.
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button
                                                type="submit"
                                                className="garlon-btn"
                                                disabled={isSubmitting}
                                            >
                                                <span>
                                                    {isSubmitting
                                                        ? 'Sending...'
                                                        : 'Send Message'}
                                                </span>
                                                <i>
                                                    <svg
                                                        width="7"
                                                        height="10"
                                                    >
                                                        <use href="/img/icon-arrowRight.svg#arrowRight"></use>
                                                    </svg>
                                                </i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15957.569204460351!2d32.2763608!3d0.837297!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177c89c49c245505%3A0xb0d8551936f00965!2sFun%20Farming%20Uganda!5e0!3m2!1sen!2sug!4v1698927724672!5m2!1sen!2sug"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Fun Farming Uganda Location"
                ></iframe>
            </section>
        </>
    );
}
