import React from 'react';
import { Phone, ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { personal } from '../data/personal';

export default function Hero() {
  const scrollToWork = () => {
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-6 pb-16 flex flex-col justify-between overflow-hidden bg-ambient-cinematic bg-noise-overlay text-[#F1EEE8]">
      
      {/* Soft Cinematic Ambient Lighting Spots */}
      <div className="absolute top-[-5%] left-[25%] w-[700px] h-[700px] bg-white/[0.035] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[15%] w-[600px] h-[600px] bg-white/[0.025] rounded-full blur-[140px] pointer-events-none" />

      {/* 1. TOP HEADER CONTROLS BAR — FULL VIEWPORT EDGE */}
      <header className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 md:px-16 flex justify-between items-center z-30 pt-4">
        {/* TOP LEFT: Minimal Outlined CALL Button */}
        <a
          href={`tel:${personal.phone}`}
          className="group inline-flex items-center gap-2.5 px-5 py-2.5 border border-[#F1EEE8]/30 hover:border-[#F1EEE8] rounded-lg font-mono text-xs uppercase tracking-widest text-[#F1EEE8] transition-all duration-300 hover:bg-[#F1EEE8]/10 shadow-lg shadow-black/40"
          title={`Call ${personal.name}`}
        >
          <Phone className="w-4 h-4 text-[#B7B5B0] group-hover:text-[#F1EEE8] transition-colors" />
          <span>CALL</span>
        </a>

        {/* TOP RIGHT: Monochrome Social Icons */}
        <div className="flex items-center gap-6">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B7B5B0] hover:text-[#F1EEE8] hover:scale-110 transition-all duration-300 p-1.5"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4.5 h-4.5" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B7B5B0] hover:text-[#F1EEE8] hover:scale-110 transition-all duration-300 p-1.5"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4.5" />
          </a>
          <a
            href={personal.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B7B5B0] hover:text-[#F1EEE8] hover:scale-110 transition-all duration-300 p-1.5"
            aria-label="Instagram Profile"
          >
            <InstagramIcon className="w-4.5 h-4.5" />
          </a>
        </div>
      </header>

      {/* 2. HERO CENTRAL COMPOSITION: GIANT TYPOGRAPHY + PORTRAIT POSITIONED BELOW */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 md:px-16 my-auto py-6 relative z-10 flex flex-col items-center">
        
        {/* Availability / Status Badge */}
        <div className="flex items-center gap-3 mb-6 font-mono text-xs sm:text-sm md:text-base text-[#B7B5B0] tracking-widest uppercase">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F1EEE8] animate-pulse" />
          <span className="border-b border-[#F1EEE8]/20 pb-0.5">{personal.status}</span>
          <span className="text-[#777772] hidden sm:inline">• BANGALORE, INDIA</span>
        </div>

        {/* Unified Name & Portrait Composition */}
        <div className="relative w-full flex flex-col items-center text-center">
          
          {/* GIANT NAME TYPOGRAPHY - POSTER SCALE */}
          <div className="flex flex-col items-center justify-center select-none w-full relative z-10">
            <h1 className="font-display text-[15vw] sm:text-[16vw] md:text-[160px] lg:text-[200px] xl:text-[240px] 2xl:text-[270px] uppercase font-extrabold tracking-tighter leading-[0.82] text-[#F1EEE8] hero-name-stroke drop-shadow-2xl">
              CHARVESH
            </h1>
            <h1 className="font-display text-[15vw] sm:text-[16vw] md:text-[160px] lg:text-[200px] xl:text-[240px] 2xl:text-[270px] uppercase font-extrabold tracking-tighter leading-[0.82] text-[#F1EEE8] hero-name-stroke drop-shadow-2xl">
              KUMAR
            </h1>
          </div>

          {/* EDITORIAL MONOCHROME PORTRAIT POSITIONED BELOW NAME */}
          <div className="relative -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10 z-20 group">
            <div className="w-48 sm:w-60 md:w-72 lg:w-[280px] xl:w-[295px] aspect-[4/5] rounded-3xl overflow-hidden border border-[#F1EEE8]/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] bg-[#101116] transition-transform duration-700 hover:scale-[1.02]">
              <img
                src="/images/profile/charvesh.jpg"
                alt="Charvesh Kumar - AI & Machine Learning Developer"
                className="w-full h-full object-cover object-top grayscale contrast-125 brightness-95 group-hover:contrast-110 transition-all duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* Subtle Pill Tag Below Image */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#101116]/95 border border-[#F1EEE8]/20 rounded-full font-mono text-xs tracking-widest uppercase text-[#B7B5B0] whitespace-nowrap shadow-xl backdrop-blur-md">
              AI / ML DEVELOPER
            </div>
          </div>

        </div>

        {/* 3. HERO LOWER ASYMMETRIC METADATA ROW */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 pt-12 md:pt-16 items-end border-t border-[#F1EEE8]/10 mt-12 sm:mt-14">
          
          {/* Lower Left Block: Primary Role & Identity */}
          <div className="md:col-span-6 space-y-2.5">
            <h2 className="font-mono text-sm sm:text-base uppercase tracking-widest text-[#F1EEE8] font-semibold">
              AI & MACHINE LEARNING DEVELOPER
            </h2>
            <p className="font-mono text-xs sm:text-sm md:text-base text-[#777772] uppercase tracking-wider">
              B.Tech CSE (AI & ML) — Kuppam Engineering College (2023–2027)
            </p>
            <p className="text-base md:text-lg text-[#B7B5B0] max-w-xl font-light leading-relaxed pt-2">
              Building intelligent systems with AI, machine learning and modern web technologies. Focused on practical applications, computer vision, and RAG architectures.
            </p>
          </div>

          {/* Lower Center: Explore Scroll Prompt */}
          <div className="md:col-span-2 hidden md:flex flex-col items-center justify-end pb-2">
            <button
              onClick={scrollToWork}
              className="group flex flex-col items-center gap-2 text-[#777772] hover:text-[#F1EEE8] transition-colors duration-300"
              aria-label="Scroll to Work"
            >
              <span className="font-mono text-xs tracking-widest uppercase">EXPLORE WORK</span>
              <ArrowDown className="w-4 h-4 animate-bounce text-[#B7B5B0] group-hover:text-[#F1EEE8]" />
            </button>
          </div>

          {/* Lower Right Block: Philosophy Statement */}
          <div className="md:col-span-4 text-left md:text-right space-y-2.5">
            <p className="font-mono text-xs sm:text-sm md:text-base text-[#777772] uppercase tracking-wider">
              // DESIGN & DEVELOPMENT PHILOSOPHY
            </p>
            <p className="text-base md:text-lg text-[#B7B5B0] font-light leading-relaxed">
              Focused on developing intelligent solutions and digital experiences that solve real-world problems through clean architecture and continuous learning.
            </p>
          </div>

        </div>

      </div>

      {/* 4. BOTTOM FOOTER TICKER BAR */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 md:px-16 pt-6 flex justify-between items-center font-mono text-xs sm:text-sm text-[#777772] uppercase tracking-widest">
        <span>CHARVESH KUMAR • PORTFOLIO 2026</span>
        <span>01 / 07</span>
      </div>

    </section>
  );
}
