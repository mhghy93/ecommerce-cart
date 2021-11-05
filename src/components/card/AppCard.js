import React from 'react';

import './appcard.css';

const AppCard = ({ image, title, description, price }) => {
  return (
    <div className="card">
      <img src={image} alt="Product" className="card-img" />
      <div className="card-container">
        <h5 className="card-heading">{title}</h5>
        <p className="card-description">{description}</p>
        <p className="card-price">₹{price}</p>
        <button className="card-btn">Add To Cart</button>
      </div>
    </div>
  );
};

export default AppCard;
