import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function HomePage() {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>ARE YOU GETTING THIS!</h1>
      </div>

      <div className="icon-bar">
        <Link className="active" to="/">HOME</Link>
        <Link to="/dates">DATES</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </div>

      <div className="bio">
        <div className="welcome">
          <h1>
            This is the official Are You Getting This! website.
          </h1>
        </div>

        <div className="social-icons">
          <div>
            <p>
              Don't miss out...
            </p>
          </div>
          <div>
            <a href="https://www.instagram.com/areyougettingthisband/" target="_blank" rel="noopener noreferrer">
              <img className="social-icon" src="/images/index/instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>

        <div className="gallery-container">
          <img className="gallery-image" src="/images/index/show.jpg" alt="show" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
