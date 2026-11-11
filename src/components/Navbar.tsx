import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowUpRight, Menu, Phone } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { MobileMenu } from './MobileMenu';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenContact: (defaultService?: string) => void;
  onSelectProduct: (productId: string) => void;
  onNavigateHome?: (sectionId?: string) => void;
  onOpenSitemap?: () => void;
  isProductPage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  onSelectProduct,
  onNavigateHome,
  onOpenSitemap,
  isProductPage = false,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'products', 'services', 'industries', 'why-us'];
      const scrollPos = window.scrollY + 100;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
    setServicesOpen(false);
    if (isProductPage && onNavigateHome) {
      onNavigateHome(id);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? 'bg-[#070e17]/95 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.7)]'
          : 'bg-[#070e17]/85 backdrop-blur-sm border-b border-white/6'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 h-[64px] sm:h-[70px] lg:h-[78px] flex items-center justify-between">
        {/* Left: Brand Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <Logo size="md" className="transition-transform group-hover:scale-102" />
        </button>

        {/* Center / Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10 text-[14px] lg:text-[15px] xl:text-[16px] font-semibold text-[#c4ccd7]">
          {/* Home */}
          <div className="relative py-3">
            <button
              onClick={() => scrollTo('home')}
              className={`hover:text-white transition-colors cursor-pointer ${
                activeSection === 'home' ? 'text-white' : ''
              }`}
            >
              Home
            </button>
            {activeSection === 'home' && (
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#ff2638] rounded-full shadow-[0_0_10px_rgba(255,38,56,0.8)]" />
            )}
          </div>

          {/* Products Dropdown */}
          <div
            className="relative py-3"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              onClick={() => scrollTo('products')}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <span>Products</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  productsOpen ? 'rotate-180 text-[#ff2638]' : ''
                }`}
              />
            </button>

            {productsOpen && (
              <div className="absolute top-[52px] lg:top-[58px] -left-12 w-[380px] xl:w-[420px] bg-[#0c1624] border border-white/12 rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.85)] p-2.5 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                <div className="text-[11px] uppercase font-bold tracking-wider text-[#ff2638] px-3 py-2 border-b border-white/8 flex items-center justify-between">
                  <span>Our Software Systems</span>
                  <span className="text-[10px] text-[#8e9aa8] lowercase font-normal">7 suites</span>
                </div>
                <div className="py-1">
                  {PRODUCTS.map((prod) => (
                    <button
                      key={prod.id}
                      onClick={() => {
                        setProductsOpen(false);
                        onSelectProduct(prod.id);
                      }}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-white/6 transition-colors flex items-center justify-between group cursor-pointer"
                    >
                      <div>
                        <div className="text-[13.5px] font-semibold text-white group-hover:text-[#ff2638] transition-colors">
                          {prod.title}
                        </div>
                        <div className="text-[11px] text-[#8e9aa8] line-clamp-1 mt-0.5">
                          {prod.description}
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#ff2638] transition-colors shrink-0 ml-2" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative py-3"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => scrollTo('services')}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesOpen ? 'rotate-180 text-[#ff2638]' : ''
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-[52px] lg:top-[58px] -left-8 w-[320px] xl:w-[350px] bg-[#0c1624] border border-white/12 rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.85)] p-2.5 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                <div className="text-[11px] uppercase font-bold tracking-wider text-[#ff2638] px-3 py-2 border-b border-white/8">
                  Engineering & Growth
                </div>
                <div className="py-1">
                  {[
                    { label: 'Custom Software Development', id: 'custom-dev' },
                    { label: 'Web & Mobile Apps', id: 'apps' },
                    { label: 'ERP & CRM Systems', id: 'erp-crm' },
                    { label: 'API & Cloud Integration', id: 'api' },
                    { label: 'Digital Marketing & Growth', id: 'marketing' },
                  ].map((srv) => (
                    <button
                      key={srv.id}
                      onClick={() => {
                        setServicesOpen(false);
                        onOpenContact(srv.label);
                      }}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-white/6 transition-colors flex items-center justify-between group cursor-pointer"
                    >
                      <span className="text-[13.5px] font-semibold text-white group-hover:text-[#ff2638] transition-colors">
                        {srv.label}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#ff2638] transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Industries */}
          <button
            onClick={() => scrollTo('industries')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Industries
          </button>

          {/* Portfolio */}
          <button
            onClick={() => scrollTo('services')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Portfolio
          </button>

          {/* About Us */}
          <button
            onClick={() => scrollTo('why-us')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            About Us
          </button>

          {/* Contact */}
          <button
            onClick={() => onOpenContact()}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Far Right: Direct Phone Call Button (Icon Highlighted & Vibrating) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:7684047069"
            className="hidden sm:inline-flex items-center gap-2.5 text-[#c4ccd7] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 pl-2 pr-4 py-1.5 lg:pl-2 lg:pr-4.5 lg:py-1.5 rounded-full text-[13px] lg:text-[14px] font-semibold transition-all duration-200 cursor-pointer active:scale-97 group"
            title="Call 7684047069"
          >
            {/* Highlighted & Vibrating Call Icon */}
            <span className="w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full bg-[#ff2638] flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,38,56,0.65)] group-hover:scale-105 transition-transform">
              <Phone className="w-3.5 h-3.5 text-white animate-phone-vibrate fill-white" />
            </span>
            <span className="tracking-wide text-white/90 group-hover:text-white">7684047069</span>
          </a>

          {/* Mobile Quick Call Icon (Highlighted & Vibrating) */}
          <a
            href="tel:7684047069"
            className="sm:hidden min-w-[42px] min-h-[42px] flex items-center justify-center bg-white/6 hover:bg-white/12 border border-white/10 rounded-xl transition-all cursor-pointer active:scale-95"
            aria-label="Call 7684047069"
          >
            <span className="w-7 h-7 rounded-full bg-[#ff2638] flex items-center justify-center shadow-[0_0_10px_rgba(255,38,56,0.65)]">
              <Phone className="w-3.5 h-3.5 text-white animate-phone-vibrate fill-white" />
            </span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMobileMenuOpen(true);
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMobileMenuOpen(true);
            }}
            className="lg:hidden min-w-[46px] min-h-[46px] flex items-center justify-center p-2.5 text-white bg-white/6 hover:bg-white/12 active:bg-[#ff2638]/20 border border-white/10 hover:border-[#ff2638]/40 rounded-xl transition-all cursor-pointer focus:outline-none"
            aria-label="Open mobile navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Smooth Fullscreen Slide-Out Mobile Menu (Portaled directly to document.body) */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onNavigate={scrollTo}
        onOpenContact={onOpenContact}
        onSelectProduct={onSelectProduct}
        onOpenSitemap={onOpenSitemap}
      />
    </header>
  );
};
