import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return(
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
