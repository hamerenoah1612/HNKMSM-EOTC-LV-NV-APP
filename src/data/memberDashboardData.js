// Mock/member data for the dashboard.

export const navItems = [
  { id: 'dashboard', icon: '⌂', label: 'Dashboard', href: '#', active: true },
  { id: 'profile', icon: '●', label: 'My Profile', href: '#' },
  { id: 'household', icon: '👥', label: 'Family / Household', href: '#' },
  { id: 'services', icon: '◆', label: 'Services', href: '#' },
  { id: 'prayer', icon: '🙏', label: 'Prayer Requests', href: '#' },
  { id: 'events', icon: '▣', label: 'Events', href: '#' },
  { id: 'education', icon: '▤', label: 'Education', href: '#' },
  { id: 'media', icon: '▧', label: 'Media Library', href: '#' },
  { id: 'giving', icon: '♥', label: 'Donations & Giving', href: '#' },
  { id: 'payments', icon: '▰', label: 'Payments', href: '#' },
  { id: 'messages', icon: '✉', label: 'Messages', href: '#' },
  { id: 'shop', icon: '🛒', label: 'Shop', href: '#' },
  { id: 'projects', icon: '▥', label: 'Projects & Voting', href: '#' },
  { id: 'settings', icon: '⚙', label: 'Settings', href: '#' },
];

export const mobileNavItems = [
  { id: 'dashboard', icon: '⌂', label: 'Home', href: '#', active: true },
  { id: 'events', icon: '▣', label: 'Events', href: '#' },
  { id: 'giving', icon: '♥', label: 'Give', href: '#' },
  { id: 'messages', icon: '✉', label: 'Messages', href: '#', badge: 7 },
];

export const currentUser = {
  initials: 'AS',
  name: 'Abune Selam',
  role: 'Member',
  memberSince: 'Jan 2023',
  profileComplete: 85,
  household: '4 Members',
  membershipStatus: 'Active',
};

export const pageIntro = {
  title: 'Member Dashboard',
  subtitle: 'Stay connected with your church, services, giving, learning, and community life.',
  scripture: {
    ethiopic: '“ሁለት ወይም ሦስት በስሜ በተሰበሰቡበት...”',
    english: '“For where two or three gather in my name, there am I with them.”',
    citation: 'Matthew 18:20',
  },
};

export const stats = [
  { id: 'events', icon: '▣', label: 'Upcoming Events', value: '3', helper: 'This month' },
  { id: 'prayers', icon: '🙏', label: 'Prayer Requests', value: '2', helper: 'Active requests' },
  { id: 'donations', icon: '♥', label: 'My Donations', value: '$245', trend: '↑ +18%', helper: 'This month' },
  { id: 'applications', icon: '▤', label: 'Service Applications', value: '4', helper: 'Total requests' },
  { id: 'learning', icon: '▤', label: 'Learning Progress', value: '68%', progress: 68 },
  { id: 'unread-messages', icon: '▰', label: 'Messages', value: '7', helper: 'Unread' },
];

export const services = [
  { id: 1, icon: '◉', title: 'Baptism Service', subtitle: 'For Selam Tesfaye', status: 'approved', statusLabel: 'Approved', date: 'Jun 10, 2024' },
  { id: 2, icon: '✝', title: 'Funeral Service Application', subtitle: 'For Abebech Tesfaye', status: 'review', statusLabel: 'In Review', date: 'May 28, 2024' },
  { id: 3, icon: '♜', title: 'Holy Communion', subtitle: 'General Service', status: 'approved', statusLabel: 'Approved', date: 'Apr 14, 2024' },
  { id: 4, icon: '♝', title: 'Father of Repentance', subtitle: 'Lent Season', status: 'scheduled', statusLabel: 'Scheduled', date: 'Mar 3, 2024' },
  { id: 5, icon: '🙏', title: 'Prayer Request', subtitle: 'For my family', status: 'pending', statusLabel: 'Pending', date: 'Jun 12, 2024' },
];

export const events = [
  { id: 1, month: 'JAN', day: '19', title: 'Divine Liturgy', location: 'St. Mary Cathedral', time: '8:00 AM', attendees: 120 },
  { id: 2, month: 'JAN', day: '21', title: 'Bible Study', location: 'Online (Zoom)', time: '7:00 PM', attendees: 45 },
  { id: 3, month: 'JAN', day: '25', title: 'Youth Gathering', location: 'St. Gabriel Church', time: '5:00 PM', attendees: 68 },
  { id: 4, month: 'FEB', day: '02', title: 'Sunday School', location: 'St. Michael Church', time: '9:00 AM', attendees: 52 },
  { id: 5, month: 'FEB', day: '11', title: 'Timket Celebration 2025', location: 'St. Mary Cathedral', time: '9:00 AM', attendees: 200 },
];

