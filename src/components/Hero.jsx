import { Fragment } from 'react';
import { VALUES, PORTAL_URL, openPortal } from '../data/content.js';
import HeroVisual from './HeroVisual.jsx';
import heroChurch from '../assets/hero-church.png';
import heroTrees from '../assets/hero-trees.jpg';

function ValueItem({ icon, label }) {
  return (
    <div className="value-item">
      <span aria-hidden="true">{icon}</span>
      <small>
        {label.map((line, index) => (
          <Fragment key={line}>
            {index > 0 && <br />}
            {line}
          </Fragment>
        ))}
      </small>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background imagery from the design mockup */}
      <img className="hero-art hero-art--trees" src={heroTrees} alt="" aria-hidden="true" />
      <div className="container hero-art-layer" aria-hidden="true">
        <img className="hero-art hero-art--church" src={heroChurch} alt="" />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Ethiopian Orthodox Tewahedo Church</p>
          <h1>One Digital Home for Church, Community, and Ministry</h1>
          <p className="hero-lede">
            HNKMSM-EOTC-LV-NV unifies membership, services, giving, events,
            learning, media, and communication for a stronger, more connected
            faith community.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={openPortal}
            >
              Get Started <span aria-hidden="true">→</span>
            </a>
            <a className="btn btn-secondary" href="#features">
              Explore Features
            </a>
          </div>

          <div className="value-row" aria-label="Platform values">
            {VALUES.map((value) => (
              <ValueItem key={value.label.join(' ')} {...value} />
            ))}
          </div>

          <blockquote>
            “For where two or three gather in my name, there am I with them.”
            <cite>Matthew 18:20</cite>
          </blockquote>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
