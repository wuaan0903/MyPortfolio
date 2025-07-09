import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;