import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import WhatWeBring from './components/WhatWeBring';
import WhatWeSupport from './components/WhatWeSupport';
import Services from './components/Services';
import TurnkeyProjects from './components/TurnkeyProjects';
import Capabilities from './components/Capabilities';
import SoftwareTools from './components/SoftwareTools';
import Industries from './components/Industries';
import CurrentProjects from './components/CurrentProjects';
import ProjectPortfolio from './components/ProjectPortfolio';
import SpecialProjects from './components/SpecialProjects';
import FounderProfile from './components/FounderProfile';
import ExperienceTimeline from './components/ExperienceTimeline';
import Achievements from './components/Achievements';
import WhyChooseUs from './components/WhyChooseUs';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ProjectModal from './components/ProjectModal';
import './index.css';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Only use Intersection Observer fallback if the browser doesn't support native CSS scroll-driven animations
    if (!CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, observerOptions);

      const fadeElements = document.querySelectorAll('.fade-up');
      fadeElements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    } else {
      // For browsers with native support, ensure they don't get stuck hidden 
      const fadeElements = document.querySelectorAll('.fade-up');
      fadeElements.forEach(el => el.classList.add('native-scroll-anim'));
    }
  }, []);

  const handleDiscussProject = (clientName) => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <WhatWeBring />
        <WhatWeSupport />
        <Services />
        <TurnkeyProjects />
        <Capabilities />
        <SoftwareTools />
        <Industries />
        <CurrentProjects />
        <ProjectPortfolio onOpenModal={setSelectedProject} />
        <SpecialProjects onOpenModal={setSelectedProject} />
        <FounderProfile />
        <ExperienceTimeline />
        <Achievements />
        <WhyChooseUs />
        <Values />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onDiscussProject={handleDiscussProject}
        />
      )}
    </div>
  );
}

export default App;
