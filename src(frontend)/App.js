// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/user/Home';
import About from './pages/user/About';
import Services from './pages/user/Services';
import Events from './pages/user/Events';
import Blogs from './pages/user/Blogs';
import Contact from './pages/user/Contact';
import Signup from './pages/athentication/Signup';
import Login from './pages/athentication/Login';
import Admin from './pages/admin/Admin';
import Modal from './components/Model';
import Payment from './pages/user/Payment';
import SettingsPage from './components/SettingsPage';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      setIsLoggedIn(false);
    } else {
      const tokenExpiration = sessionStorage.getItem('tokenExpiration');
      if (tokenExpiration && Date.now() > tokenExpiration) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    }
  }, []);

  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/events" element={isLoggedIn ? <Events /> : <Navigate to="/login" />} />
            <Route path="/blogs" element={<Blogs /> } />
            <Route path="/contact" element={<Contact /> } />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login setLoginStatus={setIsLoggedIn} />} />
            <Route path="/admin/*" element={isLoggedIn ? <Admin /> : <Navigate to="/login" />} />
            <Route path="/settings" element={isLoggedIn ? <SettingsPage /> : <Navigate to="/login" />} />
            <Route path="/payment" element={isLoggedIn ? <Payment /> : <Navigate to="/login" />} />
          </Routes>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
