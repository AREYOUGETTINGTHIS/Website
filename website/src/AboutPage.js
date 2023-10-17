import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';  // Assuming the CSS file is shared between pages

function AboutPage() {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>ARE YOU GETTING THIS!</h1>
      </div>

      <div className="icon-bar">
        <Link to="/">HOME</Link>
        <Link to="/dates">DATES</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link className="active" to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </div>

      <div className="bio">
        <div className="title">
          <h1>Who are we?</h1>
        </div>
        <p>Here's our beautiful boys.</p>
      </div>

      <div className="member">
        <img src="/images/about/perdoom.png" alt="Pradyumn - Lead Vocals" className="member-image" />
        <div className="member-description">
          <h2>Pradyumn - Vocals / Keys</h2>
          <p>Pradyumn is our lead singer. His instinct is to fight rather than flee.</p>
        </div>
      </div>

      <div className="member member-reverse">
        <img src="/images/about/will.png" alt="Will - Guitar / Vocals" className="member-image" />
        <div className="member-description">
          <h2>Will - Guitar</h2>
          <p>Will asked to not have a bio to, "maintain the element of mystery". He's getting this.</p>
        </div>
      </div>

      <div className="member">
        <img src="/images/about/cole.jpg" alt="Cole - Bass / Saxophone" className="member-image" />
        <div className="member-description">
          <h2>Cole - Bass / Saxophone</h2>
          <p>Not your grandpa's bassist. Cole, a music student, is overqualified.</p>
        </div>
      </div>

      <div className="member member-reverse">
        <img src="/images/about/som.png" alt="Sam - Drums / Production" className="member-image" />
        <div className="member-description">
          <h2>Sam - Drums</h2>
          <p>Sam plays drums. I also made the website, not for nothing.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
