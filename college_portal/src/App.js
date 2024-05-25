import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './componets/Navbar/Navbar';
import Footer from './componets/Footer/Footer';
import { About, Home } from './pages';
import ProfileUser from './pages/Profile/ProfileUser';
import ProfileAdmin from './pages/Profile/ProfileAdmin';
import { Login } from './pages/Account/Login';
import { Signup } from './pages/Account/Signup';
import { Reset } from './pages/Account/Reset';
import { Forget } from './pages/Account/Forget';

function App() {
  const handleKeyPress = (event) => {
    switch (event.key) {
      case 'h':
        window.location.href = '/';
        break;
      case 'a':
        window.location.href = '/about';
        break;
      case 'l':
        window.location.href = '/Login';
        break;
      case 's':
        window.location.href = '/Signup';
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Forget" element={<Forget />} />
          <Route path="/Reset" element={<Reset />} />
          <Route path="/profile/:id" element={<ProfileUser />} />
          <Route path="/profile/admin" element={<ProfileAdmin />} />
        </Routes>
  
      </div>
    </Router>
  );
}

export default App;
