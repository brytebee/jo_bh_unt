import React from 'react';
import './loader.scss';

const Loader = () => {
  const loading = 'Loading...';
  return (
    <div className="loading">
      <h2 className="loader">{loading}</h2>
    </div>
  );
};

export default Loader;
