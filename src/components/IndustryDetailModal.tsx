import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { Industry } from '../data/industries';

interface IndustryDetailModalProps {
  industry: Industry | null;
  onClose: () => void;
  onInquire: (industryName: string) => void;
}

export const IndustryDetailModal: React.FC<IndustryDetailModalProps> = ({
  industry,
  onClose,
  onInquire,
}) => {
  if (!industry) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-[680px] max-h-[92vh] overflow-y-auto bg-[#0c1624] border border-white/15 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_40px_rgba(255,38,56,0.2)]">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-56 h-56 bg-[#ff2638]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 text-white/60 hover:text-white p-1.5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="mb-5">
          <div className="text-[11px] font-bold tracking-[0.22em] text-[#ff2638] uppercase">
            INDUSTRY VERTICAL
          </div>
          <h2 className="text-[26px] sm:text-[30px] font-bold text-white mt-1">{industry.name}</h2>
          <p className="text-[13.5px] sm:text-[14.5px] text-[#8e9cae] mt-1.5 leading-relaxed">{industry.description}</p>
        </div>

        {/* Industry Preview Image */}
        <div className="relative w-full h-[180px] sm:h-[220px] rounded-2xl overflow-hidden mb-6 border border-white/10">
          <img
            src="/assets/images/industry_architecture_hd_1793870851818.jpg"
            alt={industry.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white font-bold text-[15px] sm:text-[16px] flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff2638]" />
            <span>Enterprise Solutions for {industry.name}</span>
          </div>
        </div>

        {/* Specific Tailored Modules */}
        <div className="space-y-3 mb-6">
          <div className="text-[12px] sm:text-[13px] font-bold text-white uppercase tracking-wider">
            Tailored Engineering Modules
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {industry.solutions.map((sol, i) => (
              <div key={i} className="flex items-center gap-2.5 text-[12.5px] sm:text-[13.5px] text-[#c4ccd7]">
                <Check className="w-4 h-4 text-[#ff2638] shrink-0 stroke-[2.5]" />
                <span>{sol}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-white/8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <span className="text-[11.5px] sm:text-[12px] text-[#8e9cae]">
            Custom compliance & integrations available
          </span>
          <button
            onClick={() => {
              onClose();
              onInquire(industry.name);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#ff2638] hover:bg-[#e01f30] text-white text-[13.5px] sm:text-[14px] font-bold px-5 py-2.5 rounded-xl shadow-[0_0_20px_rgba(255,38,56,0.45)] transition-all cursor-pointer active:scale-97 min-h-12"
          >
            <span>Consult for {industry.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
