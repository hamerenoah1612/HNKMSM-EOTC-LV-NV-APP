import React, { useState } from 'react';
import { ABOUT_US_DATA } from '../data/landingPortalData.js';
import heroTrees from '../assets/hero-trees.jpg';
import heroChurch from '../assets/hero-church.png';

export default function AboutPage({ onBackToSite, onSignIn, onNavigateContact }) {
  const [activeTab, setActiveTab] = useState('history');

  return (
    <div className="portal-standalone-page about-standalone-page">
      {/* Top Navigation Bar */}
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
              <span className="brand-tagline">About Our Holy Parish &amp; Apostolic Lineage</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            {onNavigateContact && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onNavigateContact}
              >
                Contact Us
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
          <p className="eyebrow">Ethiopian Orthodox Tewahedo Church</p>
          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', margin: '0 0 16px', color: 'var(--text)' }}>
            About Our Church &amp; Holy Heritage
          </h1>
          <p className="hero-lede" style={{ maxWidth: '680px' }}>
            Rooted in 1st-century apostolic Christianity and preserved across millennia through the desert fathers, imperial saints, and the sacred chants of Saint Yared.
          </p>

          <div className="hero-actions" style={{ marginTop: '24px' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                const el = document.getElementById('about-tabs-anchor');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore History &amp; Leadership ↓
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onNavigateContact}
            >
              Contact Parish Office
            </button>
          </div>
        </div>
      </section>

      {/* Full Content Tabs & Exploration */}
      <main className="container" style={{ padding: '50px 16px 80px' }} id="about-tabs-anchor">
        <div className="about-tabs-container">
          <div className="about-tabs" role="tablist">
            <button
              type="button"
              className={`about-tab-btn ${activeTab === 'history' ? 'active' : ''}`}
              onClick={() => setActiveTab('history')}
            >
              📜 History &amp; Lineage
            </button>
            <button
              type="button"
              className={`about-tab-btn ${activeTab === 'vision' ? 'active' : ''}`}
              onClick={() => setActiveTab('vision')}
            >
              🔭 Vision
            </button>
            <button
              type="button"
              className={`about-tab-btn ${activeTab === 'mission' ? 'active' : ''}`}
              onClick={() => setActiveTab('mission')}
            >
              🎯 Mission
            </button>
            <button
              type="button"
              className={`about-tab-btn ${activeTab === 'values' ? 'active' : ''}`}
              onClick={() => setActiveTab('values')}
            >
              💎 Values
            </button>
            <button
              type="button"
              className={`about-tab-btn ${activeTab === 'leaders' ? 'active' : ''}`}
              onClick={() => setActiveTab('leaders')}
            >
              👑 Higher Leaders
            </button>
          </div>
        </div>

        {/* Tab Detail Pane */}
        <div className="about-content-card" style={{ marginTop: '24px' }}>
          {activeTab === 'history' && (
            <div className="about-pane">
              <div className="about-history-layout">
                <div className="about-history-text">
                  <h3>{ABOUT_US_DATA.history.title}</h3>
                  <p className="about-lead">{ABOUT_US_DATA.history.lead}</p>
                  {ABOUT_US_DATA.history.paragraphs.map((p, idx) => (
                    <p key={idx} className="about-body-p">
                      {p}
                    </p>
                  ))}
                  <div className="about-quote-box">
                    <em>
                      “Ethiopia shall stretch out her hands unto God.” — Psalm 68:31
                    </em>
                  </div>
                </div>

                <div className="about-history-badge-col">
                  <div className="history-stat-card">
                    <span className="stat-big">1st Cent.</span>
                    <small>Apostolic Baptism (Acts 8)</small>
                  </div>
                  <div className="history-stat-card">
                    <span className="stat-big">330 A.D.</span>
                    <small>Official Christian Kingdom</small>
                  </div>
                  <div className="history-stat-card">
                    <span className="stat-big">Las Vegas, NV</span>
                    <small>Holy Name of Jesus &amp; St. Mary</small>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vision' && (
            <div className="about-pane">
              <div className="about-vision-layout">
                <h3>{ABOUT_US_DATA.vision.title}</h3>
                <blockquote className="vision-quote">
                  “{ABOUT_US_DATA.vision.statement}”
                </blockquote>
                <div className="vision-pillars-grid">
                  {ABOUT_US_DATA.vision.pillars.map((pillar, idx) => (
                    <div key={idx} className="vision-pillar-item">
                      <span className="pillar-num">0{idx + 1}</span>
                      <p>{pillar}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mission' && (
            <div className="about-pane">
              <div className="about-mission-layout">
                <h3>{ABOUT_US_DATA.mission.title}</h3>
                <p className="about-lead">{ABOUT_US_DATA.mission.statement}</p>
                <div className="mission-grid">
                  {ABOUT_US_DATA.mission.keyPoints.map((item, idx) => (
                    <div key={idx} className="mission-card">
                      <span className="mission-icon">{item.icon}</span>
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'values' && (
            <div className="about-pane">
              <h3>Our Core Spiritual Values</h3>
              <p className="about-lead">
                The unchanging bedrock guiding our clergy, deacons, Sunday school teachers, and parishioners.
              </p>
              <div className="values-deck-grid">
                {ABOUT_US_DATA.values.map((v) => (
                  <div key={v.id} className="value-deck-card">
                    <span className="value-deck-icon">{v.icon}</span>
                    <h4>{v.title}</h4>
                    <p>{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'leaders' && (
            <div className="about-pane">
              <h3>Church Hierarchs &amp; Pastoral Leadership</h3>
              <p className="about-lead">
                Under the spiritual guidance of the Holy Synod of the Ethiopian Orthodox Tewahedo Church.
              </p>
              <div className="leaders-grid">
                {ABOUT_US_DATA.higherLeaders.map((leader, idx) => (
                  <div key={idx} className="leader-card">
                    <div className="leader-avatar-box">
                      <span className="leader-avatar-icon">{leader.avatar}</span>
                    </div>
                    <div className="leader-info">
                      <span className="leader-role-tag">{leader.role}</span>
                      <h4>{leader.name}</h4>
                      <p className="leader-title-text">{leader.title}</p>
                      <small className="leader-loc">{leader.location}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
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
