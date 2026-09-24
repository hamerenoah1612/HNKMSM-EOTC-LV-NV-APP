import React, { useState } from 'react';
import { CHURCH_NEWS } from '../../data/landingPortalData.js';
import heroChurch from '../../assets/hero-church.png';

export default function NewsSection() {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section className="footer-objectives objectives-news-theme" id="news" aria-labelledby="news-heading">
      <img className="objectives-art" src={heroChurch} alt="" aria-hidden="true" />

      <div className="container objectives-inner">
        <div className="objectives-copy">
          <p className="eyebrow" style={{ color: '#8a4b27', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.76rem', fontWeight: 700 }}>
            Parish Bulletins &amp; Announcements
          </p>
          <h2 id="news-heading">Church News &amp; Updates</h2>
          <p>
            Stay informed with the latest building project updates, spiritual classes, and synod communiqués.
          </p>
        </div>

        {/* Objectives-style tile grid */}
        <div className="objectives-tile-grid">
          {CHURCH_NEWS.map((item) => (
            <div
              key={item.id}
              className="objectives-tile-card"
              onClick={() => setActiveArticle(item)}
              role="button"
              tabIndex={0}
            >
              <span className="glyph" aria-hidden="true">
                📰
              </span>
              <strong>{item.title}</strong>
              <small className="tile-category-tag">{item.category} • {item.date}</small>
              <p className="tile-summary-text">{item.excerpt}</p>
              <span className="tile-click-action">Read Full Bulletin →</span>
            </div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="portal-modal-backdrop" onClick={() => setActiveArticle(null)}>
          <div className="portal-modal-box modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="portal-modal-head">
              <div>
                <span className="news-badge">{activeArticle.category}</span>
                <small className="modal-date-tag" style={{ marginLeft: '10px', color: 'var(--muted)' }}>
                  {activeArticle.date} • {activeArticle.readTime}
                </small>
              </div>
              <button
                type="button"
                className="portal-modal-close"
                onClick={() => setActiveArticle(null)}
              >
                ✕
              </button>
            </div>

            <div className="portal-modal-body">
              <h2 className="modal-article-title" style={{ fontSize: '1.35rem', marginBottom: '14px', color: 'var(--text)' }}>
                {activeArticle.title}
              </h2>
              <div className="modal-article-content" style={{ fontSize: '0.92rem', lineHeight: '1.7', color: 'var(--text)' }}>
                <p className="article-lead" style={{ fontWeight: 600, color: 'var(--primary)', marginBottom: '14px' }}>
                  {activeArticle.excerpt}
                </p>
                <p>{activeArticle.content}</p>
                <p style={{ marginTop: '16px', fontStyle: 'italic', color: 'var(--muted)' }}>
                  For inquiries or volunteer assistance, contact the Church Office or visit the parish rectory after Sunday Divine Liturgy.
                </p>
              </div>
            </div>

            <div className="portal-modal-foot">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setActiveArticle(null)}
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
