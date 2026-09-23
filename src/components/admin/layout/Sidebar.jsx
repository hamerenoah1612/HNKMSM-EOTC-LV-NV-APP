import logo from '../../../assets/logo-cross.png';
import { BRAND } from '../../../data/content.js';

export default function Sidebar({
  navItems,
  isExpanded,
  isMobileOpen,
  onToggle,
  onDrawerClose,
  onNavClick,
  onSignOut,
}) {
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
        <img
          className="admin-logo-img"
          src={logo}
          alt="HNKMSM Logo"
          width="36"
          height="44"
        />
        <div className="brand-copy">
          <strong>{BRAND.name}</strong>
          <span>Ethiopian Orthodox Tewahedo Church</span>
          <span className="role-badge">Super Admin &amp; Clergy Portal</span>
        </div>
      </div>

      <nav>
        {navItems.map((item) => (
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
            <b>{item.label}</b>
          </a>
        ))}
      </nav>

      <div className="side-footer">
        <div className="church-art">✝ ⛪ ✝</div>
        <em>Faith • Community<br />Service • Together</em>
        <small>All for the Glory of God</small>
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
            Sign Out
          </button>
        )}
      </div>
    </aside>
  );
}
