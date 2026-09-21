import React from 'react';
import { 
  ShieldCheck, 
  FlaskConical, 
  Building2, 
  Cpu, 
  Network, 
  Handshake,
  Check
} from 'lucide-react';
import { WHAT_WE_BRING } from '../data/companyData';
import './WhatWeBring.css';

const iconMap = {
  ShieldCheck: ShieldCheck,
  FlaskConical: FlaskConical,
  Building2: Building2,
  Cpu: Cpu,
  Network: Network,
  Handshake: Handshake
};

export default function WhatWeBring() {
  return (
    <section id="what-we-bring" className="section what-we-bring-cinema-section">
      <div className="bring-ambient-glow"></div>
      <div className="container">
        <div className="section-header text-center bring-header">
          <div className="enterprise-badge">
            <span className="badge-dot"></span>
            <span>Competitive Advantage</span>
          </div>
          <h2 className="heading-lg bring-title">What We Bring</h2>
          <p className="text-lg bring-subtitle">
            Distinct practical capabilities acquired through two decades of plant floor execution and multidisciplinary leadership.
          </p>
        </div>

        <div className="bring-grid">
          {WHAT_WE_BRING.map((item, index) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <div key={item.title} className="bring-card">
                <div className="bring-card-top">
                  <div className="bring-icon-box">
                    <IconComponent size={24} className="bring-icon" />
                  </div>
                  <span className="bring-index">0{index + 1}</span>
                </div>
                <h3 className="bring-card-title">{item.title}</h3>
                <p className="bring-card-desc">{item.desc}</p>
                <div className="bring-card-footer">
                  <span className="bring-check-badge">
                    <Check size={14} />
                    <span>Proven Strength</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
