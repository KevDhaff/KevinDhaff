import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Esport Keyboards</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/company-profile">Company Profile</Link>
        <Link to="/developer">Developer</Link>
        <Link to="/mission-vision">Mission and Vision</Link>
      </nav>
    </header>
  );
};

export default Header;