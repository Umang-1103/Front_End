import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaChevronLeft, FaExclamationTriangle, FaTrashAlt, FaInfoCircle } from 'react-icons/fa';
import useFetch from '../../hooks/useFetch';
import { foodService } from '../../services/api';
import Loader from '../../components/Loader';
import { toast } from 'react-toastify';

const DeleteFood = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [confirmChecked, setConfirmChecked] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Fetch the item details
  const { data: food, loading, error } = useFetch(() => foodService.getById(id), [id]);

  const handleDelete = async () => {
    if (!confirmChecked) return;
    setIsDeleting(true);

    try {
      await foodService.delete(id);
      toast.success(`"${food.name}" has been permanently removed from the menu.`);
      navigate('/admin/foods');
    } catch (err) {
      toast.error(err.message || 'Failed to delete the food item.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="fade-in">
      {/* Back button */}
      <div className="mb-4">
        <Link
          to="/admin/foods"
          className="btn btn-link text-warning text-decoration-none d-flex align-items-center gap-2 p-0 fw-semibold orange-text"
        >
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
        <div className="row g-4 justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="card border-0 rounded-4 shadow-lg bg-white overflow-hidden">
              {/* Warning Banner */}
              <div className="bg-danger-subtle text-danger-emphasis p-4 d-flex align-items-center gap-3 border-bottom border-danger-subtle">
                <FaExclamationTriangle size={36} className="text-danger flex-shrink-0" />
                <div>
                  <h5 className="fw-bold mb-1">Danger Zone: Permanent Deletion Request</h5>
                  <p className="small mb-0 opacity-90">
                    You are reviewing a request to permanently delete an item from the menu catalog. This action will update the menu database instantly.
                  </p>
                </div>
              </div>

              <div className="card-body p-4 p-md-5">
                <div className="row g-4 align-items-center">
                  {/* Food details & Image */}
                  <div className="col-md-5 text-center">
                    <div className="ratio ratio-4x3 rounded-3 overflow-hidden shadow border mb-3">
                      <img
                        src={food.image}
                        alt={food.name}
                        className="w-100 h-100 object-fit-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                    </div>
                    <h5 className="fw-bold text-dark mb-1">{food.name}</h5>
                    <span className="badge bg-light text-dark border px-2.5 py-1.5 rounded text-uppercase mb-2">
                      {food.category}
                    </span>
                    <h4 className="fw-extrabold text-warning mt-2">${food.price.toFixed(2)}</h4>
                  </div>

                  {/* Information & confirmation checkboxes */}
                  <div className="col-md-7 border-start border-light ps-md-4">
                    <h6 className="fw-bold text-dark d-flex align-items-center gap-2 mb-3">
                      <FaInfoCircle className="text-muted" /> Item Details Review
                    </h6>
                    
                    <ul className="list-group list-group-flush mb-4 small">
                      <li className="list-group-item bg-transparent px-0 py-2 d-flex justify-content-between text-dark">
                        <span className="text-muted">Dish ID:</span>
                        <strong className="fw-semibold">#{food.id}</strong>
                      </li>
                      <li className="list-group-item bg-transparent px-0 py-2 d-flex justify-content-between text-dark">
                        <span className="text-muted">Popular Choice Status:</span>
                        <strong className="fw-semibold">{food.isPopular ? 'Featured (Popular)' : 'Standard Menu Item'}</strong>
                      </li>
                      <li className="list-group-item bg-transparent px-0 py-2 d-flex justify-content-between text-dark">
                        <span className="text-muted">Current Rating:</span>
                        <strong className="fw-semibold text-warning">⭐ {food.rating.toFixed(1)} / 5.0</strong>
                      </li>
                      <li className="list-group-item bg-transparent px-0 py-2 text-dark">
                        <div className="text-muted mb-1">Description:</div>
                        <span className="text-secondary">{food.description}</span>
                      </li>
                      {food.ingredients && food.ingredients.length > 0 && (
                        <li className="list-group-item bg-transparent px-0 py-2 text-dark">
                          <div className="text-muted mb-1">Ingredients:</div>
                          <div className="d-flex flex-wrap gap-1 mt-1">
                            {food.ingredients.map((ing, idx) => (
                              <span key={idx} className="badge bg-light text-secondary border fw-medium">
                                {ing}
                              </span>
                            ))}
                          </div>
                        </li>
                      )}
                    </ul>

                    {/* Checkbox Warning */}
                    <div className="bg-light p-3 rounded-3 border border-secondary-subtle mb-4">
                      <div className="form-check text-start">
                        <input
                          className="form-check-input shadow-none border-secondary-subtle"
                          type="checkbox"
                          id="confirmDeleteCheck"
                          checked={confirmChecked}
                          onChange={(e) => setConfirmChecked(e.target.checked)}
                          style={{ cursor: 'pointer', borderColor: '#FF6B00' }}
                        />
                        <label
                          className="form-check-label text-dark fw-semibold small"
                          htmlFor="confirmDeleteCheck"
                          style={{ cursor: 'pointer' }}
                        >
                          I confirm that I want to permanently delete "{food.name}" from the active database. I understand this action is irreversible and update caches instantly.
                        </label>
                      </div>
                    </div>

                    {/* Delete actions */}
                    <div className="d-flex gap-2">
                      <Link
                        to="/admin/foods"
                        className="btn btn-secondary flex-grow-1 py-2.5 rounded-3 border-0 fw-bold text-uppercase small"
                      >
                        Cancel
                      </Link>
                      <button
                        onClick={handleDelete}
                        className="btn btn-danger flex-grow-1 py-2.5 rounded-3 border-0 fw-bold text-uppercase small d-flex align-items-center justify-content-center gap-2"
                        disabled={!confirmChecked || isDeleting}
                        style={{
                          transition: 'all 0.2s',
                          opacity: confirmChecked ? 1 : 0.6,
                        }}
                      >
                        {isDeleting ? (
                          <>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Deleting...
                          </>
                        ) : (
                          <>
                            <FaTrashAlt /> Confirm Delete
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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

export default DeleteFood;
