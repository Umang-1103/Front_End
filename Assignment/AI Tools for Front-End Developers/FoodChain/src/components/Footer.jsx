import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 border-top border-secondary">
      <div className="container">
        <div className="row g-4">
          {/* Brand Info */}
          <div className="col-lg-4 col-md-6">
            <h4 className="text-uppercase fw-bold text-warning mb-3">
              Food<span className="text-white">Chain</span>
            </h4>
            <p className="text-muted mb-4">
              Indulge in a premium dining experience. From organic, locally-sourced ingredients to flame-grilled specialties, we cook with love and passion to feed your soul.
            </p>
            <div className="d-flex gap-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-warning rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px' }} aria-label="Facebook">
                <FaFacebookF size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-warning rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px' }} aria-label="Twitter">
                <FaTwitter size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-warning rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px' }} aria-label="Instagram">
                <FaInstagram size={16} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-warning rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px' }} aria-label="Youtube">
                <FaYoutube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="text-uppercase fw-bold text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <Link to="/" className="text-muted text-decoration-none hover-warning transition-all">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="text-muted text-decoration-none hover-warning transition-all">Our Menu</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted text-decoration-none hover-warning transition-all">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted text-decoration-none hover-warning transition-all">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="col-lg-3 col-md-6 col-6">
            <h5 className="text-uppercase fw-bold text-white mb-3">Opening Hours</h5>
            <ul className="list-unstyled text-muted d-flex flex-column gap-2">
              <li>Monday - Friday: 10:00 AM - 11:00 PM</li>
              <li>Saturday: 09:00 AM - Midnight</li>
              <li>Sunday: 09:00 AM - 10:00 PM</li>
              <li className="text-warning fw-semibold">Delivery available 24/7</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase fw-bold text-white mb-3">Contact Us</h5>
            <ul className="list-unstyled text-muted d-flex flex-column gap-3">
              <li className="d-flex align-items-start gap-2">
                <FaMapMarkerAlt className="text-warning mt-1 flex-shrink-0" />
                <span>123 Culinary Boulevard, Food District, Gourmet City, GC 98765</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <FaPhoneAlt className="text-warning flex-shrink-0" />
                <a href="tel:+15551234567" className="text-muted text-decoration-none hover-warning">+1 (555) 123-4567</a>
              </li>
              <li className="d-flex align-items-center gap-2">
                <FaEnvelope className="text-warning flex-shrink-0" />
                <a href="mailto:info@foodchain.com" className="text-muted text-decoration-none hover-warning">info@foodchain.com</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="bg-secondary mt-5 mb-4" />

        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-muted small">&copy; {new Date().getFullYear()} FoodChain. All Rights Reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
            <p className="mb-0 text-muted small">
              Designed with <span className="text-danger">&hearts;</span> for Gourmet Lovers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
