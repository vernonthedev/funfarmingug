'use client';

import Link from 'next/link';

export default function PrivacyPage() {
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
                        <h2 className="page-header__title">Privacy Policy</h2>
                        <ul className="thm-breadcrumb list-unstyled">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <span aria-hidden="true">/</span>
                            </li>
                            <li>Privacy Policy</li>
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

            <section className="policy-section section-space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="policy-content">
                                <h2>Privacy Policy</h2>
                                <p className="policy-last-updated">
                                    Last updated: January 1, 2024
                                </p>

                                <h3>1. Introduction</h3>
                                <p>
                                    Welcome to Fun Farming Uganda. We are
                                    committed to protecting your personal
                                    information and your right to privacy. This
                                    Privacy Policy explains how we collect, use,
                                    disclose, and safeguard your information
                                    when you visit our website, use our
                                    services, or interact with us in any way.
                                </p>

                                <h3>2. Information We Collect</h3>
                                <p>
                                    We may collect the following types of
                                    information:
                                </p>
                                <ul>
                                    <li>
                                        <strong>Personal Information:</strong>{' '}
                                        Name, email address, phone number,
                                        mailing address, and other information
                                        you provide when contacting us, booking
                                        activities, or subscribing to our
                                        newsletter.
                                    </li>
                                    <li>
                                        <strong>Booking Information:</strong>{' '}
                                        Details about your activity preferences,
                                        group size, dates, dietary requirements,
                                        and special requests.
                                    </li>
                                    <li>
                                        <strong>Payment Information:</strong>{' '}
                                        When you make payments for bookings, we
                                        process payment details through secure
                                        third-party payment processors.
                                    </li>
                                    <li>
                                        <strong>Technical Data:</strong> IP
                                        address, browser type, operating system,
                                        referring URLs, pages visited, and time
                                        spent on pages.
                                    </li>
                                    <li>
                                        <strong>Cookies and Tracking:</strong>{' '}
                                        We use cookies and similar technologies
                                        to enhance your experience and analyze
                                        site traffic.
                                    </li>
                                </ul>

                                <h3>3. How We Use Your Information</h3>
                                <p>
                                    We use your information for the following
                                    purposes:
                                </p>
                                <ul>
                                    <li>
                                        To process and manage your bookings and
                                        inquiries
                                    </li>
                                    <li>
                                        To send you confirmations, reminders,
                                        and updates about your activities
                                    </li>
                                    <li>
                                        To provide customer support and respond
                                        to your questions
                                    </li>
                                    <li>
                                        To send marketing communications (with
                                        your consent)
                                    </li>
                                    <li>
                                        To improve our website, services, and
                                        user experience
                                    </li>
                                    <li>
                                        To comply with legal obligations and
                                        protect our rights
                                    </li>
                                </ul>

                                <h3>4. Data Sharing and Disclosure</h3>
                                <p>
                                    We do not sell your personal information. We
                                    may share your information with:
                                </p>
                                <ul>
                                    <li>
                                        <strong>Service Providers:</strong>{' '}
                                        Payment processors, email service
                                        providers, and analytics partners who
                                        help us operate our business.
                                    </li>
                                    <li>
                                        <strong>Legal Requirements:</strong>{' '}
                                        When required by law, court order, or
                                        government regulation.
                                    </li>
                                    <li>
                                        <strong>Business Transfers:</strong> In
                                        the event of a merger, acquisition, or
                                        sale of assets.
                                    </li>
                                </ul>

                                <h3>5. Data Security</h3>
                                <p>
                                    We implement appropriate technical and
                                    organizational measures to protect your
                                    personal information against unauthorized
                                    access, alteration, disclosure, or
                                    destruction. However, no method of
                                    transmission over the Internet or electronic
                                    storage is 100% secure.
                                </p>

                                <h3>6. Your Rights</h3>
                                <p>
                                    Depending on your location, you may have the
                                    following rights:
                                </p>
                                <ul>
                                    <li>Access your personal data</li>
                                    <li>
                                        Request correction of inaccurate data
                                    </li>
                                    <li>Request deletion of your data</li>
                                    <li>Restrict or object to processing</li>
                                    <li>Data portability</li>
                                    <li>Withdraw consent at any time</li>
                                </ul>

                                <h3>7. Cookies</h3>
                                <p>
                                    Our website uses cookies to enhance your
                                    experience. You can control cookie
                                    preferences through your browser settings.
                                    Disabling cookies may affect certain
                                    functionality of our site.
                                </p>

                                <h3>8. Third-Party Links</h3>
                                <p>
                                    Our website may contain links to third-party
                                    websites. We are not responsible for the
                                    privacy practices of those sites. Please
                                    review their privacy policies before
                                    providing any personal information.
                                </p>

                                <h3>9. Children's Privacy</h3>
                                <p>
                                    Our services are not directed to children
                                    under 13. We do not knowingly collect
                                    personal information from children. If you
                                    believe we have collected information from a
                                    child, please contact us immediately.
                                </p>

                                <h3>10. Changes to This Policy</h3>
                                <p>
                                    We may update this Privacy Policy from time
                                    to time. We will notify you of any changes
                                    by posting the new policy on this page with
                                    an updated effective date.
                                </p>

                                <h3>11. Contact Us</h3>
                                <p>
                                    If you have questions about this Privacy
                                    Policy or our data practices, please contact
                                    us:
                                </p>
                                <ul>
                                    <li>Email: privacy@funfarminguganda.com</li>
                                    <li>Phone: +256 772 826 680</li>
                                    <li>
                                        Address: Butalangu Town Council,
                                        Nakaseke District, Uganda
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .policy-content {
                    line-height: 1.8;
                }
                .policy-last-updated {
                    color: #6b7280;
                    font-style: italic;
                    margin-bottom: 30px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid #e5e7eb;
                }
                .policy-content h2 {
                    font-size: 2rem;
                    color: #1f292d;
                    margin: 40px 0 20px;
                }
                .policy-content h3 {
                    font-size: 1.3rem;
                    color: #2d6a4f;
                    margin: 30px 0 15px;
                }
                .policy-content p {
                    margin-bottom: 15px;
                    color: #374151;
                }
                .policy-content ul {
                    margin: 15px 0 15px 20px;
                }
                .policy-content li {
                    margin-bottom: 8px;
                    color: #374151;
                }
                .policy-content strong {
                    color: #1f292d;
                }
            `}</style>
        </>
    );
}
