import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="floating-particles"></div>
      </div>
      
      <div className="container">        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="hero-logo"
            variants={itemVariants}
          >
            <img src="/driftlogo.png" alt="Drift Logo" className="hero-logo-image" />
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            variants={itemVariants}
          >
            Drift is the most advanced
            <span className="gradient-text"> free IDE </span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            variants={itemVariants}
          >
            Professional-grade development tools designed for modern game creation workflows. 
            Built by developers, for developers.
          </motion.p>
          
          <motion.div 
            className="hero-features"
            variants={itemVariants}
          >
            <div className="feature-tag">High-Performance</div>
            <div className="feature-tag">Zero Interference</div>
            <div className="feature-tag">Developer-First</div>
          </motion.div>          <motion.div 
            className="hero-cta"
            variants={itemVariants}
          >
            <a 
              href="https://workink.net/1ZQA/Drift" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-download-btn"
            >
              <span className="windows-icon">⊞</span>
              Download Drift
              <span className="download-icon">↓</span>
            </a>
            <p className="hero-cta-text">Free • Windows • No Registration Required</p>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="scroll-indicator">
        <motion.div 
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </div>
    </section>
  );
};

export default Hero;
