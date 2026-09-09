import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Target, Sparkles } from 'lucide-react';
import './Values.css';

const Values = () => {
  return (
    <section className="values-ribbon-section">
      <div className="container">
        <motion.div
          className="values-strip"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="value-capsule">
            <Cpu size={18} className="val-icon" />
            <span className="value-label">ENGINEERING EXCELLENCE</span>
          </div>

          <span className="value-divider-star">✦</span>

          <div className="value-capsule">
            <Sparkles size={18} className="val-icon" />
            <span className="value-label">INNOVATION & DESIGN</span>
          </div>

          <span className="value-divider-star">✦</span>

          <div className="value-capsule">
            <ShieldCheck size={18} className="val-icon" />
            <span className="value-label">UNWAVERING RELIABILITY</span>
          </div>

          <span className="value-divider-star">✦</span>

          <div className="value-capsule">
            <Target size={18} className="val-icon" />
            <span className="value-label">SAFETY & COMPLIANCE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
