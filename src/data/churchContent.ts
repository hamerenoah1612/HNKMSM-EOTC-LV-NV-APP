import { ServiceFeature, ChurchPillar } from '../types';

export const CHURCH_NAME_EN = "HNKMSM-EOTC-LV-NV";
export const CHURCH_SUBTITLE_EN = "Ethiopian Orthodox Tewahedo Church";
export const CHURCH_FULL_TITLE = "Holy Name of Jesus & Saint Mary Ethiopian Orthodox Tewahedo Church of Las Vegas, NV";

export const VERSE_EN = "“For where two or three gather in my name, there am I with them.”";
export const VERSE_REF_EN = "Matthew 18:20";

export const VERSE_GEEZ = "“እስመ ኀበ ተጋብኡ ክልኤ ወሠለስቱ በስምየ፤ ህየ ሀሎኩ በማእከሎሙ።”";
export const VERSE_REF_GEEZ = "ማቴዎስ ፲፰:፳";

export const TAGLINE_EN = "Together for a Stronger Tomorrow";
export const TAGLINE_SUB_EN = "A vibrant, faithful, and connected community.";

export const TAGLINE_AM = "ለብርሃን እና ለተስፋ የተሞላ ነገ አብረን እንቁም";
export const TAGLINE_SUB_AM = "መንፈሳዊ፣ ሕያውና የተዋበ ማኅበር።";

export const PILLARS: ChurchPillar[] = [
  {
    id: 'glory',
    title: 'All for the Glory of God',
    titleAm: 'ሁሉ ለእግዚአብሔር ክብር',
    iconName: 'Sparkles',
  },
  {
    id: 'serve',
    title: 'Serve Together',
    titleAm: 'አብረን እናገልግል',
    iconName: 'HeartHandshake',
  },
  {
    id: 'grow',
    title: 'Grow in Faith',
    titleAm: 'በእምነት ማደግ',
    iconName: 'Sprout',
  },
  {
    id: 'build',
    title: 'Build a Brighter Tomorrow',
    titleAm: 'ነገን ማነፅ',
    iconName: 'Building2',
  },
];

