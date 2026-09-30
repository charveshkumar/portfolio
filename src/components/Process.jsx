import React from 'react';
import { Search, Compass, Cpu, CheckCircle2, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      icon: <Search className="w-5 h-5 text-[#F1EEE8]" />,
      description: "Understand the problem, requirements, target users, dataset requirements, and technical objectives."
    },
    {
      num: "02",
      title: "DESIGN",
      icon: <Compass className="w-5 h-5 text-[#F1EEE8]" />,
      description: "Plan the system architecture, data preprocessing pipelines, model selection, user experience, and technical approach."
    },
    {
      num: "03",
      title: "DEVELOP",
      icon: <Cpu className="w-5 h-5 text-[#F1EEE8]" />,
      description: "Build the solution using appropriate AI, ML, Computer Vision, RAG, and modern web development technologies."
    },
    {
      num: "04",
      title: "TEST & EVALUATE",
      icon: <CheckCircle2 className="w-5 h-5 text-[#F1EEE8]" />,
      description: "Evaluate model metrics (accuracy, loss, precision), user interface reliability, performance, and overall system functionality."
    },
    {
      num: "05",
      title: "DEPLOY & REFINE",
      icon: <Rocket className="w-5 h-5 text-[#F1EEE8]" />,
      description: "Prepare the solution for production deployment, iterate based on empirical feedback, and continuously optimize."
    }
  ];

  return (
    <section id="process" className="py-28 bg-[#08090D] border-b border-[#F1EEE8]/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-8 mb-16 border-b border-[#F1EEE8]/10">
          <div>
            <span className="font-mono text-xs text-[#777772] uppercase tracking-widest block mb-2">
              // 06. METHODOLOGY
            </span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-[#F1EEE8] tracking-tight uppercase font-extrabold">
              HOW I BUILD
            </h2>
          </div>
          <p className="font-mono text-xs text-[#777772] max-w-xs mt-4 md:mt-0 uppercase tracking-wider">
            FIVE-STAGE DEVELOPMENT WORKFLOW
          </p>
        </div>

        {/* 5-Stage Vertical Timeline */}
        <div className="relative pl-6 md:pl-12 border-l border-[#F1EEE8]/15 space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              
              {/* Connector Dot */}
              <div className="absolute -left-[31px] md:-left-[55px] top-4 w-4 h-4 bg-[#08090D] border-2 border-[#F1EEE8] rounded-full group-hover:bg-[#F1EEE8] transition-all" />

              <div className="p-6 md:p-8 bg-[#101116] border border-[#F1EEE8]/10 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#F1EEE8]/30 transition-colors">
                
                <div className="flex items-start gap-4">
                  <div className="p-3 border border-[#F1EEE8]/10 text-[#F1EEE8] rounded-xl shrink-0">
                    {step.icon}
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-xs text-[#777772]">STAGE {step.num}</span>
                      <h3 className="font-syne text-2xl text-[#F1EEE8] font-bold">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#777772] font-light leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="font-display text-4xl text-[#F1EEE8]/10 font-bold self-end md:self-auto">
                  {step.num}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
