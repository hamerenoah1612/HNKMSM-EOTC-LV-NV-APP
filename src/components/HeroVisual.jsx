import React, { useState } from 'react';
import { BRAND } from '../data/content.js';
import logo from '../assets/logo-cross.png';
import churchBg from '../assets/church-portal-background.jpg';

export const FEATURED_YOUTUBE_URL = 'https://youtu.be/UagqAfy0iqw?si=-pAaNijlHwilufvI';
export const CHURCH_YOUTUBE_URL = 'https://www.youtube.com/@HamereNoahMedia17';
export const CHURCH_YOUTUBE_SUBSCRIBE_URL = 'https://www.youtube.com/@HamereNoahMedia17?sub_confirmation=1';

export const CHURCH_BROADCAST_VIDEOS = [
  {
    id: 'tinsae-featured',
    title: 'ትንሳኤከ ለአለ አመነ ብርሓነከ ፈኑ ዲቤነ // 2026',
    titleAm: 'ትንሳኤከ ለአለ አመነ ብርሓነከ ፈኑ ዲቤነ // 2026',
    titleEn: 'Sunday Divine Liturgy & Hymn - "Tinsaehe Le’ele Amene"',
    views: '4.2K views',
    duration: '1:15:30',
    isLive: true,
    embedId: 'UagqAfy0iqw',
    watchUrl: 'https://youtu.be/UagqAfy0iqw?si=-pAaNijlHwilufvI',
    thumbnail: 'https://img.youtube.com/vi/UagqAfy0iqw/maxresdefault.jpg',
    hqThumbnail: 'https://img.youtube.com/vi/UagqAfy0iqw/hqdefault.jpg',
    desc: 'Hamere Noah Kidane Mehret & St. Michael Cathedral, Las Vegas, NV',
  },
  {
    id: 'kidase-live',
    title: 'ጸሎተ ቅዳሴ - Sunday Divine Liturgy & Chants',
    titleAm: 'የእሁድ ሥርዓተ ቅዳሴ እና ማኅሌት',
    titleEn: 'Sunday Divine Liturgy & Sacred Chants',
    views: '3.8K views',
    duration: '2:45:10',
    isLive: false,
    embedId: 'UagqAfy0iqw',
    watchUrl: 'https://youtu.be/UagqAfy0iqw?si=-pAaNijlHwilufvI',
    thumbnail: 'https://img.youtube.com/vi/UagqAfy0iqw/hqdefault.jpg',
    desc: 'Hamere Noah Kidane Mehret & St. Michael Cathedral, Las Vegas, NV',
  },
  {
    id: 'english-hymns',
    title: 'English Hymns & Sermon | Youth Fellowship',
    titleAm: 'የወጣቶች ትምህርት እና ዝማሬ በእንግሊዝኛ',
    titleEn: 'English Hymns & Youth Sermon',
    views: '2.1K views',
    duration: '48:32',
    isLive: false,
    embedId: 'UagqAfy0iqw',
    watchUrl: 'https://youtu.be/UagqAfy0iqw?si=-pAaNijlHwilufvI',
    thumbnail: 'https://img.youtube.com/vi/UagqAfy0iqw/hqdefault.jpg',
    desc: 'Sunday youth ministry prayers, hymns, and spiritual homily',
  },
  {
    id: 'kidane-meheret',
    title: 'Kidane Meheret Annual Feast Celebration',
    titleAm: 'የካቲት ኪዳነ ምሕረት ዓመታዊ የንግስ በዓል',
    titleEn: 'Annual Patronal Feast Celebration',
    views: '5.6K views',
    duration: '1:32:15',
    isLive: false,
    embedId: 'UagqAfy0iqw',
    watchUrl: 'https://youtu.be/UagqAfy0iqw?si=-pAaNijlHwilufvI',
    thumbnail: 'https://img.youtube.com/vi/UagqAfy0iqw/hqdefault.jpg',
    desc: 'Patronal feast celebration with archpastoral blessings and choir',
  },
];

