import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const researchExperience = [
    {
      id: 'jhu-ra',
      role: "Research Assistant",
      organization: "Johns Hopkins University",
      location: "Washington, D.C.",
      period: "Sept 2025 – Present",
      description: [
        "Build logistic forecasting pipelines for FOMC outcomes that blend prediction-market signals with macro controls.",
        "Assemble Polymarket and FRED panels to test predictive lift through Wald statistics and out-of-sample scoring."
      ]
    },
    {
      id: 'alibaba-ml',
      role: "Machine Learning Engineer",
      organization: "Alibaba Group",
      location: "Hangzhou, China",
      period: "Jun 2025 – Sept 2025",
      description: [
        "Built bargain benchmarking for IdleFish’s AI seller agent across 1.5M+ listings and multi-turn negotiation flows.",
        "Optimized evaluation workflows with intent extraction and KV caching, cutting runtime by two-thirds and token costs."
      ]
    },
    {
      id: 'nus-coauthor',
      role: "Co-author, School of Computing",
      organization: "National University of Singapore",
      location: "Singapore",
      period: "Oct 2023 – Jan 2024",
      description: [
        "Modeled online casino transaction data to trace strategy shifts, behavioral turning points, and retention risks.",
        "Studied incentive interventions with causal-inference and Bayesian updating to map addiction boundaries."
      ]
    },
    {
      id: 'hku-data',
      role: "Data Engineer",
      organization: "University of Hong Kong, Business School",
      location: "Hong Kong SAR, China",
      period: "Oct 2023 – Jan 2024",
      description: [
        "Ran GPT-assisted content experiments with a 10M-follower health influencer to measure engagement lift on TikTok.",
        "Performed A/B tests and regression with Bonferroni corrections on completion, share, and like rates."
      ]
    }
  ];

  const industryExperience = [
    {
      id: 'okx-pm',
      role: "Product Manager 2 (Incoming)",
      organization: "OKX",
      location: "Hong Kong SAR, China",
      period: "Feb 2026 – Present",
      description: [
        "Shape Web3 Wallet growth strategies to retain users, raise activity, and lift conversion rates.",
        "Partner with R&D on data-informed iterations that improve product experience and growth funnels."
      ]
    },
    {
      id: 'betix-ceo',
      role: "CEO, Product Manager",
      organization: "Betix",
      location: "Hong Kong SAR, China",
      period: "May 2025 – Present",
      description: [
        "Built customizable Solana prediction markets for peer-to-peer bets with configurable price, tokens, and triggers.",
        "Led product design and delivery for the AnyBet demo (https://anybet-xi.vercel.app)."
      ]
    },
    {
      id: 'sortes-engineer',
      role: "Software Engineer (Full-time)",
      organization: "Sortes.Fun",
      location: "Remote",
      period: "Feb 2025 – Jun 2025",
      description: [
        "Developed Ethereum lottery front-end with ethers.js and Web3-onboard/react to surface on-chain donation votes.",
        "Drafted PRDs and data structures while coordinating release milestones with engineering via Linear."
      ]
    },
    {
      id: 'hony-analyst',
      role: "Summer Investment Analyst",
      organization: "Hony Capital",
      location: "Hong Kong SAR, China",
      period: "Jun 2023 – Sep 2023",
      description: [
        "Screened 45+ AI, blockchain, and consumer electronics opportunities with product demos and user feedback checks.",
        "Prepared diligence materials and IC analyses on LLM, agent, and speech-generation startups."
      ]
    },
    {
      id: 'bytedance-intern',
      role: "Product Intern",
      organization: "ByteDance, Pico Product Managing Office",
      location: "Beijing, China",
      period: "May 2022 – Jul 2022",
      description: [
        "Researched VR/AR hardware trends and live-stream user insights through 140+ expert interviews and surveys.",
        "Coordinated art, development, and marketing teams to benchmark growth gaps against Meta."
      ]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Master of Finance, Financial Econometrics Track",
      institution: "Johns Hopkins University, Washington, D.C.",
      period: "Expected Dec 2025",
      details: "Graduate studies focused on empirical finance, econometrics, and market microstructure."
    },
    {
      id: 2,
      degree: "BEng in Computer Engineering",
      institution: "University of Hong Kong, Hong Kong SAR, China",
      period: "Jun 2024",
      details: "Coursework spanning algorithms, distributed systems, and applied machine learning."
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
          Research Experience
        </motion.h2>
        
        <div className="timeline">
          {researchExperience.map((exp, index) => (
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
          Industry Experience
        </motion.h2>
        
        <div className="timeline">
          {industryExperience.map((exp, index) => (
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
