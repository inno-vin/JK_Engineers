import { useEffect } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const heroImage = document.querySelector('.hero-image');
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-bg-accent"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="heading-lg fade-up">
            Engineering Solutions.<br />
            <span style={{ color: 'var(--accent-red)' }}>Built for Industry.</span>
          </h1>
          <p className="text-lg fade-up delay-100" style={{ color: 'var(--text-dark)' }}>
            JK Engineers & Enterprises provides engineering design and consultancy, turnkey project execution, and industrial engineering material and chemical supply solutions.
          </p>
          <div className="hero-buttons fade-up delay-200">
            <a href="#services" className="btn btn-primary">
              Explore Our Services <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </a>
            <a 
              href="https://wa.me/918008132387?text=Hello%20JK%20Engineers%20%26%20Enterprises%2C%20I%20would%20like%20to%20know%20more%20about%20your%20engineering%20services." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
        
        <div className="hero-visual fade-up delay-300">
          <div className="hero-image-wrapper">
            {/* Using a placeholder industrial image */}
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
              alt="Industrial Engineering Plant" 
              className="hero-image"
            />
            <div className="hero-image-overlay"></div>
            <div className="hero-graphic-1"></div>
            <div className="hero-graphic-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
