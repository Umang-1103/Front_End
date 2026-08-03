import React from 'react';
import { FaBars, FaBell, FaUserShield, FaSun, FaMoon } from 'react-icons/fa';
import { useCart } from '../../hooks/useCart';

const AdminNavbar = ({ toggleSidebar, title = 'Admin Dashboard' }) => {
  const adminData = JSON.parse(localStorage.getItem('foodchain_admin')) || { name: 'Admin' };
  const { theme, toggleTheme } = useCart();

  return (
    <nav className="navbar navbar-expand navbar-light bg-white border-bottom border-secondary-subtle py-3 px-4 shadow-sm sticky-top">
      <div className="container-fluid p-0 d-flex justify-content-between align-items-center">
        {/* Toggle & Title */}
        <div className="d-flex align-items-center gap-3">
          <button
            className="btn btn-outline-secondary border-0 p-2 d-lg-none focus-none"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <FaBars size={20} style={{ color: '#FF6B00' }} />
          </button>
          <h4 className="fw-bold mb-0 text-dark" style={{ fontSize: '1.25rem' }}>
            {title}
          </h4>
        </div>

        {/* Action Widgets */}
        <div className="d-flex align-items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="btn btn-light position-relative p-2 rounded-circle border-0 d-flex align-items-center justify-content-center"
            style={{ width: '40px', height: '40px' }}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <FaSun size={18} className="text-secondary" /> : <FaMoon size={18} className="text-secondary" />}
          </button>

          {/* Notifications */}
          <button
            className="btn btn-light position-relative p-2 rounded-circle border-0 d-flex align-items-center justify-content-center"
            style={{ width: '40px', height: '40px' }}
            aria-label="View notifications"
          >
            <FaBell size={18} className="text-secondary" />
            <span className="position-absolute top-1 start-100 translate-middle p-1.5 bg-danger border border-white rounded-circle">
              <span className="visually-hidden">New alerts</span>
            </span>
          </button>

          {/* Vertical divider */}
          <div className="vr bg-secondary-subtle" style={{ height: '24px' }}></div>

          {/* Admin User Profile info */}
          <div className="d-flex align-items-center gap-2">
            <div
              className="bg-warning-subtle text-warning-emphasis rounded-circle d-flex align-items-center justify-content-center fw-bold text-white"
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'rgba(255, 107, 0, 0.15)',
                color: '#FF6B00',
              }}
            >
              <FaUserShield style={{ color: '#FF6B00' }} />
            </div>
            <div className="d-none d-sm-block">
              <div className="fw-bold text-dark small" style={{ lineHeight: '1.2' }}>
                {adminData.name}
              </div>
              <span className="text-muted small" style={{ fontSize: '0.75rem' }}>
                System Admin
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
