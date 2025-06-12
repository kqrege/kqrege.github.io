import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToLegal = () => {
    document.getElementById('legal')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openDiscord = () => {
    window.open('https://discord.gg/realzorara', '_blank', 'noopener,noreferrer');
  };

  const openDocs = () => {
    window.open('https://github.com/unified-naming-convention/NamingStandard/tree/main/api', '_blank', 'noopener,noreferrer');
  };

  const scrollToDownload = () => {
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
  };  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="navbar blur">
        {/* Left - Logo */}
        <div className="navbar-left">
          <img 
            src="/driftlogo.png" 
            alt="Drift Logo" 
            className="logo"
          />
          <a href="/">Drift</a>
        </div>

        {/* Center - Navigation */}
        <div className="navbar-center">
          <a onClick={scrollToLegal}>Legal</a>
          <a href="https://discord.gg/realzorara" target="_blank" rel="noopener noreferrer">Discord</a>
          <a href="https://github.com/unified-naming-convention/NamingStandard/tree/main/api" target="_blank" rel="noopener noreferrer">Docs</a>
        </div>

        {/* Right - Download */}
        <div className="navbar-right">
          <a className="button" href="https://workink.net/1ZQA/Drift" target="_blank" rel="noopener noreferrer">Download</a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
