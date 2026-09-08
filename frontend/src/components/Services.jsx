import { PenTool, Settings, Beaker } from 'lucide-react';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'ENGINEERING DESIGN & CONSULTANCY',
    description: 'Engineering design and consultancy solutions for pharmaceutical and engineering industries.',
    icon: <PenTool size={32} />,
    features: ['Engineering Design', 'Technical Consultancy', 'Project Planning', 'Engineering Support']
  },
  {
    id: 2,
    title: 'TURNKEY PROJECTS',
    description: 'End-to-end project execution support, from initial concept through commissioning.',
    icon: <Settings size={32} />,
    process: ['Concept', 'Design', 'Execution', 'Installation', 'Commissioning']
  },
  {
    id: 3,
    title: 'ENGINEERING MATERIALS & CHEMICAL SUPPLY',
    description: 'Reliable supply of engineering materials and industrial chemicals to meet project and operational requirements.',
    icon: <Beaker size={32} />
  }
];

const Services = () => {
  return (
    <section id="services" className="section section-light services-section">
      <div className="container">
        <div className="services-header text-center fade-up">
          <span className="heading-sm">Our Engineering Services</span>
          <h2 className="heading-lg">Integrated engineering solutions<br />designed around industrial requirements.</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-card fade-up delay-${(index + 1) * 100}`}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              
              {service.features && (
                <ul className="service-list">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              )}

              {service.process && (
                <div className="service-process">
                  {service.process.map((step, i) => (
                    <span key={i} className="process-step">
                      {step}
                      {i < service.process.length - 1 && <span className="process-arrow">↓</span>}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
