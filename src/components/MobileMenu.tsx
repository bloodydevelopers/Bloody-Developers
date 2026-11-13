import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Network,
  Phone,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../data/products';
import { Logo } from './Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenContact: (defaultService?: string) => void;
  onSelectProduct: (productId: string) => void;
  onOpenSitemap?: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenContact,
  onSelectProduct,
  onOpenSitemap,
}) => {
  const [productsExpanded, setProductsExpanded] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const mountTimeRef = useRef(0);

  // Lock body scroll on iOS Safari / mobile browsers
  useEffect(() => {
    if (isOpen) {
      mountTimeRef.current = Date.now();
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  // Prevent iOS synthetic ghost-click on close button when finger lifts from hamburger button
  const handleSafeClose = () => {
    if (Date.now() - mountTimeRef.current < 250) return;
    onClose();
  };

  const navItems = [
    { label: 'Home', id: 'home', number: '01' },
    {
      label: 'Software Products',
      id: 'products',
      number: '02',
      isExpandable: true,
      expanded: productsExpanded,
      toggle: () => setProductsExpanded(!productsExpanded),
    },
    {
      label: 'Services We Provide',
      id: 'services',
      number: '03',
      isExpandable: true,
      expanded: servicesExpanded,
      toggle: () => setServicesExpanded(!servicesExpanded),
    },
    { label: 'Industries We Work With', id: 'industries', number: '04' },
    { label: 'Our Work', id: 'portfolio', number: '05' },
    { label: 'About Us', id: 'why-us', number: '06' },
    { label: 'Reviews & FAQs', id: 'testimonials', number: '07' },
    { label: 'Contact Us', id: 'contact', number: '08', isContact: true },
  ];

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 h-[100dvh] w-full z-[99999] lg:hidden flex flex-col bg-[#070e17] text-white overflow-hidden shadow-2xl overscroll-none"
          role="dialog"
          aria-modal="true"
        >
          {/* Ambient Background Glows */}
          <div className="absolute top-[-100px] right-[-100px] w-[350px] h-[350px] bg-[#ff2638]/12 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[-80px] left-[-80px] w-[300px] h-[300px] bg-[#0c2444]/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Top Bar: Always Visible Branding & Close Action (Safe Area Aware on iPhone) */}
          <div className="pt-[env(safe-area-inset-top,0px)] border-b border-white/8 shrink-0 bg-[#070e17]/95 backdrop-blur-md z-10">
            <div className="h-[56px] px-3.5 sm:px-6 flex items-center justify-between">
              {/* Branding Logo */}
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onNavigate('home');
                }}
                className="flex items-center gap-2 group cursor-pointer focus:outline-none touch-manipulation"
              >
                <Logo size="sm" className="sm:hidden" />
                <Logo size="md" className="hidden sm:flex transition-transform group-hover:scale-102" />
              </button>

              {/* Direct Call Button (Highlighted Vibrating Icon) */}
              <div className="flex items-center gap-2">
                <a
                  href="tel:7684047069"
                  className="bg-white/6 hover:bg-white/12 text-[#c4ccd7] hover:text-white border border-white/10 text-[12px] font-semibold pl-2 pr-3 py-1.5 rounded-full flex items-center gap-2 cursor-pointer transition-colors touch-manipulation"
                  title="Call 7684047069"
                >
                  <span className="w-5 h-5 rounded-full bg-[#ff2638] flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(255,38,56,0.6)]">
                    <Phone className="w-3 h-3 text-white animate-phone-vibrate fill-white" />
                  </span>
                  <span className="hidden xs:inline text-white/90">7684047069</span>
                </a>

                {/* Close Button with Ghost-Click Protection */}
                <button
                  type="button"
                  onClick={handleSafeClose}
                  className="w-10 h-10 rounded-full bg-white/6 hover:bg-white/12 active:bg-white/20 border border-white/10 flex items-center justify-center text-white/90 hover:text-white transition-all cursor-pointer focus:outline-none active:scale-95 touch-manipulation"
                  aria-label="Close mobile menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Fullscreen Scrollable Content (iOS Momentum Scroll Enabled) */}
          <div
            className="flex-1 overflow-y-auto touch-pan-y px-4 sm:px-6 py-5 sm:py-6 overscroll-contain pb-[env(safe-area-inset-bottom,20px)]"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 15, opacity: 0 }}
              transition={{ duration: 0.35, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="min-h-full flex flex-col justify-between space-y-6"
            >
              {/* Section Tag */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] font-bold tracking-[0.2em] text-[#ff2638] uppercase pb-2 border-b border-white/6">
                  <span>NAVIGATION DIRECTORY</span>
                  <span className="text-[#64748b]">BLOODY DEVELOPER</span>
                </div>

                {/* Navigation Items List */}
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.08 + index * 0.04,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="border-b border-white/5 py-1.5"
                    >
                      {item.isExpandable ? (
                        <div>
                          <button
                            type="button"
                            onClick={item.toggle}
                            className="w-full flex items-center justify-between py-2 text-left group cursor-pointer touch-manipulation"
                          >
                            <div className="flex items-baseline gap-3">
                              <span className="text-[11px] font-mono text-[#ff2638] font-semibold">
                                {item.number}
                              </span>
                              <span className="text-[20px] font-bold text-white group-hover:text-[#ff2638] transition-colors">
                                {item.label}
                              </span>
                            </div>
                            <ChevronRight
                              className={`w-4 h-4 text-white/40 transition-transform duration-200 ${
                                item.expanded ? 'rotate-90 text-[#ff2638]' : ''
                              }`}
                            />
                          </button>

                          {/* Submenu for Products */}
                          {item.id === 'products' && item.expanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-7 pr-2 pb-3 pt-1 space-y-2 overflow-hidden"
                            >
                              <div className="grid grid-cols-1 gap-1.5">
                                {PRODUCTS.map((prod) => (
                                  <button
                                    key={prod.id}
                                    type="button"
                                    onClick={() => {
                                      onClose();
                                      onSelectProduct(prod.id);
                                    }}
                                    className="w-full text-left p-2 rounded-lg bg-white/4 hover:bg-[#ff2638]/10 border border-white/6 hover:border-[#ff2638]/30 transition-colors flex items-center justify-between group cursor-pointer touch-manipulation"
                                  >
                                    <div>
                                      <div className="text-[12px] font-semibold text-white group-hover:text-[#ff2638] transition-colors">
                                        {prod.title}
                                      </div>
                                      <div className="text-[10px] text-[#8e9cae] line-clamp-1">
                                        {prod.description}
                                      </div>
                                    </div>
                                    <ArrowRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#ff2638] shrink-0 ml-2" />
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}

                          {/* Submenu for Services */}
                          {item.id === 'services' && item.expanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-7 pr-2 pb-3 pt-1 space-y-1.5 overflow-hidden"
                            >
                              {[
                                'Website & Web App Development',
                                'Mobile Application Development',
                                'Custom ERP & CRM Solutions',
                                'Enterprise Business Automation',
                                'Digital Marketing & Growth',
                              ].map((service) => (
                                <button
                                  key={service}
                                  type="button"
                                  onClick={() => {
                                    onClose();
                                    onOpenContact(service);
                                  }}
                                  className="w-full text-left p-2 rounded-lg bg-white/4 hover:bg-[#ff2638]/10 border border-white/6 hover:border-[#ff2638]/30 transition-colors flex items-center justify-between group cursor-pointer touch-manipulation"
                                >
                                  <span className="text-[12px] font-medium text-white/90 group-hover:text-[#ff2638]">
                                    {service}
                                  </span>
                                  <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#ff2638]" />
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ) : item.isContact ? (
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onOpenContact();
                          }}
                          className="w-full flex items-center justify-between py-2 text-left group cursor-pointer touch-manipulation"
                        >
                          <div className="flex items-baseline gap-3">
                            <span className="text-[11px] font-mono text-[#ff2638] font-semibold">
                              {item.number}
                            </span>
                            <span className="text-[20px] font-bold text-white group-hover:text-[#ff2638] transition-colors">
                              {item.label}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#ff2638] transition-colors" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onNavigate(item.id);
                          }}
                          className="w-full flex items-center justify-between py-2 text-left group cursor-pointer touch-manipulation"
                        >
                          <div className="flex items-baseline gap-3">
                            <span className="text-[11px] font-mono text-[#ff2638] font-semibold">
                              {item.number}
                            </span>
                            <span className="text-[20px] font-bold text-white group-hover:text-[#ff2638] transition-colors">
                              {item.label}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#ff2638] transition-colors" />
                        </button>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Contact & Status Information */}
              <div className="pt-4 border-t border-white/8 space-y-3">
                {/* Primary Action Button */}
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenContact('General Project Consultation');
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-[#ff2638] hover:bg-[#e61e30] text-white text-[13px] font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,38,56,0.4)] transition-all cursor-pointer touch-manipulation active:scale-98"
                >
                  <span>Start a New Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Status and direct contact */}
                <div className="grid grid-cols-2 gap-3 text-[11px] text-[#8e9cae]">
                  <div className="p-2.5 rounded-lg bg-white/3 border border-white/6">
                    <div className="text-white/50 text-[10px] uppercase font-bold tracking-wider">
                      Direct Email
                    </div>
                    <a
                      href="mailto:contact@bloodydeveloper.com"
                      className="text-white font-medium hover:text-[#ff2638] transition-colors truncate block mt-0.5 touch-manipulation"
                    >
                      contact@bloodydeveloper.com
                    </a>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white/3 border border-white/6">
                    <div className="text-white/50 text-[10px] uppercase font-bold tracking-wider">
                      Availability
                    </div>
                    <div className="text-white font-medium flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-[#ff2638] animate-pulse" />
                      <span>Booking Q4 Projects</span>
                    </div>
                  </div>
                </div>

                {/* Sitemap Direct Link */}
                {onOpenSitemap && (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenSitemap();
                    }}
                    className="w-full p-2.5 rounded-lg bg-white/4 hover:bg-white/8 border border-white/8 transition-colors flex items-center justify-between text-left cursor-pointer touch-manipulation"
                  >
                    <div className="flex items-center gap-2 text-white/80 hover:text-white">
                      <Network className="w-3.5 h-3.5 text-[#ff2638]" />
                      <span className="text-[11px] font-medium">Interactive Sitemap & Route Index</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-white/40" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
