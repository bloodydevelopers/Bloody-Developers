import React from 'react';
import {
  Users,
  Coffee,
  CheckSquare,
  GraduationCap,
  ShoppingCart,
  Store,
  Layers,
  TrendingUp,
  Clock,
  ShieldCheck,
  Activity,
  CheckCircle2,
} from 'lucide-react';

interface LaptopMockupProps {
  productId: string;
  title: string;
}

export const LaptopMockup: React.FC<LaptopMockupProps> = ({ productId }) => {
  // Render high-fidelity, razor-sharp vector UI tailored to each product
  const renderScreenContent = () => {
    switch (productId) {
      case 'attendance':
        return (
          <div className="w-full h-full bg-[#0a121d] text-white p-2.5 flex flex-col justify-between font-sans">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#00e599]" />
                <span className="text-[9px] font-bold text-white tracking-wide">ATTENDANCE HUB</span>
              </div>
              <span className="text-[8px] text-[#8e9cae]">Today · 99.4% Present</span>
            </div>

            {/* Dashboard Body */}
            <div className="grid grid-cols-12 gap-2 my-auto">
              {/* Circular Gauge */}
              <div className="col-span-5 bg-[#0e1a29] rounded border border-white/10 p-1.5 flex flex-col items-center justify-center">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#182c42" strokeWidth="3" />
                    <circle
                      cx="18"
                      cy="18"
                      r="14"
                      fill="none"
                      stroke="#ff2638"
                      strokeWidth="3"
                      strokeDasharray="88 100"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute text-[8px] font-extrabold text-white">99%</span>
                </div>
                <span className="text-[7px] text-[#8e9cae] mt-0.5">On Time</span>
              </div>

              {/* Bar Chart Metrics */}
              <div className="col-span-7 bg-[#0e1a29] rounded border border-white/10 p-1.5 flex flex-col justify-between">
                <span className="text-[7.5px] font-semibold text-[#8e9cae]">Weekly Shifts</span>
                <div className="flex items-end justify-between gap-1 h-7 pt-1">
                  {[40, 75, 60, 95, 85, 70, 90].map((val, i) => (
                    <div key={i} className="flex-1 bg-[#16273b] rounded-t-sm h-full flex items-end">
                      <div
                        className="w-full rounded-t-sm transition-all"
                        style={{
                          height: `${val}%`,
                          backgroundColor: i === 4 ? '#ff2638' : '#2b5886',
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Status Ticker */}
            <div className="flex items-center justify-between text-[7px] text-[#8e9cae] pt-1 border-t border-white/5">
              <span className="flex items-center gap-1">
                <Users className="w-2.5 h-2.5 text-[#ff2638]" /> 248 Active Staff
              </span>
              <span className="text-[#00e599] font-medium">0 Unexcused</span>
            </div>
          </div>
        );

      case 'cafe':
        return (
          <div className="w-full h-full bg-[#0a121d] text-white p-2.5 flex flex-col justify-between font-sans">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
              <div className="flex items-center gap-1.5">
                <Coffee className="w-2.5 h-2.5 text-[#ff2638]" />
                <span className="text-[9px] font-bold text-white tracking-wide">CAFÉ POS LIVE</span>
              </div>
              <span className="text-[8px] font-bold text-[#ff2638]">₹3,420.50</span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 my-auto">
              {['Espresso', 'Croissant', 'Pour Over'].map((item, idx) => (
                <div key={item} className="bg-[#0e1a29] border border-white/10 rounded p-1 text-center">
                  <div className="w-5 h-5 mx-auto rounded-full bg-[#ff2638]/15 flex items-center justify-center mb-0.5">
                    <Coffee className="w-2.5 h-2.5 text-[#ff2638]" />
                  </div>
                  <span className="text-[7.5px] font-bold block text-white/90 truncate">{item}</span>
                  <span className="text-[6.5px] text-[#8e9cae]">
                    {idx === 0 ? '₹180' : idx === 1 ? '₹140' : '₹220'}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-[7px] text-[#8e9cae] pt-1 border-t border-white/5">
              <span>Orders: 142 Completed</span>
              <span className="text-[#00e599]">Avg Time: 1.8 min</span>
            </div>
          </div>
        );

      case 'task':
        return (
          <div className="w-full h-full bg-[#0a121d] text-white p-2.5 flex flex-col justify-between font-sans">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
              <div className="flex items-center gap-1.5">
                <CheckSquare className="w-2.5 h-2.5 text-[#ff2638]" />
                <span className="text-[9px] font-bold text-white tracking-wide">SPRINT 24 KANBAN</span>
              </div>
              <span className="text-[8px] text-[#00e599] font-medium">82% Completed</span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 my-auto">
              <div className="bg-[#0e1a29] rounded border border-white/10 p-1">
                <div className="text-[6.5px] font-bold uppercase text-[#8e9cae] mb-1">To Do</div>
                <div className="bg-[#142337] p-1 rounded text-[7px] text-white font-medium border-l-2 border-[#2b5886]">
                  Auth Flow API
                </div>
              </div>
              <div className="bg-[#0e1a29] rounded border border-white/10 p-1">
                <div className="text-[6.5px] font-bold uppercase text-[#ff2638] mb-1">In Dev</div>
                <div className="bg-[#142337] p-1 rounded text-[7px] text-white font-medium border-l-2 border-[#ff2638]">
                  Stripe Payouts
                </div>
              </div>
              <div className="bg-[#0e1a29] rounded border border-white/10 p-1">
                <div className="text-[6.5px] font-bold uppercase text-[#00e599] mb-1">Done</div>
                <div className="bg-[#142337] p-1 rounded text-[7px] text-white font-medium border-l-2 border-[#00e599]">
                  KDS Realtime
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[7px] text-[#8e9cae] pt-1 border-t border-white/5">
              <span>Velocity: +42%</span>
              <span className="text-white/80 font-medium">18 Assignees</span>
            </div>
          </div>
        );

      case 'school':
        return (
          <div className="w-full h-full bg-[#0a121d] text-white p-2.5 flex flex-col justify-between font-sans">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-2.5 h-2.5 text-[#ff2638]" />
                <span className="text-[9px] font-bold text-white tracking-wide">ACADEMY ERP</span>
              </div>
              <span className="text-[8px] text-[#8e9cae]">Semester Fall 2026</span>
            </div>

            <div className="grid grid-cols-12 gap-1.5 my-auto">
              <div className="col-span-6 bg-[#0e1a29] rounded border border-white/10 p-1.5 flex flex-col justify-between">
                <span className="text-[7px] text-[#8e9cae]">Students Enrolled</span>
                <span className="text-[12px] font-black text-white">1,420</span>
                <span className="text-[6.5px] text-[#00e599]">+8% this term</span>
              </div>
              <div className="col-span-6 bg-[#0e1a29] rounded border border-white/10 p-1.5 flex flex-col justify-between">
                <span className="text-[7px] text-[#8e9cae]">Tuition Collection</span>
                <span className="text-[12px] font-black text-[#ff2638]">98.6%</span>
                <span className="text-[6.5px] text-[#8e9cae]">Auto-invoicing on</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[7px] text-[#8e9cae] pt-1 border-t border-white/5">
              <span>Faculty: 84 Staff</span>
              <span className="text-white/80">GPA Avg: 3.82</span>
            </div>
          </div>
        );

      case 'single-vendor':
        return (
          <div className="w-full h-full bg-[#0a121d] text-white p-2.5 flex flex-col justify-between font-sans">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
              <div className="flex items-center gap-1.5">
                <ShoppingCart className="w-2.5 h-2.5 text-[#ff2638]" />
                <span className="text-[9px] font-bold text-white tracking-wide">STORE CONSOLE</span>
              </div>
              <span className="text-[8px] text-[#00e599] font-bold">+18.4% Sales</span>
            </div>

            <div className="bg-[#0e1a29] rounded border border-white/10 p-1.5 my-auto">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[7px] text-[#8e9cae]">30-Day Revenue</span>
                <span className="text-[9px] font-black text-white">₹48,250</span>
              </div>
              <svg className="w-full h-6" viewBox="0 0 100 24" fill="none">
                <path
                  d="M0 20 Q 25 14, 50 16 T 100 4 L 100 24 L 0 24 Z"
                  fill="url(#grad-store)"
                  opacity="0.4"
                />
                <path
                  d="M0 20 Q 25 14, 50 16 T 100 4"
                  stroke="#ff2638"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="grad-store" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ff2638" />
                    <stop offset="100%" stopColor="#ff2638" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="flex items-center justify-between text-[7px] text-[#8e9cae] pt-1 border-t border-white/5">
              <span>Orders: 684 this week</span>
              <span className="text-white/80">Cart Conv: 4.8%</span>
            </div>
          </div>
        );

      case 'multi-vendor':
        return (
          <div className="w-full h-full bg-[#0a121d] text-white p-2.5 flex flex-col justify-between font-sans">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
              <div className="flex items-center gap-1.5">
                <Store className="w-2.5 h-2.5 text-[#ff2638]" />
                <span className="text-[9px] font-bold text-white tracking-wide">MARKETPLACE ADMIN</span>
              </div>
              <span className="text-[8px] text-[#8e9cae]">38 Active Vendors</span>
            </div>

            <div className="grid grid-cols-3 gap-1 my-auto">
              {['TechStore', 'UrbanStyle', 'GearPro'].map((seller) => (
                <div key={seller} className="bg-[#0e1a29] rounded border border-white/10 p-1">
                  <span className="text-[7px] font-bold text-white block truncate">{seller}</span>
                  <div className="flex items-center justify-between text-[6.5px] text-[#8e9cae] mt-1">
                    <span>Vol</span>
                    <span className="text-[#00e599] font-medium">₹12k</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-[7px] text-[#8e9cae] pt-1 border-t border-white/5">
              <span>Escrow: Protected</span>
              <span className="text-[#ff2638] font-bold">Payouts Auto</span>
            </div>
          </div>
        );

      case 'crm-erp':
      default:
        return (
          <div className="w-full h-full bg-[#0a121d] text-white p-2.5 flex flex-col justify-between font-sans">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
              <div className="flex items-center gap-1.5">
                <Layers className="w-2.5 h-2.5 text-[#ff2638]" />
                <span className="text-[9px] font-bold text-white tracking-wide">ENTERPRISE CRM</span>
              </div>
              <span className="text-[8px] text-[#00e599] font-semibold">94% SLA Met</span>
            </div>

            <div className="grid grid-cols-12 gap-1.5 my-auto">
              <div className="col-span-7 bg-[#0e1a29] rounded border border-white/10 p-1.5">
                <div className="text-[7px] text-[#8e9cae] mb-1">Pipeline Deals</div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[6.5px]">
                    <span className="text-white/80">Enterprise Tier</span>
                    <span className="text-[#ff2638] font-bold">₹120k</span>
                  </div>
                  <div className="w-full h-1 bg-[#16273b] rounded-full overflow-hidden">
                    <div className="h-full bg-[#ff2638] w-[75%]" />
                  </div>
                </div>
              </div>

              <div className="col-span-5 bg-[#0e1a29] rounded border border-white/10 p-1.5 flex flex-col justify-between text-center">
                <span className="text-[6.5px] text-[#8e9cae]">Health</span>
                <span className="text-[11px] font-black text-[#00e599]">99.8%</span>
                <span className="text-[6px] text-white/60">Cloud Sync</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[7px] text-[#8e9cae] pt-1 border-t border-white/5">
              <span>Workflows: 48 Active</span>
              <span className="text-white/80">Audit: Passed</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative w-full h-[115px] sm:h-[125px] xl:h-[140px] flex items-center justify-center p-1 select-none">
      {/* High-Resolution Angled Laptop Mockup Housing */}
      <div className="relative w-full max-w-[270px] flex flex-col items-center">
        {/* Ambient Underglow */}
        <div className="absolute -bottom-2 w-3/4 h-3 bg-[#ff2638]/25 rounded-full blur-md pointer-events-none" />

        {/* Laptop Display Lid */}
        <div className="relative w-full aspect-[16/10] bg-[#111923] rounded-t-lg p-[3px] border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
          {/* Top Notch & Camera Lens */}
          <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-4 h-[3px] bg-[#070e17] rounded-b flex items-center justify-center z-20">
            <div className="w-1 h-1 rounded-full bg-[#1e2f42] border border-[#3b5370]" />
          </div>

          {/* Screen Bezel & Display Content */}
          <div className="relative w-full h-full rounded bg-[#070e17] overflow-hidden border border-white/8">
            {/* Screen Content */}
            {renderScreenContent()}

            {/* Glass Glare Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Laptop Base (Keyboard Chassis) */}
        <div className="relative w-[104%] h-[6px] bg-gradient-to-b from-[#243447] via-[#1a2636] to-[#0f1722] rounded-b-md border-t border-white/30 shadow-[0_2px_8px_rgba(0,0,0,0.9)] flex items-center justify-center">
          {/* Thumb Opening Notch */}
          <div className="w-8 h-[2px] bg-[#070e17] rounded-b" />
        </div>
      </div>
    </div>
  );
};
