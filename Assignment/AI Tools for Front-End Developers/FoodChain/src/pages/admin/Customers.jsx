import React, { useState } from 'react';
import { FaSearch, FaUser, FaChevronLeft, FaChevronRight, FaMailBulk } from 'react-icons/fa';
import useFetch from '../../hooks/useFetch';
import { customerService, orderService } from '../../services/api';
import { TableSkeleton } from '../../components/admin/SkeletonLoader';
import { useCart } from '../../hooks/useCart';


const Customers = () => {
  const { theme } = useCart();
  // Fetch customers and orders together
  const { data, loading, error } = useFetch(async () => {
    const [customers, orders] = await Promise.all([
      customerService.getAll(),
      orderService.getAll(),
    ]);
    return { customers, orders };
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  if (loading) return <TableSkeleton rows={8} cols={7} />;
  if (error) return <div className="alert alert-danger text-center m-4">{error}</div>;

  const { customers = [], orders = [] } = data || {};

  // Build aggregate data for each customer
  const compiledCustomers = customers.map((cust) => {
    const customerOrders = orders.filter((o) => o.userId === cust.id);
    const orderCount = customerOrders.length;
    const totalSpent = customerOrders.reduce((sum, o) => sum + o.totalAmount, 0);
    const lastOrderDate = customerOrders.length > 0 
      ? new Date(customerOrders.sort((a, b) => new Date(b.date) - new Date(a.date))[0].date).toLocaleDateString()
      : 'N/A';

    return {
      ...cust,
      orderCount,
      totalSpent,
      lastOrderDate,
    };
  });

  // Client-side filtering
  const filteredCustomers = compiledCustomers.filter((cust) => {
    return (
      cust.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cust.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Pagination bounds
  const totalItems = filteredCustomers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCustomers = filteredCustomers.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  return (
    <div className="fade-in">
      {/* Search Filter Header */}
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
                placeholder="Search customers by name or email..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>

          <div className="col-auto text-muted small">
            Active Registered Clients: <strong className="text-dark">{totalItems}</strong>
          </div>
        </div>
      </div>

      {/* Customers Table Grid */}
      <div className="card border-0 rounded-4 shadow-sm bg-white p-4">
        <div className="table-responsive">
          <table className="table align-middle table-hover mb-0">
            <thead className="table-light">
              <tr className="small text-uppercase text-muted">
                <th>Customer ID</th>
                <th>Full Name</th>
                <th>Email Address</th>
                <th className="text-center">Orders Placed</th>
                <th>Total Money Spent</th>
                <th>Last Order Date</th>
                <th className="text-end">Contact</th>
              </tr>
            </thead>
            <tbody>
              {currentCustomers.length > 0 ? (
                currentCustomers.map((cust) => (
                  <tr key={cust.id} className="transition-all">
                    <td className="fw-bold">#C{cust.id}</td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center text-muted fw-bold"
                          style={{
                            width: '32px',
                            height: '32px',
                            backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
                          }}
                        >
                          <FaUser size={12} />
                        </div>
                        <span className="fw-semibold text-dark">{cust.name}</span>
                      </div>
                    </td>
                    <td className="text-muted">{cust.email}</td>
                    <td className="text-center fw-bold text-dark">{cust.orderCount}</td>
                    <td className="fw-bold text-dark">${cust.totalSpent.toFixed(2)}</td>
                    <td className="text-muted small">{cust.lastOrderDate}</td>
                    <td className="text-end">
                      <a
                        href={`mailto:${cust.email}`}
                        className="btn btn-sm btn-outline-warning border-0 p-2 rounded-circle hover-orange-btn d-inline-flex align-items-center justify-content-center"
                        style={{ width: '36px', height: '36px' }}
                        title={`Send email to ${cust.name}`}
                      >
                        <FaMailBulk />
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-5 text-muted">
                    No customers found matching your criteria.
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

export default Customers;
