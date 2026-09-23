import { useSidebar } from '../../hooks/useSidebar.js';
import Sidebar from './Sidebar.jsx';
import Topbar from './Topbar.jsx';
import MobileBottomNav from './MobileBottomNav.jsx';
import { navItems, mobileNavItems } from '../../data/memberDashboardData.js';

export default function AppShell({ user, onSignOut, onBackToSite, children }) {
  const { isDesktopExpanded, isMobileOpen, toggleSidebar, openMobile, closeMobile } = useSidebar();

  return (
    <div className="member-dashboard-wrapper">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <div className={`app-shell ${isDesktopExpanded ? 'sidebar-expanded' : ''}`.trim()} id="appShell">
        <Sidebar
          navItems={navItems}
          isDesktopExpanded={isDesktopExpanded}
          isMobileOpen={isMobileOpen}
          onToggle={toggleSidebar}
          onSignOut={onSignOut}
          user={user}
        />

        <div className="app-main">
          <Topbar
            user={user}
            onOpenMobileMenu={openMobile}
            onSignOut={onSignOut}
            onBackToSite={onBackToSite}
          />
          <main className="content" id="main-content">
            {children}
          </main>
        </div>
      </div>

      <div className={`sidebar-overlay ${isMobileOpen ? 'show' : ''}`.trim()} onClick={closeMobile} />

      <MobileBottomNav items={mobileNavItems} onMore={openMobile} />
    </div>
  );
}
