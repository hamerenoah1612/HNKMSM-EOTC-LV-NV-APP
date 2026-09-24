import React, { useState } from 'react';
import { MEDIA_LEARNING_RESOURCES } from '../../data/landingPortalData.js';
import heroChurch from '../../assets/hero-church.png';

export default function MediaLearningSectionObjectives() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [downloadMsg, setDownloadMsg] = useState(false);

  const handleDownload = () => {
    setDownloadMsg(true);
    setTimeout(() => setDownloadMsg(false), 3000);
  };

  return (
    <section className="footer-objectives section-band" id="learning" aria-labelledby="learning-heading">
      <img className="objectives-art" src={heroChurch} alt="" aria-hidden="true" />

      <div className="container objectives-inner">
        <div className="objectives-copy">
          <p className="eyebrow" style={{ margin: '0 0 4px' }}>Spiritual Catechism &amp; Library</p>
          <h2 id="learning-heading">Media &amp; Learning Resources</h2>
          <p>Download foundational catechism texts, daily prayer books (Wudase Mariam), and Ge’ez primers.</p>
        </div>

        <div className="objectives-grid">
          {MEDIA_LEARNING_RESOURCES.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              style={{ cursor: 'pointer' }}
              title="Click to view & download resource"
            >
              <span className="glyph" aria-hidden="true" style={{ fontSize: '1.4rem' }}>
                {item.icon}
              </span>
              <strong>{item.title}</strong>
              <small>{item.format} • {item.language}</small>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="btn btn-primary objectives-more"
          onClick={() => setSelectedItem(MEDIA_LEARNING_RESOURCES[0])}
        >
          Explore Learning Materials <span aria-hidden="true">→</span>
        </button>
      </div>

      {/* Detail & Download Modal */}
      {selectedItem && (
        <div className="portal-modal-backdrop" onClick={() => setSelectedItem(null)}>
          <div className="portal-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="portal-modal-head">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.4rem' }}>{selectedItem.icon}</span>
                <h3 style={{ margin: 0 }}>{selectedItem.title}</h3>
              </div>
              <button
                type="button"
                className="portal-modal-close"
                onClick={() => setSelectedItem(null)}
              >
                ✕
              </button>
            </div>
            <div className="portal-modal-body">
              <p className="modal-lead">{selectedItem.summary}</p>
              <div className="modal-info-list">
                <div>
                  <strong>Format:</strong> <span>{selectedItem.format}</span>
                </div>
                <div>
                  <strong>Language:</strong> <span>{selectedItem.language}</span>
                </div>
                <div>
                  <strong>Level:</strong> <span>{selectedItem.level}</span>
                </div>
              </div>

              {downloadMsg && (
                <div className="success-alert-box">
                  ✓ Document successfully downloaded to your device!
                </div>
              )}
            </div>
            <div className="portal-modal-foot">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setSelectedItem(null)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleDownload}
              >
                Download PDF / Reading Material 📥
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
