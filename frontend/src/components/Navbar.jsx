import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Sun, 
  Moon, 
  ChevronDown,
  ShieldCheck,
  Workflow,
  Layers,
  Cpu,
  Factory,
  Clock,
  Droplets,
  Calendar,
  Award,
  Target
} from 'lucide-react';
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const dropdownRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const primaryNavLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Projects', href: '#projects' },
    { name: 'Founder & Director', href: '#founder' },
  ];

  const exploreLinks = [
    { name: 'What We Bring', href: '#what-we-bring', desc: 'Core practical advantages', icon: ShieldCheck },
    { name: 'What We Support', href: '#what-we-support', desc: '7-phase project lifecycle', icon: Workflow },
    { name: 'Turnkey Pipeline', href: '#turnkey', desc: 'Concept to commissioning', icon: Layers },
    { name: 'Software & Tools', href: '#software', desc: 'ASPEN, CHEMCAD, AutoCAD', icon: Cpu },
    { name: 'Target Industries', href: '#industries', desc: 'Pharma, Biotech & Chemicals', icon: Factory },
    { name: 'Current Projects', href: '#current-projects', desc: 'Active 2026 mandates', icon: Clock },
    { name: 'Special Projects', href: '#special-projects', desc: 'Solvent & MEE evaporation', icon: Droplets },
    { name: 'Experience Timeline', href: '#experience', desc: '1999–2026 milestones', icon: Calendar },
    { name: 'Achievements', href: '#achievements', desc: 'DuPont & Safety awards', icon: Award },
    { name: 'Why Choose Us', href: '#why-us', desc: 'Engineering certainty', icon: Target },
  ];

  const handleLinkClick = (name, href) => {
    setActiveLink(name);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-wrapper">
      <nav
        className={`floating-navbar ${isScrolled ? 'scrolled' : ''}`}
        id="main-nav"
      >
        {/* Brand Logo & Title */}
        <a 
          href="#home" 
          className="nav-brand"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('Home', '#home');
          }}
        >
          <div className="logo-badge">
            <img
              src="/assets/logo-transparent.png"
              alt="JK Engineers & Enterprises Logo"
              className="brand-logo"
              onError={(e) => {
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

        {/* Desktop Navigation Links with Consolidated Dropdown */}
        <div className="desktop-nav-links">
          {primaryNavLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`floating-nav-link ${activeLink === link.name ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.name, link.href);
              }}
            >
              <span>{link.name}</span>
              <span className="link-glow-indicator"></span>
            </a>
          ))}

          {/* Consolidated "Explore" Dropdown Menu */}
          <div className="nav-dropdown-wrapper" ref={dropdownRef}>
            <button
              type="button"
              className={`floating-nav-link nav-dropdown-btn ${isDropdownOpen ? 'active' : ''}`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              <span>Explore</span>
              <ChevronDown 
                size={14} 
                className={`dropdown-chevron ${isDropdownOpen ? 'chevron-rotated' : ''}`} 
              />
              <span className="link-glow-indicator"></span>
            </button>

            {/* Dropdown Mega Menu */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  className="nav-dropdown-menu"
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="dropdown-menu-header">
                    <span className="dropdown-header-label">Quick Jump to Sections</span>
                    <span className="dropdown-header-count">{exploreLinks.length} Destinations</span>
                  </div>

                  <div className="dropdown-grid">
                    {exploreLinks.map((item) => {
                      const IconComp = item.icon;
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className="dropdown-item-link"
                          onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick(item.name, item.href);
                          }}
                        >
                          <div className="dropdown-item-icon-box">
                            <IconComp size={16} />
                          </div>
                          <div className="dropdown-item-text">
                            <span className="dropdown-item-name">{item.name}</span>
                            <span className="dropdown-item-desc">{item.desc}</span>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#contact"
            className={`floating-nav-link ${activeLink === 'Contact' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('Contact', '#contact');
            }}
          >
            <span>Contact</span>
            <span className="link-glow-indicator"></span>
          </a>
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
            onClick={() => handleLinkClick('Contact', '#contact')}
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
            <div className="mobile-menu-section-title">Main Navigation</div>
            {primaryNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.name, link.href);
                }}
              >
                <span>{link.name}</span>
                <ArrowUpRight size={18} className="mobile-link-icon" />
              </a>
            ))}

            <a
              href="#contact"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('Contact', '#contact');
              }}
            >
              <span>Contact</span>
              <ArrowUpRight size={18} className="mobile-link-icon" />
            </a>

            {/* Mobile All Sections Accordion */}
            <div className="mobile-menu-section-title" style={{ marginTop: '20px' }}>
              All Sections &amp; Headings
            </div>
            <div className="mobile-sublinks-grid">
              {exploreLinks.map((item) => {
                const IconComp = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="mobile-sublink-item"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.name, item.href);
                    }}
                  >
                    <IconComp size={15} className="mobile-sublink-icon" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>

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
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleLinkClick('Contact', '#contact');
                }}
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
