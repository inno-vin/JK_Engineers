import React from 'react';
import { 
  Compass, 
  Settings, 
  Layers, 
  CalendarCheck2, 
  ShoppingBag, 
  Hammer, 
  FileCheck2,
  ArrowRight
} from 'lucide-react';
import { WHAT_WE_SUPPORT } from '../data/companyData';
import './WhatWeSupport.css';

const supportIcons = [
  Compass,
  Settings,
  Layers,
  CalendarCheck2,
  ShoppingBag,
  Hammer,
  FileCheck2
];

export default function WhatWeSupport() {
  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="what-we-support" className="section what-we-support-cinema-section">
      <div className="support-ambient-glow"></div>

      <div className="container">
        <div className="section-header text-center support-header">
          <div className="enterprise-badge">
            <span className="badge-dot"></span>
            <span>Project Lifecycle Support</span>
          </div>
          <h2 className="heading-lg support-title">What We Support</h2>
          <p className="text-lg support-subtitle">
            Comprehensive lifecycle engineering services from initial technical feasibility to final cGMP facility qualification and handover.
          </p>
        </div>

        {/* Process Flow 7-Phase Grid */}
        <div className="support-flow-container">
          <div className="support-flow-grid">
            {WHAT_WE_SUPPORT.map((item, index) => {
              const IconComp = supportIcons[index] || Compass;
              const isRed = index % 2 === 0;

              return (
                <div 
                  key={item.title} 
                  className={`spotlight-card support-step-card ${isRed ? 'card-border-red' : 'card-border-cyan'}`}
                  onMouseMove={handleCardMouseMove}
                >
                  <div className="step-badge-row">
                    <span className="step-pill">Phase {item.step}</span>
                    <div className="step-icon-wrap">
                      <IconComp size={18} className={isRed ? 'icon-red' : 'icon-cyan'} />
                    </div>
                  </div>
                  <h3 className="step-title">{item.title}</h3>
                  <p className="step-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Bottom Banner */}
        <div className="support-summary-banner">
          <div className="summary-banner-text">
            <h3>Need End-to-End Engineering Support for Your Project?</h3>
            <p>From initial concept mass balances to regulatory qualification protocols, we ensure single-point technical accountability.</p>
          </div>
          <a href="#contact" className="btn btn-primary support-cta-btn">
            <span>Schedule Technical Discussion</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
