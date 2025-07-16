import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="about-title"
        >
          About Me.
        </motion.h2>
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="profile-image"
          >
            <img src="https://i.imgur.com/blnCOVg.png" alt="Profile" className="profile-img" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="profile-info"
          >
            <h3>Quan Nguyen Minh</h3>
            <p>
              <span className="info-icon"><i className="fas fa-birthday-cake"></i> <strong>Birthdate:</strong> 09/03/2003   </span> 
              <span className="info-icon"><i className="fas fa-map-marker-alt"></i> <strong>Location:</strong> Ha Noi City, Vietnam</span> 
            </p>
            <p>
              <span className="info-icon"><i className="fas fa-phone"></i> <strong>Phone:</strong> +84 942 909 584   </span> 
              <span className="info-icon"><i className="fas fa-envelope"></i> <strong>Email:</strong> nminhquan933@gmail.com</span> 
            </p>
            <p>
              <span className="info-icon"><i className="fa-brands fa-facebook"></i>
              <a href="https://web.facebook.com/wuaan.0903/" className="info-link" target="_blank">Facebook</a>
              </span> 
              <span className="info-icon"><i className="fa-brands fa-github"></i> 
              <a href="https://github.com/wuaan0903" className="info-link" target="_blank">Github</a>
              </span> 
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="intro"
            >
              Nice to meet you! My name is Quan, and I have a strong passion for technology, especially web development. I’m driven by the goal of creating websites that are not only functional and efficient but also provide real-world value through thoughtful design and outstanding user experiences. I'm constantly learning and exploring new technologies to enhance my skills and deliver high-quality solutions that align with client expectations. I’m excited for the opportunity to connect with you!
            </motion.p>
            <div className="my-skill">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                My Skills
              </motion.h3>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="skills-list"
              >
                <div className="skill-item">
                  <img src="https://i.imgur.com/ksNpfCH.png" alt="NodeJS" className="skill-icon" />
                </div>
                <div className="skill-item">
                  <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="ReactJS" className="skill-icon" />
                </div>
                <div className="skill-item">
                  <img src="https://brandlogos.net/wp-content/uploads/2022/01/laravel-logo-brandlogo.net_.png" alt="Laravel" className="skill-icon" />
                </div>
                <div className="skill-item">
                  <img src="https://i.imgur.com/3pjBs7P.png" alt="MongoDB" className="skill-icon" />
                </div>
                <div className="skill-item">
                  <img src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-development-mysql-logo-code-icon-9.png" alt="MySQL" className="skill-icon" />
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/200/git.png" alt="Git" className="skill-icon" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;