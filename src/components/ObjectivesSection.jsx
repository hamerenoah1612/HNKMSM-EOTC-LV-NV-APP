import { useCallback, useRef, useState } from 'react';
import { OBJECTIVES, OBJECTIVES_TEASER } from '../data/content.js';
import heroChurch from '../assets/hero-church.png';
import Icon from './Icon.jsx';
import ObjectivesModal from './ObjectivesModal.jsx';

/** "Giving & Payments"-style band at the top of the footer, with a tile per objective. */
export default function ObjectivesSection() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const close = useCallback(() => setOpen(false), []);

  return (
    <section className="footer-objectives" aria-labelledby="objectives-heading">
      <img className="objectives-art" src={heroChurch} alt="" aria-hidden="true" />

      <div className="container objectives-inner">
        <div className="objectives-copy">
          <h2 id="objectives-heading">{OBJECTIVES_TEASER.title}</h2>
          <p>{OBJECTIVES_TEASER.teaser}</p>
        </div>

        <div className="objectives-grid">
          {OBJECTIVES.map(({ en, am, icon }) => (
            <div key={en}>
              <span className="glyph" aria-hidden="true">
                <Icon name={icon} size={22} />
              </span>
              <strong>{en}</strong>
              <small lang="am">{am}</small>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="btn btn-primary objectives-more"
          aria-haspopup="dialog"
          onClick={() => setOpen(true)}
          ref={triggerRef}
        >
          More <span aria-hidden="true">→</span>
        </button>
      </div>

      <ObjectivesModal open={open} onClose={close} returnFocusRef={triggerRef} />
    </section>
  );
}
