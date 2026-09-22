import { BRAND, NAV_LINKS, SOCIALS } from '../data/content.js';
import Icon from './Icon.jsx';
import logo from '../assets/logo-cross.png';
import ObjectivesSection from './ObjectivesSection.jsx';

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <ObjectivesSection />

      <div className="container footer-grid">
        <div className="footer-brand">
          <img className="brand-logo" src={logo} alt="" width="40" height="48" />
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
        </nav>

        <div className="footer-meta">
          <div className="footer-social">
            {SOCIALS.map(({ icon, label, href }) => (
              <a key={icon} href={href} aria-label={label}>
                <Icon name={icon} size={18} />
              </a>
            ))}
          </div>
          <span>{BRAND.mark} All for the Glory of God</span>
          <small>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}
