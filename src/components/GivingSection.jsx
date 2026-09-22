import { GIVING_OPTIONS, GIVING_QUOTE } from '../data/content.js';
import givingHands from '../assets/giving-hands.jpg';
import Icon from './Icon.jsx';

function GivingOption({ icon, title, caption }) {
  return (
    <div>
      <span className="glyph" aria-hidden="true">
        {icon}
      </span>
      <strong>{title}</strong>
      <small>{caption}</small>
    </div>
  );
}

export default function GivingSection() {
  return (
    <section className="section giving" id="giving">
      <img className="giving-art" src={givingHands} alt="" aria-hidden="true" />

      <div className="container giving-grid">
        <div className="giving-copy">
          <p className="eyebrow">Giving & Payments</p>
          <h2>Give with a Generous Heart</h2>
          <p>
            Support the mission of the Church. Make tithes, offerings, donations,
            membership payments and event contributions securely and easily.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#">
              Give Now →
            </a>
            <span className="secure-note">
              <Icon name="lock" size={14} /> Secure. Simple. Meaningful.
            </span>
          </div>
        </div>

        <div className="giving-side">
          <div className="giving-options">
            {GIVING_OPTIONS.map((option) => (
              <GivingOption key={option.title} {...option} />
            ))}
          </div>
          <blockquote className="giving-quote">
            “{GIVING_QUOTE.text}”
            <cite>{GIVING_QUOTE.cite}</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
