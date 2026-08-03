import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useCart } from '../hooks/useCart';

const Hero = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { theme } = useCart();
  const isDark = theme === 'dark';

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/menu?search=${encodeURIComponent(query.trim())}`);
    } else {
      navigate('/menu');
    }
  };

  return (
    <div
      className="hero-section position-relative d-flex align-items-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '75vh',
      }}
    >
      <div className="container py-5 text-center text-md-start">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-10">
            {/* Tagline */}
            <span className="badge bg-warning text-dark fw-bold px-3 py-2 text-uppercase mb-3 tracking-widest" style={{ fontSize: '0.8rem' }}>
              Deliciously Fresh, Delivered Fast
            </span>

            {/* Main Heading */}
            <h1 className="display-3 fw-extrabold text-white mb-3" style={{ lineHeight: '1.1' }}>
              Satisfy Your Cravings <br />
              <span className="text-warning">In One Click.</span>
            </h1>

            {/* Sub-text */}
            <p className="lead text-light mb-5 opacity-90 fs-5" style={{ maxWidth: '650px' }}>
              Discover local culinary masterpieces, hand-crafted pizzas, gourmet burgers, and guilt-free salads prepared by our world-class chefs.
            </p>

            {/* Search Food Bar */}
            <form onSubmit={handleSearch} className={`p-2 rounded-4 shadow-lg d-flex align-items-center max-w-500 mx-auto mx-md-0 ${isDark ? 'bg-dark bg-opacity-75 border border-secondary border-opacity-50' : 'bg-white border border-light-subtle'}`} style={{ maxWidth: '550px', backdropFilter: 'blur(10px)' }}>
              <div className="input-group">
                {/* <span className="input-group-text bg-transparent border-0 text-muted">
                  <FaSearch size={18} />
                </span> */}
                <input
                  type="text"
                  className={`form-control border-0 bg-transparent ms-0 py-3 shadow-none ${isDark ? 'text-white' : 'text-dark'}`}
                  placeholder="Search for burger, pizza, salad..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={{ fontSize: '1.05rem' }}
                />
                <button type="submit" className="btn btn-warning fw-bold px-4 text-uppercase rounded-3">
                  Search
                </button>
              </div>
            </form>

            {/* Small Quick-Tags */}
            <div className="mt-4 d-flex flex-wrap justify-content-center justify-content-md-start gap-2">
              <span className="small text-muted me-2 align-self-center">Popular:</span>
              <button onClick={() => navigate('/menu?category=Burger')} className="btn btn-sm btn-outline-light rounded-pill px-3 py-1 opacity-75 hover-warning">Burger</button>
              <button onClick={() => navigate('/menu?category=Pizza')} className="btn btn-sm btn-outline-light rounded-pill px-3 py-1 opacity-75 hover-warning">Pizza</button>
              <button onClick={() => navigate('/menu?category=Pasta')} className="btn btn-sm btn-outline-light rounded-pill px-3 py-1 opacity-75 hover-warning">Pasta</button>
              <button onClick={() => navigate('/menu?category=Dessert')} className="btn btn-sm btn-outline-light rounded-pill px-3 py-1 opacity-75 hover-warning">Dessert</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
