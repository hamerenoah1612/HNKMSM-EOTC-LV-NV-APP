import React from 'react';
import heroChurch from '../../assets/hero-church.png';
import { EthiopianCross } from '../EthiopianCross';

export default function AboutUsTeaserSection({ onNavigateAbout }) {
  const HIGHLIGHTS = [
    {
      icon: '✝',
      title: 'Apostolic Lineage',
      desc: '1st-century roots through Saint Philip the Apostle & Saint Frumentius.',
    },
    {
      icon: '🔭',
      title: 'Sacred Vision',
      desc: 'Unwavering fidelity to Orthodox dogma and building a cathedral for all generations.',
    },
    {
      icon: '🎯',
      title: 'Divine Mission',
      desc: 'Weekly Liturgy (Kidase), Sunday school, youth mentorship, and charity.',
    },
    {
      icon: '💎',
      title: 'Enduring Values',
      desc: 'Orthodox faith, Agape love, ceaseless prayer, and diaconal service.',
    },
    {
      icon: '👑',
      title: 'Holy Synod & Hierarchs',
      desc: 'Led by His Holiness Abune Mathias, Archbishop Abune Selam, and parish clergy.',
    },
    {
      icon: '🏛',
      title: 'Las Vegas Sanctuary',
      desc: 'Serving thousands of Orthodox faithful across Nevada and the Southwest.',
    },
  ];

  return (
    <section className="footer-objectives about-teaser-band" id="about" aria-labelledby="about-teaser-heading">
      <img className="objectives-art" src={heroChurch} alt="" aria-hidden="true" />

      <div className="container objectives-inner">
        <div className="objectives-copy">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <EthiopianCross size={20} className="text-[#844926]" />
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: 'var(--cocoa)' }}>
              About Us • ስለ እኛ
            </span>
          </div>
          <h2 id="about-teaser-heading" style={{ margin: '0 0 6px' }}>
            Our Holy Faith, Apostolic Lineage &amp; Leadership
          </h2>
          <p>
            Learn about our 1st-century heritage, divine mission, spiritual pillars, and church hierarchs.
          </p>
        </div>

        <div className="objectives-grid">
          {HIGHLIGHTS.map(({ icon, title, desc }) => (
            <div key={title} style={{ cursor: 'pointer' }} onClick={onNavigateAbout}>
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
          onClick={onNavigateAbout}
        >
          Explore Full About Page <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
