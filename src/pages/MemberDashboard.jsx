import AppShell from '../components/layout/AppShell.jsx';
import PageIntro from '../components/dashboard/PageIntro.jsx';
import StatsGrid from '../components/dashboard/StatsGrid.jsx';
import ServicesPanel from '../components/dashboard/ServicesPanel.jsx';
import EventsPanel from '../components/dashboard/EventsPanel.jsx';
import GivingPanel from '../components/dashboard/GivingPanel.jsx';
import MediaPanel from '../components/dashboard/MediaPanel.jsx';
import MessagesPanel from '../components/dashboard/MessagesPanel.jsx';
import ProjectPanel from '../components/dashboard/ProjectPanel.jsx';
import ProfilePanel from '../components/dashboard/ProfilePanel.jsx';
import RecentActivityPanel from '../components/dashboard/RecentActivityPanel.jsx';
import QuickActionsPanel from '../components/dashboard/QuickActionsPanel.jsx';
import ShopPanel from '../components/dashboard/ShopPanel.jsx';
import FaithBanner from '../components/dashboard/FaithBanner.jsx';

import {
  currentUser as defaultUser,
  pageIntro,
  stats,
  services,
  events,
  givingTabs,
  givingSummary,
  givingChart,
  givingBreakdown,
  mediaCategories,
  messages,
  project,
  recentActivity,
  quickActions,
  shopCategories,
  faithBanner,
} from '../data/memberDashboardData.js';

export default function MemberDashboard({ user, onSignOut, onBackToSite }) {
  // Merge authenticated user info if present
  const displayUser = user
    ? {
        ...defaultUser,
        name: user.name || defaultUser.name,
        email: user.email || '',
        role: user.role === 'admin' ? 'Clergy / Administrator' : 'Member',
        initials: user.name
          ? user.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase()
              .slice(0, 2)
          : defaultUser.initials,
      }
    : defaultUser;

  return (
    <AppShell user={displayUser} onSignOut={onSignOut} onBackToSite={onBackToSite}>
      <PageIntro title={pageIntro.title} subtitle={pageIntro.subtitle} scripture={pageIntro.scripture} />
      <StatsGrid stats={stats} />

      <section className="dashboard-grid">
        <ServicesPanel services={services} />
        <EventsPanel events={events} />
        <GivingPanel tabs={givingTabs} summary={givingSummary} chart={givingChart} breakdown={givingBreakdown} />
        <MediaPanel categories={mediaCategories} />
        <MessagesPanel messages={messages} />
        <ProjectPanel project={project} />
        <ProfilePanel user={displayUser} />
        <RecentActivityPanel activity={recentActivity} />
        <QuickActionsPanel actions={quickActions} />
        <ShopPanel categories={shopCategories} />
        <FaithBanner {...faithBanner} />
      </section>
    </AppShell>
  );
}
