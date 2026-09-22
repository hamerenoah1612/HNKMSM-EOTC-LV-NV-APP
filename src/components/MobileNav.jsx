import useActiveSection from '../hooks/useActiveSection.js';
import Icon from './Icon.jsx';

// Order follows the page, top to bottom.
const ITEMS = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'features', label: 'Features', icon: 'grid' },
  { id: 'services', label: 'Services', icon: 'church' },
  { id: 'giving', label: 'Give', icon: 'heart' },
  { id: 'media', label: 'Media', icon: 'play' },
  { id: 'contact', label: 'Contact', icon: 'mail' },
];

const IDS = ITEMS.map((item) => item.id);

/** Bottom tab bar shown only on mobile (CSS hides it from 900px up). */
export default function MobileNav() {
  const active = useActiveSection(IDS, 'home');

  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      {ITEMS.map(({ id, label, icon }) => (
        <a
          key={id}
          href={`#${id}`}
          className={active === id ? 'active' : undefined}
          aria-current={active === id ? 'true' : undefined}
        >
          <Icon name={icon} size={22} />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}
