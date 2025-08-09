import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Machine Learning Engineer",
      organization: "Alibaba Group",
      location: "Hangzhou, China",
      period: "2025.7 - now",
      description: []
    },
    {
      id: 2,
      role: "Product Manager",
      organization: "ByteDance",
      location: "Beijing, China",
      period: "2022.5 - 2022.8",
      description: []
    }
  ];

  const education = [
    {
      id: 1,
      degree: "MS in Financial Econometrics",
      institution: "Johns Hopkins University",
      period: "2024 - 2025",
      details: ""
    },
    {
      id: 2,
      degree: "BEng in Computer Engineering",
      institution: "University of Hong Kong",
      period: "2019 - 2024",
      details: ""
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <div className="timeline-organization">
                  {exp.organization}, {exp.location}
                </div>
                <ul className="timeline-details">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <div className="timeline education-timeline">
          {education.map((edu, index) => (
            <motion.div 
              key={edu.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{edu.degree}</h3>
                  <span className="timeline-period">{edu.period}</span>
                </div>
                <div className="timeline-organization">
                  {edu.institution}
                </div>
                {edu.details && <p className="education-details">{edu.details}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;