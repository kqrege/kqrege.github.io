import React from 'react';
import { motion } from 'framer-motion';
import './Download.css';

const Download = () => {
  const handleDownload = () => {
    window.open('https://workink.net/1ZQA/Drift', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="download" id="download">
      <div className="download-background">
        <div className="download-glow-1"></div>
        <div className="download-glow-2"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="download-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >          <motion.h2 
            className="download-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience Development Evolution
          </motion.h2>
          
          <motion.p 
            className="download-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Step into the future of coding with an IDE that adapts to your workflow
          </motion.p>
            <motion.div 
            className="download-action"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="download-button"
              onClick={handleDownload}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="button-text">Download Drift</span>
            </motion.button>
            
            <div className="download-info">
              <p>Free Download • Windows 10/11 • No Registration</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Download;
