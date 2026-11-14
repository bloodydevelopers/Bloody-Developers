import React from 'react';
import { Box, Code, Layers, BarChart3, ArrowRight, Braces, Target, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onExploreProducts: () => void;
  onStartProject: () => void;
  onServiceClick: (service: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onStartProject,
  onServiceClick,
}) => {
  return (
    <section id="home" className="relative min-h-[480px] xs:min-h-[520px] sm:min-h-[620px] lg:min-h-[700px] xl:min-h-[760px] flex flex-col justify-between overflow-hidden w-full pt-8 sm:pt-12 lg:pt-14 pb-8 sm:pb-12">
      {/* Background Hero Artwork */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Mobile Device Only: IMG_9033 - Copy.PNG */}
        <img
          src="/assets/images/IMG_9033 - Copy.PNG"
          alt="Cybernetic Engineering Background Mobile"
          className="w-full h-full object-cover object-right sm:hidden select-none"
        />
        {/* Desktop & Tablet: IMG_9033.PNG */}
        <img
          src="/assets/images/IMG_9033.PNG"
          alt="Cybernetic Engineering Background"
          className="w-full h-full object-cover object-[75%_center] lg:object-center select-none hidden sm:block"
        />
        {/* Left Side Contrast Shield for Mobile Text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070e17]/85 via-[#070e17]/40 to-transparent sm:hidden pointer-events-none" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-10 my-auto">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (Content) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7 space-y-4 xs:space-y-5 xl:space-y-6 w-full max-w-full sm:max-w-2xl lg:max-w-3xl"
          >
            {/* Minimalist Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff2638]/10 border border-[#ff2638]/30 backdrop-blur-md w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2638] shadow-[0_0_8px_#ff2638] animate-pulse" />
              <span className="text-[10px] xs:text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#ff2638] uppercase">
                BUILD · AUTOMATE · SCALE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[28px] xs:text-[34px] sm:text-[44px] md:text-[54px] lg:text-[60px] xl:text-[68px] font-extrabold leading-[1.12] text-white tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] max-w-full sm:max-w-2xl lg:max-w-none">
              <span className="block">Smart Software.</span>
              <span className="block mt-1 sm:mt-1.5 text-white">
                Real{' '}
                <span className="text-[#ff2638] drop-shadow-[0_0_30px_rgba(255,38,56,0.65)]">
                  Growth.
                </span>
              </span>
            </h1>

            {/* Humanized, Concise Value Proposition */}
            <p className="text-[13px] xs:text-[14px] sm:text-[16px] lg:text-[17px] leading-relaxed text-[#c4d1df] max-w-2xl pt-1 drop-shadow-md font-normal">
              We engineer production-ready business software, bespoke web apps, and automated workflows. Turn complex operational bottlenecks into reliable growth engines.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 sm:pt-3 flex flex-row items-stretch gap-2.5 xs:gap-3 sm:gap-4 w-full max-w-full sm:max-w-[490px]">
              {/* Button 1: Explore Products */}
              <button
                type="button"
                onClick={onExploreProducts}
                className="group flex-1 inline-flex items-center justify-center gap-1.5 xs:gap-2 bg-[#ff2638] hover:bg-[#e61e30] text-white text-[12px] xs:text-[13px] sm:text-[14.5px] font-bold px-3 xs:px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-xl shadow-[0_0_24px_rgba(255,38,56,0.45)] hover:shadow-[0_0_36px_rgba(255,38,56,0.7)] transition-all duration-200 cursor-pointer active:scale-95 text-center min-h-[42px] sm:min-h-12 whitespace-nowrap"
              >
                <Box className="w-4 h-4 transition-transform group-hover:rotate-12 shrink-0 hidden xs:inline" />
                <span className="whitespace-nowrap">Explore Products</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 shrink-0" />
              </button>

              {/* Button 2: Start a Project */}
              <button
                type="button"
                onClick={onStartProject}
                className="group flex-1 inline-flex items-center justify-center gap-1.5 xs:gap-2 bg-[#09121d]/90 hover:bg-[#0f1d2e] hover:border-[#ff2638]/50 text-white text-[12px] xs:text-[13px] sm:text-[14.5px] font-bold px-3 xs:px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-200 cursor-pointer active:scale-95 backdrop-blur-md text-center min-h-[42px] sm:min-h-12 shadow-lg whitespace-nowrap"
              >
                <span className="whitespace-nowrap">Start a Project</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Floating Badges (Visible on desktop, hidden on mobile) */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 justify-end items-center relative py-0 overflow-visible">
            <div className="flex flex-col gap-3.5 sm:gap-5 lg:gap-6 w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[460px] mx-auto lg:ml-auto pointer-events-none select-none py-2 items-center sm:items-stretch">
              {[
                {
                  label: 'Development',
                  tag: 'Full-Stack',
                  icon: Code,
                  align: 'self-center sm:self-end',
                  offsetClass: 'translate-x-0 sm:translate-x-3 lg:translate-x-4',
                  floatY: [-5, 5, -5],
                  floatX: [-3, 3, -3],
                  rotation: 1.5,
                  duration: 4.2,
                  delay: 0,
                  // Electric Cyan / Neon Sky Blue
                  cardBg: 'bg-gradient-to-br from-[#071a29]/95 via-[#05111b]/92 to-[#02070b]/95',
                  cardBorder: 'border-cyan-400/40 hover:border-cyan-400/80',
                  cardShadow: 'shadow-[0_12px_36px_rgba(0,0,0,0.92),0_0_26px_rgba(6,182,212,0.38)]',
                  topAccent: 'via-cyan-400/80',
                  iconBg: 'bg-cyan-500/18 border border-cyan-400/50 text-cyan-300 shadow-[0_0_16px_rgba(6,182,212,0.55)]',
                  tagColor: 'text-cyan-400',
                  pulseDot: 'bg-cyan-400 shadow-[0_0_10px_#22d3ee]',
                },
                {
                  label: 'Automation',
                  tag: 'AI & Ops',
                  icon: Braces,
                  align: 'self-center sm:self-start',
                  offsetClass: 'translate-x-0 sm:-translate-x-6 lg:-translate-x-10',
                  floatY: [5, -6, 5],
                  floatX: [3, -3, 3],
                  rotation: -2,
                  duration: 4.8,
                  delay: 0.6,
                  // Cyber Purple / Electric Violet
                  cardBg: 'bg-gradient-to-br from-[#1d0a2c]/95 via-[#11051b]/92 to-[#07020b]/95',
                  cardBorder: 'border-purple-400/40 hover:border-purple-400/80',
                  cardShadow: 'shadow-[0_12px_36px_rgba(0,0,0,0.92),0_0_26px_rgba(168,85,247,0.38)]',
                  topAccent: 'via-purple-400/80',
                  iconBg: 'bg-purple-500/18 border border-purple-400/50 text-purple-300 shadow-[0_0_16px_rgba(168,85,247,0.55)]',
                  tagColor: 'text-purple-400',
                  pulseDot: 'bg-purple-400 shadow-[0_0_10px_#c084fc]',
                },
                {
                  label: 'Growth',
                  tag: 'Scale 10x',
                  icon: BarChart3,
                  align: 'self-center sm:self-end',
                  offsetClass: 'translate-x-0 sm:translate-x-8 lg:translate-x-12',
                  floatY: [-6, 5, -6],
                  floatX: [-3, 3, -3],
                  rotation: 2,
                  duration: 3.9,
                  delay: 1.2,
                  // Cyber Emerald / Matrix Mint
                  cardBg: 'bg-gradient-to-br from-[#072418]/95 via-[#04150e]/92 to-[#020a06]/95',
                  cardBorder: 'border-emerald-400/40 hover:border-emerald-400/80',
                  cardShadow: 'shadow-[0_12px_36px_rgba(0,0,0,0.92),0_0_26px_rgba(168,85,247,0.38)]',
                  topAccent: 'via-emerald-400/80',
                  iconBg: 'bg-emerald-500/18 border border-emerald-400/50 text-emerald-300 shadow-[0_0_16px_rgba(16,185,129,0.55)]',
                  tagColor: 'text-emerald-400',
                  pulseDot: 'bg-emerald-400 shadow-[0_0_10px_#34d399]',
                },
                {
                  label: 'Marketing',
                  tag: 'High ROI',
                  icon: Target,
                  align: 'self-center sm:self-start',
                  offsetClass: 'translate-x-0 sm:translate-x-4 lg:translate-x-3',
                  floatY: [5, -5, 5],
                  floatX: [2, -3, 2],
                  rotation: -1.5,
                  duration: 4.5,
                  delay: 1.8,
                  // Signature Crimson Red / Hot Coral
                  cardBg: 'bg-gradient-to-br from-[#27080e]/95 via-[#150407]/92 to-[#0a0203]/95',
                  cardBorder: 'border-[#ff2638]/45 hover:border-[#ff2638]/85',
                  cardShadow: 'shadow-[0_12px_36px_rgba(0,0,0,0.92),0_0_26px_rgba(255,38,56,0.45)]',
                  topAccent: 'via-[#ff2638]/80',
                  iconBg: 'bg-[#ff2638]/20 border border-[#ff2638]/50 text-[#ff4d5e] shadow-[0_0_16px_rgba(255,38,56,0.55)]',
                  tagColor: 'text-[#ff3b4e]',
                  pulseDot: 'bg-[#ff2638] shadow-[0_0_10px_#ff2638]',
                },
              ].map((badge) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={badge.label}
                    animate={{
                      y: badge.floatY,
                      x: badge.floatX,
                      rotate: [badge.rotation - 0.5, badge.rotation + 0.5, badge.rotation - 0.5],
                    }}
                    transition={{
                      duration: badge.duration,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: badge.delay,
                    }}
                    className={`${badge.align} ${badge.offsetClass} group relative overflow-hidden inline-flex items-center gap-3 sm:gap-3.5 ${badge.cardBg} ${badge.cardBorder} border px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl ${badge.cardShadow} backdrop-blur-xl transition-all duration-300 w-fit`}
                  >
                    {/* Glowing Top Micro-Accent */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent ${badge.topAccent} to-transparent`}
                    />

                    {/* Dedicated Glowing Icon Box */}
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl ${badge.iconBg} flex items-center justify-center shrink-0 group-hover:scale-108 transition-transform`}
                    >
                      <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.3]" />
                    </div>

                    {/* Label & Subtitle Tag */}
                    <div className="flex flex-col">
                      <span className="text-[13.5px] sm:text-[14.5px] lg:text-[15.5px] font-extrabold text-white tracking-wide">
                        {badge.label}
                      </span>
                      <span className={`text-[10px] sm:text-[11px] font-extrabold ${badge.tagColor} uppercase tracking-wider`}>
                        {badge.tag}
                      </span>
                    </div>

                    {/* Dedicated Live Pulsing Indicator */}
                    <span className={`w-2 h-2 rounded-full ${badge.pulseDot} animate-pulse ml-1`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Screen Only: Floating Mouse Scroll Indicator (Smooth Up & Down Float) */}
      <div className="sm:hidden relative z-10 w-full flex flex-col items-center justify-center pt-8 xs:pt-10 pb-2">
        <motion.button
          type="button"
          onClick={() => {
            const el = document.getElementById('products');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          aria-label="Scroll down to products"
          className="group flex flex-col items-center gap-1.5 focus:outline-none cursor-pointer select-none active:scale-90 transition-transform"
        >
          {/* Mouse Outline */}
          <div className="w-5.5 h-9 rounded-full border-[1.8px] border-white/40 group-hover:border-[#ff2638] bg-[#070e17]/75 backdrop-blur-md flex items-start justify-center p-1 shadow-[0_4px_16px_rgba(0,0,0,0.8),0_0_12px_rgba(255,38,56,0.15)] group-hover:shadow-[0_0_18px_rgba(255,38,56,0.5)] transition-colors">
            {/* Animated Scroll Wheel Dot */}
            <motion.span
              animate={{
                y: [0, 10, 0],
                opacity: [1, 0.25, 1],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-1 h-2 rounded-full bg-[#ff2638] shadow-[0_0_8px_rgba(255,38,56,0.9)]"
            />
          </div>

          {/* Gentle Downward Chevron Indicator */}
          <ChevronDown className="w-3.5 h-3.5 text-white/50 group-hover:text-[#ff2638] transition-colors -mt-0.5" />
        </motion.button>
      </div>

      {/* Hero Bottom Feature Strip (Prominent Visible 4 Tiles - Hidden on mobile devices) */}
      <div className="hidden sm:block relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-10 mt-8 sm:mt-10 lg:mt-14 xl:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="w-full"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 xl:gap-6">
            {/* Tile 1: Software Products */}
            <button
              onClick={onExploreProducts}
              className="group relative overflow-hidden flex items-center gap-3.5 sm:gap-4 p-4 sm:p-4.5 lg:p-5 rounded-2xl bg-gradient-to-br from-[#0c1827]/96 via-[#09131f]/94 to-[#060c14]/96 border border-white/15 hover:border-[#ff2638]/80 shadow-[0_10px_30px_rgba(0,0,0,0.85),0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.95),0_0_30px_rgba(255,38,56,0.35)] backdrop-blur-xl transition-all duration-300 text-left cursor-pointer active:scale-98"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff2638]/50 to-transparent group-hover:via-[#ff2638] transition-all" />
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#ff2638]/18 border border-[#ff2638]/40 flex items-center justify-center text-[#ff2638] shadow-[0_0_18px_rgba(255,38,56,0.35)] shrink-0 group-hover:scale-110 group-hover:bg-[#ff2638]/25 transition-all">
                <Box className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-[2.3]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[14px] sm:text-[15px] lg:text-[16px] font-extrabold text-white group-hover:text-[#ff2638] transition-colors leading-snug">
                  Software Products
                </div>
                <div className="text-[11px] sm:text-[11.5px] text-[#8e9cae] mt-0.5 line-clamp-1">
                  Ready-to-deploy platforms for everyday operations.
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#ff2638] group-hover:translate-x-1 transition-all shrink-0 ml-1" />
            </button>

            {/* Tile 2: Custom Software Development */}
            <button
              onClick={() => onServiceClick('Custom Software Development')}
              className="group relative overflow-hidden flex items-center gap-3.5 sm:gap-4 p-4 sm:p-4.5 lg:p-5 rounded-2xl bg-gradient-to-br from-[#0c1827]/96 via-[#09131f]/94 to-[#060c14]/96 border border-white/15 hover:border-[#ff2638]/80 shadow-[0_10px_30px_rgba(0,0,0,0.85),0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.95),0_0_30px_rgba(255,38,56,0.35)] backdrop-blur-xl transition-all duration-300 text-left cursor-pointer active:scale-98"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff2638]/50 to-transparent group-hover:via-[#ff2638] transition-all" />
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#ff2638]/18 border border-[#ff2638]/40 flex items-center justify-center text-[#ff2638] shadow-[0_0_18px_rgba(255,38,56,0.35)] shrink-0 group-hover:scale-110 group-hover:bg-[#ff2638]/25 transition-all">
                <Code className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-[2.3]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[14px] sm:text-[15px] lg:text-[16px] font-extrabold text-white group-hover:text-[#ff2638] transition-colors leading-snug">
                  Custom Software Development
                </div>
                <div className="text-[11px] sm:text-[11.5px] text-[#8e9cae] mt-0.5 line-clamp-1">
                  Tailor-made web and cross-platform apps.
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#ff2638] group-hover:translate-x-1 transition-all shrink-0 ml-1" />
            </button>

            {/* Tile 3: Business Automation */}
            <button
              onClick={() => onServiceClick('Business Automation')}
              className="group relative overflow-hidden flex items-center gap-3.5 sm:gap-4 p-4 sm:p-4.5 lg:p-5 rounded-2xl bg-gradient-to-br from-[#0c1827]/96 via-[#09131f]/94 to-[#060c14]/96 border border-white/15 hover:border-[#ff2638]/80 shadow-[0_10px_30px_rgba(0,0,0,0.85),0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.95),0_0_30px_rgba(255,38,56,0.35)] backdrop-blur-xl transition-all duration-300 text-left cursor-pointer active:scale-98"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff2638]/50 to-transparent group-hover:via-[#ff2638] transition-all" />
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#ff2638]/18 border border-[#ff2638]/40 flex items-center justify-center text-[#ff2638] shadow-[0_0_18px_rgba(255,38,56,0.35)] shrink-0 group-hover:scale-110 group-hover:bg-[#ff2638]/25 transition-all">
                <Layers className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-[2.3]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[14px] sm:text-[15px] lg:text-[16px] font-extrabold text-white group-hover:text-[#ff2638] transition-colors leading-snug">
                  Business Automation
                </div>
                <div className="text-[11px] sm:text-[11.5px] text-[#8e9cae] mt-0.5 line-clamp-1">
                  Eliminate manual work and scale efficiency.
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#ff2638] group-hover:translate-x-1 transition-all shrink-0 ml-1" />
            </button>

            {/* Tile 4: Digital Marketing */}
            <button
              onClick={() => onServiceClick('Digital Marketing')}
              className="group relative overflow-hidden flex items-center gap-3.5 sm:gap-4 p-4 sm:p-4.5 lg:p-5 rounded-2xl bg-gradient-to-br from-[#0c1827]/96 via-[#09131f]/94 to-[#060c14]/96 border border-white/15 hover:border-[#ff2638]/80 shadow-[0_10px_30px_rgba(0,0,0,0.85),0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.95),0_0_30px_rgba(255,38,56,0.35)] backdrop-blur-xl transition-all duration-300 text-left cursor-pointer active:scale-98"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff2638]/50 to-transparent group-hover:via-[#ff2638] transition-all" />
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#ff2638]/18 border border-[#ff2638]/40 flex items-center justify-center text-[#ff2638] shadow-[0_0_18px_rgba(255,38,56,0.35)] shrink-0 group-hover:scale-110 group-hover:bg-[#ff2638]/25 transition-all">
                <BarChart3 className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-[2.3]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[14px] sm:text-[15px] lg:text-[16px] font-extrabold text-white group-hover:text-[#ff2638] transition-colors leading-snug">
                  Digital Marketing
                </div>
                <div className="text-[11px] sm:text-[11.5px] text-[#8e9cae] mt-0.5 line-clamp-1">
                  Targeted acquisition and high-converting leads.
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#ff2638] group-hover:translate-x-1 transition-all shrink-0 ml-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
