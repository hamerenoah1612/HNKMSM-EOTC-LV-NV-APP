import React, { useState } from 'react';
import { BRAND, SOCIALS } from '../data/content.js';
import Icon from './Icon.jsx';
import logo from '../assets/logo-cross.png';
import { useLanguage } from '../context/LanguageContext';

export default function Footer({ onSignIn, onOpenTerms, onOpenPrivacy, onNavigateAbout, onNavigateContact }) {
  const currentYear = new Date().getFullYear();
  const [moreOpen, setMoreOpen] = useState(false);
  const { language, t } = useLanguage();
  const isAm = language === 'am';

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img className="brand-logo" src={logo} alt="" width="36" height="42" />
          <div>
            <strong>{BRAND.name}</strong>
            <small>{isAm ? 'የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን' : BRAND.denomination}</small>
          </div>
        </div>

        {/* Structured Desktop & Mobile / Tablet Navigation */}
        <nav className="footer-nav" aria-label="Footer navigation">
          {/* Main Primary Links */}
          <a href="#home" className="footer-nav-link">
            <Icon name="home" size={15} />
            <span>{t('navHome', 'Home')}</span>
          </a>
          <a href="#services" className="footer-nav-link">
            <Icon name="church" size={15} />
            <span>{t('navServices', 'Services')}</span>
          </a>
          <a href="#events" className="footer-nav-link">
            <Icon name="calendar" size={15} />
            <span>{t('navEvents', 'Events')}</span>
          </a>
          <a href="#church-school" className="footer-nav-link">
            <Icon name="school" size={15} />
            <span>{t('navSchool', 'School')}</span>
          </a>
          <a href="#giving" className="footer-nav-link">
            <Icon name="heart" size={15} />
            <span>{t('navDonations', 'Donations')}</span>
          </a>

          {/* More Dropdown / Expandable in Footer */}
          <div className="footer-more-container">
            <button
              type="button"
              className="footer-more-toggle"
              onClick={() => setMoreOpen(!moreOpen)}
              aria-expanded={moreOpen}
            >
              <span>{t('more', 'More')}</span>
              <small style={{ fontSize: '0.65rem', marginLeft: '2px' }}>{moreOpen ? '▲' : '▼'}</small>
            </button>

            {moreOpen && (
              <div className="footer-more-dropdown">
                <a href="#features" onClick={() => setMoreOpen(false)}>{t('navFeatures', 'Features')}</a>
                <a href="#news" onClick={() => setMoreOpen(false)}>{t('navNews', 'News')}</a>
                <a href="#multimedia" onClick={() => setMoreOpen(false)}>{t('navMultimedia', 'Multimedia')}</a>
                <a href="#learning" onClick={() => setMoreOpen(false)}>{t('navLearning', 'Learning')}</a>
                <a href="#shop" onClick={() => setMoreOpen(false)}>{t('navShop', 'Shop')}</a>
                <button
                  type="button"
                  className="footer-sub-link-btn"
                  onClick={() => {
                    setMoreOpen(false);
                    if (onNavigateAbout) onNavigateAbout();
                    else window.location.hash = '#about';
                  }}
                >
                  {t('navAboutUs', 'About Us')}
                </button>
                <button
                  type="button"
                  className="footer-sub-link-btn"
                  onClick={() => {
                    setMoreOpen(false);
                    if (onNavigateContact) onNavigateContact();
                    else window.location.hash = '#contact';
                  }}
                >
                  {t('navContact', 'Contact')}
                </button>
              </div>
            )}
          </div>

          {onSignIn && (
            <button
              type="button"
              onClick={() => onSignIn('member')}
              className="footer-signin-btn"
            >
              <Icon name="user" size={14} />
              <span>{t('signIn', 'Sign In')}</span>
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

          {/* Terms & Conditions, Privacy Policy buttons */}
          <div className="footer-legal-links">
            <button
              type="button"
              className="footer-legal-btn"
              onClick={onOpenTerms}
            >
              {isAm ? 'ውሎችና ደንቦች' : 'Terms & Conditions'}
            </button>
            <span className="legal-sep">•</span>
            <button
              type="button"
              className="footer-legal-btn"
              onClick={onOpenPrivacy}
            >
              {isAm ? 'የግላዊነት ፖሊሲ' : 'Privacy Policy'}
            </button>
          </div>

          <small>© {currentYear} {BRAND.name}. {isAm ? 'መብቱ በሕግ የተጠበቀ ነው።' : 'All rights reserved.'}</small>
        </div>
      </div>
    </footer>
  );
}
