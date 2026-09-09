import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';
import './Navbar.css';

// Magnetic button component
const MagneticButton = ({ children, href, className, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * 0.35;
    const distanceY = (e.clientY - centerY) * 0.35;
    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.a>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Turnkey Projects', href: '#turnkey' },
    { name: 'Industries', href: '#industries' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="navbar-wrapper">
      <nav
        className={`floating-navbar ${isScrolled ? 'scrolled' : ''}`}
        id="main-nav"
      >
        {/* Brand Logo & Title */}
        <a href="#home" className="nav-brand">
          <div className="logo-badge">
            <img
              src="/assets/logo-transparent.png"
              alt="JK Engineers & Enterprises Logo"
              className="brand-logo"
              onError={(e) => {
                // Fallback to standard logo.png if transparent asset isn't resolved
                e.target.src = '/assets/logo.png';
              }}
            />
          </div>
          <div className="brand-text">
            <div className="brand-name">
              <span>JK</span> ENGINEERS
              <span className="brand-dot"></span>
            </div>
            <span className="brand-sub">ENTERPRISES</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="desktop-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`floating-nav-link ${activeLink === link.name ? 'active' : ''}`}
              onClick={() => setActiveLink(link.name)}
            >
              <span>{link.name}</span>
              <span className="link-glow-indicator"></span>
            </a>
          ))}
        </div>

        {/* Magnetic CTA, Theme Toggle & Mobile Toggle */}
        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'Bright' : 'Cinematic Dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'Bright' : 'Cinematic Dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={17} className="theme-icon sun-icon" /> : <Moon size={17} className="theme-icon moon-icon" />}
            <span className="theme-label">{theme === 'dark' ? 'Bright' : 'Dark'}</span>
          </button>

          <MagneticButton
            href="#contact"
            className="btn-magnetic-touch"
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={16} className="touch-arrow" />
          </MagneticButton>

          <button
            className="mobile-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer / Glass Modal */}
      {isMobileMenuOpen && (
        <motion.div
          className="mobile-glass-overlay"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
        >
          <div className="mobile-menu-container">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => {
                  setActiveLink(link.name);
                  setIsMobileMenuOpen(false);
                }}
              >
                <span>{link.name}</span>
                <ArrowUpRight size={18} className="mobile-link-icon" />
              </a>
            ))}

            <div className="mobile-cta-box">
              <button
                type="button"
                className="theme-toggle-btn mobile-theme-btn"
                onClick={toggleTheme}
              >
                {theme === 'dark' ? <Sun size={18} className="theme-icon sun-icon" /> : <Moon size={18} className="theme-icon moon-icon" />}
                <span>Switch to {theme === 'dark' ? 'Bright Mode' : 'Dark Mode'}</span>
              </button>

              <a
                href="#contact"
                className="btn-magnetic-touch mobile-w100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Get in Touch</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
