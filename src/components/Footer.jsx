import React, { useState } from 'react';
import { BRAND, SOCIALS } from '../data/content.js';
import Icon from './Icon.jsx';
import logo from '../assets/logo-cross.png';

export default function Footer({ onSignIn, onOpenTerms, onOpenPrivacy, onNavigateAbout, onNavigateContact }) {
  const currentYear = new Date().getFullYear();
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img className="brand-logo" src={logo} alt="" width="36" height="42" />
          <div>
            <strong>{BRAND.name}</strong>
            <small>{BRAND.denomination}</small>
          </div>
        </div>

        {/* Structured Desktop & Mobile / Tablet Navigation */}
        <nav className="footer-nav" aria-label="Footer navigation">
          {/* Main Primary Links */}
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#events">Events</a>
          <a href="#giving">Donations</a>

          {/* More Dropdown / Expandable in Footer */}
          <div className="footer-more-container">
            <button
              type="button"
              className="footer-more-toggle"
              onClick={() => setMoreOpen(!moreOpen)}
              aria-expanded={moreOpen}
            >
              More ({moreOpen ? '▲' : '▼'})
            </button>

            {moreOpen && (
              <div className="footer-more-dropdown">
                <a href="#features" onClick={() => setMoreOpen(false)}>Features</a>
                <a href="#news" onClick={() => setMoreOpen(false)}>News</a>
                <a href="#multimedia" onClick={() => setMoreOpen(false)}>Multimedia</a>
                <a href="#learning" onClick={() => setMoreOpen(false)}>Learning</a>
                <a href="#church-school" onClick={() => setMoreOpen(false)}>Church School</a>
                <a href="#shop" onClick={() => setMoreOpen(false)}>Shop</a>
                <button
                  type="button"
                  className="footer-sub-link-btn"
                  onClick={() => {
                    setMoreOpen(false);
                    if (onNavigateAbout) onNavigateAbout();
                    else window.location.hash = '#about';
                  }}
                >
                  About Us
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
                  Contact
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

          {/* Terms & Conditions, Privacy Policy buttons */}
          <div className="footer-legal-links">
            <button
              type="button"
              className="footer-legal-btn"
              onClick={onOpenTerms}
            >
              Terms &amp; Conditions
            </button>
            <span className="legal-sep">•</span>
            <button
              type="button"
              className="footer-legal-btn"
              onClick={onOpenPrivacy}
            >
              Privacy Policy
            </button>
          </div>

          <small>© {currentYear} {BRAND.name}. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
