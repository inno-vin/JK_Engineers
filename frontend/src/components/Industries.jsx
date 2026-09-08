import { Factory, Cpu, Pipette, Activity, Zap } from 'lucide-react';
import './Industries.css';

const industries = [
  { id: 1, name: 'Pharmaceutical Industries', icon: <Pipette size={32} /> },
  { id: 2, name: 'Engineering Industries', icon: <Cpu size={32} /> },
  { id: 3, name: 'Process Industries', icon: <Activity size={32} /> },
  { id: 4, name: 'Manufacturing', icon: <Factory size={32} /> },
  { id: 5, name: 'Industrial Infrastructure', icon: <Zap size={32} /> }
];

const Industries = () => {
  return (
    <section id="industries" className="section industries-section">
      <div className="container">
        <div className="text-center fade-up" style={{ marginBottom: '64px' }}>
          <span className="heading-sm">Industries We Serve</span>
          <h2 className="heading-lg">Tailored solutions for<br />diverse industrial sectors.</h2>
        </div>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div 
              key={industry.id} 
              className={`industry-card fade-up delay-${(index + 1) * 100}`}
            >
              <div className="industry-icon">{industry.icon}</div>
              <h3 className="industry-name">{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
