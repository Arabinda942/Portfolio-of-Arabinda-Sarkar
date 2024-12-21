import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen relative">
      <ParticleBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Skills />
        <Education />
      </main>
      <footer className="bg-gray-900 text-gray-400 py-8 text-center relative z-10">
        <p>© {new Date().getFullYear()} Arabinda Sarkar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;