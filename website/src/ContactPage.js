import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';  // Assuming the CSS file is shared between pages

function ContactPage() {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>ARE YOU GETTING THIS!</h1>
      </div>

      <div className="icon-bar">
        <Link to="/">HOME</Link>
        <Link to="/dates">DATES</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link to="/about">ABOUT</Link>
        <Link className="active" to="/contact">CONTACT</Link>
      </div>

      <div className="contact-container">
        <h1>Contact Us:</h1>
        <p>areyougettingthisband@gmail.com</p>
        <p style={{ fontSize: '12px' }}>(please be nice)</p>
      </div>
    </div>
  );
}

export default ContactPage;
