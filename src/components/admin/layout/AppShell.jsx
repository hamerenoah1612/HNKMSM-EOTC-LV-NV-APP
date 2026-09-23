import { useAdminSidebar } from '../../../hooks/useAdminSidebar.js';
import Sidebar from './Sidebar.jsx';
import Topbar from './Topbar.jsx';
import MobileFooterNav from './MobileFooterNav.jsx';
import { navItems, mobileNavItems, currentUser as defaultAdminUser } from '../../../data/adminDashboardData.js';

/**
 * Shared app frame for the Super Admin area: sidebar + topbar + mobile
 * footer nav + off-canvas overlay. Any admin page can be dropped in as
 * `children`.
 */
export default function AppShell({ user, onSignOut, onBackToSite, children }) {
  const {
    isExpanded,
    isMobileOpen,
    toggleDesktop,
    openMobile,
    closeMobile,
    handleNavClick,
  } = useAdminSidebar();

  const activeUser = user || defaultAdminUser;

  return (
    <div className="admin-dashboard-wrapper">
      <div className={`app-shell ${isExpanded ? 'expanded' : ''}`.trim()} id="appShell">
        <Sidebar
          navItems={navItems}
          isExpanded={isExpanded}
          isMobileOpen={isMobileOpen}
          onToggle={isMobileOpen ? closeMobile : toggleDesktop}
          onDrawerClose={closeMobile}
          onNavClick={handleNavClick}
          onSignOut={onSignOut}
        />

        <div className="page">
          <Topbar
            user={activeUser}
            onOpenMobileMenu={openMobile}
            onSignOut={onSignOut}
            onBackToSite={onBackToSite}
          />
          <main>{children}</main>
        </div>
      </div>

      <div className={`overlay ${isMobileOpen ? 'show' : ''}`.trim()} id="overlay" onClick={closeMobile} />

      <MobileFooterNav items={mobileNavItems} onMore={openMobile} />
    </div>
  );
}
