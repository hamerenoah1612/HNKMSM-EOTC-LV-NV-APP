// Comprehensive data store for all Landing Portal sections:
// About Us, Services, Events, News, Multimedia, Media & Learning, Shop, Donations, Contact, Terms, Privacy, and Cookie Banner / Notice.

export const COOKIE_BANNER_DATA = {
  title: 'Parish Digital Sanctuary & Cookie Notice',
  shortDescription:
    'Our church portal uses essential cookies and local storage to preserve your spiritual preferences, secure your member session, and support online donation receipts.',
  learnMoreLabel: 'Learn More',
  acceptLabel: 'Accept & Proceed',
  declineLabel: 'Essential Only',
};

export const ABOUT_US_DATA = {
  history: {
    title: 'Sacred Heritage & Parish History',
    lead: 'Rooted in the ancient apostolic tradition of the Ethiopian Orthodox Tewahedo Church.',
    paragraphs: [
      'The Ethiopian Orthodox Tewahedo Church is one of the world’s oldest Christian apostolic bodies, tracing its roots to the baptism of the Ethiopian eunuch by Saint Philip the Apostle in the 1st century (Acts 8:26–40) and the formal proclamation under Saint Frumentius (Abba Salama Kesate Berhan) in the 4th century.',
      'Our local parish, Holy Name of Jesus & Saint Mary (HNKMSM-EOTC-LV-NV) in Las Vegas, was established by faithful diaspora believers yearning for liturgical worship, spiritual nourishment, and intergenerational cultural preservation in the American Southwest.',
      'From humble home prayer fellowships to a full sacramental parish, our community continues to expand with weekly Divine Liturgy (Kidase), Sunday School, youth ministry, and charitable outreach.',
    ],
  },
  vision: {
    title: 'Our Vision',
    statement:
      'To be a shining beacon of apostolic Orthodoxy in Nevada and beyond—cultivating devout souls, fostering deep Christian love, and handing down the unblemished faith of our holy fathers to our children and grandchildren.',
    pillars: [
      'Unwavering fidelity to Orthodox dogma and patristic theology',
      'An inclusive spiritual home welcoming all generations and seekers',
      'A permanent, magnificent cathedral sanctuary to glorify God forever',
    ],
  },
  mission: {
    title: 'Our Mission',
    statement:
      'To preach the Gospel of Jesus Christ, celebrate the holy sacraments, nurture members in holy living, and actively minister through compassionate diaconal service to all in need.',
    keyPoints: [
      {
        icon: '✝',
        title: 'Spiritual Worship',
        desc: 'Offering pure liturgical worship (Kidase) in the ancient Ge’ez and contemporary tongues.',
      },
      {
        icon: '📖',
        title: 'Catechism & Education',
        desc: 'Teaching the Holy Scriptures, Orthodox theology, and the hymns of Saint Yared.',
      },
      {
        icon: '♥',
        title: 'Charity & Fellowship',
        desc: 'Extending Christ’s compassion through community benevolence and hospital visits.',
      },
      {
        icon: '👨‍👩‍👧‍👦',
        title: 'Youth & Family',
        desc: 'Safeguarding our youth with vibrant mentorship, language, and spiritual guidance.',
      },
    ],
  },
  values: [
    {
      id: 'faith',
      icon: '✝',
      title: 'Orthodox Faith (ተዋሕዶ ሃይማኖት)',
      desc: 'Holding fast to the Nicene-Constantinopolitan Creed and the teachings of the Holy Fathers.',
    },
    {
      id: 'love',
      icon: '♥',
      title: 'Agape Love (ፍቅር)',
      desc: 'Walking in humble Christian brotherhood, forgiving and uplifting one another.',
    },
    {
      id: 'prayer',
      icon: '🙏',
      title: 'Ceaseless Prayer (ጸሎት)',
      desc: 'Centering daily parish and family life upon the sacraments and intercession of the Holy Theotokos.',
    },
    {
      id: 'service',
      icon: '🤝',
      title: 'Selfless Service (አገልግሎት)',
      desc: 'Offering our gifts, tithes, and time for the glory of God and the uplifting of our community.',
    },
  ],
  higherLeaders: [
    {
      role: 'Patriarch & Head of the Holy Synod',
      name: 'His Holiness Abune Mathias',
      title: 'Patriarch of the Ethiopian Orthodox Tewahedo Church',
      location: 'Holy Synod Secretariat, Addis Ababa',
      avatar: '👑',
    },
    {
      role: 'Archbishop & Hierarch',
      name: 'His Grace Abune Selam',
      title: 'Archbishop of the North American Diocese & Nevada Eparchy',
      location: 'Diocesan Chancellery',
      avatar: '✠',
    },
    {
      role: 'Parish Dean & Senior Clergy',
      name: 'Melake Tsion Father Tekle Haymanot',
      title: 'Senior Priest & Spiritual Father',
      location: 'Las Vegas Parish Rectory',
      avatar: '✝',
    },
    {
      role: 'Parish Board & Council',
      name: 'General Assembly & Parish Council',
      title: 'Elected Clergy & Lay Administrative Council',
      location: 'HNKMSM Board of Trustees',
      avatar: '🏛',
    },
  ],
};

