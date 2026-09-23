import Panel from '../ui/Panel.jsx';

export default function MediaPanel({ categories }) {
  return (
    <Panel icon="▤" title="Media &amp; Learning" span={4} className="media-panel">
      <div className="media-grid">
        {categories.map((category) => (
          <a key={category.id} href="#" onClick={(e) => e.preventDefault()}>
            <span>{category.icon}</span>
            {category.label}
          </a>
        ))}
      </div>
    </Panel>
  );
}
