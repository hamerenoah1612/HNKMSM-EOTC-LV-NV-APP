import React, { useState } from 'react';
import { MEDIA_LEARNING_RESOURCES } from '../../data/landingPortalData.js';
import heroChurch from '../../assets/hero-church.png';

export default function MediaLearningSection() {
  const [selectedResource, setSelectedResource] = useState(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return (
    <section className="footer-objectives objectives-learning-theme" id="learning" aria-labelledby="learning-heading">
      <img className="objectives-art" src={heroChurch} alt="" aria-hidden="true" />

      <div className="container objectives-inner">
        <div className="objectives-copy">
          <p className="eyebrow" style={{ color: '#7a4b2a', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.76rem', fontWeight: 700 }}>
            Spiritual Catechism &amp; Texts
          </p>
          <h2 id="learning-heading">Media &amp; Learning Resources</h2>
          <p>
            Study the Orthodox Tewahedo Faith, ancient Geez hymnody, patristic writings, and daily prayer manuals.
          </p>
        </div>

        {/* Objectives-style tile grid */}
        <div className="objectives-tile-grid">
          {MEDIA_LEARNING_RESOURCES.map((item) => (
            <div
              key={item.id}
              className="objectives-tile-card"
              onClick={() => setSelectedResource(item)}
              role="button"
              tabIndex={0}
            >
              <span className="glyph" aria-hidden="true">
                {item.icon}
              </span>
              <strong>{item.title}</strong>
              <small className="tile-category-tag">{item.format} • {item.level}</small>
              <p className="tile-summary-text">{item.summary}</p>
              <span className="tile-click-action">Read &amp; Download 📥 →</span>
            </div>
          ))}
        </div>
      </div>

      {/* Resource Details Modal */}
      {selectedResource && (
        <div className="portal-modal-backdrop" onClick={() => setSelectedResource(null)}>
          <div className="portal-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="portal-modal-head">
              <div className="flex items-center gap-2">
                <span style={{ fontSize: '1.4rem' }}>{selectedResource.icon}</span>
                <h3>{selectedResource.title}</h3>
              </div>
              <button
                type="button"
                className="portal-modal-close"
                onClick={() => setSelectedResource(null)}
              >
                ✕
              </button>
            </div>

            <div className="portal-modal-body">
              <p className="modal-lead">{selectedResource.summary}</p>

              <div className="modal-info-list">
                <div>
                  <strong>Format:</strong> <span>{selectedResource.format}</span>
                </div>
                <div>
                  <strong>Language:</strong> <span>{selectedResource.language}</span>
                </div>
                <div>
                  <strong>Level:</strong> <span>{selectedResource.level}</span>
                </div>
              </div>

              {downloadSuccess && (
                <div className="success-alert-box">
                  <span>✓ Educational text &amp; manuscript downloaded successfully to your device!</span>
                </div>
              )}
            </div>

            <div className="portal-modal-foot">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setSelectedResource(null)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleDownload}
              >
                Download PDF / Manuscript 📥
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
