import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isWelcomeDropdownOpen, setWelcomeDropdownOpen] = useState(false);
  const [isCategoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const toggleWelcomeDropdown = () => {
    setWelcomeDropdownOpen(!isWelcomeDropdownOpen);
  };

  const toggleCategoriesDropdown = () => {
    setCategoriesDropdownOpen(!isCategoriesDropdownOpen);
  };

  const toggleMoreDropdown = () => {
    setMoreDropdownOpen(!isMoreDropdownOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="logo">ALIEXPRESS</div>
          <div className="vertical-line"></div>
          <div className="logo">EURO2024</div>
          <div className="search-bar">
            <input type="text" placeholder="Bluetooth earbuds" />
            <button>🔍</button>
          </div>
          <div className="info">Download the Aliexpress app</div>
          <div className="currency">EN/INR</div>
          <div className="auth" onClick={toggleWelcomeDropdown}>
            Welcome Sign in/Register
            {isWelcomeDropdownOpen && (
              <div className="welcome-dropdown">
                <button>Sign In</button>
                <button>Register</button>
                <hr />
                <div>1. My Orders</div>
                <div>2. My Coins</div>
                <div>3. Message Center</div>
                <div>4. Payment</div>
                <div>5. Wish List</div>
                <div>6. My Coupons</div>
                <hr />
                <div>Setting</div>
                <div>Aliexpress Business</div>
                <div>DS Center</div>
                <div>Seller Log In</div>
              </div>
            )}
          </div>
          <div className="cart">Cart 🛒</div>
        </div>

        <div className="container">
           <div className="menu-box">
            <button className="menu-icon">☰</button>
            <div className="dropdown">
              <span className="dropbtn" onClick={toggleCategoriesDropdown}>All Categories</span>
              {isCategoriesDropdownOpen && (
                <div className="dropdown-content">
                  <a href="#">Accessories</a>
                  <a href="#"> Babies and Kids</a>
                  <a href="#"> Home & Garden</a>
                  <a href="#"> Home Appliances</a>
                  <a href="#"> Furniture</a>
              
                  <a href="#">Hair Extensions & Wigs</a>
                  <a href="#">Mens's Clothing</a>
                  <a href="#"> Consumer Electronics</a>
                  <a href="#"> Home Improvements & Lighting</a>
                  <a href="#"> Automatic & Motocycle</a>
                  <a href="#"></a>
                  
                </div>
              )}
            </div> 


</div>





        
    

        
          <Link to="/bestsellers" className="nav-link">Bestsellers</Link>
          <Link to="/topbrands" className="nav-link">Top Brands</Link>
          <Link to="/homegarden" className="nav-link">Home & Garden</Link>
          <Link to="/homeappliances" className="nav-link">Home & Appliances</Link>
          <Link to="/furniture" className="nav-link">Furniture</Link>
          <div className="dropdown">
            <span className="dropdown-toggle" onClick={toggleMoreDropdown}>More</span>
            {isMoreDropdownOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-item">Hair Extensions</div>
                <div className="dropdown-item">Men's Clothing</div>
                <div className="dropdown-item">Accessories</div>
                <div className="dropdown-item">Consumer</div>
                <div className="dropdown-item">Home</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
