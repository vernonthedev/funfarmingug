'use client';

import Link from 'next/link';

const faqs = [
  { question: 'What services do you offer?', answer: 'We offer a comprehensive range of gardening and landscaping services including lawn care, garden maintenance, landscape design, tree and shrub care, irrigation systems, fertilization, pest control, seasonal cleanups, and more.' },
  { question: 'Do you provide free estimates?', answer: 'Yes, we offer free, no-obligation estimates for all our services. Our team will visit your property, assess your needs, and provide a detailed quote.' },
  { question: 'Are you licensed and insured?', answer: 'Absolutely. We are fully licensed, bonded, and insured for your protection and peace of mind. Our team members are trained professionals with certifications in their respective areas.' },
  { question: 'What areas do you service?', answer: 'We serve the greater Kampala area including Entebbe, Jinja, Mukono, Wakiso, and surrounding communities. Contact us to confirm if we service your specific location.' },
  { question: 'How often should I have my lawn mowed?', answer: 'During the growing season, we recommend weekly mowing. In cooler months, bi-weekly may be sufficient. The frequency depends on grass type, weather, and desired appearance.' },
  { question: 'Do you use organic or chemical treatments?', answer: 'We offer both organic and conventional treatment options. During your consultation, we\'ll discuss your preferences and recommend the best approach for your property.' },
  { question: 'What is your scheduling process?', answer: 'We offer flexible scheduling including weekly, bi-weekly, monthly, and seasonal services. We\'ll work with you to create a schedule that fits your needs and budget.' },
  { question: 'How do I pay for services?', answer: 'We accept multiple payment methods including cash, mobile money, bank transfer, and major credit cards. We also offer convenient monthly billing for recurring services.' },
  { question: 'What happens if it rains on my service day?', answer: 'Our team monitors weather conditions closely. If rain prevents service, we\'ll reschedule for the next available day. You\'ll be notified of any changes.' },
  { question: 'Can I request specific team members?', answer: 'While we try to accommodate preferences, team assignments are based on scheduling and expertise. All our team members are highly trained professionals.' },
  { question: 'Do you offer commercial services?', answer: 'Yes, we provide comprehensive commercial landscaping and maintenance services for businesses, offices, hotels, schools, and other commercial properties.' },
  { question: 'How do I get started?', answer: 'Simply contact us via phone, email, or our online form. We\'ll schedule a free consultation to assess your property and discuss your needs.' },
];

export default function FAQsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: 'url(/assets/images/backgrounds/page-header.jpg)' }}>
        <div className="container">
          <div className="page-header__inner">
            <h2 className="page-header__title">Frequently Asked Questions</h2>
            <ul className="thm-breadcrumb list-unstyled">
              <li><Link href="/">Home</Link></li>
              <li><span aria-hidden="true">/</span></li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
        <div className="page-header__shape-1">
          <img src="/assets/images/shapes/page-header-1-1.png" alt="shape" />
        </div>
        <div className="page-header__shape-2">
          <img src="/assets/images/shapes/page-header-1-2.png" alt="shape" />
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faq-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="section-title section-title__left">
                <span className="section-title__tagline">FAQs</span>
                <h2 className="section-title__title">Frequently Asked Questions</h2>
              </div>
              <div className="faq-one__accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="accordion-item">
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded={index === 0} aria-controls={`collapse${index}`}>
                        {faq.question}
                      </button>
                    </h2>
                    <div id={`collapse${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} aria-labelledby={`heading${index}`} data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-4">
              <div className="faq-one__sidebar">
                <div className="faq-one__contact">
                  <div className="faq-one__contact__icon">
                    <i className="icon-phone"></i>
                  </div>
                  <div className="faq-one__contact__content">
                    <h5 className="faq-one__contact__title">Have More Questions?</h5>
                    <p className="faq-one__contact__text">Can't find the answer you're looking for? Our friendly team is here to help.</p>
                    <a href="tel:+256700000000" className="faq-one__contact__phone">+256 700 000 000</a>
                  </div>
                </div>
                <div className="faq-one__contact">
                  <div className="faq-one__contact__icon">
                    <i className="icon-email"></i>
                  </div>
                  <div className="faq-one__contact__content">
                    <h5 className="faq-one__contact__title">Email Us</h5>
                    <p className="faq-one__contact__text">Send us a message and we'll get back to you within 24 hours.</p>
                    <a href="mailto:info@funfarminguganda.com" className="faq-one__contact__phone">info@funfarminguganda.com</a>
                  </div>
                </div>
                <div className="faq-one__cta">
                  <Link href="/contact" className="garlon-btn w-100"><span>Contact Us</span> <i className="icon-angle-small-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories FAQ */}
      <section className="faq-two">
        <div className="container">
          <div className="section-title section-title__center">
            <span className="section-title__tagline">Service FAQs</span>
            <h2 className="section-title__title">Questions About Our Services</h2>
          </div>
          <div className="row gutter-y-30">
            {[
              { icon: 'icon-gardener', title: 'Lawn Care FAQs', count: '8 Questions', href: '/faqs/lawn-care' },
              { icon: 'icon-park', title: 'Pest Control FAQs', count: '6 Questions', href: '/faqs/pest-control' },
              { icon: 'icon-gardening', title: 'Tree & Shrub FAQs', count: '7 Questions', href: '/faqs/tree-shrub' },
              { icon: 'icon-watering', title: 'Irrigation FAQs', count: '5 Questions', href: '/faqs/irrigation' },
              { icon: 'icon-design', title: 'Design FAQs', count: '6 Questions', href: '/faqs/design' },
              { icon: 'icon-maintenance', title: 'Maintenance FAQs', count: '9 Questions', href: '/faqs/maintenance' },
            ].map((category, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="faq-two__item">
                  <div className="faq-two__icon">
                    <i className={category.icon}></i>
                  </div>
                  <div className="faq-two__content">
                    <h5 className="faq-two__title"><Link href={category.href}>{category.title}</Link></h5>
                    <p className="faq-two__text">{category.count}</p>
                  </div>
                  <div className="faq-two__btn">
                    <Link href={category.href} className="garlon-btn garlon-btn--sm"><span>View All</span> <i className="icon-angle-small-right"></i></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-one">
        <div className="container">
          <div className="cta-one__inner" style={{ backgroundImage: 'url(/assets/images/backgrounds/cta-1-1.jpg)' }}>
            <div className="cta-one__shape">
              <img src="/assets/images/shapes/cta-1-1.png" alt="shape" />
            </div>
            <div className="row align-items-center">
              <div className="col-xl-8">
                <div className="cta-one__content">
                  <h2 className="cta-one__title">Still Have Questions?</h2>
                  <p className="cta-one__text">Our expert team is ready to answer any questions you may have about our services, pricing, or scheduling.</p>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="cta-one__btn">
                  <Link href="/contact" className="garlon-btn garlon-btn--white"><span>Ask Us Anything</span> <i className="icon-angle-small-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}