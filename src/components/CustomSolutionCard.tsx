import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { gridItemVariants } from '../utils/motionVariants';

interface CustomSolutionCardProps {
  onDiscuss: () => void;
}

export const CustomSolutionCard: React.FC<CustomSolutionCardProps> = ({ onDiscuss }) => {
  return (
    <motion.div
      variants={gridItemVariants}
      whileHover={{ y: -5, scale: 1.01 }}
      onClick={onDiscuss}
      className="group relative flex flex-col justify-between bg-gradient-to-br from-[#16080e] via-[#0c121e] to-[#070b13] border border-[#ff2638]/40 hover:border-[#ff2638]/70 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_20px_rgba(255,38,56,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_30px_rgba(255,38,56,0.3)] p-2.5 xs:p-3 sm:p-4 lg:p-5 h-full cursor-pointer"
    >
      {/* Background ambient red glow */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-44 sm:h-44 bg-[#ff2638]/18 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-28 h-28 sm:w-36 sm:h-36 bg-[#ff2638]/12 rounded-full blur-2xl pointer-events-none" />

      {/* Upper Section */}
      <div className="relative w-full aspect-[16/10] rounded-lg sm:rounded-xl overflow-hidden bg-[#060b13] border border-white/10 group-hover:border-[#ff2638]/50 transition-all duration-300 shadow-md">
        <img
          src="/assets/custom_solution.png"
          alt="Custom Software Architecture & Engineering"
          className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 select-none pointer-events-none"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b13]/40 via-transparent to-transparent pointer-events-none opacity-40 group-hover:opacity-10 transition-opacity" />
      </div>

      {/* Lower Section */}
      <div className="pt-2 sm:pt-3.5 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-start gap-1.5 sm:gap-2.5 mb-1 sm:mb-2">
            <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#ff2638]/15 border border-[#ff2638]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#ff2638] group-hover:scale-105 group-hover:border-[#ff2638]/60 transition-all">
              <Sparkles className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
            </div>
            <h3 className="text-[12px] xs:text-[13px] sm:text-[15px] lg:text-[16px] font-bold text-white leading-tight group-hover:text-[#ff2638] transition-colors line-clamp-2">
              Need a Custom Solution?
            </h3>
          </div>

          <p className="text-[10px] xs:text-[11px] sm:text-[12px] lg:text-[13px] text-[#8e9cae] leading-snug line-clamp-2 mb-2 sm:mb-3">
            Have a unique business model or workflow? We engineer software from scratch.
          </p>
        </div>

        {/* Bottom Button */}
        <div className="pt-1">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onDiscuss();
            }}
            className="w-full flex items-center justify-center gap-1 sm:gap-2 bg-gradient-to-r from-[#ba1625] via-[#a21220] to-[#880d19] hover:from-[#d1192a] hover:via-[#b81424] hover:to-[#9c0f1d] text-white text-[10.5px] xs:text-[11.5px] sm:text-[13px] font-bold py-1.5 sm:py-2.5 px-2 xs:px-3 rounded-lg border border-[#ff384b]/40 hover:border-[#ff384b]/80 transition-all duration-200 cursor-pointer shadow-[0_0_14px_rgba(255,38,56,0.3)] group-hover:shadow-[0_0_22px_rgba(255,38,56,0.6)] active:scale-95 min-h-[30px] sm:min-h-[38px]"
          >
            <span className="truncate">Discuss Idea</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-1 shrink-0" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
