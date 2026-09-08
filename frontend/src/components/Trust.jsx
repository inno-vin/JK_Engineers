import { ArrowRight } from 'lucide-react';
import './Trust.css';

const Trust = () => {
  return (
    <section id="about" className="section trust-section">
      <div className="container">
        <div className="trust-grid">
          <div className="trust-content">
            <span className="heading-sm fade-up">JK ENGINEERS & ENTERPRISES</span>
            <h2 className="heading-lg fade-up delay-100">Engineering Expertise.<br />From Concept to Commissioning.</h2>
            <div className="trust-text fade-up delay-200">
              <p>
                JK Engineers & Enterprises is an emerging engineering enterprise focused on delivering dependable engineering solutions, project execution support and industrial supply services.
              </p>
              <p>
                Our approach combines technical expertise, reliability and practical industry-focused solutions to help clients move from concept to successful implementation.
              </p>
            </div>
            <div className="fade-up delay-300" style={{ marginTop: '32px' }}>
              <a href="#services" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Know More About Us <ArrowRight size={18} />
              </a>
            </div>
          </div>
          
          <div className="trust-visual fade-up delay-400">
             <div className="trust-pattern"></div>
             <div className="trust-card">
               <div className="trust-card-icon"></div>
               <h3>Reliability Built-in</h3>
               <p>Dependable solutions for critical industrial operations.</p>
             </div>
             <div className="trust-card" style={{ marginTop: '40px', transform: 'translateX(-40px)' }}>
               <div className="trust-card-icon red"></div>
               <h3>Technical Excellence</h3>
               <p>Expert engineering and consultancy at every stage.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
