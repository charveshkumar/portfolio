import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Process from '../components/Process';
import Achievements from '../components/Achievements';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ProjectDetails from './ProjectDetails';
import CustomCursor from '../components/CustomCursor';
import { useLenis } from '../hooks/useLenis';

export default function Home() {
  // Initialize Lenis Smooth Scroll
  useLenis();

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="w-full min-h-screen bg-[#08090D] text-[#F1EEE8] font-body selection:bg-[#F1EEE8] selection:text-[#08090D] m-0 p-0 overflow-x-hidden">
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Education />
        <Skills />
        <Projects onSelectProject={setSelectedProject} />
        <Experience />
        <Process />
        <Achievements />
        <Certifications />
        <Contact />
      </main>

      <Footer />

      {/* Project Case Study Details Modal */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
