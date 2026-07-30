'use client';

import Link from 'next/link';
import { useState } from 'react';
import PageHeader from '@/components/sections/PageHeader';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateEmail = (email: string) =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const target = e.target as HTMLInputElement;
        const { name, value } = target;
        setFormData((prev) => ({ ...prev, [name]: value }));
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
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });
        }, 1500);
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
                                    className="btn-home6"
                                    onClick={() => setSubmitSuccess(false)}
                                >
                                    Got it
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <PageHeader
                title="Contact Us"
                bgImage="/assets/img/hero/about-us-inr-herothumb.png"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Contact' },
                ]}
            />

            <div className="vl-contact-inr-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="contact2-form-area">
                                <h2 className="title">Get In Touch With Us</h2>
                                <div className="space16"></div>
                                <p className="pera_text">
                                    Have a question or want to book a visit? Reach out and our team will get back to you within 24 hours.
                                </p>
                                <div className="space32"></div>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                            {errors.name && <span className="error">{errors.name}</span>}
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                            {errors.email && <span className="error">{errors.email}</span>}
                                        </div>
                                        <div className="space24"></div>
                                        <div className="col-xl-6 col-lg-6">
                                            <input
                                                type="text"
                                                name="phone"
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <input
                                                type="text"
                                                name="subject"
                                                placeholder="Subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="space24"></div>
                                        <div className="col-xl-12">
                                            <textarea
                                                name="message"
                                                rows={5}
                                                placeholder="Your Message"
                                                value={formData.message}
                                                onChange={handleChange}
                                            ></textarea>
                                            {errors.message && <span className="error">{errors.message}</span>}
                                        </div>
                                    </div>
                                </form>
                                <div className="space28"></div>
                                <div className="contact2-form-bottom">
                                    <h3>
                                        <img src="/assets/img/icon/tick-hm2.svg" alt="" />
                                        Fun Farming Uganda
                                    </h3>
                                    <div className="btn">
                                        <button type="submit" className="btn-home6" disabled={isSubmitting}>
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="vl-contact2-info">
                                <div className="contact2-info-mobile contact-inr-fix">
                                    <div className="contact2-mobile-content">
                                        <div className="contact2-mobile-logo">
                                            <a href="/#">
                                                <i className="fa-solid fa-location-dot"></i>
                                            </a>
                                        </div>
                                        <div className="contact2-mobile-text">
                                            <h3><a href="/#">Location</a></h3>
                                            <div className="space16"></div>
                                            <ul>
                                                <li><a href="/#">Butalangu, Nakaseke District, Uganda</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="contact2-mobile-content mt-30">
                                        <div className="contact2-mobile-logo">
                                            <a href="tel:+256700000000">
                                                <i className="fa-solid fa-phone"></i>
                                            </a>
                                        </div>
                                        <div className="contact2-mobile-text">
                                            <h3><a href="tel:+256700000000">Phone</a></h3>
                                            <div className="space16"></div>
                                            <ul>
                                                <li><a href="tel:+256700000000">+256 700 000 000</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="contact2-mobile-content mt-30">
                                        <div className="contact2-mobile-logo">
                                            <a href="mailto:info@funfarminguganda.com">
                                                <i className="fa-regular fa-envelope"></i>
                                            </a>
                                        </div>
                                        <div className="contact2-mobile-text">
                                            <h3><a href="mailto:info@funfarminguganda.com">Email Us</a></h3>
                                            <div className="space16"></div>
                                            <ul>
                                                <li><a href="mailto:info@funfarminguganda.com">info@funfarminguganda.com</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="contact-box-inr-shape">
                                        <img src="/assets/img/contact/contact-box-inr-shape.png" alt="" />
                                    </div>
                                </div>
                                <div className="vl-contact2-banner mt-30">
                                    <img src="/assets/img/contact/contact2-thumb.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
