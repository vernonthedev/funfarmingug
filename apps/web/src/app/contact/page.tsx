'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import FAQSection from '@/app/components/sections/FAQSection';

export default function ContactPage() {
  return (
    <>
      <HeroSection
        subtitle="Contact Us"
        title="Get In Touch"
        description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        primaryButtonText="Send Message"
        primaryButtonHref="#contact-form"
      />
      <section className="vl-contact-area sp1" id="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="contact-info">
                <h3 className="sub-title">Contact Information</h3>
                <div className="space16"></div>
                <h2 className="title">Let's Start a Conversation</h2>
                <div className="space24"></div>
                <p>We're here to help you grow. Whether you have a question about our services, want to start a project, or just want to say hello.</p>
                <div className="space30"></div>
                <div className="contact-info-items">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <img src="/assets/img/icon/contact-icon(1).svg" alt="" />
                    </div>
                    <div className="contact-content">
                      <h4>Address</h4>
                      <p>Charabari, Shingra, Natore, Rajshahi, Bangladesh</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <img src="/assets/img/icon/contact-icon(2).svg" alt="" />
                    </div>
                    <div className="contact-content">
                      <h4>Phone</h4>
                      <p><a href="tel:+8801712345678">+880 1712345678</a><br /><a href="tel:+8801798743210">+880 1798743210</a></p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <img src="/assets/img/icon/contact-icon(3).svg" alt="" />
                    </div>
                    <div className="contact-content">
                      <h4>Email</h4>
                      <p><a href="mailto:cattlefarm@orgaanic.com">cattlefarm@orgaanic.com</a><br /><a href="mailto:support@orgaanicfarm.com">support@orgaanicfarm.com</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="contact-form-wrap">
                <form className="contact-form" action="#">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="name" placeholder="Your Name" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="email" name="email" placeholder="Your Email" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="subject" placeholder="Subject" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="tel" name="phone" placeholder="Phone Number" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea name="message" placeholder="Your Message" rows={5} required></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn-home6">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQSection />
    </>
  );
}