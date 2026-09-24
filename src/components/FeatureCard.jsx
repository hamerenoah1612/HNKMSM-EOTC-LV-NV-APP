import { useLanguage } from '../context/LanguageContext';

export default function FeatureCard({ icon, title, description, href = '#' }) {
  const { language } = useLanguage();
  const isAm = language === 'am';

  return (
    <article className="feature-card">
      <div className="icon-bubble" aria-hidden="true">
        <span className="glyph">{icon}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={href}>{isAm ? 'ተጨማሪ ይመልከቱ →' : 'Learn More →'}</a>
    </article>
  );
}
