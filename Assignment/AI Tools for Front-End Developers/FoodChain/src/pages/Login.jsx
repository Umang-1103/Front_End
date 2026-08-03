import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUserPlus, FaSignInAlt } from 'react-icons/fa';
import { authService } from '../services/api';
import { useCart } from '../hooks/useCart';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login } = useCart();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect') || '/';

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
      const user = await authService.login(email, password);
      login(user);
      navigate(redirect);
    } catch (err) {
      toast.error(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-dark text-white min-vh-100 py-5 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card bg-black border-secondary p-4 p-md-5 rounded-4 shadow-lg">
              {/* Header */}
              <div className="text-center mb-4">
                <span className="badge bg-warning text-dark fw-bold text-uppercase px-3 py-1.5 mb-2">Welcome Back</span>
                <h3 className="fw-extrabold text-white">Login Account</h3>
                <p className="text-muted small">Sign in to order hot, delicious meals</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className={`needs-validation ${validated ? 'was-validated' : ''}`} noValidate>
                <div className="mb-3">
                  <label htmlFor="loginEmail" className="form-label text-muted small fw-semibold text-uppercase">
                    <FaEnvelope className="text-warning me-1" /> Email Address
                  </label>
                  <input
                    type="email"
                    id="loginEmail"
                    className="form-control bg-transparent border-secondary text-white shadow-none"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback text-danger">Please enter a valid email address.</div>
                </div>

                <div className="mb-4">
                  <label htmlFor="loginPassword" className="form-label text-muted small fw-semibold text-uppercase">
                    <FaLock className="text-warning me-1" /> Password
                  </label>
                  <input
                    type="password"
                    id="loginPassword"
                    className="form-control bg-transparent border-secondary text-white shadow-none"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback text-danger">Please enter your password.</div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-warning w-100 fw-bold py-2.5 rounded d-flex align-items-center justify-content-center gap-2 text-uppercase mb-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      Authenticating...
                    </>
                  ) : (
                    <>
                      <FaSignInAlt /> Login
                    </>
                  )}
                </button>
              </form>

              {/* Footer link to Register */}
              <div className="text-center pt-2 border-top border-secondary">
                <span className="text-muted small">Don't have an account? </span>
                <Link to={redirect !== '/' ? `/register?redirect=${encodeURIComponent(redirect)}` : '/register'} className="text-warning text-decoration-none fw-semibold small d-inline-flex align-items-center gap-1">
                  <FaUserPlus size={12} /> Register Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
