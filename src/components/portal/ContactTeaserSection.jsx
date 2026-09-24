import React from 'react';
import heroChurch from '../../assets/hero-church.png';
import { CHURCH_CONTACT_INFO } from '../../data/churchContent.ts';
import { EthiopianCross } from '../EthiopianCross';

export default function ContactTeaserSection({ onNavigateContact }) {
  const CONTACT_TILES = [
    {
      icon: '📍',
      title: 'Sanctuary Address',
      desc: CHURCH_CONTACT_INFO.address,
    },
    {
      icon: '📞',
      title: 'Parish Office Phone',
      desc: CHURCH_CONTACT_INFO.phone,
    },
    {
      icon: '✉',
      title: 'Email Inquiry',
      desc: CHURCH_CONTACT_INFO.email,
    },
    {
      icon: '⏱',
      title: 'Liturgical Schedule',
      desc: 'Sundays: 6:00 AM – 10:30 AM (ቅዳሴ)',
    },
    {
      icon: '✝',
      title: 'Parish Clergy',
      desc: 'Melake Tsion Father / የቤተክርስቲያኑ አባቶች',
    },
    {
      icon: '🙏',
      title: 'Pastoral Care & Prayer',
      desc: 'Confession, baptism, matrimony & memorial',
    },
  ];

  return (
    <section className="footer-objectives contact-teaser-band" id="contact" aria-labelledby="contact-teaser-heading">
      <img className="objectives-art" src={heroChurch} alt="" aria-hidden="true" />

      <div className="container objectives-inner">
        <div className="objectives-copy">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <EthiopianCross size={20} className="text-[#844926]" />
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: 'var(--cocoa)' }}>
              Contact Us • ያግኙን
            </span>
          </div>
          <h2 id="contact-teaser-heading" style={{ margin: '0 0 6px' }}>
            Parish Rectory, Sanctuary &amp; Pastoral Inquiries
          </h2>
          <p>
            Connect with our parish priests, schedule holy sacraments, or submit prayer petitions.
          </p>
        </div>

        <div className="objectives-grid">
          {CONTACT_TILES.map(({ icon, title, desc }) => (
            <div key={title} style={{ cursor: 'pointer' }} onClick={onNavigateContact}>
              <span className="glyph" aria-hidden="true" style={{ fontSize: '1.4rem' }}>
                {icon}
              </span>
              <strong>{title}</strong>
              <small>{desc}</small>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="btn btn-primary objectives-more"
          onClick={onNavigateContact}
        >
          Open Contact &amp; Inquiry Page <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
