import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  IndianRupee, 
  CheckCircle2, 
  ArrowUpRight,
  Clock
} from 'lucide-react';
import { CURRENT_PROJECTS } from '../data/projectsData';
import './CurrentProjects.css';

export default function CurrentProjects() {
  return (
    <section id="current-projects" className="section current-projects-cinema-section">
      <div className="cp-ambient-glow"></div>

      <div className="container">
        <div className="text-center cp-header-center">
          <div className="enterprise-badge">
            <span className="badge-dot"></span>
            <span>Live 2026 Mandates</span>
          </div>
          <h2 className="heading-lg cp-section-title">Current Projects</h2>
          <p className="text-lg cp-section-subtitle">
            Recent and active mandates executed under JK Engineers &amp; Enterprises since our incorporation in 2026.
          </p>
        </div>

        <div className="current-projects-grid">
          {CURRENT_PROJECTS.map((proj) => (
            <div key={proj.id} className="current-project-card">
              <div className="cp-header">
                <span className="cp-badge">{proj.badge}</span>
                <span className="cp-date">
                  <Calendar size={14} className="cp-icon" />
                  <span>{proj.date}</span>
                </span>
              </div>

              <h3 className="cp-client">{proj.client}</h3>
              <div className="cp-project-title">{proj.project}</div>

              <div className="cp-scope-box">
                <div className="cp-scope-label">Contracted Scope:</div>
                <p className="cp-scope-text">{proj.scope}</p>
              </div>

              <div className="cp-deliverables">
                <div className="cp-deliv-label">Key Deliverables:</div>
                <ul>
                  {proj.deliverables.map((deliv, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={15} className="cp-check" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cp-footer">
                <div className="cp-value-item">
                  <span className="cp-value-label">Contract Value</span>
                  <span className="cp-value-number">{proj.value}</span>
                </div>
                <div className="cp-status-tag">
                  <Clock size={14} />
                  <span>{proj.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
