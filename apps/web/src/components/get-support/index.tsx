import Link from 'next/link';

const SUPPORT_NUMBERS = [
    { label: '+256 772 826 680', href: 'tel:+256772826680' },
    { label: '+256 700 462 477', href: 'tel:+256700462477' },
    { label: '+256 770 640 220', href: 'tel:+256770640220' },
];

const SUPPORT_SERVICES = [
    {
        icon: <i className="fa-solid fa-headset" />,
        title: 'Questions & Inquiries',
        text: 'Got a question about our activities, tours or products? Our team is ready to help.',
    },
    {
        icon: <i className="fa-solid fa-clipboard-check" />,
        title: 'Bookings & Reservations',
        text: 'Planning a visit, team building event or a party? Contact us to arrange your program.',
    },
    {
        icon: <i className="fa-solid fa-circle-comment" />,
        title: 'Follow Up & Support',
        text: 'After your visit we remain at your disposal for any further inquiries or feedback.',
    },
];

export function GetSupportPage() {
    return (
        <div className="main-content pb-0 pt-93">
            <section className="s-support">
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
                                    Contact Fun Farming Support Team
                                </p>
                                <p className="title text-anime-style-1">
                                    For Support Please Contact Us Below!
                                </p>
                                <p className="text">
                                    Thanks for checking out the Fun Farming
                                    Uganda website! Please kindly contact the
                                    phone numbers below for further inquiries
                                    and follow up.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="support-services">
                                <div className="row">
                                    {SUPPORT_SERVICES.map((s, i) => (
                                        <div
                                            className="col-lg-4 col-md-6"
                                            key={i}
                                        >
                                            <div
                                                className="box-icon ic-hover wow fadeInUp"
                                                data-wow-delay={`${i * 0.1}s`}
                                            >
                                                <div className="icon mb-29 hover-icon style-circle">
                                                    {s.icon}
                                                </div>
                                                <p className="caption fw-6 mb-17 font-worksans">
                                                    {s.title}
                                                </p>
                                                <p className="text font-nunito">
                                                    {s.text}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-50">
                        <div className="col-lg-12">
                            <div className="support-contact-box text-center">
                                <div className="heading-section style-4 mb-25">
                                    <p className="sub-title">Need Help?</p>
                                    <p className="title text-anime-style-1">
                                        Reach Our Admins
                                    </p>
                                </div>
                                <ul className="support-phone-list">
                                    {SUPPORT_NUMBERS.map((n) => (
                                        <li key={n.href}>
                                            <i className="fa-solid fa-phone"></i>
                                            <a href={n.href}>{n.label}</a>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="mailto:admin@funfarming.org"
                                    className="support-email"
                                >
                                    <i className="fa-solid fa-envelope"></i>
                                    admin@funfarming.org
                                </a>
                                <p className="text mt-15">
                                    Kind regards,
                                    <br />
                                    <strong>Fun Farming Uganda</strong>
                                </p>
                                <div className="bot mt-30">
                                    <Link href="/contact-us" className="tf-btn">
                                        <span className="text-style">
                                            Contact Us Today
                                        </span>
                                        <div className="icon">
                                            <i className="icon-arrow_right"></i>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
