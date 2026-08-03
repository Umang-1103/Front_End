import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaEye } from 'react-icons/fa';
import Rating from './Rating';
import { useCart } from '../hooks/useCart';

const FoodCard = ({ food }) => {
  const { addToCart } = useCart();
  const { id, name, category, price, rating, description, image } = food;

  return (
    <div className="card h-100 bg-dark text-white border-secondary shadow transition-all hover-card-lift overflow-hidden">
      {/* Food Image Container */}
      <div className="position-relative overflow-hidden ratio ratio-4x3 group-hover">
        <img
          src={image}
          alt={name}
          className="img-fluid object-fit-cover transition-all duration-300 card-image-zoom"
          loading="lazy"
        />
        {/* Overlay Badges */}
        <div className="position-absolute top-0 start-0 m-3 d-flex flex-column gap-2">
          <span className="badge bg-warning text-dark fw-bold text-uppercase px-3 py-1 shadow-sm">
            {category}
          </span>
        </div>
        
        {/* Quick Actions Hover Overlay */}
        <div className="card-hover-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-70 d-flex align-items-center justify-content-center gap-3 opacity-0 transition-all">
          <Link to={`/menu/${id}`} className="btn btn-warning rounded-circle p-3 d-flex align-items-center justify-content-center shadow" title="View Details">
            <FaEye size={18} />
          </Link>
          <button
            onClick={() => addToCart(food)}
            className="btn btn-outline-warning rounded-circle p-3 d-flex align-items-center justify-content-center shadow bg-dark text-warning"
            title="Add to Cart"
          >
            <FaShoppingCart size={18} />
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="card-body d-flex flex-column justify-content-between p-4">
        <div>
          {/* Rating */}
          <Rating value={rating} className="mb-2" />

          {/* Name */}
          <h5 className="card-title fw-bold text-white mb-2 text-truncate-2">
            <Link to={`/menu/${id}`} className="text-white text-decoration-none hover-warning transition-all">
              {name}
            </Link>
          </h5>

          {/* Description */}
          <p className="card-text text-muted small text-truncate-3 mb-3" style={{ height: '54px', overflow: 'hidden' }}>
            {description}
          </p>
        </div>

        {/* Footer info & Add-to-cart */}
        <div className="d-flex align-items-center justify-content-between pt-3 border-top border-secondary mt-auto">
          <span className="fs-4 fw-bold text-warning">${price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(food)}
            className="btn btn-warning d-flex align-items-center gap-2 fw-semibold px-3 py-2 rounded shadow-sm hover-dark-btn"
          >
            <FaShoppingCart /> Add
          </button>
        </div>
      </div>

      <style>{`
        .hover-card-lift {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .hover-card-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.4) !important;
        }
        .card-image-zoom {
          transition: transform 0.4s ease;
        }
        .hover-card-lift:hover .card-image-zoom {
          transform: scale(1.08);
        }
        .card-hover-overlay {
          transition: opacity 0.25s ease;
        }
        .hover-card-lift:hover .card-hover-overlay {
          opacity: 1 !important;
        }
        .text-truncate-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .text-truncate-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .hover-dark-btn:hover {
          background-color: #d39e00 !important;
          color: #000 !important;
        }
      `}</style>
    </div>
  );
};

export default FoodCard;
