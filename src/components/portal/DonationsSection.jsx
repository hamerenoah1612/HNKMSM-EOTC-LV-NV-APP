import React, { useState } from 'react';
import { DONATION_FUNDS } from '../../data/landingPortalData.js';
import heroChurch from '../../assets/hero-church.png';

export default function DonationsSection({ onSignIn }) {
  const [selectedFund, setSelectedFund] = useState(null);
  const [customAmount, setCustomAmount] = useState('100');
  const [frequency, setFrequency] = useState('one-time');
  const [submitted, setSubmitted] = useState(false);

  const handleOpenDonate = (fund) => {
    setSelectedFund(fund);
    setSubmitted(false);
  };

  const handleDonateSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="footer-objectives objectives-donations-theme" id="giving" aria-labelledby="giving-heading">
      <img className="objectives-art" src={heroChurch} alt="" aria-hidden="true" />

      <div className="container objectives-inner">
        <div className="objectives-copy">
          <p className="eyebrow" style={{ color: '#7a4220', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.76rem', fontWeight: 700 }}>
            Online Tithes &amp; Giving
          </p>
          <h2 id="giving-heading">Support God’s Sanctuary &amp; Ministry</h2>
          <p>
            “Each of you should give what you have decided in your heart to give, for God loves a cheerful giver.” — 2 Corinthians 9:7
          </p>
        </div>

        {/* Objectives-style tile grid */}
        <div className="objectives-tile-grid">
          {DONATION_FUNDS.map((fund) => (
            <div
              key={fund.id}
              className="objectives-tile-card"
              onClick={() => handleOpenDonate(fund)}
              role="button"
              tabIndex={0}
            >
              <span className="glyph" aria-hidden="true">
                ♥
              </span>
              <strong>{fund.title}</strong>
              <small className="tile-category-tag">
                {fund.highlight ? '★ Priority Fund' : 'Parish Ministry'}
              </small>
              <p className="tile-summary-text">{fund.desc}</p>
              <span className="tile-click-action">Give to this Fund →</span>
            </div>
          ))}
        </div>
      </div>

      {/* Donation Contribution Modal */}
      {selectedFund && (
        <div className="portal-modal-backdrop" onClick={() => setSelectedFund(null)}>
          <div className="portal-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="portal-modal-head">
              <div>
                <span className="service-badge">501(c)(3) Giving</span>
                <h3>{selectedFund.title}</h3>
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
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <span style={{ fontSize: '2.5rem', color: 'var(--primary)', display: 'block', marginBottom: '8px' }}>✝</span>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '6px' }}>Egziabher Yistillign (እግዚአብሔር ይስጥልኝ)</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    Thank you for your generous <strong>${customAmount}</strong> {frequency} contribution to <strong>{selectedFund.title}</strong>. An official tax receipt has been generated.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginTop: '16px' }}
                    onClick={() => setSelectedFund(null)}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDonateSubmit}>
                  <p className="modal-lead" style={{ marginBottom: '14px' }}>{selectedFund.desc}</p>

                  <div className="donation-frequency-toggle" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: '#ede0d4', padding: '4px', borderRadius: '10px', marginBottom: '16px' }}>
                    <button
                      type="button"
                      className={`freq-btn ${frequency === 'one-time' ? 'active' : ''}`}
                      onClick={() => setFrequency('one-time')}
                    >
                      One-Time Offering
                    </button>
                    <button
                      type="button"
                      className={`freq-btn ${frequency === 'monthly' ? 'active' : ''}`}
                      onClick={() => setFrequency('monthly')}
                    >
                      Monthly Tithe
                    </button>
                  </div>

                  <div className="preset-amounts-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '14px' }}>
                    {selectedFund.suggested.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        className={`amount-pill ${customAmount === String(amt) ? 'active' : ''}`}
                        onClick={() => setCustomAmount(String(amt))}
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>
                      Custom Donation Amount ($ USD):
                    </label>
                    <input
                      type="number"
                      min="1"
                      required
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #ddccbc', borderRadius: '8px', fontSize: '1rem', fontWeight: 600 }}
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: 'var(--muted)', marginBottom: '16px' }}>
                    <span>🔒 256-Bit Encrypted</span>
                    <span>✓ Tax-Deductible</span>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                  >
                    Give ${customAmount || 0} USD {frequency === 'monthly' ? '/ Month' : 'Now'} →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
