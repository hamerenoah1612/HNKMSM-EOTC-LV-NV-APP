import React, { useState } from 'react';
import { UPCOMING_EVENTS } from '../../data/landingPortalData.js';
import heroChurch from '../../assets/hero-church.png';

export default function EventsSection({ onRegisterEvent }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registeredEvents, setRegisteredEvents] = useState({});

  const handleRegister = (event) => {
    setRegisteredEvents((prev) => ({ ...prev, [event.id]: true }));
    if (onRegisterEvent) onRegisterEvent(event);
  };

  return (
    <section className="footer-objectives objectives-events-theme" id="events" aria-labelledby="events-heading">
      <img className="objectives-art" src={heroChurch} alt="" aria-hidden="true" />

      <div className="container objectives-inner">
        <div className="objectives-copy">
          <p className="eyebrow" style={{ color: '#8c502b', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.76rem', fontWeight: 700 }}>
            Parish Calendar &amp; Feasts
          </p>
          <h2 id="events-heading">Upcoming Feasts &amp; Gatherings</h2>
          <p>
            Join our liturgical feasts, spiritual seminars, youth fellowships, and charity drives.
          </p>
        </div>

        {/* Objectives-style tile grid */}
        <div className="objectives-tile-grid">
          {UPCOMING_EVENTS.map((event) => {
            const isRegistered = !!registeredEvents[event.id];
            return (
              <div
                key={event.id}
                className="objectives-tile-card"
                onClick={() => setSelectedEvent(event)}
                role="button"
                tabIndex={0}
              >
                <span className="glyph" aria-hidden="true">
                  🗓
                </span>
                <strong>{event.title}</strong>
                <small className="tile-category-tag">{event.tag} • {event.date}</small>
                <p className="tile-summary-text">{event.summary}</p>
                <span className="tile-click-action">
                  {isRegistered ? '✓ RSVP Confirmed' : 'Event Details & RSVP →'}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="portal-modal-backdrop" onClick={() => setSelectedEvent(null)}>
          <div className="portal-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="portal-modal-head">
              <div>
                <span className="event-tag">{selectedEvent.tag}</span>
                <h3>{selectedEvent.title}</h3>
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
              <div className="modal-note-box">
                <p>
                  All parishioners, family members, youth, and respectful community guests are warmly welcome to participate.
                </p>
              </div>
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
                onClick={() => {
                  handleRegister(selectedEvent);
                  setSelectedEvent(null);
                }}
              >
                {registeredEvents[selectedEvent.id] ? 'RSVP Updated' : 'Confirm Attendance'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
