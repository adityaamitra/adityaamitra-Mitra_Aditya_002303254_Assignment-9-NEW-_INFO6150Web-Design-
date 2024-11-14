// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import JobListings from './pages/JobListings';
import Contact from './pages/Contact';
import CompanyShowcase from './pages/CompanyShowcase';
import Navbar from './components/Navbar'; 

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('user')
  );

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      
      {isAuthenticated && <Navbar onLogout={handleLogout} />} 

      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
        <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/" />} />
        <Route path="/jobs" element={isAuthenticated ? <JobListings /> : <Navigate to="/" />} />
        <Route path="/contact" element={isAuthenticated ? <Contact /> : <Navigate to="/" />} />
        <Route path="/company" element={isAuthenticated ? <CompanyShowcase /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
