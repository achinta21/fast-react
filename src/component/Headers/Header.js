import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
          <img className="logo" src={logo} alt="" />
          <nav>
            <a href="Shop">Shop</a>
            <a href="Oder Review">Oder Review</a>
            <a href="Manage Inventory here">Manage Inventory here</a>
            <input id="input" type="text" placeholder="sceach your projects"/>
          </nav>
        </div>
    );
};

export default Header;