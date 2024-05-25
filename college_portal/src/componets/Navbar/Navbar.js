import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT, ABOUT, LOGIN, SIGNUP } from '../../router/keys'; 

const NavBar = ({ profile, setProfile ,setHome, setJobUpdates, setToOtherInfo,setViewJobs ,setViewinfo}) => {

  const GoToProfile = () => {
    setProfile(true);


    setHome(false);
    setToOtherInfo(false);
    setJobUpdates(false);
    setViewJobs(false);
    setViewinfo(false);

  };


       
  const UserName = localStorage.getItem("Name");   
  const UserRole = localStorage.getItem("role");



  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    setIsLoggedIn(false); 
    window.location = "/"; 
    localStorage.removeItem("Name");
    localStorage.removeItem("role");
  };

  
  const token = localStorage.getItem("token");
  console.log("token",token)
  if (token && !isLoggedIn) {
    setIsLoggedIn(true);
  }
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
        <ul className="navbar-nav ms-auto"> 
      {!isLoggedIn ? (
                <>
                 
              
        <li className="nav-item">
            <Link className={`nav-link ${window.location.pathname === '/' ? 'active' : ''}`} to={DEFAULT}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${window.location.pathname === '/about' ? 'active' : ''}`} to={ABOUT}>About</Link>
          </li>
          &nbsp;
          <li className="nav-item">
            <Link className={`nav-link login-button ${window.location.pathname === '/login' ? 'active' : ''}`} to={LOGIN}>Login</Link>
          </li>
          &nbsp;
          <li className="nav-item">
            <Link className={`nav-link signup-button ${window.location.pathname === '/Signup' ? 'active' : ''}`} to={SIGNUP}>Signup</Link>
          </li>
      &nbsp;
      &nbsp;

       
                </>
              ) : (
      

<>


 <div className="navbar-nav float-right">
            <div className="dropdown">
              <a href="#" className="d-flex align-items-center link-light text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                <strong>{UserRole === "admin" ? "Admin" :UserName}</strong>
              </a>
              <ul className="dropdown-menu text-small shadow dropdown-menu-end" aria-labelledby="dropdownUser2">
                <li><a className="dropdown-item" onClick={GoToProfile}>Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" onClick={handleLogout}>Sign out</a></li>
              </ul>
            </div>
          </div>
          &nbsp;  &nbsp;

</>
             )}
      </ul>
      </div>
    </nav>
  );
};

export default NavBar;
