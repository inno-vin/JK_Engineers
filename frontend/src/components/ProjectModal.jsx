import React, { useEffect } from 'react';
import { 
  X, 
  Building2, 
  Calendar, 
  Tag, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Briefcase
} from 'lucide-react';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose, onDiscussProject }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is active
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button 
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-badge-row">
            <span className="modal-badge-red">{project.badge}</span>
            <span className="modal-sector-tag">{project.sector}</span>
          </div>
          <h2 className="modal-client">{project.client}</h2>
          <h3 className="modal-project-title">{project.projectTitle}</h3>
        </div>

        {/* Key Metrics Strip */}
        <div className="modal-metrics-strip">
          <div className="m-metric-item">
            <Building2 size={16} className="m-metric-icon" />
            <div>
              <span className="m-metric-label">Project Scale</span>
              <span className="m-metric-value">{project.scale}</span>
            </div>
          </div>

          <div className="m-metric-item">
            <Calendar size={16} className="m-metric-icon" />
            <div>
              <span className="m-metric-label">Timeline</span>
              <span className="m-metric-value">{project.timeline}</span>
            </div>
          </div>

          <div className="m-metric-item">
            <Briefcase size={16} className="m-metric-icon" />
            <div>
              <span className="m-metric-label">Executed Role</span>
              <span className="m-metric-value">{project.role}</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body-content">
          <div className="modal-scope-section">
            <h4 className="modal-section-h4">Contract Scope &amp; Engineering Responsibility</h4>
            <p className="modal-scope-p">{project.scope}</p>
          </div>

          {project.keyDeliverables && project.keyDeliverables.length > 0 && (
            <div className="modal-deliverables-section">
              <h4 className="modal-section-h4">Key Deliverables &amp; Systems Commissioned</h4>
              <ul className="modal-deliv-list">
                {project.keyDeliverables.map((deliv, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className="m-deliv-check" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.highlight && (
            <div className="modal-highlight-box">
              <ShieldCheck size={20} className="m-hl-icon" />
              <div>
                <strong>Key Achievement:</strong> {project.highlight}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer-actions">
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={onClose}
          >
            Close Details
          </button>
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={() => {
              onClose();
              if (onDiscussProject) onDiscussProject(project.client);
            }}
          >
            <span>Discuss Similar Project Requirements</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
