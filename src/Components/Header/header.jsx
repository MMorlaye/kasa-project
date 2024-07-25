import { Link } from 'react-router-dom'
import React from 'react';
import Logo from '../../assets/LOGO(2).png'
import './header.scss'

const Header = () => {
  return (
    <header>
      <nav className='navbar'>
          <div>
            <Link to="/" className='navbar-logo'>
               <img src={Logo} alt="Image-Logo" />
            </Link>
          </div>
          <div className='navbar-link-container'>
            <Link to="/" className='navbar-link'>Accueil</Link>
            <Link to="/about" className='navbar-link'>About</Link>
          </div>
        </nav>
    </header>
  );
};

export default Header;
