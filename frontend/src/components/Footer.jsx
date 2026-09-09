import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="cinema-footer">
      <div className="container">
        <div className="footer-layout-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-brand-link">
              <div className="footer-logo-badge">
                <img
                  src="/assets/logo-transparent.png"
                  alt="JK Engineers & Enterprises"
                  className="footer-logo"
                  onError={(e) => {
                    e.target.src = '/assets/logo.png';
                  }}
                />
              </div>
              <div className="footer-brand-text">
                <span className="footer-name"><span>JK</span> ENGINEERS</span>
                <span className="footer-tag">ENTERPRISES</span>
              </div>
            </a>

            <p className="footer-tagline">
              Engineering Excellence • Turnkey Execution • Certified Supply
            </p>
            <p className="footer-summary">
              Delivering high-precision engineering design and consultancy, end-to-end turnkey project execution, and certified industrial supplies across India.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services & Solutions</a></li>
              <li><a href="#turnkey">Turnkey Projects</a></li>
              <li><a href="#industries">Industries We Serve</a></li>
              <li><a href="#contact">Contact & Inquiries</a></li>
            </ul>
          </div>

          {/* Quick Contact Column */}
          <div className="footer-contact-col">
            <h4 className="footer-col-heading">Headquarters & Contact</h4>
            <ul className="footer-contact-items">
              <li className="f-contact-item">
                <MapPin size={18} className="f-icon" />
                <span>
                  Plot No 28, Mythri Lahari, Pasumamula Road, Pedda Amberpet,
                  Hayathnagar, Rangareddy, Hyderabad – 501505
                </span>
              </li>
              <li className="f-contact-item">
                <Phone size={18} className="f-icon" />
                <a href="tel:8008132387">+91 8008132387</a>
              </li>
              <li className="f-contact-item">
                <Mail size={18} className="f-icon" />
                <a href="mailto:kandhikanti@yahoo.co.in">kandhikanti@yahoo.co.in</a>
              </li>
              <li className="f-contact-item">
                <div className="gst-mini-tag">GSTIN</div>
                <span className="mono-text">36BOLPK1512D2ZB</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer-bottom-strip">
          <p>&copy; 2026 JK Engineers & Enterprises. All Rights Reserved.</p>
          <div className="footer-bottom-status">
            <span className="status-live-dot"></span>
            <span>Operations & Inquiries Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
