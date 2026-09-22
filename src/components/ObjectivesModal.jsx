import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { OBJECTIVES, OBJECTIVES_TEASER } from '../data/content.js';
import Icon from './Icon.jsx';

const FOCUSABLE = 'button, [href], [tabindex]:not([tabindex="-1"])';

/**
 * Accessible modal: closes with the X button, Esc, or a click on the backdrop.
 * It never changes the URL/hash, so the visitor stays exactly where they were.
 */
export default function ObjectivesModal({ open, onClose, returnFocusRef }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;

      // Keep keyboard focus inside the dialog
      const items = [...dialogRef.current.querySelectorAll(FOCUSABLE)];
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    const returnTarget = returnFocusRef?.current;
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      returnTarget?.focus();
    };
  }, [open, onClose, returnFocusRef]);

  if (!open) return null;

  return createPortal(
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="objectives-modal-title"
        ref={dialogRef}
      >
        <div className="modal-head">
          <h2 id="objectives-modal-title">{OBJECTIVES_TEASER.title}</h2>
          <button
            type="button"
            className="modal-close"
            aria-label="Close"
            onClick={onClose}
            ref={closeRef}
          >
            <Icon name="close" size={18} />
          </button>
        </div>

        <div className="modal-body" tabIndex={0}>
          <ol className="objectives-list">
            {OBJECTIVES.map(({ en, am, textAm, textEn }, index) => (
              <li key={en}>
                <span className="obj-num" aria-hidden="true">
                  {index + 1}
                </span>
                <div>
                  <h3>
                    {en} <span className="am" lang="am">({am})</span>
                  </h3>
                  <p className="am" lang="am">{textAm}</p>
                  <p className="obj-en" lang="en">{textEn}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>,
    document.body
  );
}
