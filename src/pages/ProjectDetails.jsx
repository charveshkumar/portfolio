import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, ArrowLeft, Terminal, Layers, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { personal } from '../data/personal';

export default function ProjectDetails({ project, onClose }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Store and lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus case study container for immediate keyboard scroll support (ArrowUp, ArrowDown, PageUp, PageDown, Space)
    if (containerRef.current) {
      containerRef.current.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      id="case-study-container"
      ref={containerRef}
      tabIndex={-1}
      data-lenis-prevent
      className="fixed inset-0 z-[100] h-dvh w-full bg-[#08090D]/95 backdrop-blur-xl overflow-y-auto overscroll-contain animate-in fade-in duration-300 text-[#F1EEE8] outline-none"
      style={{
        WebkitOverflowScrolling: 'touch',
        overscrollBehavior: 'contain',
        overscrollBehaviorY: 'contain'
      }}
    >
      
      {/* Top Header Bar */}
      <div className="sticky top-0 z-30 bg-[#08090D]/95 backdrop-blur-md border-b border-[#F1EEE8]/10 px-6 md:px-12 py-4 flex items-center justify-between">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 font-mono text-xs text-[#B7B5B0] hover:text-[#F1EEE8] uppercase tracking-wider transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO PORTFOLIO</span>
        </button>

        <div className="flex items-center gap-4">
          <span className="font-display text-2xl text-[#F1EEE8] font-bold">{project.number}</span>
          <button
            onClick={onClose}
            className="p-2 border border-[#F1EEE8]/10 hover:border-[#F1EEE8]/40 text-[#F1EEE8] rounded-full transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 space-y-12 min-h-min pb-24">
        
        {/* Banner Hero */}
        <div className={`p-8 md:p-14 bg-gradient-to-br ${project.imageGradient} border border-[#F1EEE8]/10 rounded-2xl relative overflow-hidden`}>
          <div className="absolute inset-0 bg-noise-overlay opacity-30 pointer-events-none" />
          
          <div className="relative z-10 space-y-4">
            <span className="px-3 py-1 border border-[#F1EEE8]/20 font-mono text-xs text-[#F1EEE8] uppercase tracking-widest rounded-full inline-block bg-[#08090D]/80">
              {project.category}
            </span>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#F1EEE8] uppercase font-extrabold tracking-tight">
              {project.title}
            </h1>
            <p className="font-mono text-sm sm:text-base text-[#B7B5B0] font-light max-w-2xl">
              {project.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#F1EEE8]/10 font-mono text-xs text-[#777772]">
              <span>STATUS: <strong className="text-[#F1EEE8] font-normal">{project.status}</strong></span>
              <span>ARCHITECT: <strong className="text-[#F1EEE8] font-normal">{personal.name}</strong></span>
            </div>
          </div>
        </div>

        {/* 2-Column Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Left Content */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs text-[#777772] tracking-widest uppercase flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#F1EEE8]" />
                <span>PROJECT OVERVIEW</span>
              </h3>
              <p className="text-base text-[#B7B5B0] font-light leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="p-6 bg-[#101116] border border-[#F1EEE8]/10 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#F1EEE8] font-semibold uppercase">
                  <ShieldAlert className="w-4 h-4 text-[#F1EEE8]" />
                  <span>THE PROBLEM STATEMENT</span>
                </div>
                <p className="text-xs text-[#777772] font-light leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-6 bg-[#101116] border border-[#F1EEE8]/10 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#F1EEE8] font-semibold uppercase">
                  <CheckCircle2 className="w-4 h-4 text-[#F1EEE8]" />
                  <span>THE ARCHITECTURAL SOLUTION</span>
                </div>
                <p className="text-xs text-[#777772] font-light leading-relaxed">
                  {project.solution}
                </p>
              </div>

            </div>

            {/* Core Features */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs text-[#777772] tracking-widest uppercase flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#F1EEE8]" />
                <span>CORE SYSTEM FEATURES</span>
              </h3>
              <ul className="space-y-3 font-mono text-xs text-[#B7B5B0]">
                {project.features.map((feat, fIdx) => (
                  <li key={fIdx} className="p-4 bg-[#101116] border border-[#F1EEE8]/10 rounded-xl flex items-start gap-3">
                    <span className="text-[#F1EEE8] font-bold">0{fIdx + 1}.</span>
                    <span className="leading-relaxed text-[#F1EEE8]">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture */}
            <div className="p-6 bg-[#101116] border border-[#F1EEE8]/10 rounded-xl space-y-3">
              <h3 className="font-mono text-xs text-[#777772] tracking-widest uppercase">
                // SYSTEM ARCHITECTURE & DATA FLOW
              </h3>
              <div className="p-4 bg-[#08090D] border border-[#F1EEE8]/10 rounded-lg font-mono text-xs text-[#F1EEE8]">
                {project.architecture}
              </div>
            </div>

            {/* Development Process */}
            <div className="space-y-6 text-xs font-mono text-[#777772]">
              <div>
                <h4 className="text-[#F1EEE8] font-semibold uppercase mb-2">
                  DEVELOPMENT PROCESS
                </h4>
                <p className="leading-relaxed text-[#B7B5B0]">
                  {project.developmentProcess}
                </p>
              </div>

              <div>
                <h4 className="text-[#F1EEE8] font-semibold uppercase mb-2">
                  ENGINEERING CHALLENGES
                </h4>
                <p className="leading-relaxed text-[#B7B5B0]">
                  {project.challenges}
                </p>
              </div>

              <div>
                <h4 className="text-[#F1EEE8] font-semibold uppercase mb-2">
                  DELIVERABLE RESULTS
                </h4>
                <p className="leading-relaxed text-[#B7B5B0]">
                  {project.results}
                </p>
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Actions */}
            <div className="p-6 bg-[#101116] border border-[#F1EEE8]/10 rounded-2xl space-y-4">
              <h4 className="font-mono text-xs text-[#F1EEE8] font-semibold uppercase tracking-wider border-b border-[#F1EEE8]/10 pb-3">
                SOURCE & REPOSITORY
              </h4>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3.5 border border-[#F1EEE8]/10 hover:border-[#F1EEE8]/40 text-xs font-mono text-[#F1EEE8] rounded-xl transition-colors uppercase"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-[#F1EEE8]" />
                    <span>GITHUB REPOSITORY</span>
                  </span>
                  <span>→</span>
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3.5 bg-[#F1EEE8] text-[#08090D] text-xs font-mono rounded-xl font-semibold hover:bg-white transition-colors uppercase"
                >
                  <span className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>LAUNCH DEMO</span>
                  </span>
                  <span>→</span>
                </a>
              )}
            </div>

            {/* Tech Stack */}
            <div className="p-6 bg-[#101116] border border-[#F1EEE8]/10 rounded-2xl space-y-4">
              <h4 className="font-mono text-xs text-[#F1EEE8] font-semibold uppercase tracking-wider border-b border-[#F1EEE8]/10 pb-3">
                TECHNOLOGY STACK
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 border border-[#F1EEE8]/10 text-xs font-mono text-[#B7B5B0] rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Credit */}
            <div className="p-6 bg-[#101116] border border-[#F1EEE8]/10 rounded-2xl font-mono text-xs text-[#777772] space-y-2">
              <div className="text-[#F1EEE8] font-semibold uppercase">// DEVELOPER CREDIT</div>
              <div>Charvesh Kumar</div>
              <div>B.Tech CSE (AI & ML) Student</div>
              <div>Bangalore, India</div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
