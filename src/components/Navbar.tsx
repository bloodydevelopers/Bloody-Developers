import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowUpRight, Menu, Phone } from 'lucide-react';
import { motion } from 'motion/react';
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

  const productsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'products', 'services', 'industries', 'why-us', 'portfolio', 'testimonials', 'faq'];
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside click and Escape key to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (productsRef.current && !productsRef.current.contains(target)) {
        setProductsOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(target)) {
        setServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setProductsOpen(false);
        setServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleProducts = () => {
    setProductsOpen((prev) => !prev);
    setServicesOpen(false);
  };

  const toggleServices = () => {
    setServicesOpen((prev) => !prev);
    setProductsOpen(false);
  };

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
    setServicesOpen(false);
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
    <>
      {/* Smoothly Animated Sticky/Fixed Navigation Bar across all device screen sizes */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[999] transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out w-full ${
          isScrolled
            ? 'bg-[#070e17]/92 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.75),0_0_24px_rgba(255,38,56,0.06)]'
            : 'bg-[#070e17]/70 backdrop-blur-md border-b border-white/6'
        }`}
      >
        {/* Animated Cyber-Red Glow Line: Fades in smoothly when scrolled */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#ff2638] to-transparent transition-all duration-500 pointer-events-none ${
            isScrolled ? 'opacity-85 shadow-[0_0_12px_rgba(255,38,56,0.7)]' : 'opacity-0'
          }`}
          aria-hidden="true"
        />

        <div className="pt-[env(safe-area-inset-top,0px)] w-full">
          <div
            className={`w-full px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between transition-[height,padding] duration-300 ease-out ${
              isScrolled
                ? 'h-[58px] sm:h-[64px] lg:h-[70px]'
                : 'h-[66px] sm:h-[74px] lg:h-[82px]'
            }`}
          >
            {/* Left: Brand Logo with Smooth Micro-Scale */}
            <button
              onClick={() => scrollTo('home')}
              className={`flex items-center gap-2 group cursor-pointer focus:outline-none transition-transform duration-300 ease-out ${
                isScrolled ? 'scale-[0.96]' : 'scale-100'
              }`}
            >
              <Logo size="md" className="transition-transform duration-200 group-hover:scale-105" />
            </button>

            {/* Center / Navigation Links (Desktop with Spring-Sliding Indicator) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 2xl:gap-8 text-[13.5px] lg:text-[14.5px] xl:text-[15.5px] font-semibold text-[#c4ccd7]">
              {/* Home */}
              <div className="relative py-2.5">
                <button
                  onClick={() => scrollTo('home')}
                  className={`hover:text-white transition-colors duration-200 cursor-pointer ${
                    activeSection === 'home' ? 'text-white' : ''
                  }`}
                >
                  Home
                </button>
                {activeSection === 'home' && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#ff2638] rounded-full shadow-[0_0_10px_rgba(255,38,56,0.8)]"
                  />
                )}
              </div>

              {/* Software Products Dropdown */}
              <div
                ref={productsRef}
                className="relative py-2.5"
              >
                <button
                  type="button"
                  onClick={toggleProducts}
                  className={`flex items-center gap-1.5 hover:text-white transition-colors duration-200 cursor-pointer ${
                    activeSection === 'products' || productsOpen ? 'text-white' : ''
                  }`}
                  aria-expanded={productsOpen}
                  aria-haspopup="true"
                >
                  <span>Software Products</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      productsOpen ? 'rotate-180 text-[#ff2638]' : ''
                    }`}
                  />
                </button>
                {activeSection === 'products' && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#ff2638] rounded-full shadow-[0_0_10px_rgba(255,38,56,0.8)]"
                  />
                )}

                {productsOpen && (
                  <div className="absolute top-[50px] lg:top-[56px] -left-12 w-[380px] xl:w-[420px] bg-[#0c1624] border border-white/12 rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.85)] p-2.5 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    <button
                      type="button"
                      onClick={() => scrollTo('products')}
                      className="w-full text-[11px] uppercase font-bold tracking-wider text-[#ff2638] hover:text-[#ff4d5e] px-3 py-2 border-b border-white/8 flex items-center justify-between cursor-pointer transition-colors group"
                    >
                      <span>Our Software Products</span>
                      <span className="text-[10px] text-[#8e9aa8] group-hover:text-white flex items-center gap-0.5 normal-case font-normal">View all products →</span>
                    </button>
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

              {/* Services We Provide Dropdown */}
              <div
                ref={servicesRef}
                className="relative py-2.5"
              >
                <button
                  type="button"
                  onClick={toggleServices}
                  className={`flex items-center gap-1.5 hover:text-white transition-colors duration-200 cursor-pointer ${
                    activeSection === 'services' || servicesOpen ? 'text-white' : ''
                  }`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  <span>Services We Provide</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesOpen ? 'rotate-180 text-[#ff2638]' : ''
                    }`}
                  />
                </button>
                {activeSection === 'services' && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#ff2638] rounded-full shadow-[0_0_10px_rgba(255,38,56,0.8)]"
                  />
                )}

                {servicesOpen && (
                  <div className="absolute top-[50px] lg:top-[56px] -left-8 w-[320px] xl:w-[350px] bg-[#0c1624] border border-white/12 rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.85)] p-2.5 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    <button
                      type="button"
                      onClick={() => scrollTo('services')}
                      className="w-full text-[11px] uppercase font-bold tracking-wider text-[#ff2638] hover:text-[#ff4d5e] px-3 py-2 border-b border-white/8 flex items-center justify-between cursor-pointer transition-colors group"
                    >
                      <span>Custom Services & Marketing</span>
                      <span className="text-[10px] text-[#8e9aa8] group-hover:text-white flex items-center gap-0.5 normal-case font-normal">View section →</span>
                    </button>
                    <div className="py-1">
                      {[
                        { label: 'Custom Software Development', id: 'custom-dev' },
                        { label: 'Mobile Application Development', id: 'mobile' },
                        { label: 'ERP & CRM Systems', id: 'erp-crm' },
                        { label: 'API Development & Integration', id: 'api' },
                        { label: 'Digital Marketing Services', id: 'marketing' },
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

              {/* Industries We Work With */}
              <div className="relative py-2.5">
                <button
                  onClick={() => scrollTo('industries')}
                  className={`hover:text-white transition-colors duration-200 cursor-pointer ${
                    activeSection === 'industries' ? 'text-white' : ''
                  }`}
                >
                  Industries We Work With
                </button>
                {activeSection === 'industries' && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#ff2638] rounded-full shadow-[0_0_10px_rgba(255,38,56,0.8)]"
                  />
                )}
              </div>

              {/* Our Work (Portfolio) */}
              <div className="relative py-2.5">
                <button
                  type="button"
                  onClick={() => scrollTo('portfolio')}
                  className={`hover:text-white transition-colors duration-200 cursor-pointer ${
                    activeSection === 'portfolio' ? 'text-white' : ''
                  }`}
                >
                  Our Work
                </button>
                {activeSection === 'portfolio' && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#ff2638] rounded-full shadow-[0_0_10px_rgba(255,38,56,0.8)]"
                  />
                )}
              </div>

              {/* About Us */}
              <div className="relative py-2.5">
                <button
                  onClick={() => scrollTo('why-us')}
                  className={`hover:text-white transition-colors duration-200 cursor-pointer ${
                    activeSection === 'why-us' ? 'text-white' : ''
                  }`}
                >
                  About Us
                </button>
                {activeSection === 'why-us' && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#ff2638] rounded-full shadow-[0_0_10px_rgba(255,38,56,0.8)]"
                  />
                )}
              </div>

              {/* Contact Us */}
              <button
                type="button"
                onClick={() => {
                  setProductsOpen(false);
                  setServicesOpen(false);
                  onOpenContact();
                }}
                className="hover:text-white text-[#c4ccd7] hover:border-b-2 hover:border-[#ff2638] transition-all duration-200 cursor-pointer py-2.5"
              >
                Contact Us
              </button>
            </nav>

            {/* Far Right: Direct Phone Call Button (Icon Highlighted & Vibrating) */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="tel:7684047069"
                className={`hidden sm:inline-flex items-center gap-2.5 text-[#c4ccd7] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 pl-2 pr-4 py-1.5 lg:pl-2 lg:pr-4.5 lg:py-1.5 rounded-full text-[13px] lg:text-[14px] font-semibold transition-all duration-300 cursor-pointer active:scale-97 group ${
                  isScrolled ? 'scale-[0.96]' : 'scale-100'
                }`}
                title="Call 7684047069"
              >
                {/* Highlighted & Vibrating Call Icon */}
                <span className="w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full bg-[#ff2638] flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,38,56,0.65)] group-hover:scale-108 transition-transform duration-200">
                  <Phone className="w-3.5 h-3.5 text-white animate-phone-vibrate fill-white" />
                </span>
                <span className="tracking-wide text-white/90 group-hover:text-white">7684047069</span>
              </a>

              {/* Mobile Quick Call Icon (Highlighted & Vibrating) */}
              <a
                href="tel:7684047069"
                className={`sm:hidden flex items-center justify-center bg-white/6 hover:bg-white/12 border border-white/10 rounded-xl transition-all duration-300 cursor-pointer active:scale-95 ${
                  isScrolled ? 'min-w-[38px] min-h-[38px]' : 'min-w-[42px] min-h-[42px]'
                }`}
                aria-label="Call 7684047069"
              >
                <span className="w-7 h-7 rounded-full bg-[#ff2638] flex items-center justify-center shadow-[0_0_10px_rgba(255,38,56,0.65)]">
                  <Phone className="w-3.5 h-3.5 text-white animate-phone-vibrate fill-white" />
                </span>
              </a>

              {/* Mobile Menu Toggle Button (iOS Safari Tap Optimized) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className={`lg:hidden flex items-center justify-center text-white bg-white/6 hover:bg-white/12 active:bg-[#ff2638]/20 border border-white/10 hover:border-[#ff2638]/40 rounded-xl transition-all duration-300 cursor-pointer focus:outline-none touch-manipulation select-none active:scale-95 ${
                  isScrolled ? 'min-w-[40px] min-h-[40px] p-2' : 'min-w-[46px] min-h-[46px] p-2.5'
                }`}
                aria-label="Open mobile navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className={`${isScrolled ? 'w-5 h-5' : 'w-6 h-6'} text-white transition-all duration-300`} />
              </button>
            </div>
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
      </motion.header>

      {/* Document flow spacer: guarantees seamless document flow and prevents content occlusion across all screen sizes */}
      <div
        className="h-[66px] sm:h-[74px] lg:h-[82px] pt-[env(safe-area-inset-top,0px)] w-full shrink-0 pointer-events-none"
        aria-hidden="true"
      />
    </>
  );
};
