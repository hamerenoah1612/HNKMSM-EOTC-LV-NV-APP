// Mock/admin data for the Super Admin dashboard. Replace with real API data
// without touching any component — every component takes this shape as props.

export const navItems = [
  { id: 'overview', icon: '⌂', label: 'Overview', href: '#', active: true },
  { id: 'churches', icon: '⛪', label: 'Churches/Parishes', href: '#' },
  { id: 'members', icon: '👥', label: 'Members', href: '#' },
  { id: 'admins', icon: '🛡', label: 'Admins & Roles', href: '#' },
  { id: 'services', icon: '🏆', label: 'Services', href: '#' },
  { id: 'events', icon: '📅', label: 'Events', href: '#' },
  { id: 'education', icon: '📖', label: 'Education', href: '#' },
  { id: 'media', icon: '🖼', label: 'Media Library', href: '#' },
  { id: 'donations', icon: '♥', label: 'Donations', href: '#' },
  { id: 'payments', icon: '💳', label: 'Payments', href: '#' },
  { id: 'ecommerce', icon: '🛒', label: 'E-commerce', href: '#' },
  { id: 'projects', icon: '📊', label: 'Projects & Voting', href: '#' },
  { id: 'communications', icon: '📣', label: 'Communications', href: '#' },
  { id: 'reports', icon: '📈', label: 'Reports & Analytics', href: '#' },
  { id: 'settings', icon: '⚙', label: 'System Settings', href: '#' },
  { id: 'audit', icon: '📋', label: 'Audit Logs', href: '#' },
];

export const mobileNavItems = [
  { id: 'overview', icon: '⌂', label: 'Home', href: '#', active: true },
  { id: 'members', icon: '👥', label: 'Members', href: '#' },
  { id: 'quick', icon: '＋', label: 'Quick', href: '#' },
  { id: 'reports', icon: '📊', label: 'Reports', href: '#' },
];

export const currentUser = {
  initials: 'AS',
  name: 'Abune Selam',
  role: 'Super Admin',
};

export const pageIntro = {
  title: 'Super Admin Dashboard',
  subtitle: 'System-wide oversight, governance, and operational intelligence.',
  quote: {
    text: '“For where two or three gather in my name,',
    text2: 'there am I with them.”',
    citation: 'Matthew 18:20',
  },
};

export const kpis = [
  { id: 'members', icon: '👥', label: 'Total Members', value: '12,487', trend: '↑ +12%', tone: 'green', helper: 'vs last month' },
  { id: 'branches', icon: '⛪', label: 'Active Branches', value: '18', trend: '↑ +6%', tone: 'green', helper: 'vs last month' },
  { id: 'donations', icon: '♥', label: 'Monthly Donations', value: '$12,430', trend: '↑ +28%', tone: 'green', helper: 'vs last month' },
  { id: 'approvals', icon: '📄', label: 'Pending Approvals', value: '24', trend: '↑ +3', tone: 'orange', helper: 'vs last week' },
  { id: 'events', icon: '📅', label: 'Active Events', value: '8', trend: '↑ +2', tone: 'green', helper: 'this month' },
  { id: 'orders', icon: '🛒', label: 'Shop Orders', value: '46', trend: '↑ +15%', tone: 'green', helper: 'vs last month' },
];

export const donationsChart = {
  period: 'Last 6 Months',
  yAxisLabels: ['$20K', '$15K', '$10K', '$5K', '$0'],
  legend: [
    { id: 'tithes', label: 'Tithes' },
    { id: 'offerings', label: 'Offerings' },
    { id: 'donations', label: 'Donations' },
  ],
  months: [
    { month: 'Jan', tithes: 30, offerings: 42, donations: 56 },
    { month: 'Feb', tithes: 48, offerings: 63, donations: 78 },
    { month: 'Mar', tithes: 56, offerings: 53, donations: 74 },
    { month: 'Apr', tithes: 58, offerings: 70, donations: 85 },
    { month: 'May', tithes: 72, offerings: 84, donations: 70 },
    { month: 'Jun', tithes: 62, offerings: 78, donations: 100 },
  ],
};

