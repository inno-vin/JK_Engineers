import React from 'react';
import { 
  Building2, 
  Target, 
  FileBadge2, 
  Compass, 
  Layers, 
  Boxes, 
  CheckCircle2, 
  ArrowRight,
  MapPin
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import './CompanyOverview.css';

export default function CompanyOverview() {
  return (
    <section id="about" className="section company-overview-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-tag red">Corporate Profile</span>
          <h2 className="section-title">About JK Engineers & Enterprises</h2>
          <p className="section-subtitle">
            Engineering excellence, practical execution capability, and dependable industrial solutions.
          </p>
          <div className="red-accent-bar"></div>
        </div>

        {/* 2-Column Overview */}
        <div className="overview-main-grid">
          {/* Left Column: Mission & Core Description */}
          <div className="overview-text-column">
            <h3 className="overview-heading">
              Practical Engineering Expertise From Concept to Commissioning
            </h3>
            
            <p className="overview-lead-p">
              {COMPANY_INFO.businessDescription}
            </p>

            <div className="value-prop-card">
              <div className="value-prop-header">
                <Target size={20} className="icon-gold" />
                <span className="value-prop-title">Core Value Proposition</span>
              </div>
              <p className="value-prop-text">
                “{COMPANY_INFO.valueProposition}”
              </p>
            </div>

            <p className="overview-body-p">
              We bridge the traditional gap between pure desk consultants and on-site contractors. Because our engineering leadership is rooted in 20+ years of active plant floor execution, our process designs, P&IDs, and equipment specifications are built to perform reliably in real industrial environments.
            </p>

            <div className="official-credentials-box">
              <div className="cred-item">
                <FileBadge2 size={18} className="cred-icon" />
                <div>
                  <span className="cred-label">GSTIN / Registration:</span>
                  <span className="cred-value">{COMPANY_INFO.gstNumber}</span>
                </div>
              </div>
              <div className="cred-item">
                <MapPin size={18} className="cred-icon" />
                <div>
                  <span className="cred-label">Operating Headquarters:</span>
                  <span className="cred-value">Hayathnagar, Hyderabad, Telangana</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Core Business Pillars */}
          <div className="overview-pillars-column">
            <h4 className="pillars-heading">Our Three Core Business Pillars</h4>
            
            <div className="pillars-stack">
              {/* Pillar 1 */}
              <div className="pillar-card">
                <div className="pillar-number">01</div>
                <div className="pillar-content">
                  <div className="pillar-title-row">
                    <Compass size={20} className="pillar-icon" />
                    <h5>Engineering Design & Consultation</h5>
                  </div>
                  <p>
                    Conceptual, basic, and detailed process engineering; PFDs, P&IDs, equipment sizing, plant layouts, and multi-discipline coordination.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="pillar-card highlight-pillar">
                <div className="pillar-number">02</div>
                <div className="pillar-content">
                  <div className="pillar-title-row">
                    <Layers size={20} className="pillar-icon" />
                    <h5>Turnkey Projects</h5>
                  </div>
                  <p>
                    End-to-end execution of greenfield plants and brownfield expansions, covering engineering, procurement, construction coordination, and plant commissioning.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="pillar-card">
                <div className="pillar-number">03</div>
                <div className="pillar-content">
                  <div className="pillar-title-row">
                    <Boxes size={20} className="pillar-icon" />
                    <h5>Industrial Supplies</h5>
                  </div>
                  <p>
                    Reliable supply support for engineering materials, process piping, specialized valves, and industrial chemicals through an audited vendor network.
                  </p>
                </div>
              </div>
            </div>

            {/* Model Formula Banner */}
            <div className="model-formula-banner">
              <span className="formula-part">Plant Experience</span>
              <span className="formula-plus">+</span>
              <span className="formula-part">Design Acumen</span>
              <span className="formula-plus">+</span>
              <span className="formula-part">Turnkey Delivery</span>
              <span className="formula-plus">+</span>
              <span className="formula-part">Supplies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
