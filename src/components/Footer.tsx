import React from 'react';
import { ArrowUpRight, Phone } from 'lucide-react';
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

  return (
    <footer className="mt-16 sm:mt-20 border-t border-white/8 bg-[#050b12] py-10 sm:py-14 text-[13px] text-[#7d8b9b] w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/8">
          {/* Logo & Slogan */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5">
            <Logo size="md" />
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="text-[13px] sm:text-[14px] text-[#8e9cae] font-medium">
              Technology That Builds. Solutions That Scale.
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10 text-[14px] sm:text-[15px] font-semibold text-[#a5b2c2]">
            <button
              onClick={() => scrollTo('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('products')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Products
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo('industries')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Industries
            </button>
            <a
              href="tel:7684047069"
              className="hover:text-white text-[#c4ccd7] transition-colors cursor-pointer flex items-center gap-2 font-semibold group"
              title="Call 7684047069"
            >
              <span className="w-6 h-6 rounded-full bg-[#ff2638] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(255,38,56,0.65)] group-hover:scale-105 transition-transform">
                <Phone className="w-3.5 h-3.5 text-white animate-phone-vibrate fill-white" />
              </span>
              <span>7684047069</span>
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#718093] text-center sm:text-left">
          <p>© {new Date().getFullYear()} Bloody Developer. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-medium">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-white/20">·</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms & Condition</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
