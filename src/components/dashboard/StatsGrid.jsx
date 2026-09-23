import StatCard from './StatCard.jsx';

export default function StatsGrid({ stats }) {
  return (
    <section className="stats-grid" aria-label="Member summary">
      {stats.map((stat) => (
        <StatCard key={stat.id} {...stat} />
      ))}
    </section>
  );
}
