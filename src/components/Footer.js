// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Find me on:</p>
      <a href="#facebook" className="social-media__link" target="_blank" rel="noopener noreferrer">
        <img src="img/facebook.svg" className="social-media__img" alt="facebook logo" />
      </a>
    </footer>
  );
}

export default Footer;
