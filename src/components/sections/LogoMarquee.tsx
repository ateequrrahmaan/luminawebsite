'use client';

import { motion } from 'framer-motion';

const logos = [
  "COMPANY", "AGENCY", "STUDIO", "TECH", "DESIGN", "MODERN", "LUMINA", "CREATIVE"
];

export function LogoMarquee() {
  return (
    <section className="py-8 border-y border-border overflow-hidden bg-background/30 backdrop-blur-md relative">
      {/* Gradient masks for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent z-10" />

      <div className="flex whitespace-nowrap overflow-hidden group">
        {/* We use a CSS animation for the marquee for better performance and easy pausing */}
        <div className="flex space-x-24 items-center animate-marquee group-hover:[animation-play-state:paused] pr-24">
          {/* First set of logos */}
          {logos.map((logo, i) => (
            <motion.span 
              key={`l1-${i}`} 
              whileHover={{ scale: 1.1, color: "var(--color-primary)" }}
              className="text-2xl md:text-4xl font-black text-foreground/15 transition-all duration-300 cursor-pointer select-none tracking-tighter hover:opacity-100"
            >
              {logo}
            </motion.span>
          ))}
          {/* Second set for infinite loop */}
          {logos.map((logo, i) => (
            <motion.span 
              key={`l2-${i}`} 
              whileHover={{ scale: 1.1, color: "var(--color-primary)" }}
              className="text-2xl md:text-4xl font-black text-foreground/15 transition-all duration-300 cursor-pointer select-none tracking-tighter hover:opacity-100"
            >
              {logo}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
