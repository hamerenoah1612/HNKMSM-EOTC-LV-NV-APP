export default function KpiCard({ icon, label, value, trend, tone, helper }) {
  return (
    <article>
      <span className="round">{icon}</span>
      <div>
        <small>{label}</small>
        <strong>{value}</strong>
        <em className={tone}>{trend}</em>
        <i>{helper}</i>
      </div>
    </article>
  );
}
