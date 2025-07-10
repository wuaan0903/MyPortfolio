import React from 'react';
import '../index.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Project</h2>
        <div className="project-grid">
          <div className="project-card">
            <div className="project-image">
              <img src="https://i.ibb.co/5g0VHGGb/z6757426073565-a960499787265ab002eaf365eeca0141.png" alt="E-Learning" />
            </div>
            <h3>E-Learning</h3>
            <p>Mobile Development</p>
            <p>Smart practice for English exams – anytime, anywhere.</p>
            <a href="https://github.com/wuaan0903/MobileAppToeic" className="project-link" target="_blank"> <i class="fa-solid fa-arrow-right project-icon"></i> More Info</a>
          </div> 
          <div className="project-card">
            <div className="project-image">
              <img src="https://i.ibb.co/Q4m5Q21/5d5bf0227428029-683fed74ca30b.png" alt="79sportswear" />
            </div>
            <h3>E-Commerce - 79Sportswear</h3>
            <p>Web Development</p>
            <p>Smart Shopping for Men's Sportswear & Casualwear</p>
            <a href="https://github.com/wuaan0903/PRJ_TMDT" className="project-link" target="_blank"> <i class="fa-solid fa-arrow-right project-icon"></i> More Info</a>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src="https://i.ibb.co/3933xhgw/29b33a225199147-6819261ad7abf.png" alt="HauSummarize" />
            </div>
            <h3>HauSummarize</h3>
            <p>Web Development & Machine Learning</p>
            <p>Summarize Smarter with T5</p>
            <a href="https://github.com/wuaan0903/HAUSummarize" className="project-link" target="_blank"> <i class="fa-solid fa-arrow-right project-icon"></i> More Info</a>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src="https://i.ibb.co/6cmpGztJ/hanoigreen.png" alt="Online Football Field Booking System" />
            </div>
            <h3>Online Football Field Booking System</h3>
            <p>Web Development</p>
            <p>Football Pitch Management System for Hanoi Green</p>
            <a href="https://gitlab.com/penmoding/football-booking-web" className="project-link" target="_blank"><i class="fa-solid fa-arrow-right project-icon"></i> More Info</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;