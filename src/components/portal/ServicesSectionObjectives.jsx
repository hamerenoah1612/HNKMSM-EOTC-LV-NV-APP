import React, { useState } from 'react';
import { SERVICES_CATALOG } from '../../data/landingPortalData.js';
import heroChurch from '../../assets/hero-church.png';

export default function ServicesSectionObjectives({ onSignIn }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="footer-objectives section-band" id="services" aria-labelledby="services-heading">
      <img className="objectives-art" src={heroChurch} alt="" aria-hidden="true" />

      <div className="container objectives-inner">
        <div className="objectives-copy">
          <p className="eyebrow" style={{ margin: '0 0 4px' }}>Sacramental &amp; Pastoral Ministry</p>
          <h2 id="services-heading">Church Liturgical Services</h2>
          <p>Divine Liturgy (Kidase), Vespers, Holy Sacraments, Confession, and Memorial prayers.</p>
        </div>

        <div className="objectives-grid">
          {SERVICES_CATALOG.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              style={{ cursor: 'pointer' }}
              title="Click to view schedule & details"
            >
              <span className="glyph" aria-hidden="true" style={{ fontSize: '1.4rem' }}>
                {service.id === 'divine-liturgy' ? '⛪' : service.id === 'holy-baptism' ? '🕊' : service.id === 'holy-matrimony' ? '💍' : service.id === 'pastoral-care' ? '✝' : service.id === 'saturday-vespers' ? '🕯' : '🙏'}
              </span>
              <strong>{service.title}</strong>
              <small>{service.schedule}</small>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button
            type="button"
            className="btn btn-primary objectives-more"
            onClick={() => setSelectedService(SERVICES_CATALOG[0])}
          >
            Explore Services Timetable <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div className="portal-modal-backdrop" onClick={() => setSelectedService(null)}>
          <div className="portal-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="portal-modal-head">
              <div>
                <span className="service-badge">{selectedService.badge}</span>
                <h3 style={{ marginTop: '4px' }}>{selectedService.title}</h3>
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
                  <strong>Schedule:</strong> <span>{selectedService.schedule}</span>
                </div>
                <div>
                  <strong>Location:</strong> <span>{selectedService.location}</span>
                </div>
                <div>
                  <strong>Category:</strong> <span>{selectedService.category}</span>
                </div>
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
                  if (onSignIn) onSignIn('member');
                }}
              >
                Book Service in Member Portal
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
