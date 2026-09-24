import React, { useState, useEffect } from 'react';

export default function CookieBanner({ onOpenPolicy }) {
  const [isVisible, setIsVisible] = useState(false);
  const [positionLeft, setPositionLeft] = useState(false); // toggleable left/right

  useEffect(() => {
    try {
      const consent = localStorage.getItem('hnkmsm_cookie_consent');
      if (!consent) {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  const handleClick = () => {
    if (onOpenPolicy) {
      onOpenPolicy();
    }
  };

  const handleDismiss = (e) => {
    e.stopPropagation();
    try {
      localStorage.setItem('hnkmsm_cookie_consent', 'accepted');
    } catch {
      // ignore
    }
    setIsVisible(false);
  };

  const toggleSide = (e) => {
    e.stopPropagation();
    setPositionLeft((prev) => !prev);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`small-cookie-badge ${positionLeft ? 'pos-left' : 'pos-right'}`}
      role="complementary"
      aria-label="Cookie Notice"
      onClick={handleClick}
    >
      <span className="cookie-icon" aria-hidden="true">
        🍪
      </span>
      <span className="cookie-title">Cookie &amp; Sanctuary Notice</span>
      
      <button
        type="button"
        className="cookie-switch-btn"
        onClick={toggleSide}
        aria-label="Switch side"
      >
        ⇄
      </button>

      <button
        type="button"
        className="cookie-dismiss-btn"
        onClick={handleDismiss}
        aria-label="Close"
      >
        ✕
      </button>
    </div>
  );
}
