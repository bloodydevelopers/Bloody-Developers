import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Zap,
  ShieldCheck,
  Server,
  Layers,
  ChevronDown,
  PhoneCall,
  Sparkles,
  ExternalLink,
  Lock,
  Database,
  Users,
  Coffee,
  CheckSquare,
  GraduationCap,
  ShoppingCart,
  Store,
  Calendar,
  MapPin,
  Activity,
  FileSpreadsheet,
  Smartphone,
  Monitor,
  PackageCheck,
  QrCode,
  RefreshCw,
  TrendingUp,
  Kanban,
  CalendarRange,
  LineChart,
  Timer,
  MessagesSquare,
  GitPullRequest,
  UserCheck,
  Award,
  CreditCard,
  HeartHandshake,
  CalendarDays,
  BookOpen,
  Boxes,
  Mail,
  BadgePercent,
  Truck,
  LayoutDashboard,
  CircleDollarSign,
  ShieldAlert,
  GitFork,
  Wallet,
  Scale,
  Contact,
  Calculator,
  Receipt,
  Workflow,
  BarChart,
} from 'lucide-react';
import { Product, PRODUCTS } from '../data/products';
import { motion, AnimatePresence } from 'motion/react';

interface ProductPageProps {
  product: Product;
  onBack: () => void;
  onSelectProduct: (productId: string) => void;
  onRequestDemo: (productName: string) => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({
  product,
  onBack,
  onSelectProduct,
  onRequestDemo,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Instantly pin scroll to the very top before and after paint whenever product changes
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Second-frame guard to ensure async layout reflows stay pinned at top
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 20);

    return () => clearTimeout(timer);
  }, [product.id]);

  useEffect(() => {
    document.title = `${product.title} — Bloody Developer`;
    return () => {
      document.title = 'Bloody Developer — Software Products & Custom Engineering';
    };
  }, [product.id]);

  // Find next and previous products for carousel navigation
  const currentIndex = PRODUCTS.findIndex((p) => p.id === product.id);
  const prevProduct = PRODUCTS[(currentIndex - 1 + PRODUCTS.length) % PRODUCTS.length];
  const nextProduct = PRODUCTS[(currentIndex + 1) % PRODUCTS.length];

  // Helper to dynamically render icon by name
  const renderIcon = (name: string, className = 'w-5 h-5') => {
    const iconMap: Record<string, React.ReactNode> = {
      Users: <Users className={className} />,
      Coffee: <Coffee className={className} />,
      CheckSquare: <CheckSquare className={className} />,
      GraduationCap: <GraduationCap className={className} />,
      ShoppingCart: <ShoppingCart className={className} />,
      Store: <Store className={className} />,
      Layers: <Layers className={className} />,
      ScanFace: <Zap className={className} />,
      MapPin: <MapPin className={className} />,
      Calendar: <Calendar className={className} />,
      Clock: <Timer className={className} />,
      FileSpreadsheet: <FileSpreadsheet className={className} />,
      Activity: <Activity className={className} />,
      Smartphone: <Smartphone className={className} />,
      Monitor: <Monitor className={className} />,
      PackageCheck: <PackageCheck className={className} />,
      QrCode: <QrCode className={className} />,
      RefreshCw: <RefreshCw className={className} />,
      TrendingUp: <TrendingUp className={className} />,
      Kanban: <Kanban className={className} />,
      CalendarRange: <CalendarRange className={className} />,
      LineChart: <LineChart className={className} />,
      Timer: <Timer className={className} />,
      MessagesSquare: <MessagesSquare className={className} />,
      GitPullRequest: <GitPullRequest className={className} />,
      UserCheck: <UserCheck className={className} />,
      Award: <Award className={className} />,
      CreditCard: <CreditCard className={className} />,
      HeartHandshake: <HeartHandshake className={className} />,
      CalendarDays: <CalendarDays className={className} />,
      BookOpen: <BookOpen className={className} />,
      Boxes: <Boxes className={className} />,
      Mail: <Mail className={className} />,
      BadgePercent: <BadgePercent className={className} />,
      Truck: <Truck className={className} />,
      LayoutDashboard: <LayoutDashboard className={className} />,
      CircleDollarSign: <CircleDollarSign className={className} />,
      ShieldAlert: <ShieldAlert className={className} />,
      GitFork: <GitFork className={className} />,
      Wallet: <Wallet className={className} />,
      Scale: <Scale className={className} />,
      Contact: <Contact className={className} />,
      Calculator: <Calculator className={className} />,
      Receipt: <Receipt className={className} />,
      Workflow: <Workflow className={className} />,
      BarChart: <BarChart className={className} />,
    };

    return iconMap[name] || <Zap className={className} />;
  };

  return (
    <div className="w-full min-h-screen bg-[#070e17] text-[#f5f7fa] pb-20 pt-4">
      {/* Background Decorative Ambient Radial Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-[#ff2638]/7 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-[-100px] w-[600px] h-[600px] bg-[#0c2444]/15 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1400px] mx-auto">
        {/* Navigation Breadcrumb & Back Button */}
        <div className="flex items-center justify-between py-4 border-b border-white/8 mb-8 sm:mb-10">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-semibold text-[#8e9cae] hover:text-white transition-colors cursor-pointer group py-1"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#ff2638]" />
            <span>Back to All Products</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-[12px] text-[#7d8b9b] font-medium">
            <button onClick={onBack} className="hover:text-white transition-colors cursor-pointer">
              Home
            </button>
            <span>/</span>
            <button onClick={onBack} className="hover:text-white transition-colors cursor-pointer">
              Products
            </button>
            <span>/</span>
            <span className="text-white font-semibold">{product.title}</span>
          </div>
        </div>

        {/* SECTION 1: PRODUCT HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20">
          {/* Left Hero Column: Details & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            {/* Category Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff2638]/12 border border-[#ff2638]/30 text-[11px] font-bold tracking-widest text-[#ff2638] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2638] animate-pulse" />
              <span>{product.category}</span>
            </div>

            {/* Main Product Title */}
            <h1 className="text-[26px] xs:text-[30px] sm:text-[40px] lg:text-[46px] font-black text-white leading-[1.15] sm:leading-[1.1] tracking-tight break-words">
              {product.title}
            </h1>

            {/* Subtitle */}
            <p className="text-[15px] sm:text-[18px] text-[#b8c5d6] font-medium leading-relaxed">
              {product.subtitle}
            </p>

            {/* Extended Paragraph */}
            <p className="text-[13px] sm:text-[14.5px] text-[#8e9cae] leading-relaxed">
              {product.extendedDescription}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 pt-2">
              <button
                onClick={() => onRequestDemo(product.title)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#ff2638] hover:bg-[#e01f30] text-white text-[14px] sm:text-[15px] font-bold px-6 py-3.5 rounded-xl transition-all duration-200 cursor-pointer shadow-[0_0_25px_rgba(255,38,56,0.45)] hover:shadow-[0_0_35px_rgba(255,38,56,0.7)] active:scale-98 min-h-12"
              >
                <span>Request a Live Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:7684047069"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0b1523] hover:bg-[#0f1d2e] text-white text-[14px] sm:text-[15px] font-bold px-5 py-3.5 rounded-xl border border-white/12 hover:border-[#ff2638]/50 transition-all duration-200 cursor-pointer shadow-md active:scale-98 min-h-12"
              >
                <PhoneCall className="w-4 h-4 text-[#ff2638]" />
                <span>Call: 7684047069</span>
              </a>
            </div>

            {/* Key Live Telemetry Cards */}
            <div className="pt-6 border-t border-white/8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
              {product.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#0b1523]/80 border border-white/8 rounded-xl p-2.5 sm:p-3.5 backdrop-blur-sm"
                >
                  <div className="text-[17px] sm:text-[22px] font-black text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-bold text-[#c4ccd7] leading-tight mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-[#7d8b9b] leading-tight mt-1">
                    {stat.hint}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero Column: Showcase Graphic in Sleek Application Window */}
          <div className="lg:col-span-6">
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#070e17] border border-white/12 shadow-[0_16px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(255,38,56,0.1)] group">
              {/* Window Header Bar */}
              <div className="h-8 bg-[#0a1420]/95 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-3">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff2638]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffb020]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#20e070]/80" />
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-white/50 tracking-wider flex items-center gap-1.5 truncate max-w-[170px] xs:max-w-[240px] sm:max-w-none px-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff2638] animate-pulse shrink-0" />
                  <span className="truncate">https://bloody.app/products/{product.id}</span>
                </div>
                <span className="hidden xs:inline text-[9px] sm:text-[10px] font-bold text-white/40 tracking-wider uppercase shrink-0">
                  ENTERPRISE LIVE
                </span>
              </div>

              {/* Showcase Graphic */}
              <div className={`relative w-full ${product.id === 'attendance' ? 'aspect-[3/2]' : 'aspect-video'} bg-[#070e17] overflow-hidden`}>
                <img
                  src={product.image}
                  alt={`${product.title} System Showcase`}
                  className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Tech Stack Chips below graphic */}
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-[11px] font-bold text-[#7d8b9b] uppercase tracking-wider mr-1">
                Technology Stack:
              </span>
              {product.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-semibold text-[#c4ccd7] bg-[#0c1827] border border-white/8 px-2.5 py-1 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 2: CORE MODULES & CAPABILITIES BENTO GRID */}
        <div className="mb-16 sm:mb-20">
          <div className="space-y-2 mb-8">
            <div className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#ff2638] uppercase">
              DEEP-DIVE CAPABILITIES
            </div>
            <h2 className="text-[26px] sm:text-[32px] font-bold text-white tracking-tight">
              Engineered for Enterprise Scale & Speed
            </h2>
            <p className="text-[13px] sm:text-[14.5px] text-[#8e9cae] max-w-[720px]">
              Every module is architected for maximum data integrity, sub-second latency, and intuitive daily operation by your team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {product.modules.map((mod, idx) => (
              <div
                key={idx}
                className="bg-[#0b1523]/90 hover:bg-[#0e1c2e] border border-white/8 hover:border-[#ff2638]/40 rounded-2xl p-6 transition-all duration-300 shadow-[0_6px_25px_rgba(0,0,0,0.5)] group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#ff2638]/12 border border-[#ff2638]/25 flex items-center justify-center text-[#ff2638] mb-4 group-hover:scale-105 group-hover:border-[#ff2638]/50 transition-all">
                    {renderIcon(mod.iconName, 'w-5 h-5 text-[#ff2638]')}
                  </div>
                  <h3 className="text-[16px] sm:text-[17px] font-bold text-white mb-2 group-hover:text-[#ff2638] transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#8e9cae] leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: TECHNICAL ARCHITECTURE & COMPLIANCE */}
        <div className="mb-16 sm:mb-20 bg-[#0a1420]/80 border border-white/9 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <div className="text-[11px] font-bold tracking-[0.2em] text-[#ff2638] uppercase">
                ENTERPRISE SPECIFICATIONS
              </div>
              <h2 className="text-[24px] sm:text-[28px] font-bold text-white tracking-tight">
                Production-Ready Infrastructure
              </h2>
              <p className="text-[13px] sm:text-[14px] text-[#8e9cae] leading-relaxed">
                Whether deployed in our SOC-2 compliant multi-tenant cloud or isolated within your own AWS/GCP Kubernetes cluster, you maintain 100% data sovereignty and continuous uptime SLAs.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="bg-[#070e17]/90 border border-white/8 rounded-xl p-4 space-y-1"
                >
                  <div className="text-[11px] font-bold text-[#7d8b9b] uppercase tracking-wider">
                    {spec.label}
                  </div>
                  <div className="text-[13.5px] font-semibold text-white">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 4: TARGET USE CASES */}
        <div className="mb-16 sm:mb-20">
          <div className="space-y-2 mb-6">
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#ff2638] uppercase">
              WHO THIS IS BUILT FOR
            </div>
            <h2 className="text-[24px] sm:text-[28px] font-bold text-white tracking-tight">
              Primary Use Cases & Industry Fits
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.useCases.map((uc, idx) => (
              <div
                key={idx}
                className="bg-[#0b1523]/70 border border-white/8 rounded-xl p-4 flex items-center gap-3 hover:border-white/20 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-[#ff2638] stroke-[2.5]" />
                </div>
                <span className="text-[13px] sm:text-[13.5px] font-semibold text-[#e1e7ef] leading-snug">
                  {uc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: FREQUENTLY ASKED QUESTIONS ACCORDION */}
        <div className="mb-16 sm:mb-20">
          <div className="space-y-2 mb-8">
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#ff2638] uppercase">
              QUESTIONS & ANSWERS
            </div>
            <h2 className="text-[24px] sm:text-[28px] font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3 max-w-[900px]">
            {product.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#0b1523]/80 border border-white/8 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer hover:bg-white/3 transition-colors"
                  >
                    <span className="text-[14px] sm:text-[15px] font-bold text-white pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#ff2638] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-4 pb-5 sm:px-5 text-[13px] sm:text-[13.5px] text-[#8e9cae] leading-relaxed border-t border-white/6 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 6: BOTTOM CONVERSION CTA BANNER */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-r from-[#170609] via-[#0d1422] to-[#070e17] border border-[#ff2638]/40 p-6 sm:p-10 lg:p-12 mb-16 shadow-[0_12px_45px_rgba(0,0,0,0.8),0_0_35px_rgba(255,38,56,0.15)]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff2638]/12 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-[700px] space-y-4">
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#ff2638] uppercase">
              DEPLOYMENT & ONBOARDING
            </div>
            <h2 className="text-[22px] xs:text-[26px] sm:text-[34px] font-black text-white leading-tight break-words">
              Ready to deploy {product.title}?
            </h2>
            <p className="text-[13.5px] sm:text-[15px] text-[#b8c5d6] leading-relaxed">
              Book a live 1-on-1 walkthrough with our software architects. We will demonstrate live features, discuss custom integration requirements, and provide a transparent pricing proposal.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-3">
              <button
                onClick={() => onRequestDemo(product.title)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ff2638] hover:bg-[#e01f30] text-white text-[14px] font-bold px-6 py-3.5 rounded-xl transition-all cursor-pointer shadow-[0_0_25px_rgba(255,38,56,0.5)] active:scale-98 min-h-12"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:7684047069"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0b1523] hover:bg-[#0f1d2e] text-white text-[14px] font-bold px-5 py-3.5 rounded-xl border border-white/12 hover:border-[#ff2638]/50 transition-all cursor-pointer active:scale-98 min-h-12"
              >
                <PhoneCall className="w-4 h-4 text-[#ff2638]" />
                <span>Call Directly: 7684047069</span>
              </a>
            </div>
          </div>
        </div>

        {/* SECTION 7: NEXT / PREVIOUS PRODUCT FOOTER CAROUSEL NAV */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/8 pt-8">
          <button
            onClick={() => onSelectProduct(prevProduct.id)}
            className="flex items-center justify-between p-4 rounded-xl bg-[#0b1523]/60 hover:bg-[#0e1c2e] border border-white/8 hover:border-[#ff2638]/40 transition-all text-left cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#ff2638]/15 transition-colors">
                <ArrowLeft className="w-4 h-4 text-[#8e9cae] group-hover:text-[#ff2638] transition-colors" />
              </div>
              <div>
                <div className="text-[10.5px] font-bold text-[#7d8b9b] uppercase tracking-wider">
                  Previous Product
                </div>
                <div className="text-[13.5px] font-bold text-white group-hover:text-[#ff2638] transition-colors">
                  {prevProduct.title}
                </div>
              </div>
            </div>
          </button>

          <button
            onClick={() => onSelectProduct(nextProduct.id)}
            className="flex items-center justify-between p-4 rounded-xl bg-[#0b1523]/60 hover:bg-[#0e1c2e] border border-white/8 hover:border-[#ff2638]/40 transition-all text-right cursor-pointer group"
          >
            <div className="flex-1 pr-3">
              <div className="text-[10.5px] font-bold text-[#7d8b9b] uppercase tracking-wider">
                Next Product
              </div>
              <div className="text-[13.5px] font-bold text-white group-hover:text-[#ff2638] transition-colors">
                {nextProduct.title}
              </div>
            </div>
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#ff2638]/15 transition-colors shrink-0">
              <ArrowRight className="w-4 h-4 text-[#8e9cae] group-hover:text-[#ff2638] transition-colors" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

