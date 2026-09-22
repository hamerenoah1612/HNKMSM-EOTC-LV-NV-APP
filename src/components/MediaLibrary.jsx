import { MEDIA_TYPES } from '../data/content.js';

function MediaTile({ icon, title, caption }) {
  return (
    <div>
      <span className="glyph" aria-hidden="true">{icon}</span>
      <strong>{title}</strong>
      <small>{caption}</small>
    </div>
  );
}

export default function MediaLibrary() {
  return (
    <section className="section" id="media">
      <div className="container media-wrap">
        <div className="section-heading">
          <p className="eyebrow">Media & Learning</p>
          <h2>Grow in Faith, Anytime, Anywhere</h2>
          <p>
            Explore a rich library of spiritual content, teaching resources and
            archival materials.
          </p>
        </div>

        <div className="media-grid">
          {MEDIA_TYPES.map((item) => (
            <MediaTile key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