function DesktopYouTubeScreen({ selectedVideo, setSelectedVideo, isPlaying, setIsPlaying }) {
  const video = CHURCH_BROADCAST_VIDEOS[selectedVideo] || CHURCH_BROADCAST_VIDEOS[0];
  const [thumbError, setThumbError] = useState(false);

  const posterBg = thumbError
    ? churchBg
    : video.thumbnail || video.hqThumbnail || churchBg;

  return (
    <div className="device desktop-device yt-desktop-frame" title="Church YouTube Live Broadcast">
      {/* Top Browser / YouTube Window Bar */}
      <div className="device-bar yt-device-bar">
        <div className="yt-window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>

        <div className="yt-bar-brand">
          <span className="yt-red-icon">▶</span>
          <span className="yt-brand-text">YouTube</span>
          <span className="yt-divider">|</span>
          <span className="yt-channel-badge">@HamereNoahMedia17</span>
        </div>

        <div className="yt-bar-actions">
          {isPlaying && (
            <button
              type="button"
              className="yt-reset-btn"
              onClick={() => setIsPlaying(false)}
              title="Close Player & Return to Poster"
            >
              ✕ Close
            </button>
          )}
          <a
            href={video.watchUrl || FEATURED_YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="yt-watch-direct-btn"
            title="Watch Video Directly on YouTube"
          >
            <span>Watch on YouTube</span> ↗
          </a>
          <a
            href={CHURCH_YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="yt-top-channel-btn"
            title="Visit Official Church YouTube Channel"
          >
            <span>Channel</span> ↗
          </a>
        </div>
      </div>

      {/* YouTube Screen Body */}
      <div className="yt-screen-body">
        {/* Main 16:9 Video Viewport */}
        <div className="yt-player-viewport">
          {isPlaying ? (
            <div className="yt-iframe-wrap">
              <iframe
                className="yt-embed-iframe"
                src={`https://www.youtube-nocookie.com/embed/${video.embedId || 'UagqAfy0iqw'}?autoplay=1&rel=0&modestbranding=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (
            <div
              className="yt-video-poster"
              style={{
                backgroundImage: `linear-gradient(rgba(18, 10, 6, 0.42), rgba(12, 6, 4, 0.82)), url(${posterBg})`,
              }}
              onClick={() => setIsPlaying(true)}
              role="button"
              tabIndex={0}
              aria-label={`Play ${video.title}`}
              onError={() => setThumbError(true)}
            >
              {/* Top Video Header Overlay */}
              <div className="yt-poster-top">
                <div className="yt-live-tag">
                  <span className="yt-live-pulse" />
                  <span>{video.isLive ? 'FEATURED BROADCAST' : 'CHURCH VIDEO'}</span>
                </div>
                <div className="yt-res-tag">1080p HD</div>
              </div>

              {/* Central Play Trigger Button */}
              <div className="yt-play-trigger">
                <div className="yt-play-circle">
                  <span className="yt-play-triangle">▶</span>
                </div>
                <span className="yt-play-hint">Click to Play Video</span>
              </div>

              {/* Bottom Video Meta Info */}
              <div className="yt-poster-bottom">
                <h3 className="yt-video-title">{video.title}</h3>
                <p className="yt-video-sub">{video.titleEn || video.titleAm}</p>
                <div className="yt-video-stats">
                  <span>{video.views}</span> • <span>{video.duration}</span> • <span>Hamere Noah Cathedral, Las Vegas</span>
                </div>
              </div>

              {/* Realistic YouTube Controls Bar */}
              <div className="yt-mock-controls">
                <div className="yt-progress-bar">
                  <div className="yt-progress-fill" style={{ width: '62%' }} />
                </div>
                <div className="yt-controls-row">
                  <div className="yt-ctrl-left">
                    <span className="yt-icon-btn">▶</span>
                    <span className="yt-icon-btn">🔊</span>
                    <span className="yt-time-text">04:18 / {video.duration}</span>
                  </div>
                  <div className="yt-ctrl-right">
                    <span className="yt-icon-btn">⚙</span>
                    <span className="yt-icon-btn">⛶</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Video Information & Channel Subscribe Bar */}
        <div className="yt-info-bar">
          <div className="yt-channel-meta">
            <img src={logo} alt="HNKMSM Logo" className="yt-channel-avatar" />
            <div className="yt-channel-copy">
              <strong>Hamere Noah Media • Las Vegas</strong>
              <small>@HamereNoahMedia17 • 12.8K subscribers</small>
            </div>
          </div>

          <div className="yt-action-buttons">
            <a
              href={CHURCH_YOUTUBE_SUBSCRIBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="yt-subscribe-btn"
              title="Subscribe to Church YouTube Channel"
            >
              Subscribe
            </a>
            <a
              href={video.watchUrl || FEATURED_YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="yt-channel-action-btn yt-btn-watch"
              title="Watch Video on YouTube"
            >
              Watch on YouTube ↗
            </a>
            <a
              href={CHURCH_YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="yt-channel-action-btn"
              title="Open Church YouTube Channel"
            >
              Channel ↗
            </a>
          </div>
        </div>

        {/* Channel Video Quick-Select Playlist */}
        <div className="yt-playlist-strip" aria-label="Church video selector">
          {CHURCH_BROADCAST_VIDEOS.map((v, i) => (
            <button
              key={v.id}
              type="button"
              className={`yt-playlist-item ${selectedVideo === i ? 'active' : ''}`}
              onClick={() => {
                setSelectedVideo(i);
                setIsPlaying(false);
              }}
            >
              <span className="yt-pl-icon">{v.isLive ? '🔴' : '▶'}</span>
              <span className="yt-pl-title">{v.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileYouTubeScreen({ isStandalone = false }) {
  const [mobilePlaying, setMobilePlaying] = useState(false);
  const featured = CHURCH_BROADCAST_VIDEOS[0];

  return (
    <div
      className={`device mobile-device yt-mobile-frame ${isStandalone ? 'yt-mobile-standalone' : ''}`}
      title="Mobile YouTube Church Stream"
    >
      {/* Mobile Top Header */}
      <div className="yt-mobile-header">
        <div className="yt-mobile-brand">
          <span className="yt-red-badge">▶</span>
          <strong>YouTube</strong>
        </div>
        <div className="yt-mobile-icons">
          <span>🔔</span>
          <img src={logo} alt="" className="yt-mobile-avatar" />
        </div>
      </div>

      {/* Channel Header Card */}
      <div className="yt-mobile-channel-card">
        <img src={logo} alt="HNKMSM" className="yt-mobile-channel-logo" />
        <div className="yt-mobile-channel-details">
          <strong>Hamere Noah Media</strong>
          <span>@HamereNoahMedia17</span>
        </div>
        <a
          href={CHURCH_YOUTUBE_SUBSCRIBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="yt-mobile-sub-btn"
          title="Subscribe on YouTube"
        >
          Subscribe
        </a>
      </div>

      {/* Featured Mobile Video Card or Inline Player */}
      {mobilePlaying ? (
        <div className="yt-mobile-player-box">
          <iframe
            className="yt-mobile-iframe"
            src={`https://www.youtube-nocookie.com/embed/${featured.embedId}?autoplay=1&rel=0`}
            title={featured.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <button
            type="button"
            className="yt-mobile-close-btn"
            onClick={() => setMobilePlaying(false)}
          >
            ✕ Close Video
          </button>
        </div>
      ) : (
        <div
          className="yt-mobile-video-card"
          onClick={() => setMobilePlaying(true)}
          role="button"
          tabIndex={0}
          title="Play Featured Video"
        >
          <div
            className="yt-mobile-thumb"
            style={{
              backgroundImage: `linear-gradient(rgba(10, 5, 3, 0.35), rgba(10, 5, 3, 0.85)), url(${featured.hqThumbnail || featured.thumbnail})`,
            }}
          >
            <span className="yt-mobile-live-pill">🔴 FEATURED</span>
            <div className="yt-mobile-play-btn">▶</div>
            <span className="yt-mobile-duration">{featured.duration}</span>
          </div>
          <div className="yt-mobile-info">
            <strong>{featured.title}</strong>
            <small>Hamere Noah Las Vegas • 4.2K views</small>
          </div>
        </div>
      )}

      {/* Direct YouTube Video & Channel Links */}
      <div className="yt-mobile-actions-row">
        <a
          href={FEATURED_YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="yt-mobile-btn-watch"
          title="Watch Directly on YouTube"
        >
          <span>Watch on YouTube</span> ↗
        </a>
        <a
          href={CHURCH_YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="yt-mobile-view-channel"
          title="Access Official Church YouTube Channel"
        >
          <span>Channel</span> ↗
        </a>
      </div>

      {/* Mobile Bottom Tab Bar */}
      <div className="yt-mobile-bottom-tabs">
        <span>⌂</span>
        <span>⚡</span>
        <span className="yt-mobile-add-btn">⊕</span>
        <span>♬</span>
        <span>📁</span>
      </div>
    </div>
  );
}

export default function HeroVisual() {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  // 'both' on desktop, or switchable on small screens: 'laptop' | 'mobile' | 'both'
  const [activeDeviceView, setActiveDeviceView] = useState('laptop');

  return (
    <div className="hero-visual-wrapper">
      {/* Small Screen Device View Toggle Switcher (visible on mobile / small screens) */}
      <div className="hero-device-toggle" aria-label="Switch Device Preview">
        <button
          type="button"
          className={`device-toggle-btn ${activeDeviceView === 'laptop' ? 'active' : ''}`}
          onClick={() => setActiveDeviceView('laptop')}
        >
          <span className="toggle-icon">💻</span>
          <span>Laptop Player</span>
        </button>
        <button
          type="button"
          className={`device-toggle-btn ${activeDeviceView === 'mobile' ? 'active' : ''}`}
          onClick={() => setActiveDeviceView('mobile')}
        >
          <span className="toggle-icon">📱</span>
          <span>Mobile YouTube</span>
        </button>
        <button
          type="button"
          className={`device-toggle-btn ${activeDeviceView === 'both' ? 'active' : ''}`}
          onClick={() => setActiveDeviceView('both')}
        >
          <span className="toggle-icon">❐</span>
          <span>Both Devices</span>
        </button>
      </div>

      <div className={`hero-visual view-mode-${activeDeviceView}`} aria-label="Church YouTube broadcast preview">
        <div className="decorative-cross" aria-hidden="true">
          {BRAND.mark}
        </div>

        {/* Laptop Screen (shown if in desktop mode or laptop/both on mobile) */}
        {(activeDeviceView === 'laptop' || activeDeviceView === 'both') && (
          <DesktopYouTubeScreen
            selectedVideo={selectedVideo}
            setSelectedVideo={setSelectedVideo}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        )}

        {/* Mobile Phone Screen */}
        {(activeDeviceView === 'mobile' || activeDeviceView === 'both') && (
          <MobileYouTubeScreen isStandalone={activeDeviceView === 'mobile'} />
        )}
      </div>

      {/* Channel Link Footer Badge */}
      <div className="hero-visual-footer-bar">
        <div className="hero-footer-left">
          <span className="yt-badge-red">▶</span>
          <span className="hero-channel-name">Official YouTube: <strong>Hamere Noah Media</strong></span>
        </div>
        <div className="hero-footer-links">
          <a
            href={FEATURED_YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-footer-link highlight"
          >
            Watch Video ↗
          </a>
          <a
            href={CHURCH_YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-footer-link"
          >
            Visit Channel ↗
          </a>
        </div>
      </div>
    </div>
  );
}
