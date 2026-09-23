// status: 'approved' | 'review' | 'pending' | 'scheduled'
export default function StatusBadge({ status, label }) {
  return <b className={`status ${status}`}>{label}</b>;
}
