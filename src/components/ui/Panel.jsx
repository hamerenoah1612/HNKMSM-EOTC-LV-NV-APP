export default function Panel({
  icon,
  title,
  actionLabel = 'View All →',
  onAction,
  span,
  className = '',
  children,
}) {
  const spanClass = span ? `span-${span}` : '';
  return (
    <article className={`panel ${spanClass} ${className}`.trim()}>
      <div className="panel-header">
        <h2>
          {icon && <span>{icon}</span>} {title}
        </h2>
        {actionLabel && (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (onAction) onAction();
            }}
          >
            {actionLabel}
          </a>
        )}
      </div>
      {children}
    </article>
  );
}
