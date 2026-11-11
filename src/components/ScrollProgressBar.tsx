import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Smooth out the scroll progress using spring physics for buttery visual feedback
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[110] pointer-events-none h-[2.5px]">
      {/* Background track (subtle dark line) */}
      <div className="absolute inset-0 bg-white/[0.04]" />

      {/* Animated Red Fill Bar */}
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="h-full w-full bg-gradient-to-r from-[#e01f30] via-[#ff2638] to-[#ff4d5e] shadow-[0_0_12px_rgba(255,38,56,0.85),0_0_6px_rgba(255,38,56,0.5)]"
      />
    </div>
  );
};
