import React from 'react';
import '../index.css';

const Header = () => {
  return (
    <nav className="header">
      <div className="container">
        <div className="logo">@wuaan</div>
        <div className="nav-links">
          <a href="#hero">Intro</a>
          <a href="#projects">Work</a>
          <a href="#about">About</a>          
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;