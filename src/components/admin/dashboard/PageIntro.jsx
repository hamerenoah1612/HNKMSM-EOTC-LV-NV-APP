export default function PageIntro({ title, subtitle, quote }) {
  return (
    <section className="title-row">
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <blockquote>
        {quote.text}<br />{quote.text2}
        <small>{quote.citation}</small>
      </blockquote>
    </section>
  );
}
