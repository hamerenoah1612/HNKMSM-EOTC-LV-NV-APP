import Panel from '../ui/Panel.jsx';

function MonthBars({ month, tithes, offerings, donations }) {
  return (
    <div>
      <i style={{ height: `${tithes}%` }} />
      <i style={{ height: `${offerings}%` }} />
      <i style={{ height: `${donations}%` }} />
      <b>{month}</b>
    </div>
  );
}

export default function DonationsChartPanel({ data }) {
  return (
    <Panel
      title="📊 Donations, Tithes & Offerings"
      className="chart-card"
      headExtra={<button type="button">{data.period}⌄</button>}
    >
      <div className="chart-wrap">
        <div className="ylabel">
          {data.yAxisLabels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
        <div className="chart-bars">
          {data.months.map((m) => (
            <MonthBars key={m.month} {...m} />
          ))}
        </div>
      </div>
      <div className="legend">
        {data.legend.map((item) => (
          <span key={item.id}>● {item.label}</span>
        ))}
      </div>
    </Panel>
  );
}
