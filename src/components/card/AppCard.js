import React from 'react';
import { ImStarFull } from 'react-icons/im';

import './appcard.css';

const AppCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt="Product" className="card-img" />
      <div className="card-container">
        <h5 className="card-heading">{product.title}</h5>
        <div className="card-rating">
          {product.rating.rate} <ImStarFull />
        </div>
        <p className="card-price">${product.price}</p>
        <button className="card-btn">Add To Cart</button>
      </div>
    </div>
  );
};

export default AppCard;
