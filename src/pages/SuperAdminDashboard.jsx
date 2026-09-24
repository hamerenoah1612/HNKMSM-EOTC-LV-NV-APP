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
import { useLanguage } from '../context/LanguageContext';

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
  const { language } = useLanguage();
  const isAm = language === 'am';

  const pageIntroAm = {
    title: 'የሰበካ ጉባኤ ጠቅላይ አስተዳደር ዳሽቦርድ',
    subtitle: 'አጠቃላይ የደብር ቁጥጥር፣ የአስተዳደር ዕቅድና የአሠራር መረጃ ማዕከል።',
    quote: {
      text: '“በስሜ ሁለት ወይም ሦስት በሆኑበት፣',
      text2: 'በዚያ በመካከላቸው እሆናለሁና።”',
      citation: 'ማቴዎስ ፲፰:፳',
    },
  };

  const kpisAm = [
    { id: 'members', icon: '👥', label: 'ጠቅላላ የተመዘገቡ አባላት', value: '12,487', trend: '↑ +12%', tone: 'green', helper: 'ካለፈው ወር ጋር' },
    { id: 'branches', icon: '⛪', label: 'ንቁ የሰበካ ክፍላት', value: '18', trend: '↑ +6%', tone: 'green', helper: 'ካለፈው ወር ጋር' },
    { id: 'donations', icon: '♥', label: 'ወርሃዊ አስራትና ስጦታ', value: '$12,430', trend: '↑ +28%', tone: 'green', helper: 'ካለፈው ወር ጋር' },
    { id: 'approvals', icon: '📄', label: 'ማረጋገጫ የሚጠብቁ', value: '24', trend: '↑ +3', tone: 'orange', helper: 'ካለፈው ሳምንት ጋር' },
    { id: 'events', icon: '📅', label: 'ንቁ መርሐ ግብሮች', value: '8', trend: '↑ +2', tone: 'green', helper: 'በዚህ ወር' },
    { id: 'orders', icon: '🛒', label: 'የሱቅ ትዕዛዞች', value: '46', trend: '↑ +15%', tone: 'green', helper: 'ካለፈው ወር ጋር' },
  ];

  const activePageIntro = isAm ? pageIntroAm : pageIntro;
  const activeKpis = isAm ? kpisAm : kpis;

  const displayUser = user
    ? {
        ...defaultAdminUser,
        name: user.name || defaultAdminUser.name,
        email: user.email || '',
        role: isAm ? 'ዋና አስተዳዳሪ' : 'Super Admin',
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
      <PageIntro title={activePageIntro.title} subtitle={activePageIntro.subtitle} quote={activePageIntro.quote} />
      <KpisGrid kpis={activeKpis} />

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
