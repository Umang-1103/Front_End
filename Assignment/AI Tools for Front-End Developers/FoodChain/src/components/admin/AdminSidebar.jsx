import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaChartLine, FaUtensils, FaClipboardList, FaUsers, FaChartBar, FaSignOutAlt, FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';

const AdminSidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('foodchain_admin');
    toast.success('Admin logged out successfully.');
    navigate('/admin/login');
    if (isOpen) toggleSidebar();
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-lg-none z-3"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Container */}
      <div
        className={`bg-dark text-white border-end border-secondary position-fixed top-0 start-0 h-100 z-3 transition-all ${
          isOpen ? 'translate-middle-x-none' : 'translate-middle-x-mobile'
        }`}
        style={{
          width: '260px',
          zIndex: 1050,
        }}
      >
        {/* Header / Logo */}
        <div className="d-flex align-items-center justify-content-between p-4 border-bottom border-secondary">
          <div className="d-flex align-items-center gap-2">
            <span
              className="fw-extrabold fs-4 text-uppercase tracking-wider text-white"
              style={{ letterSpacing: '1px' }}
            >
              <span style={{ color: '#FF6B00' }}>Food</span>Chain <span className="small text-muted" style={{ fontSize: '0.65rem' }}>Admin</span>
            </span>
          </div>
          <button
            className="btn text-white p-0 border-0 focus-none d-lg-none"
            onClick={toggleSidebar}
            aria-label="Close sidebar"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="d-flex flex-column justify-content-between py-4 px-3" style={{ height: 'calc(100vh - 85px)' }}>
          <ul className="nav nav-pills flex-column gap-2">
            <li className="nav-item">
              <NavLink
                to="/admin/dashboard"
                onClick={() => isOpen && toggleSidebar()}
                className={({ isActive }) =>
                  `nav-link d-flex align-items-center gap-3 px-3 py-2.5 fw-semibold transition-all border-0 ${
                    isActive
                      ? 'sidebar-active-link shadow-sm'
                      : 'text-light hover-bg-secondary'
                  }`
                }
              >
                <FaChartLine size={18} /> Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin/foods"
                onClick={() => isOpen && toggleSidebar()}
                className={({ isActive }) =>
                  `nav-link d-flex align-items-center gap-3 px-3 py-2.5 fw-semibold transition-all border-0 ${
                    isActive
                      ? 'sidebar-active-link shadow-sm'
                      : 'text-light hover-bg-secondary'
                  }`
                }
              >
                <FaUtensils size={18} /> Manage Foods
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin/orders"
                onClick={() => isOpen && toggleSidebar()}
                className={({ isActive }) =>
                  `nav-link d-flex align-items-center gap-3 px-3 py-2.5 fw-semibold transition-all border-0 ${
                    isActive
                      ? 'sidebar-active-link shadow-sm'
                      : 'text-light hover-bg-secondary'
                  }`
                }
              >
                <FaClipboardList size={18} /> Orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin/customers"
                onClick={() => isOpen && toggleSidebar()}
                className={({ isActive }) =>
                  `nav-link d-flex align-items-center gap-3 px-3 py-2.5 fw-semibold transition-all border-0 ${
                    isActive
                      ? 'sidebar-active-link shadow-sm'
                      : 'text-light hover-bg-secondary'
                  }`
                }
              >
                <FaUsers size={18} /> Customers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin/analytics"
                onClick={() => isOpen && toggleSidebar()}
                className={({ isActive }) =>
                  `nav-link d-flex align-items-center gap-3 px-3 py-2.5 fw-semibold transition-all border-0 ${
                    isActive
                      ? 'sidebar-active-link shadow-sm'
                      : 'text-light hover-bg-secondary'
                  }`
                }
              >
                <FaChartBar size={18} /> Analytics
              </NavLink>
            </li>
          </ul>

          {/* Logout Section */}
          <div className="pt-3 border-top border-secondary">
            <button
              onClick={handleLogout}
              className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center gap-2 fw-semibold py-2"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .bg-orange {
          background-color: #FF6B00 !important;
        }
        [data-theme="light"] .hover-bg-secondary:hover {
          background-color: rgba(0, 0, 0, 0.05) !important;
          color: #FF6B00 !important;
        }
        [data-theme="dark"] .hover-bg-secondary:hover {
          background-color: rgba(255, 255, 255, 0.08) !important;
          color: #ffc107 !important;
        }
        /* Mobile vs Desktop Translation states */
        @media (max-width: 991.98px) {
          .translate-middle-x-mobile {
            transform: translateX(-100%);
          }
          .translate-middle-x-none {
            transform: translateX(0);
          }
        }
        @media (min-width: 992px) {
          .translate-middle-x-mobile {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default AdminSidebar;
