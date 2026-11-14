import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  TrendingUp,
  Clock,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import {
  CASE_STUDIES,
  PORTFOLIO_CATEGORIES,
  CaseStudy,
} from '../data/portfolio';
import {
  sectionHeaderVariants,
  gridContainerVariants,
  gridItemVariants,
  defaultViewport,
} from '../utils/motionVariants';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 80 : -80,
    opacity: 0,
  }),
};

interface PortfolioSectionProps {
  onOpenContact: (defaultService?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onOpenContact,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const filteredStudies =
    selectedCategory === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((item) => item.category === selectedCategory);

  const prevSlide = () => {
    setDirection(-1);
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : filteredStudies.length - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setActiveSlide((prev) => (prev < filteredStudies.length - 1 ? prev + 1 : 0));
  };

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setActiveSlide(0);
    setDirection(0);
  };

  const renderCardContent = (study: CaseStudy) => (
    <article className="bg-[#0a1420]/90 border border-white/10 hover:border-[#ff2638]/50 rounded-2xl p-5 sm:p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_12px_36px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_45px_rgba(0,0,0,0.8),0_0_30px_rgba(255,38,56,0.18)] relative group overflow-hidden h-full">
      {/* Top Subtle Red Corner Glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-[#ff2638]/8 rounded-full blur-2xl pointer-events-none group-hover:bg-[#ff2638]/18 transition-all duration-300" />

      <div>
        {/* Top Metadata: Category & Timeline */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#ff2638]/12 border border-[#ff2638]/25 text-[#ff2638] text-[11px] font-bold tracking-wider uppercase">
            {study.categoryLabel}
          </span>
          <span className="text-[11px] text-[#718093] flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#ff2638]/70" />
            <span>{study.timeline}</span>
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-[18px] sm:text-[20px] font-bold text-white group-hover:text-[#ff2638] transition-colors leading-snug">
          {study.title}
        </h3>
        <p className="text-[12px] sm:text-[13px] text-[#8e9cae] mt-1.5 line-clamp-2 leading-relaxed">
          {study.subtitle}
        </p>

        {/* Client & Industry Badge */}
        <div className="mt-3.5 py-2 px-3 rounded-xl bg-white/4 border border-white/6 flex items-center justify-between text-[11.5px]">
          <span className="text-white/80 font-medium truncate max-w-[65%]">
            {study.client}
          </span>
          <span className="text-[#ff2638] font-semibold text-[10.5px] uppercase tracking-wider">
            {study.industry.split('&')[0]}
          </span>
        </div>

        {/* Highlight Metrics Grid (Key Results) */}
        <div className="grid grid-cols-3 gap-2 mt-4 py-3 border-y border-white/8">
          {study.metrics.map((metric, idx) => (
            <div key={idx} className="text-center px-1">
              <div className="text-[16px] sm:text-[18px] font-extrabold text-[#ff2638] tracking-tight drop-shadow-[0_0_12px_rgba(255,38,56,0.35)]">
                {metric.value}
              </div>
              <div className="text-[10px] sm:text-[10.5px] font-bold text-[#c4ccd7] truncate mt-0.5">
                {metric.label}
              </div>
              <div className="text-[9px] text-[#6b7b8f] truncate mt-0.5 hidden xs:block">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Challenge & Solution Summary */}
        <div className="mt-4 space-y-2.5 text-[12px] sm:text-[12.5px] leading-relaxed">
          <div>
            <span className="font-semibold text-white/90">Challenge: </span>
            <span className="text-[#8e9cae]">{study.challenge}</span>
          </div>
          <div>
            <span className="font-semibold text-white/90">Solution: </span>
            <span className="text-[#8e9cae]">{study.solution}</span>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/6">
          {study.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-[#070e17] border border-white/8 text-[10.5px] font-medium text-[#94a3b8]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action: Discuss Similar Project */}
      <div className="pt-5 mt-4">
        <button
          type="button"
          onClick={() => onOpenContact(study.serviceTrigger)}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#ff2638]/12 hover:bg-[#ff2638] text-[#ff2638] hover:text-white border border-[#ff2638]/30 hover:border-[#ff2638] text-[12.5px] sm:text-[13px] font-bold py-2.5 rounded-xl transition-all duration-200 cursor-pointer active:scale-97 group-hover:shadow-[0_0_20px_rgba(255,38,56,0.35)]"
        >
          <span>Discuss Similar Project</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </article>
  );

  return (
    <section
      id="portfolio"
      className="py-12 sm:py-20 lg:py-24 relative w-full overflow-hidden"
    >
      {/* Background Decorative Neon Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#ff2638]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#0c2444]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff2638]/10 border border-[#ff2638]/25 text-[#ff2638] text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>

          <h2 className="text-[22px] xs:text-[26px] sm:text-[38px] lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.2]">
            Engineering That Drives{' '}
            <span className="text-[#ff2638] drop-shadow-[0_0_24px_rgba(255,38,56,0.6)]">
              Real Business Results.
            </span>
          </h2>

          <p className="mt-2.5 sm:mt-4 text-[12px] xs:text-[13.5px] sm:text-[16px] text-[#8e9cae] leading-relaxed">
            Explore how our custom software systems, scalable ERP architectures, and high-ROI growth funnels transform operations for fast-growing companies.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 xs:gap-2 sm:gap-2.5 mt-5 sm:mt-8">
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3 xs:px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] xs:text-[12px] sm:text-[13.5px] font-semibold transition-all duration-200 cursor-pointer active:scale-95 ${
                    active
                      ? 'bg-[#ff2638] text-white shadow-[0_0_20px_rgba(255,38,56,0.5)] font-bold'
                      : 'bg-[#0a1420]/80 hover:bg-[#101f30] text-[#8e9cae] hover:text-white border border-white/8 hover:border-white/20'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* MOBILE ONLY: Manual Slide Carousel with 2 Arrows (< 768px) */}
        <div className="md:hidden relative">
          {/* Slide Card Container with Motion Transition */}
          <div className="overflow-hidden min-h-[560px] xs:min-h-[520px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              {filteredStudies[activeSlide] && (
                <motion.div
                  key={filteredStudies[activeSlide].id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, { offset, velocity }) => {
                    const swipe = offset.x;
                    if (swipe < -45 || velocity.x < -350) {
                      nextSlide();
                    } else if (swipe > 45 || velocity.x > 350) {
                      prevSlide();
                    }
                  }}
                  className="w-full cursor-grab active:cursor-grabbing"
                >
                  {renderCardContent(filteredStudies[activeSlide])}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 2 Manual Arrow Controls for Sliding Left and Right */}
          <div className="flex items-center justify-between gap-3 mt-4 pt-2 px-1">
            {/* Left Manual Arrow */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Case Study"
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#0a1420] hover:bg-[#ff2638] border border-white/15 hover:border-[#ff2638] text-white transition-all duration-200 cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.5)] active:scale-95 group"
            >
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
              <span className="text-[12px] font-bold hidden xs:inline">Prev</span>
            </button>

            {/* Slide Counter & Dots */}
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-[11.5px] font-bold text-[#c4ccd7] tracking-wider">
                <span className="text-[#ff2638] font-extrabold">{activeSlide + 1}</span>
                <span className="text-white/40 mx-1">/</span>
                <span>{filteredStudies.length}</span>
              </span>
              <div className="flex items-center gap-1.5">
                {filteredStudies.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setDirection(idx > activeSlide ? 1 : -1);
                      setActiveSlide(idx);
                    }}
                    aria-label={`Jump to slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeSlide === idx
                        ? 'w-5 bg-[#ff2638] shadow-[0_0_8px_rgba(255,38,56,0.6)]'
                        : 'w-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Manual Arrow */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Case Study"
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#0a1420] hover:bg-[#ff2638] border border-white/15 hover:border-[#ff2638] text-white transition-all duration-200 cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.5)] active:scale-95 group"
            >
              <span className="text-[12px] font-bold hidden xs:inline">Next</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* DESKTOP ONLY: Grid Layout (>= 768px) */}
        <motion.div
          layout
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 xl:gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study) => (
              <motion.div
                key={study.id}
                layout
                variants={gridItemVariants}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                {renderCardContent(study)}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Callout Banner */}
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-12 sm:mt-16 bg-gradient-to-r from-[#0d1c2e] via-[#0a1420] to-[#120814] border border-white/12 rounded-2xl sm:rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_16px_50px_rgba(0,0,0,0.8)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff2638]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center md:text-left space-y-1.5 z-10 max-w-2xl">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[11px] font-bold text-[#ff2638] tracking-[0.2em] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CUSTOM ARCHITECTURE ADVISORY</span>
            </div>
            <h3 className="text-[20px] xs:text-[23px] sm:text-[28px] font-extrabold text-white">
              Have a Unique Project or Complex Infrastructure?
            </h3>
            <p className="text-[13px] sm:text-[14.5px] text-[#8e9cae]">
              We evaluate your exact business workflow, select the right tech stack, and deliver custom solutions with guaranteed performance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 z-10 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => onOpenContact('Custom Architecture & Feasibility')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ff2638] hover:bg-[#e01f30] text-white text-[13.5px] sm:text-[14px] font-bold px-6 py-3 rounded-xl shadow-[0_0_24px_rgba(255,38,56,0.5)] hover:shadow-[0_0_32px_rgba(255,38,56,0.7)] transition-all cursor-pointer active:scale-97 min-h-12"
            >
              <span>Consult an Architect</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

