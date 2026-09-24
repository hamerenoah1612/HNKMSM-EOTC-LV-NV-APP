import { Fragment } from 'react';
import { VALUES, PORTAL_URL, openPortal } from '../data/content.js';
import HeroVisual from './HeroVisual.jsx';
import heroChurch from '../assets/hero-church.png';
import heroTrees from '../assets/hero-trees.jpg';
import { useLanguage } from '../context/LanguageContext';

function ValueItem({ icon, label, labelAm, isAm }) {
  const displayLines = isAm && labelAm ? labelAm : label;
  return (
    <div className="value-item">
      <span aria-hidden="true">{icon}</span>
      <small>
        {displayLines.map((line, index) => (
          <Fragment key={line}>
            {index > 0 && <br />}
            {line}
          </Fragment>
        ))}
      </small>
    </div>
  );
}

export default function Hero({ onSignIn }) {
  const { language, t } = useLanguage();
  const isAm = language === 'am';

  const handleGetStarted = (e) => {
    if (onSignIn) {
      e.preventDefault();
      onSignIn('member');
    } else {
      openPortal(e);
    }
  };

  const AM_VALUES = [
    { icon: '✝', labelAm: ['ሁሉ ለእግዚአብሔር', 'ክብር'] },
    { icon: '🤝', labelAm: ['አብረን', 'እናገልግል'] },
    { icon: '🌱', labelAm: ['በእምነት', 'ማደግ'] },
    { icon: '🏛', labelAm: ['ነገን', 'ማነፅ'] },
  ];

  return (
    <section className="hero" id="home">
      {/* Background imagery from the design mockup */}
      <img className="hero-art hero-art--trees" src={heroTrees} alt="" aria-hidden="true" />
      <div className="container hero-art-layer" aria-hidden="true">
        <img className="hero-art hero-art--church" src={heroChurch} alt="" />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{isAm ? 'የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን' : 'Ethiopian Orthodox Tewahedo Church'}</p>
          <h1>
            {isAm
              ? 'የእምነት፣ የቀደመ ታሪክና የማኅበረሰብ ቅዱስ መሸሸጊያ'
              : 'One Digital Home for Church, Community, and Ministry'}
          </h1>
          <p className="hero-lede">
            {isAm
              ? 'ወደ ኢየሱስ ስመ ጥሩ እና ቅድስት ማርያም የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን ላስ ቬጋስ እንኳን በደህና መጡ። አባልነትን፣ ቅዳሴን፣ ምጽዋትን፣ በዓላትንና መልቲሚዲያን ለአንዲት ቅድስት ቤተክርስቲያን ያስተባብራል።'
              : 'HNKMSM-EOTC-LV-NV unifies membership, services, giving, events, learning, media, and communication for a stronger, more connected faith community.'}
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href="#signin"
              onClick={handleGetStarted}
            >
              {isAm ? 'ይግቡና ይጀምሩ' : 'Get Started'} <span aria-hidden="true">→</span>
            </a>
            <a className="btn btn-secondary" href="#features">
              {isAm ? 'አገልግሎቶችን ይመልከቱ' : 'Explore Features'}
            </a>
          </div>

          <div className="value-row" aria-label="Platform values">
            {VALUES.map((value, idx) => (
              <ValueItem
                key={value.label.join(' ')}
                {...value}
                labelAm={AM_VALUES[idx]?.labelAm}
                isAm={isAm}
              />
            ))}
          </div>

          <blockquote>
            {isAm
              ? '“እስመ ኀበ ተጋብኡ ክልኤ ወሠለስቱ በስምየ፤ ህየ ሀሎኩ በማእከሎሙ።”'
              : '“For where two or three gather in my name, there am I with them.”'}
            <cite>{isAm ? 'ማቴዎስ ፲፰:፳' : 'Matthew 18:20'}</cite>
          </blockquote>
        </div>

        <HeroVisual onSignIn={onSignIn} />
      </div>
    </section>
  );
}
