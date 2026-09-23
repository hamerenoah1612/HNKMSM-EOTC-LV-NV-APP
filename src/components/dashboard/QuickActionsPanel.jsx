import Panel from '../ui/Panel.jsx';

export default function QuickActionsPanel({ actions }) {
  return (
    <Panel icon="ϟ" title="Quick Actions" actionLabel={null} span={3} className="actions-panel">
      <div className="action-grid">
        {actions.map((action) => (
          <a key={action.id} href="#" onClick={(e) => e.preventDefault()}>
            {action.icon}
            <span>{action.label}</span>
          </a>
        ))}
      </div>
    </Panel>
  );
}
