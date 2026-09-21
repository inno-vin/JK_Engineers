import React from 'react';
import { 
  Droplet, 
  FlaskConical, 
  Layers, 
  ArrowRight,
  Building
} from 'lucide-react';
import { SPECIAL_PROJECTS } from '../data/projectsData';
import './SpecialProjects.css';

export default function SpecialProjects({ onOpenModal }) {
  return (
    <section id="special-projects" className="section special-projects-cinema-section">
      <div className="sp-ambient-glow"></div>

      <div className="container">
        <div className="text-center sp-header">
          <div className="enterprise-badge">
            <span className="badge-dot"></span>
            <span>Specialized Separation &amp; Effluents</span>
          </div>
          <h2 className="heading-lg sp-title">Major Special Projects</h2>
          <p className="text-lg sp-subtitle">
            Engineered recovery systems, distillation columns, and multiple-effect effluent evaporation for zero liquid discharge compliance.
          </p>
        </div>

        {/* Industrial Data Table for Desktop */}
        <div className="special-table-card desktop-table">
          <div className="table-responsive">
            <table className="special-projects-table">
              <thead>
                <tr>
                  <th>Client / Organization</th>
                  <th>System Category</th>
                  <th>Engineering Scope</th>
                  <th>Key Products / Solvents Handled</th>
                </tr>
              </thead>
              <tbody>
                {SPECIAL_PROJECTS.map((sp) => (
                  <tr key={sp.id} className="table-row-hover">
                    <td className="client-cell">
                      <div className="client-name-bold">{sp.client}</div>
                    </td>
                    <td>
                      <span className={`system-badge ${sp.category === 'Environmental' ? 'green' : 'blue'}`}>
                        {sp.system}
                      </span>
                    </td>
                    <td className="scope-cell">
                      {sp.scope}
                    </td>
                    <td className="products-cell">
                      <span className="products-badge">{sp.keyProducts}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Responsive Cards for Tablet/Mobile */}
        <div className="special-cards-mobile">
          {SPECIAL_PROJECTS.map((sp) => (
            <div key={sp.id} className="special-mobile-card">
              <div className="smc-header">
                <h4 className="smc-client">{sp.client}</h4>
                <span className={`system-badge ${sp.category === 'Environmental' ? 'green' : 'blue'}`}>
                  {sp.system}
                </span>
              </div>
              <div className="smc-row">
                <span className="smc-label">Scope:</span>
                <span className="smc-value">{sp.scope}</span>
              </div>
              <div className="smc-row">
                <span className="smc-label">Key Output:</span>
                <span className="products-badge">{sp.keyProducts}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
