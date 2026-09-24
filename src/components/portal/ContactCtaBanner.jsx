import React from 'react';
import ctaChurch from '../../assets/cta-church.jpg';
import { BRAND } from '../../data/content.js';

export default function ContactCtaBanner({ onNavigateContact }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (onNavigateContact) {
      onNavigateContact();
    } else {
      window.location.hash = '#contact';
    }
  };

  return (
    <section className="cta-section cta-contact-section" id="contact">
      <div className="container cta-banner cta-banner-contact">
        <img className="cta-art" src={ctaChurch} alt="" aria-hidden="true" />
        <div className="cta-copy">
          <h2>Contact &amp; Visit Our Sanctuary</h2>
          <p>
            Have a question, need spiritual guidance, or planning your visit? Connect with our parish clergy, rectory office, and servants.
          </p>
        </div>
        <div className="cta-action">
          <a
            className="btn btn-light"
            href="#contact"
            onClick={handleClick}
          >
            Visit Contact Page →
          </a>
          <p className="cta-tagline">Las Vegas, NV • (702) 555-EOTC</p>
        </div>
      </div>
    </section>
  );
}
