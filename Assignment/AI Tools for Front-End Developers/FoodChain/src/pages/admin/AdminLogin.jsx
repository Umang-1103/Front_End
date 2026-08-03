import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUserShield, FaSignInAlt } from 'react-icons/fa';
import { authService } from '../../services/api';
import { toast } from 'react-toastify';
import { useCart } from '../../hooks/useCart';


const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { theme } = useCart();


  // Auto-redirect if already logged in as admin
  useEffect(() => {
    const adminSession = localStorage.getItem('foodchain_admin');
    if (adminSession) {
      try {
        const parsed = JSON.parse(adminSession);
        if (parsed && parsed.role === 'admin') {
          navigate('/admin/dashboard', { replace: true });
        }
      } catch (e) {
        // Ignore
      }
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    setIsSubmitting(true);

    try {
      const adminUser = await authService.adminLogin(email, password);
      // Save session
      localStorage.setItem('foodchain_admin', JSON.stringify(adminUser));
      toast.success(`Admin Authentication successful! Welcome, ${adminUser.name}.`);
      navigate('/admin/dashboard');
    } catch (err) {
      toast.error(err.message || 'Access Denied. Check your admin credentials.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center py-5 transition-all"
      style={{
        backgroundColor: theme === 'dark' ? '#121212' : '#f8f9fa',
        backgroundImage: 'radial-gradient(rgba(255, 107, 0, 0.05) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            {/* Card wrapper */}
            <div className="card border-0 rounded-4 shadow-lg overflow-hidden bg-white p-4 p-md-5">
              {/* Zomato/Swiggy-inspired Branding Header */}
              <div className="text-center mb-4">
                <div
                  className="d-inline-flex p-3 rounded-circle mb-3 shadow-sm"
                  style={{
                    backgroundColor: 'rgba(255, 107, 0, 0.12)',
                    color: '#FF6B00',
                  }}
                >
                  <FaUserShield size={32} />
                </div>
                <h3 className="fw-extrabold text-dark text-uppercase tracking-wider mb-1" style={{ letterSpacing: '1px' }}>
                  <span style={{ color: '#FF6B00' }}>Food</span>Chain
                </h3>
                <span className="badge bg-dark-subtle text-dark-emphasis fw-bold text-uppercase px-3 py-1.5 small mb-2">
                  Staff Control Center
                </span>
                <p className="text-muted small">Access dashboard statistics and manage operations</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className={`needs-validation ${validated ? 'was-validated' : ''}`} noValidate>
                {/* Email field */}
                <div className="mb-3">
                  <label htmlFor="adminEmail" className="form-label text-muted small fw-semibold text-uppercase">
                    <FaEnvelope className="me-1" style={{ color: '#FF6B00' }} /> Admin Email
                  </label>
                  <input
                    type="email"
                    id="adminEmail"
                    className="form-control py-2 shadow-none border-secondary-subtle bg-light text-dark"
                    placeholder="admin@foodchain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback text-danger">Please enter a valid administrator email.</div>
                </div>

                {/* Password field */}
                <div className="mb-4">
                  <label htmlFor="adminPassword" className="form-label text-muted small fw-semibold text-uppercase">
                    <FaLock className="me-1" style={{ color: '#FF6B00' }} /> Security Password
                  </label>
                  <input
                    type="password"
                    id="adminPassword"
                    className="form-control py-2 shadow-none border-secondary-subtle bg-light text-dark"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback text-danger">Please enter your password.</div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn w-100 fw-bold py-2.5 rounded shadow text-white-force text-uppercase d-flex align-items-center justify-content-center gap-2 hover-orange"
                  style={{
                    backgroundColor: '#FF6B00',
                    border: 'none',
                    transition: 'all 0.25s ease',
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      Verifying Token...
                    </>
                  ) : (
                    <>
                      <FaSignInAlt /> Authorize Session
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hover-orange:hover {
          background-color: #e05e00 !important;
          box-shadow: 0 4px 12px rgba(255, 107, 0, 0.3) !important;
        }
      `}</style>
    </div>
  );
};

export default AdminLogin;
