import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { authService } from '../services/api';
import { useCart } from '../hooks/useCart';
import { toast } from 'react-toastify';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login } = useCart();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect') || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Check basic validation
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    // Check password match
    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      setValidated(true);
      return;
    }

    setValidated(true);
    setIsSubmitting(true);

    try {
      const newUser = {
        name,
        email,
        password,
      };
      
      const registeredUser = await authService.register(newUser);
      toast.success('Registration successful!');
      
      // Auto login the newly registered user
      login(registeredUser);
      navigate(redirect);
    } catch (err) {
      toast.error(err.message || 'Registration failed. Please try again.');
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
                <span className="badge bg-warning text-dark fw-bold text-uppercase px-3 py-1.5 mb-2">Join Us</span>
                <h3 className="fw-extrabold text-white">Create Account</h3>
                <p className="text-muted small">Sign up to explore our gourmet menu & order food</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className={`needs-validation ${validated ? 'was-validated' : ''}`} noValidate>
                {/* 1. Name */}
                <div className="mb-3">
                  <label htmlFor="regName" className="form-label text-muted small fw-semibold text-uppercase">
                    <FaUser className="text-warning me-1" /> Full Name
                  </label>
                  <input
                    type="text"
                    id="regName"
                    className="form-control bg-transparent border-secondary text-white shadow-none"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback text-danger">Please enter your full name.</div>
                </div>

                {/* 2. Email */}
                <div className="mb-3">
                  <label htmlFor="regEmail" className="form-label text-muted small fw-semibold text-uppercase">
                    <FaEnvelope className="text-warning me-1" /> Email Address
                  </label>
                  <input
                    type="email"
                    id="regEmail"
                    className="form-control bg-transparent border-secondary text-white shadow-none"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback text-danger">Please enter a valid email.</div>
                </div>

                {/* 3. Password */}
                <div className="mb-3">
                  <label htmlFor="regPassword" className="form-label text-muted small fw-semibold text-uppercase">
                    <FaLock className="text-warning me-1" /> Password
                  </label>
                  <input
                    type="password"
                    id="regPassword"
                    className="form-control bg-transparent border-secondary text-white shadow-none"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength="6"
                    required
                  />
                  <div className="invalid-feedback text-danger">Please enter a password (min 6 characters).</div>
                </div>

                {/* 4. Confirm Password */}
                <div className="mb-4">
                  <label htmlFor="regConfirm" className="form-label text-muted small fw-semibold text-uppercase">
                    <FaLock className="text-warning me-1" /> Confirm Password
                  </label>
                  <input
                    type="password"
                    id="regConfirm"
                    className="form-control bg-transparent border-secondary text-white shadow-none"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback text-danger">Please confirm your password.</div>
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
                      Registering Account...
                    </>
                  ) : (
                    <>
                      <FaUserPlus /> Register
                    </>
                  )}
                </button>
              </form>

              {/* Footer link to Login */}
              <div className="text-center pt-2 border-top border-secondary">
                <span className="text-muted small">Already have an account? </span>
                <Link to={redirect !== '/' ? `/login?redirect=${encodeURIComponent(redirect)}` : '/login'} className="text-warning text-decoration-none fw-semibold small d-inline-flex align-items-center gap-1">
                  <FaSignInAlt size={12} /> Login Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
