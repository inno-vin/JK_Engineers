import React, { useState } from 'react';
import { 
  FlaskConical, 
  Gauge, 
  LayoutGrid, 
  Zap, 
  AirVent, 
  Leaf, 
  CheckCircle2, 
  Scale, 
  ChevronRight,
  Check
} from 'lucide-react';
import { CAPABILITIES } from '../data/companyData';
import './Capabilities.css';

const capabilityIcons = {
  FlaskConical: FlaskConical,
  Gauge: Gauge,
  LayoutGrid: LayoutGrid,
  Zap: Zap,
  AirVent: AirVent,
  Leaf: Leaf,
  CheckCircle2: CheckCircle2,
  Scale: Scale
};

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState(0);

  const currentCapability = CAPABILITIES[activeTab];
  const CurrentIcon = capabilityIcons[currentCapability.icon] || FlaskConical;

  return (
    <section id="capabilities" className="section capabilities-cinema-section">
      <div className="capabilities-ambient-glow"></div>

      <div className="container">
        <div className="text-center capabilities-header">
          <div className="enterprise-badge">
            <span className="badge-dot"></span>
            <span>Multidisciplinary Engineering</span>
          </div>
          <h2 className="heading-lg capabilities-title">Project Capabilities – Detailed Scope</h2>
          <p className="text-lg capabilities-subtitle">
            Rigorous multidisciplinary engineering capabilities covering all eight essential disciplines required for modern manufacturing complexes.
          </p>
        </div>

        <div className="capabilities-layout">
          {/* Navigation Sidebar / Tabs */}
          <div className="capabilities-nav">
            {CAPABILITIES.map((cap, index) => {
              const IconComp = capabilityIcons[cap.icon] || FlaskConical;
              const isActive = index === activeTab;
              return (
                <button
                  key={cap.id}
                  className={`cap-nav-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                  type="button"
                >
                  <div className="cap-nav-icon-box">
                    <IconComp size={18} />
                  </div>
                  <div className="cap-nav-text">
                    <span className="cap-nav-index">0{index + 1}</span>
                    <span className="cap-nav-title">{cap.title}</span>
                  </div>
                  <ChevronRight size={16} className="cap-nav-arrow" />
                </button>
              );
            })}
          </div>

          {/* Active Detail Display Box */}
          <div className="capability-display-card">
            <div className="cap-display-header">
              <div className="cap-header-icon-box">
                <CurrentIcon size={32} />
              </div>
              <div>
                <span className="cap-category-badge">{currentCapability.category}</span>
                <h3 className="cap-display-title">
                  0{activeTab + 1}. {currentCapability.title}
                </h3>
              </div>
            </div>

            <p className="cap-display-description">
              {currentCapability.description}
            </p>

            <div className="cap-items-box">
              <div className="cap-items-label">Covered Engineering Scope:</div>
              <div className="cap-items-grid">
                {currentCapability.items.map((item, idx) => (
                  <div key={idx} className="cap-item-badge">
                    <div className="cap-bullet-dot"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Support Callout */}
            <div className="cap-bottom-callout">
              <span className="callout-lead">Full Documentation &amp; Coordination:</span>
              <span>All deliverables include rigorous 2D/3D documentation, vendor compliance checks, and adherence to statutory PCB, cGMP, and factory safety standards.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
