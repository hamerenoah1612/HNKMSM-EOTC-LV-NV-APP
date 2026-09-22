import AdminPreview from './AdminPreview.jsx';
import MemberPreview from './MemberPreview.jsx';

export default function ServicesSection({ onSignIn }) {
  return (
    <section className="section section-soft" id="services">
      <div className="container role-grid">
        <AdminPreview onSignIn={onSignIn} />
        <MemberPreview onSignIn={onSignIn} />
      </div>
    </section>
  );
}
