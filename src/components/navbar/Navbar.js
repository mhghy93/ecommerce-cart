import React from 'react';
import { Link } from 'react-router-dom';
import { BsBagCheck } from 'react-icons/bs';

import './navbar.css';

import Logo from '../../images/logo.png';

const Navbar = () => {
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
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
