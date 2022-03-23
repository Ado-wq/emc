import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/Logo-emc.png';
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu} >
            <img className='navbar-logo' src={Logo} alt="EMCenergi" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'} >
            <li className='nav-item'>
              <Link to='/' className="nav-links" onClick={closeMobileMenu}>Hem
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/partners' className="nav-links" onClick={closeMobileMenu}>Partners
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/kontakt' className="nav-links" onClick={closeMobileMenu}>Kontakt
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/tjansteerbjudande' className="nav-links" onClick={closeMobileMenu}>Tjänsteerbjudande
              </Link>
            </li>



          </ul>
        </div>
      </nav>

    </>
  )
}

export default Navbar