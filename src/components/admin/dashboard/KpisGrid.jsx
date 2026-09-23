import KpiCard from './KpiCard.jsx';

export default function KpisGrid({ kpis }) {
  return (
    <section className="kpis">
      {kpis.map((kpi) => (
        <KpiCard key={kpi.id} {...kpi} />
      ))}
    </section>
  );
}
