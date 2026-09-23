import Panel from '../ui/Panel.jsx';
import ProgressBar from '../ui/ProgressBar.jsx';

export default function ProfilePanel({ user }) {
  return (
    <Panel icon="●" title="My Profile &amp; Family" actionLabel="Manage →" span={3} className="profile-panel">
      <div className="profile-summary">
        <div className="avatar large">{user.initials}</div>
        <div>
          <strong>{user.name}</strong>
          <small>Member since {user.memberSince}</small>
          <ProgressBar value={user.profileComplete} tone="green" />
          <span>{user.profileComplete}% Profile Complete</span>
        </div>
      </div>
      <div className="profile-links">
        <a href="#" onClick={(e) => e.preventDefault()}>
          👥<span>Household<b>{user.household}</b></span>
        </a>
        <a href="#" onClick={(e) => e.preventDefault()}>
          ▣<span>Membership<b>{user.membershipStatus}</b></span>
        </a>
        <a href="#" onClick={(e) => e.preventDefault()}>
          ●<span>View Profile<b>Edit Information</b></span>
        </a>
      </div>
    </Panel>
  );
}
