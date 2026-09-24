import React, { useState } from 'react';
import { CHURCH_CONTACT_INFO } from '../../data/churchContent.ts';
import heroChurch from '../../assets/hero-church.png';
import logo from '../../assets/logo-cross.png';
import { BRAND } from '../../data/content.js';

export default function ContactPage({ onBackToSite, onSignIn, onNavigateAbout }) {
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
    <div className="standalone-page contact-standalone">
      {/* Header */}
      <header className="site-header">
        <div className="container header-inner">
          <button
            type="button"
            className="brand standalone-brand-btn"
            onClick={onBackToSite}
            style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
          >
            <img className="brand-logo" src={logo} alt="" width="40" height="48" />
            <div className="brand-copy">
              <span className="brand-name">{BRAND.name}</span>
              <span className="brand-tagline">{BRAND.tagline}</span>
            </div>
          </button>

          <nav className="main-nav" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={onBackToSite}
            >
              ← Back to Home
            </button>
            {onNavigateAbout && (
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={onNavigateAbout}
              >
                About Us
              </button>
            )}
            {onSignIn && (
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => onSignIn('member')}
              >
                Sign In
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="standalone-hero">
        <img className="standalone-hero-art" src={heroChurch} alt="" aria-hidden="true" />
        <div className="container standalone-hero-inner">
          <p className="eyebrow" style={{ color: '#ddb892' }}>Parish Sanctuary &amp; Office</p>
          <h1>Contact Us &amp; Visit</h1>
          <p className="standalone-hero-lead">
            Whether you are planning a visit, seeking pastoral prayer, inquiring about sacraments, or connecting with community ministry, our clergy and parish servants are here for you.
          </p>
        </div>
      </div>

      <main className="container standalone-body">
        <div className="contact-portal-grid">
          {/* Info Panel */}
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

            {/* Liturgical Schedule Highlights Box */}
            <div className="contact-schedule-callout" style={{ marginTop: '24px', padding: '16px', background: '#f8efe6', borderRadius: '12px', border: '1px solid #ebdcd0' }}>
              <strong style={{ display: 'block', fontSize: '0.92rem', color: '#7f5539', marginBottom: '8px' }}>
                ⛪ Regular Worship Timetable:
              </strong>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.84rem', color: '#634f43', lineHeight: 1.6 }}>
                <li><strong>Sunday Divine Liturgy (ቅዳሴ):</strong> 6:00 AM – 10:30 AM</li>
                <li><strong>Saturday Vespers &amp; Chants:</strong> 5:30 PM – 7:00 PM</li>
                <li><strong>Feasts of Holy Virgin Mary:</strong> Monthly 21st (6:00 AM)</li>
              </ul>
            </div>
          </div>

          {/* Form Panel */}
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
                    <label htmlFor="contact-page-name">Full Name *</label>
                    <input
                      id="contact-page-name"
                      type="text"
                      required
                      placeholder="e.g. Deacon Michael"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-page-email">Email Address *</label>
                    <input
                      id="contact-page-email"
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
                    <label htmlFor="contact-page-phone">Phone Number</label>
                    <input
                      id="contact-page-phone"
                      type="tel"
                      placeholder="(702) 000-0000"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-page-subject">Topic / Purpose</label>
                    <select
                      id="contact-page-subject"
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
                  <label htmlFor="contact-page-msg">Your Message *</label>
                  <textarea
                    id="contact-page-msg"
                    rows={5}
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
      </main>
    </div>
  );
}
