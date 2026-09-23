import { useState } from 'react';
import logo from '../../assets/logo-cross.png';
import { BRAND } from '../../data/content.js';

export default function Topbar({ user, onOpenMobileMenu, onSignOut, onBackToSite }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const userRoleLabel = user?.role === 'admin' ? 'Clergy : Administrator' : 'Member : Church Member';

  return (
    <header className="topbar">
      <div className="mobile-brand">
        <button
          type="button"
          className="mobile-menu-btn"
          id="mobileMenuBtn"
          aria-label="Open navigation"
          onClick={onOpenMobileMenu}
        >
          ☰
        </button>
        <img className="topbar-logo-img" src={logo} alt="HNKMSM Logo" width="28" height="34" />
        <div>
          <strong>{BRAND.name}</strong>
          <span>{userRoleLabel}</span>
        </div>
      </div>

      <div className="topbar-search">
        <span>⌕</span>
        <input
          type="search"
          aria-label="Search"
          placeholder="Search services, events, media, or messages..."
        />
      </div>

      <div className="topbar-actions">
        {onBackToSite && (
          <button
            type="button"
            onClick={onBackToSite}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '7px 12px',
              borderRadius: '7px',
              background: '#f4e7d7',
              border: '1px solid var(--border)',
              fontSize: '11px',
              fontWeight: 600,
              color: 'var(--brown)',
              cursor: 'pointer',
            }}
          >
            ← Church Website
          </button>
        )}

        <button type="button" className="notification-btn" aria-label="Notifications">
          ♟<b>7</b>
        </button>

        <button type="button" className="quick-btn">
          ＋ Quick Actions <span>⌄</span>
        </button>

        <div style={{ position: 'relative' }}>
          <button
            type="button"
            className="user-chip"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{ cursor: 'pointer' }}
          >
            <span className="avatar">{user.initials}</span>
            <span className="user-copy">
              <strong>{user.name}</strong>
              <small>{user.role}</small>
            </span>
            <span>⌄</span>
          </button>

          {dropdownOpen && (
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: '110%',
                background: '#fff',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                padding: '8px',
                minWidth: '160px',
                zIndex: 100,
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}
            >
              <div style={{ padding: '6px 8px', borderBottom: '1px solid var(--border)', fontSize: '11px' }}>
                <strong style={{ display: 'block' }}>{user.name}</strong>
                <small style={{ color: 'var(--muted)' }}>{user.email || 'Parishioner'}</small>
              </div>

              {onBackToSite && (
                <button
                  type="button"
                  onClick={() => {
                    setDropdownOpen(false);
                    onBackToSite();
                  }}
                  style={{
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    padding: '6px 8px',
                    fontSize: '12px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    color: 'var(--ink)',
                  }}
                >
                  🌐 Church Home
                </button>
              )}

              {onSignOut && (
                <button
                  type="button"
                  onClick={() => {
                    setDropdownOpen(false);
                    onSignOut();
                  }}
                  style={{
                    textAlign: 'left',
                    background: '#fef2f2',
                    border: 'none',
                    padding: '6px 8px',
                    fontSize: '12px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    color: '#dc2626',
                    fontWeight: 600,
                  }}
                >
                  🚪 Sign Out
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