export const SERVICE_FEATURES: ServiceFeature[] = [
  {
    id: 'membership',
    title: 'Membership & Family',
    titleAm: 'አባልነት እና ቤተሰብ',
    description: 'Manage your profile, family, and church involvement.',
    descriptionAm: 'የቤተሰብ መዝገብዎን እና የቤተክርስቲያን ተሳትፎዎን ይከታተሉ።',
    iconName: 'Users',
    details: {
      badge: 'Parish Register',
      summary: 'Keep your household records updated, register children for Sunday School (Senbet Timhert Bet), and renew yearly parish memberships.',
      highlights: [
        'Family household member roster',
        'Sunday School (ሰንበት ትምህርት ቤት) registration',
        'Spiritual Father (የነፍስ አባት) assignment tracking',
        'Parish directory & emergency contact info',
      ],
      actionLabel: 'View Member Directory',
    },
  },
  {
    id: 'services',
    title: 'Church Services',
    titleAm: 'የቤተክርስቲያን አገልግሎት',
    description: 'View schedules, register, and participate.',
    descriptionAm: 'የቅዳሴ፣ የጸሎት እና የአገልግሎት ሰዓቶችን ይመልከቱ።',
    iconName: 'Church',
    details: {
      badge: 'Liturgical Timetable',
      summary: 'Join our weekly Divine Liturgy (Kidase), evening prayers, holy feast day commemorations, and seasonal fast programs.',
      highlights: [
        'Sunday Divine Liturgy (ቅዳሴ): 6:00 AM – 10:30 AM',
        'Saturday Evening Prayer (ሰርክ ጸሎት): 5:30 PM – 7:00 PM',
        'Monthly Saint Days: Mariam (21st), Michael (12th), Gabriel (19th)',
        'Baptism, Matrimony, and Memorial Service bookings',
      ],
      actionLabel: 'Check Service Schedule',
    },
  },
  {
    id: 'prayers',
    title: 'Prayer Requests',
    titleAm: 'የጸሎት ጥያቄዎች',
    description: 'Submit and pray together as a community.',
    descriptionAm: 'የጸሎት ልመናዎን ያቅርቡ፣ በማኅበር አብረን እንጸልይ።',
    iconName: 'HandHeart',
    details: {
      badge: 'Intercessory Prayer',
      summary: 'Submit prayer petitions for healing, bereavement, thanksgiving, or exams to be commemorated by clergy and prayer groups during the Liturgy.',
      highlights: [
        'Commemoration during Holy Liturgy (በቅዳሴ ጊዜ የሚታሰቡ)',
        'Confidential prayer requests for spiritual fathers',
        'Healing and comfort prayer group list',
        'Memorial prayers (ፍትሐት እና መታሰቢያ)',
      ],
      actionLabel: 'Submit Prayer Request',
    },
  },
  {
    id: 'events',
    title: 'Events & Activities',
    titleAm: 'ዝግጅቶችና ጉባኤያት',
    description: 'Discover and join church events and gatherings.',
    descriptionAm: 'የመንፈሳዊ ጉባኤዎችን፣ የክብረ በዓላትን መርሐ ግብር ይወቁ።',
    iconName: 'Calendar',
    details: {
      badge: 'Parish Calendar',
      summary: 'Stay engaged with annual Patrons Day feast celebrations, youth ministry camps, spiritual seminars, and community fellowship banquets.',
      highlights: [
        'Annual Feasts of Holy Virgin Mary & Holy Cross (Meskel)',
        'Youth & Young Adults Fellowship (ወጣቶች ማኅበር)',
        'Biblical & Patristic Teaching Seminars',
        'Community cultural dinners and charity drives',
      ],
      actionLabel: 'Explore Church Calendar',
    },
  },
  {
    id: 'donations',
    title: 'Donations & Giving',
    titleAm: 'ስጦታና አሥራት',
    description: 'Support ministry and make a difference.',
    descriptionAm: 'ለቤተክርስቲያኑ ግንባታና አገልግሎት ድጋፍዎን ያበርክቱ።',
    iconName: 'Heart',
    details: {
      badge: 'Faithful Stewardship',
      summary: 'Contribute tithes (አሥራት), building fund pledges, Mezmur ministry support, and humanitarian benevolence outreach securely online.',
      highlights: [
        'Monthly parishioner tithes & offerings',
        'New Church Sanctuary Building Fund',
        'Monastery & Charity Outreach fund',
        'Instant tax deductible donation receipts',
      ],
      actionLabel: 'Make a Contribution',
    },
  },
  {
    id: 'media',
    title: 'Media & Learning',
    titleAm: 'ትምህርትና ሚዲያ',
    description: 'Access sermons, teachings, and resources.',
    descriptionAm: 'ስብከቶች፣ ዝማሬዎችና የኦርቶዶክስ ተዋሕዶ ትምህርቶችን ያግኙ።',
    iconName: 'BookOpen',
    details: {
      badge: 'Spiritual Library',
      summary: 'Deepen your knowledge of Orthodox Tewahedo theology, hymns (Mezmur), Liturgical chants (Zema of Saint Yared), and daily spiritual teachings.',
      highlights: [
        'Archived Sunday sermons & spiritual homilies',
        'Audio hymns (የተመረጡ ኦርቶዶክሳዊ ዝማሬዎች)',
        'Orthodox Tewahedo catechism and Geez language basics',
        'Liturgical prayer books (ውዳሴ ማርያም፣ መጽሐፈ ሰዓታት)',
      ],
      actionLabel: 'Browse Teachings & Mezmur',
    },
  },
];

export const CHURCH_CONTACT_INFO = {
  address: 'Las Vegas, Nevada, United States',
  phone: '(702) 555-EOTC (3682)',
  email: 'info@hnkmsm-eotc.org',
  officeHours: 'Mon - Fri: 9:00 AM – 4:00 PM | Sat - Sun: Liturgy & Fellowship',
  seniorPriest: 'Melake Tsion Father / የቤተክርስቲያኑ አስተዳዳሪ',
};
