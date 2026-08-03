import React from 'react';
import { Link } from 'react-router-dom';
import { FaDollarSign, FaShoppingBag, FaUtensils, FaUsers, FaArrowRight, FaEye } from 'react-icons/fa';
import useFetch from '../../hooks/useFetch';
import { foodService, orderService, customerService } from '../../services/api';
import { DashboardSkeleton } from '../../components/admin/SkeletonLoader';

const Dashboard = () => {
  // Combine all API requests into a single hook call
  const { data, loading, error } = useFetch(async () => {
    const [foods, orders, customers] = await Promise.all([
      foodService.getAll(),
      orderService.getAll(),
      customerService.getAll(),
    ]);
    return { foods, orders, customers };
  });

  if (loading) return <DashboardSkeleton />;
  if (error) return <div className="alert alert-danger text-center m-4">{error}</div>;

  const { foods = [], orders = [], customers = [] } = data || {};

  // Compute stats
  const totalSales = orders.reduce((sum, order) => sum + order.totalAmount, 0);
  const totalOrders = orders.length;
  const totalFoods = foods.length;
  const totalCustomers = customers.length;

  // Recent 5 orders sorted by date desc
  const recentOrders = [...orders]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  // Status badge formatter
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Preparing':
        return <span className="badge bg-warning-subtle text-warning-emphasis px-3 py-1.5 rounded-pill fw-bold">Preparing</span>;
      case 'Out for Delivery':
        return <span className="badge bg-info-subtle text-info-emphasis px-3 py-1.5 rounded-pill fw-bold">Out for Delivery</span>;
      case 'Delivered':
        return <span className="badge bg-success-subtle text-success-emphasis px-3 py-1.5 rounded-pill fw-bold">Delivered</span>;
      default:
        return <span className="badge bg-secondary-subtle text-secondary-emphasis px-3 py-1.5 rounded-pill fw-bold">{status}</span>;
    }
  };

  // Compute category distribution
  const categoryCounts = foods.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + 1;
    return acc;
  }, {});

  const categories = Object.keys(categoryCounts).map((key) => ({
    name: key,
    count: categoryCounts[key],
  }));

  return (
    <div className="fade-in">
      {/* Metrics Row */}
      <div className="row g-4 mb-4">
        {/* Total Sales Card */}
        <div className="col-md-6 col-xl-3">
          <div className="card border-0 rounded-4 shadow-sm h-100 bg-white hover-card-lift">
            <div className="card-body p-4 d-flex align-items-center justify-content-between">
              <div>
                <span className="text-muted small text-uppercase tracking-wider fw-bold">Total Sales</span>
                <h3 className="fw-extrabold text-dark mt-1 mb-0">${totalSales.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
              </div>
              <div
                className="p-3 rounded-4"
                style={{ backgroundColor: 'rgba(255, 107, 0, 0.12)', color: '#FF6B00' }}
              >
                <FaDollarSign size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Total Orders Card */}
        <div className="col-md-6 col-xl-3">
          <div className="card border-0 rounded-4 shadow-sm h-100 bg-white hover-card-lift">
            <div className="card-body p-4 d-flex align-items-center justify-content-between">
              <div>
                <span className="text-muted small text-uppercase tracking-wider fw-bold">Total Orders</span>
                <h3 className="fw-extrabold text-dark mt-1 mb-0">{totalOrders}</h3>
              </div>
              <div
                className="p-3 rounded-4"
                style={{ backgroundColor: 'rgba(255, 107, 0, 0.12)', color: '#FF6B00' }}
              >
                <FaShoppingBag size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Active Dishes Card */}
        <div className="col-md-6 col-xl-3">
          <div className="card border-0 rounded-4 shadow-sm h-100 bg-white hover-card-lift">
            <div className="card-body p-4 d-flex align-items-center justify-content-between">
              <div>
                <span className="text-muted small text-uppercase tracking-wider fw-bold">Active Dishes</span>
                <h3 className="fw-extrabold text-dark mt-1 mb-0">{totalFoods}</h3>
              </div>
              <div
                className="p-3 rounded-4"
                style={{ backgroundColor: 'rgba(255, 107, 0, 0.12)', color: '#FF6B00' }}
              >
                <FaUtensils size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Total Customers Card */}
        <div className="col-md-6 col-xl-3">
          <div className="card border-0 rounded-4 shadow-sm h-100 bg-white hover-card-lift">
            <div className="card-body p-4 d-flex align-items-center justify-content-between">
              <div>
                <span className="text-muted small text-uppercase tracking-wider fw-bold">Active Clients</span>
                <h3 className="fw-extrabold text-dark mt-1 mb-0">{totalCustomers}</h3>
              </div>
              <div
                className="p-3 rounded-4"
                style={{ backgroundColor: 'rgba(255, 107, 0, 0.12)', color: '#FF6B00' }}
              >
                <FaUsers size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content grid */}
      <div className="row g-4">
        {/* Recent Orders table */}
        <div className="col-xl-8">
          <div className="card border-0 rounded-4 shadow-sm bg-white p-4 h-100">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold mb-0 text-dark">Recent Activity Orders</h5>
              <Link to="/admin/orders" className="btn btn-sm btn-outline-warning border-0 fw-bold d-flex align-items-center gap-1 orange-text">
                All Orders <FaArrowRight size={12} />
              </Link>
            </div>
            
            <div className="table-responsive">
              <table className="table align-middle table-hover mb-0">
                <thead className="table-light">
                  <tr className="small text-uppercase text-muted">
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="transition-all">
                      <td className="fw-bold">#{order.id}</td>
                      <td>
                        <div className="fw-semibold text-dark">{order.userName}</div>
                        <span className="text-muted small" style={{ fontSize: '0.75rem' }}>{order.userEmail}</span>
                      </td>
                      <td>{new Date(order.date).toLocaleDateString()}</td>
                      <td className="fw-bold text-dark">${order.totalAmount.toFixed(2)}</td>
                      <td>{getStatusBadge(order.status)}</td>
                      <td className="text-end">
                        <Link
                          to="/admin/orders"
                          className="btn btn-outline-secondary border-0 p-2 rounded-circle hover-orange-btn d-inline-flex align-items-center justify-content-center"
                          style={{ width: '36px', height: '36px' }}
                          title="View Order details"
                        >
                          <FaEye />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Category distribution */}
        <div className="col-xl-4">
          <div className="card border-0 rounded-4 shadow-sm bg-white p-4 h-100">
            <h5 className="fw-bold mb-4 text-dark text-start">Dish Categories</h5>
            <div className="d-flex flex-column gap-3">
              {categories.slice(0, 6).map((cat, idx) => {
                const percentage = Math.round((cat.count / totalFoods) * 100);
                return (
                  <div key={idx} className="category-progress-item">
                    <div className="d-flex justify-content-between mb-1 small text-dark fw-semibold">
                      <span>{cat.name}</span>
                      <span>{cat.count} items ({percentage}%)</span>
                    </div>
                    <div className="progress rounded-pill" style={{ height: '8px', backgroundColor: '#e9ecef' }}>
                      <div
                        className="progress-bar rounded-pill"
                        role="progressbar"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: '#FF6B00',
                        }}
                        aria-valuenow={percentage}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </div>
                );
              })}
              {categories.length > 6 && (
                <div className="text-center text-muted small mt-2">
                  + {categories.length - 6} other categories active.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .orange-text {
          color: #FF6B00 !important;
        }
        .orange-text:hover {
          color: #d85a00 !important;
        }
        .hover-orange-btn:hover {
          background-color: rgba(255, 107, 0, 0.12) !important;
          color: #FF6B00 !important;
          border-color: transparent !important;
        }
        /* Fade-in transitions */
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

export default Dashboard;
