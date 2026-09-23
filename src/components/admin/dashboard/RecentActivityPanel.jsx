import Panel from '../ui/Panel.jsx';

function ActivityRow({ initials, name, text, time }) {
  return (
    <div>
      <span className="avatar mini">{initials}</span>
      <p>
        <strong>{name}</strong> {text}
      </p>
      <time>{time}</time>
    </div>
  );
}

export default function RecentActivityPanel({ activity }) {
  return (
    <Panel title="📋 Recent Activity">
      <div className="rows activity">
        {activity.map((item) => (
          <ActivityRow key={item.id} {...item} />
        ))}
      </div>
    </Panel>
  );
}
