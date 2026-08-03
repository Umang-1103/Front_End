import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaChevronLeft, FaUtensils, FaImage, FaCheck, FaSave } from 'react-icons/fa';
import useFetch from '../../hooks/useFetch';
import { foodService } from '../../services/api';
import Loader from '../../components/Loader';
import { toast } from 'react-toastify';

const UpdateFood = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Local Form states
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Burger');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [ingredientsText, setIngredientsText] = useState('');
  const [isPopular, setIsPopular] = useState(false);

  const [validated, setValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch food item to pre-populate form
  const { data: food, loading, error } = useFetch(() => foodService.getById(id), [id]);

  // Sync state once data resolves
  useEffect(() => {
    if (food) {
      setName(food.name);
      setCategory(food.category);
      setPrice(food.price.toString());
      setDescription(food.description);
      setImage(food.image);
      setIngredientsText(food.ingredients ? food.ingredients.join(', ') : '');
      setIsPopular(food.isPopular || false);
    }
  }, [food]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    setIsSubmitting(true);

    const ingredients = ingredientsText
      .split(',')
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    const updatedFood = {
      ...food,
      name,
      category,
      price: Number(price),
      description,
      image,
      ingredients,
      isPopular,
    };

    try {
      await foodService.update(id, updatedFood);
      toast.success(`"${name}" updated successfully!`);
      navigate('/admin/foods');
    } catch (err) {
      toast.error(err.message || 'Failed to update food details.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fade-in">
      {/* Back button */}
      <div className="mb-4">
        <Link to="/admin/foods" className="btn btn-link text-warning text-decoration-none d-flex align-items-center gap-2 p-0 fw-semibold orange-text">
          <FaChevronLeft size={12} /> Back to Catalog
        </Link>
      </div>

      {loading && <Loader />}
      {error && (
        <div className="alert alert-danger text-center">
          <h4>Failed to load food details</h4>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && food && (
        <div className="row g-4">
          {/* Form Column */}
          <div className="col-lg-8">
            <div className="card border-0 rounded-4 shadow-sm bg-white p-4 p-md-5">
              <h5 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2 border-bottom pb-2">
                <FaUtensils style={{ color: '#FF6B00' }} /> Edit Dish Details
              </h5>

              <form onSubmit={handleSubmit} className={`needs-validation ${validated ? 'was-validated' : ''}`} noValidate>
                <div className="row g-3">
                  {/* 1. Name */}
                  <div className="col-md-6">
                    <label htmlFor="editFoodName" className="form-label text-muted small fw-semibold text-uppercase">Dish Name</label>
                    <input
                      type="text"
                      id="editFoodName"
                      className="form-control bg-light border-secondary-subtle py-2 text-dark shadow-none"
                      placeholder="e.g. Gourmet Pizza"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <div className="invalid-feedback text-danger">Please enter a food name.</div>
                  </div>

                  {/* 2. Category */}
                  <div className="col-md-6">
                    <label htmlFor="editFoodCategory" className="form-label text-muted small fw-semibold text-uppercase">Category</label>
                    <select
                      id="editFoodCategory"
                      className="form-select bg-light border-secondary-subtle py-2 text-dark shadow-none"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                    >
                      <option value="Burger">Burgers</option>
                      <option value="Pizza">Pizzas</option>
                      <option value="Pasta">Pastas</option>
                      <option value="Salad">Salads</option>
                      <option value="Sushi">Sushi</option>
                      <option value="Chicken">Chicken</option>
                      <option value="Mexican">Mexican</option>
                      <option value="Dessert">Desserts</option>
                      <option value="Drinks">Drinks</option>
                      <option value="Sides">Sides</option>
                    </select>
                    <div className="invalid-feedback text-danger">Please select a category.</div>
                  </div>

                  {/* 3. Price */}
                  <div className="col-md-6">
                    <label htmlFor="editFoodPrice" className="form-label text-muted small fw-semibold text-uppercase">Price ($)</label>
                    <input
                      type="number"
                      id="editFoodPrice"
                      className="form-control bg-light border-secondary-subtle py-2 text-dark shadow-none"
                      placeholder="e.g. 14.99"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      min="1"
                      step="0.01"
                      required
                    />
                    <div className="invalid-feedback text-danger">Please enter a valid price.</div>
                  </div>

                  {/* 4. Popular Choice */}
                  <div className="col-md-6 d-flex align-items-end pb-2">
                    <div className="form-check form-switch mb-2">
                      <input
                        className="form-check-input shadow-none"
                        type="checkbox"
                        role="switch"
                        id="editFoodPopular"
                        checked={isPopular}
                        onChange={(e) => setIsPopular(e.target.checked)}
                        style={{ cursor: 'pointer' }}
                      />
                      <label className="form-check-label text-dark fw-semibold" htmlFor="editFoodPopular" style={{ cursor: 'pointer' }}>
                        Mark as Popular / Featured Choice
                      </label>
                    </div>
                  </div>

                  {/* 5. Image URL */}
                  <div className="col-12">
                    <label htmlFor="editFoodImage" className="form-label text-muted small fw-semibold text-uppercase">Image URL</label>
                    <input
                      type="url"
                      id="editFoodImage"
                      className="form-control bg-light border-secondary-subtle py-2 text-dark shadow-none"
                      placeholder="Paste Unsplash or other secure image URL"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      required
                    />
                    <div className="invalid-feedback text-danger">Please enter a valid URL.</div>
                  </div>

                  {/* 6. Ingredients */}
                  <div className="col-12">
                    <label htmlFor="editFoodIngredients" className="form-label text-muted small fw-semibold text-uppercase">
                      Ingredients (Comma Separated)
                    </label>
                    <input
                      type="text"
                      id="editFoodIngredients"
                      className="form-control bg-light border-secondary-subtle py-2 text-dark shadow-none"
                      placeholder="e.g. Cheese, Tomato Sauce, Mozzarella, Pepperoni"
                      value={ingredientsText}
                      onChange={(e) => setIngredientsText(e.target.value)}
                    />
                    <span className="text-muted small" style={{ fontSize: '0.75rem' }}>Separate individual ingredients with a comma.</span>
                  </div>

                  {/* 7. Description */}
                  <div className="col-12">
                    <label htmlFor="editFoodDescription" className="form-label text-muted small fw-semibold text-uppercase">Description</label>
                    <textarea
                      id="editFoodDescription"
                      className="form-control bg-light border-secondary-subtle py-2 text-dark shadow-none"
                      rows="4"
                      placeholder="Describe the dish ingredients..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    ></textarea>
                    <div className="invalid-feedback text-danger">Please write a short description.</div>
                  </div>

                  {/* Submit button */}
                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      className="btn w-100 fw-bold py-2.5 rounded shadow text-white-force text-uppercase d-flex align-items-center justify-content-center gap-2 hover-orange"
                      style={{ backgroundColor: '#FF6B00', border: 'none', transition: 'all 0.2s' }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          Saving Edits...
                        </>
                      ) : (
                        <>
                          <FaSave /> Save Changes
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Live Image Preview Column */}
          <div className="col-lg-4">
            <div className="card border-0 rounded-4 shadow-sm bg-white p-4 text-center sticky-lg-top" style={{ top: '100px', zIndex: 10 }}>
              <h5 className="fw-bold text-dark mb-4 border-bottom pb-2 text-start d-flex align-items-center gap-2">
                <FaImage style={{ color: '#FF6B00' }} /> Image Preview
              </h5>
              
              {image ? (
                <div className="ratio ratio-4x3 rounded-3 overflow-hidden shadow border">
                  <img
                    src={image}
                    alt="Live Preview"
                    className="w-100 h-100 object-fit-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                </div>
              ) : (
                <div
                  className="d-flex flex-column align-items-center justify-content-center text-muted bg-light border border-dashed rounded-3 shadow-inner"
                  style={{ height: '220px', borderStyle: 'dashed', borderWidth: '2px' }}
                >
                  <FaImage size={40} className="mb-2 text-secondary opacity-50" />
                  <span className="small">Paste an image URL to preview</span>
                </div>
              )}
              
              {name && (
                <div className="mt-4 text-start">
                  <h6 className="fw-bold text-dark mb-1">{name}</h6>
                  <span className="badge bg-warning text-dark text-uppercase small mb-2">{category}</span>
                  {price && <h5 className="fw-bold text-warning">${Number(price).toFixed(2)}</h5>}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .orange-text {
          color: #FF6B00 !important;
        }
        .orange-text:hover {
          color: #d85a00 !important;
        }
        .hover-orange:hover {
          background-color: #e05e00 !important;
        }
        .fade-in {
          animation: fadeIn 0.4s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default UpdateFood;
