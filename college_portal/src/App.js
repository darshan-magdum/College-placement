import React from 'react';
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
