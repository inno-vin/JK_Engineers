import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-navy">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            {/* Replace with actual logo image later */}
            <div className="footer-logo-placeholder">
              <span style={{ fontWeight: 800, fontSize: '24px' }}>JK ENGINEERS</span>
            </div>
            <p className="footer-tagline">
              Engineering Excellence • Innovation • Reliability
            </p>
            <p className="footer-desc">
              Premium engineering design, consultancy, turnkey project execution and industrial supply services.
            </p>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#turnkey">Turnkey Projects</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} />
                <span>Plot No 28, Mythri Lahari, Pedda Amberpet, Hyderabad – 501505</span>
              </li>
              <li>
                <Phone size={18} />
                <a href="tel:8008132387">8008132387</a>
              </li>
              <li>
                <Mail size={18} />
                <a href="mailto:info@jkengineers.com">info@jkengineers.com</a> {/* Placeholder */}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 JK Engineers & Enterprises. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
