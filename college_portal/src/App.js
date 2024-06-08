import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
  const [spokenText, setSpokenText] = useState('');

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
          window.location.href = '/login';
          break;
        case 's':
          window.location.href = '/signup';
          break;
        default:
          break;
      }
    }
    if (event.altKey && event.key === 't') {
      setIsListening(true);
    }
  };

  const handleSpeechRecognition = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    const command = transcript.replace('go to ', '').replace('navigate to ', ''); 
    
    let pageName, route;
    switch (command) {
      case 'home':
        route = '/';
        pageName = 'home';
        break;
      case 'about':
        route = '/about';
        pageName = 'about';
        break;
      case 'login':
        route = '/login';
        pageName = 'login';
        break;
      case 'new account':
        route = '/signup';
        pageName = 'new account';
        break;
      default:
        speakText("Sorry, please try again.");
        return;
    }
    
    speakText(`Okay, this is your ${pageName} page`);
    setSpokenText(pageName);

    window.location.href = route; 
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

  useEffect(() => {
    if (spokenText) {
      speakText(`Okay, I will take you to ${spokenText}.`);
    }
  }, [spokenText]);

  const speakText = (text) => {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  return (
    <Router>
      <div className="App">
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/profile" element={<ProfileUser />} />
          <Route path="/profile/admin" element={<ProfileAdmin />} />
        </Routes>
      
    
        {isListening && <div>Listening...</div>}
      </div>
    </Router>
  );
}

export default App;
