import React from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { ImStarFull } from 'react-icons/im';

import './appcard.css';
import { addToCart } from '../../redux/cart/cart.actions';

const AppCard = ({ product, addToCart }) => {
  const history = useHistory();

  const handleAddToCart = () => {
    addToCart(product.id);
    history.push('/cart');
  };

  return (
    <div className="card">
      <img src={product.image} alt="Product" className="card-img" />
      <div className="card-container">
        <h5 className="card-heading">{product.title}</h5>
        <div className="card-rating">
          {product.rating.rate} <ImStarFull />
        </div>
        <p className="card-price">${product.price}</p>
        <button onClick={handleAddToCart} className="card-btn">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default connect(null, { addToCart })(AppCard);
