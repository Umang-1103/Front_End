import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { foodService } from '../services/api';
import FoodCard from '../components/FoodCard';
import Category from '../components/Category';
import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader';
import { FaSlidersH, FaSortAmountDown, FaRedo } from 'react-icons/fa';

const Menu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: foods, loading, error } = useFetch(foodService.getAll);

  // States for filters
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(30);
  const [sortOption, setSortOption] = useState(''); // 'low-to-high', 'high-to-low'

  // Listen to searchParams updates (from Hero or Spotlight Category clicks)
  useEffect(() => {
    const q = searchParams.get('search');
    const cat = searchParams.get('category');
    if (q) {
      setSearchQuery(q);
    } else {
      setSearchQuery('');
    }
    if (cat) {
      setActiveCategory(cat);
    } else {
      setActiveCategory('All');
    }
  }, [searchParams]);

  // Reset filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveCategory('All');
    setMaxPrice(30);
    setSortOption('');
    setSearchParams({}); // Clear query parameters
  };

  // Perform filtering and sorting locally
  const filteredFoods = foods
    ? foods
        .filter((food) => {
          // 1. Search Query filter (matches name or description)
          const matchesSearch =
            food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            food.description.toLowerCase().includes(searchQuery.toLowerCase());

          // 2. Category filter
          const matchesCategory = activeCategory === 'All' || food.category === activeCategory;

          // 3. Price filter
          const matchesPrice = food.price <= maxPrice;

          return matchesSearch && matchesCategory && matchesPrice;
        })
        .sort((a, b) => {
          // 4. Sorting logic
          if (sortOption === 'low-to-high') {
            return a.price - b.price;
          } else if (sortOption === 'high-to-low') {
            return b.price - a.price;
          }
          return 0; // Default sorting (no changes)
        })
    : [];

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="fw-extrabold display-4 mb-2 text-uppercase">
            Our Gourmet <span className="text-warning">Menu</span>
          </h1>
          <p className="text-muted text-uppercase tracking-wider" style={{ fontSize: '0.85rem', letterSpacing: '2px' }}>
            Freshly prepared, seasoned with perfection, served with style
          </p>
        </div>

        {/* Global loader/error checking */}
        {loading && <Loader />}
        {error && <div className="alert alert-danger text-center bg-black border-danger text-danger">{error}</div>}

        {!loading && !error && (
          <div className="row g-4 mt-2">
            {/* Filter sidebar controls */}
            <div className="col-lg-3">
              <div className="card bg-black text-white border-secondary p-4 rounded-4 shadow sticky-lg-top" style={{ top: '100px', zIndex: 10 }}>
                <div className="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-secondary">
                  <h5 className="fw-bold mb-0 text-warning d-flex align-items-center gap-2">
                    <FaSlidersH /> Filters
                  </h5>
                  <button
                    onClick={handleResetFilters}
                    className="btn btn-sm btn-outline-warning d-flex align-items-center gap-1 py-1 px-2 border-0"
                    title="Reset all filters"
                  >
                    <FaRedo size={12} /> Clear
                  </button>
                </div>

                {/* 1. Search Filter */}
                <div className="mb-4">
                  <label className="form-label text-muted small fw-semibold text-uppercase tracking-wider">Search Item</label>
                  <SearchBar value={searchQuery} onChange={setSearchQuery} />
                </div>

                {/* 2. Sort Filter */}
                <div className="mb-4">
                  <label className="form-label text-muted small fw-semibold text-uppercase tracking-wider d-flex align-items-center gap-2">
                    <FaSortAmountDown /> Sort By Price
                  </label>
                  <select
                    className="form-select bg-dark border-secondary text-white shadow-none"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="">Default (Featured)</option>
                    <option value="low-to-high">Price: Low to High</option>
                    <option value="high-to-low">Price: High to Low</option>
                  </select>
                </div>

                {/* 3. Price Range Filter */}
                <div className="mb-2">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <label className="form-label text-muted small fw-semibold text-uppercase tracking-wider mb-0">Max Price</label>
                    <span className="text-warning fw-bold">${maxPrice}</span>
                  </div>
                  <input
                    type="range"
                    className="form-range"
                    min="5"
                    max="30"
                    step="1"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                  />
                  <div className="d-flex justify-content-between text-muted small">
                    <span>$5</span>
                    <span>$30</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Grid results */}
            <div className="col-lg-9">
              {/* Category Filter on Top */}
              <Category activeCategory={activeCategory} onSelectCategory={setActiveCategory} />

              {/* Grid content */}
              <div className="row g-4 mt-1">
                {filteredFoods.length > 0 ? (
                  filteredFoods.map((food) => (
                    <div key={food.id} className="col-md-6 col-xl-4">
                      <FoodCard food={food} />
                    </div>
                  ))
                ) : (
                  <div className="col-12 py-5 text-center">
                    <div className="p-5 bg-black border border-secondary rounded-4">
                      <span className="fs-1">🔍</span>
                      <h4 className="fw-bold mt-3 text-white">No Items Found</h4>
                      <p className="text-muted">No items matched your search query or filters. Try adjusting your range or categories.</p>
                      <button onClick={handleResetFilters} className="btn btn-warning fw-bold px-4 mt-2">
                        Reset Filters
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
