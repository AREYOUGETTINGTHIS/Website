import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Switch replaced with Routes
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import DatesPage from './DatesPage';
import GalleryPage from './GalleryPage';
import ContactPage from './ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dates" element={<DatesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
