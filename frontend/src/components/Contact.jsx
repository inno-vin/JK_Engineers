import { Phone, MapPin, Mail, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info fade-up">
            <h2 className="heading-lg">Let's Build Better Engineering Solutions Together.</h2>
            <p className="text-lg">
              Looking for engineering design, consultancy, turnkey project execution or industrial material and chemical supply?
              <br /><br />
              Let's discuss your requirements.
            </p>

            <div className="contact-details">
              <div className="contact-person">
                <strong>Janaki Ram Kandikanti</strong>
                <span>JK Engineers & Enterprises</span>
              </div>

              <div className="contact-item">
                <Phone size={20} className="contact-icon" />
                <a href="tel:8008132387">8008132387</a>
              </div>

              <div className="contact-item">
                <MapPin size={20} className="contact-icon" />
                <address>
                  Plot No 28, Mythri Lahari,<br />
                  Pasumamula Road, Pedda Amberpet,<br />
                  Hayathnagar, Rangareddy,<br />
                  Hyderabad – 501505
                </address>
              </div>

              <div className="contact-item">
                <div className="contact-icon gst-icon">GST</div>
                <span>36BOLPK1512D2ZB</span>
              </div>
            </div>
            
            <div style={{ marginTop: '40px' }}>
              <a 
                href="https://wa.me/918008132387?text=Hello%20JK%20Engineers%20%26%20Enterprises%2C%20I%20would%20like%20to%20know%20more%20about%20your%20engineering%20services." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{ display: 'inline-flex', gap: '8px' }}
              >
                <MessageCircle size={20} /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className="contact-form-container fade-up delay-200">
            <div className="contact-form-card">
              <h3 className="form-title">Send us a message</h3>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" placeholder="Your Phone Number" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="4" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="btn btn-primary w-100" style={{ width: '100%' }}>
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
