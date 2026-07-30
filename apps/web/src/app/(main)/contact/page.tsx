'use client';

import Link from 'next/link';
import { useState } from 'react';

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

            <div className="vl-hero-inner-area parallaxie" style={{ backgroundImage: 'url(/assets/img/hero/about-us-inr-herothumb.png)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="inner-hero-info">
                                <h2>Contact Us</h2>
                                <div className="space16"></div>
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li><img src="/assets/img/icon/arrow-right-inner.svg" alt="" /></li>
                                    <li><Link className="aboutus_titlefix" href="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vl-contact-inr-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="contact2-form-area">
                                <h2 className="title">Get In Touch With Us</h2>
                                <div className="space16"></div>
                                <p className="pera_text">
                                    Have a question or want to book a visit? Reach out and our team will get back to you within 24 hours.
                                    Whether you are a customer, a partner, or a fellow nature lover, feel free to reach out. Our team is always here to help.
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
                                        <div className="col-xl-6 col-lg-6 mt-20_brk">
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
                                        <div className="col-xl-6 col-lg-6 mt-20_brk">
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
                                                placeholder="Type your message..."
                                                value={formData.message}
                                                onChange={handleChange}
                                            ></textarea>
                                            {errors.message && <span className="error">{errors.message}</span>}
                                        </div>
                                    </div>
                                    <div className="space28"></div>
                                    <div className="contact2-form-bottom">
                                        <h3><img src="/assets/img/icon/tick-hm2.svg" alt="" />Purity In Every Grain</h3>
                                        <div className="btn">
                                            <button type="submit" className="btn-home6" disabled={isSubmitting}>
                                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="vl-contact2-info">
                                <div className="contact2-info-mobile contact-inr-fix">
                                    <div className="contact2-mobile-content">
                                        <div className="contact2-mobile-logo">
                                            <a href="/contact">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none">
                                                    <path
                                                        d="M18.1569 28.4887C17.5788 29.03 16.8059 29.3327 16.0015 29.3327C15.1971 29.3327 14.4243 29.03 13.846 28.4887C8.55069 23.5007 1.45435 17.9285 4.91503 9.8389C6.78617 5.4649 11.2778 2.66602 16.0015 2.66602C20.7252 2.66602 25.2168 5.4649 27.088 9.8389C30.5443 17.9184 23.4653 23.5179 18.1569 28.4887Z"
                                                        stroke="white" strokeWidth="1.5" />
                                                    <path
                                                        d="M20.6673 14.6667C20.6673 17.244 18.578 19.3333 16.0007 19.3333C13.4233 19.3333 11.334 17.244 11.334 14.6667C11.334 12.0893 13.4233 10 16.0007 10C18.578 10 20.6673 12.0893 20.6673 14.6667Z"
                                                        stroke="white" strokeWidth="1.5" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="contact2-mobile-text">
                                            <h3><a href="/contact">Location</a></h3>
                                            <div className="space16"></div>
                                            <ul>
                                                <li><a href="/contact">Butalangu, Nakaseke District, Uganda</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="contact2-mobile-content mt-30">
                                        <div className="contact2-mobile-logo">
                                            <a href="tel:+256700000000">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none">
                                                    <path
                                                        d="M2.66602 6.66602L11.8834 11.8988C15.2509 13.8107 16.7477 13.8107 20.1153 11.8988L29.3327 6.66602"
                                                        stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                                                    <path
                                                        d="M13.9993 26.0006C13.3776 25.9925 12.7551 25.9806 12.1311 25.9649C7.93312 25.8594 5.83412 25.8066 4.32596 24.2918C2.81779 22.777 2.7742 20.7322 2.68704 16.6425C2.65902 15.3274 2.659 14.0203 2.68703 12.7052C2.7742 8.61549 2.81778 6.57062 4.32595 5.05584C5.83412 3.54105 7.93312 3.48829 12.1311 3.38276C14.7184 3.31772 17.2803 3.31773 19.8676 3.38277C24.0656 3.4883 26.1645 3.54108 27.6727 5.05586C29.1809 6.57064 29.2245 8.6155 29.3116 12.7052C29.3245 13.3107 29.3315 13.596 29.3326 14.0007"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path
                                                        d="M25.334 22.666C25.334 23.7705 24.4385 24.666 23.334 24.666C22.2295 24.666 21.334 23.7705 21.334 22.666C21.334 21.5615 22.2295 20.666 23.334 20.666C24.4385 20.666 25.334 21.5615 25.334 22.666ZM25.334 22.666V23.3327C25.334 24.4372 26.2295 25.3327 27.334 25.3327C28.4385 25.3327 29.334 24.4372 29.334 23.3327V22.666C29.334 19.3523 26.6477 16.666 23.334 16.666C20.0203 16.666 17.334 19.3523 17.334 22.666C17.334 25.9797 20.0203 28.666 23.334 28.666"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
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
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                                    fill="none">
                                                    <path d="M18.666 4V8M25.3327 6.66667L22.666 9.33333M27.9993 13.3333H23.9993" stroke="white"
                                                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path
                                                        d="M12.211 7.61631L11.6741 6.40833C11.3231 5.61851 11.1476 5.22357 10.8851 4.92135C10.5561 4.54259 10.1273 4.26392 9.64756 4.11713C9.26477 4 8.83261 4 7.96828 4C6.70388 4 6.07167 4 5.54097 4.24305C4.91583 4.52936 4.35124 5.15104 4.12631 5.8008C3.93535 6.35239 3.99004 6.91924 4.09944 8.05293C5.26388 20.1203 11.8797 26.7361 23.9471 27.9005C25.0808 28.01 25.6476 28.0647 26.1992 27.8737C26.8489 27.6488 27.4707 27.0841 27.7569 26.4591C28 25.9283 28 25.2961 28 24.0317C28 23.1673 28 22.7352 27.8829 22.3524C27.7361 21.8727 27.4575 21.4439 27.0787 21.1149C26.7764 20.8524 26.3815 20.6769 25.5916 20.3259L24.3837 19.7889C23.5283 19.4088 23.1007 19.2188 22.666 19.1775C22.2501 19.1379 21.8308 19.1963 21.4415 19.3479C21.0347 19.5063 20.6751 19.8059 19.956 20.4051C19.2401 21.0016 18.8823 21.2999 18.4449 21.4596C18.0573 21.6012 17.5448 21.6537 17.1364 21.5935C16.6759 21.5256 16.3231 21.3372 15.6177 20.9601C13.4229 19.7873 12.2127 18.5771 11.0398 16.3823C10.6629 15.6769 10.4744 15.3241 10.4065 14.8636C10.3463 14.4552 10.3988 13.9427 10.5404 13.5551C10.7002 13.1177 10.9984 12.7598 11.5949 12.044C12.1942 11.3249 12.4938 10.9654 12.6522 10.5585C12.8038 10.1693 12.8621 9.74987 12.8226 9.33397C12.7813 8.89936 12.5912 8.47168 12.211 7.61631Z"
                                                        stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
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