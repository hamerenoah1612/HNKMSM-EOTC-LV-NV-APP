import React from 'react';
import { TERMS_AND_CONDITIONS, PRIVACY_POLICY } from '../../data/landingPortalData.js';

export default function LegalModal({ modalType, onClose }) {
  if (!modalType) return null;

  const isTerms = modalType === 'terms';
  const isPrivacy = modalType === 'privacy';
  const isCookieInfo = modalType === 'cookie-info';

  const title = isTerms
    ? 'Parish Terms & Conditions'
    : isPrivacy
    ? 'Parish Privacy Policy'
    : 'Cookie & Digital Sanctuary Policy';

  const data = isTerms ? TERMS_AND_CONDITIONS : PRIVACY_POLICY;

  return (
    <div className="portal-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="portal-modal-box modal-lg" onClick={(e) => e.stopPropagation()}>
        <div className="portal-modal-head">
          <div className="flex items-center gap-2">
            <span style={{ fontSize: '1.4rem' }}>{isTerms ? '📜' : isPrivacy ? '🔒' : '📌'}</span>
            <h3>{title}</h3>
          </div>
          <button
            type="button"
            className="portal-modal-close"
            onClick={onClose}
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>

        <div className="portal-modal-body legal-modal-scroll">
          <div className="legal-meta-bar">
            <span>Holy Name of Jesus &amp; Saint Mary EOTC</span>
            <small>Effective: {data.lastUpdated || 'September 2026'}</small>
          </div>

          {isCookieInfo ? (
            <div className="legal-prose">
              <h4>Parish Cookie &amp; Storage Notice</h4>
              <p>
                To provide a secure and respectful spiritual experience, HNKMSM-EOTC-LV-NV uses minimal first-party cookies and browser local storage.
              </p>
              <ul>
                <li>
                  <strong>Authentication &amp; Session Tokens:</strong> Securely keep your church account logged in to the Member and Admin Portals without repetitive credentials entry.
                </li>
                <li>
                  <strong>Language &amp; Preferences:</strong> Remember whether you prefer English or Amharic (አማርኛ) liturgy scripts and psalm translations.
                </li>
                <li>
                  <strong>Bookstore &amp; Tithes:</strong> Maintain your church donation cart and generate downloadable 501(c)(3) tax receipts.
                </li>
              </ul>
              <p>
                We do not use invasive third-party commercial marketing cookies. You may withdraw or customize your consent anytime using browser cookie settings.
              </p>
            </div>
          ) : (
            <div className="legal-prose">
              {data.sections.map((sec, idx) => (
                <div key={idx} className="legal-section-block">
                  <h4>{sec.title}</h4>
                  <p>{sec.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="portal-modal-foot">
          <button type="button" className="btn btn-primary" onClick={onClose}>
            I Understand &amp; Agree
          </button>
        </div>
      </div>
    </div>
  );
}
