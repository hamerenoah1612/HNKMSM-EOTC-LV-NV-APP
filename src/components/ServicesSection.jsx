import AdminPreview from './AdminPreview.jsx';
import MemberPreview from './MemberPreview.jsx';

export default function ServicesSection() {
  return (
    <section className="section section-soft" id="services">
      <div className="container role-grid">
        <AdminPreview />
        <MemberPreview />
      </div>
    </section>
  );
}
