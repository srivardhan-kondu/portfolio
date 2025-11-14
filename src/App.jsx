import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import StudentFeedback from './components/StudentFeedback';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'student-feedback', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} scrolled={scrolled} />
      
      {/* Floating Jump to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-black text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-gray-800 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>

      <main>
        <div id="home">
          <Hero />
        </div>
        
        <About />
        
        <div id="experience">
          <Experience />
        </div>
        
        <div id="projects">
          <Projects />
        </div>
        
        <div id="student-feedback">
          <StudentFeedback />
        </div>
        
        <div id="certifications">
          <Certifications />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;