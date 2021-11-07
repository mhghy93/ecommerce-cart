import React, { Fragment } from 'react';
import { ImBin2 } from 'react-icons/im';

import './cartItem.css';

const CartItem = () => {
  return (
    <Fragment>
      <div className="cart-item-container">
        <div className="cart-item-image">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt="item"
          />
          <div className="quantity-btn-group">
            <button className="quantity-btn">-</button>
            <span className="quantity">2</span>
            <button className="quantity-btn">+</button>
          </div>
        </div>
        <div className="cart-item-product">
          <h5 className="cart-item-product-title">Men's T-Shirt</h5>
          <h5 className="cart-item-product-price">$50</h5>
          <button className="cart-item-remove-btn">
            <ImBin2 />
          </button>
        </div>
      </div>
      <hr className="cart-item-divider" />
    </Fragment>
  );
};

export default CartItem;
