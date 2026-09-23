import Panel from '../ui/Panel.jsx';

export default function RecentActivityPanel({ activity }) {
  return (
    <Panel icon="▤" title="Recent Activity" span={3} className="recent-panel">
      <div className="activity-list">
        {activity.map((item) => (
          <p key={item.id}>
            <span>{item.icon}</span>
            {item.text}
            <time>{item.time}</time>
          </p>
        ))}
      </div>
    </Panel>
  );
}