export const SERVICES_CATALOG = [
  {
    id: 'divine-liturgy',
    category: 'Sacramental Worship',
    title: 'Holy Divine Liturgy (ቅዳሴ)',
    schedule: 'Sundays 6:00 AM – 10:30 AM',
    location: 'Main Sanctuary',
    summary: 'The central Eucharistic sacrifice featuring the ancient Anaphoras, Ge’ez hymns of Saint Yared, scripture readings, and holy communion.',
    badge: 'Weekly',
  },
  {
    id: 'saturday-vespers',
    category: 'Prayer & Vigil',
    title: 'Saturday Evening Prayer (ሰርክ ጸሎት)',
    schedule: 'Saturdays 5:30 PM – 7:00 PM',
    location: 'Church Sanctuary',
    summary: 'Preparation for the Lord’s Day with the singing of Mahlet, penitential hymns, and evening blessing.',
    badge: 'Weekly',
  },
  {
    id: 'holy-baptism',
    category: 'Sacraments',
    title: 'Holy Baptism & Chrismation (ጥምቀት)',
    schedule: 'By Appointment (40 days for boys, 80 days for girls)',
    location: 'Baptismal Font',
    summary: 'Newborn and adult initiation into the Body of Christ with triple immersion, Holy Myron (Chrismation), and the child’s first Communion.',
    badge: 'Sacrament',
  },
  {
    id: 'holy-matrimony',
    category: 'Sacraments',
    title: 'Holy Matrimony (ተክሊል)',
    schedule: 'Seasonal arrangements with Spiritual Father',
    location: 'Holy Sanctuary',
    summary: 'Crowning of bride and groom in Christ, blessed by the holy cross, united for holy Christian family life.',
    badge: 'Sacrament',
  },
  {
    id: 'pastoral-care',
    category: 'Pastoral Care',
    title: 'Spiritual Fatherhood & Confession (ንስሐ)',
    schedule: 'Available weekly after services or appointment',
    location: 'Clergy Consultation Room',
    summary: 'Confidential spiritual counsel, penance, healing prayers, and pastoral guidance for youth, marriages, and elders.',
    badge: 'Daily',
  },
  {
    id: 'memorial-services',
    category: 'Memorial',
    title: 'Memorial Prayers & Requiem (ፍትሐት)',
    schedule: 'Upon request & liturgical commemorations',
    location: 'Church Sanctuary',
    summary: 'Prayers for the repose of departed faithful at 3 days, 7 days, 40 days, and annual anniversaries.',
    badge: 'Memorial',
  },
];

