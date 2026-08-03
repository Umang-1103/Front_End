import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSignOutAlt, FaSun, FaMoon } from 'react-icons/fa';
import { useCart } from '../hooks/useCart';

const Navbar = () => {
  const { cartCount, user, logout, theme, toggleTheme } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const isDark = theme === 'dark';

  // Close mobile navbar on clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && !e.target.closest('.navbar')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleLogoutClick = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg sticky-top shadow-lg py-3 transition-all ${isDark ? 'navbar-dark bg-dark' : 'navbar-light bg-light border-bottom border-light-subtle'}`}>
      <div className="container">
        {/* Brand Logo */}
        <Link className={`navbar-brand d-flex align-items-center fw-bold text-uppercase tracking-wider fs-4 ${isDark ? 'text-white' : 'text-dark'}`} to="/" onClick={handleLinkClick}>
          <span className="text-warning me-2">Food</span>Chain
        </Link>

        <button
          className="navbar-toggler border-0 focus-none animate-toggler"
          type="button"
          aria-controls="foodchainNavbar"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="hamburger-box">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </button>

        {/* Collapsible Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="foodchainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-2 gap-lg-3 py-2 py-lg-0">
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link fw-semibold px-2 transition-all ${isActive ? 'text-warning active' : (isDark ? 'text-light' : 'text-dark')}`} to="/" onClick={handleLinkClick}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link fw-semibold px-2 transition-all ${isActive ? 'text-warning active' : (isDark ? 'text-light' : 'text-dark')}`} to="/menu" onClick={handleLinkClick}>
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link fw-semibold px-2 transition-all ${isActive ? 'text-warning active' : (isDark ? 'text-light' : 'text-dark')}`} to="/about" onClick={handleLinkClick}>
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link fw-semibold px-2 transition-all ${isActive ? 'text-warning active' : (isDark ? 'text-light' : 'text-dark')}`} to="/contact" onClick={handleLinkClick}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="d-flex align-items-center gap-3 mt-2 mt-lg-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="btn btn-outline-warning rounded-circle p-0 d-flex align-items-center justify-content-center border-0 text-warning"
              style={{ width: '42px', height: '42px' }}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            {/* Cart Icon Link */}
            <Link className="btn btn-outline-warning position-relative rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px' }} to="/cart" aria-label="View Cart" onClick={handleLinkClick}>
              <FaShoppingCart size={18} />
              {cartCount > 0 && (
                <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border ${isDark ? 'border-dark' : 'border-white'}`}>
                  {cartCount}
                  <span className="visually-hidden">unread messages</span>
                </span>
              )}
            </Link>

            {/* Authentication Action */}
            {user ? (
              <div className="dropdown">
                <button
                  className="btn btn-warning dropdown-toggle d-flex align-items-center gap-2 fw-bold"
                  type="button"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaUser />
                  <span className="d-inline-block text-truncate" style={{ maxWidth: '100px' }}>
                    {user.name.split(' ')[0]}
                  </span>
                </button>
                <ul className={`dropdown-menu dropdown-menu-end shadow mt-2 ${isDark ? 'dropdown-menu-dark border-secondary' : 'bg-white border-light-subtle'}`} aria-labelledby="userDropdown">
                  <li>
                    <span className={`dropdown-item-text small py-1 ${isDark ? 'text-muted' : 'text-secondary'}`}>Logged in as <br /><strong className={isDark ? 'text-light' : 'text-dark'}>{user.email}</strong></span>
                  </li>
                  <li>
                    <hr className={`dropdown-divider ${isDark ? 'bg-secondary' : 'bg-light-subtle'}`} />
                  </li>
                  <li>
                    <button className="dropdown-item text-danger d-flex align-items-center gap-2 fw-semibold" onClick={handleLogoutClick}>
                      <FaSignOutAlt /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link className="btn btn-warning fw-bold px-4 d-flex align-items-center gap-2" to="/login" onClick={handleLinkClick}>
                <FaUser size={14} /> Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
