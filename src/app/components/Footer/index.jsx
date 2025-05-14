import React from 'react';
import Link from 'next/link';
import '@/styles/_footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__section">
            <h3 className="footer__title">About Us</h3>
            <p className="footer__text">
              Your company description goes here. Add a brief overview of your business.
            </p>
          </div>
          
          <div className="footer__section">
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__links">
              <li><Link href="/" className="footer__link">Home</Link></li>
              <li><Link href="/about" className="footer__link">About</Link></li>
              <li><Link href="/services" className="footer__link">Services</Link></li>
              <li><Link href="/contact" className="footer__link">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer__section">
            <h3 className="footer__title">Contact Info</h3>
            <ul className="footer__contact">
              <li>Email: info@example.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Street Name, City, Country</li>
            </ul>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;