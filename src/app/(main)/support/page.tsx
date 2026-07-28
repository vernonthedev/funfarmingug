'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SupportPage() {
    const [formData, setFormData] = useState<{
        name: string;
        email: string;
        subject: string;
        message: string;
    }>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateEmail = (email: string) =>
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!validateEmail(formData.email))
            newErrors.email = 'Invalid email';
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        if (Object.keys(newErrors).length) {
            setErrors(newErrors);
            return;
        }
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    return (
        <>
            <div
                className="page-header"
                style={{
                    backgroundImage:
                        'url(/assets/images/backgrounds/page-header.jpg)',
                }}
            >
                <div className="container">
                    <div className="page-header__inner">
                        <h2 className="page-header__title">Need Support?</h2>
                        <ul className="thm-breadcrumb list-unstyled">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <span aria-hidden="true">/</span>
                            </li>
                            <li>Support</li>
                        </ul>
                    </div>
                </div>
                <div className="page-header__shape-1">
                    <img
                        src="/assets/images/shapes/page-header-1-1.png"
                        alt="shape"
                    />
                </div>
                <div className="page-header__shape-2">
                    <img
                        src="/assets/images/shapes/page-header-1-2.png"
                        alt="shape"
                    />
                </div>
            </div>

            <section className="support-section section-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="support-info">
                                <h2>How Can We Help?</h2>
                                <p>
                                    We're here to assist you with any questions
                                    or concerns about your booking, activities,
                                    or farm visit.
                                </p>

                                <div className="support-channels">
                                    <div className="support-channel">
                                        <div className="support-channel__icon">
                                            <svg
                                                width="30"
                                                height="30"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#2d6a4f"
                                                strokeWidth="2"
                                            >
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>Phone Support</h4>
                                            <a href="tel:+256772826680">
                                                +256 772 826 680
                                            </a>
                                            <p className="support-channel__hours">
                                                Mon-Fri: 8AM-6PM EAT
                                            </p>
                                        </div>
                                    </div>
                                    <div className="support-channel">
                                        <div className="support-channel__icon">
                                            <svg
                                                width="30"
                                                height="30"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#2d6a4f"
                                                strokeWidth="2"
                                            >
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                <polyline points="22,6 12,13 2,6" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>Email Support</h4>
                                            <a href="mailto:support@funfarminguganda.com">
                                                support@funfarminguganda.com
                                            </a>
                                            <p className="support-channel__hours">
                                                Typically responds within 24
                                                hours
                                            </p>
                                        </div>
                                    </div>
                                    <div className="support-channel">
                                        <div className="support-channel__icon">
                                            <svg
                                                width="30"
                                                height="30"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#2d6a4f"
                                                strokeWidth="2"
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                />
                                                <polyline points="12 6 12 12 16 14" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>Visit Us</h4>
                                            <address>
                                                Butalangu Town Council, Nakaseke
                                                District, Uganda
                                            </address>
                                            <p className="support-channel__hours">
                                                Daily: 8AM-6PM EAT
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="support-form-card">
                                <h3>Send Us a Message</h3>
                                {submitSuccess && (
                                    <div className="success-message">
                                        <svg
                                            width="48"
                                            height="48"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#2d6a4f"
                                            strokeWidth="2"
                                        >
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                        <h4>Message Sent!</h4>
                                        <p>
                                            Thank you for contacting us. We'll
                                            get back to you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() =>
                                                setSubmitSuccess(false)
                                            }
                                            className="btn btn--secondary btn--sm"
                                        >
                                            Send Another
                                        </button>
                                    </div>
                                )}
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="form-group">
                                        <label htmlFor="name">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                        />
                                        {errors.name && (
                                            <span className="error">
                                                {errors.name}
                                            </span>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                        />
                                        {errors.email && (
                                            <span className="error">
                                                {errors.email}
                                            </span>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">
                                            Subject *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                        >
                                            <option value="">
                                                Select a topic
                                            </option>
                                            <option value="booking">
                                                Booking Inquiry
                                            </option>
                                            <option value="activities">
                                                Activities Information
                                            </option>
                                            <option value="pricing">
                                                Pricing & Packages
                                            </option>
                                            <option value="technical">
                                                Technical Issue
                                            </option>
                                            <option value="feedback">
                                                Feedback
                                            </option>
                                            <option value="other">Other</option>
                                        </select>
                                        {errors.subject && (
                                            <span className="error">
                                                {errors.subject}
                                            </span>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            placeholder="Describe how we can help you..."
                                        ></textarea>
                                        {errors.message && (
                                            <span className="error">
                                                {errors.message}
                                            </span>
                                        )}
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn--primary btn--large"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting
                                            ? 'Sending...'
                                            : 'Submit Request'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="faq-preview">
                        <h3>Quick Answers</h3>
                        <div className="faq-preview-grid">
                            <Link href="/faqs" className="faq-preview-card">
                                <h4>How do I book an activity?</h4>
                                <p>
                                    Visit our Activities page, select your
                                    preferred activity, and fill out the booking
                                    form.
                                </p>
                            </Link>
                            <Link href="/faqs" className="faq-preview-card">
                                <h4>What should I bring?</h4>
                                <p>
                                    Comfortable clothes, closed shoes,
                                    sunscreen, and a water bottle. We provide
                                    everything else!
                                </p>
                            </Link>
                            <Link href="/faqs" className="faq-preview-card">
                                <h4>Can I cancel or reschedule?</h4>
                                <p>
                                    Yes, contact us at least 48 hours before
                                    your booking for changes.
                                </p>
                            </Link>
                            <Link href="/faqs" className="faq-preview-card">
                                <h4>Is there parking available?</h4>
                                <p>
                                    Yes, we have ample free parking for all
                                    guests including buses.
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .support-channels {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    margin-top: 30px;
                }
                .support-channel {
                    display: flex;
                    gap: 15px;
                    padding: 20px;
                    background: #f8faf8;
                    border-radius: 12px;
                }
                .support-channel__icon {
                    flex-shrink: 0;
                }
                .support-channel h4 {
                    margin: 0 0 5px;
                    color: #1f292d;
                }
                .support-channel a {
                    color: #2d6a4f;
                    text-decoration: none;
                    font-weight: 500;
                }
                .support-channel__hours {
                    margin: 5px 0 0;
                    font-size: 0.85rem;
                    color: #6b7280;
                }
                .support-channel address {
                    color: #374151;
                    font-style: normal;
                }
                .support-form-card {
                    background: white;
                    padding: 30px;
                    border-radius: 16px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                }
                .support-form-card h3 {
                    margin: 0 0 25px;
                    color: #1f292d;
                }
                .form-group {
                    margin-bottom: 20px;
                }
                .form-group label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 500;
                    color: #374151;
                }
                .form-group input,
                .form-group select,
                .form-group textarea {
                    width: 100%;
                    padding: 12px 15px;
                    border: 1px solid #e5e7eb;
                    border-radius: 8px;
                    font-size: 1rem;
                }
                .form-group input:focus,
                .form-group select:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: #2d6a4f;
                    box-shadow: 0 0 0 3px rgba(45, 106, 79, 0.1);
                }
                .form-group .error {
                    display: block;
                    margin-top: 5px;
                    color: #dc2626;
                    font-size: 0.85rem;
                }
                .success-message {
                    text-align: center;
                    padding: 40px 20px;
                }
                .success-message svg {
                    margin-bottom: 20px;
                }
                .success-message h4 {
                    margin: 0 0 10px;
                    color: #1f292d;
                }
                .success-message p {
                    margin: 0 0 20px;
                    color: #6b7280;
                }
                .faq-preview {
                    margin-top: 60px;
                }
                .faq-preview h3 {
                    text-align: center;
                    margin: 0 0 30px;
                    color: #1f292d;
                }
                .faq-preview-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 20px;
                }
                .faq-preview-card {
                    padding: 25px;
                    background: #f8faf8;
                    border-radius: 12px;
                    text-decoration: none;
                    color: inherit;
                    transition: all 0.3s;
                }
                .faq-preview-card:hover {
                    background: #2d6a4f;
                    color: white;
                    transform: translateY(-3px);
                }
                .faq-preview-card h4 {
                    margin: 0 0 10px;
                    color: #1f292d;
                }
                .faq-preview-card:hover h4 {
                    color: white;
                }
                .faq-preview-card p {
                    margin: 0;
                    color: #6b7280;
                    font-size: 0.9rem;
                }
                .faq-preview-card:hover p {
                    color: rgba(255, 255, 255, 0.9);
                }
            `}</style>
        </>
    );
}
