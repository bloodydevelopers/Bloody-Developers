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
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { IndustryDetailModal } from './components/IndustryDetailModal';
import { SitemapModal } from './components/SitemapModal';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { PRODUCTS, Product } from './data/products';
import { Industry, INDUSTRIES } from './data/industries';

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
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactService, setContactService] = useState<string | undefined>(undefined);
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);
  const [sitemapOpen, setSitemapOpen] = useState(false);

  // Sync state with browser Back/Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const id = getProductIdFromUrl();
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
      setActiveProductId(found.id);
      window.history.pushState({}, '', `/products/${found.id}`);
      // Immediately reset scroll to the top of the viewport
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

  const handleNavigateHome = (sectionId?: string) => {
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

  const handleSelectIndustry = (industry: Industry) => {
    setSelectedIndustry(industry);
  };

  const currentProduct = activeProductId
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
          onOpenSitemap={() => setSitemapOpen(true)}
          isProductPage={!!currentProduct}
        />

        <main className="flex-1 w-full m-0 p-0">
          {currentProduct ? (
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
            </>
          )}
        </main>

        {/* GLOBAL FOOTER */}
        <Footer
          onOpenContact={(svc) => handleOpenContact(svc || currentProduct?.title)}
          onOpenSitemap={() => setSitemapOpen(true)}
          onNavigateHome={handleNavigateHome}
          isProductPage={!!currentProduct}
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

      <SitemapModal
        isOpen={sitemapOpen}
        onClose={() => setSitemapOpen(false)}
        onNavigateSection={(sectionId) => {
          handleNavigateHome(sectionId);
        }}
        onSelectProduct={(productId) => {
          handleSelectProduct(productId);
        }}
        onSelectIndustry={(industryId) => {
          const found = INDUSTRIES.find((ind) => ind.id === industryId);
          if (found) setSelectedIndustry(found);
        }}
        onOpenContact={handleOpenContact}
      />
    </div>
  );
}
