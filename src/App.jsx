import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import ScrollToTop from './components/ScrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

function App() {
  useEffect(() => {
    // Initialize AOS animations identically to the HTML version
    AOS.init({ 
      duration: 900, 
      once: true, 
      offset: 80 
    });
  }, []);

  return (
    <div className="portfolio-app font-sans relative">
      <ProgressBar />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
