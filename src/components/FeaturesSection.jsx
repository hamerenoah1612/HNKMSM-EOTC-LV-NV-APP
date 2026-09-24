import { FEATURES } from '../data/content.js';
import FeatureCard from './FeatureCard.jsx';
import { useLanguage } from '../context/LanguageContext';

const FEATURES_AM = [
  { icon: '👥', title: 'የአባላት አስተዳደር', description: 'የምዕመናን፣ ቤተሰቦችና ማኅበራት ምዝገባና ተሳትፎ በቀላሉ ማስተዳደር።' },
  { icon: '⛪', title: 'የቤተክርስቲያን አገልግሎቶች', description: 'የቅዳሴ፣ ጥምቀት፣ ጋብቻና ሌሎች ምስጢራተ ቤተክርስቲያን ማመልከቻዎች።' },
  { icon: '🙏', title: 'የጸሎት ጥያቄዎች', description: 'የጸሎት ጥያቄዎችን ያቅርቡ፤ ከአጠቃላይ ማኅበሩ ጋር በጸሎት ይተባበሩ።' },
  { icon: '🗓', title: 'መርሐ ግብሮችና በዓላት', description: 'የክብረ በዓላት፣ የጾምና የስብሰባ መርሐ ግብሮችን ይመልከቱና ይሳተፉ።' },
  { icon: '📖', title: 'ትምህርትና ሰንበት ት/ቤት', description: 'የሰንበት ት/ቤት፣ ሃይማኖታዊ ትምህርትና የተማሪዎች ምዝገባ።' },
  { icon: '▶', title: 'መልቲሚዲያ ቤተ መጻሕፍት', description: 'ስብከቶች፣ ያሬዳዊ ዜማዎች፣ የቅዳሴ ቀጥታ ስርጭትና መጻሕፍት።' },
  { icon: '♥', title: 'አስራትና ምጽዋት', description: 'አስራት፣ ስጦታና ለሕንፃ ግንባታ የሚደረጉ አስተዋጽኦዎችን በደህና ይክፈሉ።' },
  { icon: '🛒', title: 'የቤተክርስቲያን ሱቅ', description: 'ቅዱሳት መጻሕፍትን፣ ስዕላተ ቅዱሳንንና ንዋየ ቅድሳትን ይግዙ።' },
];

export default function FeaturesSection() {
  const { language } = useLanguage();
  const isAm = language === 'am';
  const displayFeatures = isAm ? FEATURES_AM : FEATURES;

  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">{isAm ? 'ባህሪያትና አገልግሎቶች' : 'Our Features'}</p>
          <h2>{isAm ? 'የቤተክርስቲያናችን ማኅበረሰብ የሚያስፈልገው ሁሉ' : 'Everything Your Church Community Needs'}</h2>
          <p>
            {isAm
              ? 'ለኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን የተዘጋጀ ሁለንተናዊ ዲጂታል መድረክ።'
              : 'A comprehensive platform designed for the Ethiopian Orthodox Tewahedo Church.'}
          </p>
        </div>

        <div className="feature-grid">
          {displayFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
