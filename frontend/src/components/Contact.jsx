import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Send, CheckCircle2, AlertCircle, Building, Loader2 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import './Contact.css';

const TARGET_EMAIL = 'kandhikanti@yahoo.co.in';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Turnkey Project Execution',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus('error');
      setFeedback('Please provide both your name and phone number so our team can reach you.');
      return;
    }

    setStatus('loading');
    setFeedback('');

    try {
      const apiBaseUrl = (
        import.meta.env.VITE_API_URL ||
        (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
          ? 'http://localhost:8000'
          : '')
      ).replace(/\/+$/, '');
      const response = await fetch(`${apiBaseUrl}/api/contact/`, {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          message: `[Service Focus: ${formData.service}]\n${formData.message.trim() || 'No additional notes provided.'}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFeedback(`Thank you! Your project inquiry has been dispatched to ${TARGET_EMAIL}. Our engineering directors will respond promptly.`);
        setFormData({
          name: '',
          phone: '',
          service: 'Turnkey Project Execution',
          message: '',
        });
      } else {
        throw new Error('Server returned an error status');
      }
    } catch (err) {
      // Gracefully open mail client directly addressing kandhikanti@yahoo.co.in
      setStatus('success');
      setFeedback(`Connecting to your mail client to send directly to ${TARGET_EMAIL}...`);
      const subject = encodeURIComponent(`Project Inquiry: ${formData.service} - ${formData.name}`);
      const body = encodeURIComponent(
        `Dear JK Engineers & Enterprises,\n\n` +
        `Name: ${formData.name}\n` +
        `Phone: ${formData.phone}\n` +
        `Service Interest: ${formData.service}\n\n` +
        `Message:\n${formData.message}\n`
      );
      window.open(`mailto:${TARGET_EMAIL}?subject=${subject}&body=${body}`, '_blank');
    }
  };

  return (
    <section id="contact" className="section contact-cinema-section">
      <div className="contact-ambient-glow"></div>

      <div className="container">
        <div className="contact-layout-grid">
          {/* Left Column: Direct Info */}
          <motion.div
            className="contact-info-panel"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="enterprise-badge">
              <span className="badge-dot"></span>
              <span>Initiate Collaboration</span>
            </div>

            <h2 className="heading-lg contact-heading">
              Let's Build Better Engineering Solutions Together.
            </h2>

            <p className="text-lg contact-lead">
              Looking for specialized engineering design, consultancy, full turnkey execution, or certified industrial material and chemical supplies?
            </p>

            <div className="contact-details-cards">
              <div className="contact-card-item">
                <div className="contact-icon-frame">
                  <Building size={20} className="icon-red" />
                </div>
                <div>
                  <h4 className="card-label">Principal Contact</h4>
                  <p className="card-value">Janaki Ram Kandikanti</p>
                  <span className="card-subtext">JK Engineers & Enterprises</span>
                </div>
              </div>

              {/* Direct Target Email */}
              <div className="contact-card-item">
                <div className="contact-icon-frame">
                  <Mail size={20} className="icon-red" />
                </div>
                <div>
                  <h4 className="card-label">Official Inquiry Email</h4>
                  <a href={`mailto:${TARGET_EMAIL}`} className="card-link card-email-link">
                    {TARGET_EMAIL}
                  </a>
                  <span className="card-subtext" style={{ display: 'block', marginTop: '2px' }}>
                    All project emails route directly here
                  </span>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-icon-frame">
                  <Phone size={20} className="icon-red" />
                </div>
                <div>
                  <h4 className="card-label">Direct Phone</h4>
                  <a href="tel:8008132387" className="card-link">
                    +91 8008132387
                  </a>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-icon-frame">
                  <MapPin size={20} className="icon-red" />
                </div>
                <div>
                  <h4 className="card-label">Registered Office</h4>
                  <address className="card-address">
                    Plot No 28, Mythri Lahari, Pasumamula Road,<br />
                    Pedda Amberpet, Hayathnagar, Rangareddy,<br />
                    Hyderabad – 501505, Telangana, India
                  </address>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-icon-frame gst-badge-icon">
                  <span>GST</span>
                </div>
                <div>
                  <h4 className="card-label">GSTIN Registration</h4>
                  <span className="gst-number">36BOLPK1512D2ZB</span>
                </div>
              </div>
            </div>

            <div className="contact-whatsapp-action">
              <a
                href="https://wa.me/918008132387?text=Hello%20JK%20Engineers%20%26%20Enterprises%2C%20I%20would%20like%20to%20know%20more%20about%20your%20engineering%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn hero-whatsapp-btn"
              >
                <WhatsAppIcon size={24} variant="badge" className="whatsapp-icon" />
                <span>Instant WhatsApp Inquiry</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Modern Glassmorphic Inquiry Form */}
          <motion.div
            className="contact-form-panel"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-form-card">
              <div className="form-header">
                <h3 className="form-title">Send Project Inquiry</h3>
                <p className="form-subtitle">
                  Inquiries will be routed directly to <strong>{TARGET_EMAIL}</strong>.
                </p>
              </div>

              {/* Notification Banner */}
              {status === 'success' && (
                <div className="form-feedback feedback-success">
                  <CheckCircle2 size={18} className="feedback-icon" />
                  <span>{feedback}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="form-feedback feedback-error">
                  <AlertCircle size={18} className="feedback-icon" />
                  <span>{feedback}</span>
                </div>
              )}

              <form className="cinematic-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name" className="field-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Janaki Ram"
                      className="cinematic-input"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="phone" className="field-label">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 8008132387"
                      className="cinematic-input"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="service" className="field-label">Service Interest</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="cinematic-input select-input"
                  >
                    <option value="Turnkey Project Execution">Turnkey Project Execution</option>
                    <option value="Engineering Design & CAD Consultancy">Engineering Design & CAD Consultancy</option>
                    <option value="Engineering Materials & Chemical Supply">Engineering Materials & Chemical Supply</option>
                    <option value="General Industrial Inquiry">General Industrial Inquiry</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="message" className="field-label">Project Scope & Requirements</label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your plant, equipment, capacity, or specifications..."
                    className="cinematic-input"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn btn-primary submit-btn"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="btn-arrow spin" />
                      <span>Sending to {TARGET_EMAIL}...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry to {TARGET_EMAIL}</span>
                      <Send size={16} className="btn-arrow" />
                    </>
                  )}
                </button>

                <div className="form-direct-mail-note">
                  <span>Prefer your mail app? </span>
                  <a
                    href={`mailto:${TARGET_EMAIL}?subject=Engineering Inquiry - JK Engineers`}
                    className="direct-mail-link"
                  >
                    Click here to open {TARGET_EMAIL} directly
                  </a>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
