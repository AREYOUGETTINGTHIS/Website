import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';  // Assuming the CSS file is shared between pages

function DatesPage() {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>ARE YOU GETTING THIS!</h1>
      </div>

      <div className="icon-bar">
        <Link to="/">HOME</Link>
        <Link className="active" to="/dates">DATES</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </div>

      <div className="contact-container">
        <h1>Book us</h1>
        <p>(Respectfully)</p>
      </div>
    </div>
  );
}

export default DatesPage;