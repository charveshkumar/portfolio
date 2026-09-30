import React, { useState } from 'react';
import { additionalProjects } from '../data/projects';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function AdditionalProjects() {
  const [expanded, setExpanded] = useState(false);

  const displayedProjects = expanded ? additionalProjects : additionalProjects.slice(0, 4);

  return (
    <div className="mt-20 pt-16 border-t border-[#F1EEE8]/10">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div>
          <span className="font-mono text-xs text-[#777772] tracking-widest uppercase block mb-1">
            // ARCHIVE & EXPERIMENTS
          </span>
          <h3 className="font-display text-3xl sm:text-4xl text-[#F1EEE8] uppercase font-bold tracking-tight">
            ADDITIONAL PROJECTS & EXPERIMENTS
          </h3>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#B7B5B0] hover:text-[#F1EEE8] transition-colors border border-[#F1EEE8]/10 hover:border-[#F1EEE8]/30 px-4 py-2 rounded-full self-start sm:self-auto uppercase tracking-wider"
        >
          <span>{expanded ? 'SHOW FEWER' : `VIEW ALL (${additionalProjects.length})`}</span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedProjects.map((proj, idx) => (
          <div
            key={idx}
            className="p-6 bg-[#101116] border border-[#F1EEE8]/10 rounded-xl flex flex-col justify-between group hover:border-[#F1EEE8]/30 transition-colors"
          >
            <div>
              <div className="flex justify-between items-center mb-3 font-mono text-[10px] text-[#777772]">
                <span className="px-2.5 py-0.5 border border-[#F1EEE8]/10 rounded-full uppercase tracking-wider text-[#B7B5B0]">
                  {proj.category}
                </span>
                <span>0{idx + 1}</span>
              </div>

              <h4 className="font-syne text-xl text-[#F1EEE8] font-bold tracking-tight mb-2 group-hover:text-white transition-colors">
                {proj.title}
              </h4>

              <p className="text-xs text-[#777772] font-light leading-relaxed mb-4">
                {proj.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#F1EEE8]/5 font-mono text-[10px] text-[#777772]">
              {proj.technologies.map((t, tIdx) => (
                <span key={tIdx} className="px-2 py-0.5 border border-[#F1EEE8]/5 rounded-full">
                  {t}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
