import React, { useState } from 'react';
import { MULTIMEDIA_ITEMS } from '../../data/landingPortalData.js';
import heroChurch from '../../assets/hero-church.png';

export default function MultimediaSectionObjectives() {
  const [activeMedia, setActiveMedia] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="footer-objectives section-band" id="multimedia" aria-labelledby="multimedia-heading">
      <img className="objectives-art" src={heroChurch} alt="" aria-hidden="true" />

      <div className="container objectives-inner">
        <div className="objectives-copy">
          <p className="eyebrow" style={{ margin: '0 0 4px' }}>Sacred Audio &amp; Sermons</p>
          <h2 id="multimedia-heading">Multimedia &amp; Teachings</h2>
          <p>Holy sermons, Saint Yared hymns, festival recordings, and Ge’ez chanting tutorials.</p>
        </div>

        <div className="objectives-grid">
          {MULTIMEDIA_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setActiveMedia(item);
                setIsPlaying(true);
              }}
              style={{ cursor: 'pointer' }}
              title="Click to play audio/video"
            >
              <span className="glyph" aria-hidden="true" style={{ fontSize: '1.4rem' }}>
                {item.type === 'video' ? '📹' : '♫'}
              </span>
              <strong>{item.title}</strong>
              <small>{item.speaker} • {item.duration}</small>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="btn btn-primary objectives-more"
          onClick={() => {
            setActiveMedia(MULTIMEDIA_ITEMS[0]);
            setIsPlaying(true);
          }}
        >
          Open Media Broadcast Player <span aria-hidden="true">→</span>
        </button>
      </div>

      {/* Media Player Modal */}
      {activeMedia && (
        <div className="portal-modal-backdrop" onClick={() => setActiveMedia(null)}>
          <div className="portal-modal-box modal-player" onClick={(e) => e.stopPropagation()}>
            <div className="portal-modal-head">
              <div>
                <span className="service-badge">{activeMedia.badge}</span>
                <h3 style={{ marginTop: '4px' }}>{activeMedia.title}</h3>
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
                    {isPlaying ? '● Now Playing Sacred Audio' : '❚❚ Paused'}
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
                  onClick={() => alert('Media link copied!')}
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
