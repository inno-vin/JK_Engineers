import { motion } from 'framer-motion';
import { PenTool, Settings, Beaker, ArrowRight, CheckCircle2, ArrowDown } from 'lucide-react';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'ENGINEERING DESIGN & CONSULTANCY',
    description: 'Specialized engineering design and high-precision consultancy solutions for pharmaceutical, process, and industrial plants.',
    icon: PenTool,
    accent: 'red',
    features: ['Engineering Design & 3D Modeling', 'Technical & Regulatory Consultancy', 'Industrial Project Planning', 'Civil & Mechanical Integration'],
    tag: 'Consultancy'
  },
  {
    id: 2,
    title: 'TURNKEY PROJECTS',
    description: 'Comprehensive, end-to-end industrial project execution support spanning feasibility study all the way through client commissioning.',
    icon: Settings,
    accent: 'cyan',
    process: ['Concept', 'Design', 'Execution', 'Installation', 'Commissioning'],
    tag: 'Full Lifecycle'
  },
  {
    id: 3,
    title: 'ENGINEERING MATERIALS & CHEMICAL SUPPLY',
    description: 'Certified, traceable supply of high-grade engineering materials, industrial alloys, and critical process chemicals.',
    icon: Beaker,
    accent: 'red',
    features: ['Specialized Industrial Chemicals', 'High-Grade Stainless & Alloy Steels', 'Piping, Valves & Instrumentation', 'Certified Mill Testing & QA'],
    tag: 'Certified Supply'
  }
];

const Services = () => {
  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="services" className="section services-cinema-section">
      <div className="services-ambient-glow"></div>

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="services-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="enterprise-badge">
            <span className="badge-dot"></span>
            <span>Core Capabilities</span>
          </div>
          <h2 className="heading-lg services-title">
            Integrated Engineering Solutions.<br />
            <span className="services-title-highlight">Engineered for Heavy Industry.</span>
          </h2>
          <p className="text-lg services-subtitle">
            Delivering cross-disciplinary expertise to meet rigorous industrial specifications with precision and dependability.
          </p>
        </motion.div>

        {/* Bento Grid Services Cards */}
        <div className="services-bento-grid">
          {services.map((service, index) => {
            const IconComp = service.icon;
            const isRed = service.accent === 'red';

            return (
              <motion.div
                key={service.id}
                className={`spotlight-card service-bento-card ${isRed ? 'card-glow-red' : 'card-glow-cyan'}`}
                onMouseMove={handleCardMouseMove}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.18,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  transition: { duration: 0.25 },
                }}
              >
                <div className="card-top-bar">
                  <div className={`service-icon-box ${isRed ? 'icon-box-red' : 'icon-box-cyan'}`}>
                    <IconComp size={26} />
                  </div>
                  <span className="service-tag">{service.tag}</span>
                </div>

                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>

                {service.features && (
                  <ul className="service-feature-checklist">
                    {service.features.map((feature, i) => (
                      <li key={i} className="feature-item">
                        <CheckCircle2 size={16} className={isRed ? 'check-red' : 'check-cyan'} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {service.process && (
                  <div className="service-process-flow">
                    <span className="process-label">Execution Flow:</span>
                    <div className="process-chips-wrap">
                      {service.process.map((step, i) => (
                        <div key={i} className="chip-step-group">
                          <span className="chip-step">{step}</span>
                          {i < service.process.length - 1 && (
                            <ArrowRight size={14} className="chip-arrow" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
