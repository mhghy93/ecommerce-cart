import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { BsBagCheck } from 'react-icons/bs';

import './navbar.css';

import Logo from '../../images/logo.png';

const Navbar = ({ cart }) => {
  const { items } = cart;
  return (
    <header className="header">
      <Link to="/">
        <div className="logo">
          <img className="logo-img" src={Logo} alt="logo" />
        </div>
      </Link>
      <nav className="navbar">
        <div className="nav-menu">
          <Link to="/cart">
            <div className="nav-link">
              <BsBagCheck />
              {items.length > 0 && (
                <span className="cart-item-quantity">{items.length}</span>
              )}
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Navbar);
