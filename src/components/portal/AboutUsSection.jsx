import React, { useState } from 'react';
import { ABOUT_US_DATA } from '../../data/landingPortalData.js';

export default function AboutUsSection({ onOpenDetail }) {
  const [activeTab, setActiveTab] = useState('history'); // 'history' | 'vision' | 'mission' | 'values' | 'leaders'

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">About Our Holy Parish</p>
          <h2>Faith, Apostolic Lineage & Community</h2>
          <p>
            Learn about our sacred history, divine mission, core spiritual values, and church leadership.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="about-tabs-container">
          <div className="about-tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'history'}
              className={`about-tab-btn ${activeTab === 'history' ? 'active' : ''}`}
              onClick={() => setActiveTab('history')}
            >
              📜 History
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'vision'}
              className={`about-tab-btn ${activeTab === 'vision' ? 'active' : ''}`}
              onClick={() => setActiveTab('vision')}
            >
              🔭 Vision
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'mission'}
              className={`about-tab-btn ${activeTab === 'mission' ? 'active' : ''}`}
              onClick={() => setActiveTab('mission')}
            >
              🎯 Mission
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'values'}
              className={`about-tab-btn ${activeTab === 'values' ? 'active' : ''}`}
              onClick={() => setActiveTab('values')}
            >
              💎 Values
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'leaders'}
              className={`about-tab-btn ${activeTab === 'leaders' ? 'active' : ''}`}
              onClick={() => setActiveTab('leaders')}
            >
              👑 Higher Leaders
            </button>
          </div>
        </div>

        {/* Tab Content Panes */}
        <div className="about-content-card">
          {activeTab === 'history' && (
            <div className="about-pane fade-in">
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
                    <small>Apostolic Roots</small>
                  </div>
                  <div className="history-stat-card">
                    <span className="stat-big">330 A.D.</span>
                    <small>Official Christian Kingdom</small>
                  </div>
                  <div className="history-stat-card">
                    <span className="stat-big">Las Vegas</span>
                    <small>Permanent Spiritual Home</small>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vision' && (
            <div className="about-pane fade-in">
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
            <div className="about-pane fade-in">
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
            <div className="about-pane fade-in">
              <h3>Our Core Spiritual Values</h3>
              <p className="about-lead">
                The unchanging bedrock guiding our parish clergy, deacons, elders, and youth.
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
            <div className="about-pane fade-in">
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
      </div>
    </section>
  );
}
