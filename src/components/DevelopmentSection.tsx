import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import {
  gridContainerVariants,
  gridItemVariants,
  defaultViewport,
} from '../utils/motionVariants';

interface DevelopmentSectionProps {
  onDiscussProject: () => void;
  onGrowBusiness: () => void;
}

export const DevelopmentSection: React.FC<DevelopmentSectionProps> = ({
  onDiscussProject,
  onGrowBusiness,
}) => {
  return (
    <section id="services" className="py-8 sm:py-16 lg:py-20 relative w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 xl:gap-8 2xl:gap-10 items-stretch"
        >
          {/* Card 1 (Left): CUSTOM SOFTWARE DEVELOPMENT */}
          <motion.div
            variants={gridItemVariants}
            className="lg:col-span-6 h-full bg-[#0a1420]/90 border border-white/9 hover:border-[#ff2638]/40 rounded-2xl p-4 xs:p-5 sm:p-8 xl:p-10 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] relative overflow-hidden group"
          >
            {/* Background ambient glow */}
            <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-[#ff2638]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-center flex-1 h-full">
              {/* Content Column */}
              <div className="sm:col-span-7 flex flex-col justify-between h-full space-y-2.5 xs:space-y-3 z-10">
                <div className="text-[11px] xs:text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#ff2638] uppercase">
                  CUSTOM SOFTWARE DEVELOPMENT
                </div>
                <h3 className="text-[20px] xs:text-[23px] sm:text-[28px] lg:text-[32px] xl:text-[36px] font-extrabold text-white leading-tight">
                  Your Vision. Our{' '}
                  <span className="text-[#ff2638] drop-shadow-[0_0_15px_rgba(255,38,56,0.6)]">
                    Technology.
                  </span>
                </h3>
                <p className="text-[12px] xs:text-[13px] sm:text-[14.5px] lg:text-[15px] text-[#8e9cae] leading-relaxed">
                  End-to-end custom development services to turn your ideas into powerful, scalable and secure solutions.
                </p>

                {/* Checklist with red checkmarks */}
                <div className="pt-1 sm:pt-2 space-y-1.5 xs:space-y-2 sm:space-y-2.5">
                  {[
                    'Website Development',
                    'Mobile Application Development',
                    'Custom Software Development',
                    'Custom CRM Development',
                    'ERP Development',
                    'API Development & Integration',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 text-[12px] xs:text-[13px] sm:text-[14.5px] text-[#c0cbd8]">
                      <div className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 rounded-md bg-[#ff2638]/15 flex items-center justify-center shrink-0 text-[#ff2638]">
                        <Check className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 sm:pt-4 mt-auto">
                  <button
                    onClick={onDiscussProject}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ff2638] hover:bg-[#e01f30] text-white text-[12.5px] xs:text-[13px] sm:text-[14px] lg:text-[15px] font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-[0_0_18px_rgba(255,38,56,0.4)] hover:shadow-[0_0_26px_rgba(255,38,56,0.7)] transition-all duration-200 cursor-pointer active:scale-97 min-h-[42px] sm:min-h-12"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>

              {/* Right Mockup: Laptop + Phone Workstation (Hidden on mobile only) */}
              <div className="hidden sm:flex sm:col-span-5 relative items-center justify-center pt-4 sm:pt-0">
                <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] xl:max-w-[440px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_12px_35px_rgba(0,0,0,0.85)] transform group-hover:scale-104 transition-transform duration-300">
                  <img
                    src="/assets/images/custom_dev_workstation_1793870850343.jpg"
                    alt="Custom development workstation mockup"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070e17]/50 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 (Right): DIGITAL MARKETING & BUSINESS GROWTH */}
          <motion.div
            variants={gridItemVariants}
            className="lg:col-span-6 h-full bg-[#0a1420]/90 border border-white/9 hover:border-[#ff2638]/40 rounded-2xl p-4 xs:p-5 sm:p-8 xl:p-10 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] relative overflow-hidden group"
          >
            {/* Background ambient glow */}
            <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-[#ff2638]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-center flex-1 h-full">
              {/* Content Column */}
              <div className="sm:col-span-7 flex flex-col justify-between h-full space-y-2.5 xs:space-y-3 z-10">
                <div className="text-[11px] xs:text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#ff2638] uppercase">
                  DIGITAL MARKETING & BUSINESS GROWTH
                </div>
                <h3 className="text-[20px] xs:text-[23px] sm:text-[28px] lg:text-[32px] xl:text-[36px] font-extrabold text-white leading-tight">
                  Build Your Brand. Reach More{' '}
                  <span className="text-[#ff2638] drop-shadow-[0_0_15px_rgba(255,38,56,0.6)]">
                    Customers.
                  </span>
                </h3>
                <p className="text-[12px] xs:text-[13px] sm:text-[14.5px] lg:text-[15px] text-[#8e9cae] leading-snug">
                  Strategic digital marketing solutions designed to improve visibility, generate leads and grow your business.
                </p>

                {/* Checklist with red checkmarks */}
                <div className="pt-1 sm:pt-2 space-y-1.5 xs:space-y-2 sm:space-y-2.5">
                  {[
                    'Meta Advertising',
                    'Google Search & Performance Max',
                    'LinkedIn B2B Advertising',
                    'Social Media Marketing (SMM)',
                    'Search Engine Optimization (SEO)',
                    'Conversion Rate Optimization (CRO)',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 text-[12px] xs:text-[13px] sm:text-[14.5px] text-[#c0cbd8]">
                      <div className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 rounded-md bg-[#ff2638]/15 flex items-center justify-center shrink-0 text-[#ff2638]">
                        <Check className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 sm:pt-4 mt-auto">
                  <button
                    onClick={onGrowBusiness}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ff2638] hover:bg-[#e01f30] text-white text-[12.5px] xs:text-[13px] sm:text-[14px] lg:text-[15px] font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-[0_0_18px_rgba(255,38,56,0.4)] hover:shadow-[0_0_26px_rgba(255,38,56,0.7)] transition-all duration-200 cursor-pointer active:scale-97 min-h-[42px] sm:min-h-12"
                  >
                    <span>Grow Your Business</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>

              {/* Right Mockup: Tablet with Rising Red Graph + Social Icons (Hidden on mobile only) */}
              <div className="hidden sm:flex sm:col-span-5 relative flex-col items-center justify-center pt-4 sm:pt-0">
                <div className="relative w-full max-w-[260px] xs:max-w-[300px] sm:max-w-[340px] lg:max-w-[380px] xl:max-w-[420px] transform group-hover:scale-104 transition-transform duration-300">
                  <img
                    src="/assets/images/marketing_analytics_tablet_1793870849140.jpg"
                    alt="Digital marketing analytics graph"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                    loading="lazy"
                  />

                  {/* Floating Social Media Badges */}
                  <div className="flex items-center justify-center gap-3 pt-3.5">
                    {/* Meta */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0081fb]/20 border border-[#0081fb]/40 flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                      <svg className="w-5 h-5 fill-[#0081fb]" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.477-4.477-10-10-10z" />
                      </svg>
                    </div>

                    {/* LinkedIn */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0a66c2]/20 border border-[#0a66c2]/40 flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                      <span className="text-[13px] sm:text-[14px] font-bold text-[#0a66c2]">in</span>
                    </div>

                    {/* Instagram */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                      <svg className="w-4.5 h-4.5 stroke-white fill-none stroke-[2.2]" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </div>

                    {/* Facebook */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1877f2]/20 border border-[#1877f2]/40 flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                      <span className="text-[14px] sm:text-[15px] font-bold text-[#1877f2]">f</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
