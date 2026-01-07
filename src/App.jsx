import React from 'react';
import SpaceBackground from './Components/SpaceBackground';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import SkillsMarquee from './Components/SkillsMarquee';
import Projects from './Components/Projects';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="bg-[#050505] text-white font-mono selection:bg-white selection:text-black">
      <SpaceBackground />
      <Navbar />
      
      <main>
        <Hero />
        <SkillsMarquee />
        <Projects />
        <About />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;