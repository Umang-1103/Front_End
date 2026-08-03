import React from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBar = ({ value, onChange, placeholder = 'Search for food items...' }) => {
  return (
    <div className="input-group shadow-sm rounded border border-secondary bg-dark">
      <span className="input-group-text bg-transparent border-0 text-muted px-3">
        <FaSearch />
      </span>
      <input
        type="text"
        className="form-control bg-transparent border-0 text-white py-2 shadow-none"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ fontSize: '1rem' }}
      />
      {value && (
        <button
          className="btn bg-transparent border-0 text-muted hover-warning d-flex align-items-center justify-content-center px-3"
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear Search"
        >
          <FaTimes />
        </button>
      )}
      <style>{`
        .hover-warning:hover {
          color: var(--bs-warning) !important;
        }
      `}</style>
    </div>
  );
};

export default SearchBar;
