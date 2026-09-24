// All static copy lives here so components stay presentational.
// Swap these for API data later without touching the markup.

export const BRAND = {
  name: 'HNKMSM-EOTC-LV-NV',
  tagline: 'Faith · Community · Service · Together',
  denomination: 'Ethiopian Orthodox Tewahedo Church',
  mark: '☦',
};

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'features', label: 'Features' },
  { id: 'services', label: 'Services' },
  { id: 'events', label: 'Events' },
  { id: 'news', label: 'News' },
  { id: 'multimedia', label: 'Multimedia' },
  { id: 'learning', label: 'Learning' },
  { id: 'shop', label: 'Shop' },
  { id: 'giving', label: 'Donations' },
  { id: 'contact', label: 'Contact' },
];

export const VALUES = [
  { icon: '👥', label: ['Stronger', 'Community'] },
  { icon: '♥', label: ['Faith in Action'] },
  { icon: '👨‍👩‍👧‍👦', label: ['For All', 'Generations'] },
  { icon: '🌿', label: ['Serve', 'Together'] },
];

export const HERO_PREVIEW = {
  sidebar: [
    'Dashboard',
    'Members',
    'Services',
    'Events',
    'Education',
    'Media',
    'Donations',
    'Messages',
    'Reports',
    'Settings',
  ],
  stats: [
    { label: 'Total Members', value: '1,248', note: '↑ 12%' },
    { label: 'Upcoming Events', value: '8', note: 'This month' },
    { label: 'Total Donations', value: '$12,430', note: '↑ 28%' },
    { label: 'Active Services', value: '6', note: 'This week' },
  ],
  events: ['Divine Liturgy', 'Bible Study', 'Youth Gathering'],
  announcements: [
    'Lenten Season Schedule',
    'Church School Registration',
    'Community Service Project',
  ],
  mobileMenu: ['My Profile', 'Events', 'Donations', 'Messages', 'Media Library'],
};

export const FEATURES = [
  { icon: '👥', title: 'Membership', description: 'Manage members, families, roles and group participation with ease.' },
  { icon: '⛪', title: 'Church Services', description: 'Service applications, sacraments, and pastoral care management.' },
  { icon: '🙏', title: 'Prayer Requests', description: 'Submit and share prayer requests. Pray together as one community.' },
  { icon: '🗓', title: 'Events', description: 'Create, manage and attend church events, feasts and gatherings.' },
  { icon: '📖', title: 'Education & School', description: 'Sunday school, religious education, e-learning and student management.' },
  { icon: '▶', title: 'Media Library', description: 'Access sermons, hymns, videos, audio, e-books, photos and documents.' },
  { icon: '♥', title: 'Donations & Giving', description: 'Tithes, offerings, donations and project support with secure payments.' },
  { icon: '🛒', title: 'E-commerce', description: 'Purchase books, icons, church supplies and support church projects.' },
];

export const PORTAL_URL = 'https://ai.studio/apps/ae39ca7a-80c7-490f-8dcb-c5b93272e9b5';

export function openPortal(e) {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }
  try {
    if (window.top && window.top !== window) {
      window.top.location.href = PORTAL_URL;
      return;
    }
  } catch (err) {
    // Cross-origin fallback
  }
  window.open(PORTAL_URL, '_blank', 'noopener,noreferrer');
}

export const ADMIN_ROLE = {
  icon: 'crown',
  title: 'Admin Dashboard',
  subtitle: 'Powerful tools for church administrators',
  items: [
    'Member & role management',
    'Service & event administration',
    'Donations, reports & analytics',
    'Content and communication tools',
    'Project management & voting',
  ],
  cta: { label: 'View Admin Dashboard →', href: PORTAL_URL },
};

export const MEMBER_ROLE = {
  icon: 'users',
  title: 'Member Dashboard',
  subtitle: 'Stay connected and get involved',
  items: [
    'Manage your profile and family',
    'Register for services and events',
    'Submit prayer requests',
    'Access learning and media',
    'Give and support church projects',
  ],
  cta: { label: 'View Member Dashboard →', href: PORTAL_URL },
};

export const GIVING_OPTIONS = [
  { icon: '♥', title: 'Donations', caption: 'Support ministry' },
  { icon: '🪙', title: 'Tithes', caption: 'Honor God' },
  { icon: '🌿', title: 'Offerings', caption: 'Bless others' },
  { icon: '👤', title: 'Membership Fees', caption: 'Invest in community' },
  { icon: '🗓', title: 'Event Payments', caption: 'Support church events' },
];

export const MEDIA_TYPES = [
  { icon: '📖', title: 'Books', caption: 'Spiritual reading' },
  { icon: '📄', title: 'E-books', caption: 'Digital library' },
  { icon: '▶', title: 'Videos', caption: 'Sermons & teaching' },
  { icon: '♫', title: 'Audio', caption: 'Hymns & chants' },
  { icon: '📄', title: 'Documents', caption: 'Guides & resources' },
  { icon: '🖼', title: 'Photos', caption: 'Church life' },
  { icon: '🗃', title: 'Archives', caption: 'Preserve our history' },
];

export const GIVING_QUOTE = {
  text: 'Each of you should give what you have decided in your heart ... for God loves a cheerful giver.',
  cite: '2 Corinthians 9:7',
};

export const SOCIALS = [
  { icon: 'facebook', label: 'Facebook', href: '#' },
  { icon: 'youtube', label: 'YouTube', href: '#' },
  { icon: 'instagram', label: 'Instagram', href: '#' },
];

