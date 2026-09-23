import Panel from '../ui/Panel.jsx';

function EventRow({ month, day, title, location, time, attendees }) {
  return (
    <div className="event-row">
      <div className="date-box">
        <b>{month}</b>
        <strong>{day}</strong>
      </div>
      <div>
        <strong>{title}</strong>
        <small>⌖ {location}</small>
      </div>
      <span className="event-meta">
        ◷ {time}　👥 {attendees}
      </span>
    </div>
  );
}

export default function EventsPanel({ events }) {
  return (
    <Panel icon="▣" title="Upcoming Events" span={4} className="events-panel">
      <div className="event-list">
        {events.map((event) => (
          <EventRow key={event.id} {...event} />
        ))}
      </div>
    </Panel>
  );
}
