import React from 'react';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import './WhatsAppFloating.css';

export default function WhatsAppFloating() {
  return (
    <aside aria-label="Quick Communication" className="whatsapp-floating-widget">
      <a 
        href={COMPANY_INFO.contact.whatsappLink}
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-btn-pulse"
        aria-label="Direct WhatsApp Consultation with JK Engineers"
        title="Direct WhatsApp Consultation"
      >
        <span className="wa-tooltip">Chat with Janaki Ram</span>
        <div className="wa-icon-box">
          <MessageSquare size={26} />
        </div>
      </a>
    </aside>
  );
}
