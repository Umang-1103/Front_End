import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaSearch, FaEdit, FaTrashAlt, FaSort, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import useFetch from '../../hooks/useFetch';
import { foodService } from '../../services/api';
import { TableSkeleton } from '../../components/admin/SkeletonLoader';
import { toast } from 'react-toastify';
import { Modal } from 'bootstrap';

const ManageFoods = () => {
  const { data: foods, loading, error, execute: reFetch, setData: setFoods } = useFetch(foodService.getAll);

  // Filter & UI States
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState('id'); // 'price', 'rating', 'id', 'name'
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc', 'desc'
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Delete State
  const [foodToDelete, setFoodToDelete] = useState(null);

  // Sorting Handler
  const handleSort = (field) => {
    const isAsc = sortField === field && sortOrder === 'asc';
    setSortOrder(isAsc ? 'desc' : 'asc');
    setSortField(field);
    setCurrentPage(1); // Reset page on sort change
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset page on search change
  };

  // Perform Client-side filtering & sorting
  const processedFoods = foods
    ? foods
        .filter((food) => {
          return (
            food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            food.category.toLowerCase().includes(searchQuery.toLowerCase())
          );
        })
        .sort((a, b) => {
          let aValue = a[sortField];
          let bValue = b[sortField];

          if (typeof aValue === 'string') {
            aValue = aValue.toLowerCase();
            bValue = bValue.toLowerCase();
          }

          if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
          if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
          return 0;
        })
    : [];

  // Pagination bounds
  const totalItems = processedFoods.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = processedFoods.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  // Delete flow
  const triggerDeleteConfirm = (food) => {
    setFoodToDelete(food);
    const modalElement = document.getElementById('deleteConfirmModal');
    if (modalElement) {
      const bsModal = new Modal(modalElement);
      bsModal.show();
    }
  };

  const handleDeleteSubmit = async () => {
    if (!foodToDelete) return;
    try {
      await foodService.delete(foodToDelete.id);
      // Update local state to reflect deletion instantly
      setFoods((prevFoods) => prevFoods.filter((f) => f.id !== foodToDelete.id));
      toast.success(`"${foodToDelete.name}" deleted successfully.`);
      
      // Close Modal
      const modalElement = document.getElementById('deleteConfirmModal');
      const bsModal = Modal.getInstance(modalElement);
      if (bsModal) bsModal.hide();
    } catch (err) {
      toast.error(err.message || 'Failed to delete food item.');
    } finally {
      setFoodToDelete(null);
    }
  };

  return (
    <div className="fade-in">
      {/* Search and Action Bar */}
      <div className="card border-0 rounded-4 shadow-sm bg-white p-4 mb-4">
        <div className="row g-3 align-items-center justify-content-between">
          {/* Search bar */}
          <div className="col-md-6 col-lg-4">
            <div className="input-group border border-secondary-subtle rounded-3 overflow-hidden bg-light">
              <span className="input-group-text bg-transparent border-0 text-muted">
                <FaSearch />
              </span>
              <input
                type="text"
                className="form-control bg-transparent border-0 text-dark py-2 shadow-none"
                placeholder="Search food by name or category..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          {/* Add Food Button */}
          <div className="col-auto">
            <Link
              to="/admin/foods/add"
              className="btn btn-warning text-white-force fw-bold px-4 py-2.5 rounded-3 d-flex align-items-center gap-2 border-0 hover-orange"
              style={{ backgroundColor: '#FF6B00', transition: 'all 0.2s' }}
            >
              <FaPlus /> Add New Food
            </Link>
          </div>
        </div>
      </div>

      {loading && <TableSkeleton rows={8} cols={6} />}
      {error && <div className="alert alert-danger text-center">{error}</div>}

      {/* Catalog Table */}
      {!loading && !error && (
        <div className="card border-0 rounded-4 shadow-sm bg-white p-4">
          <div className="table-responsive">
            <table className="table align-middle table-hover mb-0">
              <thead className="table-light">
                <tr className="small text-uppercase text-muted">
                  <th>Image</th>
                  <th style={{ cursor: 'pointer' }} onClick={() => handleSort('name')}>
                    Dish Name <FaSort size={10} className="ms-1" />
                  </th>
                  <th style={{ cursor: 'pointer' }} onClick={() => handleSort('category')}>
                    Category <FaSort size={10} className="ms-1" />
                  </th>
                  <th style={{ cursor: 'pointer' }} onClick={() => handleSort('price')}>
                    Price <FaSort size={10} className="ms-1" />
                  </th>
                  <th style={{ cursor: 'pointer' }} onClick={() => handleSort('rating')}>
                    Rating <FaSort size={10} className="ms-1" />
                  </th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((food) => (
                    <tr key={food.id} className="transition-all">
                      <td>
                        <img
                          src={food.image}
                          alt={food.name}
                          className="rounded-3 object-fit-cover shadow-sm border border-light"
                          style={{ width: '56px', height: '48px' }}
                        />
                      </td>
                      <td className="fw-bold text-dark">{food.name}</td>
                      <td>
                        <span className="badge bg-light text-dark border px-2.5 py-1.5 rounded text-uppercase">
                          {food.category}
                        </span>
                      </td>
                      <td className="fw-bold text-dark">${food.price.toFixed(2)}</td>
                      <td className="fw-bold text-warning">⭐ {food.rating.toFixed(1)}</td>
                      <td className="text-end">
                        <div className="d-flex justify-content-end gap-2">
                          <Link
                            to={`/admin/foods/edit/${food.id}`}
                            className="btn btn-sm btn-outline-warning border-0 p-2 rounded-circle hover-orange-btn d-flex align-items-center justify-content-center"
                            style={{ width: '36px', height: '36px' }}
                            title="Edit Food details"
                          >
                            <FaEdit size={16} />
                          </Link>
                          <button
                            onClick={() => triggerDeleteConfirm(food)}
                            className="btn btn-sm btn-outline-danger border-0 p-2 rounded-circle hover-red-btn d-flex align-items-center justify-content-center"
                            style={{ width: '36px', height: '36px' }}
                            title="Delete Food item"
                          >
                            <FaTrashAlt size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-5 text-muted">
                      No foods matched your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top border-light">
              <span className="small text-muted">
                Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, totalItems)} of {totalItems} entries
              </span>
              
              <div className="input-group input-group-sm w-auto gap-1">
                <button
                  className="btn btn-outline-secondary border-secondary-subtle rounded-3 d-flex align-items-center justify-content-center px-3"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Previous Page"
                >
                  <FaChevronLeft size={10} />
                </button>
                {[...Array(totalPages)].map((_, idx) => (
                  <button
                    key={idx + 1}
                    className={`btn rounded-3 px-3 fw-bold ${
                      currentPage === idx + 1
                        ? 'btn-warning text-white-force'
                        : 'btn-outline-secondary border-secondary-subtle'
                    }`}
                    style={currentPage === idx + 1 ? { backgroundColor: '#FF6B00', borderColor: '#FF6B00' } : {}}
                    onClick={() => handlePageChange(idx + 1)}
                  >
                    {idx + 1}
                  </button>
                ))}
                <button
                  className="btn btn-outline-secondary border-secondary-subtle rounded-3 d-flex align-items-center justify-content-center px-3"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Next Page"
                >
                  <FaChevronRight size={10} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <div
        className="modal fade"
        id="deleteConfirmModal"
        tabIndex="-1"
        aria-labelledby="deleteConfirmModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg rounded-4 bg-white text-dark">
            <div className="modal-header border-0 bg-danger-subtle p-4">
              <h5 className="modal-title fw-bold text-danger" id="deleteConfirmModalLabel">
                Delete Confirm
              </h5>
              <button
                type="button"
                className="btn-close shadow-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-4 text-start">
              <p className="text-muted small mb-3">Choose how you would like to proceed with deleting <strong className="text-dark">"{foodToDelete?.name}"</strong>:</p>
              
              <div className="list-group gap-2">
                <button 
                  type="button" 
                  onClick={handleDeleteSubmit}
                  className="list-group-item list-group-item-action list-group-item-danger border-0 rounded-3 p-3 d-flex justify-content-between align-items-center"
                >
                  <div>
                    <h6 className="fw-bold mb-1">Quick Delete</h6>
                    <small className="opacity-75">Delete this item instantly from catalog.</small>
                  </div>
                  <FaTrashAlt />
                </button>
                
                {foodToDelete && (
                  <Link
                    to={`/admin/foods/delete/${foodToDelete.id}`}
                    data-bs-dismiss="modal"
                    className="list-group-item list-group-item-action list-group-item-warning border-0 rounded-3 p-3 d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h6 className="fw-bold mb-1" style={{ color: '#FF6B00' }}>Review & Delete</h6>
                      <small className="text-muted">Inspect dish details and verify ingredients before deletion.</small>
                    </div>
                    <FaChevronRight style={{ color: '#FF6B00' }} />
                  </Link>
                )}
              </div>
            </div>
            <div className="modal-footer border-0 p-3 bg-light rounded-bottom-4 justify-content-center">
              <button type="button" className="btn btn-secondary px-4 py-2 rounded-3 border-0" data-bs-dismiss="modal">
                Cancel & Keep Item
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hover-orange:hover {
          background-color: #e05e00 !important;
        }
        .hover-orange-btn:hover {
          background-color: rgba(255, 107, 0, 0.12) !important;
          color: #FF6B00 !important;
        }
        .hover-red-btn:hover {
          background-color: rgba(220, 53, 69, 0.12) !important;
          color: #dc3545 !important;
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

export default ManageFoods;
