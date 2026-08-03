import { SITE } from '@/lib/site';

const SOCIALS = [
    {
        label: 'LinkedIn',
        icon: 'fa-brands fa-linkedin-in',
        href: 'https://www.linkedin.com/company/funfarming/',
    },
    {
        label: 'Facebook',
        icon: 'fa-brands fa-facebook-f',
        href: 'https://www.facebook.com/funfarming',
    },
    {
        label: 'Instagram',
        icon: 'fa-brands fa-instagram',
        href: 'https://www.instagram.com/funfarming/',
    },
    {
        label: 'YouTube',
        icon: 'fa-brands fa-youtube',
        href: 'https://www.youtube.com/channel/#',
    },
    {
        label: 'TikTok',
        icon: 'fa-brands fa-tiktok',
        href: 'https://www.tiktok.com/funfarming',
    },
];

export function ContactUsPage() {
    return (
        <div className="main-content pt-0 pb-0 page-contact-us">
            <section className="s-contact-us style-2 bg-white pt-118 pb-88">
                <div className="section-wrap">
                    <div className="tf-container w-1290">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="content-left">
                                    <div className="image mb-30">
                                        <img
                                            src="/images/funfarm/funfarm_n27.png"
                                            alt="Main Yard Of Fun Farming Uganda"
                                            className="img lazyload"
                                        />
                                    </div>
                                    <ul className="contact-list">
                                        <li
                                            className="wow fadeInUp"
                                            data-wow-duration="1.4s"
                                        >
                                            <div className="icon style-circle">
                                                <i className="fa-solid fa-location-dot"></i>
                                            </div>
                                            <div className="infor">
                                                <p className="title">
                                                    Farm Address
                                                </p>
                                                <p className="text">
                                                    Butalangu Town Council,
                                                    <br />
                                                    Nakaseke District, Uganda
                                                </p>
                                            </div>
                                        </li>
                                        <li
                                            className="wow fadeInUp"
                                            data-wow-duration="1.4s"
                                        >
                                            <div className="icon style-circle">
                                                <i className="fa-solid fa-address-book"></i>
                                            </div>
                                            <div className="infor">
                                                <p className="title">
                                                    Contact Us
                                                </p>
                                                <p className="text">
                                                    {SITE.email} <br />
                                                    Call Us 24/7: {SITE.phone}
                                                </p>
                                            </div>
                                        </li>
                                        <li
                                            className="wow fadeInUp"
                                            data-wow-duration="1.4s"
                                        >
                                            <div className="icon style-circle">
                                                <i className="fa-solid fa-clock"></i>
                                            </div>
                                            <div className="infor">
                                                <p className="title">
                                                    Working Hours
                                                </p>
                                                <p
                                                    className="text"
                                                    dangerouslySetInnerHTML={{
                                                        __html: SITE.workingHours,
                                                    }}
                                                />
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="wg-social style-1 mt-30">
                                        <ul className="list-social">
                                            {SOCIALS.map((s) => (
                                                <li key={s.label}>
                                                    <a
                                                        href={s.href}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        aria-label={s.label}
                                                    >
                                                        <i className={s.icon}></i>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="content-section">
                                    <div className="heading-section has-text mb-50">
                                        <p className="sub-title">
                                            Take The Bull By The Horns
                                        </p>
                                        <p className="title wow fadeInUp" data-wow-delay="0s">
                                            Contact Us Today!
                                        </p>
                                        <p className="text">
                                            Would you like more information about
                                            our activities or our approach? Call,
                                            email us or check the frequently asked
                                            questions. We will reply within 24
                                            hours via email.
                                        </p>
                                        <div className="img-item">
                                            <img
                                                className="tf-animate-1"
                                                src="/images/item/rice-plant-2.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <form
                                        id="contactform"
                                        method="post"
                                        action="#"
                                        className="form-send-message style-2"
                                    >
                                        <div className="cols style-2 mb-15">
                                            <fieldset>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Name*"
                                                    required
                                                />
                                            </fieldset>
                                            <fieldset>
                                                <input
                                                    type="email"
                                                    className="form-control email"
                                                    id="mail"
                                                    name="mail"
                                                    placeholder="Email*"
                                                    required
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="cols style-2 mb-15">
                                            <fieldset>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="Phone*"
                                                    required
                                                />
                                            </fieldset>
                                            <fieldset>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="subject"
                                                    name="subject"
                                                    placeholder="Subject"
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="cols out-mb-24 mb-15">
                                            <fieldset>
                                                <textarea
                                                    className="form-control"
                                                    id="message"
                                                    name="message"
                                                    rows={5}
                                                    placeholder="Message"
                                                ></textarea>
                                            </fieldset>
                                        </div>
                                        <div className="group-btn style-3">
                                            <a className="tf-btn full scale-40" href="#">
                                                <span className="text-style">
                                                    Send Message
                                                </span>
                                                <div className="icon">
                                                    <i className="icon-arrow_right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="box-map">
                <iframe
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15957.569204460351!2d32.2763608!3d0.837297!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177c89c49c245505%3A0xb0d8551936f00965!2sFun%20Farming%20Uganda!5e0!3m2!1sen!2sug!4v1698927724672!5m2!1sen!2sug"
                    width="100%"
                    height="475"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Fun Farming Uganda location"
                ></iframe>
            </div>
        </div>
    );
}