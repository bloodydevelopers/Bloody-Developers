import React from 'react';
import { X, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Product } from '../data/products';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestDemo: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestDemo,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-[760px] max-h-[90vh] overflow-y-auto bg-[#0c1624] border border-white/15 rounded-3xl p-5 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_40px_rgba(255,38,56,0.2)]">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-60 h-60 bg-[#ff2638]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/60 hover:text-white p-1.5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="mb-5">
          <div className="text-[11px] font-bold tracking-[0.22em] text-[#ff2638] uppercase">
            SOFTWARE PRODUCT SPECIFICATION
          </div>
          <h2 className="text-[26px] sm:text-[30px] font-bold text-white mt-1">{product.title}</h2>
          <p className="text-[13.5px] sm:text-[14.5px] text-[#8e9cae] mt-1.5 leading-relaxed">{product.description}</p>
        </div>

        {/* Large Product Banner Preview in Sleek App Window */}
        <div className="relative w-full h-[240px] sm:h-[320px] rounded-2xl overflow-hidden bg-[#070e17] border border-white/10 mb-6 shadow-[0_12px_35px_rgba(0,0,0,0.85)]">
          {/* Sleek App Window Header Bar */}
          <div className="absolute top-0 inset-x-0 h-7 bg-[#070e17]/90 backdrop-blur-md border-b border-white/10 z-20 flex items-center justify-between px-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff2638]/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffb020]/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#20e070]/70" />
            </div>
            <div className="text-[11px] font-mono text-white/50 tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2638] animate-pulse" />
              <span>https://bloody.app/products/{product.id}</span>
            </div>
            <span className="text-[10px] font-bold text-white/40 tracking-wider uppercase">
              PRODUCTION LIVE
            </span>
          </div>

          <img
            src={product.image}
            alt={`${product.title} Preview`}
            className="w-full h-full object-cover pt-7 select-none"
          />
          <div className="absolute inset-0 pt-7 bg-gradient-to-t from-[#070e17]/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 right-3 z-20 bg-[#09121d]/90 border border-white/15 px-3 py-1.5 rounded-lg text-[11px] sm:text-[12px] font-semibold text-[#ff2638] flex items-center gap-2 shadow-md backdrop-blur-sm">
            <Zap className="w-3.5 h-3.5 text-[#ff2638]" />
            <span>{product.metrics}</span>
          </div>
        </div>

        {/* Key Features List */}
        <div className="space-y-2.5 mb-6">
          <div className="text-[12px] sm:text-[13px] font-bold text-white uppercase tracking-wider">
            Core Modules & Capabilities
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {product.features.map((feat, i) => (
              <div key={i} className="flex items-start gap-2.5 text-[12.5px] sm:text-[13px] text-[#c4ccd7]">
                <Check className="w-4 h-4 text-[#ff2638] shrink-0 mt-0.5 stroke-[2.5]" />
                <span className="leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex items-center gap-2 flex-wrap pb-6 border-b border-white/8 text-[12.5px] text-[#8e9cae]">
          <span className="font-bold text-white">Stack:</span>
          {product.tech.map((t) => (
            <span
              key={t}
              className="bg-white/5 border border-white/10 text-white/90 px-2.5 py-1 rounded-md text-[11px] font-mono"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Modal Actions */}
        <div className="pt-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[12px] sm:text-[13px] text-[#8e9cae]">
            <ShieldCheck className="w-5 h-5 text-[#ff2638]" />
            <span>Deployment Ready & SLA Guaranteed</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onRequestDemo(product.title);
            }}
            className="inline-flex items-center justify-center gap-2.5 bg-[#ff2638] hover:bg-[#e01f30] text-white text-[13.5px] sm:text-[14px] font-bold px-5 py-2.5 rounded-xl shadow-[0_0_20px_rgba(255,38,56,0.45)] transition-all cursor-pointer active:scale-97"
          >
            <span>Request Demo / Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
