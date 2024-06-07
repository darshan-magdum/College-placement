import React, { useEffect, useState } from 'react';
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
  const [isListening, setIsListening] = useState(false);


  const handleKeyPress = (event) => {
    if (event.altKey) {
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
        case 't':
          setIsListening(true);
          break;
        default:
          break;
      }
    }
  };
  

 

  const handleSpeechRecognition = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    switch (transcript) {
      case 'go to home':
      case 'navigate to home':
        window.location.href = '/';
        break;
      case 'go to about':
      case 'navigate to about':
        window.location.href = '/about';
        break;
      case 'go to login':
      case 'navigate to login':
        window.location.href = '/Login';
        break;
      case 'go to signup':
      case 'navigate to signup':
        window.location.href = '/Signup';
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    if (isListening) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.onresult = handleSpeechRecognition;
      recognition.start();

      return () => {
        recognition.stop();
      };
    }
  }, [isListening]);

  

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
          <Route path="/profile" element={<ProfileUser />} />
          <Route path="/profile/admin" element={<ProfileAdmin />} />
        </Routes>
  
      </div>
    </Router>
  );
}

export default App;
