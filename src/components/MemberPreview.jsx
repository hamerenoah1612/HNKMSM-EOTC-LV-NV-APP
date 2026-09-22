import { MEMBER_ROLE } from '../data/content.js';
import memberPhoto from '../assets/member-photo.jpg';
import RoleCard from './RoleCard.jsx';

export default function MemberPreview({ onSignIn }) {
  return <RoleCard variant="member" image={memberPhoto} {...MEMBER_ROLE} onSignIn={onSignIn} />;
}
