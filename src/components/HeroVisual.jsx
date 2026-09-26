import React, { useState } from 'react';
import { BRAND } from '../data/content.js';
import logo from '../assets/logo-cross.png';
import churchBg from '../assets/church-portal-background.jpg';

export const FEATURED_YOUTUBE_URL = 'https://youtu.be/UagqAfy0iqw?si=-pAaNijlHwilufvI';
export const CHURCH_YOUTUBE_URL = 'https://www.youtube.com/@HamereNoahMedia';
export const CHURCH_YOUTUBE_SUBSCRIBE_URL = 'https://www.youtube.com/@HamereNoahMedia?sub_confirmation=1';

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
    id: 'tinsae-pascha',
    title: 'ትንሳኤከ ለአለ አመነ ዲቤነ ሆይ፤ ብርሃንህን ላክ //2026',
    titleAm: 'ትንሳኤከ ለአለ አመነ ዲቤነ ሆይ፤ ብርሃንህን ላክ //2026',
    titleEn: 'Sunday Divine Liturgy Chants & Holy Pascha',
    views: '5.1K views',
    duration: '1:48:20',
    isLive: true,
    embedId: 'HNuUnP2K0nc',
    watchUrl: 'https://youtu.be/HNuUnP2K0nc?si=OWzhxV2bD1ojtR9U',
    thumbnail: 'https://img.youtube.com/vi/HNuUnP2K0nc/maxresdefault.jpg',
    hqThumbnail: 'https://img.youtube.com/vi/HNuUnP2K0nc/hqdefault.jpg',
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
    hqThumbnail: 'https://img.youtube.com/vi/UagqAfy0iqw/hqdefault.jpg',
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
    hqThumbnail: 'https://img.youtube.com/vi/UagqAfy0iqw/hqdefault.jpg',
    desc: 'Sunday youth ministry prayers, hymns, and spiritual homily',
  },
];

export default function HeroVisual() {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbError, setThumbError] = useState(false);

  const video = CHURCH_BROADCAST_VIDEOS[selectedVideo] || CHURCH_BROADCAST_VIDEOS[0];
  const posterBg = thumbError
    ? churchBg
    : video.thumbnail || video.hqThumbnail || churchBg;

  return (
    <div className="hero-visual-wrapper auto-responsive-hero">
      <div className="hero-visual auto-device-screen" aria-label="Church YouTube broadcast preview">
        <div className="decorative-cross" aria-hidden="true">
          {BRAND.mark}
        </div>

        {/* Main Fully Auto-Responsive YouTube Device Screen */}
        <div className="device desktop-device yt-desktop-frame yt-auto-frame" title="Church YouTube Live Broadcast">
          {/* Top Window / YouTube Bar */}
          <div className="device-bar yt-device-bar">
            <div className="yt-window-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>

            <div className="yt-bar-brand">
              <span className="yt-red-icon" aria-hidden="true">▶</span>
              <span className="yt-brand-text">YouTube</span>
              <span className="yt-divider">|</span>
              <span className="yt-channel-badge">@HamereNoahMedia</span>
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
                <span>Watch</span> ↗
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
            {/* Auto Fluid 16:9 Video Viewport */}
            <div className="yt-player-viewport">
              {isPlaying ? (
                <div className="yt-iframe-wrap">
                  <iframe
                    className="yt-embed-iframe"
                    src={`https://www.youtube.com/embed/${video.embedId || 'UagqAfy0iqw'}?si=-pAaNijlHwilufvI&autoplay=1&rel=0&modestbranding=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div
                  className="yt-video-poster"
                  style={{
                    backgroundImage: `linear-gradient(rgba(18, 10, 6, 0.45), rgba(12, 6, 4, 0.84)), url(${posterBg})`,
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
                      <span>{video.isLive ? 'LIVE' : 'CHURCH'}</span>
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
                      <span>{video.views}</span> • <span>{video.duration}</span> • <span>Las Vegas, NV</span>
                    </div>
                  </div>

                  {/* Realistic YouTube Controls Bar */}
                  <div className="yt-mock-controls">
                    <div className="yt-progress-bar">
                      <div className="yt-progress-fill" style={{ width: '64%' }} />
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
                  <strong>Hamere Noah Media</strong>
                  <small>@HamereNoahMedia • Las Vegas Cathedral</small>
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
                  Watch ↗
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
                  title={`Switch to: ${v.title}`}
                >
                  <span className="yt-pl-icon">{v.isLive ? '🔴' : '▶'}</span>
                  <span className="yt-pl-title">{v.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Channel Link Footer Badge */}
      <div className="hero-visual-footer-bar">
        <div className="hero-footer-left">
          <span className="yt-badge-red">▶</span>
          <span className="hero-channel-name">Official Church Broadcast: <strong>Hamere Noah Media</strong></span>
        </div>
        <div className="hero-footer-links">
          <a
            href={video.watchUrl || FEATURED_YOUTUBE_URL}
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
