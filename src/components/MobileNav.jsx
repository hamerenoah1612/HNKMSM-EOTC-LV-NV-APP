import React, { useState } from 'react';
import useActiveSection from '../hooks/useActiveSection.js';
import Icon from './Icon.jsx';

export default function MobileNav({ onNavigateAbout, onNavigateContact }) {
  const [moreOpen, setMoreOpen] = useState(false);

  const primaryItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'services', label: 'Services', icon: 'church' },
    { id: 'events', label: 'Events', icon: 'calendar' },
    { id: 'giving', label: 'Donations', icon: 'heart' },
  ];

  const primaryIds = primaryItems.map((item) => item.id);
  const active = useActiveSection(primaryIds, 'home');

  const moreSubItems = [
    { id: 'features', label: 'Features', icon: 'grid', isAnchor: true },
    { id: 'news', label: 'News', icon: 'mail', isAnchor: true },
    { id: 'multimedia', label: 'Multimedia', icon: 'play', isAnchor: true },
    { id: 'learning', label: 'Learning', icon: 'book', isAnchor: true },
    { id: 'church-school', label: 'School', icon: 'award', isAnchor: true },
    { id: 'shop', label: 'Shop', icon: 'crown', isAnchor: true },
    {
      id: 'about',
      label: 'About Us',
      icon: 'shield',
      action: () => {
        setMoreOpen(false);
        if (onNavigateAbout) onNavigateAbout();
        else window.location.hash = '#about';
      },
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: 'mail',
      action: () => {
        setMoreOpen(false);
        if (onNavigateContact) onNavigateContact();
        else window.location.hash = '#contact';
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
              <strong>More Church Sections</strong>
              <button
                type="button"
                className="mobile-more-close"
                onClick={() => setMoreOpen(false)}
              >
                ✕
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

        {/* 5th element: More button */}
        <button
          type="button"
          className={`mobile-nav-more-btn ${moreOpen ? 'active' : ''}`}
          onClick={() => setMoreOpen(!moreOpen)}
          aria-expanded={moreOpen}
          aria-label="More options"
        >
          <span className="more-dots-icon" aria-hidden="true">⋯</span>
          <span>More</span>
        </button>
      </nav>
    </>
  );
}
