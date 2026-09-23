import Panel from '../ui/Panel.jsx';

function HealthRow({ icon, label, status, tone, helper }) {
  return (
    <div>
      <span>{icon}</span>
      <p>
        <strong>{label}</strong>
      </p>
      <b className={tone}>{status}</b>
      <small>{helper}</small>
    </div>
  );
}

export default function SystemHealthPanel({ items }) {
  return (
    <Panel title="⚙ System Health" actionLabel={null}>
      <div className="rows health">
        {items.map((item) => (
          <HealthRow key={item.id} {...item} />
        ))}
      </div>
    </Panel>
  );
}
