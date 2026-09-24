import Panel from '../ui/Panel.jsx';
import ProgressBar from '../ui/ProgressBar.jsx';
import Icon from '../Icon.jsx';
import memberPhoto from '../../assets/member-photo.jpg';

export default function ProfilePanel({ user }) {
  const userPhoto = user?.avatar || user?.image || memberPhoto;

  return (
    <Panel icon="●" title="My Profile &amp; Family" actionLabel="Manage →" span={3} className="profile-panel">
      <div className="profile-summary">
        <div
          className="avatar large"
          style={{
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {userPhoto ? (
            <img
              src={userPhoto}
              alt={user?.name || 'Member'}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <Icon name="user" size={32} />
          )}
        </div>
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
