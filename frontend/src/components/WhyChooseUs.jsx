import './WhyChooseUs.css';

const features = [
  { id: '01', title: 'Engineering Expertise', desc: 'Deep technical knowledge across diverse industrial sectors.' },
  { id: '02', title: 'Reliable Execution', desc: 'Commitment to timelines, quality, and dependable outcomes.' },
  { id: '03', title: 'Industry-Focused Solutions', desc: 'Tailored approaches that solve specific operational challenges.' },
  { id: '04', title: 'End-to-End Support', desc: 'Comprehensive service from initial concept to final commissioning.' }
];

const WhyChooseUs = () => {
  return (
    <section className="section why-choose-us section-light">
      <div className="container">
        <div className="text-center fade-up" style={{ marginBottom: '64px' }}>
          <h2 className="heading-lg">Why Choose JK Engineers & Enterprises?</h2>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`feature-block fade-up delay-${(index + 1) * 100}`}
            >
              <div className="feature-number">{feature.id}</div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
