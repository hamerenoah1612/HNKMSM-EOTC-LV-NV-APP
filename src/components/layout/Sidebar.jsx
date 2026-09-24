import logo from '../../assets/logo-cross.png';
import { BRAND } from '../../data/content.js';
import { useLanguage } from '../../context/LanguageContext';

const NAV_TRANSLATIONS = {
  dashboard: { en: 'Dashboard', am: 'ዳሽቦርድ' },
  profile: { en: 'My Profile', am: 'የግል መገለጫዬ' },
  household: { en: 'Family / Household', am: 'ቤተሰብና አባላት' },
  services: { en: 'Services', am: 'አገልግሎቶች' },
  prayer: { en: 'Prayer Requests', am: 'የጸሎት ጥያቄዎች' },
  events: { en: 'Events', am: 'መርሐ ግብሮች' },
  education: { en: 'Education', am: 'ትምህርትና ጥናት' },
  media: { en: 'Media Library', am: 'መልቲሚዲያ ቤተ መጻሕፍት' },
  giving: { en: 'Donations & Giving', am: 'አስራትና ምጽዋት' },
  payments: { en: 'Payments', am: 'ክፍያዎች' },
  messages: { en: 'Messages', am: 'መልእክቶች' },
  shop: { en: 'Shop', am: 'የዕቃዎች ሱቅ' },
  projects: { en: 'Projects & Voting', am: 'ፕሮጀክቶችና ድምፅ' },
  settings: { en: 'Settings', am: 'ቅንብሮች' },
};

export default function Sidebar({ navItems, isDesktopExpanded, isMobileOpen, onToggle, onSignOut, user }) {
  const { language, t } = useLanguage();
  const isAm = language === 'am';

  const userRoleLabel = isAm
    ? (user?.role === 'admin' ? 'ካህናት : አስተዳዳሪ' : 'ምዕመን : የደብር አባል')
    : (user?.role === 'admin' ? 'Clergy : Administrator' : 'Member : Church Member');

  return (
    <aside
      className={`sidebar ${isMobileOpen ? 'is-open' : ''} ${isDesktopExpanded ? 'is-expanded' : ''}`.trim()}
      id="sidebar"
      aria-label="Primary navigation"
    >
      <div className="sidebar-brand">
        <button
          type="button"
          className="menu-toggle"
          id="menuToggle"
          aria-label={isDesktopExpanded ? 'Collapse navigation' : 'Expand navigation'}
          aria-expanded={isDesktopExpanded}
          onClick={onToggle}
        >
          <span></span><span></span><span></span>
        </button>
        <img className="sidebar-logo-img" src={logo} alt="HNKMSM Logo" width="36" height="44" />
        <div className="brand-copy">
          <strong>{isAm ? t('churchName', 'ደብረ ምሕረት ቅድስት ማርያም') : BRAND.name}</strong>
          <span className="sidebar-role-badge">{userRoleLabel}</span>
        </div>
      </div>

      <nav className="side-nav">
        {navItems.map((item) => {
          const translatedLabel = NAV_TRANSLATIONS[item.id]?.[language] || item.label;
          return (
            <a
              key={item.id}
              className={`side-link ${item.active ? 'active' : ''}`.trim()}
              href={item.href}
              onClick={(e) => {
                if (item.href === '#') e.preventDefault();
              }}
            >
              <span className="ico">{item.icon}</span>
              <span className="label">{translatedLabel}</span>
            </a>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="church-silhouette mini"></div>
        <p>{isAm ? <>እምነት • ማኅበር<br />አገልግሎት • አብረን</> : <>Faith • Community<br />Service • Together</>}</p>
        <span>{isAm ? 'ሁሉ ለእግዚአብሔር ክብር' : 'All for the Glory of God'}</span>
        <small>© 2026 HNKMSM-EOTC-LV-NV</small>
        {onSignOut && (
          <button
            type="button"
            onClick={onSignOut}
            style={{
              marginTop: '12px',
              padding: '6px 12px',
              background: '#fcf1ec',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              fontSize: '11px',
              color: '#9e3b2b',
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
