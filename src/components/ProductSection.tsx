import React from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { CustomSolutionCard } from './CustomSolutionCard';
import { motion } from 'motion/react';
import {
  sectionHeaderVariants,
  gridContainerVariants,
  defaultViewport,
} from '../utils/motionVariants';

interface ProductSectionProps {
  onSelectProduct: (productId: string) => void;
  onOpenCustomRequirement: () => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  onSelectProduct,
  onOpenCustomRequirement,
}) => {
  return (
    <section id="products" className="py-8 sm:py-16 lg:py-20 relative w-full">
      <div className="w-full px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-5 sm:mb-8 lg:mb-10">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="space-y-1.5 sm:space-y-2"
          >
            <div className="text-[11px] xs:text-[12px] sm:text-[13px] lg:text-[14px] font-bold tracking-[0.2em] sm:tracking-[0.22em] text-[#ff2638] uppercase">
              PRODUCTION-READY SUITES
            </div>
            <h2 className="text-[22px] xs:text-[26px] sm:text-[34px] md:text-[40px] lg:text-[46px] font-black text-white tracking-tight leading-tight">
              Software Built to Run Your Business{' '}
              <span className="text-[#ff2638] drop-shadow-[0_0_20px_rgba(255,38,56,0.6)]">
                Smoothly.
              </span>
            </h2>
            <p className="text-[12px] xs:text-[13px] sm:text-[15px] md:text-[16px] lg:text-[17px] text-[#8e9cae] max-w-3xl pt-0.5 sm:pt-1 leading-relaxed">
              Battle-tested management systems engineered for speed, clean UX, and zero tech overhead. Deploy immediately or customize to your exact workflow.
            </p>
          </motion.div>
        </div>

        {/* 2 Columns on Mobile, 4 Columns on Desktop with Short & Crisp Cards */}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 xs:gap-3 sm:gap-5 lg:gap-6 xl:gap-7"
        >
          {PRODUCTS.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              index={idx}
            />
          ))}

          {/* Card: Custom Solution Card */}
          <CustomSolutionCard onDiscuss={onOpenCustomRequirement} />
        </motion.div>
      </div>
    </section>
  );
};
