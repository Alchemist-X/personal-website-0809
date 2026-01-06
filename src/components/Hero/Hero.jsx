import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Hero.css';
import myPhoto from '../../assets/my-photo.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Issue (Yishu) Wang
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Researcher in EconCS & Multi-Agent Learning
          </motion.h2>
          <motion.p 
            className="hero-bio"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I study the intersection of economics and computer science, with current work on: (1) scaling AI decision-making in business via ML, 
            (2) mechanism design for online platforms and blockchain participation, and (3) venture capital dynamics and firm growth.
            I received my BEng in Computer Engineering from the University of Hong Kong and am pursuing an MS in Financial Econometrics at Johns Hopkins University.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(52, 152, 219, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="primary-button"
            >
              Download CV
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(52, 152, 219, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="secondary-button"
            >
              Contact Me
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="hero-social"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a href="https://x.com/issue_wong" target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <motion.div
                whileHover={{ scale: 1.05, x: 5, color: "#3498db" }}
                whileTap={{ scale: 0.95 }}
                transition={{ ease: "easeOut" }}
              >
                <FaTwitter size={20} /> <span>@issue_wong</span>
              </motion.div>
            </a>
            <a href="https://www.linkedin.com/in/issue-yishu-wang/" target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <motion.div
                whileHover={{ scale: 1.05, x: 5, color: "#3498db" }}
                whileTap={{ scale: 0.95 }}
                transition={{ ease: "easeOut" }}
              >
                <FaLinkedin size={20} /> <span>issue-yishu-wang</span>
              </motion.div>
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="image-container">
            <img src={myPhoto} alt="Issue (Yishu) Wang" />
          </div>
          <div className="image-background"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