export const OBJECTIVES_TEASER = {
  title: "App's Core Objectives",
  teaser: 'Eleven pillars guiding our mission',
};

// Amharic + English text is kept verbatim from the source content.
export const OBJECTIVES = [
  {
    en: 'Preservation',
    icon: 'shield',
    am: 'መጠበቅ',
    textAm: 'የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ክርስትናን የተቀደሰ አስተምህሮ በትምህርት ግብአት እና መስተጋብራዊ መድረኮችን ማስጠበቅ።',
    textEn: "Uphold Ethiopian Orthodox Tewahedo Christianity's sacred teachings through educational resources and interactive platforms.",
  },
  {
    en: 'Inspiration',
    icon: 'star',
    am: 'ተመስጦ',
    textAm: 'የወንጌልን መልእክት አካፍሉ፤ ወደንስሐ ማሥገባትን እና የክርስቶስን ትምህርት መንግሥተ ሰማያትን ለመውረስ በጥልቀት መረዳት።',
    textEn: "Share the gospel message, inspiring repentance and acceptance of Christ's teachings for inheriting the kingdom of heaven.",
  },
  {
    en: 'Support',
    icon: 'hands',
    am: 'ድጋፍ',
    textAm: 'መንፈሳዊ እና ማህበራዊ ድጋፍ ስርዓቶችን ማዳበር፣ አማኞች ለሁለንተናዊ ደህንነት አስፈላጊ አገልግሎቶችን እንዲያገኙ ማድረግ።',
    textEn: 'Cultivate spiritual and social support systems, ensuring believers access necessary services for holistic well-being.',
  },
  {
    en: 'Unity',
    icon: 'link',
    am: 'አንድነት',
    textAm: 'መንፈሳዊ እድገትን ማጎልበት፣በአማኞች መካከል አንድነትንና ፍቅርን በመንከባከብ የእግዚአብሔርን ብርሃን ያበራል።',
    textEn: "Foster spiritual development, nurturing unity and love among believers to radiate God's light.",
  },
  {
    en: 'Education',
    icon: 'book',
    am: 'ትምህርት',
    textAm: 'አማኞችን በሀብቶች ያስታጥቃቸዋል፣ የሃይማኖታዊ አስተምህሮዎችን በጥልቀት መረዳት እና እምነትን ከዕለት ተዕለት ኑሮ ጋር በማዋሃድ።',
    textEn: 'Equip believers with resources, deepening understanding of religious doctrine and integrating faith into daily lives.',
  },
  {
    en: 'Devotion',
    icon: 'flame',
    am: 'ተገዢነት',
    textAm: 'ሃይማኖታዊ መርሆችን ማጠናከር፣ እምነቶችን፣ ወጎችን እና ሥነ ምግባሮችን ለጋራ ማህበረሰብ ማስማማት።',
    textEn: 'Strengthen devotion to religious principles, harmonizing beliefs, traditions, and morals for a cohesive community.',
  },
  {
    en: 'Bonding',
    icon: 'link',
    am: 'ትስስር',
    textAm: 'ከሃይማኖታዊ ጽሑፎች ጋር መተሳሰርን ማመቻቸት፣ የተቀደሰ እውቀት በግል እና በጋራ ሕይወት ውስጥ እንዲተገበር ማበረታታት።',
    textEn: 'Facilitate engagement with religious texts, encouraging application of sacred knowledge in personal and communal life.',
  },
  {
    en: 'Participation',
    icon: 'check',
    am: 'ተሳትፎ',
    textAm: 'በሃይማኖታዊ ተግባራት ንቁ ተሳትፎን ማበረታታት፣ በአማኞች መካከል አባልነትን እና ቁርጠኝነትን ማጎልበት።',
    textEn: 'Encourage active participation in religious practices, fostering belonging and commitment among believers.',
  },
  {
    en: 'Transformation',
    icon: 'refresh',
    am: 'ለውጥ',
    textAm: 'አማኞች የጌታችን የመድኃኒታችን የኢየሱስ ክርስቶስን ትምህርት በሕይወታቸው ውስጥ እንዲያካሂዱ በማድረግ ለውጥ የሚያመጣ ለውጥን ማዳበር።',
    textEn: 'Foster transformative change, enabling believers to embody the teachings of our Lord and Savior Jesus Christ in their lives.',
  },
  {
    en: 'Empowerment',
    icon: 'bolt',
    am: 'ማበረታታት',
    textAm: 'አማኞች እምነታቸውን እንዲካፈሉ፣ የጌታችን የመድኃኒታችን የኢየሱስ ክርስቶስን ትምህርት አና መልእክት በማስፋፋት እና ለውጥን የሚያነሳሳ።',
    textEn: 'Empower believers to share their faith, spreading the message of The teachings of our Lord and Savior Jesus Christ and inspiring change.',
  },
  {
    en: 'Guidance',
    icon: 'compass',
    am: 'መመሪያ',
    textAm: 'መንፈሳዊ መመሪያን እና ድጋፍን መስጠት፣ አማኞች ፈተናዎችን እንዲያሸንፉ እና ከእግዚአብሔር ጋር ባላቸው ግንኙነት እንዲያድጉ መርዳት።',
    textEn: 'Provide spiritual guidance and support, helping believers navigate challenges and grow in their relationship with God.',
  },
];
