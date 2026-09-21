import React from 'react';
import { 
  ShieldAlert, 
  Award, 
  FileCheck, 
  CheckCircle,
  Star
} from 'lucide-react';
import { ACHIEVEMENTS } from '../data/companyData';
import './Achievements.css';

const achIcons = {
  ShieldAlert: ShieldAlert,
  Award: Award,
  FileCheck: FileCheck
};

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements-cinema-section">
      <div className="achievements-ambient-glow"></div>

      <div className="container">
        <div className="section-header text-center achievements-header">
          <div className="enterprise-badge">
            <span className="badge-dot"></span>
            <span>Honors &amp; Recognition</span>
          </div>
          <h2 className="heading-lg achievements-title">Company &amp; Leadership Achievements</h2>
          <p className="text-lg achievements-subtitle">
            Industry accolades reflecting uncompromising dedication to plant safety, engineering simplification, and quality compliance.
          </p>
        </div>

        <div className="achievements-grid">
          {ACHIEVEMENTS.map((ach) => {
            const IconComponent = achIcons[ach.icon] || Award;
            return (
              <div key={ach.id} className="achievement-card">
                <div className="ach-card-top">
                  <div className="ach-icon-box">
                    <IconComponent size={26} />
                  </div>
                  <span className="ach-badge">{ach.badge}</span>
                </div>

                <h3 className="ach-title">{ach.title}</h3>
                <div className="ach-issuer">{ach.issuer}</div>

                <p className="ach-desc">{ach.description}</p>

                <div className="ach-card-footer">
                  <span className="ach-verif">
                    <CheckCircle size={15} />
                    <span>Verified Professional Distinction</span>
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