export const UPCOMING_EVENTS = [
  {
    id: 'event-timket',
    title: 'Feast of the Holy Epiphany (Timket / ጥምቀት)',
    date: 'January 19, 2026',
    time: '6:30 AM – 2:00 PM',
    location: 'Sanctuary & Community Grounds',
    summary: 'Commemoration of the Baptism of Jesus Christ in the Jordan River by Saint John the Baptist. Procession of the Tabot, blessing of holy water, and traditional Mezmur.',
    category: 'Major Holy Feast',
    tag: 'Holy Feast',
  },
  {
    id: 'event-mariam',
    title: 'Monthly Feast of the Holy Virgin Mary (በዓለ ማርያም)',
    date: 'Monthly on the 21st',
    time: '6:00 AM – 10:30 AM',
    location: 'Main Sanctuary',
    summary: 'Liturgy and intercessory prayers honoring the Mother of God, Saint Mary, protectress of our parish and spiritual sanctuary.',
    category: 'Monthly Feast',
    tag: 'Commemoration',
  },
  {
    id: 'event-youth-retreat',
    title: 'Annual Youth Spiritual Retreat & Seminar',
    date: 'April 11 – 12, 2026',
    time: '9:00 AM – 5:00 PM',
    location: 'Parish Fellowship Hall',
    summary: 'Spiritual lectures by visiting scholars, Geez chanting workshops, Q&A on faith in modern society, and youth fellowship banquets.',
    category: 'Youth Ministry',
    tag: 'Seminar',
  },
  {
    id: 'event-meskel',
    title: 'Feast of the Finding of the True Cross (Meskel / መስቀል)',
    date: 'September 27, 2026',
    time: '4:00 PM – 8:30 PM',
    location: 'Church Pavilion',
    summary: 'Celebration of Empress Helena finding the Holy Cross. Lighting of the Demera bonfire, choral singing, and community feast.',
    category: 'Major Holy Feast',
    tag: 'Cultural Heritage',
  },
];

export const CHURCH_NEWS = [
  {
    id: 'news-1',
    title: 'Phase 2 Groundbreaking for the New Church Sanctuary Building',
    date: 'September 20, 2026',
    category: 'Parish Development',
    excerpt: 'The Parish Council has officially approved the architectural plans for the new traditional domed cathedral. Construction bids are now open.',
    readTime: '3 min read',
    content: 'With immense gratitude to the Almighty God and the generosity of our parishioners, the building committee has finalized permits for our permanent sanctuary. The new edifice will feature authentic Lalibela-inspired stone arches, a dedicated Sunday School pavilion, and a 400-seat community fellowship hall.',
  },
  {
    id: 'news-2',
    title: 'Sunday School (ሰንበት ትምህርት ቤት) Fall Registration Open',
    date: 'September 14, 2026',
    category: 'Education',
    excerpt: 'Enrollment is now live for children ages 4 to 18. Classes cover Bible history, Ge’ez hymns, spiritual etiquette, and Amharic language.',
    readTime: '2 min read',
    content: 'Invest in your children’s eternal spiritual foundation. Our certified deacon and teacher committee provides age-appropriate classes every Sunday following the Divine Liturgy. Free study books and snacks are provided.',
  },
  {
    id: 'news-3',
    title: 'Bishop Abune Selam Pastoral Visitation to Nevada Parishes',
    date: 'September 05, 2026',
    category: 'Hierarchical Visit',
    excerpt: 'His Grace Archbishop Abune Selam celebrated the archpastoral Liturgy and conferred diaconal ordinations upon four parish youth.',
    readTime: '4 min read',
    content: 'During his weekend pastoral visit, His Grace met with youth leaders, blessed the church elders, and offered deep spiritual exhortation on preserving unity and steadfast prayer across our diaspora communities.',
  },
];

export const MULTIMEDIA_ITEMS = [
  {
    id: 'media-sermon-faith',
    type: 'video',
    title: 'Faith in the Midst of Modern Trials (እምነት በዘመናዊ ፈተናዎች)',
    speaker: 'Melake Tsion Father Tekle',
    duration: '42 mins',
    date: 'Aug 2026',
    thumbnailIcon: '▶',
    url: '#',
    badge: 'Sermon',
  },
  {
    id: 'media-mezmur-mariam',
    type: 'audio',
    title: 'Traditional St. Yared Chants & Hymns to St. Mary (የማርያም ዝማሬዎች)',
    speaker: 'Parish Deacon Choir',
    duration: '28 mins',
    date: 'Jul 2026',
    thumbnailIcon: '♫',
    url: '#',
    badge: 'Chant',
  },
  {
    id: 'media-timket-doc',
    type: 'video',
    title: 'Highlights of Holy Timket Feast & Tabot Procession',
    speaker: 'Media Ministry Team',
    duration: '18 mins',
    date: 'Jan 2026',
    thumbnailIcon: '▶',
    url: '#',
    badge: 'Feast Highlights',
  },
  {
    id: 'media-liturgy-guide',
    type: 'audio',
    title: 'Learning the Kidase (Divine Liturgy) Responses in Ge’ez & English',
    speaker: 'Sunday School Faculty',
    duration: '35 mins',
    date: 'May 2026',
    thumbnailIcon: '🎧',
    url: '#',
    badge: 'Tutorial',
  },
];

