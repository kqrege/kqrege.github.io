import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >          <div className="footer-logo">
            <img src="/driftlogo.png" alt="Drift Logo" className="footer-logo-image" />
            <span className="footer-logo-text">Drift</span>
            <span className="footer-logo-dot"></span>
          </div>
          
          <div className="footer-text">
            © 2025 Drift. All rights reserved.
          </div>
          
          <div className="footer-links">
            <a href="#legal" className="footer-link">Legal</a>
            <span className="footer-separator">•</span>
            <a href="/#legal/terms" className="footer-link">Terms</a>
            <span className="footer-separator">•</span>
            <a href="/#legal/privacy" className="footer-link">Privacy</a>
            <span className="footer-separator">•</span>
            <a href="mailto:support@drift-ide.com" className="footer-link">Support</a>
            <span className="footer-separator">•</span>
            <a href="#features" className="footer-link">Features</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
