import Panel from '../ui/Panel.jsx';
import StatusBadge from '../ui/StatusBadge.jsx';

function ServiceRow({ icon, title, subtitle, status, statusLabel, date }) {
  return (
    <div className="service-row">
      <span className="round-icon">{icon}</span>
      <div>
        <strong>{title}</strong>
        <small>{subtitle}</small>
      </div>
      <StatusBadge status={status} label={statusLabel} />
      <time>{date}</time>
    </div>
  );
}

export default function ServicesPanel({ services }) {
  return (
    <Panel icon="✝" title="My Services" span={4} className="services-panel">
      <div className="service-list">
        {services.map((service) => (
          <ServiceRow key={service.id} {...service} />
        ))}
      </div>
    </Panel>
  );
}
