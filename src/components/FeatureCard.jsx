export default function FeatureCard({ icon, title, description, href = '#' }) {
  return (
    <article className="feature-card">
      <div className="icon-bubble" aria-hidden="true">
        <span className="glyph">{icon}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={href}>Learn More →</a>
    </article>
  );
}
