import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918008132387?text=Hello%20JK%20Engineers%20%26%20Enterprises%2C%20I%20would%20like%20to%20know%20more%20about%20your%20engineering%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating-btn"
      aria-label="WhatsApp Us"
    >
      <MessageCircle size={28} />
      <span className="whatsapp-tooltip">WhatsApp Us</span>
    </a>
  );
};

export default WhatsAppButton;
