import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import '../asserts/Navbar.css';
import logo from '../asserts/Image/ecofy-high-resolution-logo.png';

const Navbar = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handlePaymentClick = (e) => {
    e.preventDefault();
    navigate('/payment');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="EcoFy Logo" />
        <a href="/">EcoFy</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li
          className="navbar-dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/services">
            Services <FontAwesomeIcon icon={faCaretDown} />
          </a>
          {dropdownOpen && (
            <li><a className="navbar-dropdown-menu" href="/payment" onClick={handlePaymentClick}>Payment</a></li>
          )}
        </li>
        <li><a href="/events">Event</a></li>
        <li><a href="/blogs">Blogs</a></li>
        <li><a href="/contact">Contact</a></li>
        {isLoggedIn ? (
          <>
            <li><button onClick={handleLogout} className="navbar-logout-button">Logout</button></li>
            <li><a href="/settings"><FontAwesomeIcon icon={faUserCircle} className="profile-icon" /></a></li>
          </>
        ) : (
          <li><a href="/signup" className="navbar-highlight">Signup</a></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
