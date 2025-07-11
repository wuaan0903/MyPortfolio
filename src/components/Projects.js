import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="projects-title"
        >
          My Project
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="project-grid"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="project-card"
          >
            <div className="project-image">
              <img src="https://i.imgur.com/zIkoL0R.png" alt="E-Learning" />
            </div>
            <h3>E-Learning</h3>
            <p>Mobile Development</p>
            <p>Smart practice for English exams – anytime, anywhere.</p>
            <a href="https://github.com/wuaan0903/MobileAppToeic" className="project-link" target="_blank">
              <i className="fa-solid fa-arrow-right project-icon"></i> More Info
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="project-card"
          >
            <div className="project-image">
              <img src="https://i.imgur.com/42FbF9P.jpeg" alt="79sportswear" />
            </div>
            <h3>E-Commerce - 79Sportswear</h3>
            <p>Web Development</p>
            <p>Smart Shopping for Men's Sportswear & Casualwear</p>
            <a href="https://github.com/wuaan0903/PRJ_TMDT" className="project-link" target="_blank">
              <i className="fa-solid fa-arrow-right project-icon"></i> More Info
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="project-card"
          >
            <div className="project-image">
              <img src="https://i.imgur.com/LnvfDoc.png" alt="HauSummarize" />
            </div>
            <h3>HauSummarize</h3>
            <p>Web Development & Machine Learning</p>
            <p>Summarize Smarter with T5</p>
            <a href="https://github.com/wuaan0903/HAUSummarize" className="project-link" target="_blank">
              <i className="fa-solid fa-arrow-right project-icon"></i> More Info
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="project-card"
          >
            <div className="project-image">
              <img src="https://i.imgur.com/wBTSHKq.jpeg" alt="Online Football Field Booking System" />
            </div>
            <h3>Online Football Field Booking System</h3>
            <p>Web Development</p>
            <p>Football Pitch Management System for Hanoi Green</p>
            <a href="https://gitlab.com/penmoding/football-booking-web" className="project-link" target="_blank">
              <i className="fa-solid fa-arrow-right project-icon"></i> More Info
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;