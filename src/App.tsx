/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductSection } from './components/ProductSection';
import { ProductPage } from './components/ProductPage';
import { DevelopmentSection } from './components/DevelopmentSection';
import { IndustriesSection } from './components/IndustriesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsFaqSection } from './components/TestimonialsFaqSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { IndustryDetailModal } from './components/IndustryDetailModal';
import { SitemapPage } from './components/SitemapPage';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { PRODUCTS, Product } from './data/products';
import { Industry, INDUSTRIES } from './data/industries';

// Helper to determine if current path is the sitemap route
const isSitemapPath = (): boolean => {
  if (typeof window === 'undefined') return false;
  const path = window.location.pathname.replace(/\/+$/, '');
  return path === '/sitemap' || path === '/sitemap.html';
};

// Helper to determine productId from current URL pathname
const getProductIdFromUrl = (): string | null => {
  if (typeof window === 'undefined') return null;
  const path = window.location.pathname.replace(/\/+$/, '');
  const match = path.match(/^\/products?\/([a-zA-Z0-9_-]+)$/);
  if (match && match[1]) {
    const found = PRODUCTS.find((p) => p.id === match[1]);
    if (found) return found.id;
  }
  return null;
};

export default function App() {
  const [activeProductId, setActiveProductId] = useState<string | null>(getProductIdFromUrl);
  const [isSitemap, setIsSitemap] = useState<boolean>(isSitemapPath);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactService, setContactService] = useState<string | undefined>(undefined);
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);

  // Sync state with browser Back/Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const sitemapRoute = isSitemapPath();
      const id = getProductIdFromUrl();
      setIsSitemap(sitemapRoute);
      setActiveProductId(id);
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenContact = (service?: string) => {
    setContactService(service);
    setContactModalOpen(true);
  };

  const handleSelectProduct = (productId: string) => {
    if (productId === 'all') {
      handleNavigateHome('products');
      return;
    }
    const found = PRODUCTS.find((p) => p.id === productId);
    if (found) {
      setIsSitemap(false);
      setActiveProductId(found.id);
      window.history.pushState({}, '', `/products/${found.id}`);
      // Immediately reset scroll to the top of the viewport
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

  const handleNavigateHome = (sectionId?: string) => {
    setIsSitemap(false);
    setActiveProductId(null);
    window.history.pushState({}, '', '/');
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateSitemap = () => {
    setActiveProductId(null);
    setIsSitemap(true);
    window.history.pushState({}, '', '/sitemap');
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const handleSelectIndustry = (industry: Industry) => {
    setSelectedIndustry(industry);
  };

  const currentProduct = (!isSitemap && activeProductId)
    ? PRODUCTS.find((p) => p.id === activeProductId) || null
    : null;

  return (
    <div className="min-h-screen w-full bg-[#070e17] text-[#f5f7fa] antialiased selection:bg-[#ff2638] selection:text-white relative overflow-x-clip m-0 p-0">
      {/* Animated Red Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Background Decorative Gradient Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#ff2638]/6 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] left-[-100px] w-[600px] h-[600px] bg-[#0c2444]/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-[20%] right-[-100px] w-[500px] h-[500px] bg-[#ff2638]/8 rounded-full blur-[140px]" />
      </div>

      {/* Main Content Viewport Wrapper */}
      <div className="relative z-10 flex flex-col w-full m-0 p-0">
        {/* GLOBAL NAVIGATION BAR */}
        <Navbar
          onOpenContact={(svc) => handleOpenContact(svc || currentProduct?.title)}
          onSelectProduct={handleSelectProduct}
          onNavigateHome={handleNavigateHome}
          onOpenSitemap={handleNavigateSitemap}
          isProductPage={!!currentProduct || isSitemap}
        />

        <main className="flex-1 w-full m-0 p-0">
          {isSitemap ? (
            /* DEDICATED SITEMAP WEBPAGE */
            <SitemapPage
              onNavigateHome={handleNavigateHome}
              onSelectProduct={handleSelectProduct}
              onSelectIndustry={handleSelectIndustry}
              onOpenContact={(svc) => handleOpenContact(svc || 'Sitemap Architecture Consultation')}
            />
          ) : currentProduct ? (
            /* DEDICATED INDIVIDUAL PRODUCT PAGE */
            <ProductPage
              product={currentProduct}
              onBack={() => handleNavigateHome('products')}
              onSelectProduct={handleSelectProduct}
              onRequestDemo={(productName) => handleOpenContact(productName)}
            />
          ) : (
            /* HOME LANDING PAGE WITH ALL SECTIONS */
            <>
              {/* HERO SECTION */}
              <Hero
                onExploreProducts={() => {
                  const el = document.getElementById('products');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                onStartProject={() => handleOpenContact('Custom Project')}
                onServiceClick={(service) => handleOpenContact(service)}
              />

              {/* SOFTWARE PRODUCTS SHOWCASE GRID */}
              <ProductSection
                onSelectProduct={handleSelectProduct}
                onOpenCustomRequirement={() => handleOpenContact('Custom Software Solution')}
              />

              {/* CUSTOM DEVELOPMENT + MARKETING SECTIONS */}
              <DevelopmentSection
                onDiscussProject={() => handleOpenContact('Custom Software Development')}
                onGrowBusiness={() => handleOpenContact('Digital Marketing & Growth')}
              />

              {/* INDUSTRIES WE SERVE */}
              <IndustriesSection onSelectIndustry={handleSelectIndustry} />

              {/* WHY CHOOSE US */}
              <WhyChooseUs />

              {/* PORTFOLIO / CASE STUDIES */}
              <PortfolioSection onOpenContact={handleOpenContact} />

              {/* TESTIMONIALS & FAQS */}
              <TestimonialsFaqSection onOpenContact={handleOpenContact} />
            </>
          )}
        </main>

        {/* GLOBAL FOOTER */}
        <Footer
          onOpenContact={(svc) => handleOpenContact(svc || currentProduct?.title)}
          onOpenSitemap={handleNavigateSitemap}
          onNavigateHome={handleNavigateHome}
          isProductPage={!!currentProduct || isSitemap}
        />
      </div>

      {/* INTERACTIVE MODALS */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        defaultService={contactService}
      />

      <IndustryDetailModal
        industry={selectedIndustry}
        onClose={() => setSelectedIndustry(null)}
        onInquire={(industryName) => handleOpenContact(`Industry Solution for ${industryName}`)}
      />
    </div>
  );
}
