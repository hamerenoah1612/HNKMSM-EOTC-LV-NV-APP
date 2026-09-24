import React, { useState } from 'react';
import { CHURCH_NEWS } from '../../data/landingPortalData.js';
import heroChurch from '../../assets/hero-church.png';

export default function NewsSectionObjectives() {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <section className="footer-objectives section-band" id="news" aria-labelledby="news-heading">
      <img className="objectives-art" src={heroChurch} alt="" aria-hidden="true" />

      <div className="container objectives-inner">
        <div className="objectives-copy">
          <p className="eyebrow" style={{ margin: '0 0 4px' }}>Bulletins &amp; Announcements</p>
          <h2 id="news-heading">Parish News &amp; Updates</h2>
          <p>Read the latest reports on the new cathedral building, Sunday school, and diocesan visits.</p>
        </div>

        <div className="objectives-grid">
          {CHURCH_NEWS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedNews(item)}
              style={{ cursor: 'pointer' }}
              title="Click to read full bulletin"
            >
              <span className="glyph" aria-hidden="true" style={{ fontSize: '1.4rem' }}>
                📰
              </span>
              <strong>{item.title}</strong>
              <small>{item.date} • {item.category}</small>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="btn btn-primary objectives-more"
          onClick={() => setSelectedNews(CHURCH_NEWS[0])}
        >
          Read Latest Bulletin <span aria-hidden="true">→</span>
        </button>
      </div>

      {/* News Modal */}
      {selectedNews && (
        <div className="portal-modal-backdrop" onClick={() => setSelectedNews(null)}>
          <div className="portal-modal-box modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="portal-modal-head">
              <div>
                <span className="news-badge">{selectedNews.category}</span>
                <h3 style={{ marginTop: '4px' }}>{selectedNews.title}</h3>
              </div>
              <button
                type="button"
                className="portal-modal-close"
                onClick={() => setSelectedNews(null)}
              >
                ✕
              </button>
            </div>
            <div className="portal-modal-body">
              <p className="modal-lead" style={{ fontWeight: 600 }}>{selectedNews.excerpt}</p>
              <p style={{ lineHeight: 1.7, color: '#553f31' }}>{selectedNews.content}</p>
              <small style={{ color: 'var(--muted)', display: 'block', marginTop: '16px' }}>
                Published: {selectedNews.date} • {selectedNews.readTime}
              </small>
            </div>
            <div className="portal-modal-foot">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setSelectedNews(null)}
              >
                Close Bulletin
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
