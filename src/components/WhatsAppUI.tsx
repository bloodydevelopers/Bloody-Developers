import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, MessageSquare, ChevronDown } from 'lucide-react';

export const WHATSAPP_NUMBERS = [
  {
    id: 'whatsapp-1',
    number: '8917323361',
    display: '+91 8917323361',
    label: 'Sales & Custom Engineering',
    url: 'https://wa.me/918917323361?text=Hello%20Bloody%20Developer%2C%20I%20would%20like%20to%20inquire%20about%20your%20software%20solutions.',
  },
  {
    id: 'whatsapp-2',
    number: '7684047069',
    display: '+91 7684047069',
    label: 'Solutions & Support',
    url: 'https://wa.me/917684047069?text=Hello%20Bloody%20Developer%2C%20I%20would%20like%20to%20inquire%20about%20your%20software%20solutions.',
  },
];

export const WhatsAppIcon: React.FC<{ className?: string }> = ({
  className = 'w-4 h-4',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface NavbarWhatsAppProps {
  isScrolled?: boolean;
}

export const NavbarWhatsApp: React.FC<NavbarWhatsAppProps> = ({ isScrolled = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative inline-block">
      {/* Desktop WhatsApp Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`hidden sm:inline-flex items-center gap-2 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 hover:border-[#25D366]/70 text-[#25D366] hover:text-white pl-2 pr-3.5 py-1.5 rounded-full text-[12.5px] lg:text-[13px] font-bold transition-all duration-200 cursor-pointer shadow-[0_0_15px_rgba(37,211,102,0.25)] hover:shadow-[0_0_24px_rgba(37,211,102,0.5)] active:scale-97 select-none ${isScrolled ? 'scale-[0.96]' : 'scale-100'
          }`}
        title="Chat on WhatsApp"
        aria-expanded={isOpen}
      >
        <span className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-[0_0_10px_rgba(37,211,102,0.6)]">
          <WhatsAppIcon className="w-3.5 h-3.5" />
        </span>
        <span className="tracking-wide">WhatsApp</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-white' : 'text-[#25D366]'
            }`}
        />
      </button>

      {/* Mobile WhatsApp Icon Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`sm:hidden flex items-center justify-center bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 rounded-xl transition-all duration-200 cursor-pointer active:scale-95 shadow-[0_0_12px_rgba(37,211,102,0.3)] ${isScrolled ? 'min-w-[38px] min-h-[38px]' : 'min-w-[42px] min-h-[42px]'
          }`}
        aria-label="Chat on WhatsApp"
        aria-expanded={isOpen}
      >
        <span className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_0_8px_rgba(37,211,102,0.6)]">
          <WhatsAppIcon className="w-4 h-4" />
        </span>
      </button>

      {/* WhatsApp Dropdown Popover */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2.5 w-[280px] xs:w-[300px] bg-[#091420] border border-[#25D366]/40 rounded-2xl p-3 shadow-[0_18px_45px_rgba(0,0,0,0.9),0_0_25px_rgba(37,211,102,0.25)] z-[100] animate-in fade-in zoom-in-95 duration-150">
          <div className="px-2 py-1.5 border-b border-white/8 mb-2 flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#25D366] uppercase tracking-wider flex items-center gap-1.5">
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Connect on WhatsApp</span>
            </span>
            <span className="text-[10px] text-white/50">Online</span>
          </div>

          <div className="space-y-1.5">
            {WHATSAPP_NUMBERS.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/4 hover:bg-[#25D366]/15 border border-white/6 hover:border-[#25D366]/40 transition-all duration-150 group"
              >
                <div>
                  <div className="text-[13px] font-bold text-white group-hover:text-[#25D366] transition-colors flex items-center gap-1.5">
                    <span>{item.display}</span>
                  </div>
                  <div className="text-[10.5px] text-[#8e9cae] mt-0.5">
                    {item.label}
                  </div>
                </div>
                <div className="w-7 h-7 rounded-lg bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-2.5 pt-2 border-t border-white/6 px-2 text-[10px] text-center text-[#8e9cae]">
            Typically responds in under 15 minutes
          </div>
        </div>
      )}
    </div>
  );
};
