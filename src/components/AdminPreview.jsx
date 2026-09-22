import { ADMIN_ROLE } from '../data/content.js';
import adminPhoto from '../assets/admin-photo.jpg';
import RoleCard from './RoleCard.jsx';

export default function AdminPreview() {
  return <RoleCard variant="admin" image={adminPhoto} {...ADMIN_ROLE} />;
}
