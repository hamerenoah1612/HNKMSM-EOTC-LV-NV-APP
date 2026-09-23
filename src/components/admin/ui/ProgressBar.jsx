export default function ProgressBar({ value }) {
  return (
    <div className="progress">
      <i style={{ width: `${value}%` }} />
    </div>
  );
}
