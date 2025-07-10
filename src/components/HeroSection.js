import React from 'react';
import '../index.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Hello 🙋‍♂️<br />I'm Nguyen Minh Quan.<br />I'm a Web Developer,<br/>
based in Ha Noi city,<br/> Vietnam.</h1>
        <div className="keyword-buttons">
          <span className="keyword-btn">Creative</span>
          <span className="keyword-btn">Passionate</span>
          <span className="keyword-btn">Innovative</span>
          <span className="keyword-btn">Dedicated</span>
          <span className="keyword-btn">Curious</span>
          <span className="keyword-btn">Adaptable</span>
          <span className="keyword-btn">Detail-oriented</span>
          <span className="keyword-btn">Problem-solver</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;