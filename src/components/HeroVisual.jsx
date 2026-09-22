import { BRAND, HERO_PREVIEW, PORTAL_URL, openPortal } from '../data/content.js';
import avatar from '../assets/avatar.jpg';
import phoneChurch from '../assets/phone-church.jpg';

function Avatar() {
  return (
    <span className="avatar-dot" style={{ backgroundImage: `url(${avatar})` }} />
  );
}

function DesktopPreview() {
  const { sidebar, stats, events, announcements } = HERO_PREVIEW;

  return (
    <a
      href={PORTAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={openPortal}
      className="device desktop-device"
      title="Open HNKMSM Portal"
      style={{ display: 'block', cursor: 'pointer', textDecoration: 'none' }}
    >
      <div className="device-bar">
        <span className="mini-brand">
          {BRAND.mark} {BRAND.name}
        </span>
        <span className="mini-search">Search...</span>
        <span>🔔</span>
        <Avatar />
      </div>

      <div className="dashboard-preview">
        <aside className="mini-sidebar">
          {sidebar.map((item, index) => (
            <div key={item} className={index === 0 ? 'mini-side-active' : undefined}>
              {item}
            </div>
          ))}
        </aside>

        <div className="mini-main">
          <div className="mini-greeting">
            <strong>
              Welcome back,
              <br />
              Abune Selam
            </strong>
            <span>“Be a light to the world.”</span>
          </div>

          <div className="mini-stats">
            {stats.map(({ label, value, note }) => (
              <div key={label}>
                <small>{label}</small>
                <strong>{value}</strong>
                <em>{note}</em>
              </div>
            ))}
          </div>

          <div className="mini-panels">
            <div className="mini-panel">
              <strong>Upcoming Events</strong>
              {events.map((event) => (
                <p key={event}>{event}</p>
              ))}
            </div>
            <div className="mini-panel">
              <strong>Recent Announcements</strong>
              {announcements.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

function MobilePreview() {
  return (
    <a
      href={PORTAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={openPortal}
      className="device mobile-device"
      title="Open HNKMSM Portal"
      style={{ display: 'block', cursor: 'pointer', textDecoration: 'none' }}
    >
      <div className="mobile-top">
        <span>{BRAND.mark} HNKMSM</span>
        <Avatar />
      </div>
      <div className="mobile-hero-card">
        <img className="mobile-hero-art" src={phoneChurch} alt="" />
        <small>Good morning,</small>
        <strong>Abune Selam</strong>
      </div>
      <div className="mobile-menu">
        {HERO_PREVIEW.mobileMenu.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <div className="mobile-bottom">⌂ &nbsp; ◫ &nbsp; ♥ &nbsp; ☰</div>
    </a>
  );
}

export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Member platform preview">
      <div className="decorative-cross" aria-hidden="true">
        {BRAND.mark}
      </div>
      <DesktopPreview />
      <MobilePreview />
    </div>
  );
}
