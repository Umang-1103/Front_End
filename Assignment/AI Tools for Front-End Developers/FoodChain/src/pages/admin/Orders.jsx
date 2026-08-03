import React, { useState } from 'react';
import { FaSearch, FaEye, FaChevronLeft, FaChevronRight, FaFileInvoice, FaTruck, FaClock, FaCheckCircle } from 'react-icons/fa';
import useFetch from '../../hooks/useFetch';
import { orderService } from '../../services/api';
import { TableSkeleton } from '../../components/admin/SkeletonLoader';
import { toast } from 'react-toastify';
import { Modal } from 'bootstrap';

const Orders = () => {
  const { data: orders, loading, error, setData: setOrders } = useFetch(orderService.getAll);

  // Search and Pagination
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Selected Order for Receipt Modal
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Status update handler
  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await orderService.updateStatus(orderId, newStatus);
      // Update local state instantly
      setOrders((prevOrders) =>
        prevOrders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order))
      );
      toast.success(`Order #${orderId} status updated to "${newStatus}"`);
    } catch (err) {
      toast.error(err.message || 'Failed to update order status.');
    }
  };

  // Open receipt modal
  const openReceiptModal = (order) => {
    setSelectedOrder(order);
    const modalElement = document.getElementById('receiptModal');
    if (modalElement) {
      const bsModal = new Modal(modalElement);
      bsModal.show();
    }
  };

  // Filtering on local state
  const processedOrders = orders
    ? orders
        .filter((order) => {
          return (
            order.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.userEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.id.toString().includes(searchQuery)
          );
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort date descending by default
    : [];

  // Pagination bounds
  const totalItems = processedOrders.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = processedOrders.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Preparing':
        return 'bg-warning-subtle text-warning-emphasis';
      case 'Out for Delivery':
        return 'bg-info-subtle text-info-emphasis';
      case 'Delivered':
        return 'bg-success-subtle text-success-emphasis';
      default:
        return 'bg-secondary-subtle text-secondary-emphasis';
    }
  };

  return (
    <div className="fade-in">
      {/* Filters Card */}
      <div className="card border-0 rounded-4 shadow-sm bg-white p-4 mb-4">
        <div className="row g-3 justify-content-between align-items-center">
          {/* Search bar */}
          <div className="col-md-6 col-lg-4">
            <div className="input-group border border-secondary-subtle rounded-3 overflow-hidden bg-light">
              <span className="input-group-text bg-transparent border-0 text-muted">
                <FaSearch />
              </span>
              <input
                type="text"
                className="form-control bg-transparent border-0 text-dark py-2 shadow-none"
                placeholder="Search by order ID, name or email..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>

          <div className="col-auto text-muted small">
            Total Orders: <strong className="text-dark">{totalItems}</strong>
          </div>
        </div>
      </div>

      {loading && <TableSkeleton rows={8} cols={7} />}
      {error && <div className="alert alert-danger text-center">{error}</div>}

      {/* Orders Table */}
      {!loading && !error && (
        <div className="card border-0 rounded-4 shadow-sm bg-white p-4">
          <div className="table-responsive">
            <table className="table align-middle table-hover mb-0">
              <thead className="table-light">
                <tr className="small text-uppercase text-muted">
                  <th>Order ID</th>
                  <th>Customer Info</th>
                  <th>Order Date</th>
                  <th>Total Amount</th>
                  <th>Change Status</th>
                  <th>Current Status</th>
                  <th className="text-end">Invoice</th>
                </tr>
              </thead>
              <tbody>
                {currentOrders.length > 0 ? (
                  currentOrders.map((order) => (
                    <tr key={order.id} className="transition-all">
                      <td className="fw-bold">#{order.id}</td>
                      <td>
                        <div className="fw-semibold text-dark">{order.userName}</div>
                        <span className="text-muted small" style={{ fontSize: '0.75rem' }}>{order.userEmail}</span>
                      </td>
                      <td>{new Date(order.date).toLocaleString()}</td>
                      <td className="fw-bold text-dark">${order.totalAmount.toFixed(2)}</td>
                      <td>
                        <select
                          className="form-select form-select-sm w-auto bg-light border-secondary-subtle shadow-none text-dark py-1 px-2.5"
                          style={{ fontSize: '0.85rem' }}
                          value={order.status}
                          onChange={(e) => handleStatusChange(order.id, e.target.value)}
                        >
                          <option value="Preparing">Preparing</option>
                          <option value="Out for Delivery">Out for Delivery</option>
                          <option value="Delivered">Delivered</option>
                        </select>
                      </td>
                      <td>
                        <span className={`badge px-3 py-1.5 rounded-pill fw-bold text-uppercase ${getStatusClass(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="text-end">
                        <button
                          onClick={() => openReceiptModal(order)}
                          className="btn btn-sm btn-outline-warning border-0 p-2 rounded-circle hover-orange-btn d-flex align-items-center justify-content-center ms-auto"
                          style={{ width: '36px', height: '36px' }}
                          title="View Invoice Details"
                        >
                          <FaEye size={16} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-5 text-muted">
                      No customer orders found.
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

      {/* Invoice/Receipt Modal */}
      <div
        className="modal fade"
        id="receiptModal"
        tabIndex="-1"
        aria-labelledby="receiptModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg rounded-4 bg-white text-dark">
            <div className="modal-header border-bottom p-4 bg-light">
              <h5 className="modal-title fw-bold text-dark d-flex align-items-center gap-2" id="receiptModalLabel">
                <FaFileInvoice style={{ color: '#FF6B00' }} /> Order Receipt Details
              </h5>
              <button
                type="button"
                className="btn-close shadow-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            
            {selectedOrder && (
              <div className="modal-body p-4 text-start">
                {/* Meta details */}
                <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
                  <div>
                    <h6 className="fw-bold mb-0">Order ID: #{selectedOrder.id}</h6>
                    <span className="small text-muted">{new Date(selectedOrder.date).toLocaleString()}</span>
                  </div>
                  <span className={`badge px-3 py-2 rounded-pill fw-bold text-uppercase ${getStatusClass(selectedOrder.status)}`}>
                    {selectedOrder.status}
                  </span>
                </div>

                {/* Shipping details */}
                <div className="mb-4">
                  <h6 className="fw-bold text-uppercase tracking-wider small text-muted">Delivery Address</h6>
                  <p className="mb-1 text-dark fw-semibold">{selectedOrder.userName}</p>
                  <p className="mb-1 text-muted small">{selectedOrder.address}</p>
                  <p className="mb-0 text-muted small">Phone: <strong className="text-dark">{selectedOrder.phone}</strong></p>
                </div>

                {/* Items breakdown */}
                <div className="mb-4">
                  <h6 className="fw-bold text-uppercase tracking-wider small text-muted mb-2">Items Summary</h6>
                  <div className="bg-light p-3 rounded-3 border">
                    {selectedOrder.items.map((item, idx) => (
                      <div key={idx} className="d-flex justify-content-between align-items-center mb-2 small">
                        <span className="text-dark">{item.name} <strong className="text-warning-emphasis fw-bold">x{item.quantity}</strong></span>
                        <span className="fw-bold text-dark">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    
                    <hr className="my-2 border-secondary-subtle" />
                    
                    <div className="d-flex justify-content-between text-muted small mb-1">
                      <span>Subtotal:</span>
                      <span>${selectedOrder.subTotal.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between text-muted small mb-1">
                      <span>Delivery Fee:</span>
                      <span>{selectedOrder.deliveryFee === 0 ? 'FREE' : `$${selectedOrder.deliveryFee.toFixed(2)}`}</span>
                    </div>
                    <div className="d-flex justify-content-between text-muted small mb-3">
                      <span>Tax (10%):</span>
                      <span>${selectedOrder.tax.toFixed(2)}</span>
                    </div>

                    <div className="d-flex justify-content-between fw-bold text-dark fs-6 pt-2 border-top border-secondary-subtle">
                      <span>Total Amount:</span>
                      <span className="fs-5" style={{ color: '#FF6B00' }}>${selectedOrder.totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Payment info */}
                <div>
                  <h6 className="fw-bold text-uppercase tracking-wider small text-muted">Payment Mode</h6>
                  <p className="mb-0 text-dark fw-semibold">{selectedOrder.paymentMethod}</p>
                </div>
              </div>
            )}
            
            <div className="modal-footer border-0 p-3 bg-light rounded-bottom-4">
              <button type="button" className="btn btn-secondary w-100 py-2.5 border-0 rounded-3 text-uppercase fw-bold" data-bs-dismiss="modal">
                Close Invoice
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hover-orange-btn:hover {
          background-color: rgba(255, 107, 0, 0.12) !important;
          color: #FF6B00 !important;
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

export default Orders;