export const MEDIA_LEARNING_RESOURCES = [
  {
    id: 'learn-catechism',
    title: 'Orthodox Tewahedo Catechism & Creed',
    format: 'E-Book / PDF',
    language: 'English & Amharic',
    level: 'Foundational',
    summary: 'A clear guide to the Five Pillars of Mystery (አምስቱ አዕማደ ምሥጢር) and the ancient dogmatic foundations.',
    icon: '📖',
  },
  {
    id: 'learn-wudase-mariam',
    title: 'Wudase Mariam (ውዳሴ ማርያም - Praises of Mary)',
    format: 'Digital Text & Audio',
    language: 'Ge’ez, Amharic & English',
    level: 'Daily Devotional',
    summary: 'The seven daily prayers of praise dedicated to the Mother of God, formatted for family daily devotional reading.',
    icon: '📜',
  },
  {
    id: 'learn-geez-primer',
    title: 'Beginner’s Guide to Ge’ez Liturgical Language',
    format: 'Interactive Module',
    language: 'Ge’ez & English',
    level: 'All Ages',
    summary: 'Learn the sacred script, pronunciation of church chants, and common liturgical phrases used in Kidase.',
    icon: '🎓',
  },
  {
    id: 'learn-patristics',
    title: 'Lives of the Desert Fathers & Ethiopian Saints',
    format: 'Illustrated Articles',
    language: 'English & Amharic',
    level: 'Historical',
    summary: 'Biographies of Saint Tekle Haymanot, Saint Gebre Menfes Kidus, the Nine Saints, and Saint Yared the Musician.',
    icon: '🏛',
  },
];

export const CHURCH_SHOP_ITEMS = [
  {
    id: 'shop-1',
    name: 'Hand-Carved Ethiopian Olivewood Blessing Cross',
    price: 35.0,
    category: 'Sacred Crosses',
    description: 'Authentic hand-carved blessing cross crafted by Christian artisans in Ethiopia, perfect for home altar and prayer corners.',
    icon: '✠',
    inStock: true,
  },
  {
    id: 'shop-2',
    name: 'Wudase Mariam & Yezewter Tselot (Daily Prayer Book)',
    price: 24.0,
    category: 'Books',
    description: 'Gold-embossed hardbound edition containing daily prayers, praises of Mary, and the Anaphora with parallel Amharic & English text.',
    icon: '📖',
    inStock: true,
  },
  {
    id: 'shop-3',
    name: 'Authentic Ethiopian Frankincense & Coal Set (ጣን)',
    price: 18.0,
    category: 'Incense & Altar',
    description: 'Pure, aromatic virgin church frankincense harvested from the northern highlands with charcoal briquettes for home blessing.',
    icon: '🏺',
    inStock: true,
  },
  {
    id: 'shop-4',
    name: 'Sacred Icon of Holy Virgin Mary & Child Jesus',
    price: 45.0,
    category: 'Icons',
    description: 'High-quality framed replica of the beloved 17th-century Gondarine icon with archangels Michael and Gabriel.',
    icon: '🖼',
    inStock: true,
  },
  {
    id: 'shop-5',
    name: 'Traditional White Cotton Netela with Embroidered Tibeb',
    price: 55.0,
    category: 'Liturgical Garments',
    description: 'Handwoven soft Ethiopian cotton scarf (Netela) with golden and burgundy border patterns, worn for prayer and Sunday worship.',
    icon: '🧣',
    inStock: true,
  },
  {
    id: 'shop-6',
    name: 'Sunday School Mezmur Hymnal & Audio Companion',
    price: 20.0,
    category: 'Learning',
    description: 'Complete lyrical songbook with sheet notations and digital audio links for children and youth choirs.',
    icon: '🎵',
    inStock: true,
  },
];

