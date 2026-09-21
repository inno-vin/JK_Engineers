import React from 'react';
import { motion } from 'framer-motion';
import { 
  Pipette, 
  Dna, 
  Wheat, 
  FlaskConical, 
  Utensils, 
  Factory,
  CheckCircle2,
  Building2
} from 'lucide-react';
import { TARGET_INDUSTRIES } from '../data/companyData';
import './Industries.css';

const industryIcons = {
  'pharma-api': Pipette,
  'biotechnology': Dna,
  'agro-chemicals': Wheat,
  'specialty-chemicals': FlaskConical,
  'food-beverage': Utensils,
  'engineering-manufacturing': Factory
};

export default function Industries() {
  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="industries" className="section industries-cinema-section">
      <div className="industries-ambient-glow"></div>

      <div className="container">
        <motion.div
          className="text-center industries-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="enterprise-badge">
            <span className="badge-dot"></span>
            <span>Target Industries</span>
          </div>
          <h2 className="heading-lg industries-title">
            Industries We Serve.
          </h2>
          <p className="text-lg industries-subtitle">
            “Focus: reliable, practical and execution-oriented engineering support.” Tailored engineering solutions engineered specifically for demanding regulatory environments.
          </p>
        </motion.div>

        <div className="industries-bento-grid">
          {TARGET_INDUSTRIES.map((industry, index) => {
            const IconComp = industryIcons[industry.id] || Factory;
            const isRed = index % 2 === 0;

            return (
              <motion.div
                key={industry.id}
                className={`spotlight-card industry-bento-card ${isRed ? 'card-glow-red' : 'card-glow-cyan'}`}
                onMouseMove={handleCardMouseMove}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -6,
                  scale: 1.015,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="industry-top-row">
                  <div className={`industry-icon-wrapper ${isRed ? 'ind-icon-red' : 'ind-icon-cyan'}`}>
                    <IconComp size={26} />
                  </div>
                  <span className="industry-index-num">0{index + 1}</span>
                </div>

                <h3 className="industry-card-name">{industry.name}</h3>
                <span className="industry-card-tagline">{industry.tagline}</span>
                <p className="industry-card-desc">{industry.description}</p>

                {/* Scope & Capabilities Tags */}
                <div className="industry-tags-wrap">
                  {industry.relevantCapabilities.slice(0, 3).map((cap, i) => (
                    <span key={i} className="industry-cap-tag">
                      {cap}
                    </span>
                  ))}
                </div>

                {/* Featured Reference Projects */}
                <div className="industry-projects-box">
                  <div className="ind-projects-label">
                    <Building2 size={13} />
                    <span>Reference Projects:</span>
                  </div>
                  <div className="ind-projects-list">
                    {industry.featuredProjects.map((p, i) => (
                      <span key={i} className="ind-project-pill">{p}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
