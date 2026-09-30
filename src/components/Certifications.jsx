import React, { useState } from 'react';
import { certifications } from '../data/certifications';
import { ArrowUpRight, ExternalLink, X, FileText, CheckCircle2 } from 'lucide-react';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="w-full py-28 bg-[#08090D] border-b border-[#F1EEE8]/10 relative">
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 md:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-8 mb-16 border-b border-[#F1EEE8]/10">
          <div>
            <span className="font-mono text-xs text-[#777772] uppercase tracking-widest block mb-2">
              // 08. VERIFIED CREDENTIALS
            </span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F1EEE8] tracking-tight uppercase font-extrabold">
              CERTIFICATIONS & CREDENTIALS
            </h2>
          </div>
          <p className="font-mono text-xs text-[#777772] max-w-xs mt-4 md:mt-0 uppercase tracking-wider">
            OFFICIAL COURSEWORK, PROGRAMMING CERTIFICATIONS & INTERNSHIP CREDENTIALS
          </p>
        </div>

        {/* Editorial List Layout */}
        <div className="space-y-12 sm:space-y-16">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="border-b border-[#F1EEE8]/10 pb-12 sm:pb-16 group transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* Number Index */}
                <div className="lg:col-span-2 flex items-baseline justify-between lg:justify-start gap-4">
                  <span className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#F1EEE8] font-extrabold tracking-tight">
                    {cert.number}
                  </span>
                </div>

                {/* Title, Issuer & Key Details */}
                <div className="lg:col-span-6 space-y-3">
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#F1EEE8] uppercase font-bold tracking-tight group-hover:text-white transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  
                  <p className="font-mono text-sm sm:text-base text-[#B7B5B0]">
                    {cert.issuer}
                  </p>

                  {cert.score && (
                    <div className="inline-flex items-center gap-2 font-mono text-xs text-[#F1EEE8] px-3 py-1 bg-[#101116] border border-[#F1EEE8]/20 rounded-full mt-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Consolidated Score: <strong>{cert.score}</strong></span>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-[#777772] font-light leading-relaxed max-w-xl">
                    {cert.description}
                  </p>
                </div>

                {/* Date, Metadata & Action Button */}
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-between items-start lg:items-end gap-4 pt-2 lg:pt-0">
                  <div className="font-mono text-xs sm:text-sm text-[#777772] uppercase tracking-wider text-left lg:text-right">
                    <div>{cert.formattedDate}</div>
                    {cert.duration && <div className="text-[11px] text-[#B7B5B0] mt-0.5">{cert.duration}</div>}
                  </div>

                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#F1EEE8]/20 hover:border-[#F1EEE8] bg-[#101116] text-xs sm:text-sm font-mono text-[#F1EEE8] uppercase tracking-wider transition-all duration-300 hover:bg-[#F1EEE8] hover:text-[#08090D] shadow-lg"
                  >
                    <span>VIEW CERTIFICATE</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / PDF Viewer Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-scale">
          <div className="bg-[#101116] border border-[#F1EEE8]/20 p-6 rounded-2xl max-w-5xl w-full max-h-[92vh] flex flex-col justify-between relative shadow-2xl">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-[#F1EEE8]/10 font-mono text-xs">
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-[#F1EEE8]" />
                <span className="text-[#F1EEE8] font-semibold uppercase tracking-wider truncate max-w-xs sm:max-w-md">
                  {selectedCert.title} — {selectedCert.issuer}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={selectedCert.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 border border-[#F1EEE8]/20 hover:border-[#F1EEE8] text-[11px] text-[#F1EEE8] rounded-full transition-colors uppercase tracking-wider"
                >
                  <span>OPEN IN NEW TAB</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-full border border-[#F1EEE8]/20 text-[#777772] hover:text-[#F1EEE8] hover:border-[#F1EEE8] transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Viewer Body */}
            <div className="flex-1 min-h-[350px] sm:min-h-[450px] md:min-h-[520px] bg-[#08090D] border border-[#F1EEE8]/10 rounded-xl overflow-hidden flex items-center justify-center p-2 relative">
              {selectedCert.fileType === 'image' ? (
                <img
                  src={selectedCert.fileUrl}
                  alt={selectedCert.title}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-xl"
                />
              ) : (
                <iframe
                  src={selectedCert.fileUrl}
                  title={selectedCert.title}
                  className="w-full h-[70vh] rounded-lg border-0 bg-white/5"
                />
              )}
            </div>

            {/* Modal Metadata Footer */}
            {selectedCert.details && (
              <div className="pt-4 mt-4 border-t border-[#F1EEE8]/10 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-[11px]">
                {selectedCert.details.map((detail, dIdx) => (
                  <div key={dIdx} className="space-y-0.5">
                    <span className="text-[#777772] block uppercase tracking-wider">{detail.label}</span>
                    <span className="text-[#F1EEE8] font-medium truncate block">{detail.value}</span>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
