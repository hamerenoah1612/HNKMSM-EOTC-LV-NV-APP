import React, { useState } from 'react';
import { UPCOMING_EVENTS } from '../../data/landingPortalData.js';
import heroChurch from '../../assets/hero-church.png';

export default function EventsSectionObjectives({ onSignIn }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [rsvpDone, setRsvpDone] = useState(false);

  return (
    <section className="footer-objectives section-band" id="events" aria-labelledby="events-heading">
      <img className="objectives-art" src={heroChurch} alt="" aria-hidden="true" />

      <div className="container objectives-inner">
        <div className="objectives-copy">
          <p className="eyebrow" style={{ margin: '0 0 4px' }}>Parish Calendar &amp; Gatherings</p>
          <h2 id="events-heading">Feasts, Retreats &amp; Gatherings</h2>
          <p>Upcoming major holy feasts, youth seminars, and parish celebrations.</p>
        </div>

        <div className="objectives-grid">
          {UPCOMING_EVENTS.map((event) => (
            <div
              key={event.id}
              onClick={() => {
                setSelectedEvent(event);
                setRsvpDone(false);
              }}
              style={{ cursor: 'pointer' }}
              title="Click to view details and RSVP"
            >
              <span className="glyph" aria-hidden="true" style={{ fontSize: '1.4rem' }}>
                {event.id.includes('timket') ? '🕊' : event.id.includes('mariam') ? '👑' : event.id.includes('meskel') ? '✝' : '🎓'}
              </span>
              <strong>{event.title}</strong>
              <small>{event.date} • {event.location}</small>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="btn btn-primary objectives-more"
          onClick={() => {
            setSelectedEvent(UPCOMING_EVENTS[0]);
            setRsvpDone(false);
          }}
        >
          View Full Event Details <span aria-hidden="true">→</span>
        </button>
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <div className="portal-modal-backdrop" onClick={() => setSelectedEvent(null)}>
          <div className="portal-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="portal-modal-head">
              <div>
                <span className="event-tag">{selectedEvent.tag}</span>
                <h3 style={{ marginTop: '4px' }}>{selectedEvent.title}</h3>
              </div>
              <button
                type="button"
                className="portal-modal-close"
                onClick={() => setSelectedEvent(null)}
              >
                ✕
              </button>
            </div>
            <div className="portal-modal-body">
              <p className="modal-lead">{selectedEvent.summary}</p>
              <div className="modal-info-list">
                <div>
                  <strong>Date:</strong> <span>{selectedEvent.date}</span>
                </div>
                <div>
                  <strong>Time:</strong> <span>{selectedEvent.time}</span>
                </div>
                <div>
                  <strong>Location:</strong> <span>{selectedEvent.location}</span>
                </div>
                <div>
                  <strong>Category:</strong> <span>{selectedEvent.category}</span>
                </div>
              </div>

              {rsvpDone && (
                <div className="success-alert-box" style={{ marginTop: '12px' }}>
                  ✓ Your attendance RSVP is confirmed! We look forward to seeing you.
                </div>
              )}
            </div>
            <div className="portal-modal-foot">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setSelectedEvent(null)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setRsvpDone(true)}
              >
                Confirm Attendance (RSVP)
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
