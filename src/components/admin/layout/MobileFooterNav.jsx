export default function MobileFooterNav({ items, onMore }) {
  return (
    <nav className="mobile-footer">
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
        </a>
      ))}
      <button type="button" id="moreBtn" onClick={onMore}>
        <span>☰</span>
        <small>More</small>
      </button>
    </nav>
  );
}
