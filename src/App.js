import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Navbar from './components/NavBar';
import Message from './components/Message';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
