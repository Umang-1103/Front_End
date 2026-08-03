import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaShoppingCart, FaPlus, FaMinus, FaBookmark } from 'react-icons/fa';
import useFetch from '../hooks/useFetch';
import { foodService } from '../services/api';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import { useCart } from '../hooks/useCart';

const FoodDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Fetch food item details
  const { data: food, loading, error } = useFetch(() => foodService.getById(id), [id]);

  const handleQuantityChange = (val) => {
    if (val < 1) return;
    setQuantity(val);
  };

  const handleAddToCart = () => {
    if (food) {
      addToCart(food, quantity);
    }
  };

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <div className="container">
        {/* Back Link */}
        <div className="mb-4">
          <Link to="/menu" className="btn btn-link text-warning text-decoration-none d-flex align-items-center gap-2 p-0 fw-semibold">
            <FaChevronLeft size={14} /> Back to Menu
          </Link>
        </div>

        {loading && <Loader />}
        {error && (
          <div className="alert alert-danger text-center bg-black border-danger text-danger">
            <h4>Failed to load food details</h4>
            <p className="mb-3">{error}</p>
            <button onClick={() => navigate('/menu')} className="btn btn-warning fw-bold px-4">
              Return to Menu
            </button>
          </div>
        )}

        {!loading && !error && food && (
          <div className="card bg-black border-secondary shadow-lg rounded-4 overflow-hidden">
            <div className="row g-0">
              {/* Image Section */}
              <div className="col-lg-6">
                <div className="ratio ratio-1x1 h-100 min-h-350">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="img-fluid object-fit-cover w-100 h-100"
                  />
                </div>
              </div>

              {/* Text Information Section */}
              <div className="col-lg-6 d-flex align-items-center">
                <div className="p-4 p-md-5 w-100">
                  {/* Category Badge & Popularity indicator */}
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="badge bg-warning text-dark fw-bold text-uppercase px-3 py-2">
                      {food.category}
                    </span>
                    {food.isPopular && (
                      <span className="badge bg-danger text-white fw-bold text-uppercase px-3 py-2 d-flex align-items-center gap-1">
                        <FaBookmark size={10} /> Popular Choice
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h1 className="fw-extrabold text-white mb-2 display-5">{food.name}</h1>

                  {/* Rating */}
                  <div className="mb-4">
                    <Rating value={food.rating} text={`${food.rating} / 5.0 (Customer Rating)`} />
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-warning display-5 fw-extrabold">${food.price.toFixed(2)}</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted fs-6 mb-4 leading-relaxed">{food.description}</p>

                  {/* Ingredients */}
                  {food.ingredients && food.ingredients.length > 0 && (
                    <div className="mb-4">
                      <h6 className="text-white fw-bold text-uppercase tracking-wider mb-2" style={{ fontSize: '0.85rem' }}>
                        Ingredients
                      </h6>
                      <div className="d-flex flex-wrap gap-2">
                        {food.ingredients.map((ing, index) => (
                          <span key={index} className="badge bg-dark border border-secondary text-light px-3 py-2 rounded-pill small fw-semibold">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <hr className="bg-secondary my-4" />

                  {/* Actions Section */}
                  <div className="row g-3 align-items-center">
                    {/* Quantity selectors */}
                    <div className="col-auto">
                      <div className="input-group" style={{ width: '130px' }}>
                        <button
                          className="btn btn-outline-warning border-secondary d-flex align-items-center justify-content-center px-3"
                          type="button"
                          onClick={() => handleQuantityChange(quantity - 1)}
                        >
                          <FaMinus size={12} />
                        </button>
                        <input
                          type="text"
                          className="form-control bg-transparent border-secondary text-white text-center fw-bold shadow-none"
                          value={quantity}
                          readOnly
                        />
                        <button
                          className="btn btn-outline-warning border-secondary d-flex align-items-center justify-content-center px-3"
                          type="button"
                          onClick={() => handleQuantityChange(quantity + 1)}
                        >
                          <FaPlus size={12} />
                        </button>
                      </div>
                    </div>

                    {/* Add to Cart button */}
                    <div className="col">
                      <button
                        onClick={handleAddToCart}
                        className="btn btn-warning w-100 d-flex align-items-center justify-content-center gap-2 fw-bold py-2.5 rounded shadow-sm hover-dark-btn"
                        style={{ height: '42px' }}
                      >
                        <FaShoppingCart /> Add To Cart (${(food.price * quantity).toFixed(2)})
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <style>{`
        .min-h-350 {
          min-height: 350px;
        }
        .hover-dark-btn:hover {
          background-color: #d39e00 !important;
          color: #000 !important;
        }
      `}</style>
    </div>
  );
};

export default FoodDetails;
