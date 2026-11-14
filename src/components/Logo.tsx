import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const heights = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11 lg:h-12',
    lg: 'h-12 sm:h-14 lg:h-16',
  };

  const textSizes = {
    sm: {
      brand: 'text-[13px] sm:text-[14px]',
      sub: 'text-[10px] sm:text-[11px] mt-[1.5px]',
    },
    md: {
      brand: 'text-[15px] sm:text-[17px] lg:text-[18px]',
      sub: 'text-[11.5px] sm:text-[13px] lg:text-[13.5px] mt-[2px]',
    },
    lg: {
      brand: 'text-[18px] sm:text-[20px] lg:text-[22px]',
      sub: 'text-[13px] sm:text-[15px] lg:text-[16px] mt-[2.5px]',
    },
  };

  return (
    <div className={`flex items-center gap-3 select-none ${heights[size]} ${className}`}>
      {/* Crisp Vector BD Monogram */}
      <svg
        viewBox="0 0 100 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto shrink-0 filter drop-shadow-[0_0_14px_rgba(255,38,56,0.5)]"
      >
        {/* Left White B Shape */}
        <path
          d="M12 12 H42 C54 12 62 18 62 28 C62 35 57 40 48 42 C59 44 65 51 65 60 C65 70 55 76 42 76 H12 Z"
          fill="#FFFFFF"
        />
        {/* Cutouts in B */}
        <path
          d="M26 24 H39 C44 24 48 26 48 30 C48 34 44 36 39 36 H26 Z"
          fill="#070e17"
        />
        <path
          d="M26 48 H41 C47 48 51 51 51 56 C51 61 47 64 41 64 H26 Z"
          fill="#070e17"
        />

        {/* Right Red Interlocking D Shape */}
        <path
          d="M48 12 H62 C78 12 90 24 90 44 C90 64 78 76 62 76 H48 V64 H60 C71 64 76 55 76 44 C76 33 71 24 60 24 H48 Z"
          fill="#FF2638"
        />
      </svg>

      {/* Stacked Wordmark: BLOODY DEVELOPER */}
      <div className="flex flex-col justify-center leading-none">
        <span className={`${textSizes[size].brand} font-black tracking-[0.14em] text-white uppercase font-sans`}>
          BLOODY
        </span>
        <span className={`${textSizes[size].sub} font-extrabold tracking-[0.24em] text-[#e1e7ef] uppercase font-sans`}>
          DEVELOPER
        </span>
      </div>
    </div>
  );
};
