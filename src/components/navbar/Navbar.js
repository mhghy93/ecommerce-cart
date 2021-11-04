import React from 'react';
import { BsBagCheck } from 'react-icons/bs';

import './navbar.css';

import Logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <img className="logo-img" src={Logo} alt="logo" />
      </div>
      <nav className="navbar">
        <div className="nav-menu">
          <div className="nav-link">
            <BsBagCheck />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
