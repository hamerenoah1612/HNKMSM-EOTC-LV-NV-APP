import { useState, useRef, useEffect } from 'react';
import adminPhoto from '../../../assets/admin-photo.jpg';
import Icon from '../../Icon.jsx';
import { useLanguage } from '../../../context/LanguageContext';

export default function Topbar({ user, onOpenMobileMenu, onSignOut, onBackToSite }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [quickActionsOpen, setQuickActionsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { language, toggleLanguage } = useLanguage();
  const isAm = language === 'am';

  const userPhoto = user?.avatar || user?.image || adminPhoto;

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

  const adminQuickActions = [
    { id: 'aqa-members', icon: '👥', label: isAm ? 'አባላት ማስተዳደር' : 'Manage Members', href: '#members' },
    { id: 'aqa-branches', icon: '⛪', label: isAm ? 'የሰበካ ክፍላት' : 'Parishes & Branches', href: '#branches' },
    { id: 'aqa-donations', icon: '♥', label: isAm ? 'አስራት መመዝገብ' : 'Record Donation', href: '#donations' },
    { id: 'aqa-events', icon: '📅', label: isAm ? 'መርሐ ግብር ማዘጋጀት' : 'Schedule Event', href: '#events' },
    { id: 'aqa-reports', icon: '📊', label: isAm ? 'የፋይናንስ ሪፖርት' : 'Reports & Analytics', href: '#reports' },
  ];

  return (
    <header className="topbar">
      <button
        type="button"
        className="mobile-menu-btn"
        id="adminMobileMenuBtn"
        aria-label={isAm ? 'አሰሳ ክፈት' : 'Open navigation'}
        onClick={onOpenMobileMenu}
      >
        ☰
      </button>

      <div className="search">
        <span>⌕</span>
        <input
          type="search"
          aria-label={isAm ? 'ፍለጋ' : 'Search'}
          placeholder={isAm ? 'አባላትን፣ ሰበካዎችን፣ በዓላትን ወይም አስራትን ይፈልጉ...' : 'Search members, parishes, events, donations, or anything...'}
        />
      </div>

      <div className="top-actions">
        {/* Notification bell */}
        <button type="button" className="bell" aria-label={isAm ? 'ማሳወቂያዎች' : 'Notifications'}>
          🔔<i>3</i>
        </button>

        {/* User Button and Menu */}
        <div style={{ position: 'relative' }} ref={dropdownRef}>
          <div
            className="user"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            role="button"
            tabIndex={0}
            aria-label={isAm ? 'የአስተዳዳሪ ምናሌ' : 'Admin User Menu'}
            aria-expanded={dropdownOpen}
            style={{ cursor: 'pointer' }}
          >
            <span
              className="avatar"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background: 'linear-gradient(135deg,#4e3428,#b17b59)',
                color: '#fff',
                flexShrink: 0,
              }}
            >
              {userPhoto ? (
                <img
                  src={userPhoto}
                  alt={user?.name || 'Admin'}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <Icon name="user" size={18} />
              )}
            </span>
            <span>
              <strong>{user?.name || 'Abune Selam'}</strong>
              <small>{isAm ? 'ዋና አስተዳዳሪ' : (user?.role || 'Super Admin')}</small>
            </span>
            <b style={{ fontSize: '11px', transition: 'transform 0.2s', transform: dropdownOpen ? 'rotate(180deg)' : 'none' }}>
              ⌄
            </b>
          </div>

          {dropdownOpen && (
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: 'calc(100% + 8px)',
                background: '#fff',
                border: '1px solid var(--line, #eadcd1)',
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
              {/* User Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '6px 8px 10px',
                  borderBottom: '1px solid var(--line, #eadcd1)',
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
                    background: 'linear-gradient(135deg,#4e3428,#b17b59)',
                    color: '#fff',
                    flexShrink: 0,
                  }}
                >
                  {userPhoto ? (
                    <img
                      src={userPhoto}
                      alt={user?.name || 'Admin'}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <Icon name="user" size={20} />
                  )}
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <strong style={{ display: 'block', fontSize: '13px', color: 'var(--ink, #321c10)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {user?.name || 'Abune Selam'}
                  </strong>
                  <small style={{ color: 'var(--muted, #8a6b57)', fontSize: '11px', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {user?.email || (isAm ? 'ዋና አስተዳዳሪ : ጠቅላይ ሰበካ' : 'Super Admin : General Administration')}
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
                    {adminQuickActions.map((qa) => (
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
              <div style={{ height: '1px', background: 'var(--line, #eadcd1)', margin: '2px 0' }} />

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
