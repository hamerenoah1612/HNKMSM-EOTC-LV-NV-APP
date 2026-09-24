import { useState, useEffect, useRef } from 'react';
import { BRAND, openPortal } from '../data/content.js';
import useActiveSection from '../hooks/useActiveSection.js';
import Icon from './Icon.jsx';
import logo from '../assets/logo-cross.png';
import { useLanguage } from '../context/LanguageContext';

const SECTION_IDS = ['home', 'services', 'events', 'giving', 'about', 'contact'];

export default function Navbar({
  onSignIn,
  user,
  onSignOut,
  onOpenDashboard,
  onNavigateAbout,
  onNavigateContact,
}) {
  const { language, toggleLanguage, t } = useLanguage();
  const active = useActiveSection(SECTION_IDS, 'home');
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const moreRef = useRef(null);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignInClick = (e, role = 'member') => {
    setMobileMenuOpen(false);
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

  const handleAboutClick = (e) => {
    e.preventDefault();
    setMoreOpen(false);
    setMobileMenuOpen(false);
    if (onNavigateAbout) {
      onNavigateAbout();
    } else {
      window.location.hash = '#about';
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setMoreOpen(false);
    setMobileMenuOpen(false);
    if (onNavigateContact) {
      onNavigateContact();
    } else {
      window.location.hash = '#contact';
    }
  };

  const handleNavAnchorClick = () => {
    setMoreOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Brand */}
        <a className="brand" href="#home" aria-label={`${BRAND.name} home`}>
          <img className="brand-logo" src={logo} alt="" width="40" height="48" />
          <div className="brand-copy">
            <span className="brand-name">{language === 'am' ? t('churchName', 'ደብረ ምሕረት ቅድስት ማርያም') : BRAND.name}</span>
            <span className="brand-tagline">{language === 'am' ? 'የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን' : BRAND.tagline}</span>
          </div>
        </a>

        {/* Primary Desktop Navigation */}
        <nav className="main-nav" id="main-nav" aria-label="Primary navigation">
          <a
            href="#home"
            className={active === 'home' ? 'active' : undefined}
            onClick={handleNavAnchorClick}
          >
            {t('navHome', 'Home')}
          </a>
          <a
            href="#services"
            className={active === 'services' ? 'active' : undefined}
            onClick={handleNavAnchorClick}
          >
            {t('navServices', 'Services')}
          </a>
          <a
            href="#events"
            className={active === 'events' ? 'active' : undefined}
            onClick={handleNavAnchorClick}
          >
            {t('navEvents', 'Events')}
          </a>
          <a
            href="#giving"
            className={active === 'giving' ? 'active' : undefined}
            onClick={handleNavAnchorClick}
          >
            {t('navDonations', 'Donations')}
          </a>

          {/* More Dropdown for Desktop Nav */}
          <div className="nav-more-wrapper" ref={moreRef}>
            <button
              type="button"
              className={`nav-more-btn ${moreOpen ? 'active' : ''}`}
              onClick={() => setMoreOpen(!moreOpen)}
              aria-expanded={moreOpen}
              aria-haspopup="true"
            >
              <span>{t('more', 'More')}</span>
              <small style={{ fontSize: '0.65rem' }}>{moreOpen ? '▲' : '▼'}</small>
            </button>

            {moreOpen && (
              <div className="nav-more-popover" role="menu">
                <a href="#features" onClick={handleNavAnchorClick} role="menuitem">
                  {t('navFeatures', 'Features')}
                </a>
                <a href="#news" onClick={handleNavAnchorClick} role="menuitem">
                  {t('navNews', 'News')}
                </a>
                <a href="#multimedia" onClick={handleNavAnchorClick} role="menuitem">
                  {t('navMultimedia', 'Multimedia')}
                </a>
                <a href="#learning" onClick={handleNavAnchorClick} role="menuitem">
                  {t('navLearning', 'Learning')}
                </a>
                <a href="#church-school" onClick={handleNavAnchorClick} role="menuitem">
                  {t('navChurchSchool', 'Church School')}
                </a>
                <a href="#shop" onClick={handleNavAnchorClick} role="menuitem">
                  {t('navShop', 'Shop')}
                </a>
                <button
                  type="button"
                  onClick={handleAboutClick}
                  role="menuitem"
                >
                  {t('navAboutUs', 'About Us')}
                </button>
                <button
                  type="button"
                  onClick={handleContactClick}
                  role="menuitem"
                >
                  {t('navContact', 'Contact')}
                </button>
              </div>
            )}
          </div>

          {/* Language Switcher */}
          <button
            id="navbar-lang-toggle"
            type="button"
            onClick={toggleLanguage}
            className="nav-lang-btn"
            title={language === 'en' ? 'ወደ አማርኛ ቀይር (Switch to Amharic)' : 'Switch to English'}
          >
            <svg
              className="w-3.5 h-3.5 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              width="14"
              height="14"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" />
              <path d="M2 12h20" strokeWidth="2" />
            </svg>
            <span>{language === 'en' ? 'አማርኛ' : 'English'}</span>
          </button>

          {/* Desktop User/Sign-in Controls */}
          {user ? (
            <div className="nav-user-actions">
              <button
                type="button"
                className="btn btn-primary nav-signin"
                onClick={(e) => handleSignInClick(e, user.role)}
                title="Open Church Portal"
              >
                <Icon name="user" size={16} /> {user.name.split(' ')[0]} ({user.role === 'admin' ? t('admin', 'Admin') : t('member', 'Member')})
              </button>
              {onSignOut && (
                <button
                  type="button"
                  className="nav-signout-btn"
                  onClick={onSignOut}
                >
                  {t('signOut', 'Sign Out')}
                </button>
              )}
            </div>
          ) : (
            <a
              className="btn btn-primary nav-signin"
              href="#signin"
              onClick={(e) => handleSignInClick(e, 'member')}
            >
              <Icon name="user" size={16} /> {t('signIn', 'Sign In')}
            </a>
          )}
        </nav>

        {/* Mobile Header Actions (Sign-in icon + Language toggle + Menu Hamburger) */}
        <div className="header-mobile-actions">
          {/* Mobile Language Switcher */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="nav-lang-btn-mobile"
            title={language === 'en' ? 'ወደ አማርኛ ቀይር' : 'Switch to English'}
          >
            🌐 <span>{language === 'en' ? 'አማርኛ' : 'EN'}</span>
          </button>

          {user ? (
            <button
              type="button"
              className="btn btn-primary"
              style={{ minHeight: '38px', padding: '0 12px', fontSize: '0.8rem' }}
              onClick={(e) => handleSignInClick(e, user.role)}
            >
              <Icon name="user" size={14} /> {user.name.split(' ')[0]}
            </button>
          ) : (
            <a
              className="btn btn-primary"
              style={{ minHeight: '38px', padding: '0 12px', fontSize: '0.8rem' }}
              href="#signin"
              onClick={(e) => handleSignInClick(e, 'member')}
            >
              <Icon name="user" size={14} /> {t('signIn', 'Sign In')}
            </a>
          )}

          <button
            type="button"
            className={`nav-toggle-btn ${mobileMenuOpen ? 'is-open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile & Tablet Dropdown Navigation Menu */}
        {mobileMenuOpen && (
          <div className="mobile-nav-menu is-open" role="dialog" aria-label="Mobile Navigation">
            <div style={{ padding: '8px 16px', display: 'flex', justifyContent: 'center' }}>
              <button
                type="button"
                onClick={toggleLanguage}
                className="nav-lang-btn"
                style={{ width: '100%', justifyContent: 'center', padding: '8px 16px' }}
              >
                🌐 <span>{language === 'en' ? 'ቋንቋ: አማርኛ (Switch to Amharic)' : 'Language: English'}</span>
              </button>
            </div>

            <a
              href="#home"
              className={active === 'home' ? 'active' : undefined}
              onClick={handleNavAnchorClick}
            >
              {t('navHome', 'Home')}
            </a>
            <a
              href="#services"
              className={active === 'services' ? 'active' : undefined}
              onClick={handleNavAnchorClick}
            >
              {t('navServices', 'Services')}
            </a>
            <a
              href="#events"
              className={active === 'events' ? 'active' : undefined}
              onClick={handleNavAnchorClick}
            >
              {t('navEvents', 'Events')}
            </a>
            <a
              href="#giving"
              className={active === 'giving' ? 'active' : undefined}
              onClick={handleNavAnchorClick}
            >
              {t('navDonations', 'Donations')}
            </a>
            
            <div className="mobile-nav-divider" />
            
            <a href="#features" onClick={handleNavAnchorClick}>
              {t('navFeatures', 'Features')}
            </a>
            <a href="#news" onClick={handleNavAnchorClick}>
              {t('navNews', 'News')}
            </a>
            <a href="#multimedia" onClick={handleNavAnchorClick}>
              {t('navMultimedia', 'Multimedia')}
            </a>
            <a href="#learning" onClick={handleNavAnchorClick}>
              {t('navLearning', 'Learning')}
            </a>
            <a href="#church-school" onClick={handleNavAnchorClick}>
              {t('navChurchSchool', 'Church School')}
            </a>
            <a href="#shop" onClick={handleNavAnchorClick}>
              {t('navShop', 'Shop')}
            </a>
            <button
              type="button"
              className="mobile-nav-link"
              onClick={handleAboutClick}
            >
              {t('navAboutUs', 'About Us')}
            </button>
            <button
              type="button"
              className="mobile-nav-link"
              onClick={handleContactClick}
            >
              {t('navContact', 'Contact')}
            </button>

            {user && onSignOut && (
              <div className="mobile-nav-auth">
                <div className="mobile-nav-divider" />
                <button
                  type="button"
                  className="nav-signout-btn"
                  style={{ width: '100%', padding: '10px' }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onSignOut();
                  }}
                >
                  {t('signOut', 'Sign Out')} ({user.name})
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
