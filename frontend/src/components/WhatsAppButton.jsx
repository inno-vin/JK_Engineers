import { motion } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <motion.div
      className="whatsapp-widget-container"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
    >
      {/* Concentric radar pulsing attention-grabber rings */}
      <div className="whatsapp-pulse-ring ring-1"></div>
      <div className="whatsapp-pulse-ring ring-2"></div>

      <motion.a
        href="https://wa.me/918008132387?text=Hello%20JK%20Engineers%20%26%20Enterprises%2C%20I%20would%20like%20to%20know%20more%20about%20your%20engineering%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-floating-btn"
        aria-label="Chat with JK Engineers on WhatsApp"
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.94 }}
      >
        <WhatsAppIcon size={34} variant="white" className="whatsapp-icon" />

        {/* Live status badge */}
        <span className="whatsapp-status-dot"></span>

        {/* Floating Tooltip */}
        <div className="whatsapp-tooltip">
          <div className="tooltip-title">Chat with Engineering Team</div>
          <div className="tooltip-sub">
            <span className="tooltip-green-dot"></span>
            <span>Online for Inquiries</span>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppButton;
