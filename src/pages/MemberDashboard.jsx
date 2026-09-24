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
import { useLanguage } from '../context/LanguageContext';

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
  const { language } = useLanguage();
  const isAm = language === 'am';

  const pageIntroAm = {
    title: 'የምዕመን ዳሽቦርድ',
    subtitle: 'ከቅድስት ቤተክርስቲያንዎ፣ ምስጢራት፣ አስራት፣ ትምህርትና ማኅበረሰብ ጋር በቀጥታ ይገናኙ።',
    scripture: {
      ethiopic: '“በስሜ ሁለት ወይም ሦስት በሆኑበት በዚያ በመካከላቸው እሆናለሁና።”',
      english: '“For where two or three gather in my name, there am I with them.”',
      citation: 'ማቴዎስ ፲፰:፳',
    },
  };

  const statsAm = [
    { id: 'events', icon: '▣', label: 'የሚመጡ በዓላት', value: '3', helper: 'በዚህ ወር' },
    { id: 'prayers', icon: '🙏', label: 'የጸሎት ጥያቄዎች', value: '2', helper: 'ንቁ ጥያቄዎች' },
    { id: 'donations', icon: '♥', label: 'የተሰጠ አስራትና ስጦታ', value: '$245', trend: '↑ +18%', helper: 'በዚህ ወር' },
    { id: 'applications', icon: '▤', label: 'የምስጢራት ማመልከቻዎች', value: '4', helper: 'አጠቃላይ ጥያቄዎች' },
    { id: 'learning', icon: '▤', label: 'የመንፈሳዊ ትምህርት ደረጃ', value: '68%', progress: 68 },
    { id: 'unread-messages', icon: '▰', label: 'መልእክቶች', value: '7', helper: 'ያልተነበቡ' },
  ];

  const activePageIntro = isAm ? pageIntroAm : pageIntro;
  const activeStats = isAm ? statsAm : stats;

  // Merge authenticated user info if present
  const displayUser = user
    ? {
        ...defaultUser,
        name: user.name || defaultUser.name,
        email: user.email || '',
        role: isAm
          ? (user.role === 'admin' ? 'ካህናት / አስተዳዳሪ' : 'ምዕመን')
          : (user.role === 'admin' ? 'Clergy / Administrator' : 'Member'),
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
      <PageIntro title={activePageIntro.title} subtitle={activePageIntro.subtitle} scripture={activePageIntro.scripture} />
      <StatsGrid stats={activeStats} />

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
