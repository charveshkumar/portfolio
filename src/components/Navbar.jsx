import React, { useState, useEffect } from 'react';
import { FileText, Home, Briefcase, User, Code, Award, Mail } from 'lucide-react';
import { personal } from '../data/personal';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'about', 'skills', 'certifications', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'work', label: 'Work', icon: Briefcase },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'certifications', label: 'Certs', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[95vw] sm:max-w-max">
      <div className="flex items-center gap-1 sm:gap-2 px-3.5 py-2.5 rounded-full bg-[#101116]/85 backdrop-blur-xl border border-[#F1EEE8]/12 shadow-2xl shadow-black/80 overflow-x-auto no-scrollbar">
        
        {/* Resume Action Pill */}
        <a
          href={personal.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F1EEE8] text-[#08090D] hover:bg-white text-xs sm:text-sm font-mono font-medium tracking-wider uppercase transition-all duration-300 shadow-sm hover:scale-[1.03]"
        >
          <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#08090D]" />
          <span>Resume</span>
        </a>

        <div className="h-4 w-px bg-white/10 mx-1 hidden sm:block" />

        {/* Floating Navigation Links */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-mono tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? 'text-[#F1EEE8] bg-white/10 font-semibold'
                    : 'text-[#B7B5B0] hover:text-[#F1EEE8] hover:bg-white/5'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-[#F1EEE8]' : 'text-[#777772]'}`} />
                <span className="hidden sm:inline">{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#F1EEE8]" />
                )}
              </button>
            );
          })}
        </div>

      </div>
    </nav>
  );
}
