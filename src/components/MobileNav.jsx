import React, { useState } from 'react';
import useActiveSection from '../hooks/useActiveSection.js';
import Icon from './Icon.jsx';
import { useLanguage } from '../context/LanguageContext';

export default function MobileNav({ onNavigateAbout, onNavigateContact }) {
  const [moreOpen, setMoreOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const isAm = language === 'am';

  const primaryItems = [
    { id: 'home', label: t('navHome', 'Home'), icon: 'home' },
    { id: 'services', label: t('navServices', 'Services'), icon: 'church' },
    { id: 'events', label: t('navEvents', 'Events'), icon: 'calendar' },
    { id: 'church-school', label: t('navSchool', 'School'), icon: 'school' },
    { id: 'giving', label: t('navDonations', 'Donations'), icon: 'heart' },
  ];

  const primaryIds = primaryItems.map((item) => item.id);
  const active = useActiveSection(primaryIds, 'home');

  const moreSubItems = [
    { id: 'features', label: t('navFeatures', 'Features'), icon: 'grid', isAnchor: true },
    { id: 'news', label: t('navNews', 'News'), icon: 'mail', isAnchor: true },
    { id: 'multimedia', label: t('navMultimedia', 'Multimedia'), icon: 'play', isAnchor: true },
    { id: 'learning', label: t('navLearning', 'Learning'), icon: 'book', isAnchor: true },
    { id: 'shop', label: t('navShop', 'Shop'), icon: 'crown', isAnchor: true },
    {
      id: 'about',
      label: t('navAboutUs', 'About Us'),
      icon: 'shield',
      action: () => {
        setMoreOpen(false);
        if (onNavigateAbout) onNavigateAbout();
        else window.location.hash = '#about';
      },
    },
    {
      id: 'contact',
      label: t('navContact', 'Contact'),
      icon: 'mail',
      action: () => {
        setMoreOpen(false);
        if (onNavigateContact) onNavigateContact();
        else window.location.hash = '#contact';
      },
    },
    {
      id: 'lang-action',
      label: language === 'en' ? 'አማርኛ (Amharic)' : 'English',
      icon: 'globe',
      action: () => {
        toggleLanguage();
      },
    },
  ];

  return (
    <>
      {/* Popover sheet for "More" submenu */}
      {moreOpen && (
        <div
          className="mobile-more-backdrop"
          onClick={() => setMoreOpen(false)}
        >
          <div
            className="mobile-more-sheet"
            onClick={(e) => e.stopPropagation()}
            role="menu"
            aria-label="More navigation items"
          >
            <div className="mobile-more-sheet-header">
              <strong>{isAm ? 'ተጨማሪ የቤተክርስቲያን ክፍሎች' : 'More Church Sections'}</strong>
              <button
                type="button"
                className="mobile-more-close"
                onClick={() => setMoreOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Prominent Language Switcher in More Menu for Mobile & Tablet */}
            <div className="mobile-more-lang-bar">
              <button
                type="button"
                className="mobile-more-lang-btn"
                onClick={toggleLanguage}
                title={language === 'en' ? 'ወደ አማርኛ ቀይር (Switch to Amharic)' : 'Switch to English'}
              >
                <div className="lang-btn-content">
                  <Icon name="globe" size={18} />
                  <span>{language === 'en' ? 'ቋንቋ: ወደ አማርኛ ቀይር' : 'Language: Switch to English'}</span>
                </div>
                <span className="lang-pill-badge">{language === 'en' ? 'አማርኛ' : 'EN'}</span>
              </button>
            </div>

            <div className="mobile-more-grid">
              {moreSubItems.map((sub) => {
                if (sub.isAnchor) {
                  return (
                    <a
                      key={sub.id}
                      href={`#${sub.id}`}
                      className="mobile-more-item"
                      onClick={() => setMoreOpen(false)}
                    >
                      <Icon name={sub.icon} size={20} />
                      <span>{sub.label}</span>
                    </a>
                  );
                }
                return (
                  <button
                    key={sub.id}
                    type="button"
                    className="mobile-more-item mobile-more-btn"
                    onClick={sub.action}
                  >
                    <Icon name={sub.icon} size={20} />
                    <span>{sub.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Sticky Bottom Tab Bar */}
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {primaryItems.map(({ id, label, icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id && !moreOpen ? 'active' : undefined}
            aria-current={active === id ? 'true' : undefined}
          >
            <Icon name={icon} size={20} />
            <span>{label}</span>
          </a>
        ))}

        {/* 6th element: More button */}
        <button
          type="button"
          className={`mobile-nav-more-btn ${moreOpen ? 'active' : ''}`}
          onClick={() => setMoreOpen(!moreOpen)}
          aria-expanded={moreOpen}
          aria-label="More options"
        >
          <span className="more-dots-icon" aria-hidden="true">⋯</span>
          <span>{isAm ? 'ተጨማሪ' : 'More'}</span>
        </button>
      </nav>
    </>
  );
}
