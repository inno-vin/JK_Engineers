import React, { useState } from 'react';
import { 
  Building2, 
  Calendar, 
  CheckCircle2, 
  ChevronRight, 
  Briefcase,
  Layers
} from 'lucide-react';
import { EXPERIENCE_TIMELINE } from '../data/companyData';
import './ExperienceTimeline.css';

export default function ExperienceTimeline() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="experience" className="section timeline-cinema-section">
      <div className="timeline-ambient-glow"></div>

      <div className="container">
        <div className="text-center timeline-header">
          <div className="enterprise-badge">
            <span className="badge-dot"></span>
            <span>Two Decades of Excellence</span>
          </div>
          <h2 className="heading-lg timeline-title">Professional Experience Timeline</h2>
          <p className="text-lg timeline-subtitle">
            Chronological milestone history of founder Janaki Ram Kandikanti across high-impact corporate engineering assignments (1999 – 2026).
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-spine"></div>

          {EXPERIENCE_TIMELINE.map((item, index) => {
            const isExpanded = expandedIndex === index;
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index} 
                className={`timeline-node-wrapper ${isEven ? 'align-left' : 'align-right'}`}
              >
                {/* Node Center Marker */}
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                </div>

                {/* Content Box */}
                <div 
                  className={`timeline-card ${isExpanded ? 'active-card' : ''}`}
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                >
                  <div className="tl-card-header">
                    <span className="tl-period">
                      <Calendar size={13} className="tl-cal-icon" />
                      <span>{item.period}</span>
                    </span>
                    <span className="tl-scale-badge">{item.scale}</span>
                  </div>

                  <h3 className="tl-company">{item.company}</h3>
                  <h4 className="tl-role">{item.role}</h4>

                  <p className="tl-desc">{item.description}</p>

                  {/* Expandable Key Highlights */}
                  <div className="tl-highlights">
                    <div className="tl-hl-title">Key Engineering Deliverables:</div>
                    <ul>
                      {item.highlights.map((hl, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={14} className="hl-check" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
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
