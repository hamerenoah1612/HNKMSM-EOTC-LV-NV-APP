import Panel from '../ui/Panel.jsx';
import Tag from '../ui/Tag.jsx';

function ApprovalRow({ icon, title, subtitle, time, tag, tagLabel }) {
  return (
    <div>
      <span className="round sm">{icon}</span>
      <p>
        <strong>{title}</strong>
        <small>{subtitle}</small>
      </p>
      <time>{time}</time>
      <Tag tone={tag} label={tagLabel} />
    </div>
  );
}

export default function PendingApprovalsPanel({ approvals }) {
  return (
    <Panel title="📋 Pending Approvals">
      <div className="rows approvals">
        {approvals.map((approval) => (
          <ApprovalRow key={approval.id} {...approval} />
        ))}
      </div>
    </Panel>
  );
}
