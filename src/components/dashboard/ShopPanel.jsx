import Panel from '../ui/Panel.jsx';

export default function ShopPanel({ categories }) {
  return (
    <Panel icon="🛒" title="Shop / E-commerce" span={3} className="shop-panel">
      <div className="shop-grid">
        {categories.map((category) => (
          <a key={category.id} href="#" onClick={(e) => e.preventDefault()}>
            {category.label}
          </a>
        ))}
      </div>
    </Panel>
  );
}
