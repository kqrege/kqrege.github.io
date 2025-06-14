import React from 'react';
import { motion } from 'framer-motion';
import './Legal.css';

const Legal = () => {
  return (
    <section className="legal" id="legal">
      <div className="container">
        <motion.div 
          className="legal-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="legal-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Important Notice
          </motion.h3>
          
          <motion.div 
            className="legal-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="legal-text">
              Drift, its development team, and associated contributors do not endorse or support any form of cheating, unlawful activity, or malicious conduct.
            </p>
            
            <p className="legal-text">
              Drift is an Integrated Development Environment (IDE) specifically designed for game developers to test their Roblox® projects in a controlled, private environment; without requiring public updates or affecting live gameplay.
            </p>
            <p className="legal-text">
              Drift and its team are not affiliated with Roblox® or The Roblox Corporation. For legal inquiries or DMCA notices, please reach out to one of the emails below.
            </p>
            
            <div className="legal-links">
              <a href="/legal/terms" className="legal-link">Terms of Service</a>
              <a href="/legal/privacy" className="legal-link">Privacy Policy</a>
            </div>
            
            <div className="contact-section">
              <h4 className="contact-title">Legal Contacts</h4>              
              <div className="contact-emails">
                <div className="contact-item">
                  <span className="contact-label">Legal Inquiries:</span>
                  <a href="mailto:notices@getdrift.me" className="contact-email">
                    notices@getdrift.me
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">DMCA Notices:</span>
                  <a href="mailto:dmca@getdrift.me" className="contact-email">
                    dmca@getdrift.me
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Legal;
