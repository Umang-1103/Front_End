import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash, FaShoppingBag, FaCreditCard, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { useCart } from '../hooks/useCart';
import CartItem from '../components/CartItem';
import { orderService } from '../services/api';
import { toast } from 'react-toastify';
import { Modal } from 'bootstrap';

const Cart = () => {
  const { cartItems, cartTotal, clearCart, user } = useCart();
  const navigate = useNavigate();

  // Checkout Form State (Pre-filled with proper location and contact details)
  const [address, setAddress] = useState('Apartment 4B, 456 Gourmand Lane, Food District, Gourmet City, GC 98765');
  const [phone, setPhone] = useState('+1 (555) 987-6543');
  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery');
  const [validated, setValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [lastOrder, setLastOrder] = useState(null);

  // Pricing calculations
  const deliveryFee = cartTotal > 30 || cartTotal === 0 ? 0 : 5;
  const tax = cartTotal * 0.1; // 10% tax
  const finalTotal = cartTotal + deliveryFee + tax;

  const handleCheckoutClick = () => {
    if (!user) {
      toast.warning('Please log in to proceed with checkout.');
      navigate('/login?redirect=cart');
    } else {
      // Open Bootstrap Modal (handled via vanilla BS attributes or JS, here we'll use BS standard data-bs toggles)
      const modalElement = document.getElementById('checkoutModal');
      if (modalElement) {
        const bootstrapModal = new Modal(modalElement);
        bootstrapModal.show();
      }
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    setIsSubmitting(true);

    const orderData = {
      userId: user.id,
      userName: user.name,
      userEmail: user.email,
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      subTotal: cartTotal,
      deliveryFee,
      tax,
      totalAmount: finalTotal,
      address,
      phone,
      paymentMethod,
      date: new Date().toISOString(),
      status: 'Preparing',
    };

    try {
      const result = await orderService.create(orderData);
      setLastOrder(result);
      clearCart();
      setOrderSuccess(true);
      toast.success('Order placed successfully! Check your receipt.');

      // Hide modal
      const modalElement = document.getElementById('checkoutModal');
      const modalInstance = Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide();
      }
    } catch (err) {
      toast.error(err.message || 'Failed to submit order.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderSuccess && lastOrder) {
    return (
      <div className="bg-dark text-white min-vh-100 py-5 d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card bg-black border-warning border-2 p-4 p-md-5 rounded-4 shadow-lg text-center">
                <div className="mb-4">
                  <span className="display-1 text-warning">🎉</span>
                </div>
                <h2 className="fw-extrabold text-white mb-2">Order Confirmed!</h2>
                <p className="text-muted mb-4">
                  Thank you for dining with us. Your order has been placed and is currently being cooked fresh.
                </p>

                {/* Receipt Card */}
                <div className="bg-dark p-4 rounded-3 border border-secondary text-start mb-4">
                  <div className="d-flex justify-content-between mb-3 border-bottom border-secondary pb-2">
                    <span className="small text-muted">Order ID: <strong className="text-white">#{lastOrder.id}</strong></span>
                    <span className="badge bg-warning text-dark fw-bold text-uppercase">{lastOrder.status}</span>
                  </div>
                  
                  {lastOrder.items.map((item, index) => (
                    <div key={index} className="d-flex justify-content-between mb-2">
                      <span className="text-light">{item.name} <strong className="text-warning">x{item.quantity}</strong></span>
                      <span className="fw-bold">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}

                  <hr className="bg-secondary" />

                  <div className="d-flex justify-content-between mb-1 small text-muted">
                    <span>Subtotal:</span>
                    <span>${lastOrder.subTotal.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-1 small text-muted">
                    <span>Delivery Fee:</span>
                    <span>{lastOrder.deliveryFee === 0 ? 'FREE' : `$${lastOrder.deliveryFee.toFixed(2)}`}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3 small text-muted">
                    <span>Tax (10%):</span>
                    <span>${lastOrder.tax.toFixed(2)}</span>
                  </div>
                  
                  <div className="d-flex justify-content-between fw-bold fs-5 text-warning pt-2 border-top border-secondary">
                    <span>Total Paid:</span>
                    <span>${lastOrder.totalAmount.toFixed(2)}</span>
                  </div>
                </div>

                <div className="d-grid gap-2">
                  <Link to="/menu" className="btn btn-warning fw-bold py-2.5">
                    Order Something Else
                  </Link>
                  <Link to="/" className="btn btn-outline-secondary border-secondary text-light py-2">
                    Go to Homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <div className="container">
        {/* Page Header */}
        <div className="mb-5 text-center text-md-start">
          <h1 className="fw-extrabold display-4 mb-2">
            Shopping <span className="text-warning">Cart</span>
          </h1>
          <p className="text-muted text-uppercase tracking-wider small">
            Review your gourmet selections before confirming your meal
          </p>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart Screen */
          <div className="text-center py-5">
            <div className="p-5 bg-black border border-secondary rounded-4 max-w-600 mx-auto" style={{ maxWidth: '600px' }}>
              <FaShoppingBag className="text-muted mb-4" size={80} />
              <h3 className="fw-bold mb-2">Your Cart is Empty</h3>
              <p className="text-muted mb-4">
                Looks like you haven't added anything to your cart yet. Explore our delicious menus and treat yourself today!
              </p>
              <Link to="/menu" className="btn btn-warning fw-bold px-5 py-2.5 shadow rounded-pill text-uppercase">
                Explore Menu
              </Link>
            </div>
          </div>
        ) : (
          /* Filled Cart View */
          <div className="row g-4">
            {/* Items List */}
            <div className="col-lg-8">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold mb-0 text-white">Selected Dishes</h5>
                <button onClick={clearCart} className="btn btn-sm btn-outline-danger border-0 d-flex align-items-center gap-2">
                  <FaTrash size={12} /> Clear Cart
                </button>
              </div>

              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {/* Price Calculations Summary Sidebar */}
            <div className="col-lg-4">
              <div className="card bg-black text-white border-secondary p-4 rounded-4 shadow sticky-lg-top" style={{ top: '100px', zIndex: 10 }}>
                <h5 className="fw-bold text-warning mb-4 pb-2 border-bottom border-secondary">Order Summary</h5>

                <div className="d-flex justify-content-between mb-3 text-muted">
                  <span>Subtotal</span>
                  <span className="text-white">${cartTotal.toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between mb-3 text-muted">
                  <span>Delivery Fee</span>
                  <span className="text-white">
                    {deliveryFee === 0 ? <span className="text-success fw-semibold">FREE</span> : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>

                <div className="d-flex justify-content-between mb-4 text-muted">
                  <span>Tax (10%)</span>
                  <span className="text-white">${tax.toFixed(2)}</span>
                </div>

                {deliveryFee > 0 && (
                  <div className="alert alert-secondary bg-dark border-secondary text-muted small p-2 mb-4 text-center">
                    Add <strong className="text-warning">${(30 - cartTotal).toFixed(2)}</strong> more to get <strong>FREE</strong> shipping!
                  </div>
                )}

                <hr className="bg-secondary my-3" />

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span className="fw-bold fs-5">Estimated Total</span>
                  <span className="fw-extrabold text-warning fs-3">${finalTotal.toFixed(2)}</span>
                </div>

                <button
                  onClick={handleCheckoutClick}
                  className="btn btn-warning w-100 fw-bold py-2.5 rounded shadow-sm hover-dark-btn text-uppercase"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bootstrap Checkout Modal */}
      <div
        className="modal fade"
        id="checkoutModal"
        tabIndex="-1"
        aria-labelledby="checkoutModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-white border border-secondary">
            <div className="modal-header border-secondary bg-black">
              <h5 className="modal-title fw-bold text-warning" id="checkoutModalLabel">
                Delivery & Payment details
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white shadow-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            
            <form onSubmit={handleFormSubmit} className={`needs-validation ${validated ? 'was-validated' : ''}`} noValidate>
              <div className="modal-body p-4">
                {/* User Info (Read-only representation) */}
                <div className="mb-3 p-3 bg-black rounded border border-secondary small text-muted">
                  Ordering as: <strong className="text-light">{user?.name} ({user?.email})</strong>
                </div>

                {/* 1. Address input */}
                <div className="mb-3">
                  <label htmlFor="checkoutAddress" className="form-label text-muted small fw-semibold text-uppercase">
                    <FaMapMarkerAlt className="text-warning me-1" /> Delivery Address
                  </label>
                  <textarea
                    id="checkoutAddress"
                    className="form-control bg-transparent border-secondary text-white shadow-none"
                    rows="3"
                    placeholder="Enter your complete delivery address (street, apartment, floor, suite)"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  ></textarea>
                  <div className="invalid-feedback text-danger">Please enter a valid delivery address.</div>
                </div>

                {/* 2. Phone input */}
                <div className="mb-3">
                  <label htmlFor="checkoutPhone" className="form-label text-muted small fw-semibold text-uppercase">
                    <FaPhoneAlt className="text-warning me-1" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    id="checkoutPhone"
                    className="form-control bg-transparent border-secondary text-white shadow-none"
                    placeholder="e.g. +1 (555) 123-4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    pattern="^[+]?[0-9\s\-()]{8,15}$"
                    required
                  />
                  <div className="invalid-feedback text-danger">Please enter a valid phone number (minimum 8 digits).</div>
                </div>

                {/* 3. Payment Method */}
                <div className="mb-1">
                  <label className="form-label text-muted small fw-semibold text-uppercase">
                    <FaCreditCard className="text-warning me-1" /> Payment Method
                  </label>
                  <div className="d-flex flex-column gap-2 mt-1">
                    <div className="form-check">
                      <input
                        className="form-check-input shadow-none border-secondary"
                        type="radio"
                        name="paymentMethod"
                        id="payCod"
                        value="Cash on Delivery"
                        checked={paymentMethod === 'Cash on Delivery'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <label className="form-check-label text-light" htmlFor="payCod">
                        Cash on Delivery (COD)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input shadow-none border-secondary"
                        type="radio"
                        name="paymentMethod"
                        id="payCard"
                        value="Credit/Debit Card"
                        checked={paymentMethod === 'Credit/Debit Card'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <label className="form-check-label text-light" htmlFor="payCard">
                        Credit / Debit Card (Online Pay)
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer border-secondary bg-black">
                <button type="button" className="btn btn-outline-secondary border-secondary text-light px-3" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-warning fw-bold px-4 d-flex align-items-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      Placing Order...
                    </>
                  ) : (
                    `Place Order - $${finalTotal.toFixed(2)}`
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <style>{`
        .hover-dark-btn:hover {
          background-color: #d39e00 !important;
          color: #000 !important;
        }
      `}</style>
    </div>
  );
};

export default Cart;
