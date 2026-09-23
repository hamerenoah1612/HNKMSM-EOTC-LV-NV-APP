export default function FaithBanner({ title, subtitle, subtitle2, cta }) {
  return (
    <section className="faith-banner span-6">
      <div className="faith-cross">✠</div>
      <div>
        <h2>{title}</h2>
        <p>
          {subtitle}
          <br />
          {subtitle2}
        </p>
      </div>
      <a href="#" onClick={(e) => e.preventDefault()}>{cta}</a>
    </section>
  );
}
