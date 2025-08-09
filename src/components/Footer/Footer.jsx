import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-info">
            <h3>Issue (Yishu) Wang</h3>
            <p>Researcher in EconCS & Multi-Agent Learning</p>
            <p>Johns Hopkins University</p>
            <p>Hong Kong & USA</p>
          </div>
          
          <div className="footer-contact">
            <h3>Contact</h3>
            <p><FaEnvelope className="footer-icon" /> issue.00.gui@gmail.com</p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#publications">Publications</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="https://x.com/issue_wong" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.linkedin.com/in/issue-yishu-wang/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="social-links">
            <a href="https://x.com/issue_wong" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/issue-yishu-wang/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="#" className="social-link" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:issue.00.gui@gmail.com" className="social-link" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
          
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Issue (Yishu) Wang. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;