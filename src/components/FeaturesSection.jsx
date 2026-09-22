import { FEATURES } from '../data/content.js';
import FeatureCard from './FeatureCard.jsx';

export default function FeaturesSection() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">Our Features</p>
          <h2>Everything Your Church Community Needs</h2>
          <p>
            A comprehensive platform designed for the Ethiopian Orthodox
            Tewahedo Church.
          </p>
        </div>

        <div className="feature-grid">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
