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
      // if they somehow bypass the animation timeline (though CSS should handle this)
      const fadeElements = document.querySelectorAll('.fade-up');
      fadeElements.forEach(el => el.classList.add('native-scroll-anim'));
    }
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
