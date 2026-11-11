import React from 'react';
import { X, ExternalLink, Box, Code, Building, ShieldCheck, ArrowRight, FileCode } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { INDUSTRIES } from '../data/industries';

interface SitemapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
  onSelectProduct: (productId: string) => void;
  onSelectIndustry: (industryId: string) => void;
  onOpenContact: (service?: string) => void;
}

export const SitemapModal: React.FC<SitemapModalProps> = ({
  isOpen,
  onClose,
  onNavigateSection,
  onSelectProduct,
  onSelectIndustry,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-[880px] max-h-[92vh] overflow-y-auto bg-[#0a1320] border border-white/15 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_35px_rgba(255,38,56,0.15)] text-white">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff2638]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 text-white/60 hover:text-white p-1.5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close sitemap modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="mb-6 pb-4 border-b border-white/10">
          <div className="text-[11px] font-bold tracking-[0.22em] text-[#ff2638] uppercase">
            SITE ARCHITECTURE & INDEX
          </div>
          <h2 className="text-[26px] sm:text-[30px] font-bold text-white mt-1">
            Application Sitemap
          </h2>
          <p className="text-[13.5px] sm:text-[14px] text-[#8e9cae] mt-1.5 leading-relaxed">
            Structured directory of all software solutions, custom engineering services, and enterprise industry verticals.
          </p>
        </div>

        {/* Grid of Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Column 1: Core Navigation & Services */}
          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-2 text-[13px] font-bold text-[#ff2638] uppercase tracking-wider mb-2.5">
                <Code className="w-4.5 h-4.5" />
                <span>Core Navigation</span>
              </div>
              <ul className="space-y-2 text-[13px] text-[#c4ccd7]">
                {[
                  { label: 'Home Page', id: 'home' },
                  { label: 'Software Products', id: 'products' },
                  { label: 'Engineering Services', id: 'services' },
                  { label: 'Industries We Serve', id: 'industries' },
                  { label: 'Why Choose Bloody Developer', id: 'why-us' },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        onClose();
                        onNavigateSection(item.id);
                      }}
                      className="hover:text-white hover:underline flex items-center gap-2 transition-colors cursor-pointer text-left"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-[#ff2638]" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <div className="flex items-center gap-2 text-[13px] font-bold text-[#ff2638] uppercase tracking-wider mb-2.5">
                <ShieldCheck className="w-4.5 h-4.5" />
                <span>Custom Engineering</span>
              </div>
              <ul className="space-y-2 text-[13px] text-[#c4ccd7]">
                {[
                  'Custom Software Development',
                  'Mobile Application Development',
                  'Custom CRM & ERP Architecture',
                  'API & Cloud Integrations',
                  'Digital Marketing & Growth',
                ].map((srv) => (
                  <li key={srv}>
                    <button
                      onClick={() => {
                        onClose();
                        onOpenContact(srv);
                      }}
                      className="hover:text-white hover:underline flex items-center gap-2 transition-colors cursor-pointer text-left"
                    >
                      <span className="text-[#ff2638] font-mono text-[12px]">↳</span>
                      <span>{srv}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: Software Products */}
          <div>
            <div className="flex items-center gap-2 text-[13px] font-bold text-[#ff2638] uppercase tracking-wider mb-2.5">
              <Box className="w-4.5 h-4.5" />
              <span>SaaS Software Systems</span>
            </div>
            <ul className="space-y-2.5 text-[13px] text-[#c4ccd7]">
              {PRODUCTS.map((prod) => (
                <li key={prod.id} className="p-2.5 rounded-xl bg-white/4 hover:bg-white/7 border border-white/6 transition-colors">
                  <button
                    onClick={() => {
                      onClose();
                      onSelectProduct(prod.id);
                    }}
                    className="w-full text-left cursor-pointer"
                  >
                    <div className="font-semibold text-[13.5px] text-white hover:text-[#ff2638] transition-colors flex items-center justify-between">
                      <span>{prod.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white/40" />
                    </div>
                    <div className="text-[11px] text-[#8e9cae] line-clamp-1 mt-1">
                      {prod.description}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industry Verticals & Search Engine Feeds */}
          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-2 text-[13px] font-bold text-[#ff2638] uppercase tracking-wider mb-2.5">
                <Building className="w-4.5 h-4.5" />
                <span>Industry Verticals</span>
              </div>
              <ul className="space-y-1.5 text-[12px] text-[#c4ccd7]">
                {INDUSTRIES.map((ind) => (
                  <li key={ind.id}>
                    <button
                      onClick={() => {
                        onClose();
                        onSelectIndustry(ind.id);
                      }}
                      className="hover:text-white hover:underline flex items-center gap-1.5 transition-colors cursor-pointer text-left"
                    >
                      <span className="text-[#ff2638]">·</span>
                      <span>{ind.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* XML Feeds Box */}
            <div className="pt-2 p-3 rounded-xl bg-[#070e17] border border-white/10 space-y-2">
              <div className="text-[11px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <FileCode className="w-3.5 h-3.5 text-[#ff2638]" />
                <span>Search Engine Crawlers</span>
              </div>
              <div className="space-y-1.5 text-[11px]">
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[#8e9cae] hover:text-[#ff2638] transition-colors p-1.5 rounded bg-white/4"
                >
                  <span className="font-mono">/sitemap.xml</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="/robots.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[#8e9cae] hover:text-[#ff2638] transition-colors p-1.5 rounded bg-white/4"
                >
                  <span className="font-mono">/robots.txt</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#8e9cae]">
          <div>Status: All 18 routes indexed & compliant with Google Schema.org specs.</div>
          <button
            onClick={() => {
              onClose();
              onOpenContact('Enterprise Consultation');
            }}
            className="bg-[#ff2638] hover:bg-[#e01f30] text-white px-3.5 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
          >
            <span>Request Custom Solution</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
