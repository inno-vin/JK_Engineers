import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Compass, ShoppingCart, Cog, Wrench, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import './TurnkeyProjects.css';

const steps = [
  {
    id: '01',
    name: 'Concept',
    subtitle: 'Feasibility & Project Scope',
    description: 'Initial consultation, requirement analysis, site assessment, and technical feasibility studies.',
    icon: Lightbulb,
    deliverable: 'Feasibility Report & Architectural Layout',
  },
  {
    id: '02',
    name: 'Engineering',
    subtitle: 'Detailed Design & Modeling',
    description: 'Precision 3D CAD modeling, structural design, flow simulation, and industrial compliance verification.',
    icon: Compass,
    deliverable: 'Approved 3D CAD & P&ID Blueprints',
  },
  {
    id: '03',
    name: 'Procurement',
    subtitle: 'Certified Material Sourcing',
    description: 'Strategic sourcing of ISO-certified industrial alloys, heavy hardware, and specialized process chemicals.',
    icon: ShoppingCart,
    deliverable: 'Mill Test Certificates & QA Assurances',
  },
  {
    id: '04',
    name: 'Execution',
    subtitle: 'Fabrication & Build',
    description: 'Heavy industrial machining, high-tolerance fabrication, and sub-assembly manufacturing with strict tolerances.',
    icon: Cog,
    deliverable: 'Precision Components & Factory Acceptance',
  },
  {
    id: '05',
    name: 'Installation',
    subtitle: 'On-Site Integration',
    description: 'On-site erection, mechanical alignment, electrical/instrumentation routing, and piping interconnects.',
    icon: Wrench,
    deliverable: 'Integrated Mechanical & Electrical Systems',
  },
  {
    id: '06',
    name: 'Commissioning',
    subtitle: 'Validation & Handover',
    description: 'Comprehensive pressure tests, trial plant runs, safety protocol validations, and client operational handover.',
    icon: CheckCircle2,
    deliverable: 'Final Commissioning Certificate & Ops Manual',
  },
];

const TurnkeyProjects = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="turnkey" className="section turnkey-cinema-section">
      {/* Dynamic Background Blueprint & Radial Glow */}
      <div className="turnkey-ambient-glow"></div>
      <div className="turnkey-grid-pattern"></div>

      <div className="container turnkey-container">
        {/* Section Header */}
        <motion.div
          className="text-center turnkey-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="enterprise-badge">
            <span className="badge-dot"></span>
            <span>End-to-End Execution</span>
          </div>
          <h2 className="heading-lg turnkey-title">
            From Concept to Commissioning.
          </h2>
          <p className="text-lg turnkey-subtitle">
            An engineered, six-phase turnkey execution methodology built for mission-critical industrial operationalization.
          </p>
        </motion.div>

        {/* Interactive Glowing Progress Pipeline */}
        <div className="pipeline-wrapper">
          {/* Animated Glowing Connecting Line */}
          <div className="pipeline-rail">
            <div
              className="pipeline-rail-progress"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            >
              <div className="laser-beam-pulse"></div>
            </div>
          </div>

          {/* Interactive Steps Nodes */}
          <div className="pipeline-nodes-grid">
            {steps.map((step, index) => {
              const IconComp = step.icon;
              const isActive = activeStep === index;
              const isPast = activeStep >= index;

              return (
                <motion.div
                  key={step.id}
                  className={`timeline-node-card ${isActive ? 'node-active' : ''} ${isPast ? 'node-illuminated' : ''}`}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  {/* Glowing Node Marker */}
                  <div className="node-marker-hub">
                    <div className="node-outer-ring"></div>
                    <div className="node-center-orb">
                      <IconComp size={20} className="node-icon" />
                    </div>
                    {isActive && <div className="node-sonar-ping"></div>}
                  </div>

                  <div className="node-meta">
                    <span className="node-number">{step.id}</span>
                    <h3 className="node-title">{step.name}</h3>
                  </div>

                  {/* Indicator Dot */}
                  <div className="node-active-bar"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Expanded Milestone Showcase Card */}
        <motion.div
          className="active-stage-showcase spotlight-card"
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="showcase-content">
            <div className="showcase-header">
              <div className="showcase-badge">
                <Activity size={16} className="showcase-pulse-icon" />
                <span>Phase {steps[activeStep].id} Active Focus</span>
              </div>
              <span className="showcase-phase-counter">
                {activeStep + 1} of {steps.length}
              </span>
            </div>

            <div className="showcase-body">
              <div className="showcase-text-col">
                <h3 className="showcase-heading">{steps[activeStep].name}</h3>
                <h4 className="showcase-subheading">{steps[activeStep].subtitle}</h4>
                <p className="showcase-desc">{steps[activeStep].description}</p>
              </div>

              <div className="showcase-deliverable-col">
                <span className="deliverable-label">Key Phase Deliverable:</span>
                <div className="deliverable-badge">
                  <CheckCircle2 size={18} className="deliverable-icon" />
                  <span>{steps[activeStep].deliverable}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TurnkeyProjects;
