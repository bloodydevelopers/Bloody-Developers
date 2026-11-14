import React from 'react';
import { Target, SlidersHorizontal, Layers, Code2, MessageSquare, Headphones } from 'lucide-react';
import { motion } from 'motion/react';
import {
  sectionHeaderVariants,
  gridContainerVariants,
  gridItemVariants,
  defaultViewport,
} from '../utils/motionVariants';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: 'Business-Driven Engineering',
      icon: Target,
      desc: 'Every architectural choice and sprint milestone directly aligns with your operational efficiency and revenue growth.',
    },
    {
      title: 'Tailored Digital Architecture',
      icon: SlidersHorizontal,
      desc: 'Zero forced workflows or bloated templates. Every module is tailored to how your company actually operates.',
    },
    {
      title: 'Scalable & Resilient Systems',
      icon: Layers,
      desc: 'Cloud-native architectures engineered with clean microservices that scale effortlessly as your traffic multiplies.',
    },
    {
      title: 'Modern, Audited Tech Stack',
      icon: Code2,
      desc: 'Built with modern frameworks, strict security standards, and clean code documentation that eliminates tech debt.',
    },
    {
      title: 'Transparent Partnership',
      icon: MessageSquare,
      desc: 'Direct communication with core engineers, weekly sprint reviews, and full visibility at every development stage.',
    },
    {
      title: 'Continuous Support & SLAs',
      icon: Headphones,
      desc: 'We don’t abandon ship after launch. We provide dedicated SLAs, security updates, and continuous platform enhancements.',
    },
  ];

  return (
    <section id="why-us" className="py-8 sm:py-16 lg:py-20 relative w-full overflow-hidden">
      <div className="w-full px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Header */}
        <div className="mb-4 sm:mb-8 lg:mb-12 w-full">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="space-y-1.5 sm:space-y-2 w-full max-w-none"
          >
            <div className="text-[11px] xs:text-[12px] sm:text-[13px] lg:text-[14px] font-bold tracking-[0.2em] sm:tracking-[0.22em] text-[#ff2638] uppercase">
              THE BLOODY DEVELOPER STANDARD
            </div>
            <h2 className="text-[20px] xs:text-[23px] sm:text-[28px] md:text-[32px] lg:text-[34px] xl:text-[39px] 2xl:text-[44px] font-black text-white tracking-tight leading-tight">
              Beyond Code.{' '}
              <span className="text-[#ff2638] drop-shadow-[0_0_20px_rgba(255,38,56,0.6)]">
                We Build Business Solutions.
              </span>
            </h2>
            <p className="text-[12.5px] xs:text-[13px] sm:text-[14.5px] xl:text-[15.5px] text-[#8e9cae] leading-relaxed max-w-3xl pt-0.5">
              Technology should eliminate complexity, not add to it. We combine domain insight, scalable cloud architecture, and ongoing engineering to deliver measurable bottom-line value.
            </p>
          </motion.div>
        </div>

        {/* 6 Cards Grid: 2 Columns on Mobile, 3 Columns on Desktop in a tight, crisp footprint */}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 xs:gap-3 sm:gap-5 lg:gap-6"
        >
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                variants={gridItemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group bg-[#09121d]/85 hover:bg-[#0e1d30] border border-white/8 hover:border-[#ff2638]/40 rounded-xl sm:rounded-2xl p-3.5 xs:p-4 sm:p-5 lg:p-6 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.45)] hover:shadow-[0_10px_30px_rgba(255,38,56,0.2)] flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-start xs:items-center gap-2.5 xs:gap-3 sm:gap-3.5">
                    {/* Red Icon Badge */}
                    <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#ff2638]/12 border border-[#ff2638]/25 flex items-center justify-center shrink-0 group-hover:border-[#ff2638]/50 group-hover:scale-108 transition-all">
                      <Icon className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 text-[#ff2638]" />
                    </div>

                    <h3 className="text-[12.5px] xs:text-[13.5px] sm:text-[15px] lg:text-[16.5px] font-bold text-white/95 group-hover:text-white leading-tight">
                      {feat.title}
                    </h3>
                  </div>

                  <p className="text-[11px] xs:text-[12px] sm:text-[13px] text-[#7d8b9b] group-hover:text-[#8e9cae] leading-relaxed mt-2.5 sm:mt-3.5 transition-colors">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
