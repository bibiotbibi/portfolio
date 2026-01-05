import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import SEOHead from './components/SEOHead'; // Uncomment after installing react-helmet
import './styles/App.css';

function App() {
  useEffect(() => {
    // Initialize scroll animations for all sections
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections except hero (it has its own animation)
    const sections = document.querySelectorAll('section:not(#hero)');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      {/* Uncomment after installing react-helmet */}
      {/* <SEOHead 
        title="Bibi Moriom - Frontend Developer"
        description="Frontend Developer with 8+ months experience. Specializing in React, JavaScript, and modern web technologies. View my portfolio of 12+ projects."
        keywords="Bibi Moriom, Frontend Developer, React Developer, Web Developer, Portfolio, JavaScript, HTML, CSS, Firebase"
      /> */}
      
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
