import React, { useState, useRef } from 'react';
import { INDUSTRIES, Industry } from '../data/industries';
import { motion } from 'motion/react';
import {
  GraduationCap,
  HeartPulse,
  UtensilsCrossed,
  ShoppingCart,
  Factory,
  Building2,
  Briefcase,
} from 'lucide-react';
import {
  sectionHeaderVariants,
  gridContainerVariants,
  gridItemVariants,
  defaultViewport,
} from '../utils/motionVariants';

interface IndustriesSectionProps {
  onSelectIndustry: (industry: Industry) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onSelectIndustry }) => {
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleTouchStart = () => {
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 1500);
  };

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'education':
        return <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-[#ff2638] transition-colors stroke-[2.2]" />;
      case 'healthcare':
        return <HeartPulse className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-[#ff2638] transition-colors stroke-[2.2]" />;
      case 'food':
        return <UtensilsCrossed className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-[#ff2638] transition-colors stroke-[2.2]" />;
      case 'retail':
        return <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-[#ff2638] transition-colors stroke-[2.2]" />;
      case 'manufacturing':
        return <Factory className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-[#ff2638] transition-colors stroke-[2.2]" />;
      case 'realestate':
        return <Building2 className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-[#ff2638] transition-colors stroke-[2.2]" />;
      case 'professional':
      default:
        return <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-[#ff2638] transition-colors stroke-[2.2]" />;
    }
  };

  const renderMobileCard = (industry: Industry, keyPrefix: string) => (
    <div
      key={`${keyPrefix}-${industry.id}`}
      onClick={() => onSelectIndustry(industry)}
      className="group relative rounded-2xl overflow-hidden border border-white/10 active:border-[#ff2638] hover:border-[#ff2638]/70 shadow-[0_8px_25px_rgba(0,0,0,0.65)] hover:shadow-[0_12px_35px_rgba(255,38,56,0.3)] transition-all duration-300 cursor-pointer bg-[#09121d] shrink-0 w-[145px] xs:w-[155px] sm:w-[170px] select-none"
    >
      <div className="relative w-full h-[140px] sm:h-[160px] overflow-hidden flex flex-col items-center justify-center p-3 sm:p-4 text-center">
        {/* High-Resolution Architectural Backdrop with Dark Scrim */}
        <img
          src="/assets/images/industry_architecture_hd_1793870851818.jpg"
          alt={industry.name}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300 pointer-events-none"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070e17] via-[#070e17]/80 to-[#070e17]/60 group-hover:via-[#ff2638]/15 transition-colors pointer-events-none" />

        {/* Crisp Vector Outline Icon */}
        <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/6 border border-white/15 flex items-center justify-center mb-2.5 group-hover:scale-110 group-hover:border-[#ff2638]/60 group-hover:bg-[#ff2638]/20 transition-all duration-300 shadow-md">
          {getIndustryIcon(industry.id)}
        </div>

        {/* Crisp HD Typography */}
        <h3 className="relative z-10 text-[13px] sm:text-[14px] font-bold text-white tracking-tight leading-tight group-hover:text-white transition-colors">
          {industry.name}
        </h3>
      </div>
    </div>
  );

  return (
    <section id="industries" className="py-12 sm:py-16 lg:py-20 relative w-full overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Header with Left Heading and Right Description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 lg:mb-10">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="space-y-2"
          >
            <div className="text-[12px] sm:text-[13px] lg:text-[14px] font-bold tracking-[0.22em] text-[#ff2638] uppercase">
              SECTORS WE SERVE
            </div>
            <h2 className="text-[22px] xs:text-[26px] sm:text-[34px] md:text-[40px] lg:text-[46px] font-black text-white tracking-tight leading-tight">
              Tailored Software{' '}
              <span className="text-[#ff2638] drop-shadow-[0_0_20px_rgba(255,38,56,0.6)]">
                For Every Industry
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="md:max-w-[460px] text-left md:text-right"
          >
            <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-[#8e9cae] leading-relaxed">
              Purpose-built architectures addressing the exact operating workflows, regulatory standards, and customer expectations of your sector.
            </p>
          </motion.div>
        </div>

        {/* Mobile Status Indicator */}
        <div className="lg:hidden flex items-center justify-between text-[11px] text-[#8e9cae] font-semibold mb-3 px-1">
          <span className="flex items-center gap-1.5 text-[#ff2638]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2638] animate-pulse" />
            <span>Interactive Verticals</span>
          </span>
        </div>

        {/* MOBILE ONLY: Buttery-Smooth Continuous Infinite Marquee (< 1024px) */}
        <div className="lg:hidden relative -mx-4 sm:mx-0 overflow-hidden py-1">
          {/* Edge Fade Gradients for Seamless Visual Flow */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 z-20 bg-gradient-to-r from-[#070e17] via-[#070e17]/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 z-20 bg-gradient-to-l from-[#070e17] via-[#070e17]/80 to-transparent" />

          {/* Continuous Infinite Track */}
          <div
            className="animate-continuous-marquee flex w-max"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Primary Set */}
            <div className="flex gap-3 sm:gap-4 pr-3 sm:pr-4">
              {INDUSTRIES.map((industry) => renderMobileCard(industry, 'track1'))}
            </div>
            {/* Duplicate Set for Seamless Continuous Looping */}
            <div className="flex gap-3 sm:gap-4 pr-3 sm:pr-4" aria-hidden="true">
              {INDUSTRIES.map((industry) => renderMobileCard(industry, 'track2'))}
            </div>
          </div>
        </div>

        {/* DESKTOP ONLY: Static 7-Column Grid (>= 1024px) */}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="hidden lg:grid lg:grid-cols-7 gap-4 xl:gap-5"
        >
          {INDUSTRIES.map((industry) => (
            <motion.div
              key={industry.id}
              variants={gridItemVariants}
              whileHover={{ y: -5, scale: 1.03 }}
              onClick={() => onSelectIndustry(industry)}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#ff2638]/70 shadow-[0_8px_25px_rgba(0,0,0,0.65)] hover:shadow-[0_12px_35px_rgba(255,38,56,0.3)] transition-all duration-300 cursor-pointer bg-[#09121d]"
            >
              <div className="relative w-full h-[175px] xl:h-[195px] 2xl:h-[210px] overflow-hidden flex flex-col items-center justify-center p-3 sm:p-4 text-center">
                {/* High-Resolution Architectural Backdrop with Dark Scrim */}
                <img
                  src="/assets/images/industry_architecture_hd_1793870851818.jpg"
                  alt={industry.name}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070e17] via-[#070e17]/80 to-[#070e17]/60 group-hover:via-[#ff2638]/15 transition-colors" />

                {/* Crisp Vector Outline Icon */}
                <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/6 border border-white/15 flex items-center justify-center mb-2.5 group-hover:scale-110 group-hover:border-[#ff2638]/60 group-hover:bg-[#ff2638]/20 transition-all duration-300 shadow-md">
                  {getIndustryIcon(industry.id)}
                </div>

                {/* Crisp HD Typography */}
                <h3 className="relative z-10 text-[14px] lg:text-[15px] xl:text-[16px] font-bold text-white tracking-tight leading-tight group-hover:text-white transition-colors">
                  {industry.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