export const branchPerformance = [
  { id: 1, rank: 1, name: 'St. Mary Cathedral', members: '2,487', donations: '$4,230', growth: '↑ 12%' },
  { id: 2, rank: 2, name: 'St. Gabriel Church', members: '1,842', donations: '$3,120', growth: '↑ 8%' },
  { id: 3, rank: 3, name: 'St. Michael Church', members: '1,267', donations: '$2,340', growth: '↑ 15%' },
  { id: 4, rank: 4, name: 'St. Tekle Haymanot', members: '986', donations: '$1,420', growth: '↑ 6%' },
  { id: 5, rank: 5, name: 'St. Raphael Church', members: '854', donations: '$980', growth: '↑ 10%' },
];

export const pendingApprovals = [
  { id: 1, icon: '👤', title: 'New Member Verification', subtitle: 'Selamawit Tesfaye', time: '2 hours ago', tag: 'pending', tagLabel: 'Pending' },
  { id: 2, icon: '📅', title: 'Event Approval', subtitle: 'Timket Celebration 2025', time: '5 hours ago', tag: 'review', tagLabel: 'Review' },
  { id: 3, icon: '🖼', title: 'Content Review', subtitle: 'Sermon: Faith in Action', time: '1 day ago', tag: 'pending', tagLabel: 'Pending' },
  { id: 4, icon: '🏆', title: 'Service Request', subtitle: 'Baptism Service', time: '1 day ago', tag: 'review', tagLabel: 'Review' },
  { id: 5, icon: '🛒', title: 'E-commerce Product', subtitle: 'Prayer Book (Amharic)', time: '2 days ago', tag: 'pending', tagLabel: 'Pending' },
];

export const roles = [
  { id: 'super-admins', icon: '♛', label: 'Super Admins', count: '3' },
  { id: 'admins', icon: '👥', label: 'Admins', count: '24' },
  { id: 'teachers', icon: '🎓', label: 'Teachers', count: '48' },
  { id: 'members', icon: '👥', label: 'Members', count: '12,487' },
];

export const project = {
  title: 'New Church Building Project',
  subtitle: 'St. Michael Church – Phase 2',
  progress: 72,
  votes: 348,
  daysRemaining: 12,
};

export const upcomingEvents = [
  { id: 1, month: 'JAN', day: '19', title: 'Divine Liturgy', location: 'St. Mary Cathedral', time: '◷ 8:00 AM' },
  { id: 2, month: 'JAN', day: '21', title: 'Bible Study', location: 'Online (Zoom)', time: '◷ 7:00 PM' },
  { id: 3, month: 'JAN', day: '25', title: 'Youth Gathering', location: 'St. Gabriel Church', time: '◷ 5:00 PM' },
  { id: 4, month: 'FEB', day: '02', title: 'Presentation of Our Lord (Timket)', location: 'All Parishes', time: '◷ 9:00 AM' },
];

export const recentActivity = [
  { id: 1, initials: 'AS', text: 'updated church information', name: 'Abune Selam', time: '2 minutes ago' },
  { id: 2, initials: 'MT', text: 'created a new event', name: 'Meron Tesfaye', time: '15 minutes ago' },
  { id: 3, initials: 'KB', text: 'approved member registration', name: 'Kassahun Bekele', time: '1 hour ago' },
  { id: 4, initials: 'SA', text: 'uploaded media file', name: 'Saron Alemu', time: '2 hours ago' },
  { id: 5, initials: 'DT', text: 'submitted a service request', name: 'Daniel Tadesse', time: '3 hours ago' },
];

export const systemHealth = [
  { id: 'database', icon: '🗄', label: 'Database', status: '● Healthy', tone: 'green', helper: 'Last backup: 2 hours ago' },
  { id: 'payments', icon: '💳', label: 'Payment Gateway', status: '● Operational', tone: 'green', helper: 'Last checked: 5 minutes ago' },
  { id: 'media', icon: '🖼', label: 'Media Storage', status: '● Healthy', tone: 'green', helper: '78% used' },
  { id: 'email', icon: '✉', label: 'Email & Notifications', status: '● Operational', tone: 'green', helper: 'Last checked: 3 minutes ago' },
];

export const faithBanner = {
  title: 'Together for a',
  title2: 'Stronger Tomorrow',
  subtitle: 'Manage today. Empower tomorrow.',
  subtitle2: 'For a vibrant, faithful and connected Church.',
  cta: 'All for the Glory of God →',
};
