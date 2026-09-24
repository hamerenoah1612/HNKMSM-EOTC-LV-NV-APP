import React from 'react';
import { EthiopianCross } from '../EthiopianCross';
import { Sparkles, HeartHandshake, Sprout, Building2, BookOpen, Users, Compass, Shield } from 'lucide-react';

export default function AboutUsHeroShowcase({ onNavigateAbout }) {
  const PILLARS_LIST = [
    {
      id: 'faith',
      icon: <Sparkles className="w-5 h-5 text-[#5e341b]" />,
      title: 'Orthodox Faith',
      amharic: 'ኦርቶዶክሳዊት እምነት',
      desc: 'Preserving the immutable teachings of the Nicean Creed and the Apostolic Fathers across generations.',
    },
    {
      id: 'community',
      icon: <Users className="w-5 h-5 text-[#5e341b]" />,
      title: 'United Brotherhood',
      amharic: 'አንድነትና ፍቅር',
      desc: 'Fostering fellowship, mutual aid, and welcoming all children of God into the sanctuary fold.',
    },
    {
      id: 'youth',
      icon: <Sprout className="w-5 h-5 text-[#5e341b]" />,
      title: 'Youth & Generations',
      amharic: 'ትውልድና ሰንበት ት/ቤት',
      desc: 'Sunday schools, Ge’ez hymns, catechism, and spiritual mentorship for our youth and children.',
    },
    {
      id: 'building',
      icon: <Building2 className="w-5 h-5 text-[#5e341b]" />,
      title: 'Sanctuary & Cathedral',
      amharic: 'ቤተመቅደስና እድገት',
      desc: 'Building a lasting holy cathedral and community center in Las Vegas for generations to come.',
    },
  ];

  return (
    <section className="section about-showcase-section" id="about">
      <div className="container">
        {/* Section Heading matching Clean Elegant Architectural styling */}
        <div className="section-heading centered" style={{ marginBottom: '32px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <EthiopianCross size={24} className="text-[#864c29]" />
            <p className="eyebrow" style={{ margin: 0 }}>About Our Holy Church • ስለ ቤተክርስቲያናችን</p>
            <EthiopianCross size={24} className="text-[#864c29]" />
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--text)' }}>
            Together for a Stronger Tomorrow
          </h2>
          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '0.98rem', color: 'var(--muted)' }}>
            HNKMSM-EOTC-LV-NV unifies ancient apostolic heritage with vibrant community life, nurturing spiritual growth and fellowship in the heart of Las Vegas.
          </p>
        </div>

        {/* Center Display Card matching the Sacred Painting Showcase */}
        <div className="together-card-container">
          {/* Architectural Etching & Radial Ambient Backdrops */}
          <div className="together-sacred-card">
            {/* Luminous Glow behind icon */}
            <div className="together-glow-orb" />

            {/* Sacred Icon Image with feathered parchment blending */}
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
                  Together for a Stronger Tomorrow
                </h3>
                <div className="script-line" />
              </div>
              <p className="together-script-sub">
                አብረን ለተሻለ ነገ • Holy Name of Jesus &amp; Saint Mary EOTC
              </p>
            </div>

            {/* 4 Pillars of Ministry Bar */}
            <div className="together-pillars-grid">
              {PILLARS_LIST.map((pillar) => (
                <div
                  key={pillar.id}
                  className="together-pillar-card"
                  onClick={onNavigateAbout}
                  role="button"
                  tabIndex={0}
                  title="Click to view in About page"
                >
                  <div className="pillar-icon-bubble">
                    {pillar.icon}
                  </div>
                  <strong className="pillar-title-en">{pillar.title}</strong>
                  <span className="pillar-title-am">{pillar.amharic}</span>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA action to open dedicated About Us page */}
            <div className="together-card-action">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onNavigateAbout}
              >
                Learn More About Our History &amp; Leadership →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
