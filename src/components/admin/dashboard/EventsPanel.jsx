import Panel from '../ui/Panel.jsx';

function EventRow({ month, day, title, location, time }) {
  return (
    <div>
      <span className="date">
        {month}
        <b>{day}</b>
      </span>
      <p>
        <strong>{title}</strong>
        <small>{location}</small>
      </p>
      <time>{time}</time>
    </div>
  );
}

export default function EventsPanel({ events }) {
  return (
    <Panel title="📅 Upcoming Events">
      <div className="rows events">
        {events.map((event) => (
          <EventRow key={event.id} {...event} />
        ))}
      </div>
    </Panel>
  );
}
