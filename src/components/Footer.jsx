import React from 'react';
import './Footer.css'; // Add your styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        <a href="#">Support</a>
        <a href="#">Community</a>
        <a href="#">Hosting</a>
        <a href="#">About</a>
      </div>
      <div className="social-media">
        {/* Add social media icons */}
      </div>
      <p>&copy; 2024 Airbnb, Inc.</p>
    </footer>
  );
};

export default Footer;
