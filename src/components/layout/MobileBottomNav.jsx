import { useLanguage } from '../../context/LanguageContext';

const MOBILE_LABELS = {
  dashboard: { en: 'Home', am: 'ዋና ገጽ' },
  events: { en: 'Events', am: 'በዓላት' },
  giving: { en: 'Give', am: 'አስራት' },
  messages: { en: 'Messages', am: 'መልእክት' },
};

export default function MobileBottomNav({ items, onMore }) {
  const { language } = useLanguage();
  const isAm = language === 'am';

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      {items.map((item) => (
        <a
          key={item.id}
          className={item.active ? 'active' : ''}
          href={item.href}
          onClick={(e) => {
            if (item.href === '#') e.preventDefault();
          }}
        >
          <span>{item.icon}</span>
          <small>{MOBILE_LABELS[item.id]?.[language] || item.label}</small>
          {item.badge ? <b>{item.badge}</b> : null}
        </a>
      ))}
      <button type="button" id="moreNav" onClick={onMore}>
        <span>☰</span>
        <small>{isAm ? 'ተጨማሪ' : 'More'}</small>
      </button>
    </nav>
  );
}
