import { motion } from 'framer-motion';
import { Award, Clock, Target, Layers } from 'lucide-react';
import './WhyChooseUs.css';

const features = [
  {
    id: '01',
    title: 'Cross-Disciplinary Engineering',
    desc: 'Deep technical proficiency across chemical, mechanical, piping, and structural design disciplines.',
    icon: Layers
  },
  {
    id: '02',
    title: 'Reliable Turnkey Execution',
    desc: 'Uncompromising adherence to project schedules, certified quality gates, and transparent reporting.',
    icon: Clock
  },
  {
    id: '03',
    title: 'Custom Industrial Solutions',
    desc: 'Engineered specifically around plant constraints and operational goals rather than cookie-cutter packages.',
    icon: Target
  },
  {
    id: '04',
    title: 'Complete Lifecycle Stewardship',
    desc: 'End-to-end responsibility from preliminary feasibility through to installation, testing, and handover.',
    icon: Award
  }
];

const WhyChooseUs = () => {
  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section className="section why-choose-cinema">
      <div className="why-ambient-glow"></div>

      <div className="container">
        <motion.div
          className="text-center why-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="enterprise-badge">
            <span className="badge-dot"></span>
            <span>Why JK Engineers</span>
          </div>
          <h2 className="heading-lg why-title">
            Built for Industrial Certainty.
          </h2>
          <p className="text-lg why-subtitle">
            Engineered rigor, certified materials, and proven execution capability you can depend on for high-stakes projects.
          </p>
        </motion.div>

        <div className="why-features-grid">
          {features.map((feature, index) => {
            const IconComp = feature.icon;

            return (
              <motion.div
                key={feature.id}
                className="spotlight-card why-feature-card"
                onMouseMove={handleCardMouseMove}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -6,
                  scale: 1.015,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="why-card-top">
                  <div className="why-icon-box">
                    <IconComp size={22} className="why-icon" />
                  </div>
                  <span className="why-number">{feature.id}</span>
                </div>

                <h3 className="why-card-title">{feature.title}</h3>
                <p className="why-card-desc">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
