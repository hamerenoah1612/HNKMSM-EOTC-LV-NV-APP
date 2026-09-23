import AppShell from '../components/admin/layout/AppShell.jsx';
import PageIntro from '../components/admin/dashboard/PageIntro.jsx';
import KpisGrid from '../components/admin/dashboard/KpisGrid.jsx';
import DonationsChartPanel from '../components/admin/dashboard/DonationsChartPanel.jsx';
import BranchPerformancePanel from '../components/admin/dashboard/BranchPerformancePanel.jsx';
import PendingApprovalsPanel from '../components/admin/dashboard/PendingApprovalsPanel.jsx';
import RolesPanel from '../components/admin/dashboard/RolesPanel.jsx';
import ProjectPanel from '../components/admin/dashboard/ProjectPanel.jsx';
import EventsPanel from '../components/admin/dashboard/EventsPanel.jsx';
import RecentActivityPanel from '../components/admin/dashboard/RecentActivityPanel.jsx';
import SystemHealthPanel from '../components/admin/dashboard/SystemHealthPanel.jsx';
import FaithPanel from '../components/admin/dashboard/FaithPanel.jsx';

import {
  currentUser as defaultAdminUser,
  pageIntro,
  kpis,
  donationsChart,
  branchPerformance,
  pendingApprovals,
  roles,
  project,
  upcomingEvents,
  recentActivity,
  systemHealth,
  faithBanner,
} from '../data/adminDashboardData.js';

export default function SuperAdminDashboard({ user, onSignOut, onBackToSite }) {
  const displayUser = user
    ? {
        ...defaultAdminUser,
        name: user.name || defaultAdminUser.name,
        email: user.email || '',
        role: 'Super Admin',
        initials: user.name
          ? user.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase()
              .slice(0, 2)
          : defaultAdminUser.initials,
      }
    : defaultAdminUser;

  return (
    <AppShell user={displayUser} onSignOut={onSignOut} onBackToSite={onBackToSite}>
      <PageIntro title={pageIntro.title} subtitle={pageIntro.subtitle} quote={pageIntro.quote} />
      <KpisGrid kpis={kpis} />

      <section className="grid">
        <DonationsChartPanel data={donationsChart} />
        <BranchPerformancePanel branches={branchPerformance} />
        <PendingApprovalsPanel approvals={pendingApprovals} />
        <RolesPanel roles={roles} />
        <ProjectPanel project={project} />
        <EventsPanel events={upcomingEvents} />
        <RecentActivityPanel activity={recentActivity} />
        <SystemHealthPanel items={systemHealth} />
        <FaithPanel {...faithBanner} />
      </section>
    </AppShell>
  );
}
