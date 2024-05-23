import React from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT, ABOUT } from '../../router/keys'; // Import your route constants

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#294a70' }}>
      <span 
        className="material-symbols-outlined" 
        style={{ 
          fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 40",
          color: "white", 
          fontSize: "2em" ,
          marginRight: "0.3em"
        }}
      >
        school
      </span>
      <Link className="navbar-brand" to={DEFAULT} style={{ color: 'white' }}>Find My Placement</Link>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="basic-navbar-nav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to={DEFAULT} style={{ color: 'white' }}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={ABOUT} style={{ color: 'white' }}>About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={ABOUT}  style={{ color: 'white',backgroundColor:"#fe6500",borderRadius:"7px" }}>Login</Link>
          </li>
          &nbsp;
          <li className="nav-item">
            <Link className="nav-link"  style={{ color: 'white',backgroundColor:"grey",borderRadius:"7px" }}>Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
