import { motion } from 'framer-motion';
import './Publications.css';

const Publications = () => {
  // Publication data
  const publications = [
    {
      id: 1,
      title: "BargainBench: A benchmark for seller proxy in online fleamarket",
      conference: "Working Paper",
      year: 2025,
      authors: "Jiaxin Zhuang, Xiaofeng Wang and Shuguang Han",
      doi: "10.xxxx/arxiv.2023.xxxx",
      type: "conference"
    },
    {
      id: 2,
      title: "Gambling Addiction: Finding and evidence from online casino",
      conference: "Working Paper",
      year: 2025,
      authors: "Yingda Zhai, Hanyang Tang",
      doi: "10.xxxx/arxiv.2023.xxxx",
      type: "conference"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="publications" className="section publications-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Selected Publications
        </motion.h2>
        
        <motion.div 
          className="publications-filters"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Journal Articles</button>
          <button className="filter-btn">Conference Papers</button>
        </motion.div>

        <motion.div 
          className="publications-list"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {publications.map(pub => (
            <motion.div key={pub.id} className="publication-card" variants={item}>
              <h3>{pub.title}</h3>
              <p className="publication-authors">{pub.authors}</p>
              <p className="publication-details">
                <span className="publication-venue">
                  {pub.type === "journal" ? pub.journal : pub.conference}
                </span>
                <span className="publication-year">{pub.year}</span>
              </p>
              <div className="publication-links">
                <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                  DOI: {pub.doi}
                </a>
                <button className="publication-btn">PDF</button>
                <button className="publication-btn">Cite</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="publications-more"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button className="secondary-button">View All Publications</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;