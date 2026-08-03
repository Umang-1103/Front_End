import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaMinus, FaPlus } from 'react-icons/fa';
import { useCart } from '../hooks/useCart';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { id, name, category, price, quantity, image } = item;

  return (
    <div className="card bg-dark text-white border-secondary mb-3 shadow-sm hover-border-warning transition-all">
      <div className="row g-0 align-items-center">
        {/* Item Image */}
        <div className="col-md-2 col-4">
          <img
            src={image}
            alt={name}
            className="img-fluid rounded-start object-fit-cover w-100"
            style={{ height: '100px' }}
          />
        </div>

        {/* Item Details & Controls */}
        <div className="col-md-10 col-8">
          <div className="card-body py-2 px-3">
            <div className="row align-items-center g-2">
              {/* Product Info */}
              <div className="col-lg-4 col-md-12">
                <span className="badge bg-warning text-dark fw-bold text-uppercase mb-1" style={{ fontSize: '0.7rem' }}>
                  {category}
                </span>
                <h6 className="card-title fw-bold mb-0 text-truncate">
                  <Link to={`/menu/${id}`} className="text-white text-decoration-none hover-warning transition-all">
                    {name}
                  </Link>
                </h6>
                <div className="text-muted small">${price.toFixed(2)} each</div>
              </div>

              {/* Quantity Selector */}
              <div className="col-lg-3 col-md-5 col-7">
                <div className="input-group input-group-sm" style={{ maxWidth: '110px' }}>
                  <button
                    className="btn btn-outline-warning border-secondary d-flex align-items-center justify-content-center"
                    type="button"
                    onClick={() => updateQuantity(id, quantity - 1)}
                    aria-label="Decrease quantity"
                  >
                    <FaMinus size={10} />
                  </button>
                  <input
                    type="text"
                    className="form-control bg-transparent border-secondary text-white text-center fw-bold p-0 shadow-none"
                    value={quantity}
                    readOnly
                  />
                  <button
                    className="btn btn-outline-warning border-secondary d-flex align-items-center justify-content-center"
                    type="button"
                    onClick={() => updateQuantity(id, quantity + 1)}
                    aria-label="Increase quantity"
                  >
                    <FaPlus size={10} />
                  </button>
                </div>
              </div>

              {/* Item Subtotal */}
              <div className="col-lg-3 col-md-4 col-3 text-end text-lg-center">
                <span className="fw-bold text-warning fs-5">
                  ${(price * quantity).toFixed(2)}
                </span>
              </div>

              {/* Remove Action */}
              <div className="col-lg-2 col-md-3 col-2 text-end">
                <button
                  onClick={() => removeFromCart(id)}
                  className="btn btn-outline-danger border-0 hover-bg-danger rounded-circle p-2 d-inline-flex align-items-center justify-content-center"
                  style={{ width: '38px', height: '38px' }}
                  title="Remove item"
                  aria-label="Remove item"
                >
                  <FaTrashAlt size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hover-border-warning {
          transition: border-color 0.25s ease;
        }
        .hover-border-warning:hover {
          border-color: var(--bs-warning) !important;
        }
        .hover-bg-danger:hover {
          background-color: var(--bs-danger) !important;
          color: white !important;
        }
      `}</style>
    </div>
  );
};

export default CartItem;
