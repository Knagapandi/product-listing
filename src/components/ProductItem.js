import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="card h-100">
        <div className="image-container">
      <img src={product.image} className="card-img-top" alt={product.title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.category}</h5>
        <p className="card-text">${product.price}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
