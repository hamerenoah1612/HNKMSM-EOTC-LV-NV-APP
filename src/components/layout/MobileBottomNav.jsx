export default function MobileBottomNav({ items, onMore }) {
  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      {items.map((item) => (
        <a
          key={item.id}
          className={item.active ? 'active' : ''}
          href={item.href}
          onClick={(e) => {
            if (item.href === '#') e.preventDefault();
          }}
        >
          <span>{item.icon}</span>
          <small>{item.label}</small>
          {item.badge ? <b>{item.badge}</b> : null}
        </a>
      ))}
      <button type="button" id="moreNav" onClick={onMore}>
        <span>☰</span>
        <small>More</small>
      </button>
    </nav>
  );
}
