import logo from '../../assets/logo-cross.png';
import { BRAND } from '../../data/content.js';

export default function Sidebar({ navItems, isDesktopExpanded, isMobileOpen, onToggle, onSignOut, user }) {
  const userRoleLabel = user?.role === 'admin' ? 'Clergy : Administrator' : 'Member : Church Member';

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
          <strong>{BRAND.name}</strong>
          <span className="sidebar-role-badge">{userRoleLabel}</span>
        </div>
      </div>

      <nav className="side-nav">
        {navItems.map((item) => (
          <a
            key={item.id}
            className={`side-link ${item.active ? 'active' : ''}`.trim()}
            href={item.href}
            onClick={(e) => {
              if (item.href === '#') e.preventDefault();
            }}
          >
            <span className="ico">{item.icon}</span>
            <span className="label">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="church-silhouette mini"></div>
        <p>Faith • Community<br />Service • Together</p>
        <span>All for the Glory of God</span>
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
            Sign Out
          </button>
        )}
      </div>
    </aside>
  );
}
