import { useState, useRef, useEffect } from 'react';
import memberPhoto from '../../assets/member-photo.jpg';
import Icon from '../Icon.jsx';
import { useLanguage } from '../../context/LanguageContext';

export default function Topbar({ user, onOpenMobileMenu, onSignOut, onBackToSite }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [quickActionsOpen, setQuickActionsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { language, toggleLanguage } = useLanguage();
  const isAm = language === 'am';

  const userRoleLabel = isAm
    ? (user?.role === 'admin' ? 'ካህናት : አስተዳዳሪ' : 'ምዕመን : የደብር አባል')
    : (user?.role === 'admin' ? 'Clergy : Administrator' : 'Member : Church Member');

  const userPhoto = user?.avatar || user?.image || memberPhoto;

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
        setQuickActionsOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [dropdownOpen]);

  const memberQuickActions = [
    { id: 'qa-service', icon: '✝', label: isAm ? 'የአገልግሎት ጥያቄ' : 'Request Service', href: '#services' },
    { id: 'qa-prayer', icon: '🙏', label: isAm ? 'የጸሎት ጥያቄ ማቅረብ' : 'Submit Prayer Request', href: '#prayer' },
    { id: 'qa-give', icon: '♥', label: isAm ? 'አስራትና ስጦታ መስጠት' : 'Give Now / Donations', href: '#giving' },
    { id: 'qa-events', icon: '▣', label: isAm ? 'በዓላትና ጉባኤያት' : 'Upcoming Events', href: '#events' },
    { id: 'qa-shop', icon: '🛒', label: isAm ? 'የቤተክርስቲያን ሱቅ' : 'Church Shop', href: '#shop' },
  ];

  return (
    <header className="topbar">
      <button
        type="button"
        className="mobile-menu-btn"
        id="mobileMenuBtn"
        aria-label={isAm ? 'አሰሳ ክፈት' : 'Open navigation'}
        onClick={onOpenMobileMenu}
      >
        ☰
      </button>

      <div className="topbar-search">
        <span>⌕</span>
        <input
          type="search"
          aria-label={isAm ? 'ፍለጋ' : 'Search'}
          placeholder={isAm ? 'አገልግሎቶችን፣ መርሐ ግብሮችን፣ መልቲሚዲያ ወይም መልእክቶችን ይፈልጉ...' : 'Search services, events, media, or messages...'}
        />
      </div>

      <div className="topbar-actions">
        {/* Notification indicator */}
        <button type="button" className="notification-btn" aria-label={isAm ? 'ማሳወቂያዎች' : 'Notifications'}>
          ♟<b>7</b>
        </button>

        {/* User Button and Menu */}
        <div style={{ position: 'relative' }} ref={dropdownRef}>
          <button
            type="button"
            className="user-chip"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{ cursor: 'pointer' }}
            aria-label={isAm ? 'የተጠቃሚ ምናሌ' : 'User Menu'}
            aria-expanded={dropdownOpen}
          >
            <span
              className="avatar"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background: 'linear-gradient(135deg,#d9ab7a,#6f3b24)',
                color: '#fff',
                border: '2px solid #fff',
                boxShadow: '0 0 0 1px var(--border)',
                flexShrink: 0,
              }}
            >
              {userPhoto ? (
                <img
                  src={userPhoto}
                  alt={user?.name || 'User'}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <Icon name="user" size={18} />
              )}
            </span>
            <span className="user-copy">
              <strong>{user?.name || 'Member'}</strong>
              <small>{isAm ? (user?.role === 'admin' ? 'አስተዳዳሪ' : 'ምዕመን') : (user?.role || 'Member')}</small>
            </span>
            <span style={{ fontSize: '11px', transition: 'transform 0.2s', transform: dropdownOpen ? 'rotate(180deg)' : 'none' }}>
              ⌄
            </span>
          </button>

          {dropdownOpen && (
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: 'calc(100% + 8px)',
                background: '#fff',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                boxShadow: '0 12px 32px rgba(60, 35, 20, 0.16)',
                padding: '10px',
                width: '270px',
                maxWidth: 'calc(100vw - 24px)',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              {/* User Profile Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '6px 8px 10px',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg,#d9ab7a,#6f3b24)',
                    color: '#fff',
                    flexShrink: 0,
                  }}
                >
                  {userPhoto ? (
                    <img
                      src={userPhoto}
                      alt={user?.name || 'User'}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <Icon name="user" size={20} />
                  )}
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <strong style={{ display: 'block', fontSize: '13px', color: 'var(--ink)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {user?.name || 'Abune Selam'}
                  </strong>
                  <small style={{ color: 'var(--muted)', fontSize: '11px', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {user?.email || (isAm ? 'ምዕመን : የደብር አባል' : 'Member : Parishioner')}
                  </small>
                </div>
              </div>

              {/* Quick Actions ⌄ */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <button
                  type="button"
                  onClick={() => setQuickActionsOpen(!quickActionsOpen)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: '8px',
                    background: quickActionsOpen ? '#f5ede4' : '#faf4ee',
                    border: '1px solid #ebdcd0',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--brown)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                  aria-expanded={quickActionsOpen}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '14px' }}>⚡</span>
                    <span>{isAm ? '＋ ፈጣን እርምጃዎች' : '＋ Quick Actions'}</span>
                  </span>
                  <span style={{ fontSize: '11px', transition: 'transform 0.2s', transform: quickActionsOpen ? 'rotate(180deg)' : 'none' }}>
                    ⌄
                  </span>
                </button>

                {quickActionsOpen && (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '3px',
                      padding: '6px 6px 6px 10px',
                      marginTop: '4px',
                      background: '#fffdfb',
                      borderRadius: '8px',
                      border: '1px solid #f0e6dc',
                    }}
                  >
                    {memberQuickActions.map((qa) => (
                      <a
                        key={qa.id}
                        href={qa.href}
                        onClick={() => {
                          setDropdownOpen(false);
                          setQuickActionsOpen(false);
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '6px 8px',
                          borderRadius: '6px',
                          fontSize: '11px',
                          fontWeight: 500,
                          color: '#4e3428',
                          textDecoration: 'none',
                          transition: 'background 0.12s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = '#f5ece3')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                      >
                        <span style={{ fontSize: '12px' }}>{qa.icon}</span>
                        <span>{qa.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Back to Home */}
              {onBackToSite && (
                <button
                  type="button"
                  onClick={() => {
                    setDropdownOpen(false);
                    onBackToSite();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: '8px',
                    background: '#f8f4ee',
                    border: '1px solid #ebdcd0',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--brown)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'background 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#efe4d7')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#f8f4ee')}
                  title={isAm ? 'ወደ ዋና ገጽ ተመለስ' : 'Back to Home'}
                >
                  <span style={{ fontSize: '14px', color: 'var(--brown)' }}>←</span>
                  <span style={{ flex: 1 }}>{isAm ? '← ወደ ዋና ገጽ' : 'Back to Home'}</span>
                  <span style={{ fontSize: '12px', opacity: 0.8 }}>🏠</span>
                </button>
              )}

              {/* Language Toggle */}
              <button
                type="button"
                onClick={() => {
                  toggleLanguage();
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '8px 10px',
                  borderRadius: '8px',
                  background: '#f3e7da',
                  border: '1px solid #d6beaa',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#5a331c',
                  cursor: 'pointer',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#ebd9c7')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#f3e7da')}
                title={isAm ? 'Switch to English' : 'ወደ አማርኛ ቀይር (Switch to Amharic)'}
                aria-label="Toggle Language"
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg
                    style={{ width: '15px', height: '15px', color: '#8a4a25', flexShrink: 0 }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" />
                    <path d="M2 12h20" strokeWidth="2" />
                  </svg>
                  <span>{isAm ? 'ቋንቋ (Language)' : 'Language'}</span>
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '2px 8px',
                    borderRadius: '999px',
                    fontSize: '11px',
                    fontWeight: 700,
                    background: '#e0cbbb',
                    color: '#4e2c16',
                  }}
                >
                  {language === 'en' ? 'አማርኛ' : 'English'}
                </span>
              </button>

              {/* Divider before Sign Out */}
              <div style={{ height: '1px', background: 'var(--border)', margin: '2px 0' }} />

              {/* Sign Out option */}
              {onSignOut && (
                <button
                  type="button"
                  onClick={() => {
                    setDropdownOpen(false);
                    onSignOut();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: '8px',
                    background: '#fef2f2',
                    border: '1px solid #fee2e2',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#dc2626',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'background 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#fee2e2')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#fef2f2')}
                >
                  <span>🚪</span>
                  <span>{isAm ? 'ውጡ (Sign Out)' : 'Sign Out'}</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
