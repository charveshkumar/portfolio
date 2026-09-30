import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { personal } from '../data/personal';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#08090D] py-16 border-t border-[#F1EEE8]/10 text-xs font-mono text-[#777772] pb-28 md:pb-20">
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 md:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-display text-lg text-[#F1EEE8] tracking-wider uppercase font-bold">CHARVESH KUMAR</span>
          <span className="hidden sm:inline text-[#777772]">•</span>
          <span className="uppercase text-[#B7B5B0]">AI & MACHINE LEARNING DEVELOPER</span>
          <span className="hidden sm:inline text-[#777772]">•</span>
          <span className="text-[#777772]">BANGALORE, INDIA</span>
        </div>

        {/* Links & Back To Top */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#777772] hover:text-[#F1EEE8] transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#777772] hover:text-[#F1EEE8] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#777772] hover:text-[#F1EEE8] transition-colors"
              aria-label="Instagram Profile"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-[#777772] hover:text-[#F1EEE8] transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 border border-[#F1EEE8]/10 hover:border-[#F1EEE8]/30 text-[#F1EEE8] rounded-full transition-all uppercase tracking-wider text-[11px]"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#F1EEE8] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-6 border-t border-[#F1EEE8]/5 flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#777772]">
        <span>© 2026 CHARVESH KUMAR. ALL RIGHTS RESERVED.</span>
        <span>CINEMATIC EDITORIAL PORTFOLIO</span>
      </div>
    </footer>
  );
}
