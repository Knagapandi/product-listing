import React from 'react';

const LoadingSpinner = () => (
  <div className="text-center">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <p>Loading products...</p>
  </div>
);

export default LoadingSpinner;
