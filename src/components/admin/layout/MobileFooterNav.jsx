import { useLanguage } from '../../../context/LanguageContext';

const ADMIN_MOBILE_LABELS = {
  overview: { en: 'Home', am: 'ዋና ገጽ' },
  members: { en: 'Members', am: 'አባላት' },
  quick: { en: 'Quick', am: 'ፈጣን' },
  reports: { en: 'Reports', am: 'ሪፖርቶች' },
};

export default function MobileFooterNav({ items, onMore }) {
  const { language } = useLanguage();
  const isAm = language === 'am';

  return (
    <nav className="mobile-footer">
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
          <small>{ADMIN_MOBILE_LABELS[item.id]?.[language] || item.label}</small>
        </a>
      ))}
      <button type="button" id="moreBtn" onClick={onMore}>
        <span>☰</span>
        <small>{isAm ? 'ተጨማሪ' : 'More'}</small>
      </button>
    </nav>
  );
}
