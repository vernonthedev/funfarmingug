'use client';

import Link from 'next/link';
import { useState } from 'react';
import PageHeader from '@/components/sections/PageHeader';
import CtaSection from '@/components/sections/CtaSection';

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

            <PageHeader
                title="Contact Us"
                bgImage="/assets/images/backgrounds/page-header-bg-1-1.jpg"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Contact' },
                ]}
            />

            <section className="contact-one contact-one--two section-space">
                <div className="container">
                    <div className="row gutter-y-30">
                        <div className="col-lg-6">
                            <div className="contact-one__top">
                                <div className="sec-title text-left">
                                    <div className="sec-title__tagline">
                                        <img
                                            src="/assets/images/shapes/sec-title-s-1-1.png"
                                            alt="shape"
                                        />
                                        GET IN TOUCH
                                    </div>
                                    <h3 className="sec-title__title">
                                        Have Questions? We&apos;re Here to Help
                                    </h3>
                                </div>
                                <p className="contact-one__top__text">
                                    Would you like more information about our
                                    activities or approach? Take the bull by the
                                    horns — give us a call, send an email, or
                                    check our FAQ.
                                </p>
                            </div>
                            <div className="contact-one__content">
                                <form
                                    className="form-one"
                                    onSubmit={handleSubmit}
                                    noValidate
                                >
                                    <div className="form-one__group">
                                        <div className="form-one__control form-one__control--full">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name *"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-one__control">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email *"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-one__control">
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-one__control">
                                            <input
                                                type="text"
                                                name="subject"
                                                placeholder="Subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-one__control form-one__control--full">
                                            <textarea
                                                name="message"
                                                placeholder="Your Message *"
                                                value={formData.message}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                        {errors.name && (
                                            <p className="form-one__error">
                                                {errors.name}
                                            </p>
                                        )}
                                        {errors.email && (
                                            <p className="form-one__error">
                                                {errors.email}
                                            </p>
                                        )}
                                        {errors.message && (
                                            <p className="form-one__error">
                                                {errors.message}
                                            </p>
                                        )}
                                        <div className="form-one__control form-one__control--full">
                                            <button
                                                type="submit"
                                                className="garlon-btn"
                                                disabled={isSubmitting}
                                            >
                                                <span>
                                                    {isSubmitting
                                                        ? 'Sending...'
                                                        : 'SEND MESSAGE'}
                                                </span>
                                                <i className="fas fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-one__thumb">
                                <div className="contact-one__thumb__img">
                                    <img
                                        src="/webimgs/fun-farm-image.jpg"
                                        alt="Fun Farming Uganda"
                                        style={{ width: '100%', borderRadius: '12px' }}
                                    />
                                </div>
                                <div className="contact-one__thumb__shape">
                                    <div className="contact-one__thumb__shape__box"></div>
                                    <a href="/" className="logo">
                                        <img
                                            src="/assets/images/logo-light.png"
                                            alt="Fun Farming Uganda"
                                        />
                                    </a>
                                    <img
                                        src="/assets/images/shapes/border-color.png"
                                        alt=""
                                        className="contact-one__thumb__shape_two"
                                    />
                                    <a
                                        href="tel:+256772826680"
                                        className="contact-one__thumb__shape_call"
                                    >
                                        <i className="icon-phone-call"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-one__shape">
                    <img
                        src="/assets/images/shapes/contact-tree.png"
                        alt="shape"
                    />
                </div>
            </section>

            <section className="contact-one section-space">
                <div className="container">
                    <div className="row gutter-y-30">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-one__info">
                                <div className="contact-one__icon">
                                    <i className="icon-phone-call"></i>
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>
                                        <a href="tel:+256772826680">
                                            +256 772 826 680
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-one__info">
                                <div className="contact-one__icon">
                                    <i className="icon-email"></i>
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <p>
                                        <a href="mailto:info@funfarminguganda.com">
                                            info@funfarminguganda.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-one__info">
                                <div className="contact-one__icon">
                                    <i className="icon-map-pin"></i>
                                </div>
                                <div>
                                    <h4>Address</h4>
                                    <p>
                                        Nakaseke District, Butalangu Province,
                                        Uganda
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CtaSection
                icon="icon-leaf"
                title="Ready to Get in Touch?"
                text="Fill out the form or give us a call. We look forward to hearing from you!"
                buttonLabel="Contact Us"
                buttonHref="/contact"
            />
        </>
    );
}