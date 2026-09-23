import { useState } from 'react';
import Panel from '../ui/Panel.jsx';

function MiniChart({ months, heights }) {
  return (
    <div className="mini-chart" aria-label="Giving bar chart">
      {heights.map((height, i) => (
        <span key={months[i]} style={{ height: `${height}%` }} />
      ))}
      <small>{months.join('　')}</small>
    </div>
  );
}

export default function GivingPanel({ tabs, summary, chart, breakdown }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <Panel icon="▣" title="Giving &amp; Payments" span={4} className="giving-panel">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className={tab === activeTab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="giving-summary">
        <div>
          <strong>{summary.total}</strong>
          <span>{summary.label}</span>
        </div>
        <b className="up">
          {summary.trend}
          <small>{summary.trendHelper}</small>
        </b>
      </div>

      <div className="giving-body">
        <MiniChart months={chart.months} heights={chart.heights} />
        <div className="giving-list">
          {breakdown.map((item) => (
            <p key={item.id}>
              <span>{item.icon} {item.label}</span>
              <b>{item.amount}</b>
            </p>
          ))}
        </div>
      </div>
    </Panel>
  );
}
