import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
       

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Bibi Moriom. All rights reserved.</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