export const givingTabs = ['This Month', 'This Year', 'Giving History'];

export const givingSummary = {
  total: '$245',
  label: 'Total Giving This Month',
  trend: '↑ +18%',
  trendHelper: 'vs last month',
};

export const givingChart = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  heights: [28, 48, 38, 68, 62, 82],
};

export const givingBreakdown = [
  { id: 'donations', icon: '◉', label: 'Donations', amount: '$120' },
  { id: 'tithes', icon: '▣', label: 'Tithes', amount: '$60' },
  { id: 'offerings', icon: '◉', label: 'Offerings', amount: '$40' },
  { id: 'membership', icon: '▣', label: 'Membership Fees', amount: '$25' },
  { id: 'event-payments', icon: '▤', label: 'Event Payments', amount: '$0' },
  { id: 'education-fees', icon: '◆', label: 'Educational Fees', amount: '$0' },
];

export const mediaCategories = [
  { id: 'books', icon: '▥', label: 'Books' },
  { id: 'ebooks', icon: '▤', label: 'E-books' },
  { id: 'videos', icon: '▶', label: 'Videos' },
  { id: 'audio', icon: '♬', label: 'Audio' },
  { id: 'sermons', icon: '♩', label: 'Sermons' },
  { id: 'documents', icon: '▤', label: 'Documents' },
  { id: 'archives', icon: '▣', label: 'Archives' },
  { id: 'photos', icon: '▧', label: 'Photos' },
  { id: 'sunday-school', icon: '◆', label: 'Sunday School' },
  { id: 'marriage-school', icon: '⚭', label: 'Marriage School' },
  { id: 'resources', icon: '▤', label: 'Educational Resources' },
  { id: 'all-media', icon: '▦', label: 'All Media' },
];

export const messages = [
  { id: 1, thumb: 'church', title: 'Timket Celebration 2025', preview: 'Join us for the annual Timket celebration...', time: '2 hours ago' },
  { id: 2, thumb: 'people', title: 'Youth Ministry Update', preview: 'New youth programs and activities for...', time: '1 day ago' },
  { id: 3, thumb: 'church', title: 'Church Building Project', preview: 'Construction update and next steps...', time: '3 days ago' },
  { id: 4, thumb: 'people', title: 'Sunday School Registration', preview: 'Registration is now open for 2025...', time: '5 days ago' },
  { id: 5, thumb: 'priest', title: 'A Message from Our Priest', preview: 'Reflections for the new year...', time: '1 week ago' },
];

export const project = {
  title: 'New Church Building Project',
  subtitle: 'St. Michael Church - Phase 2',
  description: 'Help us build a stronger future for our community.',
  progress: 72,
  votes: 348,
  daysRemaining: 12,
};

export const recentActivity = [
  { id: 1, icon: '▣', text: 'Registered for Divine Liturgy', time: '2 hours ago' },
  { id: 2, icon: '🙏', text: 'Submitted a prayer request', time: '1 day ago' },
  { id: 3, icon: '♥', text: 'Made a donation of $100', time: '2 days ago' },
  { id: 4, icon: '▤', text: 'Viewed sermon: Faith in Action', time: '3 days ago' },
  { id: 5, icon: '●', text: 'Updated profile information', time: '5 days ago' },
];

export const quickActions = [
  { id: 'request-service', icon: '✝', label: 'Request Service' },
  { id: 'submit-prayer', icon: '🙏', label: 'Submit Prayer Request' },
  { id: 'give-now', icon: '♥', label: 'Give Now' },
  { id: 'register-event', icon: '▣', label: 'Register for Event' },
  { id: 'access-sermons', icon: '▶', label: 'Access Sermons' },
  { id: 'visit-shop', icon: '🛒', label: 'Visit Shop' },
];

export const shopCategories = [
  { id: 'books', label: '▥ Books & Publications' },
  { id: 'digital', label: '▤ Digital Products' },
  { id: 'resources', label: '▤ Educational Resources' },
  { id: 'supplies', label: '✠ Church Supplies' },
  { id: 'events', label: '▣ Event Registrations' },
  { id: 'ministry', label: '♟ Ministry Resources' },
];

export const faithBanner = {
  title: 'Grow in Faith and Community',
  subtitle: 'Together in Worship, Learning, and Service',
  subtitle2: 'for a Brighter Tomorrow.',
  cta: 'All for the Glory of God →',
};
