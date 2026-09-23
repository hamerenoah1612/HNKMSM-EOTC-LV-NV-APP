export default function PageIntro({ title, subtitle, scripture }) {
  return (
    <section className="page-intro">
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <blockquote>
        <span className="ethiopic">{scripture.ethiopic}</span>
        <em>{scripture.english}</em>
        <cite>{scripture.citation}</cite>
      </blockquote>
    </section>
  );
}
