import { BRAND, PORTAL_URL, openPortal } from '../data/content.js';
import ctaChurch from '../assets/cta-church.jpg';
import { useLanguage } from '../context/LanguageContext';

export default function CtaBanner({ onSignIn }) {
  const { language } = useLanguage();
  const isAm = language === 'am';

  const handleClick = (e) => {
    if (onSignIn) {
      e.preventDefault();
      onSignIn('member');
    } else {
      openPortal(e);
    }
  };

  return (
    <section className="cta-section" id="signin">
      <div className="container cta-banner">
        <img className="cta-art" src={ctaChurch} alt="" aria-hidden="true" />
        <div className="cta-copy">
          <h2>{isAm ? 'ለብርሃንና ለተስፋ የተሞላ ነገ አብረን እንቁም' : 'Together for a Stronger Tomorrow'}</h2>
          <p>
            {isAm
              ? 'የደብረ ምሕረት ቅድስት ማርያም የኢ.ኦ.ተ.ቤ አባል ይሁኑ፤ ንቁ፣ መንፈሳዊና የተሳሰረ ማኅበረሰብ አካል ይሁኑ።'
              : `Join ${BRAND.name} and be part of a vibrant, faithful and connected community.`}
          </p>
        </div>
        <div className="cta-action">
          <a
            className="btn btn-light"
            href="#signin"
            onClick={handleClick}
          >
            {isAm ? 'ዛሬውኑ ይቀላቀሉ →' : 'Get Started Today →'}
          </a>
          <p className="cta-tagline">{isAm ? 'እምነት • ማኅበር • አገልግሎት • አብረን' : BRAND.tagline}</p>
        </div>
      </div>
    </section>
  );
}
