import React, { useState } from 'react';
import { EthiopianCross } from '../EthiopianCross';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Send } from 'lucide-react';
import { CHURCH_CONTACT_INFO } from '../../data/churchContent.ts';

export default function ContactHeroShowcase({ onNavigateContact }) {
  const [fastMessage, setFastMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const CONTACT_PILLARS = [
    {
      id: 'sanctuary',
      icon: <MapPin className="w-5 h-5 text-[#5e341b]" />,
      title: 'Holy Sanctuary',
      sub: CHURCH_CONTACT_INFO.address,
      badge: 'Las Vegas, NV',
    },
    {
      id: 'phone',
      icon: <Phone className="w-5 h-5 text-[#5e341b]" />,
      title: 'Parish Rectory',
      sub: CHURCH_CONTACT_INFO.phone,
      badge: 'Mon - Sun',
    },
    {
      id: 'liturgy',
      icon: <Clock className="w-5 h-5 text-[#5e341b]" />,
      title: 'Liturgy (ቅዳሴ)',
      sub: 'Sundays: 6:00 AM – 10:30 AM',
      badge: 'Weekly',
    },
    {
      id: 'clergy',
      icon: <ShieldCheck className="w-5 h-5 text-[#5e341b]" />,
      title: 'Parish Clergy',
      sub: CHURCH_CONTACT_INFO.email,
      badge: 'Pastoral Care',
    },
  ];

  return (
    <section className="section contact-showcase-section" id="contact">
      <div className="container">
        {/* Section Heading matching Clean Architectural styling */}
        <div className="section-heading centered" style={{ marginBottom: '32px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <EthiopianCross size={24} className="text-[#864c29]" />
            <p className="eyebrow" style={{ margin: 0 }}>Parish Rectory &amp; Inquiries • ያግኙን</p>
            <EthiopianCross size={24} className="text-[#864c29]" />
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--text)' }}>
            We Welcome You with Open Arms
          </h2>
          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '0.98rem', color: 'var(--muted)' }}>
            Have a question, need pastoral prayer, planning a baptism or wedding, or visiting for the first time? Our church rectory and clergy are here for you.
          </p>
        </div>

        {/* Center Display Card matching the Together Sacred Panel */}
        <div className="together-card-container">
          <div className="together-sacred-card">
            {/* Luminous Glow behind icon */}
            <div className="together-glow-orb" />

            {/* Sacred Icon Image */}
            <div className="together-icon-frame">
              <img
                src="/assets/orthodox_mary_icon.jpg"
                alt="Holy Virgin Mary with Baby Jesus - Ethiopian Orthodox Tewahedo Icon"
                className="together-icon-img"
              />
            </div>

            {/* Script & Tagline below Icon */}
            <div className="together-script-banner">
              <div className="together-script-divider">
                <div className="script-line" />
                <h3 className="together-script-title">
                  Connect &amp; Walk in Grace
                </h3>
                <div className="script-line" />
              </div>
              <p className="together-script-sub">
                የጸሎትና የምክር አገልግሎት • Parish Pastoral Care &amp; Guidance
              </p>
            </div>

            {/* 4 Pillars of Contact Bar */}
            <div className="together-pillars-grid">
              {CONTACT_PILLARS.map((col) => (
                <div
                  key={col.id}
                  className="together-pillar-card"
                  onClick={onNavigateContact}
                  role="button"
                  tabIndex={0}
                  title="Click to view details in Contact page"
                >
                  <div className="pillar-icon-bubble">
                    {col.icon}
                  </div>
                  <strong className="pillar-title-en">{col.title}</strong>
                  <span className="pillar-title-am" style={{ fontSize: '0.74rem' }}>{col.badge}</span>
                  <p className="pillar-desc" style={{ marginTop: '4px' }}>{col.sub}</p>
                </div>
              ))}
            </div>

            {/* Quick Interactive Inquiry Box */}
            <div className="together-quick-contact-box">
              {submitted ? (
                <div className="success-alert-box" style={{ width: '100%', textAlign: 'center' }}>
                  ✓ Thank you! Your note has been received by our parish office. We will get back to you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="together-fast-form">
                  <input
                    type="text"
                    required
                    placeholder="Type your prayer request or inquiry here..."
                    value={fastMessage}
                    onChange={(e) => setFastMessage(e.target.value)}
                    className="together-fast-input"
                  />
                  <button type="submit" className="btn btn-primary together-fast-btn">
                    <Send className="w-4 h-4" /> Send Note
                  </button>
                </form>
              )}
            </div>

            {/* CTA action to open dedicated Contact Us page */}
            <div className="together-card-action">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onNavigateContact}
              >
                Open Full Contact &amp; Location Page →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
