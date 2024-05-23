import React from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT, ABOUT } from '../../router/keys'; // Import your route constants

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <span className="material-symbols-outlined">
        school
      </span>
      <Link className="navbar-brand" to={DEFAULT}>Find My Placement</Link>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="basic-navbar-nav">
        <ul className="navbar-nav me-auto"> {/* Changed ms-auto to me-auto */}
          <li className="nav-item">
            <Link className={`nav-link ${window.location.pathname === '/' ? 'active' : ''}`} to={DEFAULT}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${window.location.pathname === '/about' ? 'active' : ''}`} to={ABOUT}>About</Link>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto"> 
          <li className="nav-item">
            <Link className={`nav-link login-button ${window.location.pathname === '/login' ? 'active' : ''}`} to={ABOUT}>Login</Link>
          </li>
          &nbsp;
          <li className="nav-item">
            <Link className={`nav-link signup-button ${window.location.pathname === '/signup' ? 'active' : ''}`} to={ABOUT}>Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
