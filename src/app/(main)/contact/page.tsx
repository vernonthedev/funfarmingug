'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        subscribe: false,
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateEmail = (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

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
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
                subscribe: false,
            });
        }, 1500);
    };

    return (
        <>
            <style jsx>{`
                .modal {
                    display: none;
                    position: fixed;
                    z-index: 1;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    overflow: auto;
                    background-color: rgba(0, 0, 0, 0.4);
                }
                .modal.open {
                    display: block;
                }
                .modal-content {
                    background-color: #fefefe;
                    margin: 15% auto;
                    padding: 20px;
                    border: 1px solid #888;
                    width: 80%;
                    max-width: 500px;
                }
                .close {
                    color: #aaa;
                    float: right;
                    font-size: 28px;
                    font-weight: bold;
                    cursor: pointer;
                }
                .close:hover {
                    color: black;
                }
            `}</style>

            <div className="l-main">
                {/* Modal for success message */}
                <div
                    id="myModal"
                    className={`modal ${submitSuccess ? 'open' : ''}`}
                >
                    <div className="modal-content">
                        <span
                            className="close"
                            onClick={() => setSubmitSuccess(false)}
                        >
                            &times;
                        </span>
                        <p id="modalMessage">
                            Thank you for your message! We'll get back to you
                            soon.
                        </p>
                    </div>
                </div>

                <div className="u-cow-spot" data-pos="left right"></div>
                <div className="u-wrapper">
                    <div className="l-contain o-block">
                        <div className="l-double">
                            <div className="l-double__left">
                                <img
                                    className="o-duplex__image u-clip-path"
                                    data-id="clip-path-image-1"
                                    src="/img/gallery/funfarm_n27.png"
                                    alt="Main Yard Of Fun Farming Uganda"
                                />
                            </div>
                            <div className="l-double__right s-text">
                                <h1>Contact us</h1>
                                <p>
                                    Would you like more information about our
                                    activities or our approach? Take the bull by
                                    the horns and phone call, email us or check
                                    the
                                    <a href="/faqs">
                                        FREQUENTLY ASKED QUESTIONS
                                    </a>
                                </p>
                                <h3 className="o-contact__subheader">
                                    Fun Farming Uganda
                                </h3>
                                <div className="o-contact__datagrid">
                                    <div data-pos="left">
                                        <a
                                            href="tel:+256772826680"
                                            className="o-contact__link o-contact__phone"
                                        >
                                            +256 772 826 680
                                        </a>
                                        <a
                                            href="mailto:support@funfarminguganda.com"
                                            className="o-contact__link o-contact__mail"
                                        >
                                            support@funfarminguganda.com
                                        </a>
                                        <p className="u-spacing-mt4">
                                            NAKASEKE DISTRICT
                                        </p>
                                    </div>
                                    <div data-pos="right">
                                        <p>
                                            Follow us here for cool events and
                                            news
                                        </p>
                                        <ul className="o-contact__social">
                                            <li className="o-contact__channel linkedin">
                                                <a
                                                    className="o-contact__icon"
                                                    target="_blank"
                                                    title="Linkedin"
                                                    href="https://www.linkedin.com/company/funfarming/"
                                                    rel="noopener noreferrer"
                                                >
                                                    <svg width="22" height="22">
                                                        <use href="/img/social/linkedin.svg#linkedin"></use>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="o-contact__channel facebook">
                                                <a
                                                    className="o-contact__icon"
                                                    target="_blank"
                                                    title="Facebook"
                                                    href="https://www.facebook.com/funfarming"
                                                    rel="noopener noreferrer"
                                                >
                                                    <svg width="22" height="22">
                                                        <use href="/img/social/facebook.svg#facebook"></use>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="o-contact__channel instagram">
                                                <a
                                                    className="o-contact__icon"
                                                    target="_blank"
                                                    title="Instagram"
                                                    href="https://www.instagram.com/funfarming/"
                                                    rel="noopener noreferrer"
                                                >
                                                    <svg width="22" height="22">
                                                        <use href="/img/social/instagram.svg#instagram"></use>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="o-contact__channel youtube">
                                                <a
                                                    className="o-contact__icon"
                                                    target="_blank"
                                                    title="Youtube"
                                                    href="https://www.youtube.com/channel/#"
                                                    rel="noopener noreferrer"
                                                >
                                                    <svg width="22" height="22">
                                                        <use href="/img/social/youtube.svg#youtube"></use>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="o-contact__channel tiktok">
                                                <a
                                                    className="o-contact__icon"
                                                    target="_blank"
                                                    title="Tiktok"
                                                    href="https://www.tiktok.com/funfarming"
                                                    rel="noopener noreferrer"
                                                >
                                                    <svg width="22" height="22">
                                                        <use href="/img/social/tiktok.svg#tiktok"></use>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="u-color-primary--500 u-bg-neutral--0 u-overflow-hidden">
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
                        <div className="o-questions__left">
                            <div className="c-faq">
                                <h2 className="c-faq__title">
                                    <span>Frequently Asked Questions</span>
                                    <span className="c-faq__icon">
                                        <svg width="64" height="45">
                                            <use href="/img/icon-cow--question.svg#cow--question"></use>
                                        </svg>
                                    </span>
                                </h2>
                                <ul className="c-faq__list js-toggle">
                                    <li className="c-faq__item">
                                        <h3 className="c-faq__question js-toggle-switch">
                                            What clothes should I wear?
                                        </h3>
                                        <div
                                            className="c-faq__answer s-text js-toggle-content"
                                            hidden
                                        >
                                            <p>
                                                It is best to wear sporty
                                                clothes that are comfortable.
                                                We&apos;re a farm, so you
                                                don&apos;t have to dress up.
                                                Regular jeans are fine. You
                                                might get a little dirty due to
                                                grass or straw, for example. You
                                                certainly don&apos;t need to
                                                wear boots, sturdy shoes are
                                                sufficient to walk around our
                                                farm. High walking shoes are
                                                ideal for wet grass. In warm
                                                weather, provide extra dry
                                                clothes, because a water feature
                                                can be provided. Ultimately, it
                                                will be your cow colleagues who
                                                determine whether or not you
                                                brought dry clothes. ;-)
                                            </p>
                                        </div>
                                    </li>
                                    <li className="c-faq__item">
                                        <h3 className="c-faq__question js-toggle-switch">
                                            What is the difference between the
                                            Farm Expert Games and Farm Games?
                                        </h3>
                                        <div
                                            className="c-faq__answer s-text js-toggle-content"
                                            hidden
                                        >
                                            <p>
                                                Both programs are fun-oriented,
                                                coordinated by a great game
                                                supervisor, competitive,
                                                suitable for a broad target
                                                group (age, fitness,
                                                challenge,...) and always last
                                                (more than) 3 hours.
                                            </p>
                                            <p>
                                                The Farm Games include
                                                accessible thinking and doing
                                                assignments, ideal for a fun day
                                                out.
                                            </p>
                                            <p>
                                                The Farm Expert Games are more
                                                thoughtful, detailed thinking
                                                and doing assignments. You have
                                                to communicate and connect with
                                                each other a little more,
                                                although &apos;fun&apos; always
                                                comes first. Ideal for companies
                                                that attach importance to a
                                                stronger herd feeling.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="c-faq__item">
                                        <h3 className="c-faq__question js-toggle-switch">
                                            Can everyone participate in the
                                            activities?
                                        </h3>
                                        <div
                                            className="c-faq__answer s-text js-toggle-content"
                                            hidden
                                        >
                                            <p>
                                                The majority of the activities
                                                are suitable for everyone. Less
                                                sporty or less mobile people or
                                                pregnant women can also enjoy
                                                our activities. You can still
                                                decide at the moment to skip an
                                                activity as an individual.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="c-faq__item">
                                        <h3 className="c-faq__question js-toggle-switch">
                                            Can you also do something for
                                            children?
                                        </h3>
                                        <div
                                            className="c-faq__answer s-text js-toggle-content"
                                            hidden
                                        >
                                            <p>
                                                At some locations there is an
                                                offer for children. No
                                                activities are organized for
                                                mixed groups of adults and
                                                children. By children we mean
                                                -14 years.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="c-faq__item">
                                        <h3 className="c-faq__question js-toggle-switch">
                                            How many people do you need to be at
                                            least?
                                        </h3>
                                        <div
                                            className="c-faq__answer s-text js-toggle-content"
                                            hidden
                                        >
                                            <p>
                                                This depends on the activity.
                                                Unfortunately, we do not have
                                                activities for less than 10
                                                people. We do not recommend
                                                booking if the herd is smaller
                                                than 10 participants. (For Farm
                                                Expert Games it is 12). If you
                                                make a reservation with the
                                                minimum number of participants
                                                and someone falls ill, the
                                                activity can continue as normal.
                                                The stated minimum number of
                                                participants will always be
                                                invoiced, even if you come with
                                                fewer.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="c-faq__item">
                                        <h3 className="c-faq__question js-toggle-switch">
                                            What time do the activities start?
                                        </h3>
                                        <div
                                            className="c-faq__answer s-text js-toggle-content"
                                            hidden
                                        >
                                            <p>
                                                The activities at FarmFun do not
                                                have a fixed starting time.
                                                Everything depends on your
                                                wishes and our availability.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="c-faq__item">
                                        <h3 className="c-faq__question js-toggle-switch">
                                            Can we bring our own drinks to Fun
                                            Farming Uganda?
                                        </h3>
                                        <div
                                            className="c-faq__answer s-text js-toggle-content"
                                            hidden
                                        >
                                            <p>
                                                You are not supposed to bring
                                                your own drinks. The drinks are
                                                available on site at reasonable
                                                prices and will be included in
                                                the final invoice.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="c-faq__item">
                                        <h3 className="c-faq__question js-toggle-switch">
                                            What time do we have to register for
                                            the activities?
                                        </h3>
                                        <div
                                            className="c-faq__answer s-text js-toggle-content"
                                            hidden
                                        >
                                            <p>
                                                If you arrive fifteen minutes
                                                before the start of your
                                                activity, you will be plenty of
                                                time. You will find the booked
                                                hour in your confirmation email.
                                                Are any participants late? No
                                                problem. We will decide at the
                                                moment and after joint
                                                consultation whether we will
                                                start already or wait a little
                                                longer. This may affect the end
                                                time. Is that an issue? Report
                                                this to the game supervisor on
                                                site, so that he can take this
                                                into account as much as
                                                possible.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="c-faq__item">
                                        <h3 className="c-faq__question js-toggle-switch">
                                            How does the payment work?
                                        </h3>
                                        <div
                                            className="c-faq__answer s-text js-toggle-content"
                                            hidden
                                        >
                                            <p>
                                                After your booking has been
                                                processed internally, you will
                                                receive within 1 day; An advance
                                                invoice will be sent by email
                                                within 2 weeks. This amounts to
                                                50% of the expected invoice
                                                amount. The payment term is 14
                                                days after invoice. The advance
                                                amount must always be paid
                                                before the event date. You will
                                                receive the final invoice after
                                                the activity and you must also
                                                pay it within 14 days.
                                            </p>
                                            <p>
                                                As long as you don&apos;t
                                                receive an invoice, you
                                                don&apos;t have to pay anything.
                                            </p>
                                            <p>
                                                We currently only work via bank
                                                transfer, so no VISA, PayPal,
                                                MTN Mobile Money, Airtel Mobile
                                                Money...
                                            </p>
                                        </div>
                                    </li>
                                    <li className="c-faq__item">
                                        <h3 className="c-faq__question js-toggle-switch">
                                            What happens in rain or heat?
                                        </h3>
                                        <div
                                            className="c-faq__answer s-text js-toggle-content"
                                            hidden
                                        >
                                            <p>
                                                What about rain? Especially no
                                                worries. Each farm has
                                                sufficient indoor space. Not
                                                only for our animals, but also
                                                for the stray wildlife in your
                                                group. Our FarmFumbrellas give
                                                you sufficient protection when
                                                it rains.
                                            </p>
                                            <p>
                                                Is it very hot that day? We will
                                                also adjust the program then.
                                                For example, you can choose a
                                                water feature. Because our
                                                FarmFumbrellas may not provide
                                                enough protection here, it is
                                                best to bring a change of dry
                                                clothes.
                                            </p>
                                            <p>
                                                There is always plenty of drink
                                                available!
                                            </p>
                                        </div>
                                    </li>
                                    <li className="c-faq__item">
                                        <h3 className="c-faq__question js-toggle-switch">
                                            Is FunFarming accessible by public
                                            transport?
                                        </h3>
                                        <div
                                            className="c-faq__answer s-text js-toggle-content"
                                            hidden
                                        >
                                            <p>
                                                Rest Assured!, Its located a few
                                                kilometers away from Bukalangu
                                                Town Centre
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="o-questions__right s-text--on-dark">
                            <form onSubmit={handleSubmit} noValidate>
                                <h3 className="o-form__title">
                                    Any questions unanswered?
                                    <br />
                                    We are happy to answer them.
                                </h3>
                                <div className="o-form__body">
                                    <div className="o-form__row">
                                        <div
                                            className="o-form__field"
                                            data-size="6"
                                        >
                                            <div className="name c-form-element js-form-element">
                                                <label
                                                    className="c-form-element__label"
                                                    htmlFor="name"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    className="c-input c-input--clean"
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Enter your name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                                {errors.name && (
                                                    <p className="c-form-element__error js-form-element-error">
                                                        {errors.name}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="o-form__row">
                                        <div
                                            className="o-form__field"
                                            data-size="6"
                                        >
                                            <div className="email c-form-element js-form-element">
                                                <label
                                                    required
                                                    className="c-form-element__label"
                                                    htmlFor="email"
                                                >
                                                    E-mail
                                                </label>
                                                <input
                                                    className="c-input c-input--clean"
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Enter your email"
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
                                                    autoComplete="email"
                                                />
                                                {errors.email && (
                                                    <p className="c-form-element__error js-form-element-error">
                                                        {errors.email}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="o-form__row">
                                        <div
                                            className="o-form__field"
                                            data-size="6"
                                        >
                                            <div className="phone c-form-element js-form-element">
                                                <label
                                                    className="c-form-element__label"
                                                    htmlFor="phone"
                                                >
                                                    Telephone
                                                </label>
                                                <input
                                                    required
                                                    className="c-input c-input--clean"
                                                    type="text"
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="Enter phone number"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                                {errors.phone && (
                                                    <p className="c-form-element__error js-form-element-error">
                                                        {errors.phone}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="o-form__row">
                                        <div
                                            className="o-form__field"
                                            data-size="6"
                                        >
                                            <div className="form_message c-form-element js-form-element">
                                                <label
                                                    required
                                                    className="c-form-element__label"
                                                    htmlFor="form_message"
                                                >
                                                    Message
                                                </label>
                                                <textarea
                                                    className="c-input c-input--clean"
                                                    id="form_message"
                                                    name="message"
                                                    placeholder="Enter your message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                                {errors.message && (
                                                    <p className="c-form-element__error js-form-element-error">
                                                        {errors.message}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <select name="inquireType" hidden>
                                        <option
                                            value="General Inquiries"
                                            selected
                                        >
                                            General Inquiries
                                        </option>
                                    </select>
                                    <div className="o-form__row">
                                        <div className="subscribe_newsletter_2 c-form-element js-form-element">
                                            <p className="c-form-element__label">
                                                Subscribe to our Newsletter
                                            </p>
                                            <label
                                                className="c-checkbox"
                                                htmlFor="subscribe_newsletter_2"
                                            >
                                                <input
                                                    className="c-checkbox__input"
                                                    type="checkbox"
                                                    id="subscribe_newsletter_2"
                                                    name="subscribe"
                                                    value="1"
                                                    checked={formData.subscribe}
                                                    onChange={handleChange}
                                                />
                                                <span className="c-checkbox__text">
                                                    Yes, you can keep me
                                                    informed of nice news. I
                                                    know that I can always
                                                    unsubscribe very easily.
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="c-button c-button--big"
                                    disabled={isSubmitting}
                                >
                                    <span className="c-button__text">
                                        {isSubmitting ? 'Sending...' : 'Send'}
                                    </span>
                                    <i className="c-button__icon">
                                        <svg width="7" height="10">
                                            <use href="/img/icon-arrowRight.svg#arrowRight"></use>
                                        </svg>
                                    </i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="u-color-neutral--100 u-bg-secondary--900 u-overflow-hidden">
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
                <div className="u-bg-neutral--100 u-mb-neg-slant-height">
                    <div className="o-location u-spacing-pb12">
                        <div className="o-location__main u-spacing-mb2">
                            <div className="o-location__map">
                                <div className="c-location-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15957.569204460351!2d32.2763608!3d0.837297!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177c89c49c245505%3A0xb0d8551936f00965!2sFun%20Farming%20Uganda!5e0!3m2!1sen!2sug!4v1698927724672!5m2!1sen!2sug"
                                        width="800"
                                        height="450"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                            <li className="o-location__content s-text">
                                <h2>Our locations</h2>
                                <ul className="o-location__list">
                                    <li className="o-location__item">
                                        <div className="o-location__icon">
                                            <a href="https://funfarminguganda.com">
                                                <img
                                                    alt="farm icon"
                                                    src="/img/icon-farm-1.svg"
                                                />
                                            </a>
                                        </div>
                                        <div className="o-location__info">
                                            <h3>
                                                <a
                                                    className="o-location__link"
                                                    href="https://funfarminguganda.com"
                                                >
                                                    Fun Farming Uganda
                                                </a>
                                            </h3>
                                            <p>
                                                <a
                                                    className="o-location__link"
                                                    href="https://funfarminguganda.com"
                                                >
                                                    Butalangu Town Council
                                                </a>
                                            </p>
                                            <p>
                                                <a
                                                    className="o-location__link"
                                                    href="https://funfarminguganda.com"
                                                >
                                                    NAKASEKE DISTRICT
                                                </a>
                                            </p>
                                            <div className="o-location__route">
                                                <a
                                                    className="c-text-button"
                                                    href="#"
                                                >
                                                    <span className="c-text-button__text">
                                                        Plan route
                                                    </span>
                                                    <i className="c-text-button__icon">
                                                        <svg
                                                            width="7"
                                                            height="10"
                                                        >
                                                            <use href="/img/icon-arrowRight.svg#arrowRight"></use>
                                                        </svg>
                                                    </i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
