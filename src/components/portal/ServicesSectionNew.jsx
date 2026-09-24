import React, { useState } from 'react';
import { SERVICES_CATALOG } from '../../data/landingPortalData.js';
import heroChurch from '../../assets/hero-church.png';

export default function ServicesSectionNew({ onBookService, onSignIn }) {
  const [selectedService, setSelectedService] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

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
            Holy Sacraments &amp; Liturgy
          </p>
          <h2 id="services-heading">Parish Sacramental &amp; Liturgical Services</h2>
          <p>
            Experience the fullness of ancient Orthodox sacramental life, from weekly Divine Liturgy (Kidase) to pastoral care.
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
              {cat}
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
              <small className="tile-category-tag">{service.badge} • {service.category}</small>
              <p className="tile-summary-text">{service.summary}</p>
              <span className="tile-click-action">View &amp; Book →</span>
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
                  <strong>Category:</strong> <span>{selectedService.category}</span>
                </div>
                <div>
                  <strong>Schedule &amp; Hours:</strong> <span>{selectedService.schedule}</span>
                </div>
                <div>
                  <strong>Location:</strong> <span>{selectedService.location}</span>
                </div>
              </div>
              <div className="modal-note-box">
                <p>
                  <em>Note:</em> For Holy Sacraments (Baptism, Matrimony, Confession), please schedule with the Parish Priest at least two weeks in advance.
                </p>
              </div>
            </div>
            <div className="portal-modal-foot">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setSelectedService(null)}
              >
                Close
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
                Proceed with Inquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
