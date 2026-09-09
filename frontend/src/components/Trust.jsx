import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cpu, CheckCircle, Award, Workflow, Sparkles } from 'lucide-react';
import './Trust.css';

const featureCards = [
  {
    id: 'reliability',
    title: 'Reliability Built-in',
    tag: 'Industrial Assurance',
    description: 'Dependable, heavy-duty engineering solutions built for continuous operation in mission-critical industrial plants.',
    icon: ShieldCheck,
    accent: 'cyan',
    stats: '99.8% Execution Reliability',
  },
  {
    id: 'excellence',
    title: 'Technical Excellence',
    tag: 'Turnkey Mastery',
    description: 'Expert engineering consultancy, precision 3D CAD design, and high-performance industrial material procurement.',
    icon: Cpu,
    accent: 'red',
    stats: 'Certified Engineering Standards',
  },
];

const capabilities = [
  {
    icon: Workflow,
    title: 'Concept to Commissioning',
    desc: 'Systematic lifecycle from feasibility to on-site testing.',
  },
  {
    icon: Award,
    title: 'Rigorous Quality Compliance',
    desc: 'Zero-compromise safety adhering to industrial codes.',
  },
  {
    icon: CheckCircle,
    title: 'Specialized Industrial Supply',
    desc: 'High-grade alloys, chemicals, and industrial hardware.',
  },
];

const Trust = () => {
  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="about" className="section trust-cinema-section">
      {/* Dynamic Ambient Background Glow */}
      <div className="trust-ambient-orb"></div>

      <div className="container">
        <div className="trust-grid-layout">
          {/* Left Column: Narrative & Capabilities */}
          <motion.div
            className="trust-narrative-col"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="enterprise-badge">
              <span className="badge-dot"></span>
              <span>Engineering Excellence</span>
            </div>

            <h2 className="heading-lg trust-cinema-title">
              Engineering Expertise.<br />
              <span className="trust-title-gradient">From Concept to Commissioning.</span>
            </h2>

            <div className="trust-cinema-desc">
              <p>
                JK Engineers & Enterprises delivers high-caliber engineering consultancy, complete turnkey project execution, and premium industrial material & chemical supply services.
              </p>
              <p>
                We bridge the gap between engineering concept and successful plant operationalization with precision, safety, and rigorous quality assurance.
              </p>
            </div>

            {/* Key Capabilities List */}
            <div className="capabilities-stack">
              {capabilities.map((cap, idx) => {
                const IconComponent = cap.icon;
                return (
                  <motion.div
                    key={idx}
                    className="capability-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                  >
                    <div className="capability-icon-container">
                      <IconComponent size={18} className="cap-icon" />
                    </div>
                    <div>
                      <h4 className="capability-heading">{cap.title}</h4>
                      <p className="capability-summary">{cap.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div style={{ marginTop: '36px' }}>
              <motion.a
                href="#services"
                className="btn btn-outline trust-explore-btn"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Explore Full Capabilities</span>
                <ArrowRight size={18} className="btn-arrow" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Spotlight Bento Cards */}
          <div className="trust-bento-wrapper">
            <div className="bento-cards-stack">
              {featureCards.map((card, index) => {
                const IconComp = card.icon;
                const isRed = card.accent === 'red';

                return (
                  <motion.div
                    key={card.id}
                    className={`spotlight-card bento-feature-card ${isRed ? 'card-border-red' : 'card-border-cyan'}`}
                    onMouseMove={handleCardMouseMove}
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-70px' }}
                    transition={{
                      duration: 0.75,
                      delay: index * 0.2,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{
                      y: -6,
                      scale: 1.01,
                      transition: { duration: 0.25 },
                    }}
                  >
                    {/* Glowing corner indicator */}
                    <div className="bento-corner-glow"></div>

                    <div className="bento-header">
                      <div className={`bento-icon-wrapper ${isRed ? 'icon-red-glow' : 'icon-cyan-glow'}`}>
                        <IconComp size={24} />
                      </div>
                      <span className="bento-tag">{card.tag}</span>
                    </div>

                    <h3 className="bento-card-title">{card.title}</h3>
                    <p className="bento-card-text">{card.description}</p>

                    <div className="bento-card-footer">
                      <div className={`stats-pulse-dot ${isRed ? 'dot-red' : 'dot-cyan'}`}></div>
                      <span>{card.stats}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
