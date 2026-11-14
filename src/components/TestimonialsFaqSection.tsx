import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  Quote,
  ChevronDown,
  HelpCircle,
  MessageSquare,
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import {
  TESTIMONIALS,
  GENERAL_FAQS,
  Testimonial,
  FaqItem,
} from '../data/testimonialsFaq';
import {
  sectionHeaderVariants,
  defaultViewport,
} from '../utils/motionVariants';

interface TestimonialsFaqSectionProps {
  onOpenContact: (defaultService?: string) => void;
}

export const TestimonialsFaqSection: React.FC<TestimonialsFaqSectionProps> = ({
  onOpenContact,
}) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
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
    }, 1800);
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const renderTestimonialCard = (t: Testimonial, keyPrefix: string) => (
    <div
      key={`${keyPrefix}-${t.id}`}
      className="bg-[#0a1420]/90 border border-white/10 hover:border-[#ff2638]/40 rounded-2xl p-4.5 sm:p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_12px_36px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_45px_rgba(0,0,0,0.8),0_0_26px_rgba(255,38,56,0.18)] relative group select-none shrink-0 w-[290px] xs:w-[330px] sm:w-[380px] lg:w-[420px]"
    >
      {/* Corner Watermark Icon */}
      <Quote className="absolute top-4 right-4 w-8 h-8 sm:w-9 sm:h-9 text-white/5 group-hover:text-[#ff2638]/10 transition-colors pointer-events-none" />

      <div>
        {/* 5-Star Rating */}
        <div className="flex items-center gap-1 text-[#ff2638] mb-3 sm:mb-3.5">
          {[...Array(t.rating)].map((_, idx) => (
            <Star
              key={idx}
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#ff2638] stroke-[#ff2638]"
            />
          ))}
          <span className="text-[10.5px] sm:text-[11px] font-bold text-white/60 ml-2">
            5.0 Verified Review
          </span>
        </div>

        {/* Key Result Banner */}
        <div className="inline-block px-2.5 py-1 rounded-lg bg-[#ff2638]/10 border border-[#ff2638]/20 text-[#ff2638] text-[11px] sm:text-[11.5px] font-bold tracking-wide mb-3">
          {t.result}
        </div>

        {/* Quote Body */}
        <p className="text-[12.5px] sm:text-[13.5px] text-[#cbd5e1] leading-relaxed italic">
          "{t.quote}"
        </p>

        {/* Project Delivered */}
        <div className="mt-3.5 pt-3 border-t border-white/8 text-[11px] text-[#8e9cae]">
          <span className="font-semibold text-white/70">Project: </span>
          <span className="text-[#a5b4fc]">{t.project}</span>
        </div>
      </div>

      {/* Client Profile Footer */}
      <div className="flex items-center gap-3 pt-4 mt-3.5 border-t border-white/8">
        {/* Avatar Initials with Gradient */}
        <div
          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr ${t.gradient} flex items-center justify-center text-white font-bold text-[12.5px] sm:text-[13px] shadow-[0_0_12px_rgba(255,38,56,0.35)] shrink-0`}
        >
          {t.initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[13.5px] sm:text-[14px] font-bold text-white truncate">
            {t.name}
          </div>
          <div className="text-[11px] sm:text-[11.5px] text-[#8e9cae] truncate">
            {t.role}, <span className="text-white/80">{t.company}</span>
          </div>
          <div className="text-[9.5px] sm:text-[10px] text-[#64748b]">
            {t.location} · {t.industry}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-20 lg:py-24 relative w-full overflow-hidden"
    >
      {/* Ambient Decorative Lighting */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-[#ff2638]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#0c2444]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        {/* ========================================================= */}
        {/* PART 1: TESTIMONIALS / CLIENT STORIES                    */}
        {/* ========================================================= */}
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff2638]/10 border border-[#ff2638]/25 text-[#ff2638] text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CLIENT SUCCESS STORIES</span>
          </div>

          <h2 className="text-[22px] xs:text-[26px] sm:text-[38px] lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.2]">
            Trusted by Founders, CTOs &{' '}
            <span className="text-[#ff2638] drop-shadow-[0_0_24px_rgba(255,38,56,0.6)]">
              Enterprise Leaders.
            </span>
          </h2>

          <p className="mt-2.5 sm:mt-4 text-[12px] xs:text-[13.5px] sm:text-[16px] text-[#8e9cae] leading-relaxed">
            Real feedback from clients who relied on our technical engineering discipline, operational software products, and growth engines.
          </p>
        </motion.div>

        {/* Status Indicator */}
        <div className="flex items-center justify-between text-[11px] text-[#8e9cae] font-semibold mb-3 px-1 sm:px-2">
          <span className="flex items-center gap-1.5 text-[#ff2638]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2638] animate-pulse" />
            <span>Verified Client Engagements</span>
          </span>
          <span className="text-[10px] text-[#64748b] hidden xs:inline">
            Hover or touch to pause
          </span>
        </div>

        {/* Testimonials Auto Smooth Scroll (Left to Right Marquee) */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 xl:-mx-10 overflow-hidden py-2 mb-16 sm:mb-24">
          {/* Edge Gradients for Smooth Visual Fading */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 lg:w-32 z-20 bg-gradient-to-r from-[#070e17] via-[#070e17]/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 lg:w-32 z-20 bg-gradient-to-l from-[#070e17] via-[#070e17]/80 to-transparent" />

          {/* Marquee Track Moving from Left to Right */}
          <div
            className="animate-continuous-marquee-reverse flex w-max"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Primary Track */}
            <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6 items-stretch">
              {TESTIMONIALS.map((t) => renderTestimonialCard(t, 'track1'))}
            </div>
            {/* Duplicate Track for Seamless Continuous Looping */}
            <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6 items-stretch" aria-hidden="true">
              {TESTIMONIALS.map((t) => renderTestimonialCard(t, 'track2'))}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PART 2: INTERACTIVE FAQS                                  */}
        {/* ========================================================= */}
        <div id="faq" className="scroll-mt-28">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff2638]/10 border border-[#ff2638]/25 text-[#ff2638] text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h2 className="text-[22px] xs:text-[26px] sm:text-[38px] lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.2]">
              Got Questions?{' '}
              <span className="text-[#ff2638] drop-shadow-[0_0_24px_rgba(255,38,56,0.6)]">
                We've Got Answers.
              </span>
            </h2>

            <p className="mt-2.5 sm:mt-3 text-[12px] xs:text-[13.5px] sm:text-[16px] text-[#8e9cae] leading-relaxed">
              Transparent answers regarding delivery timelines, source code ownership, customization capabilities, and ongoing technical support.
            </p>
          </motion.div>

          {/* Accordion FAQ Container */}
          <div className="max-w-3xl mx-auto space-y-3.5 sm:space-y-4">
            {GENERAL_FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`border rounded-2xl overflow-hidden transition-all duration-200 ${isOpen
                      ? 'bg-[#0c1828] border-[#ff2638]/50 shadow-[0_8px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(255,38,56,0.12)]'
                      : 'bg-[#0a1420]/80 border-white/8 hover:border-white/20'
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-[14.5px] sm:text-[16px] font-bold transition-colors ${isOpen ? 'text-[#ff2638]' : 'text-white hover:text-white/90'
                        }`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen
                          ? 'bg-[#ff2638] text-white rotate-180 shadow-[0_0_10px_rgba(255,38,56,0.6)]'
                          : 'bg-white/6 text-white/60 hover:text-white'
                        }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 pb-5 pt-1 text-[13px] sm:text-[14px] text-[#9fb0c3] leading-relaxed border-t border-white/6 mt-1">
                          <p>{faq.answer}</p>
                          {faq.highlight && (
                            <div className="mt-3 flex items-center gap-2 text-[11.5px] font-semibold text-[#ff2638] bg-[#ff2638]/10 border border-[#ff2638]/20 px-3 py-1.5 rounded-lg w-fit">
                              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                              <span>{faq.highlight}</span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Direct Assistance CTA Card */}
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mt-10 sm:mt-14 max-w-3xl mx-auto p-5 sm:p-7 rounded-2xl bg-[#09121d] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg"
          >
            <div>
              <h4 className="text-[16px] sm:text-[17px] font-bold text-white">
                Have a specific question not listed here?
              </h4>
              <p className="text-[12.5px] sm:text-[13px] text-[#8e9cae] mt-1">
                Our solutions architects are available for direct technical feasibility reviews.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onOpenContact('Technical Inquiry / FAQ')}
                className="inline-flex items-center gap-2 bg-[#ff2638] hover:bg-[#e01f30] text-white text-[13px] font-bold px-5 py-2.5 rounded-xl shadow-[0_0_18px_rgba(255,38,56,0.4)] transition-all cursor-pointer active:scale-97"
              >
                <span>Ask an Expert</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="tel:7684047069"
                className="inline-flex items-center gap-2 bg-white/6 hover:bg-white/12 border border-white/12 text-white text-[13px] font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer active:scale-97"
              >
                <Phone className="w-3.5 h-3.5 text-[#ff2638] fill-[#ff2638]" />
                <span>7684047069</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

