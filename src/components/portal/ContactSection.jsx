import React, { useState } from 'react';
import { CHURCH_CONTACT_INFO } from '../../data/churchContent.ts';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="section contact-portal-section section-soft" id="contact">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">Parish Rectory &amp; Clergy Office</p>
          <h2>Contact &amp; Visit Us</h2>
          <p>
            Have a question, need pastoral prayer, or planning a first visit? We are here to welcome you with open arms.
          </p>
        </div>

        <div className="contact-portal-grid">
          {/* Contact Details Card */}
          <div className="contact-info-panel">
            <h3>Parish Sanctuary &amp; Office</h3>
            <p className="contact-info-lead">
              Holy Name of Jesus &amp; Saint Mary Ethiopian Orthodox Tewahedo Church of Las Vegas, NV
            </p>

            <div className="contact-details-list">
              <div className="contact-item">
                <span className="contact-item-icon">📍</span>
                <div>
                  <strong>Sanctuary Address</strong>
                  <p>{CHURCH_CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-item-icon">📞</span>
                <div>
                  <strong>Phone / Parish Office</strong>
                  <p>{CHURCH_CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-item-icon">✉</span>
                <div>
                  <strong>Email Inquiry</strong>
                  <p>{CHURCH_CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-item-icon">⏱</span>
                <div>
                  <strong>Liturgical &amp; Office Hours</strong>
                  <p>{CHURCH_CONTACT_INFO.officeHours}</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-item-icon">✝</span>
                <div>
                  <strong>Parish Administration</strong>
                  <p>{CHURCH_CONTACT_INFO.seniorPriest}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-panel">
            {sent ? (
              <div className="contact-sent-box">
                <span className="sent-glyph">✓</span>
                <h3>Message Received</h3>
                <p>
                  Thank you, <strong>{formState.name}</strong>. Your inquiry has been forwarded to the Parish Office and Clergy. We will respond within 24 to 48 hours.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    setSent(false);
                    setFormState({
                      name: '',
                      email: '',
                      phone: '',
                      subject: 'General Inquiry',
                      message: '',
                    });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3>Send a Message or Prayer Request</h3>

                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Deacon Michael"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone Number</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="(702) 000-0000"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-subject">Topic / Purpose</label>
                    <select
                      id="contact-subject"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Pastoral Prayer Request">Pastoral Prayer Request</option>
                      <option value="Baptism or Wedding Inquiry">Baptism or Wedding Inquiry</option>
                      <option value="Sunday School Registration">Sunday School Registration</option>
                      <option value="Building Fund Sponsorship">Building Fund Sponsorship</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-msg">Your Message *</label>
                  <textarea
                    id="contact-msg"
                    rows={4}
                    required
                    placeholder="Write your note, question, or prayer petition here..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Send Message to Parish Office →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
