import { motion } from 'framer-motion';
import './Publications.css';

const Publications = () => {
  // Publication data
  const publications = [
    {
      id: 1,
      title: "Evaluating Multi-Turn Bargain Skills in LLM-Based Seller Agent",
      conference: "NeurIPS 2025 Workshop (under review)",
      year: 2025,
      authors: "Issue Yishu Wang, Kakam Chong, Xiaofeng Wang, Xu Yan, DeXin Kong, Chen Ju, Ming Chen, Shuai Xiao, Shuguang Han, Jufeng Chen",
      doi: "10.48550/arxiv.2509.06341",
      type: "conference"
    },
    {
      id: 2,
      title: "Gambling Addiction: Finding and Evidence From Online Casino",
      conference: "Working Paper (Management Science submission)",
      year: 2025,
      authors: "Yingda Zhai, Issue Yishu Wang, Hanyang Tang",
      doi: "working-paper",
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
