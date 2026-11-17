import React, { useEffect, useLayoutEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Box,
  Code,
  Building,
  ShieldCheck,
  FileCode,
  CheckCircle2,
  MapPin,
  Globe,
  Sparkles,
  Megaphone,
  Laptop,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';
import { INDUSTRIES, Industry } from '../data/industries';
import { motion } from 'motion/react';
import { WhatsAppIcon, WHATSAPP_NUMBERS } from './WhatsAppUI';

interface SitemapPageProps {
  onNavigateHome: (sectionId?: string) => void;
  onSelectProduct: (productId: string) => void;
  onSelectIndustry: (industry: Industry) => void;
  onOpenContact: (service?: string) => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({
  onNavigateHome,
  onSelectProduct,
  onSelectIndustry,
  onOpenContact,
}) => {
  // Pin scroll to the top immediately upon mounting
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 20);

    return () => clearTimeout(timer);
  }, []);

  // Update Document Title, Canonical URL, and Meta Description for SEO
  useEffect(() => {
    document.title = 'Sitemap & Architecture Directory — Bloody Developer';

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Complete architectural directory of Bloody Developer software products, custom development capabilities, industry solutions, and verified search engine feeds.'
      );
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical ? canonical.getAttribute('href') : '';
    if (canonical) {
      canonical.setAttribute('href', 'https://bloodydevelopers.vercel.app/sitemap');
    }

    return () => {
      document.title = 'Bloody Developer — Business Software Products & Custom Engineering';
      if (metaDesc && prevDesc) {
        metaDesc.setAttribute('content', prevDesc);
      }
      if (canonical && prevCanonical) {
        canonical.setAttribute('href', prevCanonical);
      }
    };
  }, []);

  const coreSections = [
    { label: 'Home Page', id: 'home', desc: 'Main landing banner, value proposition, and company overview' },
    { label: 'Software Products Suite', id: 'products', desc: '7 ready-to-deploy business management software products' },
    { label: 'Custom Software Development', id: 'custom-software-development', desc: 'Bespoke web apps, mobile apps, CRM, ERP, and API engineering' },
    { label: 'Digital Marketing & Growth', id: 'digital-marketing', desc: 'Meta Ads, Google Ads, LinkedIn B2B, SEO, and Conversion Optimization' },
    { label: 'Sectors We Serve', id: 'industries', desc: 'Industry-specific software architectures across 7 key sectors' },
    { label: 'Why Choose Bloody Developer', id: 'why-us', desc: 'Engineering discipline, speed to market, and client code ownership' },
    { label: 'Portfolio & Case Studies', id: 'portfolio', desc: 'Real client results, metrics, and technical delivery summaries' },
    { label: 'Client Testimonials', id: 'testimonials', desc: 'Verified 5-star client reviews from founders and CTOs' },
    { label: 'Frequently Asked Questions (FAQs)', id: 'faq', desc: 'Timelines, pricing models, IP ownership, and technical SLAs' },
  ];

  const customServices = [
    { title: 'Web Design & Development', desc: 'High-speed, responsive, conversion-focused enterprise websites and portals.' },
    { title: 'Mobile Application Development', desc: 'Native and cross-platform Android and iOS applications with offline synchronization.' },
    { title: 'Custom Software Engineering', desc: 'Purpose-built software tailored to complex and unique business operations.' },
    { title: 'Custom CRM Architecture', desc: 'Streamline lead funnels, client pipelines, and customer lifecycle management.' },
    { title: 'Enterprise ERP Development', desc: 'Unify inventory, finance ledgers, procurement, and multi-branch operations.' },
    { title: 'API Engineering & Integrations', desc: 'Seamless interconnectivity between third-party SaaS, legacy systems, and payment gateways.' },
  ];

  const marketingServices = [
    { title: 'Meta Advertising (Facebook & Instagram)', desc: 'High-ROI targeted ad campaigns generating qualified commercial leads.' },
    { title: 'Google Ads & Performance Marketing', desc: 'Capture high-intent commercial searchers actively seeking your products & services.' },
    { title: 'LinkedIn B2B Advertising', desc: 'Target enterprise decision-makers, CTOs, and procurement directors with precision.' },
    { title: 'Social Media Marketing (SMM)', desc: 'Cultivate brand trust, authority, and sustained client community engagement.' },
    { title: 'Search Engine Optimization (SEO)', desc: 'Drive qualified organic search traffic through technical, on-page, and entity SEO.' },
    { title: 'Conversion Rate Optimization (CRO)', desc: 'Analyze visitor telemetry, remove friction, and convert website traffic into revenue.' },
  ];

  return (
    <div className="w-full min-h-screen bg-[#070e17] text-[#f5f7fa] pt-24 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 xl:px-12 relative overflow-hidden">
      {/* Background Neon Ambient Lighting */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#ff2638]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#0c2444]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8 flex items-center gap-2 text-[12px] sm:text-[13px] text-[#8e9cae]">
          <button
            type="button"
            onClick={() => onNavigateHome()}
            className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span className="text-white/30">/</span>
          <span className="text-[#ff2638] font-semibold">Sitemap & Architecture Directory</span>
        </nav>

        {/* Page Header */}
        <header className="mb-10 sm:mb-14 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff2638]/10 border border-[#ff2638]/25 text-[#ff2638] text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase mb-3.5">
            <Globe className="w-3.5 h-3.5" />
            <span>SITE ARCHITECTURE & INDEX</span>
          </div>

          <h1 className="text-[28px] xs:text-[34px] sm:text-[44px] lg:text-[50px] font-extrabold text-white tracking-tight leading-[1.15]">
            Website Sitemap &amp;{' '}
            <span className="text-[#ff2638] drop-shadow-[0_0_24px_rgba(255,38,56,0.6)]">
              Architecture Directory
            </span>
          </h1>

          <p className="mt-3 sm:mt-4 text-[13.5px] xs:text-[14.5px] sm:text-[16.5px] text-[#8e9cae] max-w-3xl leading-relaxed">
            A comprehensive, human-readable index of all production software systems, custom engineering capabilities, industry verticals, and live crawler endpoints.
          </p>

          {/* Quick Technical Crawl Metadata Badges */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3 text-[11.5px] xs:text-[12px]">
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/90 font-mono">
              Domain: <strong className="text-white">bloodydevelopers.vercel.app</strong>
            </span>
            <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Googlebot &amp; Ads Indexable</span>
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/70">
              Updated: November 2026
            </span>
          </div>
        </header>

        {/* SECTION 1: Core Navigation & Section Anchors */}
        <section aria-labelledby="core-navigation" className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 text-[#ff2638] font-bold text-[14px] sm:text-[15px] uppercase tracking-wider mb-4">
            <Code className="w-4.5 h-4.5" />
            <h2 id="core-navigation" className="text-white text-[18px] sm:text-[22px] font-bold normal-case">
              Core Web Pages &amp; Sections
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {coreSections.map((sec) => (
              <div
                key={sec.id}
                onClick={() => onNavigateHome(sec.id)}
                className="group p-4 rounded-xl bg-[#0a1420]/80 hover:bg-[#0f1f33] border border-white/8 hover:border-[#ff2638]/40 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-[14px] sm:text-[15px] text-white group-hover:text-[#ff2638] transition-colors">
                      {sec.label}
                    </h3>
                    <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#ff2638] group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-[12px] text-[#8e9cae] mt-1.5 leading-snug">
                    {sec.desc}
                  </p>
                </div>
                <div className="mt-3 text-[11px] text-[#ff2638] font-mono">
                  {sec.id === 'home' ? '/' : `/#${sec.id}`}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: Software Products Suite (Dedicated Pages) */}
        <section aria-labelledby="software-products" className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 text-[#ff2638] font-bold text-[14px] sm:text-[15px] uppercase tracking-wider mb-4">
            <Box className="w-4.5 h-4.5" />
            <h2 id="software-products" className="text-white text-[18px] sm:text-[22px] font-bold normal-case">
              Software Products Suite (Dedicated Webpages)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {PRODUCTS.map((prod) => (
              <article
                key={prod.id}
                onClick={() => onSelectProduct(prod.id)}
                className="group p-4 sm:p-5 rounded-2xl bg-[#0a1420]/90 hover:bg-[#0e1d30] border border-white/10 hover:border-[#ff2638]/50 transition-all duration-200 cursor-pointer shadow-md hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#ff2638]/12 border border-[#ff2638]/25 text-[#ff2638] text-[10.5px] font-bold uppercase tracking-wide">
                      {prod.category}
                    </span>
                    <span className="text-[11px] font-mono text-white/50">
                      /products/{prod.id}
                    </span>
                  </div>

                  <h3 className="text-[16px] sm:text-[17.5px] font-bold text-white group-hover:text-[#ff2638] transition-colors leading-snug">
                    {prod.title}
                  </h3>

                  <p className="text-[12.5px] sm:text-[13px] text-[#8e9cae] mt-2 leading-relaxed line-clamp-2">
                    {prod.description}
                  </p>

                  <ul className="mt-3 space-y-1 text-[11.5px] text-[#cbd5e1]">
                    {prod.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#ff2638] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-white/8 flex items-center justify-between">
                  <span className="text-[12px] font-bold text-[#ff2638] group-hover:underline flex items-center gap-1.5">
                    <span>Explore Product System</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="text-[11px] text-white/40 font-mono">200 OK</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION 3: Custom Software Development */}
        <section aria-labelledby="custom-engineering" className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 text-[#ff2638] font-bold text-[14px] sm:text-[15px] uppercase tracking-wider mb-4">
            <Laptop className="w-4.5 h-4.5" />
            <h2 id="custom-engineering" className="text-white text-[18px] sm:text-[22px] font-bold normal-case">
              Custom Software Development Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {customServices.map((svc) => (
              <div
                key={svc.title}
                className="p-4 rounded-xl bg-[#0a1420]/75 border border-white/8 hover:border-[#ff2638]/30 transition-colors flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-[14px] text-white">
                    {svc.title}
                  </h3>
                  <p className="text-[12px] text-[#8e9cae] mt-1.5 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenContact(svc.title)}
                  className="mt-3 text-[11.5px] font-semibold text-[#ff2638] hover:text-white transition-colors text-left cursor-pointer flex items-center gap-1"
                >
                  <span>Request Engineering Review</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: Digital Marketing Services */}
        <section aria-labelledby="digital-marketing-services" className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 text-[#ff2638] font-bold text-[14px] sm:text-[15px] uppercase tracking-wider mb-4">
            <Megaphone className="w-4.5 h-4.5" />
            <h2 id="digital-marketing-services" className="text-white text-[18px] sm:text-[22px] font-bold normal-case">
              Digital Marketing &amp; Business Growth Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {marketingServices.map((mkt) => (
              <div
                key={mkt.title}
                className="p-4 rounded-xl bg-[#0a1420]/75 border border-white/8 hover:border-[#ff2638]/30 transition-colors flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-[14px] text-white">
                    {mkt.title}
                  </h3>
                  <p className="text-[12px] text-[#8e9cae] mt-1.5 leading-relaxed">
                    {mkt.desc}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenContact(mkt.title)}
                  className="mt-3 text-[11.5px] font-semibold text-[#ff2638] hover:text-white transition-colors text-left cursor-pointer flex items-center gap-1"
                >
                  <span>Launch Growth Funnel</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: Enterprise Industry Verticals */}
        <section aria-labelledby="industries-we-serve" className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 text-[#ff2638] font-bold text-[14px] sm:text-[15px] uppercase tracking-wider mb-4">
            <Building className="w-4.5 h-4.5" />
            <h2 id="industries-we-serve" className="text-white text-[18px] sm:text-[22px] font-bold normal-case">
              Enterprise Industry Verticals
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                onClick={() => onSelectIndustry(ind)}
                className="group p-3.5 sm:p-4 rounded-xl bg-[#0a1420]/80 hover:bg-[#0e1d30] border border-white/8 hover:border-[#ff2638]/40 transition-all cursor-pointer"
              >
                <div className="text-[10.5px] font-bold tracking-wider text-[#ff2638] uppercase">
                  Vertical
                </div>
                <h3 className="font-bold text-[13.5px] sm:text-[14px] text-white group-hover:text-[#ff2638] transition-colors mt-1">
                  {ind.name}
                </h3>
                <p className="text-[11px] sm:text-[11.5px] text-[#8e9cae] mt-1 line-clamp-2">
                  {ind.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: Machine-Readable Feeds & Webmaster Protocols */}
        <section aria-labelledby="crawler-feeds" className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 text-[#ff2638] font-bold text-[14px] sm:text-[15px] uppercase tracking-wider mb-4">
            <FileCode className="w-4.5 h-4.5" />
            <h2 id="crawler-feeds" className="text-white text-[18px] sm:text-[22px] font-bold normal-case">
              Search Engine Feeds &amp; Webmaster Protocols
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Sitemap.xml */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0a1420] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="text-[14px] font-bold text-white flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-[#ff2638]" />
                    <span>XML Sitemap Index</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/8 text-white/80">
                    XML Protocol 0.9
                  </span>
                </div>
                <p className="text-[12px] text-[#8e9cae] mt-2 leading-relaxed">
                  Canonical XML sitemap conforming to Google Search Console and Bing Webmaster Guidelines. Lists every indexable URL, last-modified timestamp, and priority score.
                </p>
              </div>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-between p-2.5 rounded-lg bg-white/4 hover:bg-[#ff2638]/15 border border-white/8 hover:border-[#ff2638]/40 text-[#c4ccd7] hover:text-white text-[12px] font-mono transition-colors"
              >
                <span>https://bloodydevelopers.vercel.app/sitemap.xml</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#ff2638]" />
              </a>
            </div>

            {/* Robots.txt */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0a1420] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="text-[14px] font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#ff2638]" />
                    <span>Robots Exclusion Directives</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/8 text-white/80">
                    RFC 9309 Standard
                  </span>
                </div>
                <p className="text-[12px] text-[#8e9cae] mt-2 leading-relaxed">
                  Public crawler permissions for Googlebot, Bingbot, Google-Extended, and verified AI retrieval engines with explicit sitemap declarations and security boundaries.
                </p>
              </div>
              <a
                href="/robots.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-between p-2.5 rounded-lg bg-white/4 hover:bg-[#ff2638]/15 border border-white/8 hover:border-[#ff2638]/40 text-[#c4ccd7] hover:text-white text-[12px] font-mono transition-colors"
              >
                <span>https://bloodydevelopers.vercel.app/robots.txt</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#ff2638]" />
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 7: Direct Contact Callout Banner */}
        <section aria-labelledby="architecture-contact" className="mt-8 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0d1c2e] via-[#0a1420] to-[#16070d] border border-white/12 shadow-[0_16px_50px_rgba(0,0,0,0.8)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#ff2638] uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DIRECT TECHNICAL CONSULTATION</span>
            </div>
            <h2 id="architecture-contact" className="text-[20px] xs:text-[24px] sm:text-[28px] font-extrabold text-white">
              Need a Custom Software Architecture or System Review?
            </h2>
            <p className="text-[13px] sm:text-[14px] text-[#8e9cae]">
              Speak directly with our senior software engineers in Rourkela, Odisha. We analyze your requirements and deliver transparent technical proposals.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-[12px] text-[#cbd5e1]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#ff2638]" />
              </span>
              <span className="text-white/20">·</span>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[#25D366] font-semibold text-[11px] uppercase tracking-wider flex items-center gap-1">
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>WhatsApp:</span>
                </span>
                {WHATSAPP_NUMBERS.map((wa) => (
                  <a
                    key={wa.id}
                    href={wa.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-white hover:text-[#25D366] transition-colors font-medium text-[11.5px]"
                    title={`Chat with ${wa.label} on WhatsApp`}
                  >
                    <span>{wa.display}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => onOpenContact('Sitemap Architecture Inquiry')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ff2638] hover:bg-[#e01f30] text-white text-[13.5px] font-bold px-6 py-3 rounded-xl shadow-[0_0_24px_rgba(255,38,56,0.5)] transition-all cursor-pointer active:scale-97 min-h-12"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
