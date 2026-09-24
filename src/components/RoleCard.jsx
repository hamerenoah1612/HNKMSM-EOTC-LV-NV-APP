import Icon from './Icon.jsx';
import { openPortal } from '../data/content.js';
import { useLanguage } from '../context/LanguageContext';

/**
 * Shared layout for the Admin / Member dashboard cards.
 * `image` is the photo from the design mockup, shown full-height on the left
 * and faded into the card by the CSS.
 */
export default function RoleCard({ variant, image, icon, title, subtitle, items, cta, onSignIn }) {
  const { language } = useLanguage();
  const isAm = language === 'am';

  const handleClick = (e) => {
    if (onSignIn) {
      e.preventDefault();
      onSignIn(variant === 'admin' ? 'admin' : 'member');
    } else {
      openPortal(e);
    }
  };

  const adminItemsAm = [
    'የሰበካ ጉባኤና የአባላት ምዝገባ አያያዝ',
    'የቅዳሴና የክብረ በዓላት መርሐ ግብር ዕቅድ',
    'የፋይናንስ፣ አስራትና ምጽዋት ሪፖርቶች',
    'የመልቲሚዲያ፣ ማኅሌትና ዜና ስርጭት ቁጥጥር',
    'የሰንበት ት/ቤትና ካቴድራል ፕሮጀክት ክትትል',
  ];

  const memberItemsAm = [
    'የቤተሰብ መረጃና የአባልነት ሁኔታ ማደስ',
    'የቅዳሴ ማስቀደስና የጸሎት ጥያቄዎች ማቅረብ',
    'የአስራት፣ ስጦታና ምጽዋት አስተዋጽኦ ታሪክ',
    'የሰንበት ት/ቤት የልጆች ምዝገባ',
    'የቀጥታ ስርጭት ቅዳሴና ያሬዳዊ መዝሙራት ቤተ-መጻሕፍት',
  ];

  const displayTitle = isAm
    ? variant === 'admin'
      ? 'የአስተዳዳሪ ዳሽቦርድ'
      : 'የአባል ዳሽቦርድ'
    : title;

  const displaySub = isAm
    ? variant === 'admin'
      ? 'ለቤተክርስቲያን አስተዳዳሪዎችና የሰበካ ጉባኤ አመራሮች'
      : 'ከቤተክርስቲያንዎ ጋር ይገናኙ እና ይሳተፉ'
    : subtitle;

  const displayItems = isAm
    ? variant === 'admin'
      ? adminItemsAm
      : memberItemsAm
    : items;

  const displayCta = isAm
    ? variant === 'admin'
      ? 'የአስተዳዳሪ ዳሽቦርድ ይክፈቱ →'
      : 'የአባል ዳሽቦርድ ይክፈቱ →'
    : cta.label;

  return (
    <article className={`role-card role-card--${variant}`}>
      <div
        className={`role-media ${variant}-image`}
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      <div className="role-copy">
        <div className="role-head">
          <Icon name={icon} size={26} className="role-icon" />
          <h3>{displayTitle}</h3>
        </div>
        <p className="role-sub">{displaySub}</p>
        <ul>
          {displayItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a
          className="btn btn-primary"
          href="#signin"
          onClick={handleClick}
        >
          {displayCta}
        </a>
      </div>
    </article>
  );
}
