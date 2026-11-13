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
      title: 'Business Driven Development',
      icon: Target,
      desc: 'We know your business objectives and we create technology solutions that solve real operational problems and increase efficiencies.',
    },
    {
      title: 'Custom Solutions',
      icon: SlidersHorizontal,
      desc: 'Every business is different. We can customize our solutions to meet your workflows, functional requirements and business processes.',
    },
    {
      title: 'Technology Transfer',
      icon: Layers,
      desc: 'We design software architectures that fit your business and scale.',
    },
    {
      title: 'Modern Architecture',
      icon: Code2,
      desc: 'We follow current software development processes to construct maintainable, reliable and secure digital application.',
    },
    {
      title: 'Communication is Key',
      icon: MessageSquare,
      desc: 'Keep informed with transparent communication, progress reports and interactive discussions on the project throughout the entire development life cycle.',
    },
    {
      title: 'Technical assistance on-going',
      icon: Headphones,
      desc: 'We don’t stop at just deploying. Technical support, maintenance and enhancements to keep your program running smoothly.',
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
            <div className="flex items-center gap-2 text-[11px] xs:text-[12px] sm:text-[13px] lg:text-[14px] font-bold tracking-[0.2em] sm:tracking-[0.22em] text-[#ff2638] uppercase">
              <span>WHY YOU SHOULD CHOOSE US</span>
              <span className="text-white/30 hidden sm:inline">·</span>
              <span className="text-white/60 hidden sm:inline text-[11px] sm:text-[12px]">WHY BLOODY DEVELOPER COVENANT?</span>
            </div>
            <h2 className="text-[20px] xs:text-[23px] sm:text-[28px] md:text-[32px] lg:text-[34px] xl:text-[39px] 2xl:text-[44px] font-black text-white tracking-tight leading-tight">
              Beyond software development.{' '}
              <span className="text-[#ff2638] drop-shadow-[0_0_20px_rgba(255,38,56,0.6)]">
                We Build Business Solution.
              </span>
            </h2>
            <p className="text-[11.5px] xs:text-[12.5px] sm:text-[13.5px] xl:text-[15px] 2xl:text-[16px] text-[#8e9cae] leading-snug sm:leading-relaxed pt-0.5 max-w-5xl">
              Technology should solve issues, not add complexity. At Bloody Developer we are all about knowing your business needs and providing digital solutions that help efficiency, productiveness and long-term success. We focus on building solutions that deliver real business value from design and development through to implementation and ongoing technical support.
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
