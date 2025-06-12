import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Download from './components/Download';
import Legal from './components/Legal';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="App">
      <div className="background-grid"></div>
      <div className="background-glow"></div>
      
      <Header />
      <Hero />
      <Features />
      <Download />
      <Legal />
      <Footer />
    </div>
  );
}

export default App;
