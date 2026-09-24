import React, { useState } from 'react';
import { CHURCH_CONTACT_INFO } from '../data/churchContent.ts';
import heroTrees from '../assets/hero-trees.jpg';
import heroChurch from '../assets/hero-church.png';

export default function ContactPage({ onBackToSite, onSignIn, onNavigateAbout }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Pastoral Inquiry',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="portal-standalone-page contact-standalone-page">
      {/* Top Header */}
      <header className="site-header">
        <div className="container header-inner">
          <button
            type="button"
            className="btn btn-secondary btn-back-nav"
            onClick={onBackToSite}
          >
            ← Back to Home
          </button>

          <div className="brand" style={{ margin: '0 auto' }}>
            <span className="brand-mark">☦</span>
            <div className="brand-copy">
              <span className="brand-name">HNKMSM-EOTC-LV-NV</span>
              <span className="brand-tagline">Parish Rectory &amp; Clergy Office</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            {onNavigateAbout && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onNavigateAbout}
              >
                About Us
              </button>
            )}
            {onSignIn && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onSignIn('member')}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Banner with Artwork */}
      <section className="standalone-hero hero">
        <img className="hero-art hero-art--trees" src={heroTrees} alt="" aria-hidden="true" />
        <div className="container hero-art-layer" aria-hidden="true">
          <img className="hero-art hero-art--church" src={heroChurch} alt="" />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '54px 0 44px' }}>
          <p className="eyebrow">Parish Office &amp; Sanctuary</p>
          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', margin: '0 0 16px', color: 'var(--text)' }}>
            Contact &amp; Visit Our Church
          </h1>
          <p className="hero-lede" style={{ maxWidth: '680px' }}>
            Whether you are visiting Las Vegas, looking for a spiritual home, booking a holy sacrament, or requesting pastoral prayer, our parish clergy is ready to receive you.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <main className="container" style={{ padding: '50px 16px 80px' }}>
        <div className="contact-portal-grid">
          {/* Contact Details */}
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
                  <strong>Email Inquiries</strong>
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
                  <strong>Parish Administration &amp; Clergy</strong>
                  <p>{CHURCH_CONTACT_INFO.seniorPriest}</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '28px', padding: '16px', background: '#fcf8f4', borderRadius: '12px', border: '1px solid #ebddce' }}>
              <strong style={{ display: 'block', fontSize: '0.88rem', color: '#52331f', marginBottom: '4px' }}>
                Visiting for Holy Liturgy (ቅዳሴ)?
              </strong>
              <p style={{ margin: 0, fontSize: '0.82rem', color: '#6e5647', lineHeight: 1.5 }}>
                Sunday Divine Liturgy begins at 6:00 AM with Matins, followed by Eucharistic Liturgy at 8:30 AM and community fellowship after 10:30 AM. Modest white liturgical attire (Netela) is customary.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-panel">
            {sent ? (
              <div className="contact-sent-box">
                <span className="sent-glyph">✓</span>
                <h3>Message Received in Faith</h3>
                <p>
                  Thank you, <strong>{formState.name}</strong>. Your message has been routed to the Parish Priest and Office. We will be in touch shortly.
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
                      subject: 'General Pastoral Inquiry',
                      message: '',
                    });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3>Send a Message or Prayer Petition</h3>

                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="contactpage-name">Your Full Name *</label>
                    <input
                      id="contactpage-name"
                      type="text"
                      required
                      placeholder="e.g. Abba / W/ro / Ato Michael"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactpage-email">Email Address *</label>
                    <input
                      id="contactpage-email"
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
                    <label htmlFor="contactpage-phone">Phone Number</label>
                    <input
                      id="contactpage-phone"
                      type="tel"
                      placeholder="(702) 000-0000"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactpage-subject">Topic / Purpose</label>
                    <select
                      id="contactpage-subject"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    >
                      <option value="General Pastoral Inquiry">General Pastoral Inquiry</option>
                      <option value="Holy Baptism / Chrismation">Holy Baptism / Chrismation</option>
                      <option value="Holy Matrimony (Teklil)">Holy Matrimony (Teklil)</option>
                      <option value="Confession & Spiritual Fatherhood">Confession &amp; Spiritual Fatherhood</option>
                      <option value="Memorial Liturgy (Fithat)">Memorial Liturgy (Fithat)</option>
                      <option value="Sunday School Registration">Sunday School Registration</option>
                      <option value="New Cathedral Building Donation">New Cathedral Building Donation</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contactpage-msg">Your Message *</label>
                  <textarea
                    id="contactpage-msg"
                    rows={5}
                    required
                    placeholder="Please include your prayer intentions, questions, or preferred contact time..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Send to Parish Clergy &amp; Office →
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="site-footer" style={{ borderTop: '1px solid var(--line)', padding: '36px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <strong>HNKMSM-EOTC-LV-NV</strong>
            <p style={{ margin: '4px 0 0', color: 'var(--muted)', fontSize: '0.84rem' }}>
              Ethiopian Orthodox Tewahedo Church • Las Vegas, NV
            </p>
          </div>
          <button type="button" className="btn btn-secondary" onClick={onBackToSite}>
            ← Return to Main Portal
          </button>
        </div>
      </footer>
    </div>
  );
}
