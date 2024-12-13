import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeLink, setActiveLink] = useState('/')

  const handleLinkClick = (link) => {
      setActiveLink(link);
  };

  return (
    <header>
      <h3>KEYSTAXX</h3>
      <h1>Esport Keyboards</h1>
      <nav>
        <Link to='/' className={activeLink == '/' ? 'active' : ''} onClick={()=> handleLinkClick('/')}>Home</Link>
        <Link to='/products' className={activeLink == '/products' ? 'active' : ''} onClick={()=> handleLinkClick('/products')}>Products</Link>
        <Link to='/reviews' className={activeLink == '/reviews' ? 'active' : ''} onClick={()=> handleLinkClick('/reviews')}>Reviews</Link>
        <Link to='/company-profile' className={activeLink == '/company-profile' ? 'active' : ''} onClick={()=> handleLinkClick('/company-profile')}>Company Profile</Link>
        <Link to='/developer' className={activeLink == '/developer' ? 'active' : ''} onClick={()=> handleLinkClick('/developer')}>Developer</Link>
        <Link to='/mission-vision' className={activeLink == '/mission-vision' ? 'active' : ''} onClick={()=> handleLinkClick('/mission-vision')}>Mission and Vision</Link>
      </nav>
    </header>
  );
};

export default Header;