export const DONATION_FUNDS = [
  {
    id: 'fund-general',
    title: 'General Church Operations & Liturgy',
    desc: 'Support ongoing sanctuary utility costs, communion supplies, altar maintenance, and clergy living expenses.',
    suggested: [25, 50, 100, 250],
    isDefault: true,
  },
  {
    id: 'fund-building',
    title: 'New Church Sanctuary Building Fund (የሕንፃ ግንባታ)',
    desc: 'Contribute directly toward our permanent cathedral capital campaign, land purchase, and architectural construction.',
    suggested: [100, 250, 500, 1000],
    highlight: true,
  },
  {
    id: 'fund-sunday-school',
    title: 'Sunday School & Youth Ministry Fund',
    desc: 'Fund educational supplies, youth spiritual retreats, choir robes, and classroom materials for our children.',
    suggested: [20, 50, 100, 150],
  },
  {
    id: 'fund-charity',
    title: 'Benevolence & Humanitarian Aid Outreach',
    desc: 'Emergency assistance for families in distress, hospital patient visits, and assistance for displaced persons.',
    suggested: [25, 50, 100, 200],
  },
];

export const TERMS_AND_CONDITIONS = {
  lastUpdated: 'September 2026',
  sections: [
    {
      title: '1. Acceptance of Parish Terms',
      content:
        'By accessing or registering with the Holy Name of Jesus & Saint Mary Ethiopian Orthodox Tewahedo Church (HNKMSM-EOTC-LV-NV) digital portal, you agree to abide by these Terms and the ecclesiastical bylaws of our parish.',
    },
    {
      title: '2. Respectful Use of Sacred Platforms',
      content:
        'Our online services, discussion forums, prayer walls, and digital libraries are holy spaces dedicated to spiritual edification. Users agree not to post profane, offensive, defamatory, or commercially solicitous content.',
    },
    {
      title: '3. Donations, Offerings & Purchases',
      content:
        'All tithes, voluntary donations, and store purchases made to support the church are considered tax-deductible charitable gifts according to Section 501(c)(3) guidelines of the Internal Revenue Code unless specified otherwise for tangible store items.',
    },
    {
      title: '4. Sacramental Bookings & Registrations',
      content:
        'Submitting a booking request for baptism, matrimony, or memorial prayer through the portal serves as an inquiry and requires formal pastoral interview and endorsement by the parish priest.',
    },
    {
      title: '5. Intellectual Property & Sacred Media',
      content:
        'All liturgical recordings, sermons, photographs of the holy altar, and educational texts remain the spiritual and intellectual property of HNKMSM-EOTC-LV-NV and may not be reproduced without ecclesiastical permission.',
    },
  ],
};

export const PRIVACY_POLICY = {
  lastUpdated: 'September 2026',
  sections: [
    {
      title: '1. Information We Collect',
      content:
        'We collect member registration details (names, baptismal names, household contact information, emails, and family member details) to maintain the sacramental register and pastoral records of our parish.',
    },
    {
      title: '2. How We Protect Your Sacred Information',
      content:
        'We never sell, rent, or trade parishioner personal data to third parties. All financial donation transactions are processed through encrypted, industry-standard PCI-compliant payment gateways.',
    },
    {
      title: '3. Confidentiality of Pastoral Consultations & Prayers',
      content:
        'Private prayer requests designated for the spiritual father or clergy are held in strictest confidence under sacred ecclesiastical pastoral secrecy.',
    },
    {
      title: '4. Communication Preferences',
      content:
        'Parishioners may manage their SMS or email newsletter preferences at any time to receive notices about holy feast days, fast schedules, or church emergencies.',
    },
    {
      title: '5. Cookies & Local Storage',
      content:
        'We use minimal local session cookies to keep you signed in to your member portal and remember your language preference (Amharic / English). You can clear these via your browser settings.',
    },
  ],
};
