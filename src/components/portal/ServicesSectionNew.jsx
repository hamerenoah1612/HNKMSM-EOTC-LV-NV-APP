import React, { useState } from 'react';
import { SERVICES_CATALOG } from '../../data/landingPortalData.js';
import heroChurch from '../../assets/hero-church.png';
import { useLanguage } from '../../context/LanguageContext';

const CATEGORY_MAP = {
  All: { en: 'All', am: 'ሁሉም' },
  'Sacramental Worship': { en: 'Sacramental Worship', am: 'የቅዳሴ ስግደት' },
  'Prayer & Vigil': { en: 'Prayer & Vigil', am: 'ጸሎትና ትጋት' },
  Sacraments: { en: 'Sacraments', am: 'ምስጢራት' },
  'Pastoral Care': { en: 'Pastoral Care', am: 'የካህናት አገልግሎት' },
  Memorial: { en: 'Memorial', am: 'ፍትሐትና መታሰቢያ' },
};

export default function ServicesSectionNew({ onBookService, onSignIn }) {
  const [selectedService, setSelectedService] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const { language } = useLanguage();
  const isAm = language === 'am';

  const categories = ['All', 'Sacramental Worship', 'Prayer & Vigil', 'Sacraments', 'Pastoral Care', 'Memorial'];

  const filtered =
    activeCategory === 'All'
      ? SERVICES_CATALOG
      : SERVICES_CATALOG.filter((s) => s.category === activeCategory);

  return (
    <section className="footer-objectives objectives-services-theme" id="services" aria-labelledby="services-heading">
      <img className="objectives-art" src={heroChurch} alt="" aria-hidden="true" />

      <div className="container objectives-inner">
        <div className="objectives-copy">
          <p className="eyebrow" style={{ color: '#7f5539', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.76rem', fontWeight: 700 }}>
            {isAm ? 'ቅዱሳት ምስጢራትና ቅዳሴ' : 'Holy Sacraments & Liturgy'}
          </p>
          <h2 id="services-heading">
            {isAm ? 'የሰበካው ምስጢራተ ቤተክርስቲያንና የቅዳሴ አገልግሎቶች' : 'Parish Sacramental & Liturgical Services'}
          </h2>
          <p>
            {isAm
              ? 'ከሳምንታዊ ቅዳሴ እስከ ካህናት ምክርና ጸሎት ድረስ ያለውን የኦርቶዶክሳዊት ቤተክርስቲያናችንን ቅዱሳት አገልግሎቶች ይሳተፉ።'
              : 'Experience the fullness of ancient Orthodox sacramental life, from weekly Divine Liturgy (Kidase) to pastoral care.'}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="objectives-filter-row">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`obj-filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {CATEGORY_MAP[cat]?.[language] || cat}
            </button>
          ))}
        </div>

        {/* Objectives-style tile grid */}
        <div className="objectives-tile-grid">
          {filtered.map((service) => (
            <div
              key={service.id}
              className="objectives-tile-card"
              onClick={() => setSelectedService(service)}
              role="button"
              tabIndex={0}
            >
              <span className="glyph" aria-hidden="true">
                ✝
              </span>
              <strong>{service.title}</strong>
              <small className="tile-category-tag">
                {service.badge} • {CATEGORY_MAP[service.category]?.[language] || service.category}
              </small>
              <p className="tile-summary-text">{service.summary}</p>
              <span className="tile-click-action">{isAm ? 'ዝርዝር ይመልከቱ →' : 'View & Book →'}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="portal-modal-backdrop" onClick={() => setSelectedService(null)}>
          <div className="portal-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="portal-modal-head">
              <div>
                <span className="service-badge">{selectedService.badge}</span>
                <h3>{selectedService.title}</h3>
              </div>
              <button
                type="button"
                className="portal-modal-close"
                onClick={() => setSelectedService(null)}
              >
                ✕
              </button>
            </div>
            <div className="portal-modal-body">
              <p className="modal-lead">{selectedService.summary}</p>
              <div className="modal-info-list">
                <div>
                  <strong>{isAm ? 'ምድብ:' : 'Category:'}</strong> <span>{CATEGORY_MAP[selectedService.category]?.[language] || selectedService.category}</span>
                </div>
                <div>
                  <strong>{isAm ? 'ሰዓትና ቀን:' : 'Schedule & Hours:'}</strong> <span>{selectedService.schedule}</span>
                </div>
                <div>
                  <strong>{isAm ? 'ቦታ:' : 'Location:'}</strong> <span>{selectedService.location}</span>
                </div>
              </div>
              <div className="modal-note-box">
                <p>
                  <em>{isAm ? 'ማሳሰቢያ:' : 'Note:'}</em>{' '}
                  {isAm
                    ? 'ለቅዱሳት ምስጢራት (ጥምቀት፣ ተክሊል፣ ንስሐ) እባክዎ ከሁለት ሳምንት በፊት ከደብሩ ካህናት ጋር ቀጠሮ ይያዙ።'
                    : 'For Holy Sacraments (Baptism, Matrimony, Confession), please schedule with the Parish Priest at least two weeks in advance.'}
                </p>
              </div>
            </div>
            <div className="portal-modal-foot">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setSelectedService(null)}
              >
                {isAm ? 'ዝጋ' : 'Close'}
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setSelectedService(null);
                  if (onBookService) onBookService(selectedService);
                  else if (onSignIn) onSignIn('member');
                }}
              >
                {isAm ? 'ይቀጥሉ' : 'Proceed with Inquiry'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
