import React from 'react';
import { 
  Cpu, 
  Layers, 
  DraftingCompass, 
  Box, 
  CheckCircle,
  Binary
} from 'lucide-react';
import { SOFTWARE_TOOLS } from '../data/companyData';
import './SoftwareTools.css';

const toolIcons = [
  Cpu,
  Binary,
  DraftingCompass,
  Box
];

export default function SoftwareTools() {
  return (
    <section id="software" className="section software-tools-cinema-section">
      <div className="container">
        <div className="text-center tools-header">
          <div className="enterprise-badge">
            <span className="badge-dot"></span>
            <span>Digital Engineering Stack</span>
          </div>
          <h2 className="heading-lg tools-title">Engineering Software &amp; Simulation Tools</h2>
          <p className="text-lg tools-subtitle">
            “Applied for process simulation, design, drafting and engineering coordination.”
          </p>
        </div>

        <div className="tools-grid">
          {SOFTWARE_TOOLS.map((tool, index) => {
            const IconComponent = toolIcons[index] || Cpu;
            return (
              <div key={tool.name} className="tool-card">
                <div className="tool-card-top">
                  <div className="tool-icon-box">
                    <IconComponent size={26} />
                  </div>
                  <span className="tool-category-badge">{tool.category}</span>
                </div>

                <div className="tool-name-row">
                  <h3 className="tool-name">{tool.name}</h3>
                  <span className="tool-tagline">{tool.tagline}</span>
                </div>

                <p className="tool-desc">{tool.description}</p>

                <div className="tool-capabilities">
                  <div className="tool-caps-title">Applications:</div>
                  <div className="tool-caps-tags">
                    {tool.capabilities.map((cap, idx) => (
                      <span key={idx} className="tool-cap-tag">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
