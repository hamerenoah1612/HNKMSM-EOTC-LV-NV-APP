import Icon from './Icon.jsx';
import { openPortal } from '../data/content.js';

/**
 * Shared layout for the Admin / Member dashboard cards.
 * `image` is the photo from the design mockup, shown full-height on the left
 * and faded into the card by the CSS.
 */
export default function RoleCard({ variant, image, icon, title, subtitle, items, cta, onSignIn }) {
  const handleClick = (e) => {
    if (onSignIn) {
      e.preventDefault();
      onSignIn(variant === 'admin' ? 'admin' : 'member');
    } else {
      openPortal(e);
    }
  };

  return (
    <article className={`role-card role-card--${variant}`}>
      <div
        className={`role-media ${variant}-image`}
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      <div className="role-copy">
        <div className="role-head">
          <Icon name={icon} size={26} className="role-icon" />
          <h3>{title}</h3>
        </div>
        <p className="role-sub">{subtitle}</p>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a
          className="btn btn-primary"
          href="#signin"
          onClick={handleClick}
        >
          {cta.label}
        </a>
      </div>
    </article>
  );
}
