/**
 * Shared panel/card shell used by every dashboard widget on this page.
 * `actionLabel`/`onAction` render the "View All →" link; pass a `headExtra`
 * node instead (e.g. a period-picker button) when a panel needs that.
 */
export default function Panel({ title, actionLabel = 'View All →', onAction, headExtra, className = '', children }) {
  return (
    <article className={`panel ${className}`.trim()}>
      <div className="panel-head">
        <h2>{title}</h2>
        {headExtra}
        {!headExtra && actionLabel && (
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
