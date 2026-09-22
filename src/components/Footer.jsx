import { BRAND, NAV_LINKS, SOCIALS } from '../data/content.js';
import Icon from './Icon.jsx';
import logo from '../assets/logo-cross.png';

export default function Footer({ onSignIn }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img className="brand-logo" src={logo} alt="" width="36" height="42" />
          <div>
            <strong>{BRAND.name}</strong>
            <small>{BRAND.denomination}</small>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {NAV_LINKS.map(({ id, label }) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
          {onSignIn && (
            <button
              type="button"
              onClick={() => onSignIn('member')}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                font: 'inherit',
                color: 'var(--primary)',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Sign In
            </button>
          )}
        </nav>

        <div className="footer-meta">
          <div className="footer-social">
            {SOCIALS.map(({ icon, label, href }) => (
              <a key={label} href={href} aria-label={label}>
                <Icon name={icon} size={16} />
              </a>
            ))}
          </div>
          <small>© {currentYear} {BRAND.name}. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
