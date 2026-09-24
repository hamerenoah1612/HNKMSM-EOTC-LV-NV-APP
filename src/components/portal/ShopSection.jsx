import React, { useState } from 'react';
import { CHURCH_SHOP_ITEMS } from '../../data/landingPortalData.js';
import heroChurch from '../../assets/hero-church.png';

export default function ShopSection() {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <section className="footer-objectives objectives-shop-theme" id="shop" aria-labelledby="shop-heading">
      <img className="objectives-art" src={heroChurch} alt="" aria-hidden="true" />

      <div className="container objectives-inner">
        <div className="objectives-copy">
          <p className="eyebrow" style={{ color: '#8c593a', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.76rem', fontWeight: 700 }}>
            Parish Bookstore &amp; Altar Supplies
          </p>
          <h2 id="shop-heading">Shop to Help the Church</h2>
          <p>
            100% of proceeds directly support the new cathedral building fund, Sunday School books, and church benevolence.
          </p>
        </div>

        {/* Quick Cart Status Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '10px 16px', flexWrap: 'wrap', gap: '10px' }}>
          <span style={{ fontSize: '0.84rem', color: 'var(--primary)', fontWeight: 600 }}>
            ⛪ Every purchase blesses and builds our holy parish!
          </span>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => setCheckoutOpen(true)}
          >
            🛒 Cart ({cart.reduce((count, item) => count + item.qty, 0)}) • ${totalAmount.toFixed(2)}
          </button>
        </div>

        {/* Objectives-style tile grid */}
        <div className="objectives-tile-grid">
          {CHURCH_SHOP_ITEMS.map((item) => (
            <div
              key={item.id}
              className="objectives-tile-card"
              onClick={() => setSelectedProduct(item)}
              role="button"
              tabIndex={0}
            >
              <span className="glyph" aria-hidden="true">
                {item.icon}
              </span>
              <strong>{item.name}</strong>
              <small className="tile-category-tag">${item.price.toFixed(2)} • {item.category}</small>
              <p className="tile-summary-text">{item.description}</p>
              <span className="tile-click-action">Add to Cart (${item.price.toFixed(2)}) →</span>
            </div>
          ))}
        </div>
      </div>

      {/* Product Quick View Modal */}
      {selectedProduct && (
        <div className="portal-modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="portal-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="portal-modal-head">
              <div className="flex items-center gap-2">
                <span style={{ fontSize: '1.5rem' }}>{selectedProduct.icon}</span>
                <h3>{selectedProduct.name}</h3>
              </div>
              <button
                type="button"
                className="portal-modal-close"
                onClick={() => setSelectedProduct(null)}
              >
                ✕
              </button>
            </div>

            <div className="portal-modal-body">
              <div className="modal-price-lead" style={{ marginBottom: '14px', fontSize: '1.15rem', color: 'var(--primary)', fontWeight: 700 }}>
                ${selectedProduct.price.toFixed(2)} USD
                <span style={{ marginLeft: '12px', fontSize: '0.78rem', color: '#2e7d32', fontWeight: 600 }}>
                  ✓ In Stock at Parish Altar Bookstore
                </span>
              </div>
              <p className="modal-lead">{selectedProduct.description}</p>
              <div className="modal-note-box">
                <p>
                  All sacred items are stored in respectful sanctuary conditions and can be collected at the Parish Office or shipped.
                </p>
              </div>
            </div>

            <div className="portal-modal-foot">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setSelectedProduct(null)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  addToCart(selectedProduct);
                  setSelectedProduct(null);
                }}
              >
                Add to Cart (${selectedProduct.price.toFixed(2)})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {checkoutOpen && (
        <div className="portal-modal-backdrop" onClick={() => setCheckoutOpen(false)}>
          <div className="portal-modal-box modal-cart" onClick={(e) => e.stopPropagation()}>
            <div className="portal-modal-head">
              <h3>🛒 Parish Bookstore Cart</h3>
              <button
                type="button"
                className="portal-modal-close"
                onClick={() => setCheckoutOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="portal-modal-body">
              {orderComplete ? (
                <div className="order-success-screen" style={{ textAlign: 'center', padding: '20px 0' }}>
                  <span className="big-check-icon" style={{ fontSize: '2rem', color: '#2e7d32', display: 'block', marginBottom: '10px' }}>✓</span>
                  <h4>God Bless Your Generosity!</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted)', margin: '8px 0 16px' }}>
                    Your order has been received and 100% helps fund our church projects. An official confirmation has been created.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      setCart([]);
                      setOrderComplete(false);
                      setCheckoutOpen(false);
                    }}
                  >
                    Continue Browsing
                  </button>
                </div>
              ) : cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '30px 0', color: 'var(--muted)' }}>
                  <p>Your cart is empty.</p>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => setCheckoutOpen(false)}
                  >
                    Browse Items
                  </button>
                </div>
              ) : (
                <div className="cart-items-list" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {cart.map((item) => (
                    <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 12px', background: '#fdfaf7', border: '1px solid var(--line)', borderRadius: '10px' }}>
                      <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
                      <div style={{ flexGrow: 1 }}>
                        <strong style={{ fontSize: '0.86rem', display: 'block' }}>{item.name}</strong>
                        <small style={{ color: 'var(--muted)' }}>${item.price.toFixed(2)} × {item.qty}</small>
                      </div>
                      <span style={{ fontWeight: 700, color: 'var(--primary)' }}>${(item.price * item.qty).toFixed(2)}</span>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        style={{ background: 'none', border: 'none', color: '#a00', cursor: 'pointer', fontWeight: 'bold' }}
                      >
                        ✕
                      </button>
                    </div>
                  ))}

                  <div style={{ background: '#f6ede4', padding: '12px', borderRadius: '10px', marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 700 }}>
                    <span>Total Support:</span>
                    <span>${totalAmount.toFixed(2)} USD</span>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: '12px' }}
                    onClick={() => setOrderComplete(true)}
                  >
                    Complete Checkout (${totalAmount.toFixed(2)}) →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
