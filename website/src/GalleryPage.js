import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';  // Assuming the CSS file is shared between pages

function GalleryPage() {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>ARE YOU GETTING THIS!</h1>
      </div>

      <div className="icon-bar">
        <Link to="/">HOME</Link>
        <Link to="/dates">DATES</Link>
        <Link className="active" to="/gallery">GALLERY</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </div>

      <div className="gallery-container">
        <img src="/images/gallery/obamna.jpg" alt="Gallery Item" />
      </div>
    </div>
  );
}

export default GalleryPage;