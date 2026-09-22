import { BRAND, PORTAL_URL, openPortal } from '../data/content.js';
import ctaChurch from '../assets/cta-church.jpg';

export default function CtaBanner() {
  return (
    <section className="cta-section" id="signin">
      <div className="container cta-banner">
        <img className="cta-art" src={ctaChurch} alt="" aria-hidden="true" />
        <div className="cta-copy">
          <h2>Together for a Stronger Tomorrow</h2>
          <p>
            Join {BRAND.name} and be part of a vibrant, faithful and connected
            community.
          </p>
        </div>
        <div className="cta-action">
          <a
            className="btn btn-light"
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={openPortal}
          >
            Get Started Today →
          </a>
          <p className="cta-tagline">{BRAND.tagline}</p>
        </div>
      </div>
    </section>
  );
}
