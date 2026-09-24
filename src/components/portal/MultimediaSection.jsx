import React, { useState } from 'react';
import { MULTIMEDIA_ITEMS } from '../../data/landingPortalData.js';
import heroChurch from '../../assets/hero-church.png';

export default function MultimediaSection() {
  const [activeMedia, setActiveMedia] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpenMedia = (media) => {
    setActiveMedia(media);
    setIsPlaying(true);
  };

  return (
    <section className="footer-objectives objectives-multimedia-theme" id="multimedia" aria-labelledby="multimedia-heading">
      <img className="objectives-art" src={heroChurch} alt="" aria-hidden="true" />

      <div className="container objectives-inner">
        <div className="objectives-copy">
          <p className="eyebrow" style={{ color: '#684535', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.76rem', fontWeight: 700 }}>
            Sacred Broadcasts &amp; Audio
          </p>
          <h2 id="multimedia-heading">Multimedia &amp; Sermons</h2>
          <p>
            Listen to ancient liturgical chants, video homilies, feast celebrations, and spiritual teachings.
          </p>
        </div>

        {/* Objectives-style tile grid */}
        <div className="objectives-tile-grid">
          {MULTIMEDIA_ITEMS.map((media) => (
            <div
              key={media.id}
              className="objectives-tile-card"
              onClick={() => handleOpenMedia(media)}
              role="button"
              tabIndex={0}
            >
              <span className="glyph" aria-hidden="true">
                {media.thumbnailIcon}
              </span>
              <strong>{media.title}</strong>
              <small className="tile-category-tag">{media.badge} • {media.duration}</small>
              <p className="tile-summary-text">By {media.speaker} • {media.date}</p>
              <span className="tile-click-action">Listen / Play Now ▶</span>
            </div>
          ))}
        </div>
      </div>

      {/* Media Player Modal */}
      {activeMedia && (
        <div className="portal-modal-backdrop" onClick={() => setActiveMedia(null)}>
          <div className="portal-modal-box modal-player" onClick={(e) => e.stopPropagation()}>
            <div className="portal-modal-head">
              <div>
                <span className="service-badge">{activeMedia.badge}</span>
                <h3>{activeMedia.title}</h3>
              </div>
              <button
                type="button"
                className="portal-modal-close"
                onClick={() => setActiveMedia(null)}
              >
                ✕
              </button>
            </div>

            <div className="portal-modal-body">
              <div className="mock-player-screen">
                <div className="player-cross-bg">✝</div>
                <div className="player-meta-display">
                  <span className="player-status">
                    {isPlaying ? '● Now Playing' : '❚❚ Paused'}
                  </span>
                  <h4>{activeMedia.title}</h4>
                  <p>{activeMedia.speaker}</p>
                </div>
                <div className="mock-waveforms">
                  <span className="wave-bar bar-1"></span>
                  <span className="wave-bar bar-2"></span>
                  <span className="wave-bar bar-3"></span>
                  <span className="wave-bar bar-4"></span>
                  <span className="wave-bar bar-5"></span>
                </div>
              </div>

              <div className="player-controls-row">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? '❚❚ Pause' : '▶ Play'}
                </button>
                <span className="player-time-indicator">04:12 / {activeMedia.duration}</span>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => alert('Media link copied to clipboard!')}
                >
                  🔗 Share
                </button>
              </div>
            </div>

            <div className="portal-modal-foot">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setActiveMedia(null)}
              >
                Done Listening
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
