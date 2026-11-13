import React from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenContact: (service?: string) => void;
  onOpenSitemap?: () => void;
  onNavigateHome?: (sectionId?: string) => void;
  isProductPage?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenContact,
  onOpenSitemap,
  onNavigateHome,
  isProductPage = false,
}) => {
  const scrollTo = (id: string) => {
    if (isProductPage && onNavigateHome) {
      onNavigateHome(id);
      return;
    }
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuNav = [
    { label: 'Homepage', id: 'home', action: () => scrollTo('home') },
    { label: 'Software Products', id: 'products', action: () => scrollTo('products') },
    { label: 'Software Development Custom', id: 'services', action: () => scrollTo('custom-software-development') },
    { label: 'Online Marketing', id: 'digital-marketing', action: () => scrollTo('digital-marketing') },
    { label: 'Sectors', id: 'industries', action: () => scrollTo('industries') },
    { label: 'Portfolio', id: 'portfolio', action: () => scrollTo('portfolio') },
    { label: 'About Us', id: 'why-us', action: () => scrollTo('why-us') },
    { label: 'Get in touch', id: 'contact', action: () => onOpenContact() },
  ];

  const recommendedServices = [
    { label: 'Software for managing attendance', targetId: 'products', serviceName: 'Attendance Management' },
    { label: 'Cafes Software', targetId: 'products', serviceName: 'Cafe Management' },
    { label: 'Software for Project Management', targetId: 'products', serviceName: 'Task & Project Management' },
    { label: 'School Management System', targetId: 'products', serviceName: 'School Management' },
    { label: 'Development of E-Commerce', targetId: 'products', serviceName: 'E-Commerce Platform' },
    { label: 'Development of a Multi-Vendor Marketplace', targetId: 'products', serviceName: 'Multi-Vendor Marketplace' },
    { label: 'CRM & ERP Developing', targetId: 'custom-software-development', serviceName: 'CRM & ERP Development' },
    { label: 'Software development', targetId: 'custom-software-development', serviceName: 'Custom Software Development' },
    { label: 'Search Engine Optimisation Services', targetId: 'digital-marketing', serviceName: 'Search Engine Optimization (SEO)' },
    { label: 'Social Media Marketing', targetId: 'digital-marketing', serviceName: 'Social Media Marketing (SMM)' },
  ];

  return (
    <footer className="mt-16 sm:mt-24 border-t border-white/8 bg-[#040910] text-[13px] text-[#7d8b9b] w-full relative overflow-hidden">
      {/* Background glow subtle effect */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff2638]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/8">
          {/* Brand & Bio Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo size="md" />
            </div>
            
            <p className="text-[12.5px] sm:text-[13.5px] text-[#8e9cae] leading-relaxed max-w-lg">
              Bloody Developer is an IT & digital solutions company. The company is offering services in Custom Software Development, Business Automation, Web & Mobile Applications and Digital Marketing. We leverage technology and creative digital solutions to help organizations survive the long haul. Streamlining processes.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 text-[13px]">
              <a
                href="tel:7684047069"
                className="inline-flex items-center gap-2.5 text-white hover:text-[#ff2638] font-semibold transition-colors group"
                title="Call 7684047069"
              >
                <span className="w-7 h-7 rounded-full bg-[#ff2638] flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,38,56,0.65)] group-hover:scale-105 transition-transform">
                  <Phone className="w-3.5 h-3.5 text-white animate-phone-vibrate fill-white" />
                </span>
                <span>+91 7684047069</span>
              </a>

              <span className="hidden sm:inline text-white/20">·</span>

              <button
                type="button"
                onClick={() => onOpenContact()}
                className="inline-flex items-center gap-1.5 text-[#ff2638] hover:text-white font-semibold transition-colors cursor-pointer"
              >
                <span>Describe your project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 2: Footer Menu Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-[12px] font-bold tracking-[0.18em] text-[#ff2638] uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-[13px]">
              {menuNav.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={item.action}
                    className="hover:text-white transition-colors cursor-pointer text-left block w-full"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Recommended Services Links (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="text-[12px] font-bold tracking-[0.18em] text-[#ff2638] uppercase">
              Recommended Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-[12.5px]">
              {recommendedServices.map((service) => (
                <button
                  key={service.label}
                  type="button"
                  onClick={() => scrollTo(service.targetId)}
                  className="hover:text-white transition-colors text-left block py-1 group cursor-pointer leading-snug"
                  title={service.label}
                >
                  <span className="group-hover:text-[#ff2638] transition-colors mr-1.5 text-[#ff2638]/70 inline-block font-bold">›</span>
                  <span>{service.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Tagline & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[12.5px] text-[#718093] text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="text-[#a5b2c2] font-semibold">Construction Technology. Scalable Solutions.</span>
          </div>

          <p>© 2026 Bloody Developer. All Rights Reserved.</p>

          <div className="flex items-center gap-4 text-[12px]">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-white/20">·</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</span>
            {onOpenSitemap && (
              <>
                <span className="text-white/20">·</span>
                <button
                  type="button"
                  onClick={onOpenSitemap}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sitemap
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
