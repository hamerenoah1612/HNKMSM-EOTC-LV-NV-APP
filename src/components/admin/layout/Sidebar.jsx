import { BRAND } from '../../../data/content.js';
import { useLanguage } from '../../../context/LanguageContext';

const ADMIN_NAV_TRANSLATIONS = {
  overview: { en: 'Overview', am: 'አጠቃላይ እይታ' },
  churches: { en: 'Churches/Parishes', am: 'አብያተ ክርስቲያናትና ሰበካዎች' },
  members: { en: 'Members', am: 'አባላትና ምዕመናን' },
  admins: { en: 'Admins & Roles', am: 'አስተዳዳሪዎችና ኃላፊነቶች' },
  services: { en: 'Services', am: 'አገልግሎቶች' },
  events: { en: 'Events', am: 'መርሐ ግብሮች' },
  education: { en: 'Education', am: 'ትምህርትና ጥናት' },
  media: { en: 'Media Library', am: 'መልቲሚዲያ ቤተ መጻሕፍት' },
  donations: { en: 'Donations', am: 'አስራትና ስጦታ' },
  payments: { en: 'Payments', am: 'ክፍያዎች' },
  ecommerce: { en: 'E-commerce', am: 'የመጻሕፍትና ዕቃዎች ሱቅ' },
  projects: { en: 'Projects & Voting', am: 'ፕሮጀክቶችና ውሳኔዎች' },
  communications: { en: 'Communications', am: 'መረጃና ግንኙነት' },
  reports: { en: 'Reports & Analytics', am: 'ሪፖርቶችና ትንታኔ' },
  settings: { en: 'System Settings', am: 'የስርዓት ቅንብሮች' },
  audit: { en: 'Audit Logs', am: 'የኦዲት መዝገብ' },
};

export default function Sidebar({
  navItems,
  isExpanded,
  isMobileOpen,
  onToggle,
  onDrawerClose,
  onNavClick,
  onSignOut,
}) {
  const { language, t } = useLanguage();
  const isAm = language === 'am';

  return (
    <aside
      className={`sidebar ${isMobileOpen ? 'open-mobile' : ''} ${isExpanded ? 'is-expanded' : ''}`.trim()}
      id="sidebar"
    >
      <div className="brand">
        <button
          type="button"
          className="menu-toggle"
          id="adminMenuToggle"
          aria-label={isExpanded ? 'Collapse navigation' : 'Expand navigation'}
          aria-expanded={isExpanded}
          onClick={onToggle}
        >
          <span></span><span></span><span></span>
        </button>
        <div className="brand-copy">
          <strong>{isAm ? t('churchName', 'ደብረ ምሕረት ቅድስት ማርያም') : BRAND.name}</strong>
          <span>{isAm ? 'የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን' : 'Ethiopian Orthodox Tewahedo Church'}</span>
          <span className="role-badge">{isAm ? 'የሰበካ ጉባኤ ጠቅላይ አስተዳደር' : 'Super Admin & Clergy Portal'}</span>
        </div>
      </div>

      <nav>
        {navItems.map((item) => {
          const translatedLabel = ADMIN_NAV_TRANSLATIONS[item.id]?.[language] || item.label;
          return (
            <a
              key={item.id}
              className={`nav ${item.active ? 'active' : ''}`.trim()}
              href={item.href}
              onClick={(e) => {
                if (item.href === '#') e.preventDefault();
                onNavClick(e);
              }}
            >
              <span>{item.icon}</span>
              <b>{translatedLabel}</b>
            </a>
          );
        })}
      </nav>

      <div className="side-footer">
        <div className="church-art">✝ ⛪ ✝</div>
        <em>{isAm ? <>እምነት • ማኅበር<br />አገልግሎት • አብረን</> : <>Faith • Community<br />Service • Together</>}</em>
        <small>{isAm ? 'ሁሉ ለእግዚአብሔር ክብር' : 'All for the Glory of God'}</small>
        <small>© 2026 HNKMSM-EOTC-LV-NV</small>
        {onSignOut && (
          <button
            type="button"
            onClick={onSignOut}
            style={{
              marginTop: '12px',
              padding: '6px 12px',
              background: '#f8ece3',
              border: '1px solid var(--line)',
              borderRadius: '6px',
              fontSize: '11px',
              color: '#8b2b1a',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            {isAm ? 'ውጡ (Sign Out)' : 'Sign Out'}
          </button>
        )}
      </div>
    </aside>
  );
}
