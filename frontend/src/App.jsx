import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import TurnkeyProjects from './components/TurnkeyProjects';
import Industries from './components/Industries';
import WhyChooseUs from './components/WhyChooseUs';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './index.css';

function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
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
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <TurnkeyProjects />
        <Industries />
        <WhyChooseUs />
        <Values />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
