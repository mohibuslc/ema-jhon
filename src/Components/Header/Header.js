import React from 'react';
import logo from '../../images/logo.png'; // For this line use for Imgge or Logo Import in Header.
 import './Header.css'; // This line for connect Header.css file with Header.js File .


const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>    

            <nav>
                <a href="/shop">SHOP</a>
                <a href="/review">Order review</a>
                <a href="/Manage">Manage Inventory</a>
            </nav>
            
        </div>
    );
};

export default Header;