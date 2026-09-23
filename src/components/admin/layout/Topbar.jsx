import { useState } from 'react';
import logo from '../../../assets/logo-cross.png';
import { BRAND } from '../../../data/content.js';

export default function Topbar({ user, onOpenMobileMenu, onSignOut, onBackToSite }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="mobile-brand">
        <button
          type="button"
          className="mobile-menu-btn"
          id="adminMobileMenuBtn"
          aria-label="Open navigation"
          onClick={onOpenMobileMenu}
        >
          ☰
        </button>
        <img className="admin-topbar-logo-img" src={logo} alt="HNKMSM Logo" width="28" height="34" />
        <div>
          <strong>{BRAND.name}</strong>
          <span>Super Admin Portal</span>
        </div>
      </div>

      <div className="search">
        <span>⌕</span>
        <input
          type="search"
          aria-label="Search"
          placeholder="Search members, parishes, events, donations, or anything..."
        />
      </div>

      <div className="top-actions">
        {onBackToSite && (
          <button
            type="button"
            onClick={onBackToSite}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '7px 12px',
              borderRadius: '8px',
              background: '#f6ece1',
              border: '1px solid var(--line)',
              fontSize: '11px',
              fontWeight: 600,
              color: 'var(--brown)',
              cursor: 'pointer',
            }}
          >
            ← Church Website
          </button>
        )}

        <button type="button" className="bell" aria-label="Notifications">
          🔔<i>3</i>
        </button>
        <button type="button" className="quick">＋ Quick Actions⌄</button>

        <div style={{ position: 'relative' }}>
          <div
            className="user"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            role="button"
            tabIndex={0}
          >
            <span className="avatar">{user.initials}</span>
            <span>
              <strong>{user.name}</strong>
              <small>{user.role}</small>
            </span>
            <b>⌄</b>
          </div>

          {dropdownOpen && (
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: '120%',
                background: '#fff',
                border: '1px solid var(--line)',
                borderRadius: '8px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                padding: '8px',
                minWidth: '170px',
                zIndex: 100,
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}
            >
              <div style={{ padding: '6px 8px', borderBottom: '1px solid var(--line)', fontSize: '11px' }}>
                <strong style={{ display: 'block' }}>{user.name}</strong>
                <small style={{ color: 'var(--muted)' }}>{user.email || 'Super Admin'}</small>
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
