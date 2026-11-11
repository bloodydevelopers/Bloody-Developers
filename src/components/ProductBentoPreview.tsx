import React from 'react';
import {
  Fingerprint,
  Coffee,
  CheckCircle2,
  GraduationCap,
  ShoppingBag,
  Store,
  TrendingUp,
  Clock,
  ShieldCheck,
  Zap,
  CreditCard,
  Building,
  Check,
} from 'lucide-react';

interface ProductBentoPreviewProps {
  productId: string;
  isExpanded?: boolean;
}

export const ProductBentoPreview: React.FC<ProductBentoPreviewProps> = ({
  productId,
  isExpanded = false,
}) => {
  switch (productId) {
    case 'attendance':
      return (
        <div className="w-full h-full p-3 sm:p-4 flex flex-col justify-between bg-[#060b13] text-[#d4dde8] font-sans select-none overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/6 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ff2638] shadow-[0_0_8px_#ff2638]" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="text-[10px] sm:text-[11px] font-mono text-[#8e9cae] uppercase tracking-wider ml-1.5 flex items-center gap-1">
                <Fingerprint className="w-3 h-3 text-[#ff2638]" />
                Live Punch Feed
              </span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#00ff9d]/10 border border-[#00ff9d]/25 px-2 py-0.5 rounded-full text-[9.5px] font-mono text-[#00ff9d]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse" />
              ONLINE
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-12 gap-2 my-auto py-1">
            {/* User punch card */}
            <div className="col-span-7 bg-[#0b1523] border border-white/8 rounded-lg p-2.5 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-[#ff2638]/15 border border-[#ff2638]/30 flex items-center justify-center text-[#ff2638] font-bold text-[11px]">
                  AV
                </div>
                <div className="truncate">
                  <div className="text-[11.5px] font-bold text-white truncate">Alex Vance</div>
                  <div className="text-[9.5px] text-[#8e9cae] truncate">Lead Architect</div>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-[10px] font-mono">
                <span className="text-white/80">09:02:14 AM</span>
                <span className="text-[#00ff9d] bg-[#00ff9d]/10 px-1.5 py-0.5 rounded text-[9px] flex items-center gap-1">
                  <Check className="w-2.5 h-2.5 stroke-[3]" /> On-Time
                </span>
              </div>
            </div>

            {/* Attendance Rate Dial */}
            <div className="col-span-5 bg-[#0b1523] border border-white/8 rounded-lg p-2 flex flex-col items-center justify-center text-center">
              <div className="text-[18px] sm:text-[20px] font-extrabold text-white leading-none font-mono">
                99.4<span className="text-[12px] text-[#ff2638]">%</span>
              </div>
              <div className="text-[9px] text-[#8e9cae] mt-1 uppercase tracking-wide">Present</div>
              <div className="text-[8.5px] font-mono text-[#00ff9d] mt-0.5">142/144 In Office</div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="bg-[#09121d] rounded-md px-2.5 py-1.5 border border-white/5 flex items-center justify-between text-[9.5px] sm:text-[10px] text-[#8e9cae]">
            <span className="flex items-center gap-1 text-white/90">
              <ShieldCheck className="w-3 h-3 text-[#ff2638]" /> Geo-Fence Verified
            </span>
            <span className="font-mono text-[#ff2638]">GPS accuracy ±1.2m</span>
          </div>
        </div>
      );

    case 'cafe':
      return (
        <div className="w-full h-full p-3 sm:p-4 flex flex-col justify-between bg-[#060b13] text-[#d4dde8] font-sans select-none overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/6 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ff2638] shadow-[0_0_8px_#ff2638]" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="text-[10px] sm:text-[11px] font-mono text-[#8e9cae] uppercase tracking-wider ml-1.5 flex items-center gap-1">
                <Coffee className="w-3 h-3 text-[#ff2638]" />
                KDS • Table #04
              </span>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-mono text-white/90 bg-[#ff2638]/15 border border-[#ff2638]/30 px-2 py-0.5 rounded-md">
              <Clock className="w-3 h-3 text-[#ff2638]" /> 01:42s
            </div>
          </div>

          {/* Live Order Items */}
          <div className="space-y-1.5 my-auto py-1">
            <div className="bg-[#0b1523] border border-white/8 rounded-lg px-2.5 py-1.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-[#ff2638]/20 text-[#ff2638] font-mono text-[10px] font-bold flex items-center justify-center">
                  2x
                </span>
                <span className="text-[11px] font-medium text-white">Nitro Cold Brew</span>
              </div>
              <span className="text-[9px] font-mono bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 px-1.5 py-0.5 rounded">
                BREWING
              </span>
            </div>

            <div className="bg-[#0b1523] border border-white/8 rounded-lg px-2.5 py-1.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-white/10 text-white font-mono text-[10px] font-bold flex items-center justify-center">
                  1x
                </span>
                <span className="text-[11px] font-medium text-white">Hazelnut Croissant</span>
              </div>
              <span className="text-[9px] font-mono bg-[#00ff9d]/10 text-[#00ff9d] border border-[#00ff9d]/30 px-1.5 py-0.5 rounded">
                READY
              </span>
            </div>
          </div>

          {/* Bottom Bar: Total & POS Status */}
          <div className="bg-[#09121d] rounded-md px-2.5 py-1.5 border border-white/5 flex items-center justify-between text-[9.5px] sm:text-[10px]">
            <span className="text-[#8e9cae]">
              Total: <span className="font-mono font-bold text-white">$17.50</span>
            </span>
            <span className="font-mono text-[#00ff9d] flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Paid via QR
            </span>
          </div>
        </div>
      );

    case 'task':
      return (
        <div className="w-full h-full p-3 sm:p-4 flex flex-col justify-between bg-[#060b13] text-[#d4dde8] font-sans select-none overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/6 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ff2638] shadow-[0_0_8px_#ff2638]" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="text-[10px] sm:text-[11px] font-mono text-[#8e9cae] uppercase tracking-wider ml-1.5 flex items-center gap-1">
                <Zap className="w-3 h-3 text-[#ff2638]" />
                Sprint 18 Board
              </span>
            </div>
            <div className="flex items-center gap-1 text-[9.5px] font-mono text-[#00ff9d] bg-[#00ff9d]/10 border border-[#00ff9d]/30 px-2 py-0.5 rounded-md">
              <TrendingUp className="w-3 h-3" /> +42% Velocity
            </div>
          </div>

          {/* 3-Column Mini Kanban */}
          <div className="grid grid-cols-3 gap-1.5 my-auto py-1">
            {/* Col 1 */}
            <div className="bg-[#0b1523] border border-white/8 rounded-lg p-2 flex flex-col justify-between h-[85px] sm:h-[95px]">
              <div className="flex items-center justify-between text-[8.5px] font-mono text-[#8e9cae] border-b border-white/5 pb-1">
                <span>IN PROG</span>
                <span className="text-[#ff2638] font-bold">2</span>
              </div>
              <div className="bg-[#121f31] border border-white/10 rounded p-1.5">
                <div className="text-[9.5px] font-semibold text-white leading-tight">API Auth</div>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-[7.5px] font-mono bg-[#ff2638]/25 text-[#ff2638] px-1 rounded">
                    P1
                  </span>
                  <span className="w-3.5 h-3.5 rounded-full bg-[#ff2638]/40 text-[7.5px] text-white flex items-center justify-center font-bold">
                    A
                  </span>
                </div>
              </div>
            </div>

            {/* Col 2 */}
            <div className="bg-[#0b1523] border border-white/8 rounded-lg p-2 flex flex-col justify-between h-[85px] sm:h-[95px]">
              <div className="flex items-center justify-between text-[8.5px] font-mono text-[#8e9cae] border-b border-white/5 pb-1">
                <span>REVIEW</span>
                <span className="text-[#00f0ff] font-bold">1</span>
              </div>
              <div className="bg-[#121f31] border border-white/10 rounded p-1.5">
                <div className="text-[9.5px] font-semibold text-white leading-tight">Webhooks</div>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-[7.5px] font-mono bg-[#00f0ff]/20 text-[#00f0ff] px-1 rounded">
                    PR #8
                  </span>
                  <span className="w-3.5 h-3.5 rounded-full bg-[#00f0ff]/40 text-[7.5px] text-white flex items-center justify-center font-bold">
                    M
                  </span>
                </div>
              </div>
            </div>

            {/* Col 3 */}
            <div className="bg-[#0b1523] border border-white/8 rounded-lg p-2 flex flex-col justify-between h-[85px] sm:h-[95px]">
              <div className="flex items-center justify-between text-[8.5px] font-mono text-[#8e9cae] border-b border-white/5 pb-1">
                <span>DONE</span>
                <span className="text-[#00ff9d] font-bold">8</span>
              </div>
              <div className="bg-[#121f31] border border-white/10 rounded p-1.5">
                <div className="text-[9.5px] font-semibold text-white leading-tight">DB Schema</div>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-[7.5px] font-mono bg-[#00ff9d]/20 text-[#00ff9d] px-1 rounded">
                    100%
                  </span>
                  <Check className="w-3 h-3 text-[#00ff9d]" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Sprint Completion Progress */}
          <div className="bg-[#09121d] rounded-md px-2.5 py-1.5 border border-white/5 flex items-center justify-between text-[9.5px] sm:text-[10px]">
            <span className="text-[#8e9cae]">Sprint 18 Burn-Down:</span>
            <span className="font-mono text-white font-bold">28 / 32 pts (87.5%)</span>
          </div>
        </div>
      );

    case 'school':
      return (
        <div className="w-full h-full p-3 sm:p-4 flex flex-col justify-between bg-[#060b13] text-[#d4dde8] font-sans select-none overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/6 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ff2638] shadow-[0_0_8px_#ff2638]" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="text-[10px] sm:text-[11px] font-mono text-[#8e9cae] uppercase tracking-wider ml-1.5 flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-[#ff2638]" />
                Academic Dossier
              </span>
            </div>
            <div className="text-[9.5px] font-mono text-[#c084fc] bg-[#c084fc]/10 border border-[#c084fc]/30 px-2 py-0.5 rounded-md">
              HONOR ROLL
            </div>
          </div>

          {/* Student Stats Grid */}
          <div className="grid grid-cols-12 gap-2 my-auto py-1">
            {/* Student info */}
            <div className="col-span-7 bg-[#0b1523] border border-white/8 rounded-lg p-2.5">
              <div className="text-[11.5px] font-bold text-white">Emma Watson</div>
              <div className="text-[9px] font-mono text-[#8e9cae] mt-0.5">Grade 12-A • ID #8042</div>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="text-[8.5px] font-mono bg-white/10 text-white px-1.5 py-0.5 rounded">
                  Calculus [A+]
                </span>
                <span className="text-[8.5px] font-mono bg-white/10 text-white px-1.5 py-0.5 rounded">
                  CS [A+]
                </span>
              </div>
            </div>

            {/* Cumulative GPA */}
            <div className="col-span-5 bg-[#0b1523] border border-white/8 rounded-lg p-2 flex flex-col items-center justify-center text-center">
              <div className="text-[18px] sm:text-[20px] font-extrabold text-white leading-none font-mono">
                3.94<span className="text-[11px] text-[#ff2638]">/4</span>
              </div>
              <div className="text-[8.5px] text-[#8e9cae] mt-1 uppercase tracking-wide">
                Semester GPA
              </div>
              <div className="text-[8px] font-mono text-[#00ff9d] mt-0.5">99.2% Attendance</div>
            </div>
          </div>

          {/* Bottom Bar: Scale */}
          <div className="bg-[#09121d] rounded-md px-2.5 py-1.5 border border-white/5 flex items-center justify-between text-[9.5px] sm:text-[10px]">
            <span className="text-[#8e9cae]">Centralized Database:</span>
            <span className="font-mono text-white font-semibold">120,000+ Students Active</span>
          </div>
        </div>
      );

    case 'single-vendor':
      return (
        <div className="w-full h-full p-3 sm:p-4 flex flex-col justify-between bg-[#060b13] text-[#d4dde8] font-sans select-none overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/6 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ff2638] shadow-[0_0_8px_#ff2638]" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="text-[10px] sm:text-[11px] font-mono text-[#8e9cae] uppercase tracking-wider ml-1.5 flex items-center gap-1">
                <ShoppingBag className="w-3 h-3 text-[#ff2638]" />
                Storefront POS
              </span>
            </div>
            <div className="flex items-center gap-1 text-[9.5px] font-mono text-[#00ff9d] bg-[#00ff9d]/10 border border-[#00ff9d]/30 px-2 py-0.5 rounded-md">
              <TrendingUp className="w-3 h-3" /> 3.2x CR
            </div>
          </div>

          {/* Product checkout row */}
          <div className="bg-[#0b1523] border border-white/8 rounded-lg p-2.5 my-auto flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#142236] border border-white/10 flex items-center justify-center shrink-0">
                <ShoppingBag className="w-4 h-4 text-[#ff2638]" />
              </div>
              <div>
                <div className="text-[11.5px] font-bold text-white">Cyber Stealth Jacket</div>
                <div className="text-[9.5px] font-mono text-[#8e9cae]">SKU: CSJ-09 • Stock: 48</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[14px] font-mono font-extrabold text-white">$149.00</div>
              <div className="text-[8.5px] font-mono text-[#00ff9d]">Instant Pay</div>
            </div>
          </div>

          {/* Bottom Bar: 1-Click Pay */}
          <div className="bg-[#09121d] rounded-md px-2.5 py-1.5 border border-white/5 flex items-center justify-between text-[9.5px] sm:text-[10px]">
            <span className="flex items-center gap-1.5 text-white/90">
              <CreditCard className="w-3.5 h-3.5 text-[#ff2638]" /> Apple Pay & Stripe Ready
            </span>
            <span className="font-mono text-[#00ff9d]">&lt; 0.8s Checkout</span>
          </div>
        </div>
      );

    case 'multi-vendor':
      return (
        <div className="w-full h-full p-3 sm:p-4 flex flex-col justify-between bg-[#060b13] text-[#d4dde8] font-sans select-none overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/6 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ff2638] shadow-[0_0_8px_#ff2638]" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="text-[10px] sm:text-[11px] font-mono text-[#8e9cae] uppercase tracking-wider ml-1.5 flex items-center gap-1">
                <Store className="w-3 h-3 text-[#ff2638]" />
                Multi-Seller Split
              </span>
            </div>
            <div className="text-[9.5px] font-mono text-white/90 bg-[#ff2638]/15 border border-[#ff2638]/30 px-2 py-0.5 rounded-md">
              $18M+ GMV
            </div>
          </div>

          {/* Vendor split visual */}
          <div className="space-y-1.5 my-auto py-1">
            <div className="bg-[#0b1523] border border-white/8 rounded-lg p-2">
              <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                <span className="text-white font-medium">Payout Distribution</span>
                <span className="text-[#00ff9d]">88% / 12%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden flex">
                <div className="h-full bg-[#ff2638] w-[88%]" />
                <div className="h-full bg-[#00f0ff] w-[12%]" />
              </div>
              <div className="flex items-center justify-between text-[8px] font-mono text-[#8e9cae] mt-1">
                <span>Vendor: $15,840</span>
                <span>Commission: $2,160</span>
              </div>
            </div>

            <div className="flex items-center justify-between px-1 text-[9px] font-mono text-[#8e9cae]">
              <span className="flex items-center gap-1 text-white">
                <Building className="w-2.5 h-2.5 text-[#ff2638]" /> Apex Gear Co.
              </span>
              <span className="text-[#00ff9d]">● Payout Cleared</span>
            </div>
          </div>

          {/* Bottom Bar: Automated Escrow */}
          <div className="bg-[#09121d] rounded-md px-2.5 py-1.5 border border-white/5 flex items-center justify-between text-[9.5px] sm:text-[10px]">
            <span className="text-[#8e9cae]">Escrow Engine:</span>
            <span className="font-mono text-[#00ff9d] flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Auto-Dispute Protected
            </span>
          </div>
        </div>
      );

    case 'crm-erp':
      return (
        <div className="w-full h-full p-3 sm:p-4 flex flex-col justify-between bg-[#060b13] text-[#d4dde8] font-sans select-none overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/6 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ff2638] shadow-[0_0_8px_#ff2638]" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="text-[10px] sm:text-[11px] font-mono text-[#8e9cae] uppercase tracking-wider ml-1.5 flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-[#ff2638]" />
                Executive Pipeline
              </span>
            </div>
            <div className="text-[9.5px] font-mono text-[#00ff9d] bg-[#00ff9d]/10 border border-[#00ff9d]/30 px-2 py-0.5 rounded-md">
              -65% Overhead
            </div>
          </div>

          {/* Funnel pipeline bars */}
          <div className="bg-[#0b1523] border border-white/8 rounded-lg p-2.5 my-auto">
            <div className="space-y-1.5">
              <div>
                <div className="flex items-center justify-between text-[9px] font-mono text-[#8e9cae] mb-0.5">
                  <span>Qualified Deals</span>
                  <span className="text-white">$480,000</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-white/40 w-[100%]" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-[9px] font-mono text-[#8e9cae] mb-0.5">
                  <span>Proposal Sent</span>
                  <span className="text-white">$240,000</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-[#00f0ff] w-[60%]" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-[9px] font-mono text-[#8e9cae] mb-0.5">
                  <span>Closed / Won</span>
                  <span className="text-[#ff2638] font-bold">$185,000</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-[#ff2638] w-[45%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: SLA Metrics */}
          <div className="bg-[#09121d] rounded-md px-2.5 py-1.5 border border-white/5 flex items-center justify-between text-[9.5px] sm:text-[10px]">
            <span className="text-[#8e9cae]">Enterprise SLA:</span>
            <span className="font-mono text-[#00ff9d] flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> 99.98% System Uptime
            </span>
          </div>
        </div>
      );

    default:
      return null;
  }
};

