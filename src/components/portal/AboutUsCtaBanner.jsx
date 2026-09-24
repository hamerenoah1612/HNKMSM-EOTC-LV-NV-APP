import React from 'react';
import ctaChurch from '../../assets/cta-church.jpg';
import { BRAND } from '../../data/content.js';

export default function AboutUsCtaBanner({ onNavigateAbout }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (onNavigateAbout) {
      onNavigateAbout();
    } else {
      window.location.hash = '#about';
    }
  };

  return (
    <section className="cta-section cta-about-section" id="about">
      <div className="container cta-banner cta-banner-about">
        <img className="cta-art" src={ctaChurch} alt="" aria-hidden="true" />
        <div className="cta-copy">
          <h2>About Our Holy Parish</h2>
          <p>
            Learn about our ancient apostolic history, sacred vision, divine mission, spiritual values, and pastoral leadership.
          </p>
        </div>
        <div className="cta-action">
          <a
            className="btn btn-light"
            href="#about"
            onClick={handleClick}
          >
            Explore About Us →
          </a>
          <p className="cta-tagline">{BRAND.denomination}</p>
        </div>
      </div>
    </section>
  );
}
