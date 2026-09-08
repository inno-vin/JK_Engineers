import { useEffect, useRef } from 'react';
import './TurnkeyProjects.css';

const steps = [
  { id: '01', name: 'Concept' },
  { id: '02', name: 'Engineering' },
  { id: '03', name: 'Procurement' },
  { id: '04', name: 'Execution' },
  { id: '05', name: 'Installation' },
  { id: '06', name: 'Commissioning' },
];

const TurnkeyProjects = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      
      const elements = scrollContainerRef.current.querySelectorAll('.lifecycle-step');
      const windowHeight = window.innerHeight;
      
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight * 0.85) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="turnkey" className="section section-navy turnkey-section blueprint-bg">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="text-center fade-up">
          <span className="heading-sm" style={{ color: 'var(--bg-white)' }}>Turnkey Projects</span>
          <h2 className="heading-lg">From Concept to Commissioning</h2>
          <p className="text-lg" style={{ margin: '0 auto 64px' }}>
            A systematic, end-to-end approach to industrial project execution.
          </p>
        </div>

        <div className="lifecycle-container" ref={scrollContainerRef}>
          <div className="lifecycle-line"></div>
          
          {steps.map((step, index) => (
            <div key={step.id} className="lifecycle-step delay-100">
              <div className="step-marker"></div>
              <div className="step-content">
                <span className="step-number">{step.id}</span>
                <h3 className="step-name">{step.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TurnkeyProjects;
