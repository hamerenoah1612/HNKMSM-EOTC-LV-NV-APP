import Panel from '../ui/Panel.jsx';

export default function RolesPanel({ roles }) {
  return (
    <Panel title="🛡 Users &amp; Role Management" actionLabel="View All →">
      <div className="roles">
        {roles.map((role) => (
          <div key={role.id}>
            <span>{role.icon}</span>
            <small>{role.label}</small>
            <strong>{role.count}</strong>
          </div>
        ))}
      </div>
    </Panel>
  );
}
