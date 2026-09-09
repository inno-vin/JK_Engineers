import { motion } from 'framer-motion';
import { Factory, Cpu, Pipette, Activity, Zap, Sparkles } from 'lucide-react';
import './Industries.css';

const industries = [
  {
    id: 1,
    name: 'Pharmaceutical Industries',
    desc: 'Cleanroom engineering, sanitary piping, validated process modules & high-purity chemical supply.',
    icon: Pipette,
    accent: 'red',
  },
  {
    id: 2,
    name: 'Engineering Industries',
    desc: 'Heavy machine assembly, structural steel fabrication, high-precision CAD modeling & industrial testing.',
    icon: Cpu,
    accent: 'cyan',
  },
  {
    id: 3,
    name: 'Process Industries',
    desc: 'Continuous flow fluidics, heat transfer solutions, reactor vessel integration & automated process loops.',
    icon: Activity,
    accent: 'red',
  },
  {
    id: 4,
    name: 'Manufacturing Plants',
    desc: 'Automated assembly lines, precision tooling, industrial hardware procurement & turnkey installations.',
    icon: Factory,
    accent: 'cyan',
  },
  {
    id: 5,
    name: 'Industrial Infrastructure',
    desc: 'HVAC ducts, electrical conduit frameworks, load-bearing crane girders & plant utilities.',
    icon: Zap,
    accent: 'red',
  }
];

const Industries = () => {
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
            <span>Sectors & Markets</span>
          </div>
          <h2 className="heading-lg industries-title">
            Industries We Serve.
          </h2>
          <p className="text-lg industries-subtitle">
            Tailored engineering solutions and certified supplies engineered specifically for demanding regulatory environments.
          </p>
        </motion.div>

        <div className="industries-bento-grid">
          {industries.map((industry, index) => {
            const IconComp = industry.icon;
            const isRed = industry.accent === 'red';

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
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="industry-icon-wrapper">
                  <IconComp size={28} className={isRed ? 'ind-icon-red' : 'ind-icon-cyan'} />
                </div>
                <h3 className="industry-card-name">{industry.name}</h3>
                <p className="industry-card-desc">{industry.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
