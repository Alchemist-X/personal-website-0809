import { useState } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Issue (Yishu) Wang</h2>
        </motion.div>
        
        <div className={`nav-container ${isMenuOpen ? 'open' : ''}`}>
          <nav className="nav-menu">
            <ul>
              <motion.li whileHover={{ scale: 1.1 }}>
                <a href="#home">Home</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <a href="#publications">Publications</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <a href="#experience">Experience</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <a href="#contact">Contact</a>
              </motion.li>
            </ul>
          </nav>
        </div>
        
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;