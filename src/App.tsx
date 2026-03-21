import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          {/* Flame Icon */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-600 to-yellow-400 flex items-center justify-center">
             <div className="w-3 h-3 bg-white rounded-full mix-blend-overlay"></div>
          </div>
          <span className="text-xl font-bold tracking-tight">Phoenix</span>
        </a>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
          <a href="#services" className="hover:text-orange-400 transition-colors">Services</a>
          <a href="#projects" className="hover:text-orange-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
        </nav>
        
        <a href="#contact" className="px-5 py-2 rounded-full border border-orange-500/30 text-orange-400 hover:bg-orange-500 hover:text-white transition-all text-sm font-medium">
          Hire Me
        </a>
      </div>
    </motion.header>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-brand-dark)] text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} Phoenix Portfolio. Built with React Three Fiber.</p>
      </footer>
    </div>
  );
}

export default App;
