import ProgressBar from '../ui/ProgressBar.jsx';

export default function StatCard({ icon, label, value, helper, trend, progress }) {
  return (
    <article className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div>
        <span>{label}</span>
        {trend ? (
          <div className="value-line">
            <strong>{value}</strong>
            <b className="up">{trend}</b>
          </div>
        ) : (
          <strong>{value}</strong>
        )}
        {helper && <small>{helper}</small>}
        {typeof progress === 'number' && <ProgressBar value={progress} />}
      </div>
    </article>
  );
}
