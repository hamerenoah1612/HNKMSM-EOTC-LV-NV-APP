export default function ProgressBar({ value, tone }) {
  const className = tone ? `progress ${tone}` : 'progress';
  return (
    <div className={className}>
      <i style={{ width: `${value}%` }} />
    </div>
  );
}
