import React, { useState } from 'react';
import { DONATION_FUNDS } from '../../data/landingPortalData.js';
import heroChurch from '../../assets/hero-church.png';

export default function DonationsSectionObjectives({ onSignIn }) {
  const [selectedFund, setSelectedFund] = useState(null);
  const [amount, setAmount] = useState('100');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="footer-objectives section-band" id="giving" aria-labelledby="giving-heading">
      <img className="objectives-art" src={heroChurch} alt="" aria-hidden="true" />

      <div className="container objectives-inner">
        <div className="objectives-copy">
          <p className="eyebrow" style={{ margin: '0 0 4px' }}>Tithes &amp; Offerings</p>
          <h2 id="giving-heading">Church Giving &amp; Sanctuary Support</h2>
          <p>
            “Each of you should give what you have decided in your heart to give, for God loves a cheerful giver.” — 2 Cor 9:7
          </p>
        </div>

        <div className="objectives-grid">
          {DONATION_FUNDS.map((fund) => (
            <div
              key={fund.id}
              onClick={() => {
                setSelectedFund(fund);
                setSubmitted(false);
              }}
              style={{ cursor: 'pointer' }}
              title="Click to donate to this fund"
            >
              <span className="glyph" aria-hidden="true" style={{ fontSize: '1.4rem' }}>
                {fund.id === 'general-fund' ? '⛪' : fund.id === 'cathedral-building' ? '🏛' : fund.id === 'sunday-school' ? '📖' : '🤲'}
              </span>
              <strong>{fund.title}</strong>
              <small>{fund.desc}</small>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button
            type="button"
            className="btn btn-primary objectives-more"
            onClick={() => {
              setSelectedFund(DONATION_FUNDS[0]);
              setSubmitted(false);
            }}
          >
            Make Online Offering <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      {/* Donation Modal */}
      {selectedFund && (
        <div className="portal-modal-backdrop" onClick={() => setSelectedFund(null)}>
          <div className="portal-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="portal-modal-head">
              <div>
                <small style={{ color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Online Tithe &amp; Offering
                </small>
                <h3 style={{ margin: 0 }}>{selectedFund.title}</h3>
              </div>
              <button
                type="button"
                className="portal-modal-close"
                onClick={() => setSelectedFund(null)}
              >
                ✕
              </button>
            </div>
            <div className="portal-modal-body">
              {submitted ? (
                <div className="donation-success-box">
                  <span className="success-icon">✝</span>
                  <h3>እግዚአብሔር ይስጥልኝ</h3>
                  <p>
                    Thank you for your blessed contribution of <strong>${amount} USD</strong> to the <strong>{selectedFund.title}</strong>.
                  </p>
                  <p className="tax-receipt-note">
                    Your 501(c)(3) tax-deductible receipt has been dispatched to your email.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setSubmitted(false)}
                  >
                    Give Another Offering
                  </button>
                </div>
              ) : (
                <div>
                  <p className="modal-lead">{selectedFund.desc}</p>
                  <div className="preset-amounts-row" style={{ marginTop: '14px' }}>
                    {selectedFund.suggested.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        className={`amount-pill ${amount === String(amt) ? 'active' : ''}`}
                        onClick={() => setAmount(String(amt))}
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>

                  <div className="custom-amount-field" style={{ marginTop: '16px' }}>
                    <label>Or Enter Custom Amount ($):</label>
                    <div className="amount-input-group">
                      <span className="currency-symbol">$</span>
                      <input
                        type="number"
                        min="1"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="donation-trust-badges">
                    <span>🔒 256-Bit SSL Encrypted</span>
                    <span>✓ 501(c)(3) Tax-Deductible</span>
                  </div>
                </div>
              )}
            </div>
            {!submitted && (
              <div className="portal-modal-foot">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setSelectedFund(null)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setSubmitted(true)}
                >
                  Contribute ${amount || 0} USD Now
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
