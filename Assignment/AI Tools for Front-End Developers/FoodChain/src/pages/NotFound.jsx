import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUtensils } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="bg-dark text-white min-vh-100 py-5 d-flex align-items-center text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="p-5 bg-black border border-secondary rounded-4 shadow-lg">
              {/* Icon / Graphics */}
              <div className="mb-4">
                <span className="display-1 text-warning fw-extrabold" style={{ fontSize: '7rem', letterSpacing: '-2px' }}>
                  404
                </span>
              </div>

              {/* Title & description */}
              <h2 className="fw-bold mb-3">Table Not Found</h2>
              <p className="text-muted mb-5 fs-5">
                The dish or page you are looking for does not exist, has been eaten, or was moved to another kitchen.
              </p>

              {/* Recovery Links */}
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <Link to="/" className="btn btn-warning fw-bold px-4 py-2.5 d-flex align-items-center justify-content-center gap-2 text-uppercase">
                  <FaHome /> Back to Home
                </Link>
                <Link to="/menu" className="btn btn-outline-warning fw-bold px-4 py-2.5 d-flex align-items-center justify-content-center gap-2 text-uppercase">
                  <FaUtensils /> View Our Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
