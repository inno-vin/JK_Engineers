import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Briefcase, 
  Layers, 
  FileCheck2, 
  ShoppingBag, 
  Boxes, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES } from '../data/companyData';
import './Services.css';

const iconMap = {
  Compass: Compass,
  Briefcase: Briefcase,
  Layers: Layers,
  FileCheck2: FileCheck2,
  ShoppingBag: ShoppingBag,
  Boxes: Boxes
};

export default function Services() {
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
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="heading-lg services-title">
            Our Core Services.<br />
            <span className="services-title-highlight">Engineered for Regulated &amp; Heavy Industry.</span>
          </h2>
          <p className="text-lg services-subtitle">
            Six integrated service domains delivering complete lifecycle engineering support from thermodynamic concept to validated plant delivery.
          </p>
        </motion.div>

        {/* Bento Grid Services Cards (All 6 Services) */}
        <div className="services-bento-grid">
          {SERVICES.map((service, index) => {
            const IconComp = iconMap[service.icon] || Compass;
            const isRed = index % 2 === 0;

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
                  delay: index * 0.12,
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
                    <IconComp size={24} />
                  </div>
                  <span className="service-code-badge">{service.code}</span>
                </div>

                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.shortDesc}</p>

                {service.details && (
                  <ul className="service-feature-checklist">
                    {service.details.map((detail, i) => (
                      <li key={i} className="feature-item">
                        <CheckCircle2 size={15} className={isRed ? 'check-red' : 'check-cyan'} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="service-card-action">
                  <a href="#contact" className="service-discuss-link">
                    <span>Inquire for {service.title}</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
