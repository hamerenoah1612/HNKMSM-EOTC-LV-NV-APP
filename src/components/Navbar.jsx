import { BRAND, NAV_LINKS, PORTAL_URL, openPortal } from '../data/content.js';
import useActiveSection from '../hooks/useActiveSection.js';
import Icon from './Icon.jsx';
import logo from '../assets/logo-cross.png';

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

/**
 * Desktop: full inline nav. Mobile (<900px): no hamburger — the header keeps
 * just the logo + Sign In, and navigation moves to the bottom MobileNav bar.
 */
export default function Navbar() {
  const active = useActiveSection(SECTION_IDS, 'home');

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label={`${BRAND.name} home`}>
          <img className="brand-logo" src={logo} alt="" width="40" height="48" />
          <div className="brand-copy">
            <span className="brand-name">{BRAND.name}</span>
            <span className="brand-tagline">{BRAND.tagline}</span>
          </div>
        </a>

        <nav className="main-nav" id="main-nav" aria-label="Primary navigation">
          {NAV_LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'active' : undefined}
              aria-current={active === id ? 'true' : undefined}
            >
              {label}
            </a>
          ))}
          <a
            className="btn btn-primary nav-signin"
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={openPortal}
          >
            <Icon name="user" size={16} /> Sign In
          </a>
        </nav>

        <a
          className="btn btn-primary header-signin"
          href={PORTAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={openPortal}
        >
          <Icon name="user" size={15} /> Sign In
        </a>
      </div>
    </header>
  );
}
