import React from 'react';

const Loader = ({ fullPage = false }) => {
  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-center ${
        fullPage ? 'min-vh-100 position-fixed top-0 start-0 w-100 bg-dark bg-opacity-75 z-3' : 'py-5'
      }`}
      style={fullPage ? { zIndex: 9999 } : {}}
    >
      <div className="spinner-border text-warning" role="status" style={{ width: '3.5rem', height: '3.5rem', borderWidth: '0.35em' }}>
        <span className="visually-hidden">Loading...</span>
      </div>
      <h5 className="mt-4 text-warning fw-bold tracking-wide text-uppercase" style={{ letterSpacing: '2px', fontSize: '0.9rem' }}>
        Cooking up something delicious...
      </h5>
    </div>
  );
};

export default Loader;
