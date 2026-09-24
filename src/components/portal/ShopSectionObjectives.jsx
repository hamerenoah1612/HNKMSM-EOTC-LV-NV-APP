import React, { useState } from 'react';
import { CHURCH_SHOP_ITEMS } from '../../data/landingPortalData.js';
import heroChurch from '../../assets/hero-church.png';

export default function ShopSectionObjectives() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartModal, setCartModal] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

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

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <section className="footer-objectives section-band" id="shop" aria-labelledby="shop-heading">
      <img className="objectives-art" src={heroChurch} alt="" aria-hidden="true" />

      <div className="container objectives-inner">
        <div className="objectives-copy">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
            <div>
              <p className="eyebrow" style={{ margin: '0 0 4px' }}>Parish Bookstore &amp; Supplies</p>
              <h2 id="shop-heading">Shop to Help the Church</h2>
              <p>Hand-carved crosses, prayer books, pure incense, icons, and traditional Netela. 100% benefits the church.</p>
            </div>
            {cart.length > 0 && (
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setCartModal(true)}
              >
                🛒 Cart ({cart.reduce((c, i) => c + i.qty, 0)}) • ${total.toFixed(2)}
              </button>
            )}
          </div>
        </div>

        <div className="objectives-grid">
          {CHURCH_SHOP_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedProduct(item)}
              style={{ cursor: 'pointer' }}
              title="Click to view & add to cart"
            >
              <span className="glyph" aria-hidden="true" style={{ fontSize: '1.4rem' }}>
                {item.icon}
              </span>
              <strong>{item.name}</strong>
              <small>${item.price.toFixed(2)} • {item.category}</small>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button
            type="button"
            className="btn btn-primary objectives-more"
            onClick={() => setSelectedProduct(CHURCH_SHOP_ITEMS[0])}
          >
            Browse Sacred Bookstore <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="portal-modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="portal-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="portal-modal-head">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.4rem' }}>{selectedProduct.icon}</span>
                <h3 style={{ margin: 0 }}>{selectedProduct.name}</h3>
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '14px' }}>
                <strong style={{ fontSize: '1.3rem', color: 'var(--primary)' }}>
                  ${selectedProduct.price.toFixed(2)} USD
                </strong>
                <span style={{ color: '#2e7d32', fontSize: '0.8rem', fontWeight: 600 }}>
                  ✓ In Stock at Parish
                </span>
              </div>
              <p className="modal-lead">{selectedProduct.description}</p>
              <div className="modal-note-box">
                <p>
                  Every purchase directly funds our Sunday school curriculum, sanctuary altar wine and incense, and church construction.
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
                  setCartModal(true);
                }}
              >
                Add to Cart (${selectedProduct.price.toFixed(2)}) +
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {cartModal && (
        <div className="portal-modal-backdrop" onClick={() => setCartModal(false)}>
          <div className="portal-modal-box modal-cart" onClick={(e) => e.stopPropagation()}>
            <div className="portal-modal-head">
              <h3>🛒 Church Ministry Cart</h3>
              <button
                type="button"
                className="portal-modal-close"
                onClick={() => setCartModal(false)}
              >
                ✕
              </button>
            </div>
            <div className="portal-modal-body">
              {checkoutComplete ? (
                <div className="order-success-screen">
                  <span className="big-check-icon">✓</span>
                  <h4>May God Bless Your Generosity!</h4>
                  <p>
                    Your order of ${total.toFixed(2)} has been recorded. You will receive an email confirmation and collection directions.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      setCart([]);
                      setCheckoutComplete(false);
                      setCartModal(false);
                    }}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <div className="cart-items-list">
                  {cart.map((item) => (
                    <div key={item.id} className="cart-item-row">
                      <span className="cart-item-icon">{item.icon}</span>
                      <div className="cart-item-details">
                        <strong>{item.name}</strong>
                        <small>${item.price.toFixed(2)} × {item.qty}</small>
                      </div>
                      <span className="cart-item-subtotal">
                        ${(item.price * item.qty).toFixed(2)}
                      </span>
                    </div>
                  ))}

                  <div className="cart-total-summary">
                    <div className="cart-total-line total-big">
                      <span>Total Church Contribution:</span>
                      <strong>${total.toFixed(2)} USD</strong>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary btn-checkout-action"
                    onClick={() => setCheckoutComplete(true)}
                  >
                    Complete Order &amp; Gift (${total.toFixed(2)}) →
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
