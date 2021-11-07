import React, { Fragment } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';

import './cart.css';

import CartItem from '../../components/cart-item/CartItem';

const Cart = ({ cart }) => {
  const history = useHistory();
  const { items } = cart;

  const getTotalPrice = () => {
    if (items.length > 0) {
      let total = 0;
      for (let i = 0; i < items.length; i++) {
        total += items[i].price;
      }
      return total;
    } else {
      return 0;
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-card">
        <button onClick={() => history.goBack()} className="back-btn">
          Back
        </button>
        <div className="cart-items">
          <h3>
            Products In Your Cart {items.length > 0 && <>({items.length})</>}
          </h3>
          <hr className="cart-heading-divider" />
          {items.length > 0 ? (
            <Fragment>
              {items.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
              <div className="order-btn-container">
                <button className="order-btn">Place Order</button>
              </div>
            </Fragment>
          ) : (
            <p>No items were added in the cart</p>
          )}
        </div>
      </div>
      <div className="cart-card">
        <div className="price-details">
          <h3>Price Details</h3>
          <hr className="cart-heading-divider" />

          {items.length > 0 ? (
            <Fragment>
              <div className="price-details-item">
                <p> Price ({items.length > 0 && items.length})</p>
                <p>${getTotalPrice()}</p>
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
                <h5>${getTotalPrice()}</h5>
              </div>
            </Fragment>
          ) : (
            <p>No items were added in the cart</p>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
