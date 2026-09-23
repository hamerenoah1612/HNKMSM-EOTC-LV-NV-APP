export default function FaithPanel({ title, title2, subtitle, subtitle2, cta }) {
  return (
    <article className="panel faith">
      <div className="big-cross">✠</div>
      <div>
        <h2>
          {title}
          <br />
          {title2}
        </h2>
        <p>
          {subtitle}
          <br />
          {subtitle2}
        </p>
        <button type="button">{cta}</button>
      </div>
    </article>
  );
}
