import React from 'react';
import { useHistory } from 'react-router';

import './cart.css';

import CartItem from '../../components/cart-item/CartItem';

const Cart = () => {
  const history = useHistory();
  return (
    <div className="cart-container">
      <div className="cart-card">
        <button onClick={() => history.goBack()} className="back-btn">
          Back
        </button>
        <div className="cart-items">
          <h3>Products In Your Cart (2)</h3>
          <hr className="cart-heading-divider" />
          <CartItem />
          <CartItem />
          <div className="order-btn-container">
            <button className="order-btn">Place Order</button>
          </div>
        </div>
      </div>
      <div className="cart-card">
        <div className="price-details">
          <h3>Price Details</h3>
          <hr className="cart-heading-divider" />

          <div className="price-details-item">
            <p> Price (2 items)</p>
            <p>$100</p>
          </div>

          <hr className="cart-heading-divider" />

          <div className="price-details-item">
            <p> Payment Mode</p>
            <p>Payment On Delivery</p>
          </div>

          <hr className="cart-heading-divider" />

          <div className="price-details-item">
            <p>Delivery Charges</p>
            <p style={{ color: 'green' }}>FREE</p>
          </div>

          <hr className="cart-heading-divider" />

          <div className="price-details-item">
            <h5>Total</h5>
            <h5>$100</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
