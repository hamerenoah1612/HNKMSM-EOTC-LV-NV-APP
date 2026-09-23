import { BRAND, NAV_LINKS, PORTAL_URL, openPortal } from '../data/content.js';
import useActiveSection from '../hooks/useActiveSection.js';
import Icon from './Icon.jsx';
import logo from '../assets/logo-cross.png';

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

/**
 * Desktop: full inline nav. Mobile (<900px): no hamburger — the header keeps
 * just the logo + Sign In, and navigation moves to the bottom MobileNav bar.
 */
export default function Navbar({ onSignIn, user, onSignOut, onOpenDashboard }) {
  const active = useActiveSection(SECTION_IDS, 'home');

  const handleSignInClick = (e, role = 'member') => {
    if (user && onOpenDashboard) {
      e.preventDefault();
      onOpenDashboard();
      return;
    }
    if (onSignIn) {
      e.preventDefault();
      onSignIn(role);
    } else {
      openPortal(e);
    }
  };

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
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                type="button"
                className="btn btn-primary nav-signin"
                onClick={(e) => handleSignInClick(e, user.role)}
                title="Open Church Portal"
                style={{ cursor: 'pointer' }}
              >
                <Icon name="user" size={16} /> {user.name.split(' ')[0]} ({user.role})
              </button>
              {onSignOut && (
                <button
                  type="button"
                  onClick={onSignOut}
                  style={{
                    background: 'transparent',
                    border: '1px solid var(--line)',
                    padding: '6px 10px',
                    borderRadius: '8px',
                    fontSize: '0.78rem',
                    color: 'var(--muted)',
                    cursor: 'pointer',
                  }}
                >
                  Sign Out
                </button>
              )}
            </div>
          ) : (
            <a
              className="btn btn-primary nav-signin"
              href="#signin"
              onClick={(e) => handleSignInClick(e, 'member')}
            >
              <Icon name="user" size={16} /> Sign In
            </a>
          )}
        </nav>

        {user ? (
          <button
            type="button"
            className="btn btn-primary header-signin"
            onClick={(e) => handleSignInClick(e, user.role)}
            style={{ cursor: 'pointer' }}
          >
            <Icon name="user" size={15} /> {user.name.split(' ')[0]}
          </button>
        ) : (
          <a
            className="btn btn-primary header-signin"
            href="#signin"
            onClick={(e) => handleSignInClick(e, 'member')}
          >
            <Icon name="user" size={15} /> Sign In
          </a>
        )}
      </div>
    </header>
  );
}
